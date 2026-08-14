import { sx } from '@/lib/css';
import { useLanding } from './state';

export function Outcomes() {
  const { showCapability, showFigures } = useLanding();

  return (
    <section id="outcomes" style={sx("background:#fff;padding:110px 0")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)")}>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>Outcomes</span>
    <h2 style={sx("font-weight:600;font-size:clamp(32px,3.7vw,52px);line-height:1.06;letter-spacing:-0.032em;margin:18px 0 0;max-width:22ch")}>Built to move operational metrics.</h2>
    {showFigures ? (<>
    <div>
    <p style={sx("font-size:16px;line-height:1.6;margin:18px 0 0;color:#6B756E")}>Illustrative deployment targets used in planning, not customer results.</p>
    <div style={sx("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:1px;margin-top:40px;background:#E6EAE5;border:1px solid #E6EAE5;border-radius:14px;overflow:hidden")}>
    <div style={sx("background:#fff;padding:32px 28px")}>
    <p style={sx("margin:0;font-weight:600;font-size:clamp(42px,4.6vw,64px);letter-spacing:-0.04em;line-height:1")}>38%</p>
    <p style={sx("margin:18px 0 0;font-size:14.5px;line-height:1.5;color:#5A625C")}>Fewer manual touches per authorization</p>
    </div>
    <div style={sx("background:#fff;padding:32px 28px")}>
    <p style={sx("margin:0;font-weight:600;font-size:clamp(42px,4.6vw,64px);letter-spacing:-0.04em;line-height:1")}>2.4d</p>
    <p style={sx("margin:18px 0 0;font-size:14.5px;line-height:1.5;color:#5A625C")}>Faster from denial received to appeal filed</p>
    </div>
    <div style={sx("background:#fff;padding:32px 28px")}>
    <p style={sx("margin:0;font-weight:600;font-size:clamp(42px,4.6vw,64px);letter-spacing:-0.04em;line-height:1")}>94%</p>
    <p style={sx("margin:18px 0 0;font-size:14.5px;line-height:1.5;color:#5A625C")}>Target first-pass claim acceptance rate</p>
    </div>
    <div style={sx("background:#fff;padding:32px 28px")}>
    <p style={sx("margin:0;font-weight:600;font-size:clamp(42px,4.6vw,64px);letter-spacing:-0.04em;line-height:1")}>6wk</p>
    <p style={sx("margin:18px 0 0;font-size:14.5px;line-height:1.5;color:#5A625C")}>From kickoff to first module in production</p>
    </div>
    </div>
    </div>
    </>) : null}
    {showCapability ? (<>
    <div style={sx("display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:28px clamp(32px,5vw,80px);margin-top:36px")}>
    <p style={sx("font-size:17px;line-height:1.62;margin:0;color:#3A443E")}>Fewer manual touches per authorization, because assembly stops being a person’s job.</p>
    <p style={sx("font-size:17px;line-height:1.62;margin:0;color:#3A443E")}>Shorter time from denial received to appeal filed, with the evidence already attached.</p>
    <p style={sx("font-size:17px;line-height:1.62;margin:0;color:#3A443E")}>Higher first-pass acceptance, because claims are checked against your own denial history.</p>
    <p style={sx("font-size:17px;line-height:1.62;margin:0;color:#3A443E")}>Complete auditability: every automated action carries inputs, rationale and reviewer.</p>
    </div>
    </>) : null}
    </div>
    </section>
  );
}
