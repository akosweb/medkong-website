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
 * view, then a single teal dash travels each line inward, the same
 * operational register as the mock consoles. Like the rest of the entrance
 * motion, a diagram already on screen is never hidden, and everything is
 * static under prefers-reduced-motion.
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

/* Every path runs outside → centre, so one keyframe moves every dash inward. */
const leftPath = (y: number) => `M ${LEFT_X} ${y} C ${LEFT_X + 150} ${y}, ${BOX.x0 - 120} ${MID}, ${BOX.x0} ${MID}`;
const rightPath = (y: number) => `M ${RIGHT_X} ${y} C ${RIGHT_X - 150} ${y}, ${BOX.x1 + 120} ${MID}, ${BOX.x1} ${MID}`;

type Line = { d: string; i: number };

function Lines({ lines }: { lines: Line[] }) {
  return (
    <>
      {lines.map(({ d, i }) => (
        <g key={d} style={{ ['--d' as string]: `${i * 70}ms`, ['--p' as string]: `${-i * 0.45}s` }}>
          <path className="mk-flow-line" d={d} pathLength={1} fill="none" stroke="#B2D5C9" strokeWidth={1.6} />
          <path className="mk-flow-dot" d={d} pathLength={100} fill="none" stroke="#12866F" strokeWidth={3} strokeLinecap="round" strokeDasharray="3 97" />
        </g>
      ))}
    </>
  );
}

export function RulebookFlow() {
  const ref = useRef<SVGSVGElement>(null);
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
          <rect x={BOX.x0} y={MID - BOX.h / 2} width={BOX.x1 - BOX.x0} height={BOX.h} rx={14} fill="#0A5A4B" />
          <text x={(BOX.x0 + BOX.x1) / 2} y={MID - 10} textAnchor="middle" style={sx('font-family:Archivo,sans-serif;font-size:23px;font-weight:600;letter-spacing:-0.02em;fill:#fff')}>
            {diagram.center.label}
          </text>
          <text x={(BOX.x0 + BOX.x1) / 2} y={MID + 20} textAnchor="middle" style={sx(`${mono};fill:#8FD3C1`)}>
            {diagram.center.sub}
          </text>
        </g>
      </svg>
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
