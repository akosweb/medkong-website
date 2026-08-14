import { Fragment } from 'react';
import { sx } from '@/lib/css';
import { useLanding } from './state';

export function WhyAkos() {
  const { akosLayers } = useLanding();

  return (
    <section style={sx("background:#F4F6F3;border-top:1px solid #E6EAE5;padding:110px 0")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)")}>
    <div className="mkcols" style={sx("display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.2fr);gap:44px clamp(32px,6vw,100px);align-items:start")}>
    <div>
    <img src="/assets/akos-mark.png" alt="AKOS" style={sx("display:block;width:36px;height:36px;border-radius:5px;margin:0 0 16px")} />
    <span style={sx("display:block;font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>Why AKOS</span>
    <h2 style={sx("font-weight:600;font-size:clamp(30px,3.3vw,46px);line-height:1.07;letter-spacing:-0.03em;margin:22px 0 0")}>The team behind the kit builds the whole stack.</h2>
    <p style={sx("font-size:17px;line-height:1.62;margin:20px 0 0;color:#3A443E")}>AKOS is a systems builder, not a design studio with an AI demo. The work is integration against real systems of record, canonical models that survive messy source data, agents that operate inside approval paths, and applications operators run their shift in.</p>
    <p style={sx("font-size:17px;line-height:1.62;margin:18px 0 0;color:#3A443E")}>That is why MEDKONG ships as a kit: every layer beneath the modules is infrastructure AKOS already deploys for enterprise operations.</p>
    <a href="https://akos.ai" target="_blank" rel="noopener" style={sx("display:inline-flex;align-items:center;gap:8px;margin-top:22px;font-weight:600;font-size:16px")}>akos.ai →</a>
    </div>
    <div style={sx("display:grid;gap:12px")}>
    {akosLayers.map((l, i) => (
              <Fragment key={i}>
    <div className="mkstack" style={sx("background:#fff;border:1px solid #DDE2DC;border-radius:12px;padding:20px 22px;display:grid;grid-template-columns:minmax(120px,150px) minmax(0,1fr);gap:16px 24px;align-items:baseline")}>
    <span style={sx("font-weight:600;font-size:16px;letter-spacing:-0.015em")}>{l.name}</span>
    <span style={sx("font-size:14.5px;line-height:1.58;color:#5A625C")}>{l.detail}</span>
    </div>
    </Fragment>
            ))}
    </div>
    </div>
    </div>
    </section>
  );
}
