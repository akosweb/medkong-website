import { sx } from '@/lib/css';

export function FormsSection() {
  return (
    <section id="forms" style={sx("background:#F4F6F3;border-top:1px solid #E6EAE5;border-bottom:1px solid #E6EAE5;padding:88px 0")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)")}>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>09 — Forms &amp; dialog</span>
    <h2 style={sx("font-weight:600;font-size:clamp(30px,3.3vw,46px);line-height:1.07;letter-spacing:-0.03em;margin:18px 0 0")}>Mono labels above, 42px fields.</h2>
    <div className="mkcols" style={sx("display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:18px;margin-top:36px")}>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:14px;padding:26px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Controls</span>
    <div style={sx("display:grid;gap:16px;margin-top:18px")}>
    <label style={sx("display:grid;gap:7px")}>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:#616961")}>Name</span>
    <input type="text" placeholder="Dana Reyes" style={sx("height:42px;padding:0 12px;border:1px solid #DDE2DC;border-radius:8px;font-family:inherit;font-size:14.5px;color:#0E1512;background:#fff")} />
    </label>
    <label style={sx("display:grid;gap:7px")}>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:#616961")}>Work email</span>
    <input type="email" placeholder="dana@healthsystem.org" style={sx("height:42px;padding:0 12px;border:1px solid #DDE2DC;border-radius:8px;font-family:inherit;font-size:14.5px;color:#0E1512;background:#fff")} />
    </label>
    <label style={sx("display:grid;gap:7px")}>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:#616961")}>What are you trying to fix?</span>
    <textarea rows={3} readOnly placeholder="Pre-auth backlog across three service lines." style={sx("padding:11px 12px;border:1px solid #DDE2DC;border-radius:8px;font-family:inherit;font-size:14.5px;line-height:1.55;color:#0E1512;background:#fff;resize:vertical")}></textarea>
    </label>
    <div style={sx("display:grid;gap:9px")}>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:#616961")}>Toggle group — multi-select</span>
    <div style={sx("display:flex;flex-wrap:wrap;gap:8px")}>
    <span style={sx("font-size:13px;font-weight:500;padding:9px 13px;border-radius:8px;background:#0A5A4B;border:1px solid #0A5A4B;color:#fff")}>Prior Authorization</span>
    <span style={sx("font-size:13px;font-weight:500;padding:9px 13px;border-radius:8px;background:#fff;border:1px solid #DDE2DC;color:#5A625C")}>Coding Review</span>
    <span style={sx("font-size:13px;font-weight:500;padding:9px 13px;border-radius:8px;background:#0A5A4B;border:1px solid #0A5A4B;color:#fff")}>Denials &amp; Appeals</span>
    <span style={sx("font-size:13px;font-weight:500;padding:9px 13px;border-radius:8px;background:#fff;border:1px solid #DDE2DC;color:#5A625C")}>AR Follow-up</span>
    </div>
    </div>
    </div>
    </div>
    <div style={sx("display:grid;gap:18px;align-content:start")}>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:14px;padding:26px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Dialog anatomy</span>
    <div style={sx("margin-top:16px;display:grid;gap:11px;font-size:14.5px;line-height:1.6;color:#3A443E")}>
    <span style={sx("display:flex;justify-content:space-between;gap:14px;padding-bottom:10px;border-bottom:1px solid #F1F3F0")}>Backdrop <span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#0A5A4B")}>rgba(14,21,18,.55) + blur(3px)</span></span>
    <span style={sx("display:flex;justify-content:space-between;gap:14px;padding-bottom:10px;border-bottom:1px solid #F1F3F0")}>Panel <span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#0A5A4B")}>min(1020px,100%) · radius 16px</span></span>
    <span style={sx("display:flex;justify-content:space-between;gap:14px;padding-bottom:10px;border-bottom:1px solid #F1F3F0")}>Height cap <span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#0A5A4B")}>calc(100dvh - 64px)</span></span>
    <span style={sx("display:flex;justify-content:space-between;gap:14px;padding-bottom:10px;border-bottom:1px solid #F1F3F0")}>Split <span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#0A5A4B")}>form 400px · art 300px</span></span>
    <span style={sx("display:flex;justify-content:space-between;gap:14px")}>Dismiss <span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#0A5A4B")}>backdrop · × · Escape</span></span>
    </div>
    <p style={sx("margin:18px 0 0;font-size:13.5px;line-height:1.6;color:#5A625C")}>Form left, full-bleed art right on teal, with the AKOS and Foundry lockups pinned beneath the image.</p>
    </div>
    <div style={sx("border:1px solid #C9DED6;background:#F1F8F5;border-radius:14px;padding:24px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#0A5A4B")}>Success state</span>
    <p style={sx("margin:14px 0 0;font-weight:600;font-size:18px;letter-spacing:-0.018em;color:#0A5A4B")}>Request received.</p>
    <p style={sx("margin:10px 0 0;font-size:14.5px;line-height:1.6;color:#3A443E")}>An AKOS engineer will reach out within one business day to schedule.</p>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
