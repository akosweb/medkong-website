import type { ReactNode } from 'react';
import { sx } from '@/lib/css';

export type ChipProps = {
  children: ReactNode;
  /** `outlined` white with a #DDE2DC border (identifiers, chips on grey bands) · `filled` grey inside cards · `teal` marks the highlighted row · `onTeal` for the primary-teal band. */
  variant?: 'outlined' | 'filled' | 'teal' | 'onTeal';
};

const VARIANT = {
  outlined: 'background:#fff;border:1px solid #DDE2DC;color:#3A443E',
  filled: 'background:#F1F4F1;border:1px solid #F1F4F1;color:#5A625C',
  teal: 'background:#E3F0EB;border:1px solid #E3F0EB;color:#0A5A4B',
  onTeal: 'background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18);color:#fff',
};

/** Attribute chip: 10.5px mono, 5px radius. Not a status — use Tag for that. */
export function Chip({ children, variant = 'outlined' }: ChipProps) {
  return (
    <span
      style={sx(
        `font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.05em;padding:6px 9px;border-radius:5px;white-space:nowrap;${VARIANT[variant]}`
      )}
    >
      {children}
    </span>
  );
}
