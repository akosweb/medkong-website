import { sx } from '@/lib/css';
import { BRAND } from './brand-files';

export type LogoProps = {
  /** `lockup` = mark + outlined wordmark (966×224) · `icon` = the mark alone (209×224), for square, constrained placements only. */
  variant?: 'lockup' | 'icon';
  /** Ground the logo sits on: `white` (linework ink, MED teal), `ink` (white + on-dark teal), `teal` (single-colour white). */
  tone?: 'white' | 'ink' | 'teal';
  /** Rendered height in px; width follows the artwork. Lockup minimum 26px. */
  height?: number;
  alt?: string;
};

/**
 * The MEDKONG logo files — the same SVG artwork as /public/brand, in every
 * variation: lockup and icon, each for white, ink and primary-teal grounds.
 * Use this when you need the logo as an image (exports, print, partner
 * placements); use Wordmark / MedkongMark for live UI chrome.
 */
export function Logo({ variant = 'lockup', tone = 'white', height = 40, alt = 'MEDKONG' }: LogoProps) {
  const ratio = variant === 'lockup' ? 966 / 224 : 209 / 224;
  return (
    <img
      src={BRAND[`${variant}-${tone}`]}
      alt={alt}
      width={Math.round(height * ratio)}
      height={height}
      style={sx(`display:block;height:${height}px;width:auto`)}
    />
  );
}
