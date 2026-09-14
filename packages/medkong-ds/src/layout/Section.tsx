import type { ReactNode } from 'react';
import { sx } from '@/lib/css';

export type SectionProps = {
  children: ReactNode;
  /** Anchor id for in-page navigation. */
  id?: string;
  /** Ground colour. Never put two adjacent sections on the same ground; at most one `teal` and one `ink` band per page. */
  ground?: 'white' | 'gray' | 'mint' | 'tint' | 'teal' | 'ink';
  /** Vertical padding; the default is the 110px band rhythm. */
  padding?: string;
};

const GROUND: Record<NonNullable<SectionProps['ground']>, string> = {
  white: 'background:#fff',
  gray: 'background:#F4F6F3;border-top:1px solid #E6EAE5',
  mint: 'background:#EEF2EF;border-top:1px solid #E0E7E2;border-bottom:1px solid #E0E7E2',
  tint: 'background:#F1F8F5;border-top:1px solid #DCEAE3',
  teal: 'background:#0A5A4B;color:#fff',
  ink: 'background:#0E1512;color:#B9C1BB',
};

/**
 * A full-width page band with its own ground and a centred 1400px container.
 * Bands alternate so the page reads as chapters: white → gray → white → mint →
 * teal → tint → ink.
 */
export function Section({ children, id, ground = 'white', padding = '110px 0' }: SectionProps) {
  return (
    <section id={id} style={sx(`${GROUND[ground]};padding:${padding}`)}>
      <div style={sx('max-width:1400px;margin:0 auto;padding:0 clamp(24px,4vw,56px)')}>{children}</div>
    </section>
  );
}
