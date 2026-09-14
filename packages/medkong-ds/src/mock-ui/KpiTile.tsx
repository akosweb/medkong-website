import { sx } from '@/lib/css';
import { Sparkline } from './Sparkline';

export type KpiTileProps = {
  /** Mono label, e.g. "Auths cleared". */
  label: string;
  /** The figure, e.g. "1,284" or "$107.7K". */
  value: string;
  /** Rust figure + rust sparkline — only when the value means risk. */
  risk?: boolean;
  /** Optional trend; nine-ish points in a 0–24 range (lower is higher on screen). */
  points?: number[];
};

/** KPI tile: label, 27px figure, optional sparkline. Rust only for amounts at risk. */
export function KpiTile({ label, value, risk = false, points }: KpiTileProps) {
  return (
    <div style={sx('border:1px solid #E6EAE5;border-radius:10px;padding:14px 15px;background:#fff')}>
      <p style={sx("margin:0;font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:#616961")}>{label}</p>
      <p style={sx(`margin:10px 0 0;font-weight:600;font-size:27px;letter-spacing:-0.02em;color:${risk ? '#B23A1B' : '#0E1512'}`)}>{value}</p>
      {points ? (
        <div style={sx('margin-top:9px')}>
          <Sparkline points={points} risk={risk} />
        </div>
      ) : null}
    </div>
  );
}
