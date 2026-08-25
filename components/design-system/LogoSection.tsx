import { MedkongMark } from '@/components/shared/MedkongMark';
import { sx } from '@/lib/css';
import { DownloadButtons } from './DownloadButtons';

const CARD_LIGHT = 'background:#fff;border:1px solid #DDE2DC;border-radius:14px;padding:26px';
const CARD_INK = 'background:#0E1512;border:1px solid #0E1512;border-radius:14px;padding:26px';
const CARD_TEAL = 'background:#0A5A4B;border:1px solid #0A5A4B;border-radius:14px;padding:26px';

const KICKER = "font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.13em;text-transform:uppercase";
const LOCKUP_ROW =
  'margin-top:22px;display:flex;align-items:center;gap:11px;font-weight:600;font-size:26px;letter-spacing:-0.02em';
const NOTE = 'margin:22px 0 0;font-size:13.5px;line-height:1.55';

/** Icon specimens sit on a fixed-height stage so the three cards line up. */
const ICON_STAGE = 'margin-top:22px;display:flex;align-items:center;justify-content:center;height:96px';

export function LogoSection() {
  return (
    <section id="logo" style={sx('background:#F4F6F3;border-top:1px solid #E6EAE5;border-bottom:1px solid #E6EAE5;padding:88px 0')}>
    <div style={sx('max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)')}>
    <span style={sx(`${KICKER};color:#0A5A4B`)}>01 — Logo &amp; wordmark</span>
    <h2 style={sx('font-weight:600;font-size:clamp(30px,3.3vw,46px);line-height:1.07;letter-spacing:-0.03em;margin:18px 0 0')}>MEDKONG is always uppercase.</h2>
    <p style={sx('font-size:17px;line-height:1.62;margin:20px 0 0;color:#3A443E;max-width:70ch')}>MED is set in primary teal, KONG in ink. The icon mark sits to its left at the wordmark&apos;s cap height. Use the full lockup wherever there is room for it; the icon on its own is for square, constrained placements — favicons, app icons, avatars.</p>

    {/* ---- full lockups ---- */}
    <div className="mkcols" style={sx('display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:18px;margin-top:36px')}>
    <div style={sx(CARD_LIGHT)}>
    <span style={sx(`${KICKER};color:#616961`)}>Primary lockup · on white</span>
    <div style={sx(LOCKUP_ROW)}>
    <MedkongMark height={38} />
    <span><span style={sx('color:#0A5A4B')}>MED</span><span style={sx('color:#0E1512')}>KONG</span></span>
    </div>
    <p style={sx(`${NOTE};color:#5A625C`)}>Use in nav, app chrome, and any light surface. Minimum height 26px for the wordmark.</p>
    <DownloadButtons base="medkong-lockup-on-white" />
    </div>

    <div style={sx(CARD_INK)}>
    <span style={sx(`${KICKER};color:#8B948C`)}>Inverse · on ink</span>
    <div style={sx(LOCKUP_ROW)}>
    <MedkongMark height={38} tone="dark" />
    <span><span style={sx('color:#5FBFA6')}>MED</span><span style={sx('color:#fff')}>KONG</span></span>
    </div>
    <p style={sx(`${NOTE};color:#B9C1BB`)}>On dark grounds MED lightens to #5FBFA6 so it clears 4.5:1. KONG goes pure white.</p>
    <DownloadButtons base="medkong-lockup-on-ink" tone="dark" />
    </div>

    <div style={sx(CARD_TEAL)}>
    <span style={sx(`${KICKER};color:#8FD3C1`)}>On primary teal</span>
    <div style={sx(`${LOCKUP_ROW};color:#fff`)}>
    <MedkongMark height={38} tone="onTeal" />
    <span>MEDKONG</span>
    </div>
    <p style={sx(`${NOTE};color:#CFE6DE`)}>On teal the wordmark is single-color white — never teal-on-teal.</p>
    <DownloadButtons base="medkong-lockup-on-teal" tone="dark" />
    </div>
    </div>

    {/* ---- icon mark on its own ---- */}
    <div style={sx('display:flex;align-items:baseline;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-top:44px')}>
    <span style={sx(`${KICKER};color:#0A5A4B`)}>Icon mark · standalone</span>
    <span style={sx("font:400 12px/1.5 'IBM Plex Mono',monospace;color:#6B736C")}>PNGs are transparent · inverse marks are white artwork</span>
    </div>
    <p style={sx('font-size:15px;line-height:1.6;margin:12px 0 0;color:#3A443E;max-width:70ch')}>Only where a lockup will not fit: browser tabs, app icons, social avatars, and the tenant badge inside product chrome. Never as a substitute for the lockup in page headers or documents.</p>

    <div className="mkcols" style={sx('display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:18px;margin-top:22px')}>
    <div style={sx(CARD_LIGHT)}>
    <span style={sx(`${KICKER};color:#616961`)}>On white</span>
    <div style={sx(ICON_STAGE)}><MedkongMark height={72} /></div>
    <p style={sx(`${NOTE};color:#5A625C`)}>Ink linework, #005749 chevron and dot. Minimum 20px tall.</p>
    <DownloadButtons base="medkong-icon-on-white" />
    </div>

    <div style={sx(CARD_INK)}>
    <span style={sx(`${KICKER};color:#8B948C`)}>On ink</span>
    <div style={sx(ICON_STAGE)}><MedkongMark height={72} tone="dark" /></div>
    <p style={sx(`${NOTE};color:#B9C1BB`)}>White linework, #5FBFA6 chevron and dot.</p>
    <DownloadButtons base="medkong-icon-on-ink" tone="dark" />
    </div>

    <div style={sx(CARD_TEAL)}>
    <span style={sx(`${KICKER};color:#8FD3C1`)}>On primary teal</span>
    <div style={sx(ICON_STAGE)}><MedkongMark height={72} tone="onTeal" /></div>
    <p style={sx(`${NOTE};color:#CFE6DE`)}>Single-color white, the same rule as the wordmark.</p>
    <DownloadButtons base="medkong-icon-on-teal" tone="dark" />
    </div>
    </div>

    {/* ---- rules ---- */}
    <div className="mkcols" style={sx('display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:18px;margin-top:36px')}>
    <div style={sx(CARD_LIGHT)}>
    <span style={sx(`${KICKER};color:#0A5A4B`)}>Do</span>
    <ul style={sx('margin:14px 0 0;padding-left:18px;font-size:14px;line-height:1.75;color:#3A443E')}>
    <li>MEDKONG, all caps, every instance</li>
    <li>MED teal · KONG ink</li>
    <li>Wordmark at 600 weight, -0.02em tracking</li>
    <li>Icon alone only where a lockup will not fit</li>
    </ul>
    </div>
    <div style={sx(CARD_LIGHT)}>
    <span style={sx(`${KICKER};color:#96301A`)}>Don&apos;t</span>
    <ul style={sx('margin:14px 0 0;padding-left:18px;font-size:14px;line-height:1.75;color:#3A443E')}>
    <li>&quot;MedKong&quot; or &quot;Medkong&quot; in body copy</li>
    <li>Rust or any non-teal on MED</li>
    <li>Gradients, shadows, or outlines on the wordmark</li>
    <li>Setting the wordmark in IBM Plex Mono</li>
    </ul>
    </div>
    <div style={sx(CARD_LIGHT)}>
    <span style={sx(`${KICKER};color:#616961`)}>Markup</span>
    <pre style={sx('margin-top:14px;color:#3A443E;background:#F7F9F7;border:1px solid #EEF1ED;border-radius:10px;padding:16px')}>&lt;span style=&quot;color:#0A5A4B&quot;&gt;MED&lt;/span&gt;
&lt;span style=&quot;color:#0E1512&quot;&gt;KONG&lt;/span&gt;</pre>
    </div>
    </div>
    </div>
    </section>
  );
}
