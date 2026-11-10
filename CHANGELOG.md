# Changelog

Notable changes to the MEDKONG website. Newest first.

## Unreleased

### Changed

- **Agent-first positioning** across every page: MEDKONG is now described as
  deployable AI agents for critical revenue cycle workflows, added to the stack
  a customer already runs. Headlines, heroes, header and footer taglines, page
  metadata, the Manifesto and `/llms.txt` lead with agents; "module" stays as
  the delivery term (each agent ships as a versioned module). Product
  capabilities and claims are unchanged, and agents still only prepare work: a
  named person makes every decision.
  - "Agent" is always capitalized and never prefixed with "AI". In headings
    the word is set in the primary teal, via `accentAgents()` in
    `components/shared/accent.tsx`.
- **Manifesto rulebook diagram** now shows direction: a fast, dense stream of
  provider cases flows left to right through the rulebook, changing colour as
  they come out checked, while fewer decisions flow right to left back to the
  providers. Both run at once, with a legend under the diagram.

## 2026-09-29

### Added

- **`/manifesto` (Our Manifesto)** — one rulebook, checked from both sides.
  Linked as "Our Manifesto" in the main nav, the mobile menu and the footer;
  listed in the sitemap and `/llms.txt`.
  - **What MEDKONG is** — deployed infrastructure providers and reviewers own,
    described in operational and infrastructure-as-code terms, with an
    animated diagram of the eight provider modules and seven MAC review gates
    converging on one rulebook.
  - **Four principles** — one rulebook for both sides, defensible decisions,
    policy as a system, decision making you own.
  - **The relay problem** — the fixed hops cost days; incomplete,
    miscategorized and non-affirmed requests loop back and cost months.
  - **Reviewer side first** and **Submit once** — the seven gates, and the
    provider promise measured as first-pass affirmation rate, with gold card
    eligibility as where clean passes lead.
