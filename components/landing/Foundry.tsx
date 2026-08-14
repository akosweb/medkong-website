import { Fragment } from 'react';
import { sx } from '@/lib/css';
import { useLanding } from './state';

export function Foundry() {
  const { palantirPoints } = useLanding();

  return (
    <section id="foundry" style={sx("background:#0A5A4B;color:#fff;padding:110px 0")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)")}>
    <div className="mkcols" style={sx("display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.15fr);gap:48px clamp(32px,6vw,100px);align-items:start")}>
    <div>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#8FD3C1")}>Why Palantir</span>
    <div style={sx("background:#fff;border-radius:10px;padding:14px 18px;display:flex;width:fit-content;margin:22px 0 0")}>
    <img src="/assets/palantir-wordmark.png" alt="Palantir" style={sx("height:30px;width:auto")} />
    </div>
    <h2 style={sx("font-weight:600;font-size:clamp(32px,3.7vw,52px);line-height:1.06;letter-spacing:-0.032em;margin:24px 0 0")}>MEDKONG is built on Palantir Foundry.</h2>
    <p style={sx("font-size:17.5px;line-height:1.62;margin:22px 0 0;color:#CFE6DE")}>Serious workflow infrastructure needs a serious foundation. Foundry is what turns a dozen disconnected systems into one governed operational model — and what makes AI decisions inside revenue workflows traceable rather than plausible.</p>
    <p style={sx("font-size:17.5px;line-height:1.62;margin:18px 0 0;color:#CFE6DE")}>It is not a badge on the page. It is the layer every module reads from, writes to, and is audited against.</p>
    </div>
    <div style={sx("display:grid;gap:12px")}>
    {palantirPoints.map((p, i) => (
              <Fragment key={i}>
    <div style={sx("border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.06);border-radius:12px;padding:20px 22px")}>
    <p style={sx("margin:0;font-weight:600;font-size:17px;letter-spacing:-0.015em")}>{p.name}</p>
    <p style={sx("margin:9px 0 0;font-size:14.5px;line-height:1.58;color:#BFDCD3")}>{p.detail}</p>
    </div>
    </Fragment>
            ))}
    </div>
    </div>
    <div style={sx("margin-top:44px;padding-top:32px;border-top:1px solid rgba(255,255,255,.16);display:flex;flex-wrap:wrap;gap:20px 48px;align-items:center")}>
    <span style={sx("font:500 11px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#8FD3C1")}>Where Foundry sits</span>
    <span style={sx("display:flex;flex-wrap:wrap;gap:10px;align-items:center;font-size:14px")}>
    <span style={sx("padding:8px 13px;border-radius:7px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18)")}>Source systems · EHR, PM, clearinghouse, documents</span>
    <span style={sx("color:#8FD3C1")}>→</span>
    <span style={sx("padding:8px 13px;border-radius:7px;background:#fff;color:#0A5A4B;font-weight:600")}>Foundry ontology &amp; orchestration</span>
    <span style={sx("color:#8FD3C1")}>→</span>
    <span style={sx("padding:8px 13px;border-radius:7px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18)")}>MEDKONG kits</span>
    <span style={sx("color:#8FD3C1")}>→</span>
    <span style={sx("padding:8px 13px;border-radius:7px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18)")}>Operator workbenches</span>
    </span>
    </div>
    </div>
    </section>
  );
}
