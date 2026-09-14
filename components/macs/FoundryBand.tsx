import { Fragment } from 'react';
import { sx } from '@/lib/css';
import { FOUNDRY } from '@/lib/macs-data';
import { PALANTIR_WORDMARK } from '@/lib/assets';

export function FoundryBand() {
  return (
    <section id="foundry" style={sx('background:#0A5A4B;color:#fff;padding:110px 0')}>
      <div style={sx('max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)')}>
        <div
          className="mkcols"
          style={sx(
            'display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.15fr);gap:48px clamp(32px,6vw,100px);align-items:start'
          )}
        >
          <div>
            <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#8FD3C1")}>
              Why Palantir
            </span>
            <div style={sx('background:#fff;border-radius:10px;padding:14px 18px;display:flex;width:fit-content;margin:22px 0 0')}>
              <img src={PALANTIR_WORDMARK} alt="Palantir" style={sx('height:30px;width:auto')} />
            </div>
            <h2 style={sx('font-weight:600;font-size:clamp(32px,3.7vw,52px);line-height:1.06;letter-spacing:-0.032em;margin:24px 0 0')}>
              {FOUNDRY.headline}
            </h2>
            <p style={sx('font-size:17.5px;line-height:1.62;margin:22px 0 0;color:#CFE6DE')}>{FOUNDRY.lede}</p>
            <p style={sx('font-size:17.5px;line-height:1.62;margin:18px 0 0;color:#CFE6DE')}>{FOUNDRY.second}</p>
          </div>
          <div style={sx('display:grid;gap:12px')}>
            {FOUNDRY.points.map((p, i) => (
              <Fragment key={i}>
                <div style={sx('border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.06);border-radius:12px;padding:20px 22px')}>
                  <p style={sx('margin:0;font-weight:600;font-size:17px;letter-spacing:-0.015em')}>{p.name}</p>
                  <p style={sx('margin:9px 0 0;font-size:14.5px;line-height:1.58;color:#BFDCD3')}>{p.detail}</p>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
        <div
          style={sx(
            'margin-top:44px;padding-top:32px;border-top:1px solid rgba(255,255,255,.16);display:flex;flex-wrap:wrap;gap:20px 48px;align-items:center'
          )}
        >
          <span style={sx("font:500 11px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#8FD3C1")}>
            Where Foundry sits
          </span>
          <span style={sx('display:flex;flex-wrap:wrap;gap:10px;align-items:center;font-size:14px')}>
            {FOUNDRY.flow.map((f, i) => (
              <Fragment key={i}>
                {i > 0 ? <span style={sx('color:#8FD3C1')}>→</span> : null}
                <span
                  style={sx(
                    i === 1
                      ? 'padding:8px 13px;border-radius:7px;background:#fff;color:#0A5A4B;font-weight:600'
                      : 'padding:8px 13px;border-radius:7px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18)'
                  )}
                >
                  {f}
                </span>
              </Fragment>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}
