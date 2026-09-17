'use client';

import { useRef, useState } from 'react';
import { Confetti } from '@/components/landing/Confetti';
import { sx } from '@/lib/css';
import { MODULES, type ModuleKey } from '@/lib/landing-data';
import { JURISDICTIONS, ROLES } from '@/lib/macs-data';

/**
 * The one lead form. Used by the homepage demo dialog, the /contact page and
 * the MAC page, so every submission reaches /api/leads — and the armory
 * `medkong.leads` table behind it — in the same shape.
 *
 * `modules` variant: module-interest chips (demo requests).
 * `mac` variant: role and jurisdiction, stored in the row's `metadata`.
 */

export type LeadFormProps = {
  variant: 'modules' | 'mac';
  source: 'medkong-website' | 'medkong-macs';
  submitLabel: string;
  /** "demo" / "walkthrough" — completes "…to schedule your ___." */
  successNoun: string;
  /** A short line above the fields; omitted when the host renders its own head. */
  intro?: string;
};

export const FIELD = sx(
  'height:42px;padding:0 12px;border:1px solid #DDE2DC;border-radius:8px;font-family:inherit;font-size:14.5px;color:#0E1512;background:#fff;width:100%;box-sizing:border-box'
);

export const LABEL = sx(
  "font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:#616961"
);

const PILL_ON = 'background:#0A5A4B;border:1px solid #0A5A4B;color:#fff';
const PILL_OFF = 'background:#fff;border:1px solid #DDE2DC;color:#5A625C';

type Status = 'idle' | 'submitting' | 'sent' | 'error';

const EMPTY = { name: '', email: '', phone: '', organization: '', role: '', message: '' };

/** Interest chips the demo form starts with. */
const DEFAULT_INTEREST: ModuleKey[] = ['pa', 'dn'];

const MAC_MODULE = 'MAC prior authorization review';

export function LeadForm({ variant, source, submitLabel, successNoun, intro }: LeadFormProps) {
  const mac = variant === 'mac';
  const [form, setForm] = useState(EMPTY);
  const [interest, setInterest] = useState<ModuleKey[]>(DEFAULT_INTEREST);
  const [jurisdictions, setJurisdictions] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  // The success panel is shorter than the form; hold the measured height so
  // the host (dialog or card) doesn't jump smaller under the visitor.
  const rootRef = useRef<HTMLDivElement>(null);
  const [frozenHeight, setFrozenHeight] = useState<number | null>(null);

  const set =
    (key: keyof typeof EMPTY) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const toggle = <T,>(setter: React.Dispatch<React.SetStateAction<T[]>>, v: T) =>
    setter((cur) => (cur.includes(v) ? cur.filter((x) => x !== v) : cur.concat(v)));

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
          source,
          name: form.name,
          email: form.email,
          phone: form.phone,
          organization: form.organization,
          message: form.message,
          modules: mac ? [MAC_MODULE] : MODULES.filter((m) => interest.includes(m.k)).map((m) => m.name),
          metadata: mac ? { audience: 'mac', role: form.role, jurisdictions: jurisdictions.join(', ') } : {},
        }),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error || 'Something went wrong on our end.');
      }

      setFrozenHeight(rootRef.current?.offsetHeight ?? null);
      setForm(EMPTY);
      setJurisdictions([]);
      setStatus('sent');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong on our end.');
      setStatus('error');
    }
  }

  const submitting = status === 'submitting';
  const count = mac ? jurisdictions.length : interest.length;
  const countLabel = mac
    ? count
      ? `${count} jurisdiction${count === 1 ? '' : 's'} selected`
      : 'No jurisdiction selected'
    : `${count} modules selected`;

  return (
    <div ref={rootRef} style={{ ...sx('position:relative'), ...(frozenHeight ? { minHeight: frozenHeight } : null) }}>
      {status === 'sent' ? <Confetti /> : null}

      {status === 'sent' ? (
        <div style={sx('border:1px solid #C9DED6;background:#F1F8F5;border-radius:12px;padding:24px')}>
          <p style={sx('margin:0;font-weight:600;font-size:18px;letter-spacing:-0.018em;color:#0A5A4B')}>Request received.</p>
          <p style={sx('margin:10px 0 0;font-size:14.5px;line-height:1.6;color:#3A443E')}>
            An AKOS&nbsp;-&nbsp;MEDKONG engineer will reach out within one business day to schedule your {successNoun}.
          </p>
          <p style={sx('margin:16px 0 0;padding-top:14px;border-top:1px solid #C9DED6;font-size:13.5px;line-height:1.6;color:#5A625C')}>
            Our email sometimes lands in spam. We’ve sent you a confirmation. If it isn’t in your inbox, check your junk
            folder and mark it “not junk” so our reply reaches you.
          </p>
        </div>
      ) : (
        <form onSubmit={submit} style={sx('display:grid;gap:16px')}>
          {intro ? <p style={sx('margin:0;font-size:15px;line-height:1.6;color:#5A625C')}>{intro}</p> : null}

          <div style={sx('display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,180px),1fr));gap:14px')}>
            <label style={sx('display:grid;gap:7px')}>
              <span style={LABEL}>Name</span>
              <input type="text" name="name" required autoComplete="name" value={form.name} onChange={set('name')} placeholder={mac ? 'Alex Boudreaux' : 'Dana Reyes'} style={FIELD} />
            </label>
            <label style={sx('display:grid;gap:7px')}>
              <span style={LABEL}>Work email</span>
              <input type="email" name="email" required autoComplete="email" value={form.email} onChange={set('email')} placeholder={mac ? 'alex@contractor.com' : 'dana@healthsystem.org'} style={FIELD} />
            </label>
            <label style={sx('display:grid;gap:7px')}>
              <span style={LABEL}>Phone</span>
              <input type="tel" name="phone" autoComplete="tel" value={form.phone} onChange={set('phone')} placeholder="(555) 019-2284" style={FIELD} />
            </label>
            <label style={sx('display:grid;gap:7px')}>
              <span style={LABEL}>{mac ? 'MAC / organization' : 'Organization'}</span>
              <input type="text" name="organization" autoComplete="organization" value={form.organization} onChange={set('organization')} placeholder={mac ? 'Novitas Solutions, Inc.' : 'Northside Health'} style={FIELD} />
            </label>
            {mac ? (
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
            ) : null}
          </div>

          <div style={sx('display:grid;gap:9px')}>
            <span style={LABEL}>{mac ? 'Jurisdictions you review for' : 'Modules you’re interested in'}</span>
            <div style={sx('display:flex;flex-wrap:wrap;gap:8px')}>
              {mac
                ? JURISDICTIONS.map((j) => {
                    const on = jurisdictions.includes(j);
                    return (
                      <button
                        key={j}
                        type="button"
                        onClick={() => toggle(setJurisdictions, j)}
                        aria-pressed={on}
                        style={sx(
                          "cursor:pointer;font:500 12.5px/1 'IBM Plex Mono',monospace;letter-spacing:.04em;padding:10px 13px;border-radius:8px;transition:background .16s ease,border-color .16s ease;" +
                            (on ? PILL_ON : PILL_OFF)
                        )}
                      >
                        {j}
                      </button>
                    );
                  })
                : MODULES.map((m) => {
                    const on = interest.includes(m.k);
                    return (
                      <button
                        key={m.k}
                        type="button"
                        onClick={() => toggle(setInterest, m.k)}
                        aria-pressed={on}
                        style={sx(
                          'cursor:pointer;font-family:inherit;font-size:13px;font-weight:500;padding:9px 13px;border-radius:8px;transition:background .16s ease,border-color .16s ease;' +
                            (on ? PILL_ON : PILL_OFF)
                        )}
                      >
                        {m.name}
                      </button>
                    );
                  })}
            </div>
          </div>

          <label style={sx('display:grid;gap:7px')}>
            <span style={LABEL}>{mac ? 'What would you like to see?' : 'What are you trying to fix?'}</span>
            <textarea
              rows={3}
              name="message"
              value={form.message}
              onChange={set('message')}
              placeholder={
                mac
                  ? 'Documentation review for hospital OPD categories; how overrides and the provider letter are audited.'
                  : 'Pre-auth backlog across three service lines; denials rework is eating two FTEs.'
              }
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
              {submitting ? 'Sending…' : submitLabel}
            </button>
            <span style={sx('font-size:13px;color:#616961')}>{countLabel}</span>
          </div>
        </form>
      )}
    </div>
  );
}
