'use client';

import { useEffect, useState } from 'react';

/**
 * The one-second tick that animates every mock on a page.
 *
 * Starts at 0 and only advances after mount, so the server-rendered HTML and
 * the first client render agree. The wall clock is the one value that can't
 * be derived from the tick, so `clock` reads `--:--:--` until mounted.
 */
export function useTick() {
  const [t, setT] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const iv = setInterval(() => setT((prev) => prev + 1), 1000);
    return () => clearInterval(iv);
  }, []);

  return { t, mounted, clock: mounted ? new Date().toTimeString().slice(0, 8) : '--:--:--' };
}
