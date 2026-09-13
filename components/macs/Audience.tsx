import { Fragment } from 'react';
import { sx } from '@/lib/css';
import { AUDIENCE } from '@/lib/macs-data';
import { Label, SectionHead } from './mock';

export function Audience() {
  return (
    <section id="who" style={sx('background:#F4F6F3;border-top:1px solid #E6EAE5;padding:110px 0')}>
      <div style={sx('max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)')}>
        <SectionHead eyebrow={AUDIENCE.eyebrow} headline={AUDIENCE.headline} />
        <div
          className="mkrail"
          style={sx(
            'display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:20px;margin-top:44px'
          )}
        >
          {AUDIENCE.segments.map((s, i) => (
            <Fragment key={i}>
              <div className="mkcard" style={sx('background:#fff;border:1px solid #DDE2DC;border-radius:14px;overflow:hidden;display:flex;flex-direction:column')}>
                <div style={sx('padding:24px 26px 22px;flex:1')}>
                  <span
                    style={sx(
                      "font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.13em;text-transform:uppercase;color:#6B736C"
                    )}
                  >
                    {s.n} — {s.kicker}
                  </span>
                  <h3 style={sx('font-weight:600;font-size:22px;line-height:1.2;letter-spacing:-0.022em;margin:12px 0 0')}>{s.body}</h3>
                </div>
                <div style={sx('border-top:1px solid #EEF1ED;background:#FAFBFA;padding:16px 26px;display:grid;gap:6px')}>
                  <Label>Primary concern</Label>
                  <span style={sx('font-size:13.5px;line-height:1.5;color:#3A443E')}>{s.concern}</span>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
