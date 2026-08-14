import { Fragment } from 'react';
import { sx } from '@/lib/css';
import { useLanding } from './state';

export function Workflows() {
  const { coverage, denialMix, slaHero } = useLanding();

  return (
    <section id="workflows" style={sx("background:#F4F6F3;border-top:1px solid #E6EAE5;padding:110px 0")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)")}>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>Workflow coverage</span>
    <div className="mkcols" style={sx("display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);gap:24px clamp(32px,6vw,90px);align-items:end;margin-top:18px")}>
    <h2 style={sx("font-weight:600;font-size:clamp(32px,3.7vw,52px);line-height:1.06;letter-spacing:-0.032em;margin:0")}>Built for the work that slows revenue down.</h2>
    <p style={sx("font-size:17px;line-height:1.62;margin:0;color:#3A443E")}>Eight workflows, deployable independently. Two of them are where most operators start, because that is where the leakage and the labor are.</p>
    </div>
    <div className="mkrail" style={sx("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,400px),1fr));gap:20px;margin-top:44px")}>
    <div className="mkcard" style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:14px;overflow:hidden")}>
    <div style={sx("padding:24px 26px")}>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:#0A5A4B;background:#E3F0EB;padding:6px 10px;border-radius:6px")}>Module 01 · Pre-service</span>
    <h3 style={sx("font-weight:600;font-size:29px;line-height:1.14;letter-spacing:-0.026em;margin:18px 0 0")}>Prior authorization</h3>
    <p style={sx("font-size:15.5px;line-height:1.6;margin:12px 0 0;color:#3A443E")}>Determine whether auth is required, assemble the clinical packet from the record, submit through the payer channel, and track the clock. Staff review exceptions, not every case.</p>
    </div>
    <div style={sx("margin:0 26px 26px;border:1px solid #E6EAE5;border-radius:10px;overflow:hidden")}>
    <div style={sx("display:flex;justify-content:space-between;gap:10px;padding:10px 14px;background:#F7F9F7;border-bottom:1px solid #EEF1ED;font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.09em;text-transform:uppercase;color:#616961")}>
    <span>Requirement check · UHC · 27447</span><span style={sx("color:#0A5A4B")}>Auth required</span>
    </div>
    <div style={sx("display:flex")}>
    <span style={sx("flex:1;padding:12px 14px;font-size:12.5px;color:#6B756E;border-right:1px solid #EEF1ED")}>Policy matched<br /><strong style={sx("font-weight:600;font-size:14px;color:#0E1512")}>MP-0142</strong></span>
    <span style={sx("flex:1;padding:12px 14px;font-size:12.5px;color:#6B756E;border-right:1px solid #EEF1ED")}>Packet<br /><strong style={sx("font-weight:600;font-size:14px;color:#0E1512")}>8 of 9 docs</strong></span>
    <span style={sx("flex:1;padding:12px 14px;font-size:12.5px;color:#6B756E")}>Payer SLA<br /><strong style={sx("font:600 14px/1.4 'IBM Plex Mono',monospace;color:#0E1512")}>{slaHero}</strong></span>
    </div>
    </div>
    </div>
    <div className="mkcard" style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:14px;overflow:hidden")}>
    <div style={sx("padding:24px 26px")}>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:#96301A;background:#FBE9E3;padding:6px 10px;border-radius:6px")}>Module 06 · Post-service</span>
    <h3 style={sx("font-weight:600;font-size:29px;line-height:1.14;letter-spacing:-0.026em;margin:18px 0 0")}>Denials and appeals</h3>
    <p style={sx("font-size:15.5px;line-height:1.6;margin:12px 0 0;color:#3A443E")}>Classify every denial by root cause, route it to correction or appeal, draft the letter with evidence attached, and track outcome by payer and reason code so the pattern gets fixed upstream.</p>
    </div>
    <div style={sx("margin:0 26px 26px;border:1px solid #E6EAE5;border-radius:10px;overflow:hidden")}>
    <div style={sx("display:flex;justify-content:space-between;gap:10px;padding:10px 14px;background:#F7F9F7;border-bottom:1px solid #EEF1ED;font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.09em;text-transform:uppercase;color:#616961")}>
    <span>Root cause mix · 30 days</span><span style={sx("color:#B23A1B")}>$107.7K at risk</span>
    </div>
    <div style={sx("padding:14px;display:grid;gap:11px")}>
    {denialMix.map((d, i) => (
                  <Fragment key={i}>
    <span style={sx("display:grid;grid-template-columns:62px minmax(0,1fr) 62px;gap:10px;align-items:center;font:400 12px/1 'IBM Plex Mono',monospace")}>
    <span style={sx("color:#B23A1B")}>{d.code}</span>
    <span style={sx("height:7px;border-radius:4px;background:#EDF0EC;display:block;overflow:hidden")}><span style={sx(d.bar)}></span></span>
    <span style={sx("text-align:right;color:#3A443E")}>{d.amt}</span>
    </span>
    </Fragment>
                ))}
    </div>
    </div>
    </div>
    </div>
    <div className="mkrail" style={sx("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:16px;margin-top:16px")}>
    {coverage.map((w, i) => (
            <Fragment key={i}>
    <div className="mkcard" style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:12px;padding:20px 21px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Module {w.n}</span>
    <h4 style={sx("font-weight:600;font-size:18.5px;line-height:1.25;letter-spacing:-0.018em;margin:10px 0 0")}>{w.name}</h4>
    <p style={sx("font-size:14px;line-height:1.55;margin:10px 0 0;color:#5A625C")}>{w.outcome}</p>
    <span style={sx("display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:16px;padding-top:13px;border-top:1px solid #EEF1ED;font:400 11.5px/1 'IBM Plex Mono',monospace;color:#616961")}>
    <span>{w.metricLabel}</span><span style={sx("color:#0A5A4B;font-weight:600")}>{w.metric}</span>
    </span>
    </div>
    </Fragment>
          ))}
    </div>
    </div>
    </section>
  );
}
