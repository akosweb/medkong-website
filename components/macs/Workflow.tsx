import { Fragment } from 'react';
import { sx } from '@/lib/css';
import { GATES, WORKFLOW } from '@/lib/macs-data';
import { Label, SectionHead } from './mock';

/** Phase colour: intake gates can end the case early, so they carry the emphasis. */
const PHASE_CHIP: Record<string, string> = {
  Receipt: 'background:#F1F4F1;color:#5A625C',
  Intake: 'background:#E3F0EB;color:#0A5A4B',
  'Medical review': 'background:#E3F0EB;color:#0A5A4B',
  Decision: 'background:#0A5A4B;color:#fff',
};

export function Workflow() {
  return (
    <section id="workflow" style={sx('background:#F4F6F3;border-top:1px solid #E6EAE5;padding:110px 0')}>
      <div style={sx('max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)')}>
        <SectionHead eyebrow={WORKFLOW.eyebrow} headline={WORKFLOW.headline} support={WORKFLOW.support} />

        {/* phase rail */}
        <div style={sx('display:flex;gap:10px;align-items:center;margin-top:40px;flex-wrap:wrap')}>
          {[
            { t: 'M0 · Receipt', w: 1, c: '#B2D5C9' },
            { t: 'P1–P3 · Intake screen', w: 3, c: '#4FA48F' },
            { t: 'P4–P7 · Medical review', w: 4, c: '#12866F' },
            { t: 'D · Decision', w: 1, c: '#0A5A4B' },
          ].map((p, i) => (
            <Fragment key={i}>
              <span style={sx(`flex:${p.w} 1 120px;display:grid;gap:8px`)}>
                <span style={sx(`height:3px;border-radius:2px;background:${p.c}`)}></span>
                <Label>{p.t}</Label>
              </span>
            </Fragment>
          ))}
        </div>

        <div
          className="mkrail"
          style={sx(
            'display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,380px),1fr));gap:16px;margin-top:22px'
          )}
        >
          {GATES.map((g, i) => (
            <Fragment key={i}>
              <div
                className="mkcard"
                style={sx(
                  'background:#fff;border:1px solid #DDE2DC;border-radius:12px;padding:20px 21px;display:flex;flex-direction:column'
                )}
              >
                <span style={sx('display:flex;align-items:center;justify-content:space-between;gap:10px')}>
                  <span style={sx("font:600 13px/1 'IBM Plex Mono',monospace;letter-spacing:.06em;color:#0A5A4B")}>{g.code}</span>
                  <span
                    style={sx(
                      `font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.1em;text-transform:uppercase;padding:5px 8px;border-radius:5px;${PHASE_CHIP[g.phase]}`
                    )}
                  >
                    {g.phase}
                  </span>
                </span>
                <h4 style={sx('font-weight:600;font-size:18.5px;line-height:1.25;letter-spacing:-0.018em;margin:12px 0 0')}>{g.name}</h4>
                <p style={sx('font-size:14px;line-height:1.55;margin:10px 0 0;color:#5A625C')}>{g.evaluates}</p>
                <span
                  style={sx(
                    'display:grid;gap:5px;margin-top:auto;padding-top:14px;border-top:1px solid #EEF1ED'
                  )}
                >
                  <Label>Reviewer control</Label>
                  <span style={sx('font-size:13px;line-height:1.45;color:#0E1512;font-weight:500;margin-top:8px')}>{g.control}</span>
                </span>
              </div>
            </Fragment>
          ))}
        </div>

        <div
          style={sx(
            'margin-top:20px;border:1px solid #DDE2DC;background:#fff;border-radius:12px;padding:18px 22px;display:grid;grid-template-columns:auto minmax(0,1fr);gap:16px;align-items:start'
          )}
        >
          <span style={sx(
            "font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.05em;padding:5px 9px;border-radius:5px;background:#FBE9E3;color:#96301A;white-space:nowrap;margin-top:2px"
          )}>EARLY EXIT</span>
          <p style={sx('margin:0;font-size:14.5px;line-height:1.6;color:#3A443E')}>
            A reviewed objection at P1, P2 or P3 routes the case directly to Decision as a rejected intake request; the
            medical-review gates are skipped. A reviewed objection at P4–P7 completes medical review and proposes
            non-affirmed. Changing the category or governing policy upstream refreshes every dependent suggestion and
            returns previously verified downstream steps to review — human-overridden steps stay protected.
          </p>
        </div>
      </div>
    </section>
  );
}
