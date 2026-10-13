'use client';

import { useEffect, useRef } from 'react';
import { sx } from '@/lib/css';
import { MODULES } from '@/lib/landing-data';
import { REVIEWER, WHAT_IT_IS } from '@/lib/manifesto-data';

/*
 * The rulebook diagram: the eight provider modules fan in from the left, the
 * seven MAC review gates from the right, and every line collapses into the
 * one rulebook in the middle.
 *
 * Motion (§13): the lines draw in toward the centre once, on scroll into
 * view. Then cases flow, in the same operational register as the mock
 * consoles:
 *   - provider cases leave the modules on the left in a fast, dense stream,
 *     pass through the rulebook, come out checked (grey → teal) and go on to
 *     the review gates on the right;
 *   - fewer, slower decisions leave the gates, pass back through the
 *     rulebook, and return to the provider modules.
 * Both streams run at once. Particles are driven by requestAnimationFrame
 * along the real paths, only while the diagram is on screen. A diagram
 * already on screen is never hidden, and everything is static under
 * prefers-reduced-motion.
 */

const W = 1320;
const H = 300;
const MID = H / 2;
const BOX = { x0: 530, x1: 790, h: 92 };
const LEFT_X = 262; // where the provider lines start
const RIGHT_X = 1058; // where the reviewer lines start

function spread(n: number, top: number, bottom: number) {
  return Array.from({ length: n }, (_, i) => (n === 1 ? MID : top + ((bottom - top) * i) / (n - 1)));
}

const LEFT = MODULES.map((m, i) => ({ label: m.name, y: spread(MODULES.length, 22, H - 22)[i] }));
const RIGHT = REVIEWER.gates.map((g, i) => ({ label: g, y: spread(REVIEWER.gates.length, 34, H - 34)[i] }));

const leftPath = (y: number) => `M ${LEFT_X} ${y} C ${LEFT_X + 150} ${y}, ${BOX.x0 - 120} ${MID}, ${BOX.x0} ${MID}`;
const rightPath = (y: number) => `M ${RIGHT_X} ${y} C ${RIGHT_X - 150} ${y}, ${BOX.x1 + 120} ${MID}, ${BOX.x1} ${MID}`;

/* A full journey: out of one side, straight through the rulebook, into the other. */
const acrossLR = (yl: number, yr: number) =>
  `M ${LEFT_X} ${yl} C ${LEFT_X + 150} ${yl}, ${BOX.x0 - 120} ${MID}, ${BOX.x0} ${MID} L ${BOX.x1} ${MID} C ${BOX.x1 + 120} ${MID}, ${RIGHT_X - 150} ${yr}, ${RIGHT_X} ${yr}`;
const acrossRL = (yr: number, yl: number) =>
  `M ${RIGHT_X} ${yr} C ${RIGHT_X - 150} ${yr}, ${BOX.x1 + 120} ${MID}, ${BOX.x1} ${MID} L ${BOX.x0} ${MID} C ${BOX.x0 - 120} ${MID}, ${LEFT_X + 150} ${yl}, ${LEFT_X} ${yl}`;

const FLOW = {
  /** Provider cases: many, quick. Grey until checked, teal after. */
  lr: { every: 260, duration: 3800, r: 3.4, before: '#9AA59D', after: '#12866F' },
  /** Reviewer decisions back to providers: fewer, slower. */
  rl: { every: 1700, duration: 5400, r: 4.6, before: '#0E1512', after: '#0E1512' },
  /** Hold the stream until the lines have drawn in. */
  delay: 1200,
};

type Line = { d: string; i: number };

function Lines({ lines }: { lines: Line[] }) {
  return (
    <>
      {lines.map(({ d, i }) => (
        <g key={d} style={{ ['--d' as string]: `${i * 70}ms` }}>
          <path className="mk-flow-line" d={d} pathLength={1} fill="none" stroke="#B2D5C9" strokeWidth={1.6} />
        </g>
      ))}
    </>
  );
}

const SVG_NS = 'http://www.w3.org/2000/svg';

type Dir = 'lr' | 'rl';
type Particle = { el: SVGCircleElement; path: SVGPathElement; len: number; start: number; dir: Dir; checked: boolean };

function useParticles(
  svgRef: React.RefObject<SVGSVGElement | null>,
  layerRef: React.RefObject<SVGGElement | null>,
  measureRef: React.RefObject<SVGGElement | null>
) {
  useEffect(() => {
    const svg = svgRef.current;
    const layer = layerRef.current;
    const measure = measureRef.current;
    if (!svg || !layer || !measure || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // One measured path per (module, gate, direction), built on first use.
    const cache = new Map<string, { path: SVGPathElement; len: number }>();
    const route = (dir: Dir, i: number, j: number) => {
      const key = `${dir}${i}-${j}`;
      let hit = cache.get(key);
      if (!hit) {
        const path = document.createElementNS(SVG_NS, 'path');
        path.setAttribute('d', dir === 'lr' ? acrossLR(LEFT[i].y, RIGHT[j].y) : acrossRL(RIGHT[j].y, LEFT[i].y));
        measure.appendChild(path);
        hit = { path, len: path.getTotalLength() };
        cache.set(key, hit);
      }
      return hit;
    };

    const live: Particle[] = [];
    const pick = (n: number) => Math.floor(Math.random() * n);
    const spawn = (dir: Dir, now: number) => {
      const f = FLOW[dir];
      const { path, len } = route(dir, pick(LEFT.length), pick(RIGHT.length));
      const el = document.createElementNS(SVG_NS, 'circle');
      el.setAttribute('r', String(f.r));
      el.setAttribute('fill', f.before);
      layer.appendChild(el);
      live.push({ el, path, len, start: now, dir, checked: false });
    };

    let raf = 0;
    let visibleSince = 0;
    let nextLR = 0;
    let nextRL = 0;

    const frame = (now: number) => {
      if (now - visibleSince > FLOW.delay) {
        if (now >= nextLR) {
          spawn('lr', now);
          nextLR = now + FLOW.lr.every * (0.6 + Math.random() * 0.8);
        }
        if (now >= nextRL) {
          spawn('rl', now);
          nextRL = now + FLOW.rl.every * (0.7 + Math.random() * 0.6);
        }
      }

      for (let k = live.length - 1; k >= 0; k--) {
        const p = live[k];
        const t = (now - p.start) / FLOW[p.dir].duration;
        if (t >= 1) {
          p.el.remove();
          live.splice(k, 1);
          continue;
        }
        const pt = p.path.getPointAtLength(t * p.len);
        p.el.setAttribute('cx', pt.x.toFixed(1));
        p.el.setAttribute('cy', pt.y.toFixed(1));
        // Fade in at the source, out at the destination.
        p.el.setAttribute('opacity', String(Math.min(1, t * 12, (1 - t) * 12)));
        if (!p.checked && (p.dir === 'lr' ? pt.x > BOX.x1 : pt.x < BOX.x0)) {
          p.checked = true;
          p.el.setAttribute('fill', FLOW[p.dir].after);
        }
      }
      raf = requestAnimationFrame(frame);
    };

    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
      live.splice(0).forEach((p) => p.el.remove());
    };
    const start = () => {
      if (raf || document.hidden) return;
      visibleSince = performance.now();
      nextLR = nextRL = 0;
      raf = requestAnimationFrame(frame);
    };

    let onScreen = false;
    const io = new IntersectionObserver((entries) => {
      onScreen = entries.some((e) => e.isIntersecting);
      if (onScreen) start();
      else stop();
    });
    io.observe(svg);
    const onVis = () => (document.hidden ? stop() : onScreen && start());
    document.addEventListener('visibilitychange', onVis);

    return () => {
      io.disconnect();
      document.removeEventListener('visibilitychange', onVis);
      stop();
      measure.replaceChildren();
    };
  }, [svgRef, layerRef, measureRef]);
}

export function RulebookFlow() {
  const ref = useRef<SVGSVGElement>(null);
  const layerRef = useRef<SVGGElement>(null);
  const measureRef = useRef<SVGGElement>(null);
  const { diagram } = WHAT_IT_IS;

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onScreen = el.getBoundingClientRect().top < window.innerHeight;
    if (onScreen) {
      el.classList.add('mk-flow-in');
      return;
    }
    el.classList.add('mk-flow-armed');
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          // One frame so the armed (undrawn) state paints before the transition.
          requestAnimationFrame(() => el.classList.add('mk-flow-in'));
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useParticles(ref, layerRef, measureRef);

  const lines: Line[] = [
    ...LEFT.map((n, i) => ({ d: leftPath(n.y), i })),
    ...RIGHT.map((n, i) => ({ d: rightPath(n.y), i: i + 0.5 })),
  ];

  const text = "font-family:Archivo,sans-serif;font-size:14.5px;font-weight:500;fill:#0E1512";
  const mono = "font-family:'IBM Plex Mono',monospace;font-size:10.5px;font-weight:500;letter-spacing:.12em;text-transform:uppercase";

  return (
    <div className="mk-flow-wrap" style={sx('margin-top:44px')}>
      <div style={sx('display:flex;justify-content:space-between;gap:24px;padding:0 4px 14px;border-bottom:1px solid #E6EAE5')}>
        <span style={sx(`${mono};color:#0A5A4B`)}>
          {diagram.left.label} <span style={sx('color:#616961')}>· {diagram.left.sub}</span>
        </span>
        <span style={sx(`${mono};color:#0A5A4B;text-align:right`)}>
          {diagram.right.label} <span style={sx('color:#616961')}>· {diagram.right.sub}</span>
        </span>
      </div>

      <svg
        ref={ref}
        className="mk-flow"
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="The eight provider modules and the seven MAC review gates all run against one rulebook."
        style={sx('display:block;width:100%;height:auto;margin-top:18px;overflow:visible')}
      >
        <Lines lines={lines} />
        <g ref={measureRef} aria-hidden="true" style={{ visibility: 'hidden' }} />
        {/* Drawn under the rulebook card, so cases vanish into it and re-emerge. */}
        <g ref={layerRef} aria-hidden="true" />

        {LEFT.map((n) => (
          <g key={n.label}>
            <circle cx={LEFT_X} cy={n.y} r={3.5} fill="#12866F" />
            <text x={LEFT_X - 14} y={n.y} dominantBaseline="middle" textAnchor="end" style={sx(text)}>
              {n.label}
            </text>
          </g>
        ))}
        {RIGHT.map((n) => (
          <g key={n.label}>
            <circle cx={RIGHT_X} cy={n.y} r={3.5} fill="#12866F" />
            <text x={RIGHT_X + 14} y={n.y} dominantBaseline="middle" style={sx(text)}>
              {n.label}
            </text>
          </g>
        ))}

        <g className="mk-flow-core">
          {/* Stacked pages behind the front card: the rulebook has depth. */}
          <rect x={BOX.x0 + 28} y={MID - BOX.h / 2 - 24} width={BOX.x1 - BOX.x0 - 56} height={BOX.h} rx={14} fill="#B2D5C9" />
          <rect x={BOX.x0 + 14} y={MID - BOX.h / 2 - 12} width={BOX.x1 - BOX.x0 - 28} height={BOX.h} rx={14} fill="#4FA48F" />
          <rect x={BOX.x0} y={MID - BOX.h / 2} width={BOX.x1 - BOX.x0} height={BOX.h} rx={14} fill="#0A5A4B" />
          <text x={(BOX.x0 + BOX.x1) / 2} y={MID - 10} textAnchor="middle" style={sx('font-family:Archivo,sans-serif;font-size:23px;font-weight:600;letter-spacing:-0.02em;fill:#fff')}>
            {diagram.center.label}
          </text>
          <text x={(BOX.x0 + BOX.x1) / 2} y={MID + 20} textAnchor="middle" style={sx(`${mono};fill:#8FD3C1`)}>
            {diagram.center.sub}
          </text>
        </g>
      </svg>

      <div style={sx(`display:flex;flex-wrap:wrap;justify-content:center;gap:10px 28px;margin-top:18px;${mono};color:#616961`)}>
        {[
          { c: FLOW.lr.before, t: diagram.legend.unchecked },
          { c: FLOW.lr.after, t: diagram.legend.checked },
          { c: FLOW.rl.before, t: diagram.legend.decision },
        ].map((l) => (
          <span key={l.t} style={sx('display:inline-flex;align-items:center;gap:8px')}>
            <span
              aria-hidden="true"
              style={sx(`width:9px;height:9px;border-radius:50%;background:${l.c}`)}
            />
            {l.t}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Below 1020px the fan is too fine to read, so the diagram becomes a stack. */
export function RulebookStack() {
  const { diagram } = WHAT_IT_IS;
  const chip = "font:500 11.5px/1 'IBM Plex Mono',monospace;padding:7px 9px;border-radius:6px;background:#fff;border:1px solid #E1E5E0;color:#3A443E";
  const side = (title: string, sub: string, items: readonly string[]) => (
    <div style={sx('background:#fff;border:1px solid #DDE2DC;border-radius:12px;padding:18px')}>
      <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#0A5A4B")}>
        {title} · {sub}
      </span>
      <div style={sx('display:flex;flex-wrap:wrap;gap:6px;margin-top:12px')}>
        {items.map((t) => (
          <span key={t} style={sx(chip)}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="mk-flow-stack" style={sx('margin-top:44px;display:grid;justify-items:stretch')}>
      {side(diagram.left.label, diagram.left.sub, MODULES.map((m) => m.name))}
      <span aria-hidden="true" style={sx('width:2px;height:22px;background:#0A5A4B;justify-self:center')} />
      <div style={sx('background:#0A5A4B;color:#fff;border-radius:12px;padding:18px;text-align:center')}>
        <p style={sx('margin:0;font-weight:600;font-size:20px;letter-spacing:-0.018em')}>{diagram.center.label}</p>
        <p style={sx("margin:8px 0 0;font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#8FD3C1")}>
          {diagram.center.sub}
        </p>
      </div>
      <span aria-hidden="true" style={sx('width:2px;height:22px;background:#0A5A4B;justify-self:center')} />
      {side(diagram.right.label, diagram.right.sub, REVIEWER.gates)}
    </div>
  );
}
