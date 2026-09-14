import { sx } from '@/lib/css';

export type ProgressTrackProps = {
  /** 0–100. */
  percent: number;
  /** Mono label row above the track, with the percentage in teal on the right. */
  label?: string;
  /** Rust fill — only for a bar that means risk (a denial, an exception). */
  risk?: boolean;
};

/** Progress track: 6px track, 4px radius, `transition:width .8s linear` so movement reads as progress. */
export function ProgressTrack({ percent, label, risk = false }: ProgressTrackProps) {
  const pct = Math.max(0, Math.min(100, percent));
  return (
    <div>
      {label ? (
        <div style={sx("display:flex;justify-content:space-between;gap:10px;margin-bottom:9px;font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.1em;text-transform:uppercase;color:#616961")}>
          <span>{label}</span>
          <span style={sx(risk ? 'color:#B23A1B' : 'color:#0A5A4B')}>{pct}%</span>
        </div>
      ) : null}
      <div style={sx('height:6px;border-radius:4px;background:#EDF0EC;overflow:hidden')}>
        <div style={sx(`height:100%;border-radius:4px;width:${pct}%;background:${risk ? '#B23A1B' : '#12866F'};transition:width .8s linear`)}></div>
      </div>
    </div>
  );
}
