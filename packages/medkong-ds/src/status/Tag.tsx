import type { ReactNode } from 'react';
import { sx } from '@/lib/css';
import { TAG, type TagKind } from '@/lib/landing-data';

export type TagProps = {
  /** Uppercase mono text, e.g. READY, REVIEW, SUBMITTED. */
  children: ReactNode;
  /** `ok` teal = resolved or on-track · `risk` rust = risk or exception · `neutral` grey = inert or complete. Never a fourth colour. */
  kind?: TagKind;
};

/** Status tag: 10.5px mono, uppercase, 5px radius. Rust means risk, nothing else. */
export function Tag({ children, kind = 'ok' }: TagProps) {
  return <span style={sx(TAG[kind])}>{children}</span>;
}
