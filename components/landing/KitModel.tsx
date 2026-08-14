import { sx } from '@/lib/css';

export function KitModel() {
  return (
    <section style={sx("background:#fff;padding:110px 0")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)")}>
    <div className="mkcols" style={sx("display:grid;grid-template-columns:minmax(0,1fr) minmax(0,2fr);gap:44px clamp(32px,6vw,90px);align-items:start")}>
    <div>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>Why the kit model</span>
    <h2 style={sx("font-weight:600;font-size:clamp(30px,3.3vw,46px);line-height:1.07;letter-spacing:-0.03em;margin:18px 0 0")}>Deploy modules, not monoliths.</h2>
    <p style={sx("font-size:17px;line-height:1.62;margin:20px 0 0;color:#3A443E")}>Platform replacements take years and are judged all at once. A kit is judged one workflow at a time, against the queue it was pointed at.</p>
    </div>
    <div className="mkrail" style={sx("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:18px")}>
    <div style={sx("border:1px solid #C9DED6;border-radius:12px;padding:22px;background:#F1F8F5")}>
    <div style={sx("display:flex;align-items:center;gap:10px")}><span style={sx("font:600 12px/1 'IBM Plex Mono',monospace;letter-spacing:.08em;color:#0A5A4B")}>PHASE 01</span><span style={sx("flex:1;height:2px;background:#12866F")}></span></div>
    <h3 style={sx("font-weight:600;font-size:20px;line-height:1.28;letter-spacing:-0.02em;margin:16px 0 0")}>One workflow, in production</h3>
    <p style={sx("font-size:14.5px;line-height:1.58;margin:11px 0 0;color:#3A443E")}>Pick the queue costing you the most. One module, one integration path, one operator workbench. Value measured on that queue alone.</p>
    <span style={sx("display:flex;gap:6px;flex-wrap:wrap;margin-top:16px")}><span style={sx("font:500 11px/1 'IBM Plex Mono',monospace;padding:6px 9px;border-radius:5px;background:#E3F0EB;color:#0A5A4B")}>Prior auth</span></span>
    </div>
    <div style={sx("border:1px solid #DDE2DC;border-radius:12px;padding:22px")}>
    <div style={sx("display:flex;align-items:center;gap:10px")}><span style={sx("font:600 12px/1 'IBM Plex Mono',monospace;letter-spacing:.08em;color:#0A5A4B")}>PHASE 02</span><span style={sx("flex:1;height:2px;background:#9FC9BD")}></span></div>
    <h3 style={sx("font-weight:600;font-size:20px;line-height:1.28;letter-spacing:-0.02em;margin:16px 0 0")}>Adjacent queues, same model</h3>
    <p style={sx("font-size:14.5px;line-height:1.58;margin:11px 0 0;color:#3A443E")}>The second module inherits the integrations, ontology and governance already in place, so it lands in weeks rather than quarters.</p>
    <span style={sx("display:flex;gap:6px;flex-wrap:wrap;margin-top:16px")}><span style={sx("font:500 11px/1 'IBM Plex Mono',monospace;padding:6px 9px;border-radius:5px;background:#F1F4F1;color:#5A625C")}>Coding</span><span style={sx("font:500 11px/1 'IBM Plex Mono',monospace;padding:6px 9px;border-radius:5px;background:#F1F4F1;color:#5A625C")}>Claim QA</span><span style={sx("font:500 11px/1 'IBM Plex Mono',monospace;padding:6px 9px;border-radius:5px;background:#F1F4F1;color:#5A625C")}>Denials</span></span>
    </div>
    <div style={sx("border:1px solid #DDE2DC;border-radius:12px;padding:22px")}>
    <div style={sx("display:flex;align-items:center;gap:10px")}><span style={sx("font:600 12px/1 'IBM Plex Mono',monospace;letter-spacing:.08em;color:#0A5A4B")}>PHASE 03</span><span style={sx("flex:1;height:2px;background:#D3E3DC")}></span></div>
    <h3 style={sx("font-weight:600;font-size:20px;line-height:1.28;letter-spacing:-0.02em;margin:16px 0 0")}>An RCM operating layer</h3>
    <p style={sx("font-size:14.5px;line-height:1.58;margin:11px 0 0;color:#3A443E")}>Enough modules in, and the kit becomes the layer leadership runs the cycle from: one view of work in flight, one audit trail, one place policy is encoded.</p>
    <span style={sx("display:flex;gap:6px;flex-wrap:wrap;margin-top:16px")}><span style={sx("font:500 11px/1 'IBM Plex Mono',monospace;padding:6px 9px;border-radius:5px;background:#F1F4F1;color:#5A625C")}>Posting</span><span style={sx("font:500 11px/1 'IBM Plex Mono',monospace;padding:6px 9px;border-radius:5px;background:#F1F4F1;color:#5A625C")}>AR</span><span style={sx("font:500 11px/1 'IBM Plex Mono',monospace;padding:6px 9px;border-radius:5px;background:#F1F4F1;color:#5A625C")}>Command center</span></span>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
