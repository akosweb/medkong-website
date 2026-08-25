import { sx } from '@/lib/css';

/**
 * SVG / PNG download links for one logo variation.
 *
 * The files under /public/brand are generated once from the source artwork —
 * the wordmark is outlined, so they carry no font dependency and render the
 * same wherever they're opened. PNGs are transparent, which means the inverse
 * variants look blank against a white preview; that's what you want for
 * placing them on a dark ground.
 */
export function DownloadButtons({ base, tone = 'light' }: { base: string; tone?: 'light' | 'dark' }) {
  const invert = tone === 'dark';

  const button = sx(
    'display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 10px;border-radius:6px;' +
      "font:500 10px/1 'IBM Plex Mono',monospace;letter-spacing:.09em;text-transform:uppercase;" +
      (invert
        ? 'border:1px solid rgba(255,255,255,.28);background:transparent;color:#fff'
        : 'border:1px solid #DDE2DC;background:#fff;color:#3A443E')
  );

  return (
    <span style={sx('display:flex;gap:8px;flex-wrap:wrap;margin-top:18px')}>
      {(['svg', 'png'] as const).map((ext) => (
        <a
          key={ext}
          href={`/brand/${base}.${ext}`}
          download
          className={invert ? 'mk-dl mk-dl-invert' : 'mk-dl'}
          style={button}
          aria-label={`Download ${base}.${ext}`}
        >
          <svg viewBox="0 0 16 16" aria-hidden="true" style={sx('width:11px;height:11px;flex:none')}>
            <path
              d="M8 1.5v9m0 0 3.2-3.2M8 10.5 4.8 7.3M2 12.5v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {ext}
        </a>
      ))}
    </span>
  );
}
