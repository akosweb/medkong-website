'use client';

import { createContext, useContext, useMemo } from 'react';
import { useStickyHeader } from '@/components/landing/state';
import { useAutoScrollRails, usePageMotion, useScaleToFit, useSmoothAnchors } from '@/components/shared/motion';
import { useTick } from '@/components/shared/tick';
import { LEDGER } from '@/lib/home-data';

/** Seconds behind the newest ledger row, per visible row. */
const GAPS = [0, 9, 23, 112, 144];

function hms(v: number): string {
  const x = ((v % 86400) + 86400) % 86400;
  const p = (n: number) => String(n).padStart(2, '0');
  return `${p(Math.floor(x / 3600))}:${p(Math.floor((x % 3600) / 60))}:${p(x % 60)}`;
}

/**
 * Homepage state: the one-second tick for the title-bar clock and the audit
 * ledger rotation. The demo dialog is owned by <DemoProvider> above this.
 */
function useHomeState() {
  const { t, clock } = useTick();

  return useMemo(() => {
    // A new ledger row lands every 4s. Times are derived from the tick so the
    // newest row is always on top and the trail reads in order.
    const step = Math.floor(t / 4);
    const rot = step % LEDGER.length;
    const base = 14 * 3600 + 32 * 60 + 7 + step * 4;
    return {
      clock,
      ledger: LEDGER.slice(0, 5).map((_, i) => ({
        ...LEDGER[(i + rot) % LEDGER.length],
        time: hms(base - GAPS[i]),
      })),
    };
  }, [t, clock]);
}

export type HomeValues = ReturnType<typeof useHomeState>;

const HomeContext = createContext<HomeValues | null>(null);

export function HomeProvider({ children }: { children: React.ReactNode }) {
  const value = useHomeState();
  useStickyHeader();
  useScaleToFit();
  usePageMotion('.mk-home');
  useAutoScrollRails('.mk-home');
  useSmoothAnchors();

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
}

export function useHome(): HomeValues {
  const ctx = useContext(HomeContext);
  if (!ctx) throw new Error('useHome must be used inside <HomeProvider>');
  return ctx;
}
