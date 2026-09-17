import type { Metadata } from 'next';
import { HomePage } from '@/components/home/HomePage';

const title = 'MEDKONG · Revenue cycle AI we deploy and you own';
const description =
  'Deployable modules for healthcare revenue cycle operations (eligibility, prior auth, charge capture, coding, claim QA, denials, posting, AR) and a review system for Medicare Administrative Contractors. Versioned infrastructure AKOS deploys into your environment, built on Palantir Foundry.';

export const metadata: Metadata = {
  title,
  description,
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

export default function Home() {
  return <HomePage />;
}
