'use client';

import { Fragment, useRef, useState } from 'react';
import { Confetti } from '@/components/landing/Confetti';
import { sx } from '@/lib/css';
import { JURISDICTIONS, REQUEST, ROLES } from '@/lib/macs-data';
import { REQUEST_ID } from './state';

const FIELD = sx(
  'height:42px;padding:0 12px;border:1px solid #DDE2DC;border-radius:8px;font-family:inherit;font-size:14.5px;color:#0E1512;background:#fff;width:100%;box-sizing:border-box'
);

const LABEL = sx(
  "font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:#616961"
);

type Status = 'idle' | 'submitting' | 'sent' | 'error';

const EMPTY = { name: '', email: '', phone: '', organization: '', role: '', message: '' };

/** Tagged so MAC-campaign leads can be reported on separately. */
const SOURCE = 'medkong-macs';
const MODULE = 'MAC prior authorization review';

/**
 * The page's one conversion point. Same fields and success copy as the
 * homepage demo dialog, plus role and jurisdiction so the walkthrough can be
 * prepared against the right MAC's policy corpus.
 */
export function RequestForm() {
  const [form, setForm] = useState(EMPTY);
  const [jurisdictions, setJurisdictions] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  // The success panel is shorter than the form; hold the card's height so the
  // band doesn't jump under the visitor.
  const cardRef = useRef<HTMLDivElement>(null);
  const [frozenHeight, setFrozenHeight] = useState<number | null>(null);

  const set = (key: keyof typeof EMPTY) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const toggleJurisdiction = (j: string) =>
    setJurisdictions((cur) => (cur.includes(j) ? cur.filter((x) => x !== j) : cur.concat(j)));

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
          source: SOURCE,
          name: form.name,
          email: form.email,
          phone: form.phone,
          organization: form.organization,
          message: form.message,
          modules: [MODULE],
          metadata: {
            audience: 'mac',
            role: form.role,
            jurisdictions: jurisdictions.join(', '),
          },
        }),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error || 'Something went wrong on our end.');
      }

      setFrozenHeight(cardRef.current?.offsetHeight ?? null);
      setForm(EMPTY);
      setJurisdictions([]);
      setStatus('sent');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong on our end.');
      setStatus('error');
    }
  }

  const submitting = status === 'submitting';

  return (
    <section id={REQUEST_ID} style={sx('background:#F1F8F5;border-top:1px solid #DCEAE3;padding:110px 0;scroll-margin-top:68px')}>
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

          <div
            ref={cardRef}
            style={{
              ...sx('position:relative;background:#fff;border:1px solid #DCEAE3;border-radius:14px;padding:clamp(24px,3vw,36px)'),
              ...(frozenHeight ? { minHeight: frozenHeight } : null),
            }}
          >
            {status === 'sent' ? <Confetti /> : null}

            {status === 'sent' ? (
              <div>
                <span style={sx("font:500 11px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>
                  Request a walkthrough
                </span>
                <div style={sx('margin-top:22px;border:1px solid #C9DED6;background:#F1F8F5;border-radius:12px;padding:24px')}>
                  <p style={sx('margin:0;font-weight:600;font-size:18px;letter-spacing:-0.018em;color:#0A5A4B')}>Request received.</p>
                  <p style={sx('margin:10px 0 0;font-size:14.5px;line-height:1.6;color:#3A443E')}>
                    An AKOS&nbsp;-&nbsp;MEDKONG engineer will reach out within one business day to schedule your walkthrough.
                  </p>
                  <p style={sx('margin:16px 0 0;padding-top:14px;border-top:1px solid #C9DED6;font-size:13.5px;line-height:1.6;color:#5A625C')}>
                    Our email sometimes lands in spam. We’ve sent you a confirmation — if it isn’t in your inbox, check your junk
                    folder and mark it “not junk” so our reply reaches you.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} style={sx('display:grid;gap:16px')}>
                <div>
                  <span style={sx("font:500 11px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B")}>
                    Request a walkthrough
                  </span>
                  <p style={sx('margin:12px 0 0;font-size:15px;line-height:1.6;color:#5A625C')}>
                    45 minutes, one case end to end, prepared against your jurisdiction’s policy corpus.
                  </p>
                </div>

                <div style={sx('display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));gap:14px')}>
                  <label style={sx('display:grid;gap:7px')}>
                    <span style={LABEL}>Name</span>
                    <input type="text" name="name" required autoComplete="name" value={form.name} onChange={set('name')} placeholder="Alex Boudreaux" style={FIELD} />
                  </label>
                  <label style={sx('display:grid;gap:7px')}>
                    <span style={LABEL}>Work email</span>
                    <input type="email" name="email" required autoComplete="email" value={form.email} onChange={set('email')} placeholder="alex@contractor.com" style={FIELD} />
                  </label>
                  <label style={sx('display:grid;gap:7px')}>
                    <span style={LABEL}>Phone</span>
                    <input type="tel" name="phone" autoComplete="tel" value={form.phone} onChange={set('phone')} placeholder="(555) 019-2284" style={FIELD} />
                  </label>
                  <label style={sx('display:grid;gap:7px')}>
                    <span style={LABEL}>MAC / organization</span>
                    <input type="text" name="organization" autoComplete="organization" value={form.organization} onChange={set('organization')} placeholder="Novitas Solutions, Inc." style={FIELD} />
                  </label>
                  <label style={sx('display:grid;gap:7px')}>
                    <span style={LABEL}>Your role</span>
                    <select name="role" value={form.role} onChange={set('role')} style={{ ...FIELD, ...(form.role ? null : { color: '#6B736C' }) }}>
                      <option value="">Select a role</option>
                      {ROLES.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <div style={sx('display:grid;gap:9px')}>
                  <span style={LABEL}>Jurisdictions you review for</span>
                  <div style={sx('display:flex;flex-wrap:wrap;gap:8px')}>
                    {JURISDICTIONS.map((j) => {
                      const on = jurisdictions.includes(j);
                      return (
                        <button
                          key={j}
                          type="button"
                          onClick={() => toggleJurisdiction(j)}
                          aria-pressed={on}
                          style={sx(
                            "cursor:pointer;font:500 12.5px/1 'IBM Plex Mono',monospace;letter-spacing:.04em;padding:10px 13px;border-radius:8px;transition:background .16s ease,border-color .16s ease;" +
                              (on ? 'background:#0A5A4B;border:1px solid #0A5A4B;color:#fff' : 'background:#fff;border:1px solid #DDE2DC;color:#5A625C')
                          )}
                        >
                          {j}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <label style={sx('display:grid;gap:7px')}>
                  <span style={LABEL}>What would you like to see?</span>
                  <textarea
                    rows={3}
                    name="message"
                    value={form.message}
                    onChange={set('message')}
                    placeholder="Documentation review for hospital OPD categories; how overrides and the provider letter are audited."
                    style={sx(
                      'padding:11px 12px;border:1px solid #DDE2DC;border-radius:8px;font-family:inherit;font-size:14.5px;line-height:1.55;color:#0E1512;background:#fff;resize:vertical;width:100%;box-sizing:border-box'
                    )}
                  />
                </label>

                {error ? (
                  <p role="alert" style={sx('margin:0;font-size:13.5px;line-height:1.5;color:#96301A;background:#FBE9E3;border-radius:8px;padding:11px 12px')}>
                    {error}
                  </p>
                ) : null}

                <div style={sx('display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-top:2px')}>
                  <button
                    type="submit"
                    className="mkcta"
                    disabled={submitting}
                    style={sx(
                      'display:inline-flex;align-items:center;height:48px;padding:0 24px;border:0;border-radius:9px;background:#0A5A4B;color:#fff;font-weight:600;font-size:15.5px;font-family:inherit;transition:background .18s ease;' +
                        (submitting ? 'opacity:.65;cursor:progress' : 'cursor:pointer')
                    )}
                  >
                    {submitting ? 'Sending…' : 'Request a walkthrough'}
                  </button>
                  <span style={sx('font-size:13px;color:#616961')}>
                    {jurisdictions.length ? `${jurisdictions.length} jurisdiction${jurisdictions.length === 1 ? '' : 's'} selected` : 'No jurisdiction selected'}
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
