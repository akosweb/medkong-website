import type { ReactNode } from 'react';
import { PanelGhost, PanelPrimary } from '@/components/macs/mock';

export type PanelButtonProps = {
  children: ReactNode;
  /** `primary` solid teal · `ghost` outlined. */
  variant?: 'primary' | 'ghost';
  /** Renders the primary at the disabled teal (#B2D5C9) — e.g. a save that's gated. */
  muted?: boolean;
};

/**
 * In-panel button (36px) for mockups. A non-interactive span: buttons inside a
 * mock are part of the picture, not the page.
 */
export function PanelButton({ children, variant = 'primary', muted = false }: PanelButtonProps) {
  return variant === 'ghost' ? <PanelGhost>{children}</PanelGhost> : <PanelPrimary muted={muted}>{children}</PanelPrimary>;
}
