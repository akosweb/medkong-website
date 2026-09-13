import type { ReactNode } from 'react';
import { MedkongMark } from '@/components/shared/MedkongMark';
import { sx } from '@/lib/css';
import { TAG, type TagKind } from '@/lib/landing-data';

/**
 * Small pieces the MAC mock panels share. Everything is a non-interactive
 * span — the mocks are pictures of the workbench, not the workbench.
 */

/** 10px mono data label. */
export function Label({ children, color = '#616961' }: { children: ReactNode; color?: string }) {
  return (
    <span
      style={sx(
        `font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:${color}`
      )}
    >
      {children}
    </span>
  );
}

/** Status tag — teal ok, rust risk, grey neutral. */
export function Tag({ kind, children }: { kind: TagKind; children: ReactNode }) {
  return <span style={sx(TAG[kind])}>{children}</span>;
}

/** Outlined mono chip for identifiers (case id, UTN state, channel). */
export function Chip({ children }: { children: ReactNode }) {
  return (
    <span
      style={sx(
        "font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.05em;padding:6px 9px;border-radius:5px;border:1px solid #DDE2DC;color:#3A443E;white-space:nowrap"
      )}
    >
      {children}
    </span>
  );
}

/** A lock glyph for gated steps. */
export function Lock() {
  return (
    <svg viewBox="0 0 12 12" width="11" height="11" aria-hidden="true" style={sx('flex:none')}>
      <rect x="2" y="5" width="8" height="6" rx="1.2" fill="none" stroke="#6B736C" strokeWidth="1.1" />
      <path d="M4 5V3.6a2 2 0 0 1 4 0V5" fill="none" stroke="#6B736C" strokeWidth="1.1" />
    </svg>
  );
}

/** Solid teal in-panel button (non-interactive). */
export function PanelPrimary({ children, muted = false }: { children: ReactNode; muted?: boolean }) {
  return (
    <span
      style={sx(
        'display:inline-grid;place-items:center;height:36px;padding:0 16px;border-radius:8px;color:#fff;font-weight:600;font-size:13.5px;white-space:nowrap;' +
          (muted ? 'background:#B2D5C9' : 'background:#0A5A4B')
      )}
    >
      {children}
    </span>
  );
}

/** Ghost in-panel button (non-interactive). */
export function PanelGhost({ children }: { children: ReactNode }) {
  return (
    <span
      style={sx(
        'display:inline-grid;place-items:center;height:36px;padding:0 16px;border-radius:8px;border:1px solid #CFD6CF;color:#0E1512;font-weight:500;font-size:13.5px;white-space:nowrap;background:#fff'
      )}
    >
      {children}
    </span>
  );
}

/**
 * App window chrome: title bar with wordmark, tenant, live dot and clock.
 * Order follows §11 of the design system.
 */
export function Window({
  tenant,
  clock,
  children,
  shadow = '0 18px 48px -22px rgba(14,21,18,.2)',
}: {
  tenant: string;
  clock: string;
  children: ReactNode;
  shadow?: string;
}) {
  return (
    <div style={sx(`border:1px solid #DDE2DC;border-radius:14px;box-shadow:${shadow};overflow:hidden;background:#fff`)}>
      <div
        style={sx(
          'display:flex;align-items:center;gap:14px;padding:12px 16px;background:#F7F9F7;border-bottom:1px solid #E6EAE5'
        )}
      >
        <span style={sx('display:inline-flex;align-items:center;gap:9px;font-weight:600;font-size:13.5px')}>
          <MedkongMark height={20} />
          <span>
            <span style={sx('color:#0A5A4B')}>MED</span>
            <span style={sx('color:#0E1512')}>KONG</span>
          </span>
        </span>
        <span style={sx('width:1px;height:15px;background:#D6DBD6')}></span>
        <span style={sx('font-size:13px;color:#6B756E')}>{tenant}</span>
        <span style={sx('margin-left:auto;display:flex;align-items:center;gap:16px')}>
          <span
            style={sx(
              "display:inline-flex;align-items:center;gap:7px;font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.1em;text-transform:uppercase;color:#0A5A4B"
            )}
          >
            <span
              style={sx(
                'width:6px;height:6px;border-radius:50%;background:#12866F;animation:mkpulse 1.8s ease-in-out infinite'
              )}
            ></span>
            Live
          </span>
          <span style={sx("font:400 12px/1 'IBM Plex Mono',monospace;color:#6B756E")}>{clock}</span>
          <span
            style={sx(
              "width:24px;height:24px;border-radius:50%;background:#E3F0EB;color:#0A5A4B;display:grid;place-items:center;font:600 9.5px/1 'IBM Plex Mono',monospace"
            )}
          >
            AB
          </span>
        </span>
      </div>
      {children}
    </div>
  );
}

/** Section head shared by the page's bands — eyebrow, headline, support line. */
export function SectionHead({
  eyebrow,
  headline,
  support,
  align = 'end',
}: {
  eyebrow: string;
  headline: string;
  support?: string;
  align?: 'end' | 'start';
}) {
  return (
    <>
      <span
        style={sx(
          "font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0A5A4B"
        )}
      >
        {eyebrow}
      </span>
      {support ? (
        <div
          className="mkcols"
          style={sx(
            `display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);gap:24px clamp(32px,6vw,90px);align-items:${align};margin-top:18px`
          )}
        >
          <h2
            style={sx(
              'font-weight:600;font-size:clamp(32px,3.7vw,52px);line-height:1.06;letter-spacing:-0.032em;margin:0'
            )}
          >
            {headline}
          </h2>
          <p style={sx('font-size:17px;line-height:1.62;margin:0;color:#3A443E')}>{support}</p>
        </div>
      ) : (
        <h2
          style={sx(
            'font-weight:600;font-size:clamp(32px,3.7vw,52px);line-height:1.06;letter-spacing:-0.032em;margin:18px 0 0;max-width:26ch'
          )}
        >
          {headline}
        </h2>
      )}
    </>
  );
}
