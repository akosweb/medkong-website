import { sx } from '@/lib/css';

export type LiveDotProps = {
  /** Uppercase mono label beside the dot, e.g. "Live", "Sample data". Omit for the dot alone. */
  label?: string;
};

/**
 * The pulsing live indicator — the only always-on animation in the system.
 * One per panel, never more.
 */
export function LiveDot({ label }: LiveDotProps) {
  const dot = <span style={sx('display:inline-block;width:6px;height:6px;border-radius:50%;background:#12866F;animation:mkpulse 1.8s ease-in-out infinite')}></span>;
  if (!label) return dot;
  return (
    <span
      style={sx(
        "display:inline-flex;align-items:center;gap:7px;font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.1em;text-transform:uppercase;color:#0A5A4B"
      )}
    >
      {dot}
      {label}
    </span>
  );
}
