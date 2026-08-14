import { sx } from '@/lib/css';

export function TypeSection() {
  return (
    <section id="type" style={sx("background:#fff;padding:88px 0")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)")}>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>04 — Typography</span>
    <h2 style={sx("font-weight:600;font-size:clamp(30px,3.3vw,46px);line-height:1.07;letter-spacing:-0.03em;margin:18px 0 0")}>Archivo for voice. IBM Plex Mono for machine.</h2>
    <p style={sx("font-size:17px;line-height:1.62;margin:20px 0 0;color:#3A443E;max-width:70ch")}>Archivo carries everything a person wrote: headings, body, buttons, card titles. IBM Plex Mono carries everything a system emitted: labels, IDs, timestamps, counts, codes, status tags. That split is the whole typographic idea — do not mix it up.</p>
    <div className="mkcols" style={sx("display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:18px;margin-top:36px")}>
    <div style={sx("border:1px solid #DDE2DC;border-radius:14px;padding:26px")}>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.13em;text-transform:uppercase;color:#616961")}>Archivo · 400 500 600 700</span>
    <p style={sx("font-weight:600;font-size:44px;letter-spacing:-0.032em;margin:16px 0 0")}>Aa Bb Cc 0123</p>
    <div style={sx("margin-top:18px;display:grid;gap:8px;font-size:14.5px;color:#3A443E")}>
    <span style={sx("font-weight:400")}>400 — long-form body, table cells</span>
    <span style={sx("font-weight:500")}>500 — ghost buttons, sidebar active items</span>
    <span style={sx("font-weight:600")}>600 — every heading, KPI number, button label</span>
    <span style={sx("font-weight:700")}>700 — available, currently unused</span>
    </div>
    </div>
    <div style={sx("border:1px solid #DDE2DC;border-radius:14px;padding:26px")}>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.13em;text-transform:uppercase;color:#616961")}>IBM Plex Mono · 400 500 600</span>
    <p style={sx("font:600 40px/1.1 'IBM Plex Mono',monospace;margin:16px 0 0")}>Aa Bb 0123</p>
    <div style={sx("margin-top:18px;display:grid;gap:8px;font:400 13.5px/1.5 'IBM Plex Mono',monospace;color:#3A443E")}>
    <span>400 — IDs, timestamps, amounts, ages</span>
    <span style={sx("font-weight:500")}>500 — eyebrows, column heads, tags, chips</span>
    <span style={sx("font-weight:600")}>600 — risk levels, confidence scores, SLA clocks</span>
    </div>
    <p style={sx("margin:18px 0 0;font-size:13.5px;line-height:1.6;color:#5A625C")}>Mono labels always get <span style={sx("font:400 12.5px/1 'IBM Plex Mono',monospace;color:#0A5A4B")}>letter-spacing:.10–.14em</span> and <span style={sx("font:400 12.5px/1 'IBM Plex Mono',monospace;color:#0A5A4B")}>text-transform:uppercase</span>.</p>
    </div>
    </div>
    <div style={sx("margin-top:26px;border:1px solid #DDE2DC;border-radius:14px;overflow:hidden")}>
    <div className="mkstack mk-colhead" style={sx("display:grid;grid-template-columns:minmax(180px,1fr) minmax(0,2fr) minmax(200px,1.1fr);gap:16px;padding:14px 22px;background:#F7F9F7;border-bottom:1px solid #E6EAE5;font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#616961")}>
    <span>Role</span><span>Specimen</span><span>Spec</span>
    </div>
    <div className="mkstack" style={sx("display:grid;grid-template-columns:minmax(180px,1fr) minmax(0,2fr) minmax(200px,1.1fr);gap:16px;padding:20px 22px;align-items:center;border-bottom:1px solid #F1F3F0")}>
    <span style={sx("font-weight:600;font-size:14.5px")}>H1 · hero</span>
    <span style={sx("font-weight:600;font-size:clamp(30px,3.4vw,54px);line-height:1.02;letter-spacing:-0.038em")}>Modular AI for the revenue cycle.</span>
    <span style={sx("font:400 12px/1.65 'IBM Plex Mono',monospace;color:#616961")}>clamp(42px,5.6vw,82px)<br />600 · 1.02 · -0.038em</span>
    </div>
    <div className="mkstack" style={sx("display:grid;grid-template-columns:minmax(180px,1fr) minmax(0,2fr) minmax(200px,1.1fr);gap:16px;padding:20px 22px;align-items:center;border-bottom:1px solid #F1F3F0")}>
    <span style={sx("font-weight:600;font-size:14.5px")}>H2 · section</span>
    <span style={sx("font-weight:600;font-size:clamp(26px,2.8vw,40px);line-height:1.06;letter-spacing:-0.032em")}>Built for the work that slows revenue down.</span>
    <span style={sx("font:400 12px/1.65 'IBM Plex Mono',monospace;color:#616961")}>clamp(32px,3.7vw,52px)<br />600 · 1.06 · -0.032em</span>
    </div>
    <div className="mkstack" style={sx("display:grid;grid-template-columns:minmax(180px,1fr) minmax(0,2fr) minmax(200px,1.1fr);gap:16px;padding:20px 22px;align-items:center;border-bottom:1px solid #F1F3F0")}>
    <span style={sx("font-weight:600;font-size:14.5px")}>H3 · card title</span>
    <span style={sx("font-weight:600;font-size:29px;line-height:1.14;letter-spacing:-0.026em")}>Prior authorization</span>
    <span style={sx("font:400 12px/1.65 'IBM Plex Mono',monospace;color:#616961")}>29px (24px in dense cards)<br />600 · 1.14 · -0.026em</span>
    </div>
    <div className="mkstack" style={sx("display:grid;grid-template-columns:minmax(180px,1fr) minmax(0,2fr) minmax(200px,1.1fr);gap:16px;padding:20px 22px;align-items:center;border-bottom:1px solid #F1F3F0")}>
    <span style={sx("font-weight:600;font-size:14.5px")}>H4 · sub-card</span>
    <span style={sx("font-weight:600;font-size:18.5px;line-height:1.25;letter-spacing:-0.018em")}>Payment posting &amp; reconciliation</span>
    <span style={sx("font:400 12px/1.65 'IBM Plex Mono',monospace;color:#616961")}>18.5–20px<br />600 · 1.25 · -0.018em</span>
    </div>
    <div className="mkstack" style={sx("display:grid;grid-template-columns:minmax(180px,1fr) minmax(0,2fr) minmax(200px,1.1fr);gap:16px;padding:20px 22px;align-items:center;border-bottom:1px solid #F1F3F0")}>
    <span style={sx("font-weight:600;font-size:14.5px")}>Lede</span>
    <span style={sx("font-size:18px;line-height:1.62;color:#3A443E")}>A kit of deployable AI and workflow modules for healthcare revenue cycle operations.</span>
    <span style={sx("font:400 12px/1.65 'IBM Plex Mono',monospace;color:#616961")}>17–18px · 400 · 1.62<br />color #3A443E</span>
    </div>
    <div className="mkstack" style={sx("display:grid;grid-template-columns:minmax(180px,1fr) minmax(0,2fr) minmax(200px,1.1fr);gap:16px;padding:20px 22px;align-items:center;border-bottom:1px solid #F1F3F0")}>
    <span style={sx("font-weight:600;font-size:14.5px")}>Body / card copy</span>
    <span style={sx("font-size:14.5px;line-height:1.6;color:#5A625C")}>Classify every denial by root cause, route it to correction or appeal, and draft the letter with evidence attached.</span>
    <span style={sx("font:400 12px/1.65 'IBM Plex Mono',monospace;color:#616961")}>14–15.5px · 400 · 1.55–1.6<br />color #5A625C</span>
    </div>
    <div className="mkstack" style={sx("display:grid;grid-template-columns:minmax(180px,1fr) minmax(0,2fr) minmax(200px,1.1fr);gap:16px;padding:20px 22px;align-items:center;border-bottom:1px solid #F1F3F0")}>
    <span style={sx("font-weight:600;font-size:14.5px")}>Eyebrow</span>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>Workflow coverage</span>
    <span style={sx("font:400 12px/1.65 'IBM Plex Mono',monospace;color:#616961")}>11.5px mono 500<br />.14em · uppercase · #0A5A4B</span>
    </div>
    <div className="mkstack" style={sx("display:grid;grid-template-columns:minmax(180px,1fr) minmax(0,2fr) minmax(200px,1.1fr);gap:16px;padding:20px 22px;align-items:center")}>
    <span style={sx("font-weight:600;font-size:14.5px")}>Data label</span>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:#616961")}>First-pass acceptance</span>
    <span style={sx("font:400 12px/1.65 'IBM Plex Mono',monospace;color:#616961")}>9.5–10.5px mono 500<br />.11em · uppercase · #616961</span>
    </div>
    </div>
    </div>
    </section>
  );
}
