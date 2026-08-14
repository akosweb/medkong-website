import { sx } from '@/lib/css';

export function LogoSection() {
  return (
    <section id="logo" style={sx("background:#F4F6F3;border-top:1px solid #E6EAE5;border-bottom:1px solid #E6EAE5;padding:88px 0")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)")}>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>01 — Logo &amp; wordmark</span>
    <h2 style={sx("font-weight:600;font-size:clamp(30px,3.3vw,46px);line-height:1.07;letter-spacing:-0.03em;margin:18px 0 0")}>MEDKONG is always uppercase.</h2>
    <p style={sx("font-size:17px;line-height:1.62;margin:20px 0 0;color:#3A443E;max-width:66ch")}>MED is set in primary teal, KONG in ink. The mark to its left is a placeholder until the final logo arrives — dashed border, mono "MK", never treated as a finished logo.</p>
    <div style={sx("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:18px;margin-top:36px")}>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:14px;padding:26px")}>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.13em;text-transform:uppercase;color:#616961")}>Primary lockup · on white</span>
    <div style={sx("margin-top:22px;display:flex;align-items:center;gap:11px;font-weight:600;font-size:26px;letter-spacing:-0.02em")}>
    <span style={sx("width:38px;height:38px;border:1px dashed #B6BEB7;border-radius:9px;display:grid;place-items:center;font:500 11px/1 'IBM Plex Mono',monospace;color:#616961")}>MK</span>
    <span><span style={sx("color:#0A5A4B")}>MED</span><span style={sx("color:#0E1512")}>KONG</span></span>
    </div>
    <p style={sx("margin:22px 0 0;font-size:13.5px;line-height:1.55;color:#5A625C")}>Use in nav, app chrome, and any light surface. Minimum height 26px for the wordmark.</p>
    </div>
    <div style={sx("background:#0E1512;border:1px solid #0E1512;border-radius:14px;padding:26px")}>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.13em;text-transform:uppercase;color:#8B948C")}>Inverse · on ink</span>
    <div style={sx("margin-top:22px;display:flex;align-items:center;gap:11px;font-weight:600;font-size:26px;letter-spacing:-0.02em")}>
    <span style={sx("width:38px;height:38px;border:1px dashed #4C554E;border-radius:9px;display:grid;place-items:center;font:500 11px/1 'IBM Plex Mono',monospace;color:#7E877F")}>MK</span>
    <span><span style={sx("color:#5FBFA6")}>MED</span><span style={sx("color:#fff")}>KONG</span></span>
    </div>
    <p style={sx("margin:22px 0 0;font-size:13.5px;line-height:1.55;color:#B9C1BB")}>On dark grounds MED lightens to #5FBFA6 so it clears 4.5:1. KONG goes pure white.</p>
    </div>
    <div style={sx("background:#0A5A4B;border:1px solid #0A5A4B;border-radius:14px;padding:26px")}>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.13em;text-transform:uppercase;color:#8FD3C1")}>On primary teal</span>
    <div style={sx("margin-top:22px;display:flex;align-items:center;gap:11px;font-weight:600;font-size:26px;letter-spacing:-0.02em;color:#fff")}>
    <span style={sx("width:38px;height:38px;border:1px dashed rgba(255,255,255,.4);border-radius:9px;display:grid;place-items:center;font:500 11px/1 'IBM Plex Mono',monospace;color:#CFE6DE")}>MK</span>
    <span>MEDKONG</span>
    </div>
    <p style={sx("margin:22px 0 0;font-size:13.5px;line-height:1.55;color:#CFE6DE")}>On teal the wordmark is single-color white — never teal-on-teal.</p>
    </div>
    </div>
    <div style={sx("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:18px;margin-top:18px")}>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:12px;padding:20px 22px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Do</span>
    <ul style={sx("margin:12px 0 0;padding-left:18px;font-size:14px;line-height:1.7;color:#3A443E")}>
    <li>MEDKONG, all caps, every instance</li>
    <li>MED teal · KONG ink</li>
    <li>Wordmark at 600 weight, -0.02em tracking</li>
    <li>Placeholder mark stays visibly dashed</li>
    </ul>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:12px;padding:20px 22px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#96301A")}>Don't</span>
    <ul style={sx("margin:12px 0 0;padding-left:18px;font-size:14px;line-height:1.7;color:#3A443E")}>
    <li>"MedKong" or "Medkong" in body copy</li>
    <li>Rust or any non-teal on MED</li>
    <li>Gradients, shadows, or outlines on the wordmark</li>
    <li>Setting the wordmark in IBM Plex Mono</li>
    </ul>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:12px;padding:20px 22px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Markup</span>
    <pre style={sx("margin-top:12px;color:#3A443E;background:#F7F9F7;border:1px solid #EEF1ED;border-radius:8px;padding:12px")}>&lt;span style="color:#0A5A4B"&gt;MED&lt;/span&gt;
    &lt;span style="color:#0E1512"&gt;KONG&lt;/span&gt;</pre>
    </div>
    </div>
    </div>
    </section>
  );
}
