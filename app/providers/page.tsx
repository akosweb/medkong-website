import type { Metadata } from 'next';
import { ProvidersPage } from '@/components/landing/Landing';

const title = 'MEDKONG for providers · Modular AI kit for the revenue cycle';
const description =
  'Eight deployable modules for provider revenue cycle operations (eligibility, prior auth, charge capture, coding review, claim QA, denials, posting and AR) with the operator workbenches, outcomes and architecture. Built by AKOS on Palantir Foundry.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/providers' },
  openGraph: {
    type: 'website',
    title,
    description,
    images: [{ url: '/assets/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/assets/og-image.png'],
  },
};

export default function Providers() {
  return <ProvidersPage />;
}
