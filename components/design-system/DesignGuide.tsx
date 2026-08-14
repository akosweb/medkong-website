'use client';

import { BadgesSection } from './BadgesSection';
import { ButtonsSection } from './ButtonsSection';
import { CardsSection } from './CardsSection';
import { ColorSection } from './ColorSection';
import { DataVizSection } from './DataVizSection';
import { FormsSection } from './FormsSection';
import { GuideFooter } from './GuideFooter';
import { GuideHeader } from './GuideHeader';
import { GuideIntro } from './GuideIntro';
import { HeadingsSection } from './HeadingsSection';
import { LayoutSection } from './LayoutSection';
import { LogoSection } from './LogoSection';
import { MockUiSection } from './MockUiSection';
import { MotionSection } from './MotionSection';
import { PartnersSection } from './PartnersSection';
import { RecipeSection } from './RecipeSection';
import { ResponsiveSection } from './ResponsiveSection';
import { TypeSection } from './TypeSection';
import { VoiceSection } from './VoiceSection';
import { GuideProvider } from './state';

/**
 * MEDKONG design guide — a port of `MEDKONG Design Guide.dc.html`.
 *
 * Internal reference, not a marketing page: it's excluded from indexing in
 * both `app/robots.ts` and this route's metadata.
 */
export function DesignGuide() {
  return (
    <GuideProvider>
      <div className="mk-guide">
        <GuideHeader />
        <GuideIntro />
        <LogoSection />
        <PartnersSection />
        <ColorSection />
        <TypeSection />
        <LayoutSection />
        <HeadingsSection />
        <BadgesSection />
        <ButtonsSection />
        <FormsSection />
        <CardsSection />
        <MockUiSection />
        <DataVizSection />
        <MotionSection />
        <ResponsiveSection />
        <VoiceSection />
        <RecipeSection />
        <GuideFooter />
      </div>
    </GuideProvider>
  );
}
