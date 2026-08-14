import { sx } from '@/lib/css';

export function GuideIntro() {
  return (
    <section style={sx("background:#fff;padding:72px 0 56px")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)")}>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>Kitchen sink</span>
    <h1 style={sx("font-weight:600;font-size:clamp(38px,4.6vw,64px);line-height:1.04;letter-spacing:-0.036em;margin:18px 0 0;max-width:24ch")}>The MEDKONG design system.</h1>
    <p style={sx("font-size:17.5px;line-height:1.62;margin:22px 0 0;color:#3A443E;max-width:70ch")}>Every token, component and rule used to build the MEDKONG homepage, with copy-ready values. Build new pages from this file: match the band rhythm, reuse the components as written, and do not introduce colors, fonts or radii that are not on this page.</p>
    <div className="mkguide-toc" style={sx("display:flex;flex-wrap:wrap;gap:10px;margin-top:30px;font-size:14px")}>
    <a href="#logo" style={sx("padding:9px 13px;border:1px solid #DDE2DC;border-radius:8px")}>01 Logo</a>
    <a href="#partners" style={sx("padding:9px 13px;border:1px solid #DDE2DC;border-radius:8px")}>02 AKOS &amp; Palantir</a>
    <a href="#color" style={sx("padding:9px 13px;border:1px solid #DDE2DC;border-radius:8px")}>03 Color</a>
    <a href="#type" style={sx("padding:9px 13px;border:1px solid #DDE2DC;border-radius:8px")}>04 Type</a>
    <a href="#layout" style={sx("padding:9px 13px;border:1px solid #DDE2DC;border-radius:8px")}>05 Layout &amp; bands</a>
    <a href="#headings" style={sx("padding:9px 13px;border:1px solid #DDE2DC;border-radius:8px")}>06 Pre-headers</a>
    <a href="#badges" style={sx("padding:9px 13px;border:1px solid #DDE2DC;border-radius:8px")}>07 Badges</a>
    <a href="#buttons" style={sx("padding:9px 13px;border:1px solid #DDE2DC;border-radius:8px")}>08 Buttons</a>
    <a href="#forms" style={sx("padding:9px 13px;border:1px solid #DDE2DC;border-radius:8px")}>09 Forms</a>
    <a href="#cards" style={sx("padding:9px 13px;border:1px solid #DDE2DC;border-radius:8px")}>10 Cards</a>
    <a href="#mockui" style={sx("padding:9px 13px;border:1px solid #DDE2DC;border-radius:8px")}>11 Mock UI kit</a>
    <a href="#dataviz" style={sx("padding:9px 13px;border:1px solid #DDE2DC;border-radius:8px")}>12 Data viz</a>
    <a href="#motion" style={sx("padding:9px 13px;border:1px solid #DDE2DC;border-radius:8px")}>13 Motion</a>
    <a href="#responsive" style={sx("padding:9px 13px;border:1px solid #DDE2DC;border-radius:8px")}>14 Responsive</a>
    <a href="#voice" style={sx("padding:9px 13px;border:1px solid #DDE2DC;border-radius:8px")}>15 Voice</a>
    <a href="#recipe" style={sx("padding:9px 13px;border:1px solid #DDE2DC;border-radius:8px")}>16 Page recipe</a>
    </div>
    </div>
    </section>
  );
}
