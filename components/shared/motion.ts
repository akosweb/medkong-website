'use client';

import { useCallback, useEffect, useLayoutEffect } from 'react';

/**
 * useLayoutEffect runs before the browser paints, which is what keeps the
 * entrance classes from landing a frame late. It's a no-op during SSR, so fall
 * back to useEffect there to avoid React's server warning.
 */
const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

/**
 * Page-level behaviour that applies to whole pages rather than to any one
 * section. These hooks work against the rendered DOM instead of wrapping
 * components, so the section files stay a clean transcription of the design
 * source — and so nothing is hidden unless script is actually running.
 */

const REDUCED = '(prefers-reduced-motion: reduce)';

function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia(REDUCED).matches;
}

/** Product mockups, the header and the dialog animate on their own terms. */
const MOTION_EXCLUDE = '.mkscale, #mk-header, .mk-menu, [role="dialog"], pre, .mkguide-toc';

const HEADLINE_SELECTOR = 'h1, h2';
const FADE_SELECTOR = 'h3, h4, p, .mkcard';

/** How long a headline's skeleton shimmers before the wipe starts. */
const SKELETON_MS = 520;
/** Duration of the wipe itself — keep in step with `--mk-wipe` in globals.css. */
const WIPE_MS = 620;
/** Per-element stagger within one batch of newly-visible elements. */
const STAGGER_MS = 90;

// ---------------------------------------------------------------- skeletons

/** True when the element's text is light, i.e. it sits on a dark band. */
function isOnDarkBand(el: HTMLElement): boolean {
  const m = /rgba?\(([^)]+)\)/.exec(getComputedStyle(el).color);
  if (!m) return false;
  const [r, g, b] = m[1].split(',').map((n) => parseFloat(n));
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.6;
}

/**
 * Puts a headline behind a skeleton that later wipes away to uncover it.
 *
 * The bars are measured from the element's own line boxes, so they line up with
 * however the headline happens to wrap at the current width. The text is moved
 * into a wrapper that starts fully clipped; on reveal the wrapper's clip opens
 * left to right while each bar collapses left to right at the same rate, so the
 * skeleton reads as the thing uncovering the words rather than as a separate
 * layer cross-fading out.
 *
 * The overlay is a sibling of the wrapper, not a child — a clip-path on the
 * wrapper would otherwise clip the bars along with the text.
 *
 * Returns a handle, or null when there's nothing to measure.
 */
function startSkeleton(el: HTMLElement): { reveal: () => void; finish: () => void } | null {
  const range = document.createRange();
  range.selectNodeContents(el);

  const host = el.getBoundingClientRect();
  const rects = Array.from(range.getClientRects()).filter((r) => r.width > 4 && r.height > 4);
  if (!rects.length) return null;

  // Client rects come per text run; merge the runs that share a line.
  type Line = { top: number; bottom: number; left: number; right: number };
  const lines: Line[] = [];
  for (const r of rects) {
    const line = lines.find((l) => Math.abs(l.top - r.top) < r.height * 0.5);
    if (line) {
      line.top = Math.min(line.top, r.top);
      line.bottom = Math.max(line.bottom, r.bottom);
      line.left = Math.min(line.left, r.left);
      line.right = Math.max(line.right, r.right);
    } else {
      lines.push({ top: r.top, bottom: r.bottom, left: r.left, right: r.right });
    }
  }

  const overlay = document.createElement('span');
  overlay.className = isOnDarkBand(el) ? 'mk-skel mk-skel-dark' : 'mk-skel';
  overlay.setAttribute('aria-hidden', 'true');

  for (const l of lines) {
    const lineHeight = l.bottom - l.top;
    const barHeight = Math.max(10, lineHeight * 0.62);
    const bar = document.createElement('span');
    bar.className = 'mk-skel-bar';
    bar.style.left = `${l.left - host.left}px`;
    bar.style.top = `${l.top - host.top + (lineHeight - barHeight) / 2}px`;
    bar.style.width = `${l.right - l.left}px`;
    bar.style.height = `${barHeight}px`;
    overlay.appendChild(bar);
  }

  // Move the text into a clipped wrapper, then put the bars beside it.
  const wrapper = document.createElement('span');
  wrapper.className = 'mk-skel-text';
  while (el.firstChild) wrapper.appendChild(el.firstChild);
  el.append(wrapper, overlay);

  return {
    reveal: () => el.classList.add('mk-skel-reveal'),
    finish: () => {
      overlay.remove();
      // Put the original nodes back so the DOM ends up as it started.
      while (wrapper.firstChild) el.insertBefore(wrapper.firstChild, wrapper);
      wrapper.remove();
      el.classList.remove('mk-skel-reveal', 'mk-skel-host');
    },
  };
}

/**
 * Headlines load in behind a skeleton; body copy and cards fade up. Both are
 * triggered the first time the element scrolls into view.
 */
export function usePageMotion(rootSelector: string) {
  useIsomorphicLayoutEffect(() => {
    const root = document.querySelector<HTMLElement>(rootSelector);
    if (!root) return;

    // Releases the pre-hydration hold in globals.css. Set it on every exit path
    // — if the hold is never lifted the content stays invisible.
    const release = () => root.classList.add('mk-motion-ready');

    if (prefersReducedMotion()) {
      release();
      return;
    }

    const inScope = (el: Element) => !el.closest(MOTION_EXCLUDE);
    const headlines = Array.from(root.querySelectorAll<HTMLElement>(HEADLINE_SELECTOR)).filter(
      (el) => inScope(el) && el.textContent?.trim()
    );
    const fades = Array.from(root.querySelectorAll<HTMLElement>(FADE_SELECTOR)).filter(
      (el) => inScope(el) && el.textContent?.trim()
    );

    const isHeadline = new Set<Element>(headlines);
    for (const el of headlines) el.classList.add('mk-reveal', 'mk-skel-host');
    for (const el of fades) el.classList.add('mk-reveal');

    // Every target now carries .mk-reveal, so handing over from the CSS hold
    // to the classes is invisible — both states are "hidden".
    release();

    const timers: ReturnType<typeof setTimeout>[] = [];
    const pending: Array<{ finish: () => void }> = [];
    const after = (ms: number, fn: () => void) => timers.push(setTimeout(fn, ms));

    const observer = new IntersectionObserver(
      (entries) => {
        let index = 0;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          observer.unobserve(el);
          const delay = index++ * STAGGER_MS;

          const skeleton = isHeadline.has(el) ? startSkeleton(el) : null;
          if (!skeleton) {
            after(delay, () => el.classList.add('mk-reveal-in'));
            continue;
          }

          pending.push(skeleton);

          // The text is clipped now, so the element itself can be made visible
          // immediately — only the bars show until the wipe runs.
          el.classList.remove('mk-reveal');

          after(SKELETON_MS + delay, () => {
            skeleton.reveal();
            after(WIPE_MS, skeleton.finish);
          });
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.01 }
    );

    for (const el of [...headlines, ...fades]) observer.observe(el);

    return () => {
      observer.disconnect();
      for (const t of timers) clearTimeout(t);
      for (const s of pending) s.finish();
      for (const el of [...headlines, ...fades]) {
        el.classList.remove('mk-reveal', 'mk-reveal-in', 'mk-skel-host', 'mk-skel-reveal');
      }
      root.classList.remove('mk-motion-ready');
    };
  }, [rootSelector]);
}

// --------------------------------------------------------------- mock scale

/**
 * Scales a `.mkscale` frame's fixed-width child down to fit the column it sits
 * in, then sets the frame's height to match.
 *
 * Product mockups are authored at a fixed pixel width and shrunk to fit — the
 * design system's rule is "scaling, not reflowing", so a phone shows the same
 * dashboard, just smaller.
 */
export function useScaleToFit(deps: unknown[] = []) {
  const fit = useCallback(() => {
    document.querySelectorAll<HTMLElement>('.mkscale').forEach((frame) => {
      const inner = frame.firstElementChild as HTMLElement | null;
      if (!inner) return;
      const designWidth = parseFloat(frame.dataset.scale || '') || 1200;
      const max = parseFloat(frame.dataset.scaleMax || '') || 1.25;
      // The floor only guards against a zero-width column mid-layout; it must
      // stay low enough that a narrow phone still fits the whole mock.
      const scale = Math.max(0.12, Math.min(max, (frame.clientWidth - 8) / designWidth));
      inner.style.width = `${designWidth}px`;
      inner.style.transform = `scale(${scale})`;
      frame.style.height = `${inner.offsetHeight * scale + 18}px`;
    });
  }, []);

  useEffect(() => {
    fit();
    const ro = new ResizeObserver(() => fit());
    document.querySelectorAll<HTMLElement>('.mkscale').forEach((f) => ro.observe(f.parentElement || f));
    window.addEventListener('resize', fit);

    // Fonts land after first paint and change the measured height.
    const timer = setTimeout(fit, 350);
    if (document.fonts?.ready) void document.fonts.ready.then(fit);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', fit);
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fit, ...deps]);

  return fit;
}

// ------------------------------------------------------------- auto-scroll

/** Time between slides. */
const RAIL_INTERVAL_MS = 4000;
/** How long a rail stays put after the visitor touches it. */
const RAIL_RESUME_MS = 7000;

/**
 * Below 1020px the card grids become horizontal, snap-scrolling rails (see
 * `.mkrail` in globals.css). This advances them like a slideshow and backs off
 * as soon as anyone interacts, resuming once they've been left alone.
 */
export function useAutoScrollRails(rootSelector: string) {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(rootSelector);
    if (!root || prefersReducedMotion()) return;

    /**
     * Hover only pauses on devices that actually have a pointer. On a touch
     * screen a tap can emit a synthetic `mouseenter` with no `mouseleave` ever
     * following, which would wedge the rail paused forever.
     */
    const hoverCapable = window.matchMedia('(hover: hover)').matches;

    const rails = Array.from(root.querySelectorAll<HTMLElement>('.mkrail'));
    const teardown = rails.map((rail) => {
      let hovering = false;
      let pausedUntil = 0;
      let visible = false;

      const hold = () => {
        pausedUntil = Date.now() + RAIL_RESUME_MS;
      };
      const onEnter = () => {
        hovering = true;
      };
      const onLeave = () => {
        hovering = false;
      };

      // Any sign of intent — touch, drag, wheel, keyboard, focus — pauses it.
      const holdEvents = ['pointerdown', 'touchstart', 'wheel', 'keydown', 'focusin'] as const;
      for (const type of holdEvents) rail.addEventListener(type, hold, { passive: true });
      if (hoverCapable) {
        rail.addEventListener('mouseenter', onEnter);
        rail.addEventListener('mouseleave', onLeave);
      }

      const io = new IntersectionObserver(
        ([entry]) => {
          visible = entry.isIntersecting;
        },
        { threshold: 0.25 }
      );
      io.observe(rail);

      const tick = setInterval(() => {
        // Only horizontal at mobile widths; a wrapped grid has nothing to do.
        const scrollable = rail.scrollWidth - rail.clientWidth > 8;
        if (!scrollable || !visible || hovering || Date.now() < pausedUntil) return;

        // Positions must be in the rail's own scroll space. `offsetLeft` is
        // relative to the offset parent, which here includes the page gutter.
        const railLeft = rail.getBoundingClientRect().left;
        const positions = Array.from(rail.children, (slide) =>
          Math.round(slide.getBoundingClientRect().left - railLeft + rail.scrollLeft)
        );

        const next = positions.find((left) => left > rail.scrollLeft + 8);
        const atEnd = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 8;

        rail.scrollTo({ left: atEnd || next === undefined ? 0 : next, behavior: 'smooth' });
      }, RAIL_INTERVAL_MS);

      return () => {
        clearInterval(tick);
        io.disconnect();
        for (const type of holdEvents) rail.removeEventListener(type, hold);
        if (hoverCapable) {
          rail.removeEventListener('mouseenter', onEnter);
          rail.removeEventListener('mouseleave', onLeave);
        }
      };
    });

    return () => teardown.forEach((fn) => fn());
  }, [rootSelector]);
}

// ----------------------------------------------------------- in-page links

/**
 * Scrolls to in-page targets without writing `#section` into the address bar.
 * The `href` stays in the markup so the links still work without script and
 * still read as links to assistive tech.
 */
export function useSmoothAnchors() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = (event.target as Element | null)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link) return;

      const id = link.getAttribute('href')?.slice(1);
      if (!id) return;

      const target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        block: 'start',
      });
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
}
