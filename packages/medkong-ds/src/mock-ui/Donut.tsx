import { sx } from '@/lib/css';

export type DonutProps = {
  /** 0–100. Single value only. */
  percent: number;
  size?: number;
  /** Mono label and figure beside the ring. */
  label?: string;
  value?: string;
  note?: string;
};

/** Single-value donut: track #EDF0EC, value #12866F, 10px stroke, starts at twelve o'clock. */
export function Donut({ percent, size = 86, label, value, note }: DonutProps) {
  const circ = 2 * Math.PI * 44;
  const dash = `${((circ * Math.max(0, Math.min(100, percent))) / 100).toFixed(1)} ${circ.toFixed(1)}`;
  const ring = (
    <svg viewBox="0 0 104 104" style={sx(`width:${size}px;height:${size}px;flex:none`)}>
      <circle cx="52" cy="52" r="44" fill="none" stroke="#EDF0EC" strokeWidth="10" />
      <circle cx="52" cy="52" r="44" fill="none" stroke="#12866F" strokeWidth="10" strokeDasharray={dash} transform="rotate(-90 52 52)" />
    </svg>
  );
  if (!label) return ring;
  return (
    <div style={sx('border:1px solid #E6EAE5;border-radius:10px;padding:16px;display:flex;align-items:center;gap:16px;background:#fff')}>
      {ring}
      <div>
        <p style={sx("margin:0;font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:#616961")}>{label}</p>
        <p style={sx('margin:8px 0 0;font-weight:600;font-size:30px;letter-spacing:-0.025em')}>{value ?? `${percent}%`}</p>
        {note ? <p style={sx('margin:6px 0 0;font-size:12.5px;line-height:1.45;color:#6B756E')}>{note}</p> : null}
      </div>
    </div>
  );
}
