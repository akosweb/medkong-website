'use client';

import { Fragment } from 'react';
import { DemoDialog } from '@/components/landing/DemoDialog';
import { SiteFooter } from '@/components/landing/SiteFooter';
import { useStickyHeader } from '@/components/landing/state';
import { SectionHead } from '@/components/macs/mock';
import { DemoProvider, useDemo } from '@/components/shared/demo';
import { usePageMotion, useSmoothAnchors } from '@/components/shared/motion';
import { SiteHeader } from '@/components/shared/SiteHeader';
import { sx } from '@/lib/css';
import { AKOS_MARK, PALANTIR_WORDMARK } from '@/lib/assets';
import { CLOSING, CONTRAST, HERO, PRINCIPLES, PRINCIPLES_HEAD, RELAY, REVIEWER, SUBMIT_ONCE } from '@/lib/manifesto-data';

const WRAP = 'max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)';
const EYEBROW = "font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B";
const LABEL = "font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase";

function Header() {
  const { openDemo } = useDemo();
  return <SiteHeader ctaLabel="Request a demo" onCta={openDemo} tagline="Deployable AI infrastructure for the revenue cycle" />;
}

/* ------------------------------------------------------------------ hero */

function Hero() {
  const { openDemo } = useDemo();

  return (
    <section style={sx('background:#fff;padding:80px 0 110px')}>
      <div style={sx(WRAP)}>
        <div className="mk-hero-meta" style={sx('display:flex;align-items:center;gap:14px;flex-wrap:wrap')}>
          <span
            className="mk-hero-eyebrow"
            style={sx(
              "display:inline-flex;align-items:center;font:500 11.5px/1.45 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B;background:#E3F0EB;padding:7px 11px;border-radius:6px"
            )}
          >
            {HERO.eyebrow}
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
            'display:grid;grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);gap:40px clamp(32px,5vw,90px);align-items:end;margin-top:38px'
          )}
        >
          {/* Two-sentence hero (§6): the second sentence in teal, on its own line. */}
          <h1 style={sx('font-weight:600;font-size:clamp(42px,5.6vw,82px);line-height:1.02;letter-spacing:-0.038em;margin:0')}>
            {HERO.headline} <span style={sx('display:block;color:#0A5A4B')}>{HERO.second}</span>
          </h1>
          <div>
            <p style={sx('font-size:18px;line-height:1.62;margin:0;color:#3A443E')}>{HERO.lede}</p>
            <div style={sx('display:flex;gap:12px;flex-wrap:wrap;margin-top:26px')}>
              <a
                className="mkcta"
                href="#principles"
                style={sx(
                  'display:inline-flex;align-items:center;height:48px;padding:0 24px;border-radius:9px;background:#0A5A4B;color:#fff;font-weight:600;font-size:15.5px;transition:background .18s ease'
                )}
              >
                Read the principles
              </a>
              <button
                type="button"
                className="mkghost"
                onClick={openDemo}
                style={sx(
                  'display:inline-flex;align-items:center;height:48px;padding:0 22px;border-radius:9px;border:1px solid #CFD6CF;background:#fff;color:#0E1512;font-weight:500;font-size:15.5px;cursor:pointer;font-family:inherit;transition:background .18s ease,border-color .18s ease'
                )}
              >
                Request a demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ principles */

function Principles() {
  return (
    <section id="principles" style={sx('background:#F4F6F3;border-top:1px solid #E6EAE5;padding:110px 0')}>
      <div style={sx(WRAP)}>
        <SectionHead eyebrow={PRINCIPLES_HEAD.eyebrow} headline={PRINCIPLES_HEAD.headline} support={PRINCIPLES_HEAD.support} />
        {/* .mk-principles: 2×2 with every row the same height on desktop. */}
        <div className="mk-principles" style={sx('display:grid;gap:16px;margin-top:44px')}>
          {PRINCIPLES.map((p) => (
            <article
              key={p.n}
              style={sx('display:flex;flex-direction:column;background:#fff;border:1px solid #DDE2DC;border-radius:14px;padding:30px 30px 28px')}
            >
              <span style={sx(`${LABEL};color:#0A5A4B`)}>Principle {p.n}</span>
              <h3 style={sx('font-weight:600;font-size:clamp(24px,2.2vw,29px);line-height:1.14;letter-spacing:-0.026em;margin:14px 0 0')}>
                {p.title}
              </h3>
              <p style={sx(`${LABEL};color:#616961;margin:24px 0 0`)}>We believe</p>
              <p style={sx('font-size:16.5px;line-height:1.6;margin:10px 0 0;color:#3A443E')}>{p.believe}</p>
              <div style={sx('margin-top:22px;padding-top:18px;border-top:1px solid #EEF1ED')}>
                <p style={sx(`${LABEL};color:#616961;margin:0`)}>The industry says</p>
                <p style={sx('font-size:15px;line-height:1.55;margin:10px 0 0;color:#5A625C')}>{p.industry}</p>
              </div>
              <div style={sx('flex:1;margin-top:20px;background:#F1F8F5;border:1px solid #0A5A4B;border-radius:10px;padding:16px 18px')}>
                <p style={sx(`${LABEL};color:#0A5A4B;margin:0`)}>How MEDKONG applies it</p>
                <p style={sx('font-size:15px;line-height:1.6;margin:10px 0 0;color:#3A443E')}>{p.applies}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- relay */

function Arrow({ color = '#9AA59D' }: { color?: string }) {
  return (
    <span aria-hidden="true" style={sx(`color:${color};font-size:16px;line-height:1`)}>
      →
    </span>
  );
}

function Relay() {
  return (
    <section style={sx('background:#fff;border-top:1px solid #E6EAE5;padding:110px 0')}>
      <div style={sx(WRAP)}>
        <SectionHead eyebrow={RELAY.eyebrow} headline={RELAY.headline} support={RELAY.support} />
        <div
          className="mkcols"
          style={sx('display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:16px;margin-top:44px')}
        >
          <div style={sx('border:1px solid #DDE2DC;border-radius:14px;padding:28px 30px;display:flex;flex-direction:column')}>
            <span style={sx(`${LABEL};color:#616961`)}>The hops</span>
            <div style={sx('display:flex;align-items:center;flex-wrap:wrap;gap:10px;margin-top:22px')}>
              {RELAY.hops.map((h, i) => (
                <Fragment key={h}>
                  {i > 0 && <Arrow />}
                  <span
                    style={sx(
                      "font:500 12px/1 'IBM Plex Mono',monospace;padding:9px 12px;border-radius:6px;background:#F1F4F1;color:#3A443E;white-space:nowrap"
                    )}
                  >
                    {h}
                  </span>
                </Fragment>
              ))}
            </div>
            <p style={sx('font-weight:600;font-size:19px;line-height:1.35;letter-spacing:-0.015em;margin:auto 0 0;padding-top:28px')}>
              {RELAY.hopsNote}
            </p>
          </div>

          <div style={sx('border:1px solid #DDE2DC;border-radius:14px;padding:28px 30px;display:flex;flex-direction:column')}>
            <span style={sx(`${LABEL};color:#96301A`)}>The loops</span>
            <div style={sx('display:flex;align-items:center;flex-wrap:wrap;gap:10px;margin-top:22px')}>
              {RELAY.loops.map((l, i) => (
                <Fragment key={l}>
                  {i > 0 && (
                    <span aria-hidden="true" style={sx("font:500 12px/1 'IBM Plex Mono',monospace;color:#9AA59D")}>
                      or
                    </span>
                  )}
                  <span
                    style={sx(
                      "font:500 12px/1 'IBM Plex Mono',monospace;padding:9px 12px;border-radius:6px;background:#FBE9E3;color:#96301A;white-space:nowrap"
                    )}
                  >
                    {l}
                  </span>
                </Fragment>
              ))}
              <Arrow color="#B23A1B" />
              <span
                style={sx(
                  "font:500 12px/1 'IBM Plex Mono',monospace;padding:8px 11px;border-radius:6px;border:1px solid #E6B7A8;color:#96301A;white-space:nowrap"
                )}
              >
                ↺ Resubmit, start over
              </span>
            </div>
            <p style={sx('font-weight:600;font-size:19px;line-height:1.35;letter-spacing:-0.015em;margin:auto 0 0;padding-top:28px')}>
              {RELAY.loopsNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- reviewer */

function Reviewer() {
  return (
    <section style={sx('background:#0A5A4B;color:#fff;padding:110px 0')}>
      <div style={sx(WRAP)}>
        <div
          className="mkcols"
          style={sx('display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:48px clamp(32px,6vw,100px);align-items:start')}
        >
          <div>
            <span style={sx(`${EYEBROW};color:#8FD3C1`)}>{REVIEWER.eyebrow}</span>
            <h2 style={sx('font-weight:600;font-size:clamp(32px,3.7vw,52px);line-height:1.06;letter-spacing:-0.032em;margin:18px 0 0')}>
              {REVIEWER.headline}
            </h2>
            {REVIEWER.body.map((t, i) => (
              <p key={i} style={sx('font-size:17.5px;line-height:1.62;margin:22px 0 0;color:#CFE6DE')}>
                {t}
              </p>
            ))}
          </div>
          <div style={sx('border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.06);border-radius:14px;padding:26px 28px')}>
            <span style={sx(`${LABEL};color:#8FD3C1`)}>The seven gates · both sides</span>
            <ol style={sx('list-style:none;margin:18px 0 0;padding:0')}>
              {REVIEWER.gates.map((g, i) => (
                <li
                  key={g}
                  style={sx(
                    'display:grid;grid-template-columns:36px minmax(0,1fr);align-items:center;padding:13px 0;' +
                      (i < REVIEWER.gates.length - 1 ? 'border-bottom:1px solid rgba(255,255,255,.14)' : '')
                  )}
                >
                  <span style={sx("font:500 11px/1 'IBM Plex Mono',monospace;color:#8FD3C1")}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={sx('font-weight:600;font-size:17px;letter-spacing:-0.012em')}>{g}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- submit once */

function SubmitOnce() {
  const { metric, path } = SUBMIT_ONCE;
  return (
    <section style={sx('background:#F4F6F3;padding:110px 0')}>
      <div style={sx(WRAP)}>
        <SectionHead eyebrow={SUBMIT_ONCE.eyebrow} headline={SUBMIT_ONCE.headline} support={SUBMIT_ONCE.support} />
        <div className="mkcols" style={sx('display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:44px')}>
          {SUBMIT_ONCE.checks.map((c, i) => (
            <div key={c.title} style={sx('background:#fff;border:1px solid #DDE2DC;border-radius:14px;padding:26px 26px 28px')}>
              <span style={sx(`${LABEL};color:#0A5A4B`)}>✓ {String(i + 1).padStart(2, '0')}</span>
              <h3 style={sx('font-weight:600;font-size:22px;line-height:1.2;letter-spacing:-0.02em;margin:14px 0 0')}>{c.title}</h3>
              <p style={sx('font-size:15.5px;line-height:1.6;margin:10px 0 0;color:#5A625C')}>{c.body}</p>
            </div>
          ))}
        </div>

        <div
          className="mkcols"
          style={sx('display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.6fr);gap:16px;margin-top:16px')}
        >
          <div style={sx('background:#F1F8F5;border:1px solid #0A5A4B;border-radius:14px;padding:26px 28px')}>
            <span style={sx(`${LABEL};color:#0A5A4B`)}>{metric.label}</span>
            <p style={sx('font-weight:600;font-size:24px;line-height:1.2;letter-spacing:-0.022em;margin:14px 0 0')}>{metric.name}</p>
            <p style={sx('font-size:15px;line-height:1.55;margin:10px 0 0;color:#3A443E')}>{metric.note}</p>
          </div>
          <div style={sx('background:#fff;border:1px solid #DDE2DC;border-radius:14px;padding:26px 28px')}>
            <span style={sx(`${LABEL};color:#616961`)}>{path.label}</span>
            <div style={sx('display:flex;align-items:center;flex-wrap:wrap;gap:10px;margin-top:16px')}>
              {path.steps.map((st, i) => (
                <Fragment key={st}>
                  {i > 0 && <Arrow />}
                  <span
                    style={sx(
                      'font-weight:600;font-size:15px;padding:8px 12px;border-radius:8px;white-space:nowrap;' +
                        (i === path.steps.length - 1 ? 'background:#E3F0EB;color:#0A5A4B' : 'background:#F1F4F1;color:#0E1512')
                    )}
                  >
                    {st}
                  </span>
                </Fragment>
              ))}
            </div>
            <p style={sx('font-size:14.5px;line-height:1.55;margin:16px 0 0;color:#5A625C')}>{path.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- contrast */

function Contrast() {
  return (
    <section style={sx('background:#fff;border-top:1px solid #E6EAE5;padding:110px 0')}>
      <div style={sx(WRAP)}>
        <SectionHead eyebrow={CONTRAST.eyebrow} headline={CONTRAST.headline} />
        <div style={sx('margin-top:44px;border:1px solid #DDE2DC;border-radius:14px;overflow:hidden')}>
          <div
            className="mk-colhead"
            style={sx('display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.4fr);gap:32px;padding:16px 28px;background:#F7F9F7;border-bottom:1px solid #E6EAE5')}
          >
            <span style={sx(`${LABEL};font-size:9.5px;color:#6B736C`)}>The consensus</span>
            <span style={sx(`${LABEL};font-size:9.5px;color:#6B736C`)}>Our view</span>
          </div>
          {CONTRAST.rows.map((r, i) => (
            <div
              key={i}
              className="mkstack mkrow"
              style={sx(
                'display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.4fr);gap:32px;padding:22px 28px;align-items:baseline;' +
                  (i < CONTRAST.rows.length - 1 ? 'border-bottom:1px solid #F1F3F0' : '')
              )}
            >
              <span style={sx('font-size:15.5px;line-height:1.55;color:#5A625C')}>{r.consensus}</span>
              <span style={sx('font-weight:600;font-size:17px;line-height:1.45;letter-spacing:-0.012em;color:#0E1512')}>{r.view}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- closing */

function Closing() {
  const { openDemo } = useDemo();

  return (
    <section style={sx('background:#F1F8F5;border-top:1px solid #DCEAE3;padding:110px 0')}>
      <div style={sx(WRAP)}>
        <div
          className="mkcols"
          style={sx('display:grid;grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);gap:40px clamp(32px,5vw,90px);align-items:end')}
        >
          <h2 style={sx('font-weight:600;font-size:clamp(34px,4.4vw,64px);line-height:1.03;letter-spacing:-0.036em;margin:0')}>
            {CLOSING.quote} <span style={sx('display:block;color:#0A5A4B')}>{CLOSING.quoteSecond}</span>
          </h2>
          <div>
            <p style={sx('font-size:18px;line-height:1.62;margin:0;color:#3A443E')}>{CLOSING.body}</p>
            <div style={sx('display:flex;gap:12px;flex-wrap:wrap;margin-top:26px')}>
              <button
                type="button"
                className="mkcta"
                onClick={openDemo}
                style={sx(
                  'display:inline-flex;align-items:center;height:52px;padding:0 26px;border:0;border-radius:9px;background:#0A5A4B;color:#fff;font-weight:600;font-size:16px;cursor:pointer;font-family:inherit;transition:background .18s ease'
                )}
              >
                See the seven gates in action
              </button>
              <button
                type="button"
                className="mkghost"
                onClick={openDemo}
                style={sx(
                  'display:inline-flex;align-items:center;height:52px;padding:0 24px;border-radius:9px;border:1px solid #B9CCC3;background:#fff;color:#0E1512;font-weight:500;font-size:16px;cursor:pointer;font-family:inherit;transition:background .18s ease,border-color .18s ease'
                )}
              >
                Talk to us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Hooks() {
  useStickyHeader();
  usePageMotion('.mk-manifesto');
  useSmoothAnchors();
  return null;
}

/**
 * /manifesto — what MEDKONG believes, for RCM and MAC leaders.
 *
 * Band order (§5): hero (white) → principles (grey) → the relay (white) →
 * reviewer side first (teal) → submit once (grey) → what we don't believe
 * (white) → closing CTA (teal tint) → footer (ink).
 */
export function ManifestoPage() {
  return (
    <DemoProvider>
      <Hooks />
      <div className="mk-page mk-manifesto">
        <Header />
        <Hero />
        <Principles />
        <Relay />
        <Reviewer />
        <SubmitOnce />
        <Contrast />
        <Closing />
        <SiteFooter />
        <DemoDialog />
      </div>
    </DemoProvider>
  );
}
