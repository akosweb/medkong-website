import type { ReactNode } from 'react';
import { sx } from '@/lib/css';

export type EyebrowProps = {
  children: ReactNode;
  /** `plain` (default, every section), `chip` (hero only, teal wash pill), `onTeal` (light label on the primary-teal band). */
  variant?: 'plain' | 'chip' | 'onTeal';
};

/**
 * The mono eyebrow that opens every section: 11.5px IBM Plex Mono, uppercase,
 * .14em tracking. Three variants only.
 */
export function Eyebrow({ children, variant = 'plain' }: EyebrowProps) {
  const base = "font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;";
  const style =
    variant === 'chip'
      ? base + 'display:inline-flex;align-items:center;line-height:1.45;color:#0A5A4B;background:#E3F0EB;padding:7px 11px;border-radius:6px'
      : variant === 'onTeal'
        ? base + 'color:#8FD3C1'
        : base + 'color:#0A5A4B';
  return <span style={sx(style)}>{children}</span>;
}
