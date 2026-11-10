import { Fragment, type ReactNode } from 'react';

/** Brand primary (--mk-primary). Inline because the site's styles are inline. */
const PRIMARY = '#0A5A4B';

/** "Agent" / "Agents" as whole words. The capture group keeps the matches in split(). */
const AGENT = /(\bAgents?\b)/;

/**
 * Sets every "Agent" / "Agents" in a headline in the primary colour.
 * Strings without the word come back untouched.
 */
export function accentAgents(text: string): ReactNode {
  const parts = text.split(AGENT);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} style={{ color: PRIMARY }}>
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}
