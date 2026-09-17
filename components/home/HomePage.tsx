'use client';

import { DemoCta } from '@/components/landing/DemoCta';
import { DemoDialog } from '@/components/landing/DemoDialog';
import { SiteFooter } from '@/components/landing/SiteFooter';
import { FoundryBand } from '@/components/macs/FoundryBand';
import { TrustBand } from '@/components/macs/TrustBand';
import { DemoProvider, useDemo } from '@/components/shared/demo';
import { SiteHeader } from '@/components/shared/SiteHeader';
import { FOUNDRY, TRUST } from '@/lib/home-data';
import { HOME_SECTIONS } from '@/lib/nav';
import { Deployment } from './Deployment';
import { Hero } from './Hero';
import { Layers } from './Layers';
import { Modules } from './Modules';
import { Solutions } from './Solutions';
import { HomeProvider } from './state';
import { WhatItIs } from './WhatItIs';

function Header() {
  const { openDemo } = useDemo();
  return (
    <SiteHeader
      sections={HOME_SECTIONS}
      ctaLabel="Request a demo"
      onCta={openDemo}
      tagline="Deployable AI infrastructure for the revenue cycle"
    />
  );
}

/**
 * The homepage — MEDKONG's platform overview and lead-in page.
 *
 * Band order (§5): hero + kit manifest (white) → trust band (grey) → what it
 * is (white) → four layers (grey) → modules (mint) → Foundry (teal) →
 * deployment model (white) → solutions (grey) → CTA (teal tint) → footer.
 * The provider walkthrough lives at /providers and the MAC review system at
 * /medicare-administrative-contractors; this page leads into both.
 */
export function HomePage() {
  return (
    <DemoProvider>
      <HomeProvider>
        <div className="mk-page mk-has-subnav mk-home">
          <Header />
          <Hero />
          <TrustBand claim={TRUST.claim} chips={TRUST.chips} />
          <WhatItIs />
          <Layers />
          <Modules />
          <FoundryBand content={FOUNDRY} />
          <Deployment />
          <Solutions />
          <DemoCta />
          <SiteFooter />
          <DemoDialog />
        </div>
      </HomeProvider>
    </DemoProvider>
  );
}
