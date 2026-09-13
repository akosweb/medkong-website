import { Fragment } from 'react';
import { sx } from '@/lib/css';
import { GOVERNANCE } from '@/lib/macs-data';
import { SectionHead } from './mock';

export function Governance() {
  return (
    <section id="governance" style={sx('background:#fff;padding:110px 0')}>
      <div style={sx('max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)')}>
        <SectionHead eyebrow={GOVERNANCE.eyebrow} headline={GOVERNANCE.headline} support={GOVERNANCE.support} />
        <div
          style={sx(
            'display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:1px;margin-top:44px;background:#E6EAE5;border:1px solid #E6EAE5;border-radius:14px;overflow:hidden'
          )}
        >
          {GOVERNANCE.rules.map((r, i) => (
            <Fragment key={i}>
              <div style={sx('background:#fff;padding:26px 26px 28px')}>
                <span
                  style={sx(
                    "font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C"
                  )}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h4 style={sx('font-weight:600;font-size:18.5px;line-height:1.25;letter-spacing:-0.018em;margin:12px 0 0')}>{r.t}</h4>
                <p style={sx('font-size:14.5px;line-height:1.58;margin:10px 0 0;color:#5A625C')}>{r.d}</p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
