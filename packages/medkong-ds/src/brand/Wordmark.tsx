import { MedkongMark } from '@/components/shared/MedkongMark';
import { sx } from '@/lib/css';

export type WordmarkProps = {
  /** `light` for white grounds (MED teal, KONG ink), `dark` for ink grounds, `onTeal` for primary teal (all white). */
  tone?: 'light' | 'dark' | 'onTeal';
  /** Mark height in px; the wordmark scales with it. Minimum 26. */
  height?: number;
  /** Wrap the lockup in a link (e.g. `/`). */
  href?: string;
};

/**
 * The MEDKONG lockup: icon mark plus the uppercase wordmark, MED in teal and
 * KONG in ink. Use it in headers, footers and app chrome; never spell the name
 * "MedKong" in copy.
 */
export function Wordmark({ tone = 'light', height = 30, href }: WordmarkProps) {
  const med = tone === 'light' ? '#0A5A4B' : tone === 'dark' ? '#5FBFA6' : '#fff';
  const kong = tone === 'light' ? '#0E1512' : '#fff';
  const size = Math.round(height * 0.67);
  const inner = (
    <span
      style={sx(
        `display:inline-flex;align-items:center;gap:${Math.round(height * 0.37)}px;font-weight:600;font-size:${size}px;letter-spacing:-0.02em;color:inherit`
      )}
    >
      <MedkongMark height={height} tone={tone} />
      <span style={sx('letter-spacing:0.01em')}>
        <span style={sx(`color:${med}`)}>MED</span>
        <span style={sx(`color:${kong}`)}>KONG</span>
      </span>
    </span>
  );
  return href ? (
    <a href={href} aria-label="MEDKONG home" style={sx('display:inline-flex;color:inherit')}>
      {inner}
    </a>
  ) : (
    inner
  );
}
