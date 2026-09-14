/**
 * Partner marks used across the site. Components import these rather than
 * spelling the paths, so the design-system package (packages/medkong-ds) can
 * alias this module to inline data URIs — outside the site nothing serves
 * /assets/, and a broken partner mark is the wrong thing to ship.
 */
export const AKOS_MARK = '/assets/akos-mark.png';
export const PALANTIR_WORDMARK = '/assets/palantir-wordmark.png';
