import { MedkongMark } from '@/components/shared/MedkongMark';
import { sx } from '@/lib/css';

export function SiteFooter() {
  return (
    <footer style={sx("background:#0E1512;color:#B9C1BB;padding:56px 0 44px")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px);display:flex;flex-wrap:wrap;gap:26px 48px;align-items:center")}>
    <span style={sx("display:inline-flex;align-items:center;gap:11px;color:#fff;font-weight:600;font-size:18px")}>
    <MedkongMark height={28} tone="dark" />
    <span><span style={sx("color:#5FBFA6")}>MED</span><span style={sx("color:#fff")}>KONG</span></span>
    </span>
    <span style={sx("font-size:14px")}>Modular AI kit for healthcare RCM operations</span>
    <span style={sx("margin-left:auto;display:flex;flex-wrap:wrap;align-items:center;gap:22px;font-size:14px")}>
    <span style={sx("display:inline-flex;align-items:center;gap:9px")}>Built by <a href="https://akos.ai" target="_blank" rel="noopener" style={sx("color:#fff;font-weight:600")}>akos.ai</a></span>
    <span style={sx("display:inline-flex;align-items:center;gap:9px;background:#fff;border-radius:5px;padding:5px 9px")}><img src="/assets/palantir-wordmark.png" alt="Palantir" style={sx("height:13px;width:auto")} /></span>
    </span>
    </div>
    </footer>
  );
}
