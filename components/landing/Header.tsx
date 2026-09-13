'use client';

import { SiteHeader } from '@/components/shared/SiteHeader';
import { LANDING_SECTIONS } from '@/lib/nav';
import { useLanding } from './state';

/** Homepage header: the site nav plus this page's sections; CTAs open the demo dialog. */
export function Header() {
  const { openDemo } = useLanding();

  return (
    <SiteHeader
      sections={LANDING_SECTIONS}
      ctaLabel="Request a demo"
      onCta={openDemo}
      tagline="Modular AI kit for healthcare RCM operations"
    />
  );
}
