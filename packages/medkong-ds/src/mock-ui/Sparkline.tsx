import { sx } from '@/lib/css';

export type SparklineProps = {
  /** Y values in a 0–24 viewBox (0 = top). Spread evenly across 120 units. */
  points: number[];
  risk?: boolean;
  height?: number;
};

/** Sparkline: `viewBox="0 0 120 24"`, stroke #12866F (rust when risk), width 1.6, no fill, no axes. */
export function Sparkline({ points, risk = false, height = 24 }: SparklineProps) {
  const step = points.length > 1 ? 120 / (points.length - 1) : 0;
  const pts = points.map((y, i) => `${(i * step).toFixed(1)},${y}`).join(' ');
  return (
    <svg viewBox="0 0 120 24" preserveAspectRatio="none" style={sx(`width:100%;height:${height}px;display:block`)}>
      <polyline points={pts} fill="none" stroke={risk ? '#B23A1B' : '#12866F'} strokeWidth="1.6" />
    </svg>
  );
}
