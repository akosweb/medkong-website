import { sx } from '@/lib/css';
import { useLanding } from './state';

export function DemoCta() {
  const { openDemo } = useLanding();

  return (
    <section id="demo" style={sx("background:#F1F8F5;border-top:1px solid #DCEAE3;padding:110px 0")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)")}>
    <div className="mkcols" style={sx("display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,1fr);gap:44px clamp(32px,6vw,100px);align-items:center")}>
    <div>
    <h2 style={sx("font-weight:600;font-size:clamp(34px,4.4vw,64px);line-height:1.03;letter-spacing:-0.036em;margin:0")}>Bring modular AI to the revenue cycle.</h2>
    <p style={sx("font-size:18px;line-height:1.62;margin:24px 0 0;color:#3A443E;max-width:58ch")}>A walkthrough runs 45 minutes: the workbenches running, the ontology behind them, and an honest scoping of what a first module would take in your environment.</p>
    <div style={sx("display:flex;gap:12px;flex-wrap:wrap;margin-top:28px")}>
    <button type="button" className="mkcta" onClick={openDemo} style={sx("display:inline-flex;align-items:center;height:52px;padding:0 26px;border:0;border-radius:9px;background:#0A5A4B;color:#fff;font-weight:600;font-size:16px;cursor:pointer;transition:background .18s ease")}>Request a demo</button>
    <button type="button" className="mkghost" onClick={openDemo} style={sx("display:inline-flex;align-items:center;height:52px;padding:0 24px;border-radius:9px;border:1px solid #B9CCC3;background:#fff;color:#0E1512;font-weight:500;font-size:16px;cursor:pointer;transition:background .18s ease,border-color .18s ease")}>Book an architecture walkthrough</button>
    </div>
    </div>
    <div style={sx("background:#fff;border:1px solid #DCEAE3;border-radius:14px;padding:28px 30px")}>
    <p style={sx("margin:0;font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.13em;text-transform:uppercase;color:#616961")}>The stack behind it</p>
    <div style={sx("display:flex;align-items:center;gap:14px;margin-top:20px;padding-bottom:20px;border-bottom:1px solid #EEF1ED")}>
    <img src="/assets/akos-mark.png" alt="AKOS" style={sx("width:40px;height:40px;border-radius:6px")} />
    <span><span style={sx("display:block;font-weight:600;font-size:16px")}>Built by AKOS</span><span style={sx("font-size:13.5px;color:#6B756E")}>Integration, ontology, agents, applications</span></span>
    </div>
    <div style={sx("display:flex;align-items:center;gap:14px;margin-top:20px")}>
    <img src="/assets/palantir-wordmark.png" alt="Palantir" style={sx("height:22px;width:auto")} />
    <span><span style={sx("display:block;font-weight:600;font-size:16px")}>Built on Foundry</span><span style={sx("font-size:13.5px;color:#6B756E")}>Governed data, orchestration, full lineage</span></span>
    </div>
    <p style={sx("margin:22px 0 0;font-size:14px;line-height:1.55;color:#5A625C")}>Deployed module by module, into the systems you already run.</p>
    </div>
    </div>
    </div>
    </section>
  );
}
