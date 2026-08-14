import type { Metadata } from 'next';
import { Landing } from '@/components/landing/Landing';

const title = 'MEDKONG — Modular AI Kit for the revenue cycle';
const description =
  'Deployable AI and workflow modules for prior auth, coding, claims, denials and AR. Built by AKOS on Palantir Foundry.';

export const metadata: Metadata = {
  title,
  description:
    'A kit of deployable AI and workflow modules for healthcare revenue cycle operations. Built by AKOS on Palantir Foundry.',
  alternates: { canonical: '/' },
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

export default function HomePage() {
  return <Landing />;
}
