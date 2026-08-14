import type { CSSProperties } from 'react';

/**
 * `sx` — inline CSS text to a React style object.
 *
 * WHY THIS EXISTS: the MEDKONG pages are a direct port of the Claude Design
 * source files (`MedKong Landing v3.dc.html`, `MEDKONG Design Guide.dc.html`),
 * which style every element with an inline `style="..."` string. Keeping those
 * strings verbatim means a design change can be diffed against the source file
 * one declaration at a time, instead of being laundered through hand-written
 * class names. Anything that can't live in an inline style — keyframes, hover
 * states, media queries — is in `app/globals.css`.
 *
 * Parsing is memoized on the exact CSS string, and the design's strings are
 * static literals, so each unique declaration is parsed once for the lifetime
 * of the page rather than on every render.
 */
const cache = new Map<string, CSSProperties>();

export function sx(css: string): CSSProperties {
  const hit = cache.get(css);
  if (hit) return hit;

  const style: Record<string, string> = {};
  for (const decl of css.split(';')) {
    const at = decl.indexOf(':');
    if (at === -1) continue;

    const prop = decl.slice(0, at).trim();
    // Split on the FIRST colon only — values legitimately contain them
    // (`background:url(data:...)`, `font:500 12px/1 'IBM Plex Mono'`).
    const value = decl.slice(at + 1).trim();
    if (!prop || !value) continue;

    style[toReactProp(prop)] = value;
  }

  const frozen = style as CSSProperties;
  cache.set(css, frozen);
  return frozen;
}

function toReactProp(prop: string): string {
  // CSS custom properties are passed through untouched — React sets them as-is.
  if (prop.startsWith('--')) return prop;

  // `-webkit-font-smoothing` -> `WebkitFontSmoothing` (capital first segment),
  // `font-size` -> `fontSize`.
  const vendor = prop.startsWith('-');
  const camel = (vendor ? prop.slice(1) : prop).replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
  return vendor ? camel.charAt(0).toUpperCase() + camel.slice(1) : camel;
}
