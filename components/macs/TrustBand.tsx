import { Fragment } from 'react';
import { sx } from '@/lib/css';
import { TRUST } from '@/lib/macs-data';
import { AKOS_MARK, PALANTIR_WORDMARK } from '@/lib/assets';

export type TrustBandProps = {
  /** One-line infrastructure claim shown between the marks and the chips. */
  claim?: string;
  /** Three outlined mono chips. */
  chips?: string[];
};

/**
 * The 44px grey trust band under a hero: AKOS mark, Palantir wordmark, one
 * infrastructure claim and three outlined chips. Defaults to the MAC page's
 * copy; the homepage passes its own.
 */
export function TrustBand({ claim = TRUST.claim, chips = TRUST.chips }: TrustBandProps) {
  return (
    <section
      style={sx(
        'background:#F4F6F3;border-top:1px solid #E6EAE5;border-bottom:1px solid #E6EAE5;margin-top:56px;padding:44px 0'
      )}
    >
      <div
        style={sx(
          'max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px);display:flex;align-items:center;gap:32px 56px;flex-wrap:wrap'
        )}
      >
        <span style={sx('display:inline-flex;align-items:center;gap:12px')}>
          <img src={AKOS_MARK} alt="AKOS" style={sx('width:36px;height:36px;border-radius:5px')} />
          <span style={sx('font-weight:600;font-size:16px')}>Built by AKOS</span>
        </span>
        <span style={sx('width:1px;height:34px;background:#D6DBD6')}></span>
        <span style={sx('display:inline-flex;align-items:center;gap:12px')}>
          <img src={PALANTIR_WORDMARK} alt="Palantir" style={sx('height:24px;width:auto')} />
          <span style={sx('font-weight:600;font-size:16px')}>Built on Foundry</span>
        </span>
        <span style={sx('flex:1;min-width:260px;font-size:15px;line-height:1.6;color:#3A443E')}>{claim}</span>
        <span style={sx('display:flex;gap:8px;flex-wrap:wrap')}>
          {chips.map((c, i) => (
            <Fragment key={i}>
              <span
                style={sx(
                  "font:500 11.5px/1 'IBM Plex Mono',monospace;padding:8px 11px;border-radius:6px;background:#fff;border:1px solid #E1E5E0;color:#3A443E"
                )}
              >
                {c}
              </span>
            </Fragment>
          ))}
        </span>
      </div>
    </section>
  );
}
