import { useDemo } from '@/components/shared/demo';
import { sx } from '@/lib/css';
import { HERO } from '@/lib/home-data';
import { AKOS_MARK, PALANTIR_WORDMARK } from '@/lib/assets';
import { KitManifest } from './KitManifest';
import { useHome } from './state';

export function Hero() {
  const { clock } = useHome();
  const { openDemo } = useDemo();

  return (
    <section style={sx('background:#fff;padding:80px 0 24px;overflow:hidden')}>
      <div style={sx('max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)')}>
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
            'display:grid;grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);gap:40px clamp(32px,5vw,90px);align-items:start;margin-top:38px'
          )}
        >
          <h1 style={sx('font-weight:600;font-size:clamp(42px,5.6vw,82px);line-height:1.02;letter-spacing:-0.038em;margin:0')}>
            {HERO.headline}
          </h1>
          <div>
            <p style={sx('font-size:18px;line-height:1.62;margin:0;color:#3A443E')}>{HERO.lede}</p>
            <div style={sx('display:flex;gap:12px;flex-wrap:wrap;margin-top:26px')}>
              <button
                type="button"
                className="mkcta"
                onClick={openDemo}
                style={sx(
                  'display:inline-flex;align-items:center;height:48px;padding:0 24px;border:0;border-radius:9px;background:#0A5A4B;color:#fff;font-weight:600;font-size:15.5px;cursor:pointer;transition:background .18s ease;font-family:inherit'
                )}
              >
                Request a demo
              </button>
              <a
                className="mkghost"
                href="#modules"
                style={sx(
                  'display:inline-flex;align-items:center;min-height:48px;padding:12px 22px;border-radius:9px;border:1px solid #CFD6CF;color:#0E1512;font-weight:500;font-size:15.5px;white-space:nowrap;transition:background .18s ease,border-color .18s ease'
                )}
              >
                Explore the modules
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------ kit manifest */}
      <div style={sx('max-width:1500px;margin:56px auto 0;padding:0 clamp(24px,4vw,56px)')}>
        <div className="mkscale" data-scale="1240">
          <KitManifest clock={clock} />
        </div>
        <p style={sx("font:400 11.5px/1 'IBM Plex Mono',monospace;color:#6B736C;margin:14px 0 0")}>{HERO.caption}</p>
      </div>
    </section>
  );
}
