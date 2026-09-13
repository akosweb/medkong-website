'use client';

import { SiteHeader } from '@/components/shared/SiteHeader';
import { useLanding } from './state';

export const NAV_LINKS = [
  { href: '#platform', label: 'Platform' },
  { href: '#workflows', label: 'Workflows' },
  { href: '#foundry', label: 'Foundry' },
  { href: '#outcomes', label: 'Outcomes' },
  { href: '#architecture', label: 'Architecture' },
];

/** Homepage header: the landing nav, with both CTAs opening the demo dialog. */
export function Header() {
  const { openDemo } = useLanding();

  return (
    <SiteHeader
      links={NAV_LINKS}
      ctaLabel="Request a demo"
      onCta={openDemo}
      tagline="Modular AI kit for healthcare RCM operations"
    />
  );
}
