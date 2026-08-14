'use client';

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
 * MEDKONG landing page — a port of `MedKong Landing v3.dc.html`.
 *
 * Section order matches the design file top to bottom. Everything that
 * animates or responds to a click reads from <LandingProvider>, which owns the
 * one-second tick, the configurator selection, the active workbench tab and
 * the demo dialog.
 */
export function Landing() {
  return (
    <LandingProvider>
      <div className="mk-landing mk-motion-root">
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
  );
}
