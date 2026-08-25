# MEDKONG design system

Machine-readable companion to the visual guide at [`/design-system`](../app/design-system/page.tsx).
Every token, component and rule used to build MEDKONG pages, with copy-ready
values.

**Build new pages from this file.** Match the band rhythm, reuse the components
as written, and do not introduce colours, fonts or radii that are not on this
page.

> Where this file and the visual guide disagree, this file wins — see
> [Changes since guide v1](#changes-since-guide-v1) at the end.

---

## 1. Logo & wordmark

MEDKONG is **always uppercase**. `MED` is set in primary teal, `KONG` in ink.
The icon mark sits to its left at the wordmark's cap height. Use the full
lockup wherever there is room for it; the icon on its own is reserved for
square, constrained placements — favicons, app icons, social avatars, and the
tenant badge inside product chrome — never as a substitute for the lockup in a
page header or document.

The mark is inline SVG, not an image file:
[`components/shared/MedkongMark.tsx`](../components/shared/MedkongMark.tsx).
It takes a `height` (width follows the 259.07 × 281.11 artwork) and a `tone`:

| `tone` | Linework | Chevron & dot | Use |
| --- | --- | --- | --- |
| `light` (default) | `#1C1B1A` | `#005749` | White and light grounds |
| `dark` | `#FFFFFF` | `#5FBFA6` | Ink `#0E1512` grounds |
| `onTeal` | `#FFFFFF` | `#FFFFFF` | Primary teal — single-colour, never teal-on-teal |

| Context | Treatment |
| --- | --- |
| On white | `MED` `#0A5A4B` · `KONG` `#0E1512`. Nav, app chrome, any light surface. Wordmark min height 26px. |
| On ink | `MED` `#5FBFA6` (clears 4.5:1) · `KONG` `#fff`. |
| On primary teal | Single-colour white. Never teal-on-teal. |

Wordmark is 600 weight, `-0.02em` tracking.

```html
<span style="color:#0A5A4B">MED</span><span style="color:#0E1512">KONG</span>
```

**Do not:** write "MedKong" or "Medkong" in body copy; put rust or any
non-teal on `MED`; add gradients, shadows or outlines; set the wordmark in
IBM Plex Mono.

### Downloadable files

`/public/brand` holds both the lockup and the icon in all three tones, as SVG
and PNG. The design guide links to them under each specimen.

| File stem | Contents |
| --- | --- |
| `medkong-lockup-{on-white,on-ink,on-teal}` | Mark plus wordmark |
| `medkong-icon-{on-white,on-ink,on-teal}` | Mark alone |

Two things to know about them:

- **The wordmark is outlined**, not set as `<text>`. Archivo isn't installed on
  most machines, so a font-referenced SVG would fall back to something else the
  moment it left this repo.
- **PNGs are transparent**, which means the `on-ink` and `on-teal` files look
  blank against a white preview. That is correct — they are white artwork meant
  for dark grounds.

They also carry the artwork's own 5-unit stroke rather than the height-derived
weight the site uses. The site compensates for rendering at 20px; a master asset
should be the true drawing, since whoever downloads it will scale it themselves.

Regenerate with the script in the scratchpad if the artwork ever changes — the
files are committed output, not built at deploy time.

## 2. AKOS & Palantir attribution

"Built by AKOS" and "Built on Palantir Foundry" are a standing pair. They
appear together in the hero trust line, the trust band, the CTA stack card and
the footer.

- **AKOS mark** — always square, small radius (3px at 20px up to 7px at 52px).
  Paired with "Built by AKOS" at 600 weight. Links to `akos.ai` in the footer
  and the Why-AKOS section.
- **Palantir wordmark** — height-constrained, `width:auto`, never stretched.
  Common heights: 30px, 22px, 15px, 13px. On any teal or ink ground it sits in
  a white chip: `background:#fff;border-radius:5px;padding:5px 9px`.
- The Palantir wordmark **never appears inside product chrome** — that space
  belongs to the app's own UI.

**Claim language, verbatim:** "Built by AKOS" · "Built on Palantir Foundry" ·
"Built on Foundry" (short form, after first use).
**Never:** "Palantir partner", "certified", or any endorsement claim.

## 3. Colour

One accent family carries all action, state and emphasis. **Rust is reserved
exclusively for risk, denials, exceptions and errors** — using it decoratively
breaks the signal.

### Primary — teal

| Token | Hex | Use |
| --- | --- | --- |
| Primary | `#0A5A4B` | buttons, links, eyebrows |
| Primary hover | `#0E7A66` | button + link hover |
| Signal | `#12866F` | charts, dots, progress |
| Teal wash | `#E3F0EB` | badges, active nav |
| Teal tint | `#F1F8F5` | CTA band, highlighted cards |
| On-dark teal | `#5FBFA6` | `MED` on the ink footer |

### Risk — rust (state only)

| Token | Hex | Use |
| --- | --- | --- |
| Risk | `#B23A1B` | amounts at risk, charts |
| Risk text | `#96301A` | on rust wash |
| Rust wash | `#FBE9E3` | `REVIEW` / `APPEAL` tags |
| Rust highlight | `#FBE1D8` | flagged text spans |

### Ink, text & surfaces

| Token | Hex | Use | Contrast on white |
| --- | --- | --- | --- |
| Ink | `#0E1512` | headings, footer background | — |
| Body | `#3A443E` | paragraphs | 10.4:1 |
| Secondary | `#5A625C` | card body | 6.6:1 |
| Muted | `#616961` | mono labels | 5.4:1 |
| Muted min | `#6B736C` | lightest legal text | 4.6:1 |
| Chrome | `#F7F9F7` | app title bars, sidebars | — |
| Band gray | `#F4F6F3` | alternating sections | — |
| Band mint | `#EEF2EF` | product explorer band | — |

### Borders

`#DDE2DC` card border · `#E6EAE5` band + chrome divider ·
`#EEF1ED` inner panel divider · `#F1F3F0` table row rule

### Chart ramp

`#12866F` → `#4FA48F` → `#84BFAE` → `#B2D5C9` → `#D6E7DF`

Sequential only. Rust breaks the ramp when a value means risk.

### Contrast floor

All text ≥ 4.5:1 on its ground. `#6B736C` is the lightest permitted grey on
white; anything lighter is decoration (rules, tracks, dashed placeholders) and
never carries meaning. Greys below `#616961` are never used for text.

## 4. Typography

**Archivo for voice. IBM Plex Mono for machine.** Archivo carries everything a
person wrote: headings, body, buttons, card titles. IBM Plex Mono carries
everything a system emitted: labels, IDs, timestamps, counts, codes, status
tags. That split is the whole typographic idea — do not mix it up.

| Family | Weights in use |
| --- | --- |
| Archivo | 400 long-form body & table cells · 500 ghost buttons & sidebar active items · 600 every heading, KPI number, button label · 700 available, currently unused |
| IBM Plex Mono | 400 IDs, timestamps, amounts, ages · 500 eyebrows, column heads, tags, chips · 600 risk levels, confidence scores, SLA clocks |

Mono labels always get `letter-spacing:.10–.14em` and `text-transform:uppercase`.

### Scale

| Role | Size | Weight · line-height · tracking | Colour |
| --- | --- | --- | --- |
| H1 · hero | `clamp(42px,5.6vw,82px)` | 600 · 1.02 · `-0.038em` | ink |
| H2 · section | `clamp(32px,3.7vw,52px)` | 600 · 1.06 · `-0.032em` | ink |
| H3 · card title | 29px (24px in dense cards) | 600 · 1.14 · `-0.026em` | ink |
| H4 · sub-card | 18.5–20px | 600 · 1.25 · `-0.018em` | ink |
| Lede | 17–18px | 400 · 1.62 | `#3A443E` |
| Body / card copy | 14–15.5px | 400 · 1.55–1.6 | `#5A625C` |
| Eyebrow | 11.5px mono | 500 · `.14em` · uppercase | `#0A5A4B` |
| Data label | 9.5–10.5px mono | 500 · `.11em` · uppercase | `#616961` |

## 5. Layout & band rhythm

Every section is full-width with its own background; content is centred in a
1400px container. Backgrounds alternate so the page reads as chapters instead
of one scroll. **Never two adjacent sections on the same ground.**

| Measure | Value |
| --- | --- |
| Content width | `max-width:1400px` |
| Gutter | `clamp(24px,4vw,56px)` |
| Hero mock width | 1500px |
| Section padding | `110px 0` |
| Column gap | `clamp(32px,6vw,100px)` |
| Card grid gap | 16–20px |

**Radii:** 8–9px controls · 10–12px inner panels · 14px cards and app windows ·
16px dialogs.

**Homepage band order:** Hero (white) → Trust band (`#F4F6F3`) → What it is
(white) → Workflows (`#F4F6F3`) → Product explorer (`#EEF2EF`) → Palantir
Foundry (`#0A5A4B`) → CTA (`#F1F8F5`) → Footer (`#0E1512`).

At most one teal and one ink band per page. Bands get
`border-top:1px solid #E6EAE5` where two light grounds meet.

### Section skeleton

```html
<section id="slug" style="background:#F4F6F3;border-top:1px solid #E6EAE5;padding:110px 0">
  <div style="max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)">
    <span style="font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;
                 text-transform:uppercase;color:#0A5A4B">Eyebrow</span>
    <div class="mkcols" style="display:grid;
         grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);
         gap:24px clamp(32px,6vw,90px);align-items:end;margin-top:18px">
      <h2 style="font-weight:600;font-size:clamp(32px,3.7vw,52px);line-height:1.06;
                 letter-spacing:-0.032em;margin:0">Section headline.</h2>
      <p style="font-size:17px;line-height:1.62;margin:0;color:#3A443E">Support line.</p>
    </div>
    <!-- cards / mock UI, margin-top:44px -->
  </div>
</section>
```

## 6. Pre-headers & section heads

Every section opens the same way: a mono eyebrow, then a tight headline, then
one support line. Three variants only.

- **Plain eyebrow** — default.
- **Chip eyebrow** — hero only; teal wash pill.
- **On teal** — light eyebrow `#8FD3C1`.

Two-column head puts the headline left and the support line right. Use
`align-items:end` when both columns are short text, `align-items:start`
whenever either side holds a stack, list or panel.

## 7. Badges, tags & chips

Status tags are mono, uppercase, 5px radius. **Teal** means resolved or
on-track, **rust** means risk or exception, **grey** means inert or complete.
Never invent a fourth colour.

```css
font:500 10.5px/1 'IBM Plex Mono',monospace;
letter-spacing:.05em; padding:5px 9px; border-radius:5px;
justify-self:start; white-space:nowrap;
```

| Variant | Background | Colour | Examples |
| --- | --- | --- | --- |
| ok | `#E3F0EB` | `#0A5A4B` | `READY` `ATTACHED` `MATCHED` |
| risk | `#FBE9E3` | `#96301A` | `REVIEW` `APPEAL` `ESCALATE` |
| neutral | `#F1F4F1` | `#5A625C` | `SUBMITTED` `WRITE-OFF` |

**Module badge** — teal for pre-service and mid-cycle modules; rust only for
the denials module, where the subject itself is exceptions.

**Attribute chip** — filled grey chips inside cards; outlined white chips on
grey bands. Teal fill marks the chip that belongs to a highlighted (Foundry)
row.

**Live indicator** — the pulsing dot is the only always-on animation in the
system. One per panel, never more.

## 8. Buttons

One primary (solid teal), one ghost (1px border on the current ground).

| Size | Height | Use |
| --- | --- | --- |
| Large | 52px | page CTA |
| Medium | 48px | hero & forms |
| Small | 40px | nav |
| In-panel | 29–38px | mock UI |

Hover: primary lightens to `#0E7A66`; ghost fills `#F1F4F1` and borders teal.

Buttons inside mockups are **non-interactive spans** — they are part of the
picture, not the page.

**Tabs** — active tab is a teal label plus a 2px teal underline. Labels stay
short enough to avoid wrapping; the row scrolls on narrow screens.

## 9. Forms & dialog

Mono labels above, 42px fields.

| Part | Value |
| --- | --- |
| Backdrop | `rgba(14,21,18,.55)` + `blur(3px)` |
| Panel | `min(1020px,100%)` · radius 16px |
| Height cap | `calc(100dvh - 64px)` |
| Split | form 400px · art 300px |
| Dismiss | backdrop · `×` · Escape |
| Field | 42px tall, `1px solid #DDE2DC`, radius 8px, 14.5px |

Form left, full-bleed art right on teal, with the AKOS and Foundry lockups
pinned beneath the image. Toggle groups are multi-select pills: teal fill when
on, white with `#DDE2DC` border when off.

**Success state:** "Request received." / "An AKOS - MEDKONG engineer will reach
out within one business day to schedule your demo." plus a rule and a note
about checking the junk folder. A green confetti burst fires once, and the body
pane's measured height is frozen so the panel doesn't shrink under the
shorter success copy.

## 10. Cards

Four card types cover the whole page. All share a `1px #DDE2DC` border and a
white ground. Hover lift (`.mkcard`, `translateY(-2px)`) only on cards that
represent something the reader might click through to.

1. **Feature card** — badge, headline, body, then an embedded mini-widget that
   proves the claim. The widget is the point.
2. **Compact card with metric** — small kicker, tight headline, one sentence,
   then a footer rule with a labelled value on the right.
3. **Audience card with stat footer** — numbered kicker, headline, body, then a
   tinted footer carrying two stats and a category chip.
4. **Highlighted card** — teal border plus `#F1F8F5` fill marks the one row or
   step that carries the emphasis.

**On-teal cards:** `rgba(255,255,255,.06)` fill, `rgba(255,255,255,.18)`
border, body `#BFDCD3`, headings white.

**Stat panel** — a 1px gap over a border-coloured ground gives hairline
dividers with no double borders. Always state where a figure was measured.

## 11. Mock UI kit

Product mockups are the page's main image. Every mockup is a real app window:
title bar, optional sidebar, dense content. They are built at a fixed design
width and **scaled — never reflowed** — so they look identical at every
viewport, just smaller. Each one names the workbench it shows and notes that
the data is sample.

### Chrome rules

- Title bar `#F7F9F7`, `12px 16px`, bottom border `#E6EAE5`
- Order: wordmark → divider → tenant name → live dot, clock, avatar
- Sidebar `#F7F9F7`, active item `#E3F0EB` with a teal label
- User block pinned bottom with `margin-top:auto`
- Window radius 14px, shadow `0 18px 48px -22px rgba(14,21,18,.2)`

### Table rules

- Columns use `minmax(min,max)` — never fixed px
- Header 9.5px mono 500, `.10em`, uppercase, `#6B736C`
- Cells 13px Archivo; IDs, amounts and ages in mono
- Row rule `#F1F3F0`; last row omits it
- Hover `#F7F9F7` via `.mkrow`

### Scaling, not reflowing

```html
<div class="mkscale" data-scale="1240">
  <!-- panel built at 1240px -->
</div>
```

The wrapper measures its column and applies a single transform, capping at
`data-scale-max`. **Mockup internals never get media queries.**

## 12. Data visualisation

Four primitives, no chart library. Sparkline, donut, horizontal bar, progress
track — all hand-built from inline SVG or divs. No axes, gridlines, legends or
3D. A chart earns its place only when the number alone can't carry the point.

| Primitive | Spec |
| --- | --- |
| Sparkline | `viewBox="0 0 120 24"` `preserveAspectRatio="none"`, stroke `#12866F`, width 1.6, no fill |
| Donut | Single value only. Track `#EDF0EC`, value `#12866F`, 10px stroke, rotated `-90°` to start at twelve o'clock |
| Bar rows | Widths are percent of the **largest value**, not of the total. Rust when the row is a denial or exception |
| Progress track | 6px track, 4px radius, `transition:width .8s linear` so movement reads as progress, not jitter |

## 13. Motion

Motion is either **operational** (the mock consoles tick because a real console
does) or **entrance** (content arriving as you scroll). Nothing else moves.

### Operational — always on

| Effect | Spec |
| --- | --- |
| Live pulse | `mkpulse` 1.8s ease-in-out, opacity `.3` → `1`. One per panel |
| Data tick | 1s interval. Counters climb, clocks count down, queue rows rotate, statuses flip |

All tick values derive from **one** counter so every panel stays in sync.
Anything on a per-second render loop must not carry a CSS transition — it will
never settle.

### Entrance — once per element, on scroll into view

| Effect | Target | Spec |
| --- | --- | --- |
| Headline skeleton reveal | `h1`, `h2` | Shimmer bars matched to the element's own line boxes for 520ms, then a 620ms left-to-right wipe: the text's clip opens as the bars' clip closes, across the same box, so the skeleton uncovers the words |
| Fade up | `h3`, `h4`, `p`, `.mkcard` | `opacity 0→1`, `translateY(18px)→0`, 0.9s `cubic-bezier(.22,.61,.36,1)` |
| Stagger | within one batch | 90ms per element |
| Confetti | demo dialog success | One 2.6s canvas burst, brand greens only, no library |

Excluded from entrance motion: `.mkscale` mockups, the sticky header, the
mobile menu, the dialog, `pre` blocks and the guide's table of contents. Every
entrance effect is skipped entirely under `prefers-reduced-motion: reduce`.

**Entrance motion never gates the first paint.** Elements already on screen
when the motion hook runs are left completely alone — not hidden, not animated.
Only off-screen elements get the entrance classes, because hiding those costs
nothing visually and can't delay anything the reader is looking at.

That rule exists because the obvious implementation is wrong in an expensive
way: entrance classes can only be applied once React hydrates, so holding
content until then puts the whole JS bundle in front of the hero — which is the
LCP element. It also means the page needs no pre-hydration CSS hold, no inline
`<head>` script, and no no-JS fallback: the server HTML is simply the finished
page. The hook runs in `useLayoutEffect` so off-screen elements are tagged
before the next paint.

The practical consequence: **above-the-fold content does not animate on first
load.** It's already there. The reveal is for content you scroll to.

### Hover & timing

| Effect | Spec |
| --- | --- |
| Card lift | `translateY(-2px)`, `.22s` |
| Row tint | `#F7F9F7`, instant |
| Button | `#0A5A4B` → `#0E7A66`, `.18s` |
| Hover / colour | `.16–.22s` ease |
| Progress width | `.6–.8s` linear |
| Sticky header shadow | instant, no transition |

## 14. Responsive behaviour

One breakpoint at **1020px** for layout, plus 860px for the dialog and 760px
for the hero meta row. Everything above 1020px is the desktop layout; below it,
four utilities decide what happens.

| Utility | Below 1020px |
| --- | --- |
| `.mkcols` | Stack to one column. Copy stays above its visual |
| `.mkrail` | Become an auto-advancing carousel. `display:flex; overflow-x:auto; scroll-snap-type:x mandatory; >* {flex:0 0 min(88%,430px)}` so the next card peeks |
| `.mkstack` | Collapse dense rows to one column, chips left-aligned |
| `.mkscale` | Never reflow. Keeps the exact desktop composition and scales down |

**Carousel behaviour:** rails advance every 4s and pause on any sign of intent
— pointer down, touch, wheel, keyboard, focus or hover — resuming 7s after the
last interaction. They only run while the rail is on screen, only when it is
actually overflowing, and never under `prefers-reduced-motion`.

**Also below 1020px:**

- Nav links move into a full-screen hamburger menu on the ink ground
  (`#0E1512`) with a white "Request a demo" button; the wordmark and the
  header demo button stay in the bar
- Section padding stays 110px — bands still read as chapters
- Tab rows scroll horizontally rather than wrapping

**Below 860px** the dialog stops being a floating card and becomes a
full-bleed sheet: `100dvh`, no radius, no shadow, the backdrop's padding
removed. The artwork becomes a 124px band *above* the form with the close
button pinned over its top-right corner; the panel itself doesn't scroll (the
form pane does) so that button stays put. The AKOS/Foundry credits under the
art are dropped.

**Grid minimums.** Any `repeat(auto-fit, minmax(Npx, 1fr))` track uses
`minmax(min(100%, Npx), 1fr)`. Identical above `N`, but it lets the track
collapse below it instead of overflowing the viewport on a 320px screen.

**Below 760px** the hero's chip eyebrow takes its own line above the
"Built by AKOS / Built on Foundry" credits.

## 15. Voice & content rules

**Name the operational failure, then the mechanism.**

**Do:**

- Lead with the specific failure: "the requirement is buried in a payer policy,
  the evidence is in three systems, and the clock started yesterday."
- Say what the software does, in operator vocabulary: queues, packets, remits,
  CARC codes, filing limits.
- Name the workbench a mock panel shows, and note that its data is sample.
- State where a figure was measured, rather than hedging it as a projection.
- Keep section support lines to one or two sentences.

**Don't:**

- "Revolutionize", "seamless", "AI-powered", "transform your revenue cycle".
- Unlabelled statistics, invented customer results, or named clients we don't
  have.
- Endorsement claims about Palantir beyond "Built on Palantir Foundry".
- Emoji, exclamation marks, or rhetorical questions as headlines.

**Required captions:** "The MEDKONG operator workbench. Sample data." ·
"Measured against two multi-facility deployments running in production."

MEDKONG is deployed. The site simply doesn't put live patient records on a
public page — so name the product plainly and mark the data as sample. Never
reach for "synthetic", "illustrative", or "interface concept": each one reads
as though the software itself were hypothetical.

**Headline pattern:** declarative sentence, full stop, under 10 words.
"Catch the claim before the payer does." · "Work the accounts that will
actually pay."

### Sample data conventions

- Cases `PA-4xxxx` · Claims `CLM-88xxx` · Accounts `ACC-77xxxx`
- Real CPT/HCPCS and CARC codes, fictional patients
- Payers: Aetna, UHC, BCBS, Humana, Cigna, Medicaid MCO
- Tenant: "Northside Health · Revenue Operations"

## 16. Page recipe

A module page, a use-case page or a solution page follows the same spine as the
homepage, with the middle swapped for its subject.

1. **Sticky header** — white, 68px. Wordmark, section links, demo button.
   Shadow appears past 8px of scroll.
2. **Hero + product mock** — white. Chip eyebrow, trust line with both marks,
   H1 left with lede and buttons right, then the workbench for this page's
   subject.
3. **Trust band** — `#F4F6F3`, 44px. AKOS mark, Foundry wordmark, one-line
   infrastructure claim, three outlined chips.
4. **Subject body, 3–5 bands** — alternating white / `#F4F6F3`. What it is, how
   it works, mockup deep-dive, coverage cards. One band may go `#EEF2EF` for a
   tabbed explorer.
5. **Foundry band** — `#0A5A4B`, required on every page. White wordmark chip,
   why-Foundry cards, and the source → ontology → kits → surfaces flow.
6. **Outcomes & audience** — white / `#F4F6F3`. Seamless stat grid (labelled
   sourced), then segment cards with stat footers.
7. **CTA + footer** — `#F1F8F5` → `#0E1512`. CTA headline with both buttons
   opening the demo dialog, stack card on the right, then the ink footer with
   the inverse wordmark.

### Ship checklist

- [ ] MEDKONG uppercase, MED teal, everywhere
- [ ] No two adjacent bands on the same ground
- [ ] Both AKOS and Foundry marks present above the fold
- [ ] Every mock panel wrapped in `.mkscale` with a caption
- [ ] All text ≥ 4.5:1; nothing lighter than `#6B736C`
- [ ] Rust used only for risk states
- [ ] Every CTA opens the demo dialog
- [ ] Card grids tagged `.mkrail`, text columns `.mkcols`
- [ ] Every figure states where it was measured
- [ ] Fonts limited to Archivo + IBM Plex Mono
- [ ] In-page links scroll without writing a `#hash` into the address bar

---

## Implementation notes

| Concern | Where |
| --- | --- |
| Inline style strings → React style objects | [`lib/css.ts`](../lib/css.ts) (`sx()`) |
| Reset, keyframes, hover, media queries | [`app/globals.css`](../app/globals.css) |
| Entrance motion, carousels, hashless anchors | [`components/shared/motion.ts`](../components/shared/motion.ts) |
| Mock scaling, tick, dialog state | [`components/landing/state.tsx`](../components/landing/state.tsx) |
| Copy and sample workbench data | [`lib/landing-data.ts`](../lib/landing-data.ts) |

## Changes since guide v1

The visual guide at `/design-system` still documents v1 in three places. This
file reflects what the site actually does:

1. **Motion** — v1 said "nothing else animates on load: no scroll reveals". The
   site now has headline skeleton reveals and fade-up entrances (§13). The
   operational rules — one tick source, no transitions on per-second values,
   one live dot per panel — are unchanged.
2. **Responsive nav** — v1 said "nav links hide (`.mknav`)". They now move into
   a full-screen hamburger menu (§14).
3. **Dialog on mobile** — v1 said "dialog panes stack, form pane keeps the
   scroll". Below 860px it is now a full-screen sheet with the artwork as a
   124px band above the form (§9, §14).
4. **Hero headline** — now "Modular AI Kit for the revenue cycle."; the type
   specimen in the visual guide still shows the older wording.
