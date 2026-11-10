import type { Metadata } from 'next';
import { MacsPage } from '@/components/macs/MacsPage';

const title = 'MEDKONG for MACs · Review Agents for Medicare Administrative Contractors';
const description =
  'A review Agent that turns a submitted prior authorization request into a structured, evidence-backed review case, inside the stack your review team already runs. Seven review gates, policy-aware findings, reviewer-decided outcomes, through to the decision, UTN and provider letter. Built by AKOS on Palantir Foundry.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/medicare-administrative-contractors' },
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

export default function MedicareAdministrativeContractorsPage() {
  return <MacsPage />;
}
