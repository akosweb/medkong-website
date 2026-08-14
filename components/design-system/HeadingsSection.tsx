import { sx } from '@/lib/css';

export function HeadingsSection() {
  return (
    <section id="headings" style={sx("background:#fff;padding:88px 0")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)")}>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>06 — Pre-headers &amp; section heads</span>
    <h2 style={sx("font-weight:600;font-size:clamp(30px,3.3vw,46px);line-height:1.07;letter-spacing:-0.03em;margin:18px 0 0")}>Every section opens the same way.</h2>
    <p style={sx("font-size:17px;line-height:1.62;margin:20px 0 0;color:#3A443E;max-width:70ch")}>A mono eyebrow, then a tight headline, then one support line. Three variants only.</p>
    <div style={sx("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:18px;margin-top:36px")}>
    <div style={sx("border:1px solid #DDE2DC;border-radius:14px;padding:24px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Plain eyebrow — default</span>
    <div style={sx("margin-top:20px;padding-top:20px;border-top:1px solid #F1F3F0")}>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>System architecture</span>
    <h3 style={sx("font-weight:600;font-size:28px;line-height:1.08;letter-spacing:-0.03em;margin:16px 0 0")}>The MEDKONG intelligence stack.</h3>
    </div>
    </div>
    <div style={sx("border:1px solid #DDE2DC;border-radius:14px;padding:24px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Chip eyebrow — hero only</span>
    <div style={sx("margin-top:20px;padding-top:20px;border-top:1px solid #F1F3F0")}>
    <span style={sx("display:inline-flex;align-items:center;font:500 11.5px/1.45 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B;background:#E3F0EB;padding:7px 11px;border-radius:6px")}>Modular AI kit for healthcare RCM</span>
    <h3 style={sx("font-weight:600;font-size:28px;line-height:1.08;letter-spacing:-0.03em;margin:16px 0 0")}>Modular AI for the revenue cycle.</h3>
    </div>
    </div>
    <div style={sx("border:1px solid #DDE2DC;border-radius:14px;padding:24px;background:#0A5A4B")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#8FD3C1")}>On teal — light eyebrow</span>
    <div style={sx("margin-top:20px;padding-top:20px;border-top:1px solid rgba(255,255,255,.18)")}>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#8FD3C1")}>Why Palantir</span>
    <h3 style={sx("font-weight:600;font-size:28px;line-height:1.08;letter-spacing:-0.03em;margin:16px 0 0;color:#fff")}>MEDKONG is built on Palantir Foundry.</h3>
    </div>
    </div>
    </div>
    <div style={sx("margin-top:18px;border:1px solid #DDE2DC;border-radius:14px;padding:26px")}>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.13em;text-transform:uppercase;color:#616961")}>Two-column head — headline left, support right</span>
    <div className="mkcols" style={sx("display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);gap:24px clamp(32px,6vw,90px);align-items:end;margin-top:20px;padding-top:20px;border-top:1px solid #F1F3F0")}>
    <h3 style={sx("font-weight:600;font-size:clamp(26px,2.8vw,40px);line-height:1.06;letter-spacing:-0.032em;margin:0")}>AI that works inside the workflow.</h3>
    <p style={sx("font-size:16.5px;line-height:1.62;margin:0;color:#3A443E")}>Five workbenches, one operational model underneath. Each is a place a person works, with the model doing the assembly, the checking and the first draft.</p>
    </div>
    <p style={sx("margin:18px 0 0;font-size:13.5px;line-height:1.6;color:#5A625C")}>Use <span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#0A5A4B")}>align-items:end</span> when both columns are short text, <span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#0A5A4B")}>align-items:start</span> whenever either side holds a stack, list or panel.</p>
    </div>
    </div>
    </section>
  );
}
