import type { Metadata } from 'next';
import { ManifestoPage } from '@/components/manifesto/ManifestoPage';

const title = 'Manifesto · MEDKONG';
const description =
  'Revenue cycle doesn’t have an AI problem. It has an argument problem. Four principles: one rulebook for both sides of the table, defensible decisions, policy as a system process, and decision making you own.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/manifesto' },
  openGraph: { type: 'article', title, description, images: [{ url: '/assets/og-image.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/assets/og-image.png'] },
};

export default function Manifesto() {
  return <ManifestoPage />;
}
