import type { Metadata } from 'next';
import { HomePage } from '@/components/home/HomePage';

const title = 'MEDKONG · Deployable Agents for your revenue cycle stack';
const description =
  'Deployable Agents for critical healthcare revenue cycle workflows (eligibility, prior auth, charge capture, coding, claim QA, denials, posting, AR) and prior authorization review for Medicare Administrative Contractors. Added to the stack you already run: Agents prepare the work, your people decide. Built by AKOS on Palantir Foundry.';

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
