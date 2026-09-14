import type { ReactNode } from 'react';
import { sx } from '@/lib/css';

export type ButtonProps = {
  children: ReactNode;
  /** `primary` is solid teal; `ghost` is a 1px border on the current ground. */
  variant?: 'primary' | 'ghost';
  /** `lg` 52px page CTA · `md` 48px hero and forms · `sm` 40px nav. */
  size?: 'lg' | 'md' | 'sm';
  /** Ground the ghost variant sits on; picks its border colour. */
  ground?: 'white' | 'tint' | 'ink';
  /** Renders an anchor instead of a button. In-page `#slug` links scroll without writing a hash. */
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
};

const SIZE = { lg: 'height:52px;padding:0 26px;font-size:16px', md: 'height:48px;padding:0 24px;font-size:15.5px', sm: 'height:40px;padding:0 20px;font-size:14.5px' };
const RADIUS = { lg: 9, md: 9, sm: 8 };

/**
 * One primary (solid teal, lightens to #0E7A66 on hover) and one ghost (1px
 * border, fills #F1F4F1 with a teal border on hover). Buttons inside mockups
 * are non-interactive spans — use PanelButton there.
 */
export function Button({ children, variant = 'primary', size = 'md', ground = 'white', href, onClick, type = 'button', disabled }: ButtonProps) {
  const ghostBorder = ground === 'tint' ? '#B9CCC3' : ground === 'ink' ? 'rgba(255,255,255,.22)' : '#CFD6CF';
  const style =
    variant === 'primary'
      ? `display:inline-flex;align-items:center;justify-content:center;${SIZE[size]};border:0;border-radius:${RADIUS[size]}px;background:#0A5A4B;color:#fff;font-weight:600;font-family:inherit;cursor:pointer;transition:background .18s ease;white-space:nowrap;text-decoration:none;${disabled ? 'opacity:.65;cursor:progress' : ''}`
      : `display:inline-flex;align-items:center;justify-content:center;${SIZE[size]};border-radius:${RADIUS[size]}px;border:1px solid ${ghostBorder};background:${ground === 'ink' ? 'transparent' : '#fff'};color:${ground === 'ink' ? '#fff' : '#0E1512'};font-weight:500;font-family:inherit;cursor:pointer;transition:background .18s ease,border-color .18s ease;white-space:nowrap;text-decoration:none`;
  const cls = variant === 'primary' ? 'mkcta' : 'mkghost';
  if (href) {
    return (
      <a className={cls} href={href} style={sx(style)}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} type={type} onClick={onClick} disabled={disabled} style={sx(style)}>
      {children}
    </button>
  );
}
