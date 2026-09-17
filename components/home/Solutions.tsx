import { Fragment } from 'react';
import { SectionHead } from '@/components/macs/mock';
import { sx } from '@/lib/css';
import { SOLUTIONS, SOLUTIONS_HEAD } from '@/lib/home-data';

/** Two doors out of the overview: the provider kit and the MAC review system. Whole card is the link. */
export function Solutions() {
  return (
    <section id="solutions" style={sx('background:#F4F6F3;border-top:1px solid #E6EAE5;border-bottom:1px solid #E6EAE5;padding:110px 0')}>
      <div style={sx('max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)')}>
        <SectionHead eyebrow={SOLUTIONS_HEAD.eyebrow} headline={SOLUTIONS_HEAD.headline} support={SOLUTIONS_HEAD.support} />
        <div
          className="mkrail"
          style={sx('display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr));gap:20px;margin-top:44px')}
        >
          {SOLUTIONS.map((s, i) => (
            <Fragment key={i}>
              <a
                href={s.href}
                className="mkcard"
                style={sx(
                  'display:flex;flex-direction:column;background:#fff;border:1px solid #DDE2DC;border-radius:14px;overflow:hidden;color:inherit;text-decoration:none'
                )}
              >
                <div style={sx('padding:26px 28px 22px;flex:1')}>
                  <span style={sx("font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.13em;text-transform:uppercase;color:#6B736C")}>
                    {s.n} · {s.kicker}
                  </span>
                  <h3 style={sx('font-weight:600;font-size:29px;line-height:1.14;letter-spacing:-0.026em;margin:14px 0 0')}>{s.title}</h3>
                  <p style={sx('font-size:15.5px;line-height:1.6;margin:14px 0 0;color:#3A443E')}>{s.body}</p>
                </div>
                <div
                  style={sx(
                    'border-top:1px solid #EEF1ED;background:#FAFBFA;padding:18px 28px;display:flex;align-items:center;gap:8px;flex-wrap:wrap'
                  )}
                >
                  {s.chips.map((c, j) => (
                    <Fragment key={j}>
                      <span style={sx("font:500 11px/1 'IBM Plex Mono',monospace;padding:7px 10px;border-radius:5px;background:#E3F0EB;color:#0A5A4B;white-space:nowrap")}>
                        {c}
                      </span>
                    </Fragment>
                  ))}
                  <span style={sx('margin-left:auto;font-weight:600;font-size:15px;color:#0A5A4B;white-space:nowrap')}>{s.cta} →</span>
                </div>
              </a>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
