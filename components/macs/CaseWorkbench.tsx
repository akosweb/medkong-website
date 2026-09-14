import { Fragment } from 'react';
import { sx } from '@/lib/css';
import { CASE, CASE_KPIS, EVIDENCE_TABS, PAR_ELEMENTS, STEPS, VISIT_NOTE } from '@/lib/macs-data';
import { Chip, Label, Lock, PanelGhost, PanelPrimary, Tag, Window } from './mock';

const FACT = 'display:grid;gap:7px;padding:16px 18px;border-left:1px solid #EEF1ED';

/**
 * The MAC case workbench — the MAC page's hero mock, and the "For MACs"
 * specimen in the design guide. Built at 1240px; wrap it in `.mkscale`.
 */
export function CaseWorkbench({
  clock,
  shadow = '0 24px 60px -22px rgba(14,21,18,.22)',
}: {
  clock: string;
  shadow?: string;
}) {
  return (
    <Window tenant={`${CASE.mac} · ${CASE.jurisdiction} · MAC review`} clock={clock} shadow={shadow}>
      {/* case header */}
      <div
        style={sx(
          'display:flex;align-items:flex-start;justify-content:space-between;gap:24px;padding:20px 24px 18px;border-bottom:1px solid #E6EAE5;background:#F7F9F7'
        )}
      >
        <div>
          <span
            style={sx(
              "font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:#0A5A4B;background:#E3F0EB;padding:6px 9px;border-radius:5px"
            )}
          >
            {CASE.kind}
          </span>
          <p style={sx('margin:12px 0 0;font-weight:600;font-size:24px;letter-spacing:-0.024em;line-height:1.1')}>
            {CASE.name}
          </p>
          <p style={sx('margin:6px 0 0;font-size:13px;color:#5A625C')}>{CASE.demo}</p>
          <p style={sx("margin:10px 0 0;font:400 11.5px/1 'IBM Plex Mono',monospace;color:#616961;display:flex;gap:18px")}>
            <span>
              <span style={sx('letter-spacing:.08em')}>MBI</span> {CASE.mbi}
            </span>
            <span>
              <span style={sx('letter-spacing:.08em')}>DOB</span> {CASE.dob}
            </span>
          </p>
        </div>
        <div style={sx('display:grid;gap:9px;justify-items:end;text-align:right')}>
          <span style={sx('display:flex;align-items:center;gap:10px;font-size:13px;color:#3A443E')}>
            {CASE.status}
            <Chip>{CASE.channel}</Chip>
          </span>
          <span style={sx('font-weight:600;font-size:17px;letter-spacing:-0.015em')}>Due {CASE.due}</span>
          <span style={sx('font-size:12px;color:#6B756E')}>
            Received {CASE.received} · {CASE.mac} {CASE.jurisdiction} · contractor {CASE.contractor}
          </span>
          <span style={sx('display:flex;gap:8px')}>
            <Chip>
              Case {CASE.id} · {CASE.round}
            </Chip>
            <Chip>UTN not issued</Chip>
          </span>
        </div>
      </div>

      {/* KPI strip + facts */}
      <div style={sx('display:flex;border-bottom:1px solid #E6EAE5')}>
        <div
          style={sx(
            'flex:1 1 460px;display:grid;grid-template-columns:1fr 1fr;gap:1px;background:#EEF1ED;border-right:1px solid #E6EAE5'
          )}
        >
          {CASE_KPIS.map((k, i) => (
            <Fragment key={i}>
              <div style={sx('background:#fff;padding:16px 20px')}>
                <p
                  style={sx(
                    `margin:0;font-weight:600;font-size:24px;letter-spacing:-0.02em;line-height:1;color:${k.risk ? '#B23A1B' : '#0E1512'}`
                  )}
                >
                  {k.n}
                </p>
                <p style={sx('margin:9px 0 0')}>
                  <Label>{k.label}</Label>
                </p>
              </div>
            </Fragment>
          ))}
        </div>
        <div style={sx('flex:1.4 1 560px;display:grid;grid-template-columns:1fr 1fr')}>
          <div style={sx(FACT + ';border-left:0')}>
            <Label>Requested service</Label>
            <span style={sx('font-weight:600;font-size:14px')}>Procedure code {CASE.hcpcs}</span>
            <span style={sx('font-size:12.5px;color:#5A625C;line-height:1.5')}>
              {CASE.units} · Type of bill {CASE.bill}
            </span>
          </div>
          <div style={sx(FACT)}>
            <Label>Diagnosis</Label>
            <span style={sx('font-weight:600;font-size:14px')}>ICD-10 {CASE.icd}</span>
            <span style={sx('font-size:12.5px;color:#5A625C;line-height:1.5')}>
              Planned service date {CASE.dos} · Facility in {CASE.state}
            </span>
          </div>
          <div style={sx(FACT + ';border-left:0;border-top:1px solid #EEF1ED')}>
            <Label>Governing policy</Label>
            <span style={sx('display:flex;align-items:center;gap:8px')}>
              <Tag kind="ok">LCD {CASE.lcd}</Tag>
              <span style={sx('font-size:12.5px;color:#5A625C')}>Article {CASE.article}</span>
            </span>
          </div>
          <div style={sx(FACT + ';border-top:1px solid #EEF1ED')}>
            <Label>Current step</Label>
            <span style={sx('font-weight:600;font-size:14px')}>P1 — Completeness</span>
            <span style={sx('font-size:12.5px;color:#5A625C')}>{CASE.daysLeft} on the decision clock</span>
          </div>
        </div>
      </div>

      {/* body: board left, evidence right */}
      <div style={sx('display:flex;align-items:stretch')}>
        <div style={sx('flex:1.05 1 620px;min-width:0;padding:22px 24px 24px;border-right:1px solid #E6EAE5')}>
          {/* active step */}
          <div style={sx('border:1px solid #0A5A4B;background:#F1F8F5;border-radius:12px;overflow:hidden')}>
            <div
              style={sx(
                'display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 18px;border-bottom:1px solid #C9DED6'
              )}
            >
              <span>
                <Label>Step 1 of 8 · P1</Label>
                <span style={sx('display:block;margin-top:6px;font-weight:600;font-size:16px;letter-spacing:-0.015em')}>
                  Completeness
                </span>
              </span>
              <span style={sx('display:flex;align-items:center;gap:10px')}>
                <Tag kind="ok">COMPLETE</Tag>
                <span style={sx('font-size:12px;color:#5A625C')}>Awaiting review</span>
              </span>
            </div>
            <div style={sx('display:grid;grid-template-columns:1.15fr 1fr;gap:14px;padding:14px 18px 16px')}>
              <div style={sx('background:#fff;border:1px solid #DDE2DC;border-radius:10px;overflow:hidden')}>
                <div
                  style={sx(
                    'display:flex;align-items:baseline;gap:10px;padding:11px 14px;border-bottom:1px solid #EEF1ED;background:#F7F9F7'
                  )}
                >
                  <span style={sx('font-weight:600;font-size:13px')}>Required PAR elements</span>
                  <Label>Checked by hand</Label>
                </div>
                {PAR_ELEMENTS.map((e, i) => (
                  <Fragment key={i}>
                    <div
                      style={sx(
                        'display:grid;grid-template-columns:132px minmax(0,1fr);gap:10px;align-items:center;padding:8px 14px;border-bottom:1px solid #F1F3F0;font-size:12.5px'
                      )}
                    >
                      <Label>{e.k}</Label>
                      {e.code ? (
                        <span style={sx('justify-self:start')}>
                          <Chip>{e.v}</Chip>
                        </span>
                      ) : (
                        <span style={sx('color:#0E1512')}>{e.v}</span>
                      )}
                    </div>
                  </Fragment>
                ))}
                <div
                  style={sx(
                    'display:grid;grid-template-columns:132px minmax(0,1fr);gap:10px;align-items:center;padding:8px 14px;font-size:12.5px'
                  )}
                >
                  <Label>Documentation</Label>
                  <span style={sx('justify-self:start')}>
                    <Chip>2 notes · 2 files</Chip>
                  </span>
                </div>
              </div>
              <div style={sx('display:flex;flex-direction:column;gap:14px')}>
                <div style={sx('background:#fff;border:1px solid #DDE2DC;border-radius:10px;padding:14px 16px;flex:1')}>
                  <span style={sx('display:flex;align-items:baseline;gap:10px')}>
                    <span style={sx('font-weight:600;font-size:13px')}>Machine output</span>
                    <Label>Step 1 function</Label>
                  </span>
                  <span style={sx('display:flex;gap:6px;margin-top:14px')}>
                    <Tag kind="ok">COMPLETE</Tag>
                    <Tag kind="neutral">ALL_ELEMENTS_PRESENT</Tag>
                  </span>
                  <p style={sx('margin:12px 0 0;font-weight:600;font-size:15px;letter-spacing:-0.015em')}>Complete</p>
                  <p style={sx('margin:6px 0 0;font-size:12.5px;line-height:1.55;color:#5A625C')}>
                    All required PAR elements are present and medical documentation can be reviewed.
                  </p>
                  <p
                    style={sx(
                      'margin:14px 0 0;padding-top:12px;border-top:1px solid #EEF1ED;display:flex;align-items:center;gap:8px;font-size:12px;color:#5A625C'
                    )}
                  >
                    <Tag kind="neutral">SUGGESTED</Tag>
                    Awaiting review
                  </p>
                </div>
                <div style={sx('display:flex;justify-content:flex-end;gap:10px')}>
                  <PanelGhost>Reject</PanelGhost>
                  <PanelPrimary>Verify and save</PanelPrimary>
                </div>
              </div>
            </div>
          </div>

          {/* locked rail — two columns so it sits level with the evidence pane */}
          <div style={sx('display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px')}>
            {STEPS.slice(1).map((s, i) => (
              <Fragment key={i}>
                <div
                  style={sx(
                    'display:flex;align-items:center;gap:14px;padding:10px 16px;border:1px solid #E6EAE5;border-radius:10px;background:#FAFBFA'
                  )}
                >
                  <Lock />
                  <span style={sx('display:grid;gap:3px')}>
                    <Label>
                      Step {i + 2} of 8 · {s.n}
                    </Label>
                    <span style={sx('font-weight:600;font-size:13.5px;color:#3A443E')}>{s.name}</span>
                  </span>
                  <span style={sx('margin-left:auto')}>
                    <Label>Locked</Label>
                  </span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>

        {/* evidence */}
        <div style={sx('flex:1 1 520px;min-width:0;background:#FAFBFA;display:flex;flex-direction:column')}>
          <div
            style={sx(
              'display:flex;gap:2px;padding:6px 16px 0;border-bottom:1px solid #E6EAE5;background:#fff;overflow:hidden'
            )}
          >
            {EVIDENCE_TABS.map((t, i) => (
              <Fragment key={i}>
                <span
                  style={sx(
                    `padding:11px 11px;font-weight:600;font-size:12.5px;white-space:nowrap;border-bottom:2px solid ${
                      i === 0 ? '#0A5A4B' : 'transparent'
                    };margin-bottom:-1px;color:${i === 0 ? '#0A5A4B' : '#616961'}`
                  )}
                >
                  {t}
                </span>
              </Fragment>
            ))}
          </div>
          <div style={sx('padding:16px;display:grid;gap:12px;align-content:start')}>
            <div style={sx('background:#fff;border:1px solid #E6EAE5;border-radius:10px;padding:14px 16px')}>
              <span style={sx('display:flex;align-items:center;gap:8px')}>
                <Tag kind="ok">VISIT NOTE</Tag>
                <span style={sx("font:400 11px/1 'IBM Plex Mono',monospace;color:#616961")}>{VISIT_NOTE.id}</span>
              </span>
              <p style={sx('margin:12px 0 0;font-weight:600;font-size:12.5px;line-height:1.5;color:#0E1512')}>
                {VISIT_NOTE.title}
              </p>
              {VISIT_NOTE.lines.map((l, i) => (
                <Fragment key={i}>
                  <p style={sx('margin:8px 0 0;font-size:12.5px;line-height:1.55;color:#3A443E')}>{l}</p>
                </Fragment>
              ))}
            </div>
            <div style={sx('background:#fff;border:1px solid #E6EAE5;border-radius:10px;overflow:hidden')}>
              <div
                style={sx(
                  'display:flex;justify-content:space-between;align-items:center;padding:10px 14px;background:#F7F9F7;border-bottom:1px solid #EEF1ED'
                )}
              >
                <span style={sx('font-weight:600;font-size:13px')}>Attachments</span>
                <Label>2 files</Label>
              </div>
              {['01_oculoplastic_consult.pdf', '02_optometry_referral.pdf'].map((f, i) => (
                <Fragment key={i}>
                  <div
                    style={sx(
                      "display:flex;align-items:center;gap:10px;padding:10px 14px;font:400 12px/1 'IBM Plex Mono',monospace;color:#3A443E;" +
                        (i === 0 ? 'border-bottom:1px solid #F1F3F0' : '')
                    )}
                  >
                    <span style={sx('width:8px;height:10px;border:1.2px solid #6B736C;border-radius:2px;flex:none')}></span>
                    {f}
                    <span style={sx('margin-left:auto;color:#616961')}>1 page</span>
                  </div>
                </Fragment>
              ))}
            </div>
            <div style={sx('background:#fff;border:1px solid #E6EAE5;border-radius:10px;padding:14px 16px')}>
              <Label>Diagnosis on file</Label>
              <p style={sx('margin:8px 0 0;font-size:12.5px;line-height:1.55;color:#3A443E')}>
                <span style={sx("font:500 12px/1 'IBM Plex Mono',monospace;color:#0E1512")}>{CASE.icd}</span> · {CASE.dxText}. Named in
                rule group 2 of Article {CASE.article} for procedure {CASE.hcpcs}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
}
