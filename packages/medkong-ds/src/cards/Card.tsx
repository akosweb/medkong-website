import type { ReactNode } from 'react';
import { sx } from '@/lib/css';

export type CardProps = {
  children: ReactNode;
  /** `default` white with a #DDE2DC border · `highlighted` teal border + #F1F8F5 fill for the one row that carries emphasis · `onTeal` for the primary-teal band. */
  variant?: 'default' | 'highlighted' | 'onTeal';
  /** Hover lift — only for cards that represent something the reader might click through to. */
  interactive?: boolean;
  /** Inner padding; cards use 24px 26px, dense cards 20px 22px. */
  padding?: string;
  /** 14px for cards (default), 12px for inner panels. */
  radius?: 12 | 14;
};

const VARIANT = {
  default: 'background:#fff;border:1px solid #DDE2DC',
  highlighted: 'background:#F1F8F5;border:1px solid #0A5A4B',
  onTeal: 'background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.18);color:#fff',
};

/** The base card every card type shares: 1px border, white ground, 14px radius. */
export function Card({ children, variant = 'default', interactive = false, padding = '24px 26px', radius = 14 }: CardProps) {
  return (
    <div className={interactive ? 'mkcard' : undefined} style={sx(`${VARIANT[variant]};border-radius:${radius}px;padding:${padding}`)}>
      {children}
    </div>
  );
}
