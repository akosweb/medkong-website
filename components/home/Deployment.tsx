import { Fragment } from 'react';
import { Label, SectionHead } from '@/components/macs/mock';
import { useDemo } from '@/components/shared/demo';
import { sx } from '@/lib/css';
import { DEPLOYMENT, DEPLOYMENT_CTA, DEPLOYMENT_HEAD } from '@/lib/home-data';

/**
 * The deployment ledger: a 1px-gap stat panel (§10) of what runs where and who
 * owns what. Six cells plus a highlighted CTA cell that takes the last two
 * slots of the four-column row (`.mk-deploy`), so the panel is always full.
 */
export function Deployment() {
  const { openDemo } = useDemo();

  return (
    <section id="deployment" style={sx('background:#fff;padding:110px 0')}>
      <div style={sx('max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)')}>
        <SectionHead eyebrow={DEPLOYMENT_HEAD.eyebrow} headline={DEPLOYMENT_HEAD.headline} support={DEPLOYMENT_HEAD.support} />
        <div
          className="mk-four mk-four-stack"
          style={sx('display:grid;gap:1px;margin-top:44px;background:#E6EAE5;border:1px solid #E6EAE5;border-radius:14px;overflow:hidden')}
        >
          {DEPLOYMENT.map((d, i) => (
            <Fragment key={i}>
              <div style={sx('background:#fff;padding:26px 26px 28px')}>
                <Label color="#0A5A4B">{d.label}</Label>
                <h4 style={sx('font-weight:600;font-size:22px;line-height:1.2;letter-spacing:-0.022em;margin:12px 0 0')}>{d.value}</h4>
                <p style={sx('font-size:14.5px;line-height:1.58;margin:10px 0 0;color:#5A625C')}>{d.body}</p>
              </div>
            </Fragment>
          ))}
          <div className="mk-deploy-cta" style={sx('background:#F1F8F5;padding:26px 26px 28px;display:flex;flex-direction:column')}>
            <Label color="#0A5A4B">{DEPLOYMENT_CTA.label}</Label>
            <h4 style={sx('font-weight:600;font-size:22px;line-height:1.2;letter-spacing:-0.022em;margin:12px 0 0')}>{DEPLOYMENT_CTA.title}</h4>
            <p style={sx('font-size:14.5px;line-height:1.58;margin:10px 0 0;color:#3A443E;max-width:52ch')}>{DEPLOYMENT_CTA.body}</p>
            <div style={sx('display:flex;gap:10px;flex-wrap:wrap;margin-top:auto;padding-top:22px')}>
              <button
                type="button"
                className="mkcta"
                onClick={openDemo}
                style={sx(
                  'display:inline-flex;align-items:center;height:48px;padding:0 24px;border:0;border-radius:9px;background:#0A5A4B;color:#fff;font-weight:600;font-size:15.5px;cursor:pointer;transition:background .18s ease;font-family:inherit'
                )}
              >
                {DEPLOYMENT_CTA.primary}
              </button>
              <a
                className="mkghost"
                href="/contact"
                style={sx(
                  'display:inline-flex;align-items:center;min-height:48px;padding:12px 22px;border-radius:9px;border:1px solid #B9CCC3;background:#fff;color:#0E1512;font-weight:500;font-size:15.5px;white-space:nowrap;transition:background .18s ease,border-color .18s ease'
                )}
              >
                {DEPLOYMENT_CTA.secondary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
