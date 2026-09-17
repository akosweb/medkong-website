import { Fragment } from 'react';
import { Label, SectionHead } from '@/components/macs/mock';
import { sx } from '@/lib/css';
import { MODULES_HEAD, MODULE_CARDS, PHASES } from '@/lib/home-data';

/** Module badge: teal for pre-service and mid-cycle, rust only for denials (§7). */
const BADGE_OK =
  "font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:#0A5A4B;background:#E3F0EB;padding:6px 10px;border-radius:6px";
const BADGE_RISK =
  "font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:#96301A;background:#FBE9E3;padding:6px 10px;border-radius:6px";

export function Modules() {
  return (
    <section id="modules" style={sx('background:#EEF2EF;border-top:1px solid #E0E7E2;border-bottom:1px solid #E0E7E2;padding:110px 0')}>
      <div style={sx('max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)')}>
        <SectionHead eyebrow={MODULES_HEAD.eyebrow} headline={MODULES_HEAD.headline} support={MODULES_HEAD.support} />

        {/* phase rail */}
        <div style={sx('display:flex;gap:10px;align-items:center;margin-top:40px;flex-wrap:wrap')}>
          {PHASES.map((p, i) => (
            <Fragment key={i}>
              <span style={sx(`flex:${p.count} 1 120px;display:grid;gap:8px`)}>
                <span style={sx(`height:3px;border-radius:2px;background:${p.c}`)}></span>
                <Label>
                  {p.phase} · {p.count} modules
                </Label>
              </span>
            </Fragment>
          ))}
        </div>

        <div
          className="mkrail mk-four"
          style={sx('display:grid;gap:16px;margin-top:22px')}
        >
          {MODULE_CARDS.map((m, i) => (
            <Fragment key={i}>
              <div
                className="mkcard mk-split"
                style={sx('background:#fff;border:1px solid #DDE2DC;border-radius:12px;padding:20px 21px')}
              >
                <div>
                  <span style={sx('display:flex;align-items:center;justify-content:space-between;gap:10px')}>
                    <span style={sx(m.risk ? BADGE_RISK : BADGE_OK)}>{m.phase}</span>
                    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>
                      Module {m.n}
                    </span>
                  </span>
                  <h4 style={sx('font-weight:600;font-size:19px;line-height:1.25;letter-spacing:-0.02em;margin:14px 0 0')}>{m.name}</h4>
                  <p style={sx('font-size:14px;line-height:1.55;margin:10px 0 0;color:#3A443E')}>{m.question}</p>
                </div>
                <span style={sx('display:grid;gap:6px;margin-top:14px;padding-top:14px;border-top:1px solid #EEF1ED')}>
                  <Label>Output</Label>
                  <span style={sx('font-size:13px;line-height:1.5;color:#5A625C;margin-top:4px')}>{m.output}</span>
                </span>
              </div>
            </Fragment>
          ))}
        </div>

        <div
          className="mkcols"
          style={sx('display:grid;grid-template-columns:minmax(0,1fr) auto;gap:20px clamp(32px,6vw,90px);align-items:center;margin-top:28px')}
        >
          <p style={sx("margin:0;font:400 12.5px/1.6 'IBM Plex Mono',monospace;color:#6B736C;max-width:78ch")}>{MODULES_HEAD.footnote}</p>
          <a href="/providers" style={sx('display:inline-flex;align-items:center;gap:8px;font-weight:600;font-size:16px;white-space:nowrap')}>
            See the provider workbenches →
          </a>
        </div>
      </div>
    </section>
  );
}
