'use client';

import { useEffect, useRef, useState } from 'react';
import { MedkongMark } from '@/components/shared/MedkongMark';
import { sx } from '@/lib/css';
import { useLanding } from './state';

export const NAV_LINKS = [
  { href: '#platform', label: 'Platform' },
  { href: '#workflows', label: 'Workflows' },
  { href: '#foundry', label: 'Foundry' },
  { href: '#outcomes', label: 'Outcomes' },
  { href: '#architecture', label: 'Architecture' },
];

function Wordmark({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  return (
    <span
      style={sx(
        'display:inline-flex;align-items:center;gap:11px;font-weight:600;font-size:20px;letter-spacing:-0.02em'
      )}
    >
      <MedkongMark height={30} tone={tone} />
      <span style={sx('letter-spacing:0.01em')}>
        <span style={sx(`color:${tone === 'dark' ? '#5FBFA6' : '#0A5A4B'}`)}>MED</span>
        <span style={sx(`color:${tone === 'dark' ? '#fff' : '#0E1512'}`)}>KONG</span>
      </span>
    </span>
  );
}

export function Header() {
  const { openDemo } = useLanding();
  const [menuOpen, setMenuOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Lock the page behind the menu, close on Escape, and hand focus over and back.
  useEffect(() => {
    if (!menuOpen) return;

    // The burger outlives the menu, so it's safe to hold onto for focus return.
    const burger = burgerRef.current;

    document.body.classList.add('mk-menu-open');
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);

    return () => {
      document.body.classList.remove('mk-menu-open');
      document.removeEventListener('keydown', onKey);
      // preventScroll: returning focus must not yank the page back up when the
      // menu closed because a link was followed.
      burger?.focus({ preventScroll: true });
    };
  }, [menuOpen]);

  // The menu collapses back into the desktop bar above 1020px.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1021px)');
    const onChange = () => mq.matches && setMenuOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  /**
   * The menu is `position:fixed`, so the target's offset is already correct —
   * but the scroll lock has to come off first, and the effect that removes it
   * doesn't run until after paint. Drop it here; the cleanup is idempotent.
   */
  const goToSection = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setMenuOpen(false);
    document.body.classList.remove('mk-menu-open');

    document.getElementById(href.slice(1))?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      <div
        id="mk-header"
        style={sx(
          'position:sticky;top:0;z-index:40;background:rgba(255,255,255,.92);backdrop-filter:blur(10px);border-bottom:1px solid #E6EAE5'
        )}
      >
        <div
          style={sx(
            'max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px);height:68px;display:flex;align-items:center;gap:34px'
          )}
        >
          <Wordmark />

          <span
            className="mknav"
            style={sx(
              'display:flex;align-items:center;gap:26px;margin-left:12px;font-size:14.5px;color:#3A443E'
            )}
          >
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} style={sx('color:inherit')}>
                {link.label}
              </a>
            ))}
          </span>

          <span style={sx('margin-left:auto;display:flex;align-items:center;gap:12px')}>
            <button
              type="button"
              className="mkcta"
              onClick={openDemo}
              style={sx(
                'display:inline-flex;align-items:center;height:40px;padding:0 20px;border:0;border-radius:8px;background:#0A5A4B;color:#fff;font-weight:600;font-size:14.5px;cursor:pointer;transition:background .18s ease'
              )}
            >
              Request a demo
            </button>

            <button
              ref={burgerRef}
              type="button"
              className="mk-burger"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              style={sx(
                'align-items:center;justify-content:center;width:40px;height:40px;flex:none;border:1px solid #DDE2DC;border-radius:8px;background:#fff;cursor:pointer;padding:0'
              )}
            >
              <span style={sx('display:grid;gap:4px')}>
                {[0, 1, 2].map((i) => (
                  <span key={i} style={sx('display:block;width:16px;height:1.5px;background:#0E1512')} />
                ))}
              </span>
            </button>
          </span>
        </div>
      </div>

      {menuOpen ? (
        <div className="mk-menu" role="dialog" aria-modal="true" aria-label="Menu">
          <div
            style={sx(
              'display:flex;align-items:center;justify-content:space-between;gap:16px;height:68px;flex:none'
            )}
          >
            <Wordmark tone="dark" />
            <button
              ref={closeRef}
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={sx(
                'display:grid;place-items:center;width:40px;height:40px;flex:none;border:1px solid rgba(255,255,255,.22);border-radius:8px;background:transparent;color:#fff;font-size:20px;line-height:1;cursor:pointer'
              )}
            >
              ×
            </button>
          </div>

          <nav style={sx('margin-top:clamp(16px,5vw,40px)')}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mk-menu-link"
                onClick={(e) => goToSection(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              openDemo();
            }}
            style={sx(
              'margin-top:auto;display:inline-flex;align-items:center;justify-content:center;width:100%;height:56px;border:0;border-radius:10px;background:#fff;color:#0E1512;font-weight:600;font-size:16.5px;cursor:pointer'
            )}
          >
            Request a demo
          </button>

          <span
            style={sx(
              "margin-top:18px;font:400 11.5px/1.5 'IBM Plex Mono',monospace;color:#7E877F;text-align:center"
            )}
          >
            Modular AI kit for healthcare RCM operations
          </span>
        </div>
      ) : null}
    </>
  );
}
