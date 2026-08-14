import { Fragment } from 'react';
import { sx } from '@/lib/css';
import { useLanding } from './state';

export function Platform() {
  const { kitCount, modules } = useLanding();

  return (
    <section id="platform" style={sx("background:#fff;padding:110px 0")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)")}>
    <div className="mkcols" style={sx("display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.25fr);gap:48px clamp(32px,6vw,110px);align-items:start")}>
    <div>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>What MEDKONG is</span>
    <h2 style={sx("font-weight:600;font-size:clamp(32px,3.7vw,52px);line-height:1.06;letter-spacing:-0.032em;margin:18px 0 0")}>Not another billing tool. Operational infrastructure for RCM.</h2>
    <p style={sx("font-size:17.5px;line-height:1.62;margin:24px 0 0;color:#3A443E")}>Each module owns a piece of the financial workflow — pre-service, mid-cycle or post-service — and reads from the same operational model of patients, encounters, claims, payers and dollars. Nothing is monolithic, and nothing is a chatbot bolted onto a portal.</p>
    <p style={sx("font-size:17.5px;line-height:1.62;margin:20px 0 0;color:#3A443E")}>Your EHR, PM system, clearinghouse and document stores stay where they are. Modules plug into the workflow your teams already run — no data migration, no platform replacement, no retraining the floor. MEDKONG maps your systems into one ontology, then runs work against it.</p>
    </div>
    <div className="mkscale" data-scale="620" data-scale-max="1.35">
    <div style={sx("border:1px solid #DDE2DC;border-radius:14px;box-shadow:0 14px 40px -20px rgba(14,21,18,.18);overflow:hidden;background:#fff")}>
    <div style={sx("display:flex;align-items:center;justify-content:space-between;gap:12px;padding:13px 16px;background:#F7F9F7;border-bottom:1px solid #E6EAE5")}>
    <span style={sx("font-weight:600;font-size:14px")}>Deployment configurator</span>
    <span style={sx("font:400 12px/1 'IBM Plex Mono',monospace;color:#6B756E")}>{kitCount} of 8 installed</span>
    </div>
    <div style={sx("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));gap:10px;padding:16px")}>
    {modules.map((m, i) => (
                  <Fragment key={i}>
    <button type="button" onClick={m.toggle} style={sx(m.style)}>
    <span style={sx("display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%")}>
    <span style={sx("font:500 9.5px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;opacity:.75")}>{m.phase}</span>
    <span style={sx(m.dot)}></span>
    </span>
    <span style={sx("font-weight:600;font-size:15px;line-height:1.3")}>{m.name}</span>
    </button>
    </Fragment>
                ))}
    </div>
    <div style={sx("padding:14px 16px;background:#0A5A4B;color:#fff;display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;align-items:center")}>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.09em;text-transform:uppercase")}>Shared ontology · integration · governance</span>
    <span style={sx("background:#fff;border-radius:5px;padding:5px 9px;display:inline-flex")}><img src="/assets/palantir-wordmark.png" alt="Palantir" style={sx("height:14px;width:auto")} /></span>
    </div>
    <div style={sx("padding:12px 16px;font:400 11.5px/1 'IBM Plex Mono',monospace;color:#6B736C")}>Click a module to add or remove it from the kit.</div>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
