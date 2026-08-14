import { sx } from '@/lib/css';

export function ColorSection() {
  return (
    <section id="color" style={sx("background:#F4F6F3;border-top:1px solid #E6EAE5;border-bottom:1px solid #E6EAE5;padding:88px 0")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)")}>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>03 — Color</span>
    <h2 style={sx("font-weight:600;font-size:clamp(30px,3.3vw,46px);line-height:1.07;letter-spacing:-0.03em;margin:18px 0 0")}>Teal works. Rust warns. Everything else is paper.</h2>
    <p style={sx("font-size:17px;line-height:1.62;margin:20px 0 0;color:#3A443E;max-width:70ch")}>One accent family carries all action, state and emphasis. Rust is reserved exclusively for risk, denials, exceptions and errors — using it decoratively breaks the signal. Grays below #616961 are never used for text.</p>
    <div style={sx("margin-top:36px")}>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.13em;text-transform:uppercase;color:#616961")}>Primary — teal</span>
    <div style={sx("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,150px),1fr));gap:12px;margin-top:14px")}>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:10px;overflow:hidden")}>
    <div style={sx("height:76px;background:#0A5A4B")}></div>
    <div style={sx("padding:12px 13px")}><span style={sx("display:block;font-weight:600;font-size:13.5px")}>Primary</span><span style={sx("font:400 11.5px/1.5 'IBM Plex Mono',monospace;color:#616961")}>#0A5A4B<br />buttons, links, eyebrows</span></div>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:10px;overflow:hidden")}>
    <div style={sx("height:76px;background:#0E7A66")}></div>
    <div style={sx("padding:12px 13px")}><span style={sx("display:block;font-weight:600;font-size:13.5px")}>Primary hover</span><span style={sx("font:400 11.5px/1.5 'IBM Plex Mono',monospace;color:#616961")}>#0E7A66<br />button + link hover</span></div>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:10px;overflow:hidden")}>
    <div style={sx("height:76px;background:#12866F")}></div>
    <div style={sx("padding:12px 13px")}><span style={sx("display:block;font-weight:600;font-size:13.5px")}>Signal</span><span style={sx("font:400 11.5px/1.5 'IBM Plex Mono',monospace;color:#616961")}>#12866F<br />charts, dots, progress</span></div>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:10px;overflow:hidden")}>
    <div style={sx("height:76px;background:#E3F0EB")}></div>
    <div style={sx("padding:12px 13px")}><span style={sx("display:block;font-weight:600;font-size:13.5px")}>Teal wash</span><span style={sx("font:400 11.5px/1.5 'IBM Plex Mono',monospace;color:#616961")}>#E3F0EB<br />badges, active nav</span></div>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:10px;overflow:hidden")}>
    <div style={sx("height:76px;background:#F1F8F5")}></div>
    <div style={sx("padding:12px 13px")}><span style={sx("display:block;font-weight:600;font-size:13.5px")}>Teal tint</span><span style={sx("font:400 11.5px/1.5 'IBM Plex Mono',monospace;color:#616961")}>#F1F8F5<br />CTA band, cards</span></div>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:10px;overflow:hidden")}>
    <div style={sx("height:76px;background:#5FBFA6")}></div>
    <div style={sx("padding:12px 13px")}><span style={sx("display:block;font-weight:600;font-size:13.5px")}>On-dark teal</span><span style={sx("font:400 11.5px/1.5 'IBM Plex Mono',monospace;color:#616961")}>#5FBFA6<br />MED on ink footer</span></div>
    </div>
    </div>
    </div>
    <div style={sx("margin-top:26px")}>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.13em;text-transform:uppercase;color:#96301A")}>Risk — rust (state only)</span>
    <div style={sx("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,150px),1fr));gap:12px;margin-top:14px")}>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:10px;overflow:hidden")}>
    <div style={sx("height:76px;background:#B23A1B")}></div>
    <div style={sx("padding:12px 13px")}><span style={sx("display:block;font-weight:600;font-size:13.5px")}>Risk</span><span style={sx("font:400 11.5px/1.5 'IBM Plex Mono',monospace;color:#616961")}>#B23A1B<br />amounts at risk, charts</span></div>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:10px;overflow:hidden")}>
    <div style={sx("height:76px;background:#96301A")}></div>
    <div style={sx("padding:12px 13px")}><span style={sx("display:block;font-weight:600;font-size:13.5px")}>Risk text</span><span style={sx("font:400 11.5px/1.5 'IBM Plex Mono',monospace;color:#616961")}>#96301A<br />on rust wash</span></div>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:10px;overflow:hidden")}>
    <div style={sx("height:76px;background:#FBE9E3")}></div>
    <div style={sx("padding:12px 13px")}><span style={sx("display:block;font-weight:600;font-size:13.5px")}>Rust wash</span><span style={sx("font:400 11.5px/1.5 'IBM Plex Mono',monospace;color:#616961")}>#FBE9E3<br />REVIEW / APPEAL tags</span></div>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:10px;overflow:hidden")}>
    <div style={sx("height:76px;background:#FBE1D8")}></div>
    <div style={sx("padding:12px 13px")}><span style={sx("display:block;font-weight:600;font-size:13.5px")}>Rust highlight</span><span style={sx("font:400 11.5px/1.5 'IBM Plex Mono',monospace;color:#616961")}>#FBE1D8<br />flagged text spans</span></div>
    </div>
    </div>
    </div>
    <div style={sx("margin-top:26px")}>
    <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.13em;text-transform:uppercase;color:#616961")}>Ink, text &amp; surfaces</span>
    <div style={sx("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,150px),1fr));gap:12px;margin-top:14px")}>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:10px;overflow:hidden")}>
    <div style={sx("height:76px;background:#0E1512")}></div>
    <div style={sx("padding:12px 13px")}><span style={sx("display:block;font-weight:600;font-size:13.5px")}>Ink</span><span style={sx("font:400 11.5px/1.5 'IBM Plex Mono',monospace;color:#616961")}>#0E1512<br />headings, footer bg</span></div>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:10px;overflow:hidden")}>
    <div style={sx("height:76px;background:#3A443E")}></div>
    <div style={sx("padding:12px 13px")}><span style={sx("display:block;font-weight:600;font-size:13.5px")}>Body</span><span style={sx("font:400 11.5px/1.5 'IBM Plex Mono',monospace;color:#616961")}>#3A443E<br />paragraphs · 10.4:1</span></div>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:10px;overflow:hidden")}>
    <div style={sx("height:76px;background:#5A625C")}></div>
    <div style={sx("padding:12px 13px")}><span style={sx("display:block;font-weight:600;font-size:13.5px")}>Secondary</span><span style={sx("font:400 11.5px/1.5 'IBM Plex Mono',monospace;color:#616961")}>#5A625C<br />card body · 6.6:1</span></div>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:10px;overflow:hidden")}>
    <div style={sx("height:76px;background:#616961")}></div>
    <div style={sx("padding:12px 13px")}><span style={sx("display:block;font-weight:600;font-size:13.5px")}>Muted</span><span style={sx("font:400 11.5px/1.5 'IBM Plex Mono',monospace;color:#616961")}>#616961<br />mono labels · 5.4:1</span></div>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:10px;overflow:hidden")}>
    <div style={sx("height:76px;background:#6B736C")}></div>
    <div style={sx("padding:12px 13px")}><span style={sx("display:block;font-weight:600;font-size:13.5px")}>Muted min</span><span style={sx("font:400 11.5px/1.5 'IBM Plex Mono',monospace;color:#616961")}>#6B736C<br />lightest legal text · 4.6:1</span></div>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:10px;overflow:hidden")}>
    <div style={sx("height:76px;background:#F7F9F7;border-bottom:1px solid #E6EAE5")}></div>
    <div style={sx("padding:12px 13px")}><span style={sx("display:block;font-weight:600;font-size:13.5px")}>Chrome</span><span style={sx("font:400 11.5px/1.5 'IBM Plex Mono',monospace;color:#616961")}>#F7F9F7<br />app title bars, sidebars</span></div>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:10px;overflow:hidden")}>
    <div style={sx("height:76px;background:#F4F6F3;border-bottom:1px solid #E6EAE5")}></div>
    <div style={sx("padding:12px 13px")}><span style={sx("display:block;font-weight:600;font-size:13.5px")}>Band gray</span><span style={sx("font:400 11.5px/1.5 'IBM Plex Mono',monospace;color:#616961")}>#F4F6F3<br />alternating sections</span></div>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:10px;overflow:hidden")}>
    <div style={sx("height:76px;background:#EEF2EF;border-bottom:1px solid #E0E7E2")}></div>
    <div style={sx("padding:12px 13px")}><span style={sx("display:block;font-weight:600;font-size:13.5px")}>Band mint</span><span style={sx("font:400 11.5px/1.5 'IBM Plex Mono',monospace;color:#616961")}>#EEF2EF<br />product explorer band</span></div>
    </div>
    </div>
    </div>
    <div style={sx("margin-top:26px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:18px")}>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:12px;padding:20px 22px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Borders</span>
    <div style={sx("margin-top:14px;display:grid;gap:10px;font:400 12.5px/1.5 'IBM Plex Mono',monospace;color:#3A443E")}>
    <span style={sx("display:flex;justify-content:space-between;gap:12px;padding-bottom:9px;border-bottom:1px solid #DDE2DC")}>#DDE2DC <span style={sx("color:#616961")}>card border</span></span>
    <span style={sx("display:flex;justify-content:space-between;gap:12px;padding-bottom:9px;border-bottom:1px solid #E6EAE5")}>#E6EAE5 <span style={sx("color:#616961")}>band + chrome divider</span></span>
    <span style={sx("display:flex;justify-content:space-between;gap:12px;padding-bottom:9px;border-bottom:1px solid #EEF1ED")}>#EEF1ED <span style={sx("color:#616961")}>inner panel divider</span></span>
    <span style={sx("display:flex;justify-content:space-between;gap:12px;padding-bottom:9px;border-bottom:1px solid #F1F3F0")}>#F1F3F0 <span style={sx("color:#616961")}>table row rule</span></span>
    </div>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:12px;padding:20px 22px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Chart ramp</span>
    <div style={sx("margin-top:14px;display:flex;height:44px;border-radius:8px;overflow:hidden")}>
    <span style={sx("flex:1;background:#12866F")}></span><span style={sx("flex:1;background:#4FA48F")}></span><span style={sx("flex:1;background:#84BFAE")}></span><span style={sx("flex:1;background:#B2D5C9")}></span><span style={sx("flex:1;background:#D6E7DF")}></span>
    </div>
    <p style={sx("margin:12px 0 0;font:400 12px/1.6 'IBM Plex Mono',monospace;color:#616961")}>#12866F → #4FA48F → #84BFAE → #B2D5C9 → #D6E7DF<br />Sequential only. Rust breaks the ramp when a value means risk.</p>
    </div>
    <div style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:12px;padding:20px 22px")}>
    <span style={sx("font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C")}>Contrast floor</span>
    <p style={sx("margin:14px 0 0;font-size:14px;line-height:1.65;color:#3A443E")}>All text ≥ 4.5:1 on its ground. #6B736C is the lightest permitted gray on white; anything lighter is decoration (rules, tracks, dashed placeholders) and never carries meaning.</p>
    </div>
    </div>
    </div>
    </section>
  );
}
