import { Fragment } from 'react';
import { sx } from '@/lib/css';
import { useLanding } from './state';

export function Audience() {
  const { segments } = useLanding();

  return (
    <section style={sx("background:#F4F6F3;border-top:1px solid #E6EAE5;border-bottom:1px solid #E6EAE5;padding:110px 0")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)")}>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>Who it’s for</span>
    <h2 style={sx("font-weight:600;font-size:clamp(32px,3.7vw,52px);line-height:1.06;letter-spacing:-0.032em;margin:18px 0 0;max-width:26ch")}>Built for operators running complex revenue work.</h2>
    <div className="mkrail" style={sx("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr));gap:20px;margin-top:44px")}>
    {segments.map((s, i) => (
            <Fragment key={i}>
    <div className="mkcard" style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:14px;overflow:hidden")}>
    <div style={sx("padding:24px 26px 20px")}>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.13em;text-transform:uppercase;color:#6B736C")}>{s.n} — {s.kicker}</span>
    <h3 style={sx("font-weight:600;font-size:24px;line-height:1.2;letter-spacing:-0.024em;margin:12px 0 0")}>{s.title}</h3>
    <p style={sx("font-size:15px;line-height:1.6;margin:12px 0 0;color:#3A443E")}>{s.body}</p>
    </div>
    <div style={sx("border-top:1px solid #EEF1ED;background:#FAFBFA;padding:18px 26px;display:flex;align-items:center;gap:28px;flex-wrap:wrap")}>
    <span><span style={sx("display:block;font-weight:600;font-size:23px;letter-spacing:-0.024em")}>{s.statA}</span><span style={sx("font:400 11.5px/1.4 'IBM Plex Mono',monospace;color:#616961")}>{s.labelA}</span></span>
    <span><span style={sx("display:block;font-weight:600;font-size:23px;letter-spacing:-0.024em")}>{s.statB}</span><span style={sx("font:400 11.5px/1.4 'IBM Plex Mono',monospace;color:#616961")}>{s.labelB}</span></span>
    <span style={sx("margin-left:auto;font:500 11px/1 'IBM Plex Mono',monospace;padding:7px 10px;border-radius:5px;background:#E3F0EB;color:#0A5A4B")}>{s.chip}</span>
    </div>
    </div>
    </Fragment>
          ))}
    </div>
    <div style={sx("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:20px;margin-top:20px")}>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:12px;padding:20px 22px")}>
    <h4 style={sx("font-weight:600;font-size:19px;line-height:1.25;letter-spacing:-0.02em;margin:0")}>RCM service operators</h4>
    <p style={sx("font-size:14px;line-height:1.55;margin:9px 0 0;color:#5A625C")}>Margin is throughput per FTE. Deploy across client books, keep data separated, price against measurable automation rates.</p>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:12px;padding:20px 22px")}>
    <h4 style={sx("font-weight:600;font-size:19px;line-height:1.25;letter-spacing:-0.02em;margin:0")}>Healthcare platforms</h4>
    <p style={sx("font-size:14px;line-height:1.55;margin:9px 0 0;color:#5A625C")}>Building administrative software of your own? Use the kit as the operational backbone instead of rebuilding integrations and governance.</p>
    </div>
    </div>
    </div>
    </section>
  );
}
