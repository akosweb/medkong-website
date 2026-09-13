'use client';

import { SiteFooter } from '@/components/landing/SiteFooter';
import { SiteHeader } from '@/components/shared/SiteHeader';
import { SECTIONS } from '@/lib/macs-data';
import { Audience } from './Audience';
import { Board } from './Board';
import { FoundryBand } from './FoundryBand';
import { Governance } from './Governance';
import { Hero } from './Hero';
import { RequestForm } from './RequestForm';
import { MacsProvider, useMacs } from './state';
import { TrustBand } from './TrustBand';
import { WhatItIs } from './WhatItIs';
import { Workflow } from './Workflow';

function Header() {
  const { goToRequest } = useMacs();
  return (
    <SiteHeader
      sections={SECTIONS}
      ctaLabel="Request a walkthrough"
      onCta={goToRequest}
      tagline="Prior authorization review for Medicare Administrative Contractors"
    />
  );
}

/**
 * MEDKONG for MACs — the campaign landing page at
 * /medicare-administrative-contractors.
 *
 * Follows the §16 page recipe: hero + workbench (white) → trust band → what it
 * is (white) → workflow (grey) → review-board explorer (mint) → Foundry (teal)
 * → governance (white) → audience (grey) → request form (teal tint) → footer.
 * There is no demo dialog on this page: every CTA scrolls to the inline form.
 */
export function MacsPage() {
  return (
    <MacsProvider>
      <div className="mk-page mk-has-subnav mk-macs">
        <Header />
        <Hero />
        <TrustBand />
        <WhatItIs />
        <Workflow />
        <Board />
        <FoundryBand />
        <Governance />
        <Audience />
        <RequestForm />
        <SiteFooter />
      </div>
    </MacsProvider>
  );
}
