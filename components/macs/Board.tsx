import { Fragment } from 'react';
import { sx } from '@/lib/css';
import {
  BOARD,
  CASE,
  DECISION_MIX,
  JUDGED_BOARD,
  LEDGER_DETAIL,
  LEDGER_ROWS,
  OUTCOMES,
  POLICY_STACK,
  QUEUE_ROWS,
  QUEUE_STATS,
} from '@/lib/macs-data';
import { Chip, Label, PanelGhost, PanelPrimary, SectionHead, Tag } from './mock';
import { useMacs } from './state';

const ROW_HEAD =
  "font:500 9.5px/1 'IBM Plex Mono',monospace;letter-spacing:.1em;text-transform:uppercase;color:#6B736C;border-bottom:1px solid #EEF1ED";
const MONO = "font:400 12px/1.4 'IBM Plex Mono',monospace;color:#616961";

export function Board() {
  const { isDecision, isLedger, isPolicy, isQueue, tab, tabs } = useMacs();

  return (
    <section
      id="board"
      style={sx('background:#EEF2EF;border-top:1px solid #E0E7E2;border-bottom:1px solid #E0E7E2;padding:110px 0')}
    >
      <div style={sx('max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)')}>
        <SectionHead eyebrow={BOARD.eyebrow} headline={BOARD.headline} support={BOARD.support} />

        <div style={sx('display:flex;gap:6px;margin-top:38px;overflow-x:auto;padding-bottom:2px;border-bottom:1px solid #D8E0DA')}>
          {tabs.map((t, i) => (
            <Fragment key={i}>
              <button type="button" className="mktab" onClick={t.select} style={sx(t.style)}>
                {t.label}
              </button>
            </Fragment>
          ))}
        </div>

        <div
          className="mkcols"
          style={sx(
            'display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.9fr);gap:36px clamp(32px,4vw,72px);margin-top:40px;align-items:start'
          )}
        >
          <div>
            <h3 style={sx('font-weight:600;font-size:clamp(26px,2.4vw,34px);line-height:1.12;letter-spacing:-0.028em;margin:0')}>
              {tab.title}
            </h3>
            <p style={sx('font-size:16px;line-height:1.62;margin:18px 0 0;color:#3A443E')}>{tab.body}</p>
            <div style={sx('margin-top:24px;display:grid;gap:12px')}>
              {tab.proof.map((p, i) => (
                <Fragment key={i}>
                  <span
                    style={sx(
                      'display:grid;grid-template-columns:18px minmax(0,1fr);gap:11px;align-items:start;font-size:15px;line-height:1.5'
                    )}
                  >
                    <span style={sx('width:7px;height:7px;margin-top:7px;border-radius:2px;background:#12866F')}></span>
                    <span>{p}</span>
                  </span>
                </Fragment>
              ))}
            </div>
          </div>

          <div className="mkscale" data-scale="880">
            <div
              style={sx(
                'border:1px solid #DDE2DC;border-radius:14px;box-shadow:0 18px 48px -22px rgba(14,21,18,.2);overflow:hidden;background:#fff'
              )}
            >
              <div style={sx('display:flex;align-items:center;gap:12px;padding:12px 16px;background:#F7F9F7;border-bottom:1px solid #E6EAE5')}>
                <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#616961")}>
                  {tab.slug}
                </span>
                <span
                  style={sx(
                    "margin-left:auto;display:inline-flex;align-items:center;gap:7px;font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.1em;text-transform:uppercase;color:#0A5A4B"
                  )}
                >
                  <span style={sx('width:6px;height:6px;border-radius:50%;background:#12866F;animation:mkpulse 1.8s ease-in-out infinite')}></span>
                  {tab.state}
                </span>
              </div>

              {isQueue ? <QueuePanel /> : null}
              {isPolicy ? <PolicyPanel /> : null}
              {isLedger ? <LedgerPanel /> : null}
              {isDecision ? <DecisionPanel /> : null}
            </div>
          </div>
        </div>
        <p style={sx("font:400 11.5px/1 'IBM Plex Mono',monospace;color:#6B736C;margin:14px 0 0")}>
          The MEDKONG MAC review workbench. Sample data.
        </p>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- queue */

function QueuePanel() {
  const cols = 'minmax(84px,100px) 44px minmax(110px,1fr) minmax(90px,110px) 44px minmax(56px,70px)';
  return (
    <>
      <div style={sx('display:flex;align-items:center;gap:12px;padding:14px 16px;border-bottom:1px solid #EEF1ED')}>
        <Label>Search MAC</Label>
        <span style={sx('display:inline-flex;align-items:center;gap:8px;height:32px;padding:0 12px;border:1px solid #DDE2DC;border-radius:8px;font-size:13px;font-weight:500')}>
          <span style={sx('width:8px;height:8px;border-radius:2px;background:#12866F')}></span>
          {CASE.mac}
          <span style={sx('color:#6B736C;margin-left:6px')}>×</span>
        </span>
        <span style={sx('margin-left:auto')}>
          <Label>20 cases · 17 open</Label>
        </span>
      </div>
      <div style={sx('display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:#EEF1ED;border-bottom:1px solid #E6EAE5')}>
        {QUEUE_STATS.map((s, i) => (
          <Fragment key={i}>
            <div style={sx('background:#fff;padding:14px 16px')}>
              <p style={sx(`margin:0;font-weight:600;font-size:24px;letter-spacing:-0.02em;line-height:1;color:${s.risk ? '#B23A1B' : '#0E1512'}`)}>
                {s.n}
              </p>
              <p style={sx('margin:8px 0 0')}>
                <Label>{s.label}</Label>
              </p>
            </div>
          </Fragment>
        ))}
      </div>
      <div style={sx('display:flex')}>
        <div style={sx('flex:1.7 1 500px;min-width:0;border-right:1px solid #EEF1ED')}>
          <div style={sx(`display:grid;grid-template-columns:${cols};gap:10px;padding:9px 16px;${ROW_HEAD}`)}>
            <span>Case</span>
            <span>Rnd</span>
            <span>Received</span>
            <span>Status</span>
            <span>Step</span>
            <span>Due</span>
          </div>
          {QUEUE_ROWS.map((r, i) => (
            <Fragment key={i}>
              <div
                className="mkrow"
                style={sx(
                  `display:grid;grid-template-columns:${cols};gap:10px;padding:10px 16px;align-items:center;font-size:13px;` +
                    (i < QUEUE_ROWS.length - 1 ? 'border-bottom:1px solid #F1F3F0' : '')
                )}
              >
                <span style={sx(MONO + ';color:#0E1512')}>{r.id}</span>
                <span style={sx(MONO)}>{r.round}</span>
                <span style={sx(MONO)}>{r.received}</span>
                <Tag kind={r.k}>{r.status}</Tag>
                <span style={sx(MONO + ';color:#0E1512')}>{r.step}</span>
                <span style={sx(MONO + (r.late ? ';color:#B23A1B;font-weight:600' : ''))}>{r.due}</span>
              </div>
            </Fragment>
          ))}
        </div>
        <div style={sx('flex:1 1 250px;min-width:0;padding:16px;display:grid;gap:16px;align-content:start;background:#FAFBFA')}>
          <div>
            <Label>Decisions</Label>
            <p style={sx('margin:8px 0 0;font-weight:600;font-size:22px;letter-spacing:-0.02em;line-height:1')}>33% affirmed</p>
            <p style={sx('margin:5px 0 0;font-size:12px;color:#6B756E')}>of 3 reviewed decisions</p>
            <span style={sx('display:block;height:6px;border-radius:4px;background:#EDF0EC;overflow:hidden;margin-top:10px')}>
              <span style={sx('display:block;height:100%;width:33%;background:#12866F;border-radius:4px')}></span>
            </span>
            <div style={sx('margin-top:10px;display:grid')}>
              {DECISION_MIX.map((d, i) => (
                <Fragment key={i}>
                  <span style={sx('display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #EEF1ED;font-size:12.5px;color:#3A443E')}>
                    {d.label}
                    <span style={sx("font:500 12px/1.4 'IBM Plex Mono',monospace")}>{d.n}</span>
                  </span>
                </Fragment>
              ))}
            </div>
          </div>
          <div>
            <Label>Reviewer agreement</Label>
            <p style={sx('margin:8px 0 0;font-weight:600;font-size:22px;letter-spacing:-0.02em;line-height:1')}>85% verified</p>
            <p style={sx('margin:5px 0 0;font-size:12px;color:#6B756E')}>of 34 settled steps · 5 overridden</p>
            <span style={sx('display:block;height:6px;border-radius:4px;background:#EDF0EC;overflow:hidden;margin-top:10px')}>
              <span style={sx('display:block;height:100%;width:85%;background:#12866F;border-radius:4px')}></span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

/* -------------------------------------------------------------- policy */

function PolicyPanel() {
  const facts = [
    ['MAC', `${CASE.mac}`],
    ['Jurisdiction', `${CASE.jurisdiction} · contractor ${CASE.contractor}`],
    ['Facility state', CASE.state],
    ['Date of service', CASE.dos],
    ['Category', 'BLEPHAROPLASTY'],
    ['Procedure', `CPT ${CASE.hcpcs}`],
  ];
  return (
    <>
      <div style={sx('display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 16px;border-bottom:1px solid #EEF1ED')}>
        <span>
          <Label>Step 4 of 8 · P4</Label>
          <span style={sx('display:block;margin-top:6px;font-weight:600;font-size:16px;letter-spacing:-0.015em')}>Governing policy</span>
        </span>
        <span style={sx('display:flex;align-items:center;gap:10px')}>
          <Tag kind="ok">RESOLVED</Tag>
          <span style={sx('font-size:12px;color:#5A625C')}>Suggested · awaiting review</span>
        </span>
      </div>
      <div style={sx('display:flex')}>
        <div style={sx('flex:1 1 280px;min-width:0;border-right:1px solid #EEF1ED;padding:6px 0')}>
          <div style={sx('padding:10px 16px 6px')}>
            <Label>Jurisdiction context</Label>
          </div>
          {facts.map(([k, v], i) => (
            <Fragment key={i}>
              <div style={sx('display:grid;grid-template-columns:110px minmax(0,1fr);gap:10px;padding:9px 16px;border-top:1px solid #F1F3F0;font-size:12.5px;align-items:center')}>
                <Label>{k}</Label>
                <span style={sx('color:#0E1512')}>{v}</span>
              </div>
            </Fragment>
          ))}
        </div>
        <div style={sx('flex:1.6 1 480px;min-width:0;padding:16px;display:grid;gap:14px;align-content:start')}>
          <span style={sx('display:flex;align-items:center;gap:10px;height:34px;padding:0 12px;border:1px solid #DDE2DC;border-radius:8px;font-size:12.5px;color:#6B736C')}>
            <span style={sx('width:10px;height:10px;border:1.5px solid #6B736C;border-radius:50%')}></span>
            Search articles by ID or title
          </span>
          <div style={sx('display:grid;gap:8px')}>
            {POLICY_STACK.map((p, i) => (
              <Fragment key={i}>
                <div
                  style={sx(
                    'display:grid;grid-template-columns:64px minmax(0,1fr) auto;gap:12px;align-items:center;padding:12px 14px;border-radius:10px;' +
                      (p.on ? 'border:1px solid #0A5A4B;background:#F1F8F5' : 'border:1px dashed #DDE2DC;background:#fff')
                  )}
                >
                  <Label color={p.on ? '#0A5A4B' : '#6B736C'}>{p.kind}</Label>
                  <span style={sx('display:grid;gap:3px;min-width:0')}>
                    <span style={sx(`font-weight:600;font-size:13px;color:${p.on ? '#0E1512' : '#5A625C'}`)}>
                      {p.on ? `${p.id} · ` : ''}
                      {p.title}
                    </span>
                    {p.version ? <span style={sx(MONO)}>{p.version}</span> : null}
                  </span>
                  {p.on ? <Tag kind="ok">LINKED</Tag> : <Tag kind="neutral">NONE</Tag>}
                </div>
              </Fragment>
            ))}
          </div>
          <div style={sx('border:1px solid #E6EAE5;border-radius:10px;padding:12px 14px')}>
            <Label>Rationale · editable</Label>
            <p style={sx('margin:8px 0 0;font-size:12.5px;line-height:1.55;color:#3A443E')}>
              Category BLEPHAROPLASTY in {CASE.state} on {CASE.dos} falls under {CASE.mac} {CASE.jurisdiction}. Article {CASE.article} v3 is
              the active billing article for CPT {CASE.hcpcs}; its parent LCD {CASE.lcd} supplies the medical-necessity rule groups used at P5.
              No NCD is linked.
            </p>
          </div>
          <div style={sx('display:flex;justify-content:flex-end;gap:10px')}>
            <PanelGhost>No article applies</PanelGhost>
            <PanelGhost>Override</PanelGhost>
            <PanelPrimary>Verify and save</PanelPrimary>
          </div>
        </div>
      </div>
    </>
  );
}

/* -------------------------------------------------------------- ledger */

function LedgerPanel() {
  const cols = 'minmax(0,1.6fr) minmax(118px,130px) minmax(96px,120px) minmax(100px,116px)';
  return (
    <>
      <div style={sx('display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 16px;border-bottom:1px solid #EEF1ED')}>
        <span>
          <Label>Step 7 of 8 · P7</Label>
          <span style={sx('display:block;margin-top:6px;font-weight:600;font-size:16px;letter-spacing:-0.015em')}>Documentation</span>
        </span>
        <span style={sx('display:flex;align-items:center;gap:8px')}>
          <span style={sx("font:500 11px/1 'IBM Plex Mono',monospace;padding:7px 10px;border-radius:6px;background:#E3F0EB;color:#0A5A4B")}>Problems first</span>
          <span style={sx("font:500 11px/1 'IBM Plex Mono',monospace;padding:7px 10px;border-radius:6px;border:1px solid #E1E5E0;color:#616961")}>By requirement</span>
          <span style={sx("font:500 11px/1 'IBM Plex Mono',monospace;padding:7px 10px;border-radius:6px;border:1px solid #E1E5E0;color:#616961")}>By review state</span>
        </span>
      </div>
      <div style={sx(`display:grid;grid-template-columns:${cols};gap:10px;padding:9px 16px;${ROW_HEAD}`)}>
        <span>Requirement</span>
        <span>Finding</span>
        <span>Evidence source</span>
        <span>Review</span>
      </div>
      {LEDGER_ROWS.map((r, i) => (
        <Fragment key={i}>
          <div
            className="mkrow"
            style={sx(
              `display:grid;grid-template-columns:${cols};gap:10px;padding:10px 16px;align-items:center;font-size:13px;` +
                (i === 0 ? 'background:#F7F9F7;' : '') +
                'border-bottom:1px solid #F1F3F0'
            )}
          >
            <span style={sx('display:flex;align-items:center;gap:8px;min-width:0')}>
              <span style={sx(`width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:5px solid #6B736C;flex:none;${i === 0 ? '' : 'transform:rotate(-90deg)'}`)}></span>
              <span style={sx('white-space:nowrap;overflow:hidden;text-overflow:ellipsis')}>{r.req}</span>
            </span>
            <Tag kind={r.k}>{r.finding}</Tag>
            <span style={sx(MONO)}>{r.source}</span>
            <span style={sx(`font-size:12px;color:${r.review === 'Verified' ? '#0A5A4B' : '#616961'}`)}>{r.review}</span>
          </div>
          {i === 0 ? (
            <div style={sx('padding:14px 16px 16px 38px;background:#F7F9F7;border-bottom:1px solid #EEF1ED;display:grid;grid-template-columns:1fr 1fr;gap:14px')}>
              <div style={sx('background:#fff;border:1px solid #E6EAE5;border-radius:10px;padding:12px 14px')}>
                <Label>Model rationale</Label>
                <p style={sx('margin:8px 0 0;font-size:12.5px;line-height:1.55;color:#3A443E')}>{LEDGER_DETAIL.rationale}</p>
                <p style={sx('margin:10px 0 0;display:flex;gap:6px')}>
                  <Tag kind="neutral">EVIDENCE QUOTE · NONE</Tag>
                  <Tag kind="neutral">SOURCE · —</Tag>
                </p>
              </div>
              <div style={sx('display:grid;gap:10px;align-content:start')}>
                <div style={sx('background:#fff;border:1px solid #E6EAE5;border-radius:10px;padding:12px 14px')}>
                  <Label>Policy quotation</Label>
                  <p style={sx('margin:8px 0 0;font-size:12.5px;line-height:1.55;color:#3A443E')}>{LEDGER_DETAIL.policy}</p>
                </div>
                <div style={sx('display:flex;justify-content:flex-end;gap:8px')}>
                  <PanelGhost>Correct finding · note required</PanelGhost>
                  <PanelPrimary>Verify row</PanelPrimary>
                </div>
              </div>
            </div>
          ) : null}
        </Fragment>
      ))}
      <div style={sx('display:flex;align-items:center;gap:12px;padding:12px 16px;background:#FAFBFA')}>
        <span style={sx('font-size:12.5px;color:#5A625C')}>
          <strong style={sx('font-weight:600;color:#B23A1B')}>3 of 29</strong> rows still need a human outcome
        </span>
        <span style={sx('margin-left:auto;display:flex;gap:8px')}>
          <PanelGhost>Bulk-verify 26 clean rows</PanelGhost>
          <PanelPrimary muted>Save headline finding</PanelPrimary>
        </span>
      </div>
    </>
  );
}

/* ------------------------------------------------------------ decision */

function DecisionPanel() {
  return (
    <div style={sx('display:flex')}>
      <div style={sx('flex:1 1 340px;min-width:0;border-right:1px solid #EEF1ED')}>
        <div style={sx('padding:14px 16px 10px;border-bottom:1px solid #EEF1ED')}>
          <Label>Judged board</Label>
          <span style={sx('display:block;margin-top:6px;font-weight:600;font-size:15px;letter-spacing:-0.015em')}>7 of 7 gates reviewed</span>
        </div>
        {JUDGED_BOARD.map((g, i) => (
          <Fragment key={i}>
            <div style={sx('display:grid;grid-template-columns:30px minmax(0,1fr) auto;gap:10px;align-items:center;padding:10px 16px;border-bottom:1px solid #F1F3F0')}>
              <span style={sx("font:600 11.5px/1 'IBM Plex Mono',monospace;color:#0A5A4B")}>{g.n}</span>
              <span style={sx('display:grid;gap:3px;min-width:0')}>
                <span style={sx('font-size:13px;font-weight:500;color:#0E1512')}>{g.name}</span>
                <span style={sx("font:400 11px/1.3 'IBM Plex Mono',monospace;color:#616961")}>{g.by}</span>
              </span>
              <Tag kind={g.k}>{g.status}</Tag>
            </div>
          </Fragment>
        ))}
      </div>
      <div style={sx('flex:1.3 1 460px;min-width:0;padding:16px;display:grid;gap:14px;align-content:start')}>
        <div>
          <Label>Proposed outcome · reviewer may replace</Label>
          <div style={sx('display:grid;gap:8px;margin-top:10px')}>
            {OUTCOMES.map((o, i) => (
              <Fragment key={i}>
                <div
                  style={sx(
                    'display:grid;grid-template-columns:18px minmax(0,1fr);gap:12px;align-items:center;padding:11px 14px;border-radius:10px;' +
                      (o.on ? 'border:1px solid #0A5A4B;background:#F1F8F5' : 'border:1px solid #DDE2DC;background:#fff')
                  )}
                >
                  <span style={sx(`width:14px;height:14px;border-radius:50%;border:1.5px solid ${o.on ? '#0A5A4B' : '#B9C1BB'};display:grid;place-items:center`)}>
                    {o.on ? <span style={sx('width:7px;height:7px;border-radius:50%;background:#0A5A4B')}></span> : null}
                  </span>
                  <span style={sx('display:flex;align-items:center;gap:10px;flex-wrap:wrap')}>
                    <Tag kind={o.v === 'AFFIRMED' ? 'ok' : o.v === 'REJECTED' ? 'neutral' : 'risk'}>{o.v}</Tag>
                    <span style={sx('font-size:12.5px;color:#5A625C')}>{o.help}</span>
                  </span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
        <div style={sx('display:grid;grid-template-columns:1fr 1fr;gap:12px')}>
          <div style={sx('border:1px solid #E6EAE5;border-radius:10px;padding:12px 14px')}>
            <Label>UTN</Label>
            <p style={sx('margin:8px 0 0;font-size:12.5px;line-height:1.5;color:#3A443E')}>Generated on issue. Non-affirmed decisions carry a UTN; rejected intake requests do not.</p>
          </div>
          <div style={sx('border:1px solid #E6EAE5;border-radius:10px;padding:12px 14px')}>
            <Label>Provider letter</Label>
            <p style={sx('margin:8px 0 0;font-size:12.5px;line-height:1.5;color:#3A443E')}>Composed from reviewed values: MAC identity, identifiers, decision language, 2 itemized P7 deficiencies, 1 override, resubmission terms.</p>
          </div>
        </div>
        <div style={sx('display:flex;align-items:center;gap:12px;padding-top:4px')}>
          <span style={sx('font-size:12px;line-height:1.45;color:#5A625C;max-width:36ch')}>Issue is final. The case locks, and the originating request is updated in the same transaction.</span>
          <span style={sx('margin-left:auto;display:flex;gap:8px')}>
            <Chip>Case {CASE.id} · {CASE.round}</Chip>
            <PanelPrimary>Issue decision</PanelPrimary>
          </span>
        </div>
      </div>
    </div>
  );
}
