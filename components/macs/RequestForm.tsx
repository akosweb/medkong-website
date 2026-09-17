'use client';

import { Fragment } from 'react';
import { LeadForm } from '@/components/shared/LeadForm';
import { sx } from '@/lib/css';
import { REQUEST } from '@/lib/macs-data';
import { REQUEST_ID } from './state';

/**
 * The page's one conversion point. Same lead form as the rest of the site, in
 * its MAC variant — role and jurisdiction, so the walkthrough can be prepared
 * against the right MAC's policy corpus.
 */
export function RequestForm() {
  return (
    <section id={REQUEST_ID} style={sx('background:#F1F8F5;border-top:1px solid #DCEAE3;padding:110px 0')}>
      <div style={sx('max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)')}>
        <div
          className="mkcols"
          style={sx(
            'display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.05fr);gap:44px clamp(32px,6vw,100px);align-items:start'
          )}
        >
          <div>
            <span style={sx("font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>
              {REQUEST.eyebrow}
            </span>
            <h2 style={sx('font-weight:600;font-size:clamp(34px,4.4vw,64px);line-height:1.03;letter-spacing:-0.036em;margin:18px 0 0')}>
              {REQUEST.headline}
            </h2>
            <p style={sx('font-size:18px;line-height:1.62;margin:24px 0 0;color:#3A443E;max-width:58ch')}>{REQUEST.lede}</p>

            <div style={sx('margin-top:32px;background:#fff;border:1px solid #DCEAE3;border-radius:14px;padding:24px 26px')}>
              <p style={sx("margin:0;font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.13em;text-transform:uppercase;color:#616961")}>
                What the walkthrough covers
              </p>
              <ol style={sx('margin:16px 0 0;padding:0;list-style:none;display:grid;gap:10px')}>
                {REQUEST.storyline.map((s, i) => (
                  <Fragment key={i}>
                    <li style={sx('display:grid;grid-template-columns:28px minmax(0,1fr);gap:10px;align-items:start;font-size:14.5px;line-height:1.5;color:#3A443E')}>
                      <span style={sx("font:500 11px/1.6 'IBM Plex Mono',monospace;color:#0A5A4B")}>{String(i + 1).padStart(2, '0')}</span>
                      <span>{s}</span>
                    </li>
                  </Fragment>
                ))}
              </ol>
            </div>

            <p style={sx('margin:22px 0 0;font-size:13.5px;line-height:1.6;color:#5A625C;max-width:62ch')}>{REQUEST.boundary}</p>
          </div>

          <div style={sx('background:#fff;border:1px solid #DCEAE3;border-radius:14px;padding:clamp(24px,3vw,36px)')}>
            <span style={sx("font:500 11px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>
              Request a walkthrough
            </span>
            <div style={sx('margin-top:16px')}>
              <LeadForm
                variant="mac"
                source="medkong-macs"
                placement="mac"
                submitLabel="Request a walkthrough"
                successNoun="walkthrough"
                intro="45 minutes, one case end to end, prepared against your jurisdiction’s policy corpus."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
