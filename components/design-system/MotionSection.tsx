import { sx } from '@/lib/css';
import { useGuide } from './state';

export function MotionSection() {
  const { kpi, sla, synced } = useGuide();

  return (
    <section id="motion" style={sx("background:#F4F6F3;border-top:1px solid #E6EAE5;border-bottom:1px solid #E6EAE5;padding:88px 0")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)")}>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>13 — Motion</span>
    <h2 style={sx("font-weight:600;font-size:clamp(30px,3.3vw,46px);line-height:1.07;letter-spacing:-0.03em;margin:18px 0 0")}>Motion only where a system would actually move.</h2>
    <p style={sx("font-size:17px;line-height:1.62;margin:20px 0 0;color:#3A443E;max-width:70ch")}>The mockups tick on a 1-second clock because a real operations console does. Nothing else animates on load: no scroll reveals, no counters spinning up, no parallax.</p>
    <div style={sx("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:18px;margin-top:36px")}>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:12px;padding:22px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Live pulse</span>
    <div style={sx("display:flex;align-items:center;gap:10px;margin-top:18px")}><span style={sx("width:8px;height:8px;border-radius:50%;background:#12866F;animation:mkpulse 1.8s ease-in-out infinite")}></span><span style={sx("font-size:14.5px")}>1.8s ease-in-out, opacity .3 → 1</span></div>
    <pre style={sx("margin-top:14px;color:#3A443E;background:#F7F9F7;border:1px solid #EEF1ED;border-radius:8px;padding:12px")}>@keyframes mkpulse{'{'}
      0%,100%{'{'}opacity:.3{'}'}
      50%{'{'}opacity:1{'}'}
    {'}'}</pre>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:12px;padding:22px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Data tick — 1s interval</span>
    <div style={sx("margin-top:18px;display:grid;gap:9px;font:400 13px/1.5 'IBM Plex Mono',monospace;color:#3A443E")}>
    <span style={sx("display:flex;justify-content:space-between;gap:12px")}>SLA clock<span style={sx("font-weight:600")}>{sla}</span></span>
    <span style={sx("display:flex;justify-content:space-between;gap:12px")}>Auths cleared<span style={sx("font-weight:600")}>{kpi}</span></span>
    <span style={sx("display:flex;justify-content:space-between;gap:12px")}>Objects mapped<span style={sx("font-weight:600")}>{synced}</span></span>
    </div>
    <p style={sx("margin:14px 0 0;font-size:13.5px;line-height:1.6;color:#5A625C")}>Counters climb, clocks count down, queue rows rotate, statuses flip. Values are derived from one tick counter so everything stays in sync.</p>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:12px;padding:22px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Hover — try these</span>
    <div style={sx("margin-top:18px;display:grid;gap:10px")}>
    <span className="mkcard" style={sx("display:block;border:1px solid #DDE2DC;border-radius:10px;padding:13px;font-size:13.5px")}>Card lift — translateY(-2px), .22s</span>
    <span className="mkrow" style={sx("display:block;border:1px solid #EEF1ED;border-radius:8px;padding:13px;font-size:13.5px")}>Row tint — #F7F9F7, instant</span>
    <button type="button" className="mkcta" style={sx("border:0;border-radius:8px;padding:12px;background:#0A5A4B;color:#fff;font-weight:600;font-size:13.5px;cursor:pointer;transition:background .18s ease")}>Button — #0A5A4B → #0E7A66, .18s</button>
    </div>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:12px;padding:22px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Timing &amp; restraint</span>
    <div style={sx("margin-top:16px;display:grid;gap:11px;font-size:14px;line-height:1.6;color:#3A443E")}>
    <span style={sx("display:flex;justify-content:space-between;gap:14px;padding-bottom:10px;border-bottom:1px solid #F1F3F0")}>Hover / color <span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#0A5A4B")}>.16–.22s ease</span></span>
    <span style={sx("display:flex;justify-content:space-between;gap:14px;padding-bottom:10px;border-bottom:1px solid #F1F3F0")}>Progress width <span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#0A5A4B")}>.6–.8s linear</span></span>
    <span style={sx("display:flex;justify-content:space-between;gap:14px;padding-bottom:10px;border-bottom:1px solid #F1F3F0")}>Sticky header shadow <span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#0A5A4B")}>instant, no transition</span></span>
    <span style={sx("display:flex;justify-content:space-between;gap:14px")}>In-page anchors <span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#0A5A4B")}>scroll-behavior:smooth</span></span>
    </div>
    <p style={sx("margin:16px 0 0;font-size:13.5px;line-height:1.6;color:#5A625C")}>Honor <span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#0A5A4B")}>prefers-reduced-motion</span> for smooth scrolling. Anything on a per-second render loop must not carry a CSS transition — it will never settle.</p>
    </div>
    </div>
    </div>
    </section>
  );
}
