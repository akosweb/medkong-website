import { sx } from '@/lib/css';

export function ButtonsSection() {
  return (
    <section id="buttons" style={sx("background:#fff;padding:88px 0")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)")}>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>08 — Buttons</span>
    <h2 style={sx("font-weight:600;font-size:clamp(30px,3.3vw,46px);line-height:1.07;letter-spacing:-0.03em;margin:18px 0 0")}>One primary. One ghost. Three sizes.</h2>
    <p style={sx("font-size:17px;line-height:1.62;margin:20px 0 0;color:#3A443E;max-width:70ch")}>Primary is solid teal; ghost is a 1px border on the current ground. Hover the examples below — primary lightens to #0E7A66, ghost fills #F1F4F1 and borders teal.</p>
    <div style={sx("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:18px;margin-top:36px")}>
    <div style={sx("border:1px solid #DDE2DC;border-radius:14px;padding:24px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Large — 52px · page CTA</span>
    <div style={sx("display:flex;flex-wrap:wrap;gap:12px;margin-top:18px")}>
    <button type="button" className="mkcta" style={sx("display:inline-flex;align-items:center;height:52px;padding:0 26px;border:0;border-radius:9px;background:#0A5A4B;color:#fff;font-weight:600;font-size:16px;cursor:pointer;transition:background .18s ease")}>Request a demo</button>
    <button type="button" className="mkghost" style={sx("display:inline-flex;align-items:center;min-height:52px;padding:12px 24px;border-radius:9px;border:1px solid #B9CCC3;background:#fff;color:#0E1512;font-weight:500;font-size:16px;white-space:nowrap;cursor:pointer;transition:background .18s ease,border-color .18s ease")}>Book a walkthrough</button>
    </div>
    </div>
    <div style={sx("border:1px solid #DDE2DC;border-radius:14px;padding:24px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Medium — 48px · hero &amp; forms</span>
    <div style={sx("display:flex;flex-wrap:wrap;gap:12px;margin-top:18px")}>
    <button type="button" className="mkcta" style={sx("display:inline-flex;align-items:center;height:48px;padding:0 24px;border:0;border-radius:9px;background:#0A5A4B;color:#fff;font-weight:600;font-size:15.5px;cursor:pointer;transition:background .18s ease")}>Request a demo</button>
    <a className="mkghost" href="#buttons" style={sx("display:inline-flex;align-items:center;min-height:48px;padding:12px 22px;border-radius:9px;border:1px solid #CFD6CF;color:#0E1512;font-weight:500;font-size:15.5px;white-space:nowrap;transition:background .18s ease,border-color .18s ease")}>Explore the workbenches</a>
    </div>
    </div>
    <div style={sx("border:1px solid #DDE2DC;border-radius:14px;padding:24px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Small — 40px · nav</span>
    <div style={sx("display:flex;flex-wrap:wrap;gap:12px;margin-top:18px")}>
    <button type="button" className="mkcta" style={sx("display:inline-flex;align-items:center;height:40px;padding:0 20px;border:0;border-radius:8px;background:#0A5A4B;color:#fff;font-weight:600;font-size:14.5px;cursor:pointer;transition:background .18s ease")}>Request a demo</button>
    <button type="button" className="mkghost" style={sx("display:inline-flex;align-items:center;height:40px;padding:0 18px;border-radius:8px;border:1px solid #CFD6CF;background:#fff;color:#0E1512;font-weight:500;font-size:14.5px;cursor:pointer;transition:background .18s ease,border-color .18s ease")}>Docs</button>
    </div>
    </div>
    <div style={sx("border:1px solid #DDE2DC;border-radius:14px;padding:24px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>In-panel — 29–38px · mock UI</span>
    <div style={sx("display:flex;flex-wrap:wrap;gap:9px;margin-top:18px")}>
    <span style={sx("display:grid;place-items:center;height:38px;padding:0 16px;border-radius:8px;background:#0A5A4B;color:#fff;font-weight:600;font-size:14px")}>Submit to payer</span>
    <span style={sx("display:grid;place-items:center;height:38px;padding:0 16px;border-radius:8px;border:1px solid #CFD6CF;font-weight:500;font-size:14px")}>Request attestation</span>
    <span style={sx("display:inline-flex;align-items:center;height:29px;padding:0 12px;border-radius:7px;background:#0A5A4B;color:#fff;font-weight:600;font-size:12.5px")}>Accept</span>
    <span style={sx("display:inline-flex;align-items:center;height:29px;padding:0 12px;border-radius:7px;border:1px solid #CFD6CF;font-size:12.5px")}>Reject</span>
    </div>
    <p style={sx("margin:18px 0 0;font-size:13.5px;line-height:1.6;color:#5A625C")}>Buttons inside mockups are non-interactive spans — they are part of the picture, not the page.</p>
    </div>
    <div style={sx("border:1px solid #DDE2DC;border-radius:14px;padding:24px;background:#0A5A4B")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#8FD3C1")}>On teal ground</span>
    <div style={sx("display:flex;flex-wrap:wrap;gap:12px;margin-top:18px")}>
    <span style={sx("display:inline-flex;align-items:center;height:48px;padding:0 24px;border-radius:9px;background:#fff;color:#0A5A4B;font-weight:600;font-size:15.5px")}>Request a demo</span>
    <span style={sx("display:inline-flex;align-items:center;height:48px;padding:0 22px;border-radius:9px;border:1px solid rgba(255,255,255,.4);color:#fff;font-weight:500;font-size:15.5px")}>See the stack</span>
    </div>
    </div>
    <div style={sx("grid-column:1 / -1;border:1px solid #DDE2DC;border-radius:14px;padding:24px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Tabs — section-level switcher</span>
    <div style={sx("display:flex;flex-wrap:wrap;gap:6px;margin-top:18px;border-bottom:1px solid #D8E0DA")}>
    <button type="button" className="mktab" style={sx("cursor:pointer;background:transparent;border:0;border-bottom:2px solid #0A5A4B;padding:12px 16px;margin-bottom:-1px;white-space:nowrap;font-weight:600;font-size:15px;letter-spacing:-0.01em;color:#0A5A4B")}>Prior Auth</button>
    <button type="button" className="mktab" style={sx("cursor:pointer;background:transparent;border:0;border-bottom:2px solid transparent;padding:12px 16px;margin-bottom:-1px;white-space:nowrap;font-weight:600;font-size:15px;letter-spacing:-0.01em;color:#616961")}>Coding Review</button>
    <button type="button" className="mktab" style={sx("cursor:pointer;background:transparent;border:0;border-bottom:2px solid transparent;padding:12px 16px;margin-bottom:-1px;white-space:nowrap;font-weight:600;font-size:15px;letter-spacing:-0.01em;color:#616961")}>Claim QA</button>
    </div>
    <p style={sx("margin:18px 0 0;font-size:13.5px;line-height:1.6;color:#5A625C")}>Active tab: teal label + 2px teal underline. Labels stay short enough to avoid wrapping; the row scrolls on narrow screens.</p>
    </div>
    </div>
    </div>
    </section>
  );
}
