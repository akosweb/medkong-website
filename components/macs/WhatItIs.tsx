import { Fragment } from 'react';
import { sx } from '@/lib/css';
import { CAPABILITIES, WHAT_IT_IS } from '@/lib/macs-data';
import { SectionHead } from './mock';

export function WhatItIs() {
  return (
    <section id="what" style={sx('background:#fff;padding:110px 0')}>
      <div style={sx('max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)')}>
        <SectionHead eyebrow={WHAT_IT_IS.eyebrow} headline={WHAT_IT_IS.headline} support={WHAT_IT_IS.support} />
        <div
          className="mkrail"
          style={sx(
            'display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:16px;margin-top:44px'
          )}
        >
          {CAPABILITIES.map((c, i) => (
            <Fragment key={i}>
              <div className="mkcard" style={sx('background:#fff;border:1px solid #DDE2DC;border-radius:12px;padding:22px 24px')}>
                <span
                  style={sx(
                    "font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#6B736C"
                  )}
                >
                  {c.n}
                </span>
                <h4 style={sx('font-weight:600;font-size:19px;line-height:1.25;letter-spacing:-0.02em;margin:12px 0 0')}>{c.title}</h4>
                <p style={sx('font-size:14.5px;line-height:1.58;margin:10px 0 0;color:#5A625C')}>{c.body}</p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
