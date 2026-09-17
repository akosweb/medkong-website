'use client';

import { SiteFooter } from '@/components/landing/SiteFooter';
import { useStickyHeader } from '@/components/landing/state';
import { LeadForm } from '@/components/shared/LeadForm';
import { SiteHeader } from '@/components/shared/SiteHeader';
import { usePageMotion } from '@/components/shared/motion';
import { sx } from '@/lib/css';
import { AKOS_MARK, PALANTIR_WORDMARK } from '@/lib/assets';

const EXPECT = [
  { t: 'The workbenches running', d: 'Prior auth, coding review, claim QA, denial triage and AR follow-up on sample data, end to end.' },
  { t: 'The Foundry ontology behind them', d: 'How source systems land once and every module reads and writes the same governed objects.' },
  { t: 'A scoping of a first module', d: 'Which queue to start with in your environment, what it connects to, and what six weeks to production looks like.' },
];

function scrollToForm() {
  document.getElementById('form')?.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    block: 'start',
  });
}

/**
 * /contact — the demo request as a page of its own, for links that can't open
 * the homepage dialog (ads, posts, email signatures).
 */
export function ContactPage() {
  useStickyHeader();
  usePageMotion('.mk-contact');

  return (
    <div className="mk-page mk-contact">
      <SiteHeader ctaLabel="Request a demo" onCta={scrollToForm} tagline="Deployable AI infrastructure for the revenue cycle" />

      <section style={sx('background:#fff;padding:80px 0 110px')}>
        <div style={sx('max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)')}>
          <div className="mk-hero-meta" style={sx('display:flex;align-items:center;gap:14px;flex-wrap:wrap')}>
            <span
              className="mk-hero-eyebrow"
              style={sx(
                "display:inline-flex;align-items:center;font:500 11.5px/1.45 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B;background:#E3F0EB;padding:7px 11px;border-radius:6px"
              )}
            >
              Request a demo
            </span>
            <span className="mk-hero-break" aria-hidden="true" />
            <span style={sx('display:inline-flex;align-items:center;gap:9px;font-size:13.5px;color:#6B756E')}>
              <img src={AKOS_MARK} alt="AKOS" style={sx('width:19px;height:19px;border-radius:3px')} />
              Built by AKOS
            </span>
            <span style={sx('width:1px;height:14px;background:#D6DBD6')}></span>
            <span style={sx('display:inline-flex;align-items:center;gap:9px;font-size:13.5px;color:#6B756E;white-space:nowrap')}>
              Built on <img src={PALANTIR_WORDMARK} alt="Palantir" style={sx('height:15px;width:auto')} /> Foundry
            </span>
          </div>

          <div
            className="mkcols"
            style={sx(
              'display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.05fr);gap:44px clamp(32px,6vw,100px);align-items:start;margin-top:38px'
            )}
          >
            <div>
              <h1 style={sx('font-weight:600;font-size:clamp(38px,4.8vw,68px);line-height:1.03;letter-spacing:-0.036em;margin:0')}>
                See MEDKONG on your workflows.
              </h1>
              <p style={sx('font-size:18px;line-height:1.62;margin:24px 0 0;color:#3A443E;max-width:56ch')}>
                A walkthrough runs 45 minutes. Tell us which queue hurts most and an AKOS - MEDKONG engineer will set it
                up against the modules you pick.
              </p>

              <div style={sx('margin-top:32px;border:1px solid #DDE2DC;border-radius:14px;overflow:hidden')}>
                {EXPECT.map((e, i) => (
                  <div
                    key={i}
                    style={sx(
                      'display:grid;grid-template-columns:32px minmax(0,1fr);gap:14px;padding:20px 24px;' +
                        (i < EXPECT.length - 1 ? 'border-bottom:1px solid #EEF1ED' : '')
                    )}
                  >
                    <span style={sx("font:500 11px/1.6 'IBM Plex Mono',monospace;color:#0A5A4B")}>{String(i + 1).padStart(2, '0')}</span>
                    <span>
                      <span style={sx('display:block;font-weight:600;font-size:16.5px;letter-spacing:-0.015em')}>{e.t}</span>
                      <span style={sx('display:block;margin-top:6px;font-size:14.5px;line-height:1.58;color:#5A625C')}>{e.d}</span>
                    </span>
                  </div>
                ))}
              </div>

              <p style={sx('margin:22px 0 0;font-size:14.5px;line-height:1.6;color:#5A625C')}>
                Prefer email? <a href="mailto:hello@akos.ai" style={sx('color:#0A5A4B;font-weight:600')}>hello@akos.ai</a>.
                Reviewing prior authorization for a MAC?{' '}
                <a href="/medicare-administrative-contractors" style={sx('color:#0A5A4B;font-weight:600')}>
                  There’s a page for that.
                </a>
              </p>
            </div>

            <div id="form" style={sx('background:#F1F8F5;border:1px solid #DCEAE3;border-radius:14px;padding:clamp(24px,3vw,36px)')}>
              <div style={sx('background:#fff;border:1px solid #DCEAE3;border-radius:12px;padding:clamp(20px,2.4vw,28px)')}>
                <LeadForm
                  variant="modules"
                  source="medkong-website"
                  submitLabel="Request a demo"
                  successNoun="demo"
                  intro="Pick the modules you want to see. Two are preselected because that’s where most operators start."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
