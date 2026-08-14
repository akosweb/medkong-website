import { Fragment } from 'react';
import { sx } from '@/lib/css';
import { useLanding } from './state';

export function Workbenches() {
  const { arRows, arWork, batchId, codingRows, holds, isAr, isAuth, isClaims, isCoding, isDenials, packetBar, packetPct, packetRows, slaHero, tab, tabs, tower, triageRows } = useLanding();

  return (
    <section style={sx("background:#EEF2EF;border-top:1px solid #E0E7E2;border-bottom:1px solid #E0E7E2;padding:110px 0")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)")}>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>Product intelligence</span>
    <div className="mkcols" style={sx("display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);gap:24px clamp(32px,6vw,90px);align-items:end;margin-top:18px")}>
    <h2 style={sx("font-weight:600;font-size:clamp(32px,3.7vw,52px);line-height:1.06;letter-spacing:-0.032em;margin:0")}>AI that works inside the workflow.</h2>
    <p style={sx("font-size:17px;line-height:1.62;margin:0;color:#3A443E")}>Five workbenches, one operational model underneath. Each is a place a person works, with the model doing the assembly, the checking and the first draft.</p>
    </div>
    <div style={sx("display:flex;gap:6px;margin-top:38px;overflow-x:auto;padding-bottom:2px;border-bottom:1px solid #D8E0DA")}>
    {tabs.map((t, i) => (
            <Fragment key={i}>
    <button type="button" className="mktab" onClick={t.select} style={sx(t.style)}>{t.label}</button>
    </Fragment>
          ))}
    </div>
    <div className="mkcols" style={sx("display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.9fr);gap:36px clamp(32px,4vw,72px);margin-top:40px;align-items:start")}>
    <div>
    <h3 style={sx("font-weight:600;font-size:clamp(26px,2.4vw,34px);line-height:1.12;letter-spacing:-0.028em;margin:0")}>{tab.title}</h3>
    <p style={sx("font-size:16px;line-height:1.62;margin:18px 0 0;color:#3A443E")}>{tab.pain}</p>
    <p style={sx("font-size:16px;line-height:1.62;margin:16px 0 0;color:#3A443E")}>{tab.capability}</p>
    <div style={sx("margin-top:24px;display:grid;gap:12px")}>
    {tab.proof.map((p, i) => (
                <Fragment key={i}>
    <span style={sx("display:grid;grid-template-columns:18px minmax(0,1fr);gap:11px;align-items:start;font-size:15px;line-height:1.5")}>
    <span style={sx("width:7px;height:7px;margin-top:7px;border-radius:2px;background:#12866F")}></span>
    <span>{p.t}</span>
    </span>
    </Fragment>
              ))}
    </div>
    </div>
    <div className="mkscale" data-scale="880">
    <div style={sx("border:1px solid #DDE2DC;border-radius:14px;box-shadow:0 18px 48px -22px rgba(14,21,18,.2);overflow:hidden;background:#fff")}>
    <div style={sx("display:flex;align-items:center;gap:12px;padding:12px 16px;background:#F7F9F7;border-bottom:1px solid #E6EAE5")}>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#616961")}>{tab.slug}</span>
    <span style={sx("margin-left:auto;display:inline-flex;align-items:center;gap:7px;font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.1em;text-transform:uppercase;color:#0A5A4B")}><span style={sx("width:6px;height:6px;border-radius:50%;background:#12866F;animation:mkpulse 1.8s ease-in-out infinite")}></span>{tab.state}</span>
    </div>
    {isAuth ? (<>
    <div style={sx("display:flex;flex-wrap:wrap")}>
    <div style={sx("flex:1 1 420px;min-width:0;border-right:1px solid #EEF1ED")}>
    <div style={sx("padding:16px;display:flex;align-items:baseline;justify-content:space-between;gap:12px;border-bottom:1px solid #EEF1ED")}>
    <span><span style={sx("font-weight:600;font-size:16.5px")}>PA-40907 · Knee arthroplasty 27447</span><br /><span style={sx("font-size:12.5px;color:#616961")}>UHC Choice Plus · Dr. M. Álvarez · 08/19</span></span>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.06em;padding:5px 9px;border-radius:5px;background:#FBE9E3;color:#96301A")}>REVIEW</span>
    </div>
    <div style={sx("padding:14px 16px 8px;display:flex;justify-content:space-between;gap:10px;font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.1em;text-transform:uppercase;color:#616961")}>
    <span>Packet assembly</span><span style={sx("color:#0A5A4B")}>{packetPct}</span>
    </div>
    <div style={sx("margin:0 16px;height:6px;border-radius:4px;background:#EDF0EC;overflow:hidden")}><div style={sx(packetBar)}></div></div>
    {packetRows.map((p, i) => (
                      <Fragment key={i}>
    <div className="mkrow" style={sx("display:grid;grid-template-columns:minmax(0,1fr) minmax(100px,132px) 92px;gap:10px;padding:11px 16px;align-items:center;font-size:13px;border-bottom:1px solid #F1F3F0")}>
    <span>{p.item}</span>
    <span style={sx("font:400 11.5px/1.4 'IBM Plex Mono',monospace;color:#616961")}>{p.src}</span>
    <span style={sx(p.tag)}>{p.st}</span>
    </div>
    </Fragment>
                    ))}
    </div>
    <div style={sx("flex:1 1 244px;min-width:0;padding:16px;display:grid;gap:18px;align-content:start")}>
    <div>
    <p style={sx("margin:0;font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#616961")}>Payer policy match</p>
    <p style={sx("margin:9px 0 0;font-size:13px;line-height:1.55;color:#3A443E")}>MP-0142 · Total knee arthroplasty. Criteria 3 of 4 met; conservative therapy documented 14 weeks.</p>
    </div>
    <div>
    <p style={sx("margin:0;font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#616961")}>SLA remaining</p>
    <p style={sx("margin:8px 0 0;font:600 27px/1 'IBM Plex Mono',monospace;letter-spacing:-0.02em")}>{slaHero}</p>
    </div>
    <div style={sx("display:grid;gap:9px")}>
    <span style={sx("display:grid;place-items:center;height:38px;border-radius:8px;background:#0A5A4B;color:#fff;font-weight:600;font-size:14px")}>Submit to payer</span>
    <span style={sx("display:grid;place-items:center;height:38px;border-radius:8px;border:1px solid #CFD6CF;font-weight:500;font-size:14px")}>Request attestation</span>
    </div>
    </div>
    </div>
    </>) : null}
    {isCoding ? (<>
    <div style={sx("display:flex;flex-wrap:wrap")}>
    <div style={sx("flex:1 1 400px;min-width:0;padding:18px;border-right:1px solid #EEF1ED")}>
    <p style={sx("margin:0;font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#616961")}>Progress note · encounter 88214</p>
    <p style={sx("margin:12px 0 0;font-size:14px;line-height:1.75;color:#3A443E")}>Patient with known <span style={sx("background:#D7EDE4;color:#0A5A4B;padding:1px 4px;border-radius:3px")}>chronic diastolic heart failure</span>, NYHA class II, presenting for follow-up. Volume status improved on current diuretic regimen. Reviewed labs, ECG and prior echo; adjusted medication and counseled on sodium restriction. <span style={sx("background:#FBE1D8;color:#96301A;padding:1px 4px;border-radius:3px")}>Laterality not documented</span> for the wrist procedure performed at last visit.</p>
    <div style={sx("margin-top:18px;display:flex;gap:8px;flex-wrap:wrap")}>
    <span style={sx("font:500 11px/1 'IBM Plex Mono',monospace;padding:6px 9px;border-radius:5px;background:#F1F4F1;color:#5A625C")}>MDM: moderate</span>
    <span style={sx("font:500 11px/1 'IBM Plex Mono',monospace;padding:6px 9px;border-radius:5px;background:#F1F4F1;color:#5A625C")}>Time: 28 min</span>
    <span style={sx("font:500 11px/1 'IBM Plex Mono',monospace;padding:6px 9px;border-radius:5px;background:#E3F0EB;color:#0A5A4B")}>2 citations</span>
    </div>
    </div>
    <div style={sx("flex:1 1 280px;min-width:0;padding:16px;display:grid;gap:11px;align-content:start;background:#FAFBFA")}>
    <p style={sx("margin:0;font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#616961")}>Suggestions</p>
    {codingRows.map((c, i) => (
                      <Fragment key={i}>
    <div style={sx("border:1px solid #E6EAE5;border-radius:10px;padding:12px 13px;background:#fff")}>
    <span style={sx("display:flex;justify-content:space-between;gap:8px;font:400 11px/1 'IBM Plex Mono',monospace;color:#616961")}><span>{c.kind}</span><span style={sx("color:#0A5A4B;font-weight:600")}>{c.conf}</span></span>
    <p style={sx("margin:8px 0 0;font-size:13px;line-height:1.5")}>{c.txt}</p>
    <span style={sx("display:flex;gap:7px;margin-top:11px")}>
    <span style={sx("display:inline-flex;align-items:center;height:29px;padding:0 12px;border-radius:7px;background:#0A5A4B;color:#fff;font-weight:600;font-size:12.5px")}>Accept</span>
    <span style={sx("display:inline-flex;align-items:center;height:29px;padding:0 12px;border-radius:7px;border:1px solid #CFD6CF;font-size:12.5px")}>Reject</span>
    </span>
    </div>
    </Fragment>
                    ))}
    </div>
    </div>
    </>) : null}
    {isClaims ? (<>
    <div>
    <div style={sx("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,150px),1fr));border-bottom:1px solid #EEF1ED")}>
    {tower.map((c, i) => (
                      <Fragment key={i}>
    <div style={sx("padding:16px;border-right:1px solid #F1F3F0")}>
    <p style={sx("margin:0;font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#616961")}>{c.stage}</p>
    <p style={sx("margin:10px 0 0;font-weight:600;font-size:26px;letter-spacing:-0.024em")}>{c.n}</p>
    <p style={sx("margin:6px 0 0;font-size:12px;color:#616961")}>{c.note}</p>
    </div>
    </Fragment>
                    ))}
    </div>
    <div style={sx("padding:14px 16px 8px;display:flex;justify-content:space-between;gap:10px;font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.1em;text-transform:uppercase;color:#616961")}>
    <span>Held by QA · predicted denial</span><span>Batch {batchId}</span>
    </div>
    {holds.map((h, i) => (
                    <Fragment key={i}>
    <div className="mkrow" style={sx("display:grid;grid-template-columns:minmax(84px,108px) minmax(150px,1fr) minmax(52px,66px) minmax(96px,124px);gap:10px;padding:12px 16px;align-items:center;font-size:13px;border-bottom:1px solid #F1F3F0")}>
    <span style={sx("font:400 12px/1 'IBM Plex Mono',monospace;color:#616961")}>{h.claim}</span>
    <span>{h.flag}</span>
    <span style={sx("font:600 11.5px/1 'IBM Plex Mono',monospace;color:#B23A1B")}>{h.risk}</span>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.05em;padding:5px 9px;border-radius:5px;background:#F1F4F1;color:#5A625C;justify-self:start")}>{h.action}</span>
    </div>
    </Fragment>
                  ))}
    </div>
    </>) : null}
    {isDenials ? (<>
    <div>
    <div style={sx("display:grid;grid-template-columns:minmax(52px,64px) minmax(150px,1fr) minmax(66px,96px) minmax(70px,92px) minmax(84px,112px);gap:10px;padding:12px 16px;font:500 9.5px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:#6B736C;border-bottom:1px solid #EEF1ED")}>
    <span>CARC</span><span>Root cause</span><span>Payer</span><span>Amount</span><span>Routed to</span>
    </div>
    {triageRows.map((d, i) => (
                    <Fragment key={i}>
    <div className="mkrow" style={sx("display:grid;grid-template-columns:minmax(52px,64px) minmax(150px,1fr) minmax(66px,96px) minmax(70px,92px) minmax(84px,112px);gap:10px;padding:12px 16px;align-items:center;font-size:13px;border-bottom:1px solid #F1F3F0")}>
    <span style={sx("font:600 11.5px/1 'IBM Plex Mono',monospace;color:#B23A1B")}>{d.code}</span>
    <span>{d.reason}</span>
    <span style={sx("color:#616961")}>{d.payer}</span>
    <span style={sx("font:400 12.5px/1 'IBM Plex Mono',monospace")}>{d.amt}</span>
    <span style={sx(d.tag)}>{d.route}</span>
    </div>
    </Fragment>
                  ))}
    <div style={sx("display:flex;justify-content:space-between;gap:12px;padding:14px 16px;font-size:13px;color:#6B756E")}>
    <span>Appeal letter drafted with evidence for 4 of 6</span><span style={sx("font:600 12.5px/1 'IBM Plex Mono',monospace;color:#B23A1B")}>$107,700 at risk</span>
    </div>
    </div>
    </>) : null}
    {isAr ? (<>
    <div>
    <div style={sx("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,130px),1fr));border-bottom:1px solid #EEF1ED")}>
    {arRows.map((a, i) => (
                      <Fragment key={i}>
    <div style={sx("padding:14px 16px;border-right:1px solid #F1F3F0")}>
    <p style={sx("margin:0;font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.1em;text-transform:uppercase;color:#616961")}>{a.bucket} days</p>
    <p style={sx("margin:9px 0 0;font-weight:600;font-size:20px;letter-spacing:-0.02em")}>{a.amt}</p>
    <span style={sx("display:block;height:6px;border-radius:4px;margin-top:10px;background:#EDF0EC;overflow:hidden")}><span style={sx(a.bar)}></span></span>
    </div>
    </Fragment>
                    ))}
    </div>
    <div style={sx("display:grid;grid-template-columns:minmax(84px,110px) minmax(150px,1fr) minmax(46px,62px) minmax(66px,88px) minmax(92px,120px);gap:10px;padding:12px 16px;font:500 9.5px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:#6B736C;border-bottom:1px solid #EEF1ED")}>
    <span>Account</span><span>Payer · balance driver</span><span>Age</span><span>Balance</span><span>Next action</span>
    </div>
    {arWork.map((a, i) => (
                    <Fragment key={i}>
    <div className="mkrow" style={sx("display:grid;grid-template-columns:minmax(84px,110px) minmax(150px,1fr) minmax(46px,62px) minmax(66px,88px) minmax(92px,120px);gap:10px;padding:12px 16px;align-items:center;font-size:13px;border-bottom:1px solid #F1F3F0")}>
    <span style={sx("font:400 12px/1 'IBM Plex Mono',monospace;color:#616961")}>{a.acct}</span>
    <span>{a.driver}</span>
    <span style={sx("font:400 12px/1 'IBM Plex Mono',monospace")}>{a.age}</span>
    <span style={sx("font:400 12.5px/1 'IBM Plex Mono',monospace")}>{a.bal}</span>
    <span style={sx(a.tag)}>{a.action}</span>
    </div>
    </Fragment>
                  ))}
    </div>
    </>) : null}
    </div>
    </div>
    </div>
    <div style={sx("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:18px;margin-top:26px")}>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:12px;padding:20px 22px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Also in the kit</span>
    <h4 style={sx("font-weight:600;font-size:20px;line-height:1.25;letter-spacing:-0.02em;margin:10px 0 0")}>Payment posting &amp; reconciliation</h4>
    <p style={sx("font-size:14px;line-height:1.55;margin:9px 0 0;color:#5A625C")}>Remits matched to claims, variances explained against contract, exceptions queued instead of buried.</p>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:12px;padding:20px 22px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Also in the kit</span>
    <h4 style={sx("font-weight:600;font-size:20px;line-height:1.25;letter-spacing:-0.02em;margin:10px 0 0")}>Executive RCM command center</h4>
    <p style={sx("font-size:14px;line-height:1.55;margin:9px 0 0;color:#5A625C")}>Work in flight across every installed module: throughput, aging, denial patterns by payer, automation rate, human intervention.</p>
    </div>
    </div>
    </div>
    </section>
  );
}
