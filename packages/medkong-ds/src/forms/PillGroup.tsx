import { sx } from '@/lib/css';
import { LABEL_STYLE } from './Field';

export type PillGroupProps = {
  label: string;
  options: string[];
  /** Selected options. */
  value: string[];
  onChange?: (next: string[]) => void;
  /** `mono` for codes (jurisdictions), `text` for names (modules). */
  tone?: 'text' | 'mono';
};

/**
 * Multi-select toggle pills: teal fill when on, white with a #DDE2DC border
 * when off. Used for module interest and jurisdiction pickers.
 */
export function PillGroup({ label, options, value, onChange, tone = 'text' }: PillGroupProps) {
  const font = tone === 'mono' ? "font:500 12.5px/1 'IBM Plex Mono',monospace;letter-spacing:.04em;padding:10px 13px" : 'font-family:inherit;font-size:13px;font-weight:500;padding:9px 13px';
  return (
    <div style={sx('display:grid;gap:9px')}>
      <span style={sx(LABEL_STYLE)}>{label}</span>
      <div style={sx('display:flex;flex-wrap:wrap;gap:8px')}>
        {options.map((o) => {
          const on = value.includes(o);
          return (
            <button
              key={o}
              type="button"
              aria-pressed={on}
              onClick={() => onChange?.(on ? value.filter((x) => x !== o) : value.concat(o))}
              style={sx(
                `cursor:pointer;${font};border-radius:8px;transition:background .16s ease,border-color .16s ease;` +
                  (on ? 'background:#0A5A4B;border:1px solid #0A5A4B;color:#fff' : 'background:#fff;border:1px solid #DDE2DC;color:#5A625C')
              )}
            >
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}
