import type { InputHTMLAttributes } from 'react';
import { sx } from '@/lib/css';

export type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  /** Mono label above the field, e.g. "Work email". */
  label: string;
};

export const FIELD_STYLE =
  'height:42px;padding:0 12px;border:1px solid #DDE2DC;border-radius:8px;font-family:inherit;font-size:14.5px;color:#0E1512;background:#fff;width:100%;box-sizing:border-box';
export const LABEL_STYLE =
  "font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.11em;text-transform:uppercase;color:#616961";

/** Text input: mono label above a 42px field with a #DDE2DC border and 8px radius. */
export function Field({ label, ...input }: FieldProps) {
  return (
    <label style={sx('display:grid;gap:7px')}>
      <span style={sx(LABEL_STYLE)}>{label}</span>
      <input {...input} style={sx(FIELD_STYLE)} />
    </label>
  );
}
