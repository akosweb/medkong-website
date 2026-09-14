import type { SelectHTMLAttributes } from 'react';
import { sx } from '@/lib/css';
import { FIELD_STYLE, LABEL_STYLE } from './Field';

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  /** Placeholder option shown while `value` is empty. */
  placeholder?: string;
  options: string[];
};

/** Native select styled as a 42px field; the placeholder reads in muted grey until a value is picked. */
export function Select({ label, placeholder = 'Select', options, value, ...rest }: SelectProps) {
  return (
    <label style={sx('display:grid;gap:7px')}>
      <span style={sx(LABEL_STYLE)}>{label}</span>
      <select value={value} {...rest} style={{ ...sx(FIELD_STYLE), ...(value ? null : { color: '#6B736C' }) }}>
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
