import { sx } from '@/lib/css';

/** Artwork height in viewBox units. */
const ARTWORK_HEIGHT = 281.11;
/** Artwork width / height — the mark is slightly taller than it is wide. */
export const MARK_ASPECT = 259.07 / ARTWORK_HEIGHT;

/**
 * Target stroke weight in CSS pixels, held constant at every render size.
 *
 * The source file's 5-unit stroke is drawn for large reproduction: at a 20px
 * UI size it scales down to 0.36px and renders as a washed-out grey hairline.
 * Scaling the stroke inversely with height keeps the linework at a steady
 * weight instead. 1.1px reads crisply at 20px without the interior detail
 * clogging, which is what happens past ~1.3px.
 */
const STROKE_PX = 1.1;

export function markStrokeWidth(height: number): number {
  return (STROKE_PX * ARTWORK_HEIGHT) / height;
}

/**
 * The MEDKONG icon mark, from `MedKong_icon_mark_Colored on white-15.svg`.
 *
 * Replaces the dashed "MK" placeholder the design shipped with. It is always
 * paired with the MEDKONG wordmark, never used as a standalone logo.
 *
 * Sized by height — the artwork is slightly taller than it is wide
 * (259.07 × 281.11), so width follows from the aspect ratio.
 */
export function MedkongMark({
  height = 30,
  tone = 'light',
}: {
  height?: number;
  tone?: 'light' | 'dark' | 'onTeal';
}) {
  // On ink the near-black linework disappears, so it inverts to white with the
  // on-dark teal. On a teal ground the mark goes single-colour white, matching
  // the wordmark rule — never teal on teal.
  const line = tone === 'light' ? '#1C1B1A' : '#FFFFFF';
  const teal = tone === 'light' ? '#005749' : tone === 'dark' ? '#5FBFA6' : '#FFFFFF';

  return (
    <svg
      viewBox="0 0 259.07 281.11"
      role="img"
      aria-label="MEDKONG"
      focusable="false"
      style={sx(`height:${height}px;width:auto;flex:none;display:block;overflow:visible`)}
    >
      <g fill="none" stroke={line} strokeWidth={markStrokeWidth(height)} strokeMiterlimit={10}>
        <path d="M93.82,275.53H15.75c-6.32,0-11.44-5.12-11.44-11.44V36.51c0-6.32,5.12-11.44,11.44-11.44h78.07" />
        <path d="M165.14,275.53h78.18c6.32,0,11.44-5.12,11.44-11.44V36.51c0-3.16-1.28-6.02-3.35-8.09-3.27-3.27-7.33-3.35-8.09-3.35h-78.18" />
        <polygon
          fill={teal}
          points="215.72 59.04 215.72 101.59 130.03 178.7 129.54 178.34 129.05 178.7 43.35 101.59 43.35 59.04 129.54 136.59 215.72 59.04"
        />
        <polygon points="129.05 178.7 43.35 241.56 43.35 101.59 129.05 178.7" />
        <polygon points="215.72 101.59 215.72 241.56 130.03 178.7 215.72 101.59" />
        <polyline points="129.54 136.59 129.54 160.12 129.54 241.56" />
      </g>
      <circle fill={teal} cx="129.05" cy="25.07" r="21.49" />
    </svg>
  );
}
