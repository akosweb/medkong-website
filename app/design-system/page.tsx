import type { Metadata } from 'next';
import { DesignGuide } from '@/components/design-system/DesignGuide';

export const metadata: Metadata = {
  title: 'MEDKONG Design Guide',
  description: 'Colour, type, layout, components and voice for the MEDKONG product and marketing surfaces.',
  // Internal reference page. `app/robots.ts` disallows the path as well —
  // robots.txt keeps crawlers off it, this keeps it out of the index if it's
  // ever linked from somewhere that is crawled.
  robots: { index: false, follow: false },
};

export default function DesignSystemPage() {
  return <DesignGuide />;
}
