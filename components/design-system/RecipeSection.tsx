import { sx } from '@/lib/css';

export function RecipeSection() {
  return (
    <section id="recipe" style={sx("background:#fff;padding:88px 0 96px")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)")}>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>16 — Page recipe</span>
    <h2 style={sx("font-weight:600;font-size:clamp(30px,3.3vw,46px);line-height:1.07;letter-spacing:-0.03em;margin:18px 0 0")}>Building the next page.</h2>
    <p style={sx("font-size:17px;line-height:1.62;margin:20px 0 0;color:#3A443E;max-width:70ch")}>A module page, a use-case page or a solution page follows the same spine as the homepage, with the middle swapped for its subject.</p>
    <div style={sx("margin-top:36px;display:grid;gap:12px")}>
    <div className="mkstack" style={sx("border:1px solid #DDE2DC;border-radius:12px;padding:20px 22px;display:grid;grid-template-columns:52px minmax(180px,1.1fr) minmax(240px,1.8fr);gap:16px 28px;align-items:center")}>
    <span style={sx("font:600 13px/1 'IBM Plex Mono',monospace;color:#6B736C")}>01</span>
    <span><span style={sx("display:block;font-weight:600;font-size:19px;letter-spacing:-0.02em")}>Sticky header</span><span style={sx("display:block;font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;margin-top:8px;color:#616961")}>White · 68px</span></span>
    <span style={sx("font-size:14.5px;line-height:1.58;color:#5A625C")}>Wordmark, section links, demo button. Shadow appears past 8px of scroll.</span>
    </div>
    <div className="mkstack" style={sx("border:1px solid #DDE2DC;border-radius:12px;padding:20px 22px;display:grid;grid-template-columns:52px minmax(180px,1.1fr) minmax(240px,1.8fr);gap:16px 28px;align-items:center")}>
    <span style={sx("font:600 13px/1 'IBM Plex Mono',monospace;color:#6B736C")}>02</span>
    <span><span style={sx("display:block;font-weight:600;font-size:19px;letter-spacing:-0.02em")}>Hero + product mock</span><span style={sx("display:block;font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;margin-top:8px;color:#616961")}>White</span></span>
    <span style={sx("font-size:14.5px;line-height:1.58;color:#5A625C")}>Chip eyebrow, trust line with both marks, H1 left with lede and buttons right, then the workbench for this page's subject.</span>
    </div>
    <div className="mkstack" style={sx("border:1px solid #DDE2DC;border-radius:12px;padding:20px 22px;display:grid;grid-template-columns:52px minmax(180px,1.1fr) minmax(240px,1.8fr);gap:16px 28px;align-items:center")}>
    <span style={sx("font:600 13px/1 'IBM Plex Mono',monospace;color:#6B736C")}>03</span>
    <span><span style={sx("display:block;font-weight:600;font-size:19px;letter-spacing:-0.02em")}>Trust band</span><span style={sx("display:block;font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;margin-top:8px;color:#616961")}>#F4F6F3 · 44px</span></span>
    <span style={sx("font-size:14.5px;line-height:1.58;color:#5A625C")}>AKOS mark, Foundry wordmark, one-line infrastructure claim, three outlined chips.</span>
    </div>
    <div className="mkstack" style={sx("border:1px solid #DDE2DC;border-radius:12px;padding:20px 22px;display:grid;grid-template-columns:52px minmax(180px,1.1fr) minmax(240px,1.8fr);gap:16px 28px;align-items:center")}>
    <span style={sx("font:600 13px/1 'IBM Plex Mono',monospace;color:#6B736C")}>04</span>
    <span><span style={sx("display:block;font-weight:600;font-size:19px;letter-spacing:-0.02em")}>Subject body — 3 to 5 bands</span><span style={sx("display:block;font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;margin-top:8px;color:#616961")}>Alternating white / #F4F6F3</span></span>
    <span style={sx("font-size:14.5px;line-height:1.58;color:#5A625C")}>What it is, how it works, mockup deep-dive, coverage cards. Every other band changes ground; one band may go #EEF2EF for a tabbed explorer.</span>
    </div>
    <div className="mkstack" style={sx("border:1px solid #0A5A4B;background:#F1F8F5;border-radius:12px;padding:20px 22px;display:grid;grid-template-columns:52px minmax(180px,1.1fr) minmax(240px,1.8fr);gap:16px 28px;align-items:center")}>
    <span style={sx("font:600 13px/1 'IBM Plex Mono',monospace;color:#0A5A4B")}>05</span>
    <span><span style={sx("display:block;font-weight:600;font-size:19px;letter-spacing:-0.02em")}>Foundry band</span><span style={sx("display:block;font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;margin-top:8px;color:#0A5A4B")}>#0A5A4B — required</span></span>
    <span style={sx("font-size:14.5px;line-height:1.58;color:#3A443E")}>Every page carries the Palantir band: white wordmark chip, why-Foundry cards, and the source → ontology → kits → surfaces flow.</span>
    </div>
    <div className="mkstack" style={sx("border:1px solid #DDE2DC;border-radius:12px;padding:20px 22px;display:grid;grid-template-columns:52px minmax(180px,1.1fr) minmax(240px,1.8fr);gap:16px 28px;align-items:center")}>
    <span style={sx("font:600 13px/1 'IBM Plex Mono',monospace;color:#6B736C")}>06</span>
    <span><span style={sx("display:block;font-weight:600;font-size:19px;letter-spacing:-0.02em")}>Outcomes &amp; audience</span><span style={sx("display:block;font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;margin-top:8px;color:#616961")}>White / #F4F6F3</span></span>
    <span style={sx("font-size:14.5px;line-height:1.58;color:#5A625C")}>Seamless stat grid (each figure sourced), then segment cards with stat footers.</span>
    </div>
    <div className="mkstack" style={sx("border:1px solid #DDE2DC;border-radius:12px;padding:20px 22px;display:grid;grid-template-columns:52px minmax(180px,1.1fr) minmax(240px,1.8fr);gap:16px 28px;align-items:center")}>
    <span style={sx("font:600 13px/1 'IBM Plex Mono',monospace;color:#6B736C")}>07</span>
    <span><span style={sx("display:block;font-weight:600;font-size:19px;letter-spacing:-0.02em")}>CTA + footer</span><span style={sx("display:block;font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;margin-top:8px;color:#616961")}>#F1F8F5 → #0E1512</span></span>
    <span style={sx("font-size:14.5px;line-height:1.58;color:#5A625C")}>CTA headline with both buttons opening the demo dialog, stack card on the right, then the ink footer with inverse wordmark.</span>
    </div>
    </div>
    <div style={sx("margin-top:26px;border:1px solid #C9DED6;background:#F1F8F5;border-radius:14px;padding:26px")}>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.13em;text-transform:uppercase;color:#0A5A4B")}>Ship checklist</span>
    <div style={sx("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:12px 32px;margin-top:16px;font-size:14.5px;line-height:1.6;color:#3A443E")}>
    <span>MEDKONG uppercase, MED teal, everywhere</span>
    <span>No two adjacent bands on the same ground</span>
    <span>Both AKOS and Foundry marks present above the fold</span>
    <span>Every mock panel wrapped in <span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#0A5A4B")}>.mkscale</span> with a caption</span>
    <span>All text ≥ 4.5:1; nothing lighter than #6B736C</span>
    <span>Rust used only for risk states</span>
    <span>Every CTA opens the demo dialog</span>
    <span>Card grids tagged <span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#0A5A4B")}>.mkrail</span>, text columns <span style={sx("font:400 12.5px 'IBM Plex Mono',monospace;color:#0A5A4B")}>.mkcols</span></span>
    <span>Every figure states where it was measured</span>
    <span>Fonts limited to Archivo + IBM Plex Mono</span>
    </div>
    </div>
    </div>
    </section>
  );
}
