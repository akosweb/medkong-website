# design-sync notes

Repo-specific gotchas for syncing MEDKONG to claude.ai/design. Read before a re-sync.

## Shape

- This repo is a Next.js marketing site, not a component library. The synced package is
  `packages/medkong-ds` (`@medkong/ds`), assembled for the sync: thin `src/` wrappers that
  re-export the site's shared components (`components/shared`, `components/macs/mock.tsx`,
  `components/macs/CaseWorkbench.tsx`, `components/landing/SiteFooter.tsx`, `LeadForm`) plus
  props-driven forms of patterns the site sets inline (Button, Tag, Chip, Card*, Field, …).
  Groups come from the `src/<group>/` folder names.
- Build: `npm run build --prefix packages/medkong-ds` = tsup (ESM + `.d.ts`, aliasing
  `@/*` to the repo root via the package tsconfig) then `scripts/build-css.mjs`, which
  flattens `fonts.css` + `tokens.css` + `app/globals.css` into `styles.css`. The converter
  copies `cssEntry` verbatim — it does not resolve `@import`, hence the flattening.
- `SiteHeader` in the package is a copy of `components/shared/SiteHeader.tsx` with
  `usePathname()` replaced by a `currentPath` prop (no `next/navigation` in the bundle).
  Keep the two in step by hand when the site header changes.
- Partner marks: the site references `/assets/akos-mark.png` and
  `/assets/palantir-wordmark.png` through `lib/assets.ts`; tsup aliases that module to
  `packages/medkong-ds/src/assets.ts` (data URIs) so the marks travel with the bundle.
  Regenerate `src/assets.ts` if the PNGs change.
- Fonts: Archivo (variable, 400–700) and IBM Plex Mono (400/500/600), latin subset, fetched
  once from Google Fonts into `packages/medkong-ds/fonts/`. The `curl` download needed a
  browser user agent; python `urllib` failed on the local cert chain.
- Tokens are declared inside `styles.css` (no separate token files), so `tokens/` in the
  bundle is empty by design.

- Logo files: `src/brand/brand-files.ts` inlines the six `/public/brand/*.svg` as data URIs
  for the `Logo` component; `packages/medkong-ds/brand-assets.md` (a guideline) carries the
  SVG sources and the public download URLs. Regenerate both if the brand files change.

## Known render warns

- `[RENDER_THIN] Sparkline` — a text-free SVG; the sheet shows the three lines correctly.

## Card overrides

- Card viewports (`cfg.overrides`) are set to 1280px wide for the responsive components
  (SiteHeader, SiteFooter, TrustBand, Section, SectionHead, StatPanel) because `globals.css`
  collapses `.mknav`/`.mkcols` and hides the main nav below 1020px — the default capture
  width showed the mobile layout. CaseWorkbench is `single` at 1300×1320.

## Re-sync risks

- `packages/medkong-ds/src/chrome/SiteHeader.tsx` is a manual copy of the site header —
  it drifts silently if the site's header changes.
- `src/assets.ts` inlines the partner PNGs; it goes stale if the PNGs are replaced.
- Fonts were fetched from Google Fonts at sync time (Sept 2026); not re-fetched by the build.
- Previews use realistic sample copy from the site's data files by value, not by import —
  they don't break when copy changes, but they can drift from it.
- `lib/landing-data.ts` `TAG` styles are imported directly by the package `Tag`; renaming
  them breaks the build.
- Playwright: chromium-headless-shell v1243 under `~/Library/Caches/ms-playwright`,
  installed by `.ds-sync/` deps (gitignored — reinstall on a fresh clone).
