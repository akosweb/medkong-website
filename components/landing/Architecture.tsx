import { Fragment } from 'react';
import { sx } from '@/lib/css';
import { useLanding } from './state';

export function Architecture() {
  const { stack } = useLanding();

  return (
    <section id="architecture" style={sx("background:#fff;padding:110px 0")}>
    <div style={sx("max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)")}>
    <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>System architecture</span>
    <div className="mkcols" style={sx("display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);gap:24px clamp(32px,6vw,90px);align-items:end;margin-top:18px")}>
    <h2 style={sx("font-weight:600;font-size:clamp(32px,3.7vw,52px);line-height:1.06;letter-spacing:-0.032em;margin:0")}>The MEDKONG intelligence stack.</h2>
    <p style={sx("font-size:17px;line-height:1.62;margin:0;color:#3A443E")}>Six layers. The bottom four are shared by every module — which is why the second module costs a fraction of the first.</p>
    </div>
    <div style={sx("display:grid;gap:12px;margin-top:44px")}>
    {stack.map((s, i) => (
            <Fragment key={i}>
    <div style={sx(s.style)}>
    <div className="mkstack" style={sx("display:grid;grid-template-columns:52px minmax(180px,1.1fr) minmax(240px,1.6fr) minmax(180px,1fr);gap:16px 28px;align-items:center")}>
    <span style={sx(`font:600 13px/1 'IBM Plex Mono',monospace;color:${s.numColor}`)}>{s.n}</span>
    <span>
    <span style={sx("display:block;font-weight:600;font-size:20px;letter-spacing:-0.02em")}>{s.name}</span>
    <span style={sx(`display:block;font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;margin-top:8px;color:${s.ownerColor}`)}>{s.owner}</span>
    </span>
    <span style={sx(`font-size:14.5px;line-height:1.58;color:${s.detailColor}`)}>{s.detail}</span>
    <span style={sx("display:flex;gap:7px;flex-wrap:wrap;justify-content:flex-end")}>
    {s.chips.map((c, i) => (
                    <Fragment key={i}>
    <span style={sx(c.style)}>{c.t}</span>
    </Fragment>
                  ))}
    </span>
    </div>
    </div>
    </Fragment>
          ))}
    </div>
    </div>
    </section>
  );
}
