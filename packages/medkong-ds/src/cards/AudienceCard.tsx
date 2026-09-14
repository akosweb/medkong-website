import { sx } from '@/lib/css';

export type AudienceCardProps = {
  /** Numbered kicker, e.g. "01 — Health systems". */
  kicker: string;
  title: string;
  /** Optional — omit when the title carries the whole message. */
  body?: string;
  /** Two stats in the tinted footer. State where each figure was measured. */
  statA?: string;
  labelA?: string;
  statB?: string;
  labelB?: string;
  /** Category chip at the footer's right. */
  chip?: string;
};

/** Audience card with stat footer: numbered kicker, headline, body, then a tinted footer carrying two stats and a category chip. */
export function AudienceCard({ kicker, title, body, statA, labelA, statB, labelB, chip }: AudienceCardProps) {
  const hasFooter = statA || statB || chip;
  return (
    <div className="mkcard" style={sx('background:#fff;border:1px solid #DDE2DC;border-radius:14px;overflow:hidden')}>
      <div style={sx('padding:24px 26px 20px')}>
        <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.13em;text-transform:uppercase;color:#6B736C")}>{kicker}</span>
        <h3 style={sx('font-weight:600;font-size:24px;line-height:1.2;letter-spacing:-0.024em;margin:12px 0 0')}>{title}</h3>
        {body ? <p style={sx('font-size:15px;line-height:1.6;margin:12px 0 0;color:#3A443E')}>{body}</p> : null}
      </div>
      {hasFooter ? (
        <div style={sx('border-top:1px solid #EEF1ED;background:#FAFBFA;padding:18px 26px;display:flex;align-items:center;gap:28px;flex-wrap:wrap')}>
          {statA ? (
            <span>
              <span style={sx('display:block;font-weight:600;font-size:23px;letter-spacing:-0.024em')}>{statA}</span>
              <span style={sx("font:400 11.5px/1.4 'IBM Plex Mono',monospace;color:#616961")}>{labelA}</span>
            </span>
          ) : null}
          {statB ? (
            <span>
              <span style={sx('display:block;font-weight:600;font-size:23px;letter-spacing:-0.024em')}>{statB}</span>
              <span style={sx("font:400 11.5px/1.4 'IBM Plex Mono',monospace;color:#616961")}>{labelB}</span>
            </span>
          ) : null}
          {chip ? (
            <span style={sx("margin-left:auto;font:500 11px/1 'IBM Plex Mono',monospace;padding:7px 10px;border-radius:5px;background:#E3F0EB;color:#0A5A4B")}>{chip}</span>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
