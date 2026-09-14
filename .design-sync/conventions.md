# MEDKONG conventions

MEDKONG is a marketing site for a healthcare revenue-cycle product built by AKOS on Palantir Foundry. Every component here is the site's own shipped code. No provider or wrapper is needed: components style themselves with inline styles, and `styles.css` supplies fonts, tokens, resets, hover states and keyframes. Link `styles.css` once; without it text falls back to system fonts and `.mkcta`/`.mkghost`/`.mkcard` hover states, the `mkpulse` live-dot animation and the `.mkscale` mock scaling do nothing.

## Styling idiom

Components carry their own styling. Your layout glue uses **inline styles** (the site uses no utility classes) and the **`--mk-*` custom properties** from `styles.css`:

| Need | Tokens |
|---|---|
| Teal accent | `--mk-primary` #0A5A4B · `--mk-primary-hover` #0E7A66 · `--mk-signal` #12866F (charts, dots) · `--mk-teal-wash` #E3F0EB · `--mk-teal-tint` #F1F8F5 |
| Risk — **only** for denials, exceptions, errors, amounts at risk | `--mk-risk` #B23A1B · `--mk-risk-text` #96301A · `--mk-rust-wash` #FBE9E3 |
| Text | `--mk-ink` #0E1512 headings · `--mk-body` #3A443E · `--mk-secondary` #5A625C card copy · `--mk-muted` #616961 mono labels · `--mk-muted-min` #6B736C lightest allowed |
| Grounds | `--mk-chrome` #F7F9F7 app chrome · `--mk-band-gray` #F4F6F3 · `--mk-band-mint` #EEF2EF · `--mk-panel-tint` #FAFBFA |
| Borders | `--mk-border-card` #DDE2DC · `--mk-border-band` #E6EAE5 · `--mk-border-panel` #EEF1ED · `--mk-border-row` #F1F3F0 |
| Type | `--mk-font-voice` Archivo (everything a person wrote) · `--mk-font-machine` IBM Plex Mono (everything a system emitted: labels, IDs, timestamps, codes, tags) |
| Layout | `--mk-content-width` 1400px · `--mk-gutter` clamp(24px,4vw,56px) · `--mk-section-padding` 110px · radii `--mk-radius-control` 8px, `--mk-radius-panel` 10px, `--mk-radius-card` 14px |

Rules that are not negotiable: MEDKONG is always uppercase, MED teal, KONG ink — use `Wordmark`, never type it. Rust is a state, never decoration. Never two adjacent `Section`s on the same ground; at most one `teal` and one `ink` band per page. Mono labels are uppercase with `.11–.14em` tracking — use `Label` and `Eyebrow`. Headlines are declarative sentences with a full stop, under 10 words.

## Building a page

Pages are bands: `Section` (ground: white → gray → white → mint → teal → tint → ink) each opened by `SectionHead`. Above the fold: `SiteHeader`, a hero, then `TrustBand` (both partner marks are required on every page). End with `SiteFooter`. Every CTA is a `Button`; the form is `LeadForm`.

Product mockups are the page's main image. Build them inside `Window` at a fixed width and wrap in `<div className="mkscale" data-scale="1240">` so they scale, never reflow. Inside a mock use `Label`, `Tag` (ok/risk/neutral), `Chip`, `KpiTile`, `Sparkline`, `Donut`, `ProgressTrack`, `PanelButton` (a non-interactive span — mock buttons are part of the picture). `CaseWorkbench` is a complete example. Name the workbench in a caption and note that data is sample.

```jsx
import { Section, SectionHead, CompactCard, Button } from '@medkong/ds';

<Section ground="gray" id="workflows">
  <SectionHead
    eyebrow="Workflow coverage"
    headline="Built for the work that slows revenue down."
    support="Eight workflows, deployable independently."
  />
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 16, marginTop: 44 }}>
    <CompactCard kicker="Module 01" title="Prior authorization" body="Requirement check, packet assembly, submission and the SLA clock." metricLabel="Manual touches" metric="−38%" />
    <CompactCard kicker="Module 06" title="Denials & appeals" body="Root cause from the remit, routed to correction, appeal or write-off." metricLabel="Received → filed" metric="2.4d faster" />
  </div>
  <div style={{ marginTop: 32 }}><Button size="lg">Request a demo</Button></div>
</Section>
```

Where the truth lives: `styles.css` (tokens + global CSS), `guidelines/design-system.md` (the full design system: colour, type, band rhythm, cards, mock UI kit, voice), and each `components/<group>/<Name>/<Name>.prompt.md`.
