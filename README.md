# MEDKONG website

Marketing site for MEDKONG — the modular AI kit for healthcare revenue cycle
operations, built by AKOS on Palantir Foundry.

| Route            | Source                            | Indexed |
| ---------------- | --------------------------------- | ------- |
| `/`              | `MedKong Landing v3.dc.html`      | yes     |
| `/design-system` | `MEDKONG Design Guide.dc.html`    | no      |

The design system also exists as a machine-readable spec at
[docs/design-system.md](docs/design-system.md) — every token, component and rule
in one file, for handing to an LLM when building the next page.

Generated routes: `/robots.txt`, `/sitemap.xml` and `/llms.txt`. All three take
their origin from [`lib/site.ts`](lib/site.ts) so they can't drift apart —
set `NEXT_PUBLIC_SITE_URL` per environment; it falls back to the production
domain rather than localhost.

- **`/sitemap.xml`** — the homepage only. `/design-system` is noindexed and
  disallowed, so it's deliberately absent.
- **`/llms.txt`** — a brief for language models and agents
  ([llmstxt.org](https://llmstxt.org)). Generated from
  [`app/llms.txt/route.ts`](app/llms.txt/route.ts) rather than kept static, so
  the module list stays in step with `lib/landing-data.ts`.

## Analytics

Google Analytics 4, wired in [`components/shared/Analytics.tsx`](components/shared/Analytics.tsx)
via `next/script` at `afterInteractive` — so the tags load once the page is
interactive and never sit in front of the first paint.

**Only the production deploy reports.** The component returns `null` unless
`VERCEL_ENV === 'production'`, which keeps preview builds and local dev out of
the property. Set `NEXT_PUBLIC_GA_DEBUG=1` to opt a non-production build in when
you need to test the tag itself.

The site has no client-side navigation between its two routes, so the default
`gtag('config', ...)` page_view is sufficient. If real routes get added later,
they'll need a manual `page_view` on route change.

Next.js 15 (App Router) · React 19 · TypeScript. No CSS framework — see
[How the design was ported](#how-the-design-was-ported).

## Running it

```bash
npm install && npm run dev
```

Copy `.env.example` to `.env.local` and fill in
`LEADS_SUPABASE_SERVICE_ROLE_KEY` if you want the demo form to work locally.
Without it the form returns a clean 503 and the rest of the site is unaffected.

Other scripts: `npm run build`, `npm run typecheck`, `npm run lint`.

Use `npm run build:check` to verify a production build **while the dev server is
running** — it writes to `.next-build` so it doesn't pull `.next` out from under
`next dev`. Deploys use the plain `build`.

## How the design was ported

Both pages come from the Claude Design project
[MedKong UI mockups](https://claude.ai/design/p/c4765e76-8d09-404c-8ea5-b10af072bdf9).
Those source files style every element with an inline `style="..."` string, so
the port keeps those strings verbatim and runs them through `sx()`
([lib/css.ts](lib/css.ts)), which parses CSS text into a React style object and
memoizes the result per unique string.

That choice is deliberate: a design revision can be diffed against the source
file one declaration at a time, rather than being translated into hand-written
class names first. The things an inline style can't express — the reset,
`@keyframes`, `:hover`, the `max-width:1020px` collapse rules — live in
[app/globals.css](app/globals.css).

Section components are one-to-one with the top-level sections of the design
files, in the same order:

- `components/landing/` — [Landing.tsx](components/landing/Landing.tsx) composes
  them; [state.tsx](components/landing/state.tsx) owns the shared behaviour.
- `components/design-system/` — same shape, driven by
  [state.tsx](components/design-system/state.tsx).

Page copy and the synthetic demo data are in
[lib/landing-data.ts](lib/landing-data.ts).

### The live mocks

The product mockups animate off a one-second tick. It starts at `0` and only
advances after mount so the server render and the first client render agree;
the wall clock is the one value that can't be derived from the tick, so it
renders as `--:--:--` until mounted.

Mock frames are authored at a fixed pixel width (`data-scale`) and scaled down
to fit their column by `useScaleToFit()`, mirroring the design file's own
`fit()` routine.

Two author-facing toggles from the design file are now constants:
`METRICS_MODE` in `components/landing/state.tsx` (illustrative figures vs.
capability language) and `DEFAULT_INSTALLED` in `lib/landing-data.ts` (which
modules the configurator starts with).

### Assets

`public/assets/` holds the four images the design imports — `akos-mark.png`,
`palantir-wordmark.png`, `demo-dialog-art.webp`, `og-image.png`. They're small
and version-controlled with the code, so nothing is served from Supabase
storage; the public `medkong` bucket in the arsenal project is available if
that ever changes.

The dialog artwork is a 960×1200 WebP (141 KB) rather than the design's PNG —
the same image at an eighth of the bytes, and it's only fetched when the dialog
opens.

Two files in the design project — `support.js` (the design-canvas React
runtime) and `image-slot.js` (a drag-and-drop image placeholder for mockups) —
are authoring tools for the design canvas. Neither is needed here and neither
was ported.

## Lead capture

The demo dialog posts to [`/api/leads`](app/api/leads/route.ts), which inserts
into `medkong.leads` in the shared **AKOS Toolkit ("arsenal")** Supabase project
(`sgizuweopqywezpkumqt`) — the same project the AKOS site reads its blog from.

- Schema: [supabase/migrations/0001_medkong_schema.sql](supabase/migrations/0001_medkong_schema.sql),
  applied 2026-08-13. It sits alongside the existing `annex` / `crm` /
  `resource` schemas and `medkong` was appended to the project's PostgREST
  exposed-schema list.
- RLS is on with **no policies**, so `anon` and `authenticated` get nothing.
  The service-role key — server-side only, never `NEXT_PUBLIC_` — is the only
  way to write.
- Rows carry `environment` (`production` / `preview` / `development`), so local
  and preview submissions are easy to filter out.
- No IP address is stored. `referrer` and `user_agent` are, for attribution.

### Not yet done

There's no spam protection on the form — no captcha, honeypot or rate limit.
The route validates and caps field lengths, but a bot can still submit. Worth
adding before the site is public.
