import { sx } from '@/lib/css';
import { Eyebrow } from './Eyebrow';

export type SectionHeadProps = {
  /** Mono eyebrow above the headline. */
  eyebrow: string;
  /** Declarative sentence, full stop, under 10 words. */
  headline: string;
  /** One or two sentences; when set the head becomes two columns, headline left and support right. */
  support?: string;
  /** `end` when both columns are short text; `start` when either side holds a stack, list or panel. */
  align?: 'end' | 'start';
  /** Set when the head sits on the primary-teal band. */
  onTeal?: boolean;
};

/**
 * Every section opens the same way: eyebrow, tight H2, one support line.
 * With `support` the headline goes left and the support right (`.mkcols`, so
 * they stack below 1020px).
 */
export function SectionHead({ eyebrow, headline, support, align = 'end', onTeal = false }: SectionHeadProps) {
  const h2 = `font-weight:600;font-size:clamp(32px,3.7vw,52px);line-height:1.06;letter-spacing:-0.032em;margin:0;color:${onTeal ? '#fff' : '#0E1512'}`;
  return (
    <>
      <Eyebrow variant={onTeal ? 'onTeal' : 'plain'}>{eyebrow}</Eyebrow>
      {support ? (
        <div
          className="mkcols"
          style={sx(
            `display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);gap:24px clamp(32px,6vw,90px);align-items:${align};margin-top:18px`
          )}
        >
          <h2 style={sx(h2)}>{headline}</h2>
          <p style={sx(`font-size:17px;line-height:1.62;margin:0;color:${onTeal ? '#CFE6DE' : '#3A443E'}`)}>{support}</p>
        </div>
      ) : (
        <h2 style={sx(h2 + ';margin-top:18px;max-width:26ch')}>{headline}</h2>
      )}
    </>
  );
}
