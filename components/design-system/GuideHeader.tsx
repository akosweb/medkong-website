import { MedkongMark } from '@/components/shared/MedkongMark';
import { sx } from '@/lib/css';

export function GuideHeader() {
  return (
    <div style={sx("position:sticky;top:0;z-index:40;background:rgba(255,255,255,.93);backdrop-filter:blur(10px);border-bottom:1px solid #E6EAE5")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px);height:68px;display:flex;align-items:center;gap:20px")}>
    <span style={sx("display:inline-flex;align-items:center;gap:11px;font-weight:600;font-size:20px;letter-spacing:-0.02em")}>
    <MedkongMark height={30} />
    <span style={sx("letter-spacing:0.01em")}><span style={sx("color:#0A5A4B")}>MED</span><span style={sx("color:#0E1512")}>KONG</span></span>
    </span>
    <span className="mk-guide-chip" style={sx("flex:none;white-space:nowrap;font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.13em;text-transform:uppercase;color:#0A5A4B;background:#E3F0EB;padding:8px 11px;border-radius:6px")}>Design guide</span>
    <span className="mk-guide-meta" style={sx("margin-left:auto;white-space:nowrap;font:400 12px/1 'IBM Plex Mono',monospace;color:#616961")}>Internal reference · v1</span>
    </div>
    </div>
  );
}
