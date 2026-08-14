import { Fragment } from 'react';
import { sx } from '@/lib/css';
import { useLanding } from './state';

export function Implementation() {
  const { steps } = useLanding();

  return (
    <section style={sx("background:#fff;padding:110px 0")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)")}>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>Implementation</span>
    <h2 style={sx("font-weight:600;font-size:clamp(32px,3.7vw,52px);line-height:1.06;letter-spacing:-0.032em;margin:18px 0 0;max-width:24ch")}>Deploy the workflow you need. Expand from there.</h2>
    <div className="mkrail" style={sx("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:16px;margin-top:44px")}>
    {steps.map((s, i) => (
            <Fragment key={i}>
    <div style={sx("border:1px solid #DDE2DC;border-radius:12px;padding:20px")}>
    <div style={sx("display:flex;align-items:center;gap:10px")}><span style={sx("font:600 12px/1 'IBM Plex Mono',monospace;letter-spacing:.08em;color:#0A5A4B")}>{s.n}</span><span style={sx(s.rail)}></span></div>
    <h4 style={sx("font-weight:600;font-size:18px;line-height:1.25;letter-spacing:-0.02em;margin:16px 0 0")}>{s.name}</h4>
    <p style={sx("font-size:14px;line-height:1.55;margin:10px 0 0;color:#5A625C")}>{s.body}</p>
    </div>
    </Fragment>
          ))}
    </div>
    </div>
    </section>
  );
}
