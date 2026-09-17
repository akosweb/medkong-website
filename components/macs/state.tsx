'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useStickyHeader } from '@/components/landing/state';
import { useTick } from '@/components/shared/tick';
import {
  useAutoScrollRails,
  usePageMotion,
  useScaleToFit,
  useSmoothAnchors,
} from '@/components/shared/motion';
import { BOARD_TABS, type BoardTab } from '@/lib/macs-data';

/** The id of the inline request form — every CTA on the page scrolls here. */
export const REQUEST_ID = 'request';

function useMacsState() {
  const { t, clock } = useTick();
  const [tab, setTab] = useState<BoardTab['k']>('queue');

  const goToRequest = useCallback(() => {
    document.getElementById(REQUEST_ID)?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    });
    // Land the visitor on the first field once the scroll settles.
    window.setTimeout(() => {
      document.querySelector<HTMLInputElement>(`#${REQUEST_ID} input[name="name"]`)?.focus({ preventScroll: true });
    }, 600);
  }, []);

  return useMemo(() => {
    const active = BOARD_TABS.find((x) => x.k === tab) || BOARD_TABS[0];
    // `t` keeps the clock re-rendering each second.
    void t;

    return {
      clock,
      goToRequest,

      tabs: BOARD_TABS.map((x) => ({
        label: x.label,
        select: () => setTab(x.k),
        style:
          `cursor:pointer;background:transparent;border:0;border-bottom:2px solid ${
            x.k === tab ? '#0A5A4B' : 'transparent'
          };padding:12px 16px;margin-bottom:-1px;white-space:nowrap;font-weight:600;font-size:15px;letter-spacing:-0.01em;font-family:inherit;` +
          (x.k === tab ? 'color:#0A5A4B' : 'color:#616961'),
      })),
      tab: active,
      isQueue: tab === 'queue',
      isPolicy: tab === 'policy',
      isLedger: tab === 'ledger',
      isDecision: tab === 'decision',
    };
  }, [t, clock, tab, goToRequest]);
}

export type MacsValues = ReturnType<typeof useMacsState>;

const MacsContext = createContext<MacsValues | null>(null);

export function MacsProvider({ children }: { children: React.ReactNode }) {
  const value = useMacsState();
  useStickyHeader();

  // Re-fit the scaled mocks when the explorer tab changes their height.
  useScaleToFit([value.tab.k]);

  usePageMotion('.mk-macs');
  useAutoScrollRails('.mk-macs');
  useSmoothAnchors();

  return <MacsContext.Provider value={value}>{children}</MacsContext.Provider>;
}

export function useMacs(): MacsValues {
  const ctx = useContext(MacsContext);
  if (!ctx) throw new Error('useMacs must be used inside <MacsProvider>');
  return ctx;
}
