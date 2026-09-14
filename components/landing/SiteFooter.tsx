import { Fragment } from 'react';
import { MedkongMark } from '@/components/shared/MedkongMark';
import { sx } from '@/lib/css';
import { FOOTER_NAV } from '@/lib/nav';
import { PALANTIR_WORDMARK } from '@/lib/assets';

export function SiteFooter() {
  return (
    <footer style={sx("background:#0E1512;color:#B9C1BB;padding:64px 0 44px")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)")}>
    {/* nav groups */}
    <div style={sx("display:grid;grid-template-columns:minmax(0,1.4fr) repeat(auto-fit,minmax(min(100%,160px),max-content));gap:32px clamp(32px,6vw,96px);align-items:start;padding-bottom:40px;border-bottom:1px solid rgba(255,255,255,.12)")}>
    <div>
    <span style={sx("display:inline-flex;align-items:center;gap:11px;color:#fff;font-weight:600;font-size:18px")}>
    <MedkongMark height={28} tone="dark" />
    <span><span style={sx("color:#5FBFA6")}>MED</span><span style={sx("color:#fff")}>KONG</span></span>
    </span>
    <p style={sx("margin:14px 0 0;font-size:14px;line-height:1.6;max-width:36ch")}>Modular AI kit for healthcare RCM operations. Built by AKOS on Palantir Foundry.</p>
    </div>
    {FOOTER_NAV.map((g, i) => (
            <Fragment key={i}>
    <nav aria-label={g.title} style={sx("display:grid;gap:12px;align-content:start")}>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.13em;text-transform:uppercase;color:#7E877F")}>{g.title}</span>
    {g.links.map((l, j) => (
                <Fragment key={j}>
    <a className="mk-footer-link" href={l.href} target={l.external ? '_blank' : undefined} rel={l.external ? 'noopener' : undefined}>{l.label}{l.external ? ' ↗' : ''}</a>
    </Fragment>
              ))}
    </nav>
    </Fragment>
          ))}
    </div>
    {/* attribution */}
    <div style={sx("display:flex;flex-wrap:wrap;gap:18px 32px;align-items:center;padding-top:28px;font-size:13.5px")}>
    <span>© {new Date().getFullYear()} AKOS. MEDKONG is deployed software; product screenshots use sample data.</span>
    <span style={sx("margin-left:auto;display:flex;flex-wrap:wrap;align-items:center;gap:22px")}>
    <span style={sx("display:inline-flex;align-items:center;gap:9px")}>Built by <a href="https://akos.ai" target="_blank" rel="noopener" style={sx("color:#fff;font-weight:600")}>akos.ai</a></span>
    <span style={sx("display:inline-flex;align-items:center;gap:9px")}>Built on <span style={sx("display:inline-flex;align-items:center;background:#fff;border-radius:5px;padding:5px 9px")}><img src={PALANTIR_WORDMARK} alt="Palantir" style={sx("height:13px;width:auto")} /></span> Foundry</span>
    </span>
    </div>
    </div>
    </footer>
  );
}
