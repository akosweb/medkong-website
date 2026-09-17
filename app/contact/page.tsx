import type { Metadata } from 'next';
import { ContactPage } from '@/components/contact/ContactPage';

const title = 'Request a demo · MEDKONG';
const description =
  'See MEDKONG on your workflows. A 45-minute walkthrough of the workbenches, the Foundry ontology behind them, and a scoping of a first module in your environment.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/contact' },
  openGraph: { type: 'website', title, description, images: [{ url: '/assets/og-image.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/assets/og-image.png'] },
};

export default function Contact() {
  return <ContactPage />;
}
