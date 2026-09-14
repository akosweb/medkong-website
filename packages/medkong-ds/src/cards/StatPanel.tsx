import { Fragment } from 'react';
import { sx } from '@/lib/css';

export type StatPanelProps = {
  /** Figures with their captions. Always state where a figure was measured (use `source`). */
  stats: { value: string; label: string }[];
  /** Where the figures were measured, e.g. "Measured against two multi-facility deployments running in production." */
  source?: string;
};

/**
 * Seamless stat grid: a 1px gap over a border-coloured ground gives hairline
 * dividers with no double borders. Figures are 600 weight at up to 64px.
 */
export function StatPanel({ stats, source }: StatPanelProps) {
  return (
    <div>
      {source ? <p style={sx('font-size:16px;line-height:1.6;margin:0 0 40px;color:#6B756E')}>{source}</p> : null}
      <div
        style={sx(
          'display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:1px;background:#E6EAE5;border:1px solid #E6EAE5;border-radius:14px;overflow:hidden'
        )}
      >
        {stats.map((s, i) => (
          <Fragment key={i}>
            <div style={sx('background:#fff;padding:32px 28px')}>
              <p style={sx('margin:0;font-weight:600;font-size:clamp(42px,4.6vw,64px);letter-spacing:-0.04em;line-height:1')}>{s.value}</p>
              <p style={sx('margin:18px 0 0;font-size:14.5px;line-height:1.5;color:#5A625C')}>{s.label}</p>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
