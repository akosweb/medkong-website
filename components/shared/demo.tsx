'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

/**
 * Open/closed state for the demo-request dialog, shared by every page that
 * opens it (the homepage and /providers). Page providers sit inside this one
 * so their CTAs can read `openDemo` without owning the dialog themselves.
 */
type DemoValues = { demoOpen: boolean; openDemo: () => void; closeDemo: () => void };

const DemoContext = createContext<DemoValues | null>(null);

export function DemoProvider({ children }: { children: React.ReactNode }) {
  const [demoOpen, setDemoOpen] = useState(false);
  const openDemo = useCallback(() => setDemoOpen(true), []);
  const closeDemo = useCallback(() => setDemoOpen(false), []);

  // Escape closes the dialog.
  useEffect(() => {
    if (!demoOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDemoOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [demoOpen]);

  const value = useMemo(() => ({ demoOpen, openDemo, closeDemo }), [demoOpen, openDemo, closeDemo]);
  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}

export function useDemo(): DemoValues {
  const ctx = useContext(DemoContext);
  if (!ctx) throw new Error('useDemo must be used inside <DemoProvider>');
  return ctx;
}

/** Stops a click inside the dialog from reaching the backdrop's close handler. */
export function stopPropagation(e: React.MouseEvent) {
  e.stopPropagation();
}
