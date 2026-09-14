import { sx } from '@/lib/css';

export type CompactCardProps = {
  /** Small mono kicker, e.g. "Module 03". */
  kicker: string;
  title: string;
  body: string;
  /** Footer rule with a labelled value on the right. */
  metricLabel?: string;
  metric?: string;
};

/** Compact card with metric: kicker, tight H4, one sentence, then a footer rule carrying a labelled value. */
export function CompactCard({ kicker, title, body, metricLabel, metric }: CompactCardProps) {
  return (
    <div className="mkcard" style={sx('background:#fff;border:1px solid #DDE2DC;border-radius:12px;padding:20px 21px')}>
      <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>{kicker}</span>
      <h4 style={sx('font-weight:600;font-size:18.5px;line-height:1.25;letter-spacing:-0.018em;margin:10px 0 0')}>{title}</h4>
      <p style={sx('font-size:14px;line-height:1.55;margin:10px 0 0;color:#5A625C')}>{body}</p>
      {metricLabel ? (
        <span
          style={sx(
            "display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:16px;padding-top:13px;border-top:1px solid #EEF1ED;font:400 11.5px/1 'IBM Plex Mono',monospace;color:#616961"
          )}
        >
          <span>{metricLabel}</span>
          <span style={sx('color:#0A5A4B;font-weight:600')}>{metric}</span>
        </span>
      ) : null}
    </div>
  );
}
