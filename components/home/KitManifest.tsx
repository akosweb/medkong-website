import { Fragment } from 'react';
import { Label, Tag, Window } from '@/components/macs/mock';
import { sx } from '@/lib/css';
import { CHANGELOG, ENVIRONMENT, KIT, MANIFEST, MANIFEST_KPIS } from '@/lib/home-data';

const TH =
  "display:grid;grid-template-columns:minmax(92px,110px) minmax(0,1fr) minmax(64px,78px);gap:10px;padding:9px 16px;font:500 9.5px/1 'IBM Plex Mono',monospace;letter-spacing:.1em;text-transform:uppercase;color:#6B736C;border-bottom:1px solid #EEF1ED";
const TR =
  'display:grid;grid-template-columns:minmax(92px,110px) minmax(0,1fr) minmax(64px,78px);gap:10px;padding:9px 16px;align-items:center;font-size:12.5px;border-bottom:1px solid #F1F3F0';

/**
 * The hero mock: a kit manifest for one deployment. The sidebar lists the
 * eight modules with a version and state; the main pane opens one module and
 * shows what it ships (ontology types, actions, functions, automations,
 * applications) against what the tenant owns (configuration), the change
 * log, and the environment it runs in. Built at 1240px and scaled.
 */
export function KitManifest({ clock }: { clock: string }) {
  return (
    <Window tenant="Northside Health · Platform team" clock={clock}>
      <div style={sx('display:flex;align-items:stretch')}>
        {/* ------------------------------------------------ sidebar */}
        <div
          style={sx(
            'flex:0 0 268px;background:#F7F9F7;border-right:1px solid #E6EAE5;padding:16px 12px;display:flex;flex-direction:column;gap:3px'
          )}
        >
          <span style={sx('display:flex;align-items:center;justify-content:space-between;padding:0 9px 10px')}>
            <Label>Kit · 8 modules</Label>
            <Label color="#0A5A4B">5 deployed</Label>
          </span>
          {KIT.map((m, i) => (
            <Fragment key={i}>
              <span
                style={sx(
                  'display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 9px;border-radius:7px;font-size:13px;' +
                    (m.active
                      ? 'background:#E3F0EB;color:#0A5A4B;font-weight:500'
                      : m.deployed
                        ? 'color:#0E1512'
                        : 'color:#6B736C')
                )}
              >
                <span style={sx('display:inline-flex;align-items:center;gap:8px;min-width:0')}>
                  <span
                    style={sx(
                      `width:7px;height:7px;border-radius:50%;flex:none;background:${m.deployed ? '#12866F' : '#D3D9D3'}`
                    )}
                  ></span>
                  <span style={sx('white-space:nowrap;overflow:hidden;text-overflow:ellipsis')}>{m.name}</span>
                </span>
                <span style={sx("font:400 11px/1 'IBM Plex Mono',monospace;opacity:.8")}>{m.version}</span>
              </span>
            </Fragment>
          ))}
          <span
            style={sx(
              'margin-top:auto;padding:14px 9px 4px;border-top:1px solid #E6EAE5;display:flex;align-items:center;gap:10px'
            )}
          >
            <span
              style={sx(
                "width:30px;height:30px;flex:none;border-radius:50%;background:#E3F0EB;color:#0A5A4B;display:grid;place-items:center;font:600 10.5px/1 'IBM Plex Mono',monospace"
              )}
            >
              AB
            </span>
            <span style={sx('display:flex;flex-direction:column;gap:2px;min-width:0')}>
              <span style={sx('font-weight:600;font-size:12.5px;color:#0E1512')}>A. Bello</span>
              <span style={sx("font:400 10.5px/1.3 'IBM Plex Mono',monospace;color:#616961")}>Platform lead</span>
            </span>
          </span>
        </div>

        {/* --------------------------------------------------- main */}
        <div style={sx('flex:1 1 auto;min-width:0;padding:22px 24px 26px')}>
          <div style={sx('display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap')}>
            <span style={sx('display:flex;align-items:center;gap:12px;flex-wrap:wrap')}>
              <h2 style={sx('font-weight:600;font-size:22px;letter-spacing:-0.02em;margin:0')}>Prior Authorization</h2>
              <span
                style={sx(
                  "font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.05em;padding:6px 9px;border-radius:5px;border:1px solid #DDE2DC;color:#3A443E"
                )}
              >
                v2.1
              </span>
              <span
                style={sx(
                  "font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.05em;padding:6px 9px;border-radius:5px;border:1px solid #DDE2DC;color:#3A443E"
                )}
              >
                northside-prod
              </span>
            </span>
            <span style={sx('display:flex;align-items:center;gap:10px')}>
              <Tag kind="ok">DEPLOYED</Tag>
              <span
                style={sx(
                  'display:inline-grid;place-items:center;height:32px;padding:0 14px;border-radius:8px;border:1px solid #CFD6CF;color:#0E1512;font-weight:500;font-size:13px;white-space:nowrap;background:#fff'
                )}
              >
                Change log
              </span>
              <span
                style={sx(
                  'display:inline-grid;place-items:center;height:32px;padding:0 14px;border-radius:8px;color:#fff;font-weight:600;font-size:13px;white-space:nowrap;background:#0A5A4B'
                )}
              >
                Deploy v2.2
              </span>
            </span>
          </div>

          {/* KPI tiles */}
          <div style={sx('display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-top:18px')}>
            {MANIFEST_KPIS.map((k, i) => (
              <Fragment key={i}>
                <div style={sx('border:1px solid #E6EAE5;border-radius:10px;padding:13px 15px')}>
                  <p style={sx("margin:0;font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:#616961")}>
                    {k.label}
                  </p>
                  <p style={sx('margin:9px 0 0;font-weight:600;font-size:26px;letter-spacing:-0.02em')}>{k.value}</p>
                </div>
              </Fragment>
            ))}
          </div>

          <div style={sx('display:grid;grid-template-columns:minmax(0,1.55fr) minmax(0,1fr);gap:16px;margin-top:16px;align-items:start')}>
            {/* manifest table */}
            <div style={sx('border:1px solid #E6EAE5;border-radius:10px;overflow:hidden')}>
              <div
                style={sx(
                  'display:flex;align-items:center;justify-content:space-between;gap:12px;padding:11px 16px;background:#F7F9F7;border-bottom:1px solid #E6EAE5'
                )}
              >
                <span style={sx('font-weight:600;font-size:13.5px')}>What this module ships</span>
                <span style={sx("font:400 11.5px/1 'IBM Plex Mono',monospace;color:#616961")}>
                  {MANIFEST.length} resources · 3 yours
                </span>
              </div>
              <div style={sx(TH)}>
                <span>Kind</span>
                <span>Resource</span>
                <span>Source</span>
              </div>
              {MANIFEST.map((r, i) => (
                <Fragment key={i}>
                  <div className="mkrow" style={sx(TR + (i === MANIFEST.length - 1 ? ';border-bottom:0' : ''))}>
                    <span style={sx("font:500 10.5px/1.3 'IBM Plex Mono',monospace;letter-spacing:.04em;color:#616961")}>
                      {r.kind}
                    </span>
                    <span style={sx('white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#0E1512')}>{r.name}</span>
                    <Tag kind={r.k}>{r.src}</Tag>
                  </div>
                </Fragment>
              ))}
            </div>

            {/* change log + environment */}
            <div style={sx('display:grid;gap:16px')}>
              <div style={sx('border:1px solid #E6EAE5;border-radius:10px;overflow:hidden')}>
                <div
                  style={sx(
                    'display:flex;align-items:center;justify-content:space-between;padding:11px 14px;background:#F7F9F7;border-bottom:1px solid #E6EAE5'
                  )}
                >
                  <span style={sx('font-weight:600;font-size:13.5px')}>Change log</span>
                  <span
                    style={sx('width:6px;height:6px;border-radius:50%;background:#12866F;animation:mkpulse 1.8s ease-in-out infinite')}
                  ></span>
                </div>
                {CHANGELOG.map((c, i) => (
                  <Fragment key={i}>
                    <div
                      style={sx(
                        'display:grid;grid-template-columns:52px minmax(0,1fr);gap:10px;padding:9px 14px;align-items:baseline;font-size:12px;line-height:1.45;border-bottom:1px solid #F1F3F0'
                      )}
                    >
                      <span
                        style={sx(
                          `font:600 10px/1.4 'IBM Plex Mono',monospace;letter-spacing:.05em;color:${c.ver === 'config' ? '#5A625C' : '#0A5A4B'}`
                        )}
                      >
                        {c.ver}
                      </span>
                      <span style={sx('color:#3A443E')}>
                        {c.note}
                        <span style={sx("display:block;font:400 10.5px/1.5 'IBM Plex Mono',monospace;color:#6B736C;margin-top:2px")}>
                          {c.date} · {c.by}
                        </span>
                      </span>
                    </div>
                  </Fragment>
                ))}
              </div>
              <div style={sx('border:1px solid #E6EAE5;border-radius:10px;padding:14px 14px 6px')}>
                {ENVIRONMENT.map((e, i) => (
                  <Fragment key={i}>
                    <div
                      style={sx(
                        'display:grid;grid-template-columns:96px minmax(0,1fr);gap:10px;padding:7px 0;align-items:baseline;font-size:12px;line-height:1.45' +
                          (i > 0 ? ';border-top:1px solid #F1F3F0' : '')
                      )}
                    >
                      <Label>{e.k}</Label>
                      <span style={sx("font:400 11.5px/1.45 'IBM Plex Mono',monospace;color:#0E1512")}>{e.v}</span>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
}
