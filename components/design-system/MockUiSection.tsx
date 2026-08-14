import { Fragment } from 'react';
import { sx } from '@/lib/css';
import { useGuide } from './state';

export function MockUiSection() {
  const { clock, kpi, autoPct, ringDash, packetPct, packetBar, feed } = useGuide();

  return (
    <section id="mockui" style={sx("background:#EEF2EF;border-top:1px solid #E0E7E2;border-bottom:1px solid #E0E7E2;padding:88px 0")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)")}>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>11 — Mock UI kit</span>
    <h2 style={sx("font-weight:600;font-size:clamp(30px,3.3vw,46px);line-height:1.07;letter-spacing:-0.03em;margin:18px 0 0")}>Product mockups are the page's main image.</h2>
    <p style={sx("font-size:17px;line-height:1.62;margin:20px 0 0;color:#3A443E;max-width:70ch")}>Every mockup is a real app window: title bar, optional sidebar, dense content. They are built at a fixed design width and scaled — never reflowed — so they look identical at every viewport, just smaller. Each one carries a synthetic-data caption.</p>
    <div className="mkscale" data-scale="1180" style={sx("margin-top:36px")}>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:14px;box-shadow:0 18px 48px -22px rgba(14,21,18,.2);overflow:hidden")}>
    <div style={sx("display:flex;align-items:center;gap:14px;padding:12px 16px;background:#F7F9F7;border-bottom:1px solid #E6EAE5")}>
    <span style={sx("display:inline-flex;align-items:center;gap:9px;font-weight:600;font-size:13.5px")}>
    <span style={sx("width:20px;height:20px;border-radius:5px;background:#0E1512;color:#fff;display:grid;place-items:center;font:600 8px/1 'IBM Plex Mono',monospace")}>MK</span>
    <span><span style={sx("color:#0A5A4B")}>MED</span><span style={sx("color:#0E1512")}>KONG</span></span>
    </span>
    <span style={sx("width:1px;height:15px;background:#D6DBD6")}></span>
    <span style={sx("font-size:13px;color:#616961")}>Northside Health · Revenue Operations</span>
    <span style={sx("margin-left:auto;display:flex;align-items:center;gap:16px")}>
    <span style={sx("display:inline-flex;align-items:center;gap:7px;font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.1em;text-transform:uppercase;color:#0A5A4B")}><span style={sx("width:6px;height:6px;border-radius:50%;background:#12866F;animation:mkpulse 1.8s ease-in-out infinite")}></span>Live</span>
    <span style={sx("font:400 12px/1 'IBM Plex Mono',monospace;color:#616961")}>{clock}</span>
    <span style={sx("width:24px;height:24px;border-radius:50%;background:#E3F0EB;color:#0A5A4B;display:grid;place-items:center;font:600 9.5px/1 'IBM Plex Mono',monospace")}>DR</span>
    </span>
    </div>
    <div style={sx("display:flex;align-items:stretch;flex-wrap:wrap")}>
    <div style={sx("flex:1 1 210px;max-width:250px;background:#F7F9F7;border-right:1px solid #E6EAE5;padding:16px 12px;display:flex;flex-direction:column;gap:3px")}>
    <span style={sx("font:500 9.5px/1 'IBM Plex Mono',monospace;letter-spacing:.13em;text-transform:uppercase;color:#616961;padding:0 9px 10px")}>Modules</span>
    <span style={sx("display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 9px;border-radius:7px;font-size:13px;background:#E3F0EB;color:#0A5A4B;font-weight:500")}><span>Prior auth</span><span style={sx("font:400 11px/1 'IBM Plex Mono',monospace;opacity:.8")}>48</span></span>
    <span style={sx("display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 9px;border-radius:7px;font-size:13px;color:#616961")}><span>Coding review</span><span style={sx("font:400 11px/1 'IBM Plex Mono',monospace;opacity:.8")}>112</span></span>
    <span style={sx("display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 9px;border-radius:7px;font-size:13px;background:#E3F0EB;color:#0A5A4B;font-weight:500")}><span>Denials</span><span style={sx("font:400 11px/1 'IBM Plex Mono',monospace;opacity:.8")}>63</span></span>
    <span style={sx("display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 9px;border-radius:7px;font-size:13px;color:#616961")}><span>AR follow-up</span><span style={sx("font:400 11px/1 'IBM Plex Mono',monospace;opacity:.8")}>391</span></span>
    <span style={sx("margin-top:auto;padding:14px 9px 4px;border-top:1px solid #E6EAE5;display:flex;align-items:center;gap:10px")}>
    <span style={sx("width:30px;height:30px;flex:none;border-radius:50%;background:#E3F0EB;color:#0A5A4B;display:grid;place-items:center;font:600 10.5px/1 'IBM Plex Mono',monospace")}>DR</span>
    <span style={sx("display:flex;flex-direction:column;gap:2px;min-width:0")}>
    <span style={sx("font-weight:600;font-size:12.5px;color:#0E1512")}>D. Reyes</span>
    <span style={sx("font:400 10.5px/1.3 'IBM Plex Mono',monospace;color:#616961")}>Director, Revenue Ops</span>
    </span>
    </span>
    </div>
    <div style={sx("flex:5 1 380px;min-width:0;padding:20px 22px 22px")}>
    <div style={sx("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,150px),1fr));gap:12px")}>
    <div style={sx("border:1px solid #E6EAE5;border-radius:10px;padding:14px 15px")}>
    <p style={sx("margin:0;font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:#616961")}>KPI tile</p>
    <p style={sx("margin:10px 0 0;font-weight:600;font-size:27px;letter-spacing:-0.02em")}>{kpi}</p>
    <svg viewBox="0 0 120 24" preserveAspectRatio="none" style={sx("width:100%;height:24px;margin-top:9px;display:block")}><polyline points="0,19 15,17 30,18 45,13 60,14 75,9 90,10 105,5 120,3" fill="none" stroke="#12866F" strokeWidth="1.6" /></svg>
    </div>
    <div style={sx("border:1px solid #E6EAE5;border-radius:10px;padding:14px 15px")}>
    <p style={sx("margin:0;font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:#616961")}>Risk tile</p>
    <p style={sx("margin:10px 0 0;font-weight:600;font-size:27px;letter-spacing:-0.02em;color:#B23A1B")}>$107.7K</p>
    <svg viewBox="0 0 120 24" preserveAspectRatio="none" style={sx("width:100%;height:24px;margin-top:9px;display:block")}><polyline points="0,6 15,8 30,7 45,11 60,10 75,13 90,15 105,14 120,18" fill="none" stroke="#B23A1B" strokeWidth="1.6" /></svg>
    </div>
    <div style={sx("border:1px solid #E6EAE5;border-radius:10px;padding:14px 15px;display:flex;align-items:center;gap:14px")}>
    <svg viewBox="0 0 104 104" style={sx("width:64px;height:64px;flex:none")}>
    <circle cx="52" cy="52" r="44" fill="none" stroke="#EDF0EC" strokeWidth="10" />
    <circle cx="52" cy="52" r="44" fill="none" stroke="#12866F" strokeWidth="10" strokeDasharray={ringDash} transform="rotate(-90 52 52)" />
    </svg>
    <div>
    <p style={sx("margin:0;font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:#616961")}>Donut</p>
    <p style={sx("margin:8px 0 0;font-weight:600;font-size:24px;letter-spacing:-0.025em")}>{autoPct}</p>
    </div>
    </div>
    </div>
    <div style={sx("display:flex;flex-wrap:wrap;gap:14px;margin-top:14px")}>
    <div style={sx("flex:1 1 400px;min-width:0;border:1px solid #E6EAE5;border-radius:10px;overflow:hidden")}>
    <div style={sx("display:flex;align-items:center;justify-content:space-between;gap:12px;padding:11px 14px;background:#F7F9F7;border-bottom:1px solid #E6EAE5")}>
    <span style={sx("font-weight:600;font-size:13.5px")}>Work queue table</span>
    <span style={sx("font:400 11.5px/1 'IBM Plex Mono',monospace;color:#616961")}>Sorted by SLA</span>
    </div>
    <div style={sx("display:grid;grid-template-columns:minmax(58px,76px) minmax(48px,70px) minmax(84px,1fr) minmax(66px,92px);gap:8px;padding:9px 14px;font:500 9.5px/1 'IBM Plex Mono',monospace;letter-spacing:.1em;text-transform:uppercase;color:#6B736C;border-bottom:1px solid #EEF1ED")}>
    <span>Case</span><span>Payer</span><span>Service</span><span>Status</span>
    </div>
    <div className="mkrow" style={sx("display:grid;grid-template-columns:minmax(58px,76px) minmax(48px,70px) minmax(84px,1fr) minmax(66px,92px);gap:8px;padding:10px 14px;align-items:center;font-size:13px;border-bottom:1px solid #F1F3F0")}>
    <span style={sx("font:400 12px/1 'IBM Plex Mono',monospace;color:#616961")}>PA-40912</span><span>Aetna</span><span style={sx("color:#3A443E")}>MRI lumbar · 72148</span>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.05em;padding:5px 9px;border-radius:5px;background:#E3F0EB;color:#0A5A4B;justify-self:start")}>READY</span>
    </div>
    <div className="mkrow" style={sx("display:grid;grid-template-columns:minmax(58px,76px) minmax(48px,70px) minmax(84px,1fr) minmax(66px,92px);gap:8px;padding:10px 14px;align-items:center;font-size:13px;border-bottom:1px solid #F1F3F0")}>
    <span style={sx("font:400 12px/1 'IBM Plex Mono',monospace;color:#616961")}>PA-40907</span><span>UHC</span><span style={sx("color:#3A443E")}>Knee arthroplasty · 27447</span>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.05em;padding:5px 9px;border-radius:5px;background:#FBE9E3;color:#96301A;justify-self:start")}>REVIEW</span>
    </div>
    <div className="mkrow" style={sx("display:grid;grid-template-columns:minmax(58px,76px) minmax(48px,70px) minmax(84px,1fr) minmax(66px,92px);gap:8px;padding:10px 14px;align-items:center;font-size:13px")}>
    <span style={sx("font:400 12px/1 'IBM Plex Mono',monospace;color:#616961")}>PA-40903</span><span>BCBS</span><span style={sx("color:#3A443E")}>Sleep study · 95810</span>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.05em;padding:5px 9px;border-radius:5px;background:#F1F4F1;color:#5A625C;justify-self:start")}>SUBMITTED</span>
    </div>
    </div>
    <div style={sx("flex:1 1 240px;min-width:0;border:1px solid #E6EAE5;border-radius:10px;overflow:hidden")}>
    <div style={sx("display:flex;align-items:center;justify-content:space-between;padding:11px 14px;background:#F7F9F7;border-bottom:1px solid #E6EAE5")}>
    <span style={sx("font-weight:600;font-size:13.5px")}>Agent activity feed</span>
    <span style={sx("width:6px;height:6px;border-radius:50%;background:#12866F;animation:mkpulse 1.8s ease-in-out infinite")}></span>
    </div>
    {feed.map((f, i) => (
                    <Fragment key={i}>
    <div style={sx("display:grid;grid-template-columns:56px 48px minmax(0,1fr);gap:9px;padding:9px 14px;align-items:baseline;font-size:12px;line-height:1.45;border-bottom:1px solid #F1F3F0")}>
    <span style={sx("font:400 10.5px/1.4 'IBM Plex Mono',monospace;color:#6B736C")}>{f.time}</span>
    <span style={sx(f.kindStyle)}>{f.kind}</span>
    <span style={sx("color:#3A443E")}>{f.text}</span>
    </div>
    </Fragment>
                  ))}
    <div style={sx("padding:12px 14px")}>
    <div style={sx("display:flex;justify-content:space-between;gap:10px;font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.1em;text-transform:uppercase;color:#616961")}><span>Progress bar</span><span style={sx("color:#0A5A4B")}>{packetPct}</span></div>
    <div style={sx("margin-top:9px;height:6px;border-radius:4px;background:#EDF0EC;overflow:hidden")}><div style={sx(packetBar)}></div></div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <p style={sx("font:400 11.5px/1 'IBM Plex Mono',monospace;color:#6B736C;margin:14px 0 0")}>Interface concept — all data synthetic and de-identified.</p>
    <div style={sx("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:18px;margin-top:26px")}>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:12px;padding:20px 22px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Chrome rules</span>
    <ul style={sx("margin:12px 0 0;padding-left:18px;font-size:14px;line-height:1.7;color:#3A443E")}>
    <li>Title bar: #F7F9F7, 12px 16px, bottom border #E6EAE5</li>
    <li>Wordmark → divider → tenant name → live dot, clock, avatar</li>
    <li>Sidebar #F7F9F7, active item #E3F0EB with teal label</li>
    <li>User block pinned bottom with <span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#0A5A4B")}>margin-top:auto</span></li>
    <li>Window radius 14px, shadow <span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#0A5A4B")}>0 18px 48px -22px rgba(14,21,18,.2)</span></li>
    </ul>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:12px;padding:20px 22px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Table rules</span>
    <ul style={sx("margin:12px 0 0;padding-left:18px;font-size:14px;line-height:1.7;color:#3A443E")}>
    <li>Columns use <span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#0A5A4B")}>minmax(min,max)</span> — never fixed px</li>
    <li>Header: 9.5px mono 500, .10em, uppercase, #6B736C</li>
    <li>Cells 13px Archivo; IDs, amounts, ages in mono</li>
    <li>Row rule #F1F3F0; last row omits it</li>
    <li>Hover #F7F9F7 via <span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#0A5A4B")}>.mkrow</span></li>
    </ul>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:12px;padding:20px 22px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Scaling, not reflowing</span>
    <pre style={sx("margin-top:12px;color:#3A443E;background:#F7F9F7;border:1px solid #EEF1ED;border-radius:8px;padding:12px")}>&lt;div class="mkscale" data-scale="1240"&gt;
      &lt;!-- panel built at 1240px --&gt;
    &lt;/div&gt;</pre>
    <p style={sx("margin:12px 0 0;font-size:13.5px;line-height:1.6;color:#5A625C")}>The wrapper measures its column and applies a single transform, capping at <span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#0A5A4B")}>data-scale-max</span>. Mockup internals never get media queries.</p>
    </div>
    </div>
    </div>
    </section>
  );
}
