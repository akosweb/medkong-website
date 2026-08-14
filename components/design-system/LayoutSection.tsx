import { sx } from '@/lib/css';

export function LayoutSection() {
  return (
    <section id="layout" style={sx("background:#F4F6F3;border-top:1px solid #E6EAE5;border-bottom:1px solid #E6EAE5;padding:88px 0")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)")}>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>05 — Layout &amp; band rhythm</span>
    <h2 style={sx("font-weight:600;font-size:clamp(30px,3.3vw,46px);line-height:1.07;letter-spacing:-0.03em;margin:18px 0 0")}>Full-bleed bands, one fixed container.</h2>
    <p style={sx("font-size:17px;line-height:1.62;margin:20px 0 0;color:#3A443E;max-width:70ch")}>Every section is full-width with its own background; content is centered in a 1400px container. Backgrounds alternate so the page reads as chapters instead of one scroll. Never two adjacent sections on the same ground.</p>
    <div className="mkcols" style={sx("display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:18px;margin-top:36px")}>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:14px;padding:26px")}>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.13em;text-transform:uppercase;color:#616961")}>Container &amp; spacing</span>
    <div style={sx("margin-top:16px;display:grid;gap:11px;font-size:14.5px;line-height:1.6;color:#3A443E")}>
    <span style={sx("display:flex;justify-content:space-between;gap:14px;padding-bottom:10px;border-bottom:1px solid #F1F3F0")}>Content width <span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#0A5A4B")}>max-width:1400px</span></span>
    <span style={sx("display:flex;justify-content:space-between;gap:14px;padding-bottom:10px;border-bottom:1px solid #F1F3F0")}>Gutter <span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#0A5A4B")}>clamp(24px,4vw,56px)</span></span>
    <span style={sx("display:flex;justify-content:space-between;gap:14px;padding-bottom:10px;border-bottom:1px solid #F1F3F0")}>Hero mock width <span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#0A5A4B")}>1500px</span></span>
    <span style={sx("display:flex;justify-content:space-between;gap:14px;padding-bottom:10px;border-bottom:1px solid #F1F3F0")}>Section padding <span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#0A5A4B")}>110px 0</span></span>
    <span style={sx("display:flex;justify-content:space-between;gap:14px;padding-bottom:10px;border-bottom:1px solid #F1F3F0")}>Column gap <span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#0A5A4B")}>clamp(32px,6vw,100px)</span></span>
    <span style={sx("display:flex;justify-content:space-between;gap:14px")}>Card grid gap <span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#0A5A4B")}>16–20px</span></span>
    </div>
    <p style={sx("margin:18px 0 0;font-size:13.5px;line-height:1.6;color:#5A625C")}>Radii: 8–9px controls · 10–12px inner panels · 14px cards and app windows · 16px dialogs.</p>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:14px;padding:26px")}>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.13em;text-transform:uppercase;color:#616961")}>Homepage band order</span>
    <div style={sx("margin-top:16px;display:grid;gap:7px")}>
    <span style={sx("display:flex;align-items:center;gap:12px;padding:11px 13px;background:#fff;border:1px solid #E6EAE5;border-radius:8px;font-size:13.5px")}><span style={sx("width:22px;height:22px;border-radius:5px;background:#fff;border:1px solid #DDE2DC;flex:none")}></span>Hero — white</span>
    <span style={sx("display:flex;align-items:center;gap:12px;padding:11px 13px;background:#F4F6F3;border:1px solid #E6EAE5;border-radius:8px;font-size:13.5px")}><span style={sx("width:22px;height:22px;border-radius:5px;background:#F4F6F3;border:1px solid #DDE2DC;flex:none")}></span>Trust band — #F4F6F3</span>
    <span style={sx("display:flex;align-items:center;gap:12px;padding:11px 13px;background:#fff;border:1px solid #E6EAE5;border-radius:8px;font-size:13.5px")}><span style={sx("width:22px;height:22px;border-radius:5px;background:#fff;border:1px solid #DDE2DC;flex:none")}></span>What it is — white</span>
    <span style={sx("display:flex;align-items:center;gap:12px;padding:11px 13px;background:#F4F6F3;border:1px solid #E6EAE5;border-radius:8px;font-size:13.5px")}><span style={sx("width:22px;height:22px;border-radius:5px;background:#F4F6F3;border:1px solid #DDE2DC;flex:none")}></span>Workflows — #F4F6F3</span>
    <span style={sx("display:flex;align-items:center;gap:12px;padding:11px 13px;background:#EEF2EF;border:1px solid #E0E7E2;border-radius:8px;font-size:13.5px")}><span style={sx("width:22px;height:22px;border-radius:5px;background:#EEF2EF;border:1px solid #D8E0DA;flex:none")}></span>Product explorer — #EEF2EF</span>
    <span style={sx("display:flex;align-items:center;gap:12px;padding:11px 13px;background:#0A5A4B;border:1px solid #0A5A4B;border-radius:8px;font-size:13.5px;color:#fff")}><span style={sx("width:22px;height:22px;border-radius:5px;background:#0A5A4B;border:1px solid rgba(255,255,255,.3);flex:none")}></span>Palantir Foundry — #0A5A4B</span>
    <span style={sx("display:flex;align-items:center;gap:12px;padding:11px 13px;background:#F1F8F5;border:1px solid #DCEAE3;border-radius:8px;font-size:13.5px")}><span style={sx("width:22px;height:22px;border-radius:5px;background:#F1F8F5;border:1px solid #C9DED6;flex:none")}></span>CTA — #F1F8F5</span>
    <span style={sx("display:flex;align-items:center;gap:12px;padding:11px 13px;background:#0E1512;border:1px solid #0E1512;border-radius:8px;font-size:13.5px;color:#fff")}><span style={sx("width:22px;height:22px;border-radius:5px;background:#0E1512;border:1px solid #3A443E;flex:none")}></span>Footer — #0E1512</span>
    </div>
    <p style={sx("margin:18px 0 0;font-size:13.5px;line-height:1.6;color:#5A625C")}>At most one teal and one ink band per page. Bands get <span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#0A5A4B")}>border-top:1px solid #E6EAE5</span> where two light grounds meet.</p>
    </div>
    </div>
    <div style={sx("margin-top:18px;background:#fff;border:1px solid #DDE2DC;border-radius:14px;padding:26px")}>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.13em;text-transform:uppercase;color:#616961")}>Section skeleton — copy this</span>
    <pre style={sx("margin-top:14px;color:#3A443E;background:#F7F9F7;border:1px solid #EEF1ED;border-radius:10px;padding:16px")}>&lt;section id="slug" style="background:#F4F6F3;border-top:1px solid #E6EAE5;padding:110px 0"&gt;
      &lt;div style="max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)"&gt;
        &lt;span style="font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;
                     text-transform:uppercase;color:#0A5A4B"&gt;Eyebrow&lt;/span&gt;
        &lt;div class="mkcols" style="display:grid;
             grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);
             gap:24px clamp(32px,6vw,90px);align-items:end;margin-top:18px"&gt;
          &lt;h2 style="font-weight:600;font-size:clamp(32px,3.7vw,52px);line-height:1.06;
                     letter-spacing:-0.032em;margin:0"&gt;Section headline.&lt;/h2&gt;
          &lt;p style="font-size:17px;line-height:1.62;margin:0;color:#3A443E"&gt;Support line.&lt;/p&gt;
        &lt;/div&gt;
        &lt;!-- cards / mock UI, margin-top:44px --&gt;
      &lt;/div&gt;
    &lt;/section&gt;</pre>
    </div>
    </div>
    </section>
  );
}
