import { Fragment } from 'react';
import { sx } from '@/lib/css';
import { useLanding } from './state';

export function Hero() {
  const { authRows, autoPct, clock, feed, firstPass, kpiAuth, openDemo, ringDash, sidebar } = useLanding();

  return (
    <section style={sx("background:#fff;padding:80px 0 0;overflow:hidden")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)")}>
    <div className="mk-hero-meta" style={sx("display:flex;align-items:center;gap:14px;flex-wrap:wrap")}>
    <span className="mk-hero-eyebrow" style={sx("display:inline-flex;align-items:center;font:500 11.5px/1.45 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B;background:#E3F0EB;padding:7px 11px;border-radius:6px")}>Modular AI kit for healthcare RCM</span>
    {/* Forces the credits onto their own line below the eyebrow on narrow screens. */}
    <span className="mk-hero-break" aria-hidden="true" />
    <span style={sx("display:inline-flex;align-items:center;gap:9px;font-size:13.5px;color:#6B756E")}><img src="/assets/akos-mark.png" alt="AKOS" style={sx("width:19px;height:19px;border-radius:3px")} />Built by AKOS</span>
    <span style={sx("width:1px;height:14px;background:#D6DBD6")}></span>
    <span style={sx("display:inline-flex;align-items:center;gap:9px;font-size:13.5px;color:#6B756E;white-space:nowrap")}>Built on <img src="/assets/palantir-wordmark.png" alt="Palantir" style={sx("height:15px;width:auto")} /> Foundry</span>
    </div>
    <div className="mkcols" style={sx("display:grid;grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);gap:40px clamp(32px,5vw,90px);align-items:start;margin-top:38px")}>
    <h1 style={sx("font-weight:600;font-size:clamp(42px,5.6vw,82px);line-height:1.02;letter-spacing:-0.038em;margin:0")}>Modular AI Kit for the revenue cycle.</h1>
    <div>
    <p style={sx("font-size:18px;line-height:1.62;margin:0;color:#3A443E")}>A kit of deployable AI and workflow modules for healthcare revenue cycle operations — patient access, prior auth, coding, claims, denials, payments and AR. Install the module that fixes your worst queue. Expand when it earns it. No rip and replace.</p>
    <div style={sx("display:flex;gap:12px;flex-wrap:wrap;margin-top:26px")}>
    <button type="button" className="mkcta" onClick={openDemo} style={sx("display:inline-flex;align-items:center;height:48px;padding:0 24px;border:0;border-radius:9px;background:#0A5A4B;color:#fff;font-weight:600;font-size:15.5px;cursor:pointer;transition:background .18s ease")}>Request a demo</button>
    <a className="mkghost" href="#platform" style={sx("display:inline-flex;align-items:center;min-height:48px;padding:12px 22px;border-radius:9px;border:1px solid #CFD6CF;color:#0E1512;font-weight:500;font-size:15.5px;white-space:nowrap;transition:background .18s ease,border-color .18s ease")}>Explore the workbenches</a>
    </div>
    </div>
    </div>
    </div>
    <div style={sx("max-width:1500px;margin:56px auto 0;padding:0 clamp(24px,4vw,56px)")}>
    <div className="mkscale" data-scale="1240">
    <div style={sx("border:1px solid #DDE2DC;border-radius:14px;box-shadow:0 24px 60px -22px rgba(14,21,18,.22);overflow:hidden;background:#fff")}>
    <div style={sx("display:flex;align-items:center;gap:14px;padding:12px 16px;background:#F7F9F7;border-bottom:1px solid #E6EAE5")}>
    <span style={sx("display:inline-flex;align-items:center;gap:9px;font-weight:600;font-size:13.5px")}>
    <span style={sx("width:20px;height:20px;border-radius:5px;background:#0E1512;color:#fff;display:grid;place-items:center;font:600 8px/1 'IBM Plex Mono',monospace")}>MK</span>
    <span><span style={sx("color:#0A5A4B")}>MED</span><span style={sx("color:#0E1512")}>KONG</span></span>
    </span>
    <span style={sx("width:1px;height:15px;background:#D6DBD6")}></span>
    <span style={sx("font-size:13px;color:#6B756E")}>Northside Health · Revenue Operations</span>
    <span style={sx("margin-left:auto;display:flex;align-items:center;gap:16px")}>
    <span style={sx("display:inline-flex;align-items:center;gap:7px;font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.1em;text-transform:uppercase;color:#0A5A4B")}><span style={sx("width:6px;height:6px;border-radius:50%;background:#12866F;animation:mkpulse 1.8s ease-in-out infinite")}></span>Live</span>
    <span style={sx("font:400 12px/1 'IBM Plex Mono',monospace;color:#6B756E")}>{clock}</span>
    <span style={sx("width:24px;height:24px;border-radius:50%;background:#E3F0EB;color:#0A5A4B;display:grid;place-items:center;font:600 9.5px/1 'IBM Plex Mono',monospace")}>DR</span>
    </span>
    </div>
    <div style={sx("display:flex;align-items:stretch;flex-wrap:wrap")}>
    <div style={sx("flex:1 1 210px;max-width:260px;background:#F7F9F7;border-right:1px solid #E6EAE5;padding:16px 12px;display:flex;flex-direction:column;gap:3px")}>
    <span style={sx("font:500 9.5px/1 'IBM Plex Mono',monospace;letter-spacing:.13em;text-transform:uppercase;color:#616961;padding:0 9px 10px")}>Modules</span>
    {sidebar.map((s, i) => (
                  <Fragment key={i}>
    <span style={sx(s.style)}><span>{s.name}</span><span style={sx("font:400 11px/1 'IBM Plex Mono',monospace;opacity:.8")}>{s.count}</span></span>
    </Fragment>
                ))}
    <span style={sx("margin-top:auto;padding:14px 9px 4px;border-top:1px solid #E6EAE5;display:flex;align-items:center;gap:10px")}>
    <span style={sx("width:30px;height:30px;flex:none;border-radius:50%;background:#E3F0EB;color:#0A5A4B;display:grid;place-items:center;font:600 10.5px/1 'IBM Plex Mono',monospace")}>DR</span>
    <span style={sx("display:flex;flex-direction:column;gap:2px;min-width:0")}>
    <span style={sx("font-weight:600;font-size:12.5px;color:#0E1512")}>D. Reyes</span>
    <span style={sx("font:400 10.5px/1.3 'IBM Plex Mono',monospace;color:#616961")}>Director, Revenue Ops</span>
    </span>
    </span>
    </div>
    <div style={sx("flex:5 1 380px;min-width:0;padding:22px 24px 26px")}>
    <div style={sx("display:flex;align-items:baseline;justify-content:space-between;gap:16px;flex-wrap:wrap")}>
    <h2 style={sx("font-weight:600;font-size:22px;letter-spacing:-0.02em;margin:0")}>Revenue cycle overview</h2>
    <span style={sx("display:flex;gap:6px")}>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;padding:7px 11px;border-radius:6px;background:#E3F0EB;color:#0A5A4B")}>7 days</span>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;padding:7px 11px;border-radius:6px;border:1px solid #E1E5E0;color:#616961")}>30 days</span>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;padding:7px 11px;border-radius:6px;border:1px solid #E1E5E0;color:#616961")}>Quarter</span>
    </span>
    </div>
    <div style={sx("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,168px),1fr));gap:12px;margin-top:18px")}>
    <div style={sx("border:1px solid #E6EAE5;border-radius:10px;padding:14px 15px")}>
    <p style={sx("margin:0;font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:#616961")}>Auths cleared</p>
    <p style={sx("margin:10px 0 0;font-weight:600;font-size:27px;letter-spacing:-0.02em")}>{kpiAuth}</p>
    <svg viewBox="0 0 120 24" preserveAspectRatio="none" style={sx("width:100%;height:24px;margin-top:9px;display:block")}><polyline points="0,19 15,17 30,18 45,13 60,14 75,9 90,10 105,5 120,3" fill="none" stroke="#12866F" strokeWidth="1.6" /></svg>
    </div>
    <div style={sx("border:1px solid #E6EAE5;border-radius:10px;padding:14px 15px")}>
    <p style={sx("margin:0;font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:#616961")}>First-pass acceptance</p>
    <p style={sx("margin:10px 0 0;font-weight:600;font-size:27px;letter-spacing:-0.02em")}>{firstPass}</p>
    <svg viewBox="0 0 120 24" preserveAspectRatio="none" style={sx("width:100%;height:24px;margin-top:9px;display:block")}><polyline points="0,16 15,14 30,15 45,11 60,12 75,8 90,7 105,6 120,4" fill="none" stroke="#12866F" strokeWidth="1.6" /></svg>
    </div>
    <div style={sx("border:1px solid #E6EAE5;border-radius:10px;padding:14px 15px")}>
    <p style={sx("margin:0;font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:#616961")}>Denials at risk</p>
    <p style={sx("margin:10px 0 0;font-weight:600;font-size:27px;letter-spacing:-0.02em;color:#B23A1B")}>$107.7K</p>
    <svg viewBox="0 0 120 24" preserveAspectRatio="none" style={sx("width:100%;height:24px;margin-top:9px;display:block")}><polyline points="0,6 15,8 30,7 45,11 60,10 75,13 90,15 105,14 120,18" fill="none" stroke="#B23A1B" strokeWidth="1.6" /></svg>
    </div>
    <div style={sx("border:1px solid #E6EAE5;border-radius:10px;padding:14px 15px")}>
    <p style={sx("margin:0;font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:#616961")}>AR over 90 days</p>
    <p style={sx("margin:10px 0 0;font-weight:600;font-size:27px;letter-spacing:-0.02em")}>22%</p>
    <svg viewBox="0 0 120 24" preserveAspectRatio="none" style={sx("width:100%;height:24px;margin-top:9px;display:block")}><polyline points="0,8 15,9 30,12 45,11 60,14 75,15 90,17 105,18 120,20" fill="none" stroke="#12866F" strokeWidth="1.6" /></svg>
    </div>
    </div>
    <div style={sx("display:flex;flex-wrap:wrap;align-items:flex-start;gap:16px;margin-top:16px")}>
    <div style={sx("flex:1 1 460px;min-width:0;border:1px solid #E6EAE5;border-radius:10px;overflow:hidden")}>
    <div style={sx("display:flex;align-items:center;justify-content:space-between;gap:12px;padding:11px 14px;background:#F7F9F7;border-bottom:1px solid #E6EAE5")}>
    <span style={sx("font-weight:600;font-size:13.5px")}>Prior auth work queue</span>
    <span style={sx("font:400 11.5px/1 'IBM Plex Mono',monospace;color:#616961")}>Sorted by payer SLA</span>
    </div>
    <div style={sx("display:grid;grid-template-columns:minmax(58px,76px) minmax(48px,70px) minmax(84px,1fr) minmax(44px,58px) minmax(66px,92px);gap:8px;padding:9px 14px;font:500 9.5px/1 'IBM Plex Mono',monospace;letter-spacing:.1em;text-transform:uppercase;color:#6B736C;border-bottom:1px solid #EEF1ED")}>
    <span>Case</span><span>Payer</span><span>Service</span><span>SLA</span><span>Status</span>
    </div>
    {authRows.map((r, i) => (
                      <Fragment key={i}>
    <div className="mkrow" style={sx("display:grid;grid-template-columns:minmax(58px,76px) minmax(48px,70px) minmax(84px,1fr) minmax(44px,58px) minmax(66px,92px);gap:8px;padding:10px 14px;align-items:center;font-size:13px;border-bottom:1px solid #F1F3F0")}>
    <span style={sx("font:400 12px/1 'IBM Plex Mono',monospace;color:#616961")}>{r.id}</span>
    <span>{r.payer}</span>
    <span style={sx("white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#3A443E")}>{r.svc}</span>
    <span style={sx("font:400 12px/1 'IBM Plex Mono',monospace")}>{r.sla}</span>
    <span style={sx(r.tag)}>{r.st}</span>
    </div>
    </Fragment>
                    ))}
    </div>
    <div style={sx("flex:1 1 250px;min-width:0;display:grid;gap:16px;align-content:start")}>
    <div style={sx("border:1px solid #E6EAE5;border-radius:10px;padding:16px;display:flex;align-items:center;gap:16px")}>
    <svg viewBox="0 0 104 104" style={sx("width:86px;height:86px;flex:none")}>
    <circle cx="52" cy="52" r="44" fill="none" stroke="#EDF0EC" strokeWidth="10" />
    <circle cx="52" cy="52" r="44" fill="none" stroke="#12866F" strokeWidth="10" strokeDasharray={ringDash} transform="rotate(-90 52 52)" />
    </svg>
    <div>
    <p style={sx("margin:0;font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:#616961")}>Automated, no touch</p>
    <p style={sx("margin:8px 0 0;font-weight:600;font-size:30px;letter-spacing:-0.025em")}>{autoPct}</p>
    <p style={sx("margin:6px 0 0;font-size:12.5px;line-height:1.45;color:#6B756E")}>Rest routed to a named reviewer</p>
    </div>
    </div>
    <div style={sx("border:1px solid #E6EAE5;border-radius:10px;overflow:hidden")}>
    <div style={sx("display:flex;align-items:center;justify-content:space-between;padding:11px 14px;background:#F7F9F7;border-bottom:1px solid #E6EAE5")}>
    <span style={sx("font-weight:600;font-size:13.5px")}>Agent activity</span>
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
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <p style={sx("font:400 11.5px/1 'IBM Plex Mono',monospace;color:#6B736C;margin:14px 0 0")}>Interface concept — all data synthetic and de-identified.</p>
    </div>
    </section>
  );
}
