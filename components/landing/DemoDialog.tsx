'use client';

import { useEffect } from 'react';
import { LeadForm } from '@/components/shared/LeadForm';
import { sx } from '@/lib/css';
import { stopPropagation, useDemo } from '@/components/shared/demo';
import { AKOS_MARK, PALANTIR_WORDMARK } from '@/lib/assets';

export function DemoDialog() {
  const { demoOpen, closeDemo } = useDemo();

  // On narrow screens the dialog is a full-screen sheet, so the page behind it
  // is locked. The form itself unmounts with the dialog, so reopening after a
  // submit shows a fresh one.
  useEffect(() => {
    if (!demoOpen) return;
    document.body.classList.add('mk-dialog-open');
    return () => document.body.classList.remove('mk-dialog-open');
  }, [demoOpen]);

  if (!demoOpen) return null;

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
        <div className="mk-dialog-body" style={sx('flex:1 1 400px;min-width:0;padding:clamp(24px,3vw,38px)')}>
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
                45 minutes: the workbenches running, the Foundry ontology behind them, and a scoping of
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

          <div style={sx('margin-top:26px')}>
            <LeadForm variant="modules" source="medkong-website" submitLabel="Request a demo" successNoun="demo" />
          </div>
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
              <img src={AKOS_MARK} alt="AKOS" style={sx('width:32px;height:32px;border-radius:5px')} />
              <span style={sx('color:#fff;font-weight:600;font-size:14.5px')}>Built by AKOS</span>
            </span>
            <span style={sx('display:flex;align-items:center;gap:12px')}>
              <span style={sx('background:#fff;border-radius:5px;padding:5px 8px;display:inline-flex')}>
                <img src={PALANTIR_WORDMARK} alt="Palantir" style={sx('height:13px;width:auto')} />
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
