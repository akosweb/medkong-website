'use client';

import { useEffect, useRef } from 'react';

/** Brand greens only — the teal ramp plus the two on-dark tints. */
const COLORS = ['#0A5A4B', '#0E7A66', '#12866F', '#4FA48F', '#5FBFA6', '#84BFAE', '#B2D5C9'];

const COUNT = 150;
const GRAVITY = 0.14;
const DRAG = 0.992;
const LIFE_MS = 2600;

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  w: number;
  h: number;
  rot: number;
  vr: number;
  color: string;
  flip: number;
  vflip: number;
};

/**
 * A one-shot confetti burst, drawn on a canvas laid over the dialog.
 *
 * Deliberately dependency-free: it's ~60 lines of canvas and needs no layout,
 * so it can't disturb the dialog it sits on top of. Skipped entirely under
 * prefers-reduced-motion.
 */
export function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const { width, height } = parent.getBoundingClientRect();
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Burst from just below the top of the panel, spraying up and outward.
    const originX = width / 2;
    const originY = height * 0.42;

    const particles: Particle[] = Array.from({ length: COUNT }, () => {
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.15;
      const speed = 5 + Math.random() * 11;
      return {
        x: originX + (Math.random() - 0.5) * 60,
        y: originY + (Math.random() - 0.5) * 20,
        vx: Math.cos(angle) * speed * 1.25,
        vy: Math.sin(angle) * speed,
        w: 5 + Math.random() * 6,
        h: 8 + Math.random() * 8,
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.3,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        flip: Math.random() * Math.PI,
        vflip: 0.08 + Math.random() * 0.12,
      };
    });

    const start = performance.now();
    let raf = 0;

    const frame = (now: number) => {
      const elapsed = now - start;
      const fade = Math.max(0, 1 - Math.max(0, elapsed - LIFE_MS * 0.55) / (LIFE_MS * 0.45));

      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.vx *= DRAG;
        p.vy = p.vy * DRAG + GRAVITY;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        p.flip += p.vflip;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        // Squashing the width fakes a paper flutter without a 3D transform.
        ctx.scale(Math.cos(p.flip), 1);
        ctx.globalAlpha = fade;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }

      if (elapsed < LIFE_MS) raf = requestAnimationFrame(frame);
      else ctx.clearRect(0, 0, width, height);
    };

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 3,
      }}
    />
  );
}
