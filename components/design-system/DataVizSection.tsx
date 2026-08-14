import { sx } from '@/lib/css';
import { useGuide } from './state';

export function DataVizSection() {
  const { autoPct, ringDash, packetPct, packetBar } = useGuide();

  return (
    <section id="dataviz" style={sx("background:#fff;padding:88px 0")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)")}>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>12 — Data visualization</span>
    <h2 style={sx("font-weight:600;font-size:clamp(30px,3.3vw,46px);line-height:1.07;letter-spacing:-0.03em;margin:18px 0 0")}>Four primitives. No chart library.</h2>
    <p style={sx("font-size:17px;line-height:1.62;margin:20px 0 0;color:#3A443E;max-width:70ch")}>Sparkline, donut, horizontal bar, progress track — all hand-built from inline SVG or divs. No axes, gridlines, legends or 3D. A chart earns its place only when the number alone can't carry the point.</p>
    <div style={sx("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:18px;margin-top:36px")}>
    <div style={sx("border:1px solid #DDE2DC;border-radius:12px;padding:22px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Sparkline</span>
    <svg viewBox="0 0 120 24" preserveAspectRatio="none" style={sx("width:100%;height:44px;margin-top:16px;display:block")}><polyline points="0,19 15,17 30,18 45,13 60,14 75,9 90,10 105,5 120,3" fill="none" stroke="#12866F" strokeWidth="1.6" /></svg>
    <pre style={sx("margin-top:14px;color:#3A443E;background:#F7F9F7;border:1px solid #EEF1ED;border-radius:8px;padding:12px")}>viewBox="0 0 120 24"
    preserveAspectRatio="none"
    stroke:#12866F · width 1.6 · no fill</pre>
    </div>
    <div style={sx("border:1px solid #DDE2DC;border-radius:12px;padding:22px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Donut</span>
    <div style={sx("display:flex;align-items:center;gap:16px;margin-top:16px")}>
    <svg viewBox="0 0 104 104" style={sx("width:84px;height:84px;flex:none")}>
    <circle cx="52" cy="52" r="44" fill="none" stroke="#EDF0EC" strokeWidth="10" />
    <circle cx="52" cy="52" r="44" fill="none" stroke="#12866F" strokeWidth="10" strokeDasharray={ringDash} transform="rotate(-90 52 52)" />
    </svg>
    <span><span style={sx("display:block;font-weight:600;font-size:26px;letter-spacing:-0.025em")}>{autoPct}</span><span style={sx("font:400 11.5px/1.4 'IBM Plex Mono',monospace;color:#616961")}>single value only</span></span>
    </div>
    <p style={sx("margin:14px 0 0;font-size:13.5px;line-height:1.6;color:#5A625C")}>Track #EDF0EC, value #12866F, 10px stroke, rotated -90° to start at twelve o'clock.</p>
    </div>
    <div style={sx("border:1px solid #DDE2DC;border-radius:12px;padding:22px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Bar rows</span>
    <div style={sx("margin-top:16px;display:grid;gap:11px")}>
    <span style={sx("display:grid;grid-template-columns:62px minmax(0,1fr) 56px;gap:10px;align-items:center;font:400 12px/1 'IBM Plex Mono',monospace")}><span style={sx("color:#B23A1B")}>CO-197</span><span style={sx("height:7px;border-radius:4px;background:#EDF0EC;overflow:hidden;display:block")}><span style={sx("display:block;height:100%;width:100%;background:#B23A1B;border-radius:4px")}></span></span><span style={sx("text-align:right;color:#3A443E")}>$41.3K</span></span>
    <span style={sx("display:grid;grid-template-columns:62px minmax(0,1fr) 56px;gap:10px;align-items:center;font:400 12px/1 'IBM Plex Mono',monospace")}><span style={sx("color:#B23A1B")}>CO-11</span><span style={sx("height:7px;border-radius:4px;background:#EDF0EC;overflow:hidden;display:block")}><span style={sx("display:block;height:100%;width:68%;background:#B23A1B;border-radius:4px")}></span></span><span style={sx("text-align:right;color:#3A443E")}>$27.4K</span></span>
    <span style={sx("display:grid;grid-template-columns:62px minmax(0,1fr) 56px;gap:10px;align-items:center;font:400 12px/1 'IBM Plex Mono',monospace")}><span style={sx("color:#0A5A4B")}>0–30</span><span style={sx("height:7px;border-radius:4px;background:#EDF0EC;overflow:hidden;display:block")}><span style={sx("display:block;height:100%;width:84%;background:#12866F;border-radius:4px")}></span></span><span style={sx("text-align:right;color:#3A443E")}>$1.84M</span></span>
    </div>
    <p style={sx("margin:14px 0 0;font-size:13.5px;line-height:1.6;color:#5A625C")}>Widths are percent of the largest value, not of the total. Rust when the row is a denial or exception.</p>
    </div>
    <div style={sx("border:1px solid #DDE2DC;border-radius:12px;padding:22px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Progress track</span>
    <div style={sx("margin-top:16px;display:flex;justify-content:space-between;gap:10px;font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.1em;text-transform:uppercase;color:#616961")}><span>Packet assembly</span><span style={sx("color:#0A5A4B")}>{packetPct}</span></div>
    <div style={sx("margin-top:10px;height:6px;border-radius:4px;background:#EDF0EC;overflow:hidden")}><div style={sx(packetBar)}></div></div>
    <p style={sx("margin:14px 0 0;font-size:13.5px;line-height:1.6;color:#5A625C")}>6px track, 4px radius, <span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#0A5A4B")}>transition:width .8s linear</span> so live movement reads as progress, not jitter.</p>
    </div>
    </div>
    </div>
    </section>
  );
}
