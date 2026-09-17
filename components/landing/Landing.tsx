'use client';

import { DemoProvider } from '@/components/shared/demo';
import { Architecture } from './Architecture';
import { Audience } from './Audience';
import { DemoCta } from './DemoCta';
import { DemoDialog } from './DemoDialog';
import { Foundry } from './Foundry';
import { Header } from './Header';
import { Hero } from './Hero';
import { Implementation } from './Implementation';
import { KitModel } from './KitModel';
import { Outcomes } from './Outcomes';
import { PartnerStrip } from './PartnerStrip';
import { Platform } from './Platform';
import { SiteFooter } from './SiteFooter';
import { Workbenches } from './Workbenches';
import { Workflows } from './Workflows';
import { WhyAkos } from './WhyAkos';
import { LandingProvider } from './state';

/**
 * MEDKONG for providers (`/providers`) — a port of `MedKong Landing v3.dc.html`.
 * This was the homepage until the platform overview took `/`; the module
 * walkthrough, workbenches and outcomes now live here as the provider page.
 *
 * Section order matches the design file top to bottom. Everything that
 * animates or responds to a click reads from <LandingProvider>, which owns the
 * one-second tick, the configurator selection and the active workbench tab;
 * <DemoProvider> owns the demo dialog.
 */
export function ProvidersPage() {
  return (
    <DemoProvider>
    <LandingProvider>
      <div className="mk-page mk-has-subnav mk-landing">
        <Header />
        <Hero />
        <PartnerStrip />
        <Platform />
        <Workflows />
        <KitModel />
        <Workbenches />
        <Foundry />
        <Outcomes />
        <Audience />
        <Architecture />
        <WhyAkos />
        <Implementation />
        <DemoCta />
        <SiteFooter />
        <DemoDialog />
      </div>
    </LandingProvider>
    </DemoProvider>
  );
}
