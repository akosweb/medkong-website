import { sx } from '@/lib/css';

export function ResponsiveSection() {
  return (
    <section id="responsive" style={sx("background:#fff;padding:88px 0")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)")}>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>14 — Responsive behavior</span>
    <h2 style={sx("font-weight:600;font-size:clamp(30px,3.3vw,46px);line-height:1.07;letter-spacing:-0.03em;margin:18px 0 0")}>Stack prose. Carousel cards. Scale mockups.</h2>
    <p style={sx("font-size:17px;line-height:1.62;margin:20px 0 0;color:#3A443E;max-width:70ch")}>One breakpoint at 1020px. Everything above it is the desktop layout; below it, three utilities decide what happens.</p>
    <div style={sx("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:18px;margin-top:36px")}>
    <div style={sx("border:1px solid #DDE2DC;border-radius:12px;padding:22px")}>
    <span style={sx("font:500 11px/1 'IBM Plex Mono',monospace;letter-spacing:.1em;text-transform:uppercase;color:#0A5A4B")}>.mkcols</span>
    <h4 style={sx("font-weight:600;font-size:18px;line-height:1.25;margin:12px 0 0")}>Stack to one column</h4>
    <p style={sx("font-size:14px;line-height:1.6;margin:10px 0 0;color:#5A625C")}>Two-column text/panel sections. Copy stays above its visual.</p>
    <pre style={sx("margin-top:12px;color:#3A443E;background:#F7F9F7;border:1px solid #EEF1ED;border-radius:8px;padding:12px")}>grid-template-columns:minmax(0,1fr)</pre>
    </div>
    <div style={sx("border:1px solid #DDE2DC;border-radius:12px;padding:22px")}>
    <span style={sx("font:500 11px/1 'IBM Plex Mono',monospace;letter-spacing:.1em;text-transform:uppercase;color:#0A5A4B")}>.mkrail</span>
    <h4 style={sx("font-weight:600;font-size:18px;line-height:1.25;margin:12px 0 0")}>Become a carousel</h4>
    <p style={sx("font-size:14px;line-height:1.6;margin:10px 0 0;color:#5A625C")}>Peer card sets — workflows, modules, phases, audiences, steps. Snap-scrolls at 88% width so the next card peeks.</p>
    <pre style={sx("margin-top:12px;color:#3A443E;background:#F7F9F7;border:1px solid #EEF1ED;border-radius:8px;padding:12px")}>display:flex; overflow-x:auto;
    scroll-snap-type:x mandatory;
    &gt;*{'{'}flex:0 0 min(88%,430px){'}'}</pre>
    </div>
    <div style={sx("border:1px solid #DDE2DC;border-radius:12px;padding:22px")}>
    <span style={sx("font:500 11px/1 'IBM Plex Mono',monospace;letter-spacing:.1em;text-transform:uppercase;color:#0A5A4B")}>.mkstack</span>
    <h4 style={sx("font-weight:600;font-size:18px;line-height:1.25;margin:12px 0 0")}>Collapse dense rows</h4>
    <p style={sx("font-size:14px;line-height:1.6;margin:10px 0 0;color:#5A625C")}>Multi-column list rows — architecture layers, AKOS layers — go to one column with chips left-aligned.</p>
    </div>
    <div style={sx("border:1px solid #DDE2DC;border-radius:12px;padding:22px")}>
    <span style={sx("font:500 11px/1 'IBM Plex Mono',monospace;letter-spacing:.1em;text-transform:uppercase;color:#0A5A4B")}>.mkscale</span>
    <h4 style={sx("font-weight:600;font-size:18px;line-height:1.25;margin:12px 0 0")}>Never reflow a mockup</h4>
    <p style={sx("font-size:14px;line-height:1.6;margin:10px 0 0;color:#5A625C")}>Product panels keep their exact desktop composition and scale down. A phone shows the same dashboard, smaller.</p>
    </div>
    </div>
    <div style={sx("margin-top:18px;border:1px solid #DDE2DC;border-radius:12px;padding:22px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Also below 1020px</span>
    <div style={sx("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:12px 28px;margin-top:14px;font-size:14.5px;line-height:1.6;color:#3A443E")}>
    <span>Nav links hide (<span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#0A5A4B")}>.mknav</span>); wordmark and demo button stay</span>
    <span>Section padding stays 110px — bands still read as chapters</span>
    <span>Dialog panes stack, form pane keeps the scroll</span>
    <span>Tab rows scroll horizontally rather than wrapping</span>
    </div>
    </div>
    </div>
    </section>
  );
}
