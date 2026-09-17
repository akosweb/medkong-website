import { Fragment } from 'react';
import { Label, PanelGhost, PanelPrimary, SectionHead, Tag } from '@/components/macs/mock';
import { sx } from '@/lib/css';
import { DETERMINATION, GOVERNED_ACTION, LAYERS, LAYERS_HEAD, SUGGESTION } from '@/lib/home-data';
import { useHome } from './state';

const PANEL = 'margin:0 24px 24px;border:1px solid #E6EAE5;border-radius:10px;overflow:hidden;background:#fff';
const PANEL_HEAD =
  "display:flex;justify-content:space-between;align-items:center;gap:10px;padding:10px 14px;background:#F7F9F7;border-bottom:1px solid #EEF1ED;font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.09em;text-transform:uppercase;color:#616961";

/** Layer 01 — a determination run's result strip. */
function Determination() {
  return (
    <div style={sx(PANEL)}>
      <div style={sx(PANEL_HEAD)}>
        <span style={sx('white-space:nowrap;overflow:hidden;text-overflow:ellipsis')}>{DETERMINATION.title}</span>
        <Tag kind="ok">{DETERMINATION.status}</Tag>
      </div>
      {DETERMINATION.rows.map((r, i) => (
        <Fragment key={i}>
          <div
            style={sx(
              'display:grid;grid-template-columns:96px minmax(0,1fr);gap:10px;padding:9px 14px;align-items:baseline;font-size:12.5px;line-height:1.45;border-bottom:1px solid #F1F3F0' +
                (i === DETERMINATION.rows.length - 1 ? ';border-bottom:0' : '')
            )}
          >
            <Label>{r.k}</Label>
            <span style={sx(`font:500 11.5px/1.45 'IBM Plex Mono',monospace;color:${r.risk ? '#96301A' : '#0E1512'}`)}>{r.v}</span>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

/** Layer 02 — a suggested code waiting on a coder. */
function Suggestion() {
  return (
    <div style={sx(PANEL)}>
      <div style={sx(PANEL_HEAD)}>
        <span>
          <span style={sx('color:#0A5A4B;font-weight:600')}>{SUGGESTION.code}</span> · {SUGGESTION.confidence}
        </span>
        <Tag kind="neutral">{SUGGESTION.status}</Tag>
      </div>
      <div style={sx('padding:12px 14px 0')}>
        <span style={sx('display:block;font-weight:600;font-size:14px;color:#0E1512')}>{SUGGESTION.desc}</span>
        <div style={sx('margin-top:10px;background:#FAFBFA;border:1px solid #EEF1ED;border-radius:8px;padding:10px 12px')}>
          <Label>{SUGGESTION.source}</Label>
          <p style={sx('margin:7px 0 0;font-size:12.5px;line-height:1.5;color:#3A443E')}>
            <mark style={sx('background:#E3F0EB;color:inherit;padding:1px 0')}>“{SUGGESTION.evidence}”</mark>
          </p>
        </div>
      </div>
      <div style={sx('display:flex;gap:8px;padding:12px 14px 14px;flex-wrap:wrap')}>
        <PanelPrimary>Approve</PanelPrimary>
        <PanelGhost>Reject</PanelGhost>
        <PanelGhost>Query provider</PanelGhost>
      </div>
    </div>
  );
}

/** Layer 03 — a governed action about to save, with its preconditions and change count. */
function GovernedAction() {
  return (
    <div style={sx(PANEL)}>
      <div style={sx(PANEL_HEAD)}>
        <span>Action · {GOVERNED_ACTION.title}</span>
        <span style={sx('color:#0A5A4B')}>{GOVERNED_ACTION.total} unsaved</span>
      </div>
      {GOVERNED_ACTION.checks.map((c, i) => (
        <Fragment key={i}>
          <div
            style={sx(
              'display:grid;grid-template-columns:96px minmax(0,1fr) 14px;gap:10px;padding:9px 14px;align-items:center;font-size:12.5px;line-height:1.45;border-bottom:1px solid #F1F3F0'
            )}
          >
            <Label>{c.k}</Label>
            <span style={sx('color:#0E1512')}>{c.v}</span>
            <svg viewBox="0 0 14 14" width="14" height="14" aria-hidden="true">
              <circle cx="7" cy="7" r="6.5" fill="#E3F0EB" />
              <path d="M4 7.2l2 2 4-4.4" fill="none" stroke="#0A5A4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </Fragment>
      ))}
      <div style={sx('display:flex;gap:6px;padding:12px 14px 0;flex-wrap:wrap')}>
        {GOVERNED_ACTION.changes.map((c, i) => (
          <Fragment key={i}>
            <span
              style={sx(
                "font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.05em;padding:6px 9px;border-radius:5px;white-space:nowrap;" +
                  (c.n > 0 ? 'background:#E3F0EB;color:#0A5A4B' : 'background:#F1F4F1;color:#5A625C')
              )}
            >
              {c.section} · {c.n}
            </span>
          </Fragment>
        ))}
      </div>
      <div style={sx('display:flex;gap:8px;padding:12px 14px 14px;flex-wrap:wrap')}>
        <PanelGhost>Reset</PanelGhost>
        <PanelPrimary>Save {GOVERNED_ACTION.total} changes</PanelPrimary>
      </div>
    </div>
  );
}

/** Layer 04 — the audit trail on one visit. Rows rotate on the tick. */
function Ledger() {
  const { ledger } = useHome();
  return (
    <div style={sx(PANEL)}>
      <div style={sx(PANEL_HEAD)}>
        <span>Audit trail · visit 8c08952b</span>
        <span style={sx('width:6px;height:6px;border-radius:50%;background:#12866F;animation:mkpulse 1.8s ease-in-out infinite')}></span>
      </div>
      {ledger.map((l, i) => (
        <Fragment key={i}>
          <div
            style={sx(
              'display:grid;grid-template-columns:54px minmax(0,1fr);gap:9px;padding:9px 14px;align-items:baseline;font-size:12px;line-height:1.45;border-bottom:1px solid #F1F3F0' +
                (i === ledger.length - 1 ? ';border-bottom:0' : '')
            )}
          >
            <span style={sx("font:400 10.5px/1.4 'IBM Plex Mono',monospace;color:#6B736C")}>{l.time}</span>
            <span style={sx('color:#3A443E;min-width:0')}>
              <span style={sx("font:600 9.5px/1.4 'IBM Plex Mono',monospace;letter-spacing:.06em;color:#0A5A4B")}>{l.act}</span>
              <span style={sx('display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis')}>
                {l.what} · <span style={sx("font:400 11px/1.4 'IBM Plex Mono',monospace;color:#616961")}>{l.who}</span>
              </span>
            </span>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

const WIDGETS = [Determination, Suggestion, GovernedAction, Ledger];

export function Layers() {
  return (
    <section id="layers" style={sx('background:#F4F6F3;border-top:1px solid #E6EAE5;padding:110px 0')}>
      <div style={sx('max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)')}>
        <SectionHead eyebrow={LAYERS_HEAD.eyebrow} headline={LAYERS_HEAD.headline} support={LAYERS_HEAD.support} />
        <div
          className="mkrail mk-four"
          style={sx('display:grid;gap:16px;margin-top:44px')}
        >
          {LAYERS.map((l, i) => {
            const Widget = WIDGETS[i];
            return (
              <Fragment key={i}>
                <div
                  className="mkcard mk-split"
                  style={sx('background:#fff;border:1px solid #DDE2DC;border-radius:14px;overflow:hidden')}
                >
                  <div style={sx('padding:24px 24px 20px')}>
                    <span style={sx('display:flex;align-items:center;justify-content:space-between;gap:10px')}>
                      <span
                        style={sx(
                          "font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:#0A5A4B;background:#E3F0EB;padding:6px 10px;border-radius:6px"
                        )}
                      >
                        {l.kicker}
                      </span>
                      <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>
                        {l.n}
                      </span>
                    </span>
                    <h3 style={sx('font-weight:600;font-size:24px;line-height:1.16;letter-spacing:-0.024em;margin:16px 0 0')}>{l.title}</h3>
                    <p style={sx('font-size:14.5px;line-height:1.58;margin:12px 0 0;color:#3A443E')}>{l.body}</p>
                  </div>
                  <Widget />
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
