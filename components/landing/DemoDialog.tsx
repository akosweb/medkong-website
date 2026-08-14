'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import { sx } from '@/lib/css';
import { MODULE_NAME_BY_KEY } from '@/lib/landing-data';
import { Confetti } from './Confetti';
import { stopPropagation, useLanding } from './state';

const FIELD = sx(
  'height:42px;padding:0 12px;border:1px solid #DDE2DC;border-radius:8px;font-family:inherit;font-size:14.5px;color:#0E1512;background:#fff'
);

const LABEL = sx(
  "font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:#616961"
);

type Status = 'idle' | 'submitting' | 'sent' | 'error';

const EMPTY = { name: '', email: '', phone: '', organization: '', message: '' };

export function DemoDialog() {
  const { demoOpen, closeDemo, interest, interestChips, interestCount } = useLanding();
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  /**
   * The success panel is shorter than the form, which would make the dialog
   * jump smaller mid-interaction. Freezing the measured height keeps it put.
   */
  const bodyRef = useRef<HTMLDivElement>(null);
  const [frozenHeight, setFrozenHeight] = useState<number | null>(null);

  // Reopening the dialog after a submit should show a fresh form. On narrow
  // screens the dialog is a full-screen sheet, so the page behind it is locked.
  useEffect(() => {
    if (!demoOpen) return;

    setStatus('idle');
    setError(null);
    setFrozenHeight(null);
    document.body.classList.add('mk-dialog-open');

    return () => document.body.classList.remove('mk-dialog-open');
  }, [demoOpen]);

  if (!demoOpen) return null;

  const set = (key: keyof typeof EMPTY) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (status === 'submitting') return;

    setStatus('submitting');
    setError(null);

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          modules: interest.map((k) => MODULE_NAME_BY_KEY[k] ?? k),
        }),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error || 'Something went wrong on our end.');
      }

      // Measure before the form unmounts, so the panel keeps its size.
      setFrozenHeight(bodyRef.current?.offsetHeight ?? null);
      setForm(EMPTY);
      setStatus('sent');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong on our end.');
      setStatus('error');
    }
  }

  const submitting = status === 'submitting';

  return (
    <div
      onClick={closeDemo}
      className="mk-dialog-backdrop"
      style={sx(
        'position:fixed;inset:0;z-index:90;background:rgba(14,21,18,.55);backdrop-filter:blur(3px);display:flex;align-items:flex-start;justify-content:center;padding:clamp(16px,4vw,48px);overflow:auto'
      )}
    >
      <div
        onClick={stopPropagation}
        role="dialog"
        aria-modal="true"
        aria-label="Request a demo"
        className="mk-dialog"
        style={sx(
          'position:relative;width:min(1020px,100%);margin:auto;max-height:calc(100dvh - 64px);background:#fff;border-radius:16px;box-shadow:0 40px 90px -30px rgba(14,21,18,.5);overflow:auto;display:flex;flex-wrap:wrap'
        )}
      >
        {status === 'sent' ? <Confetti /> : null}

        <div
          ref={bodyRef}
          className="mk-dialog-body"
          style={{
            ...sx('flex:1 1 400px;min-width:0;padding:clamp(24px,3vw,38px)'),
            ...(frozenHeight ? { minHeight: frozenHeight } : null),
          }}
        >
          <div style={sx('display:flex;align-items:flex-start;justify-content:space-between;gap:16px')}>
            <div>
              <span
                style={sx(
                  "font:500 11px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B"
                )}
              >
                Request a demo
              </span>
              <h3
                style={sx(
                  'font-weight:600;font-size:clamp(24px,2.4vw,32px);line-height:1.12;letter-spacing:-0.028em;margin:14px 0 0'
                )}
              >
                See MEDKONG on your workflows.
              </h3>
              <p style={sx('font-size:15px;line-height:1.6;margin:12px 0 0;color:#5A625C')}>
                45 minutes: the workbenches on synthetic data, the Foundry ontology behind them, and a scoping of
                a first module in your environment.
              </p>
            </div>
            <button
              type="button"
              onClick={closeDemo}
              aria-label="Close"
              className="mk-dialog-close"
              style={sx(
                'flex:none;width:34px;height:34px;border-radius:8px;border:1px solid #E1E5E0;background:#fff;color:#5A625C;font-size:17px;line-height:1;cursor:pointer'
              )}
            >
              ×
            </button>
          </div>

          {status === 'sent' ? (
            <div
              style={sx(
                'margin-top:28px;border:1px solid #C9DED6;background:#F1F8F5;border-radius:12px;padding:24px'
              )}
            >
              <p style={sx('margin:0;font-weight:600;font-size:18px;letter-spacing:-0.018em;color:#0A5A4B')}>
                Request received.
              </p>
              <p style={sx('margin:10px 0 0;font-size:14.5px;line-height:1.6;color:#3A443E')}>
                An AKOS&nbsp;-&nbsp;MEDKONG engineer will reach out within one business day to schedule your
                demo.
              </p>
              <p
                style={sx(
                  'margin:16px 0 0;padding-top:14px;border-top:1px solid #C9DED6;font-size:13.5px;line-height:1.6;color:#5A625C'
                )}
              >
                Our email sometimes lands in spam. We’ve sent you a confirmation — if it isn’t in your inbox,
                check your junk folder and mark it “not junk” so our reply reaches you.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} style={sx('margin-top:26px;display:grid;gap:16px')}>
              <div style={sx('display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,180px),1fr));gap:14px')}>
                <label style={sx('display:grid;gap:7px')}>
                  <span style={LABEL}>Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={set('name')}
                    placeholder="Dana Reyes"
                    style={FIELD}
                  />
                </label>
                <label style={sx('display:grid;gap:7px')}>
                  <span style={LABEL}>Work email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={set('email')}
                    placeholder="dana@healthsystem.org"
                    style={FIELD}
                  />
                </label>
                <label style={sx('display:grid;gap:7px')}>
                  <span style={LABEL}>Phone</span>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={set('phone')}
                    placeholder="(555) 019-2284"
                    style={FIELD}
                  />
                </label>
                <label style={sx('display:grid;gap:7px')}>
                  <span style={LABEL}>Organization</span>
                  <input
                    type="text"
                    name="organization"
                    autoComplete="organization"
                    value={form.organization}
                    onChange={set('organization')}
                    placeholder="Northside Health"
                    style={FIELD}
                  />
                </label>
              </div>

              <div style={sx('display:grid;gap:9px')}>
                <span style={LABEL}>Modules you’re interested in</span>
                <div style={sx('display:flex;flex-wrap:wrap;gap:8px')}>
                  {interestChips.map((chip, idx) => (
                    <Fragment key={idx}>
                      <button type="button" onClick={chip.toggle} style={sx(chip.style)}>
                        {chip.name}
                      </button>
                    </Fragment>
                  ))}
                </div>
              </div>

              <label style={sx('display:grid;gap:7px')}>
                <span style={LABEL}>What are you trying to fix?</span>
                <textarea
                  rows={3}
                  name="message"
                  value={form.message}
                  onChange={set('message')}
                  placeholder="Pre-auth backlog across three service lines; denials rework is eating two FTEs."
                  style={sx(
                    'padding:11px 12px;border:1px solid #DDE2DC;border-radius:8px;font-family:inherit;font-size:14.5px;line-height:1.55;color:#0E1512;background:#fff;resize:vertical'
                  )}
                />
              </label>

              {error ? (
                <p
                  role="alert"
                  style={sx(
                    'margin:0;font-size:13.5px;line-height:1.5;color:#96301A;background:#FBE9E3;border-radius:8px;padding:11px 12px'
                  )}
                >
                  {error}
                </p>
              ) : null}

              <div style={sx('display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-top:2px')}>
                <button
                  type="submit"
                  className="mkcta"
                  disabled={submitting}
                  style={sx(
                    'display:inline-flex;align-items:center;height:48px;padding:0 24px;border:0;border-radius:9px;background:#0A5A4B;color:#fff;font-weight:600;font-size:15.5px;transition:background .18s ease;' +
                      (submitting ? 'opacity:.65;cursor:progress' : 'cursor:pointer')
                  )}
                >
                  {submitting ? 'Sending…' : 'Request a demo'}
                </button>
                <span style={sx('font-size:13px;color:#616961')}>{interestCount} modules selected</span>
              </div>
            </form>
          )}
        </div>

        <div
          className="mk-dialog-art"
          style={sx(
            'flex:1 1 300px;min-width:0;position:relative;background:#0A5A4B;display:flex;flex-direction:column'
          )}
        >
          <div
            className="mk-dialog-art-frame"
            style={sx('position:relative;flex:1 1 auto;min-height:200px;overflow:hidden')}
          >
            <img
              src="/assets/demo-dialog-art.webp"
              alt=""
              style={sx('position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block')}
            />
          </div>
          <div
            className="mk-dialog-credits"
            style={sx('padding:24px 26px;display:grid;gap:14px;border-top:1px solid rgba(255,255,255,.16)')}
          >
            <span style={sx('display:flex;align-items:center;gap:12px')}>
              <img src="/assets/akos-mark.png" alt="AKOS" style={sx('width:32px;height:32px;border-radius:5px')} />
              <span style={sx('color:#fff;font-weight:600;font-size:14.5px')}>Built by AKOS</span>
            </span>
            <span style={sx('display:flex;align-items:center;gap:12px')}>
              <span style={sx('background:#fff;border-radius:5px;padding:5px 8px;display:inline-flex')}>
                <img src="/assets/palantir-wordmark.png" alt="Palantir" style={sx('height:13px;width:auto')} />
              </span>
              <span style={sx('color:#fff;font-weight:600;font-size:14.5px')}>Built on Foundry</span>
            </span>
            <span style={sx("font:400 11.5px/1.5 'IBM Plex Mono',monospace;color:#9FC9BD")}>
              Deployed module by module, into the systems you already run.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
