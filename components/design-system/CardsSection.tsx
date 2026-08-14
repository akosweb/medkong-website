import { sx } from '@/lib/css';

export function CardsSection() {
  return (
    <section id="cards" style={sx("background:#fff;padding:88px 0")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)")}>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>10 — Cards</span>
    <h2 style={sx("font-weight:600;font-size:clamp(30px,3.3vw,46px);line-height:1.07;letter-spacing:-0.03em;margin:18px 0 0")}>Four card types cover the whole page.</h2>
    <p style={sx("font-size:17px;line-height:1.62;margin:20px 0 0;color:#3A443E;max-width:70ch")}>All share a 1px #DDE2DC border and white ground. Hover lift (<span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#0A5A4B")}>.mkcard</span>) only on cards that represent a thing the reader might click through to.</p>
    <div style={sx("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:18px;margin-top:36px")}>
    <div className="mkcard" style={sx("border:1px solid #DDE2DC;border-radius:14px;overflow:hidden")}>
    <div style={sx("padding:24px 26px")}>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:#0A5A4B;background:#E3F0EB;padding:6px 10px;border-radius:6px")}>Module 01 · Pre-service</span>
    <h3 style={sx("font-weight:600;font-size:26px;line-height:1.14;letter-spacing:-0.026em;margin:18px 0 0")}>Feature card</h3>
    <p style={sx("font-size:15px;line-height:1.6;margin:12px 0 0;color:#3A443E")}>Badge, headline, body, then an embedded mini-widget that proves the claim. The widget is the point.</p>
    </div>
    <div style={sx("margin:0 26px 26px;border:1px solid #E6EAE5;border-radius:10px;overflow:hidden")}>
    <div style={sx("display:flex;justify-content:space-between;gap:10px;padding:10px 14px;background:#F7F9F7;border-bottom:1px solid #EEF1ED;font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.09em;text-transform:uppercase;color:#616961")}>
    <span>Requirement check</span><span style={sx("color:#0A5A4B")}>Auth required</span>
    </div>
    <div style={sx("display:flex")}>
    <span style={sx("flex:1;padding:12px 14px;font-size:12.5px;color:#616961;border-right:1px solid #EEF1ED")}>Policy<br /><strong style={sx("font-weight:600;font-size:14px;color:#0E1512")}>MP-0142</strong></span>
    <span style={sx("flex:1;padding:12px 14px;font-size:12.5px;color:#616961")}>Packet<br /><strong style={sx("font-weight:600;font-size:14px;color:#0E1512")}>8 of 9</strong></span>
    </div>
    </div>
    </div>
    <div className="mkcard" style={sx("border:1px solid #DDE2DC;border-radius:12px;padding:20px 21px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Module 04</span>
    <h4 style={sx("font-weight:600;font-size:18.5px;line-height:1.25;letter-spacing:-0.018em;margin:10px 0 0")}>Compact card with metric</h4>
    <p style={sx("font-size:14px;line-height:1.55;margin:10px 0 0;color:#5A625C")}>Small kicker, tight headline, one sentence, then a footer rule with a labeled value on the right.</p>
    <span style={sx("display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:16px;padding-top:13px;border-top:1px solid #EEF1ED;font:400 11.5px/1 'IBM Plex Mono',monospace;color:#616961")}>
    <span>Coder throughput</span><span style={sx("color:#0A5A4B;font-weight:600")}>+31%</span>
    </span>
    </div>
    <div className="mkcard" style={sx("border:1px solid #DDE2DC;border-radius:14px;overflow:hidden")}>
    <div style={sx("padding:24px 26px 20px")}>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.13em;text-transform:uppercase;color:#6B736C")}>01 — SEGMENT CARD</span>
    <h3 style={sx("font-weight:600;font-size:22px;line-height:1.2;letter-spacing:-0.024em;margin:12px 0 0")}>Audience card with stat footer</h3>
    <p style={sx("font-size:15px;line-height:1.6;margin:12px 0 0;color:#3A443E")}>Numbered kicker, headline, body — then a tinted footer carrying two stats and a category chip.</p>
    </div>
    <div style={sx("border-top:1px solid #EEF1ED;background:#FAFBFA;padding:18px 26px;display:flex;align-items:center;gap:28px;flex-wrap:wrap")}>
    <span><span style={sx("display:block;font-weight:600;font-size:23px;letter-spacing:-0.024em")}>1</span><span style={sx("font:400 11.5px/1.4 'IBM Plex Mono',monospace;color:#616961")}>Module to start</span></span>
    <span><span style={sx("display:block;font-weight:600;font-size:23px;letter-spacing:-0.024em")}>0</span><span style={sx("font:400 11.5px/1.4 'IBM Plex Mono',monospace;color:#616961")}>Systems replaced</span></span>
    <span style={sx("margin-left:auto;font:500 11px/1 'IBM Plex Mono',monospace;padding:7px 10px;border-radius:5px;background:#E3F0EB;color:#0A5A4B")}>Enterprise</span>
    </div>
    </div>
    <div style={sx("border:1px solid #0A5A4B;background:#F1F8F5;border-radius:12px;padding:22px")}>
    <div style={sx("display:flex;align-items:center;gap:10px")}><span style={sx("font:600 12px/1 'IBM Plex Mono',monospace;letter-spacing:.08em;color:#0A5A4B")}>PHASE 01</span><span style={sx("flex:1;height:2px;background:#12866F")}></span></div>
    <h3 style={sx("font-weight:600;font-size:20px;line-height:1.28;letter-spacing:-0.02em;margin:16px 0 0")}>Highlighted card</h3>
    <p style={sx("font-size:14.5px;line-height:1.58;margin:11px 0 0;color:#3A443E")}>Teal border plus #F1F8F5 fill marks the one row or step that carries the emphasis — the first phase, the Foundry layer, the recommended module.</p>
    <span style={sx("display:flex;gap:6px;flex-wrap:wrap;margin-top:16px")}><span style={sx("font:500 11px/1 'IBM Plex Mono',monospace;padding:6px 9px;border-radius:5px;background:#E3F0EB;color:#0A5A4B")}>Emphasis</span></span>
    </div>
    </div>
    <div style={sx("margin-top:18px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:18px")}>
    <div style={sx("border:1px solid rgba(10,90,75,.18);background:#0A5A4B;border-radius:12px;padding:22px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#8FD3C1")}>On-teal card</span>
    <p style={sx("margin:14px 0 0;font-weight:600;font-size:17px;letter-spacing:-0.015em;color:#fff")}>Auditability by construction</p>
    <p style={sx("margin:9px 0 0;font-size:14.5px;line-height:1.58;color:#BFDCD3")}>Inside the teal band, cards become <span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#8FD3C1")}>rgba(255,255,255,.06)</span> with a <span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#8FD3C1")}>rgba(255,255,255,.18)</span> border. Body copy #BFDCD3, headings white.</p>
    </div>
    <div style={sx("border:1px solid #DDE2DC;border-radius:12px;padding:22px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Stat panel — seamless grid</span>
    <div style={sx("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,110px),1fr));gap:1px;margin-top:16px;background:#E6EAE5;border:1px solid #E6EAE5;border-radius:10px;overflow:hidden")}>
    <div style={sx("background:#fff;padding:18px 16px")}><p style={sx("margin:0;font-weight:600;font-size:34px;letter-spacing:-0.04em;line-height:1")}>38%</p><p style={sx("margin:12px 0 0;font-size:13px;line-height:1.45;color:#5A625C")}>Fewer manual touches</p></div>
    <div style={sx("background:#fff;padding:18px 16px")}><p style={sx("margin:0;font-weight:600;font-size:34px;letter-spacing:-0.04em;line-height:1")}>2.4d</p><p style={sx("margin:12px 0 0;font-size:13px;line-height:1.45;color:#5A625C")}>Denial to appeal</p></div>
    <div style={sx("background:#fff;padding:18px 16px")}><p style={sx("margin:0;font-weight:600;font-size:34px;letter-spacing:-0.04em;line-height:1")}>94%</p><p style={sx("margin:12px 0 0;font-size:13px;line-height:1.45;color:#5A625C")}>First-pass target</p></div>
    </div>
    <p style={sx("margin:16px 0 0;font-size:13.5px;line-height:1.6;color:#5A625C")}>1px gap over a border-colored ground gives hairline dividers with no double borders. Always state where a figure was measured.</p>
    </div>
    </div>
    </div>
    </section>
  );
}
