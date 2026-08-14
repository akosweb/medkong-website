'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import {
  useAutoScrollRails,
  usePageMotion,
  useScaleToFit,
  useSmoothAnchors,
} from '@/components/shared/motion';
import { FEED, FEED_KIND_COLOR } from '@/lib/landing-data';

/**
 * The design guide reuses the landing page's live-mock behaviour at a smaller
 * scale: one tick per second driving the sample dashboard, meters and feed.
 * Kept separate from the landing state so the guide can be read (and edited)
 * without pulling in the configurator or the demo dialog.
 */

/** The guide shows a 5-row feed; the landing page shows 6. */
const GUIDE_FEED = FEED.slice(0, 5);

function mmss(v: number): string {
  const x = ((v % 3600) + 3600) % 3600;
  return `${String(Math.floor(x / 60)).padStart(2, '0')}:${String(x % 60).padStart(2, '0')}`;
}

function commas(n: number): string {
  return Math.round(n).toLocaleString('en-US');
}

function useGuideValues() {
  const [t, setT] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const iv = setInterval(() => setT((prev) => prev + 1), 1000);
    return () => clearInterval(iv);
  }, []);

  return useMemo(() => {
    const rot = Math.floor(t / 3) % GUIDE_FEED.length;
    const autoPct = 62 + (t % 5);
    const circ = 2 * Math.PI * 44;
    const pct = Math.min(100, 62 + ((t * 3) % 39));

    return {
      clock: mounted ? new Date().toTimeString().slice(0, 8) : '--:--:--',
      kpi: commas(1284 + Math.floor(t / 3)),
      sla: mmss(1880 - t * 3),
      synced: commas(12840217 + t * 63),
      autoPct: `${autoPct}%`,
      ringDash: `${((circ * autoPct) / 100).toFixed(1)} ${circ.toFixed(1)}`,
      packetPct: `${pct}%`,
      packetBar: `height:100%;border-radius:4px;width:${pct}%;background:#12866F;transition:width .8s linear`,
      feed: GUIDE_FEED.map((_, i) => GUIDE_FEED[(i + rot) % GUIDE_FEED.length]).map((f) => ({
        time: f.time,
        kind: f.kind,
        text: f.text,
        kindStyle: `font:600 9.5px/1.4 'IBM Plex Mono',monospace;letter-spacing:.06em;color:${
          FEED_KIND_COLOR[f.kind] || '#5A625C'
        }`,
      })),
    };
  }, [t, mounted]);
}

type GuideValues = ReturnType<typeof useGuideValues>;

const GuideContext = createContext<GuideValues | null>(null);

export function GuideProvider({ children }: { children: React.ReactNode }) {
  const value = useGuideValues();

  usePageMotion('.mk-guide');
  useAutoScrollRails('.mk-guide');
  useSmoothAnchors();
  // The mock UI specimen follows the same "scale, never reflow" rule as the
  // mockups on the landing page. The tick changes its content, not its height.
  useScaleToFit();

  return <GuideContext.Provider value={value}>{children}</GuideContext.Provider>;
}

export function useGuide(): GuideValues {
  const ctx = useContext(GuideContext);
  if (!ctx) throw new Error('useGuide must be used inside <GuideProvider>');
  return ctx;
}
