import { sx } from '@/lib/css';

export function PartnersSection() {
  return (
    <section id="partners" style={sx("background:#fff;padding:88px 0")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)")}>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>02 — AKOS &amp; Palantir</span>
    <h2 style={sx("font-weight:600;font-size:clamp(30px,3.3vw,46px);line-height:1.07;letter-spacing:-0.03em;margin:18px 0 0")}>Two credibility marks, used consistently.</h2>
    <p style={sx("font-size:17px;line-height:1.62;margin:20px 0 0;color:#3A443E;max-width:70ch")}>"Built by AKOS" and "Built on Palantir Foundry" are the standing attribution pair. They appear together in the hero trust line, the trust band, the CTA stack card and the footer. The Palantir wordmark never appears inside product chrome — that space belongs to the app's own UI.</p>
    <div className="mkcols" style={sx("display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:18px;margin-top:36px")}>
    <div style={sx("border:1px solid #DDE2DC;border-radius:14px;padding:26px")}>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.13em;text-transform:uppercase;color:#616961")}>AKOS mark</span>
    <div style={sx("display:flex;flex-wrap:wrap;align-items:flex-end;gap:24px;margin-top:22px")}>
    <span style={sx("display:flex;flex-direction:column;gap:8px;align-items:center")}><img src="/assets/akos-mark.png" alt="AKOS" style={sx("width:52px;height:52px;border-radius:7px")} /><span style={sx("font:400 10.5px/1 'IBM Plex Mono',monospace;color:#6B736C")}>52px</span></span>
    <span style={sx("display:flex;flex-direction:column;gap:8px;align-items:center")}><img src="/assets/akos-mark.png" alt="AKOS" style={sx("width:36px;height:36px;border-radius:5px")} /><span style={sx("font:400 10.5px/1 'IBM Plex Mono',monospace;color:#6B736C")}>36px</span></span>
    <span style={sx("display:flex;flex-direction:column;gap:8px;align-items:center")}><img src="/assets/akos-mark.png" alt="AKOS" style={sx("width:20px;height:20px;border-radius:3px")} /><span style={sx("font:400 10.5px/1 'IBM Plex Mono',monospace;color:#6B736C")}>20px</span></span>
    </div>
    <p style={sx("margin:22px 0 0;font-size:14px;line-height:1.6;color:#3A443E")}>Always square with a small radius (3px at 20px, up to 7px at 52px). Pair with the words "Built by AKOS" at 600 weight, and link akos.ai in the footer and Why-AKOS section.</p>
    <div style={sx("margin-top:18px;display:flex;align-items:center;gap:12px;padding:14px;background:#F7F9F7;border:1px solid #EEF1ED;border-radius:10px")}>
    <img src="/assets/akos-mark.png" alt="AKOS" style={sx("width:32px;height:32px;border-radius:5px")} />
    <span><span style={sx("display:block;font-weight:600;font-size:15px")}>Built by AKOS</span><span style={sx("font-size:13px;color:#5A625C")}>Integration, ontology, agents, applications</span></span>
    </div>
    </div>
    <div style={sx("border:1px solid #DDE2DC;border-radius:14px;padding:26px")}>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.13em;text-transform:uppercase;color:#616961")}>Palantir wordmark</span>
    <div style={sx("display:flex;flex-wrap:wrap;align-items:flex-end;gap:24px;margin-top:22px")}>
    <span style={sx("display:flex;flex-direction:column;gap:8px;align-items:center")}><img src="/assets/palantir-wordmark.png" alt="Palantir" style={sx("height:30px;width:auto")} /><span style={sx("font:400 10.5px/1 'IBM Plex Mono',monospace;color:#6B736C")}>30px tall</span></span>
    <span style={sx("display:flex;flex-direction:column;gap:8px;align-items:center")}><img src="/assets/palantir-wordmark.png" alt="Palantir" style={sx("height:22px;width:auto")} /><span style={sx("font:400 10.5px/1 'IBM Plex Mono',monospace;color:#6B736C")}>22px</span></span>
    <span style={sx("display:flex;flex-direction:column;gap:8px;align-items:center")}><img src="/assets/palantir-wordmark.png" alt="Palantir" style={sx("height:15px;width:auto")} /><span style={sx("font:400 10.5px/1 'IBM Plex Mono',monospace;color:#6B736C")}>15px</span></span>
    </div>
    <p style={sx("margin:22px 0 0;font-size:14px;line-height:1.6;color:#3A443E")}>Height-constrained, width auto — never stretched. On any teal or ink ground it sits in a white chip: <span style={sx("font:400 12.5px/1 'IBM Plex Mono',monospace;color:#0A5A4B")}>background:#fff; border-radius:5px; padding:5px 9px</span>.</p>
    <div style={sx("margin-top:18px;display:flex;flex-wrap:wrap;gap:12px")}>
    <span style={sx("display:inline-flex;align-items:center;gap:10px;padding:12px 14px;background:#F7F9F7;border:1px solid #EEF1ED;border-radius:10px;font-weight:600;font-size:14.5px")}><img src="/assets/palantir-wordmark.png" alt="Palantir" style={sx("height:20px;width:auto")} />Built on Foundry</span>
    <span style={sx("display:inline-flex;align-items:center;gap:10px;padding:12px 14px;background:#0A5A4B;border-radius:10px;color:#fff;font-weight:600;font-size:14.5px")}><span style={sx("background:#fff;border-radius:5px;padding:5px 9px;display:inline-flex")}><img src="/assets/palantir-wordmark.png" alt="Palantir" style={sx("height:13px;width:auto")} /></span>Built on Foundry</span>
    </div>
    </div>
    </div>
    <div style={sx("margin-top:18px;border:1px solid #C9DED6;background:#F1F8F5;border-radius:12px;padding:20px 22px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#0A5A4B")}>Claim language — use verbatim</span>
    <div style={sx("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:14px 28px;margin-top:14px;font-size:14.5px;line-height:1.6;color:#3A443E")}>
    <span>"Built by AKOS"</span>
    <span>"Built on Palantir Foundry"</span>
    <span>"Built on Foundry" (short form, after first use)</span>
    <span style={sx("color:#96301A")}>Never: "Palantir partner", "certified", or any endorsement claim</span>
    </div>
    </div>
    </div>
    </section>
  );
}
