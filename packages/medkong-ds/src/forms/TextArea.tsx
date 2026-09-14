import type { TextareaHTMLAttributes } from 'react';
import { sx } from '@/lib/css';
import { LABEL_STYLE } from './Field';

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};

/** Multi-line field with the mono label; resizes vertically. */
export function TextArea({ label, rows = 3, ...rest }: TextAreaProps) {
  return (
    <label style={sx('display:grid;gap:7px')}>
      <span style={sx(LABEL_STYLE)}>{label}</span>
      <textarea
        rows={rows}
        {...rest}
        style={sx(
          'padding:11px 12px;border:1px solid #DDE2DC;border-radius:8px;font-family:inherit;font-size:14.5px;line-height:1.55;color:#0E1512;background:#fff;resize:vertical;width:100%;box-sizing:border-box'
        )}
      />
    </label>
  );
}
