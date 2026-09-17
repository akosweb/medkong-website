'use client';

import { useEffect, useRef, useState } from 'react';
import { MedkongMark } from '@/components/shared/MedkongMark';
import { sx } from '@/lib/css';
import { SITE_NAV, type NavLink } from '@/lib/nav';

export type SiteHeaderProps = {
  /** Pathname of the current page, used to mark the active main-nav link (e.g. "/", "/contact"). */
  currentPath?: string;
  /** In-page section links, rendered as a second row under the main bar. */
  sections?: NavLink[];
  /** Label on the header button and the mobile menu's full-width button. */
  ctaLabel: string;
  /** Runs when either CTA is pressed — open a dialog, scroll to a form, etc. */
  onCta: () => void;
  /** One-line tagline under the mobile menu's CTA. */
  tagline: string;
};

function Wordmark({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  return (
    // Plain anchors, not <Link>: pages are full loads on purpose, so GA's
    // default page_view fires and no route-change tracking is needed.
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a
      href="/"
      aria-label="MEDKONG home"
      style={sx(
        'display:inline-flex;align-items:center;gap:11px;font-weight:600;font-size:20px;letter-spacing:-0.02em;color:inherit'
      )}
    >
      <MedkongMark height={30} tone={tone} />
      <span style={sx('letter-spacing:0.01em')}>
        <span style={sx(`color:${tone === 'dark' ? '#5FBFA6' : '#0A5A4B'}`)}>MED</span>
        <span style={sx(`color:${tone === 'dark' ? '#fff' : '#0E1512'}`)}>KONG</span>
      </span>
    </a>
  );
}

/**
 * Tracks which in-page section is on screen so the section row can mark it.
 * The active section is the last one whose top has passed the header.
 */
function useActiveSection(sections: NavLink[] | undefined) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!sections?.length) return;
    const ids = sections.map((s) => s.href.slice(1));

    const onScroll = () => {
      const header = document.getElementById('mk-header');
      const line = (header?.offsetHeight ?? 0) + 24;
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [sections]);

  return active;
}

/**
 * The sticky site header: wordmark, the same main nav on every page (For
 * Providers · For MACs · Contact), the CTA button, and an optional "On this
 * page" row of section links with scroll-spy. Below 1020px both nav groups
 * move into a full-screen hamburger menu on the ink ground.
 *
 * `currentPath` is a prop rather than `usePathname()` so the component has no
 * dependency on next/navigation — the design-system package re-exports it
 * as-is. Pages use `SiteHeader` from `./SiteHeaderClient`, which supplies it.
 */
export function SiteHeader({ currentPath = '/', sections, ctaLabel, onCta, tagline }: SiteHeaderProps) {
  const pathname = currentPath;
  const active = useActiveSection(sections);
  const [menuOpen, setMenuOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Lock the page behind the menu, close on Escape, and hand focus over and back.
  useEffect(() => {
    if (!menuOpen) return;

    // The burger outlives the menu, so it's safe to hold onto for focus return.
    const burger = burgerRef.current;

    document.body.classList.add('mk-menu-open');
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);

    return () => {
      document.body.classList.remove('mk-menu-open');
      document.removeEventListener('keydown', onKey);
      // preventScroll: returning focus must not yank the page back up when the
      // menu closed because a link was followed.
      burger?.focus({ preventScroll: true });
    };
  }, [menuOpen]);

  // The menu collapses back into the desktop bar above 1020px.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1021px)');
    const onChange = () => mq.matches && setMenuOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  /**
   * The menu is `position:fixed`, so the target's offset is already correct —
   * but the scroll lock has to come off first, and the effect that removes it
   * doesn't run until after paint. Drop it here; the cleanup is idempotent.
   */
  const goToSection = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setMenuOpen(false);
    document.body.classList.remove('mk-menu-open');

    document.getElementById(href.slice(1))?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  const isCurrent = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <>
      <div
        id="mk-header"
        style={sx(
          'position:sticky;top:0;z-index:40;background:rgba(255,255,255,.92);backdrop-filter:blur(10px);border-bottom:1px solid #E6EAE5'
        )}
      >
        <div
          style={sx(
            'max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px);height:68px;display:flex;align-items:center;gap:34px'
          )}
        >
          <Wordmark />

          <nav
            className="mknav"
            aria-label="Site"
            style={sx('display:flex;align-items:center;gap:26px;margin-left:12px;font-size:14.5px;color:#3A443E')}
          >
            {SITE_NAV.map((link) => {
              const on = isCurrent(link.href);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={on ? 'page' : undefined}
                  style={sx(on ? 'color:#0A5A4B;font-weight:600' : 'color:inherit')}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <span style={sx('margin-left:auto;display:flex;align-items:center;gap:12px')}>
            <button
              type="button"
              className="mkcta"
              onClick={onCta}
              style={sx(
                'display:inline-flex;align-items:center;height:40px;padding:0 20px;border:0;border-radius:8px;background:#0A5A4B;color:#fff;font-weight:600;font-size:14.5px;cursor:pointer;transition:background .18s ease'
              )}
            >
              {ctaLabel}
            </button>

            <button
              ref={burgerRef}
              type="button"
              className="mk-burger"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              style={sx(
                'align-items:center;justify-content:center;width:40px;height:40px;flex:none;border:1px solid #DDE2DC;border-radius:8px;background:#fff;cursor:pointer;padding:0'
              )}
            >
              <span style={sx('display:grid;gap:4px')}>
                {[0, 1, 2].map((i) => (
                  <span key={i} style={sx('display:block;width:16px;height:1.5px;background:#0E1512')} />
                ))}
              </span>
            </button>
          </span>
        </div>

        {sections?.length ? (
          <nav
            className="mk-subnav"
            aria-label="On this page"
            style={sx('border-top:1px solid #EEF1ED;background:#fff')}
          >
            <div
              style={sx(
                'max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px);height:44px;display:flex;align-items:stretch;gap:4px;overflow-x:auto'
              )}
            >
              <span
                className="mk-subnav-label"
                style={sx(
                  "align-self:center;margin-right:14px;font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.13em;text-transform:uppercase;color:#6B736C;white-space:nowrap"
                )}
              >
                On this page
              </span>
              {sections.map((s) => {
                const on = active === s.href.slice(1);
                return (
                  <a
                    key={s.href}
                    href={s.href}
                    aria-current={on ? 'location' : undefined}
                    style={sx(
                      `display:inline-flex;align-items:center;padding:0 12px;margin-bottom:-1px;border-bottom:2px solid ${
                        on ? '#0A5A4B' : 'transparent'
                      };font-size:13.5px;font-weight:500;white-space:nowrap;color:${on ? '#0A5A4B' : '#3A443E'};transition:color .16s ease`
                    )}
                  >
                    {s.label}
                  </a>
                );
              })}
            </div>
          </nav>
        ) : null}
      </div>

      {menuOpen ? (
        <div className="mk-menu" role="dialog" aria-modal="true" aria-label="Menu">
          <div
            style={sx(
              'display:flex;align-items:center;justify-content:space-between;gap:16px;height:68px;flex:none'
            )}
          >
            <Wordmark tone="dark" />
            <button
              ref={closeRef}
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={sx(
                'display:grid;place-items:center;width:40px;height:40px;flex:none;border:1px solid rgba(255,255,255,.22);border-radius:8px;background:transparent;color:#fff;font-size:20px;line-height:1;cursor:pointer'
              )}
            >
              ×
            </button>
          </div>

          <nav aria-label="Site" style={sx('margin-top:clamp(16px,5vw,40px)')}>
            {SITE_NAV.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mk-menu-link"
                aria-current={isCurrent(link.href) ? 'page' : undefined}
                style={sx(isCurrent(link.href) ? 'color:#5FBFA6' : '')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {sections?.length ? (
            <nav aria-label="On this page" style={sx('margin-top:28px')}>
              <span
                style={sx(
                  "display:block;font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.13em;text-transform:uppercase;color:#7E877F"
                )}
              >
                On this page
              </span>
              <div style={sx('display:flex;flex-wrap:wrap;gap:8px;margin-top:14px')}>
                {sections.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    className="mk-menu-sub"
                    onClick={(e) => goToSection(e, s.href)}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </nav>
          ) : null}

          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              onCta();
            }}
            style={sx(
              'margin-top:auto;display:inline-flex;align-items:center;justify-content:center;width:100%;height:56px;border:0;border-radius:10px;background:#fff;color:#0E1512;font-weight:600;font-size:16.5px;cursor:pointer'
            )}
          >
            {ctaLabel}
          </button>

          <span
            style={sx(
              "margin-top:18px;font:400 11.5px/1.5 'IBM Plex Mono',monospace;color:#7E877F;text-align:center"
            )}
          >
            {tagline}
          </span>
        </div>
      ) : null}
    </>
  );
}
