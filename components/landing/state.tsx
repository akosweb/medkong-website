'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import {
  useAutoScrollRails,
  usePageMotion,
  useScaleToFit,
  useSmoothAnchors,
} from '@/components/shared/motion';
import {
  AKOS_LAYERS,
  AR_BUCKETS,
  AR_WORK,
  CHIP,
  CHIP_ON_TEAL,
  CLAIM_HOLDS,
  CLAIM_TOWER,
  CODING_SUGGESTIONS,
  COVERAGE,
  DEFAULT_INSTALLED,
  DENIAL_MIX,
  FEED,
  FEED_KIND_COLOR,
  MODULES,
  type ModuleKey,
  PACKET,
  PALANTIR_POINTS,
  PRIOR_AUTH_QUEUE,
  SEGMENTS,
  SIDEBAR,
  STACK,
  STEPS,
  TABS,
  TAG,
  TRIAGE,
} from '@/lib/landing-data';

/**
 * Which of the two outcome treatments the page shows. The design file exposes
 * this as an author-facing toggle; here it's a build-time constant.
 */
const METRICS_MODE: 'Figures' | 'Capability language' = 'Figures';

/** Interest chips the demo form starts with. */
const DEFAULT_INTEREST: ModuleKey[] = ['pa', 'dn'];

function mmss(v: number): string {
  const x = ((v % 3600) + 3600) % 3600;
  return `${String(Math.floor(x / 60)).padStart(2, '0')}:${String(x % 60).padStart(2, '0')}`;
}

function commas(n: number): string {
  return Math.round(n).toLocaleString('en-US');
}

/**
 * The one-second tick that animates every mock on the page.
 *
 * Starts at 0 and only advances after mount, so the server-rendered HTML and
 * the first client render agree. `clock` is the one value that can't be
 * derived from the tick, so it stays blank until mounted.
 */
function useTick() {
  const [t, setT] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const iv = setInterval(() => setT((prev) => prev + 1), 1000);
    return () => clearInterval(iv);
  }, []);

  return { t, mounted };
}

/** Toggles `.mkstuck` on the sticky header once the page has scrolled. */
export function useStickyHeader() {
  useEffect(() => {
    const onScroll = () => {
      document.getElementById('mk-header')?.classList.toggle('mkstuck', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}

function useLandingState() {
  const { t, mounted } = useTick();
  const [installed, setInstalled] = useState<ModuleKey[]>(DEFAULT_INSTALLED);
  const [tab, setTab] = useState<string>('auth');
  const [demoOpen, setDemoOpen] = useState(false);
  const [interest, setInterest] = useState<ModuleKey[]>(DEFAULT_INTEREST);

  const openDemo = useCallback(() => setDemoOpen(true), []);
  const closeDemo = useCallback(() => setDemoOpen(false), []);

  const toggleModule = useCallback((k: ModuleKey) => {
    setInstalled((cur) => (cur.includes(k) ? cur.filter((x) => x !== k) : cur.concat(k)));
  }, []);

  const toggleInterest = useCallback((k: ModuleKey) => {
    setInterest((cur) => (cur.includes(k) ? cur.filter((x) => x !== k) : cur.concat(k)));
  }, []);

  // Escape closes the dialog.
  useEffect(() => {
    if (!demoOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDemoOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [demoOpen]);

  return useMemo(() => {
    const rot = Math.floor(t / 9) % PRIOR_AUTH_QUEUE.length;
    const feedRot = Math.floor(t / 3) % FEED.length;
    const autoPct = 62 + (t % 5);
    const circ = 2 * Math.PI * 44;
    const packetDone = 4 + (Math.floor(t / 5) % 2);
    const pct = Math.min(100, 62 + ((t * 3) % 39));
    const active = TABS.find((x) => x.k === tab) || TABS[0];

    return {
      /* ---- hero dashboard ---- */
      clock: mounted ? new Date().toTimeString().slice(0, 8) : '--:--:--',
      kpiAuth: commas(1284 + Math.floor(t / 3)),
      firstPass: `${(93.4 + (t % 7) * 0.1).toFixed(1)}%`,
      autoPct: `${autoPct}%`,
      ringDash: `${((circ * autoPct) / 100).toFixed(1)} ${circ.toFixed(1)}`,
      slaHero: mmss(1880 - t * 3),

      authRows: PRIOR_AUTH_QUEUE.map((_, i) => PRIOR_AUTH_QUEUE[(i + rot) % PRIOR_AUTH_QUEUE.length]).map(
        (r, i) => {
          const flipped = i === 0 && Math.floor(t / 6) % 3 === 2;
          return {
            id: r.id,
            payer: r.payer,
            svc: r.svc,
            sla: mmss(r.sla - t * 3),
            st: flipped ? 'SUBMITTED' : r.st,
            tag: TAG[flipped ? 'neutral' : r.k],
          };
        }
      ),

      sidebar: SIDEBAR.map((s) => ({
        name: s.name,
        count: s.count,
        style:
          'display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 9px;border-radius:7px;font-size:13px;' +
          (s.on ? 'background:#E3F0EB;color:#0A5A4B;font-weight:500' : 'color:#616961'),
      })),

      feed: FEED.map((_, i) => FEED[(i + feedRot) % FEED.length]).map((f) => ({
        time: f.time,
        kind: f.kind,
        text: f.text,
        kindStyle: `font:600 9.5px/1.4 'IBM Plex Mono',monospace;letter-spacing:.06em;color:${
          FEED_KIND_COLOR[f.kind] || '#5A625C'
        }`,
      })),

      /* ---- deployment configurator ---- */
      kitCount: installed.length,
      modules: MODULES.map((m) => {
        const on = installed.includes(m.k);
        return {
          name: m.name,
          phase: m.phase,
          toggle: () => toggleModule(m.k),
          dot: `width:9px;height:9px;border-radius:50%;flex:none;background:${on ? '#12866F' : '#D3D9D3'}`,
          style:
            'display:flex;flex-direction:column;gap:8px;align-items:flex-start;text-align:left;cursor:pointer;' +
            'padding:13px 14px;border-radius:10px;transition:background .18s ease,border-color .18s ease;' +
            (on
              ? 'background:#F1F8F5;border:1px solid #0A5A4B;color:#0A5A4B'
              : 'background:#fff;border:1px solid #E1E5E0;color:#5A625C'),
        };
      }),

      /* ---- static content, passed through so sections read from one place ---- */
      coverage: COVERAGE,
      segments: SEGMENTS,
      akosLayers: AKOS_LAYERS,
      palantirPoints: PALANTIR_POINTS,
      steps: STEPS.map((s) => ({
        n: s.n,
        name: s.name,
        body: s.body,
        rail: `flex:1;height:2px;background:${s.c}`,
      })),

      /* ---- workflow coverage ---- */
      denialMix: DENIAL_MIX.map((d) => ({
        code: d.code,
        amt: d.amt,
        bar: `display:block;height:100%;border-radius:4px;width:${d.pct}%;background:#B23A1B`,
      })),

      /* ---- workbench tabs ---- */
      tabs: TABS.map((x) => ({
        label: x.label,
        select: () => setTab(x.k),
        style:
          `cursor:pointer;background:transparent;border:0;border-bottom:2px solid ${
            x.k === tab ? '#0A5A4B' : 'transparent'
          };padding:12px 16px;margin-bottom:-1px;white-space:nowrap;font-weight:600;font-size:15px;letter-spacing:-0.01em;` +
          (x.k === tab ? 'color:#0A5A4B' : 'color:#616961'),
      })),
      tab: {
        title: active.title,
        pain: active.pain,
        capability: active.capability,
        slug: active.slug,
        state: active.state,
        proof: active.proof.map((p) => ({ t: p })),
      },
      isAuth: tab === 'auth',
      isCoding: tab === 'coding',
      isClaims: tab === 'claims',
      isDenials: tab === 'denials',
      isAr: tab === 'ar',

      packetRows: PACKET.map((p, i) => ({
        item: p.item,
        src: p.src,
        st: i < packetDone ? p.st : 'PENDING',
        tag: TAG[i < packetDone ? p.k : 'risk'],
      })),
      packetPct: `${pct}% assembled`,
      packetBar: `height:100%;border-radius:4px;width:${pct}%;background:#12866F;transition:width .8s linear`,

      codingRows: CODING_SUGGESTIONS,

      tower: CLAIM_TOWER.map((c) => ({
        stage: c.stage,
        note: c.note,
        n: commas(c.base + Math.floor((t * c.rate) / 4)),
      })),
      holds: CLAIM_HOLDS,
      batchId: `B-${2214 + Math.floor(t / 20)}`,

      triageRows: TRIAGE.map((d) => ({
        code: d.code,
        reason: d.reason,
        payer: d.payer,
        amt: d.amt,
        route: d.route,
        tag: TAG[d.k],
      })),

      arRows: AR_BUCKETS.map((a) => ({
        bucket: a.bucket,
        amt: a.amt,
        bar: `display:block;height:100%;border-radius:4px;width:${a.pct}%;background:${
          a.pct >= 60 ? '#12866F' : a.pct <= 26 ? '#B23A1B' : '#4FA48F'
        }`,
      })),
      arWork: AR_WORK.map((a) => ({
        acct: a.acct,
        driver: a.driver,
        age: a.age,
        bal: a.bal,
        action: a.action,
        tag: TAG[a.k],
      })),

      /* ---- architecture stack ---- */
      stack: STACK.map((s) => {
        const foundry = s.owner === 'Palantir Foundry';
        return {
          n: s.n,
          name: s.name,
          detail: s.detail,
          owner: s.owner,
          chips: s.chips.map((c) => ({ t: c, style: foundry ? CHIP_ON_TEAL : CHIP })),
          numColor: foundry ? '#0A5A4B' : '#6B736C',
          detailColor: foundry ? '#3A443E' : '#5A625C',
          ownerColor: foundry ? '#0A5A4B' : s.owner === 'Your environment' ? '#6B736C' : '#96301A',
          style:
            'border-radius:12px;padding:22px 24px;' +
            (foundry ? 'border:1px solid #0A5A4B;background:#F1F8F5' : 'border:1px solid #DDE2DC;background:#fff'),
        };
      }),

      /* ---- outcomes treatment ---- */
      showFigures: METRICS_MODE === 'Figures',
      showCapability: METRICS_MODE !== 'Figures',

      /* ---- demo dialog ---- */
      demoOpen,
      openDemo,
      closeDemo,
      interest,
      interestCount: interest.length,
      interestChips: MODULES.map((m) => {
        const on = interest.includes(m.k);
        return {
          name: m.name,
          toggle: () => toggleInterest(m.k),
          style:
            'cursor:pointer;font-family:inherit;font-size:13px;font-weight:500;padding:9px 13px;border-radius:8px;transition:background .16s ease,border-color .16s ease;' +
            (on
              ? 'background:#0A5A4B;border:1px solid #0A5A4B;color:#fff'
              : 'background:#fff;border:1px solid #DDE2DC;color:#5A625C'),
        };
      }),
    };
  }, [t, mounted, installed, tab, demoOpen, interest, openDemo, closeDemo, toggleModule, toggleInterest]);
}

export type LandingValues = ReturnType<typeof useLandingState>;

const LandingContext = createContext<LandingValues | null>(null);

export function LandingProvider({ children }: { children: React.ReactNode }) {
  const value = useLandingState();
  useStickyHeader();

  // Re-fit the scaled mocks whenever a tick or a tab change alters their height.
  useScaleToFit([value.tab.slug, value.kitCount]);

  usePageMotion('.mk-landing');
  useAutoScrollRails('.mk-landing');
  useSmoothAnchors();

  return <LandingContext.Provider value={value}>{children}</LandingContext.Provider>;
}

export function useLanding(): LandingValues {
  const ctx = useContext(LandingContext);
  if (!ctx) throw new Error('useLanding must be used inside <LandingProvider>');
  return ctx;
}

/** Stops a click inside the dialog from reaching the backdrop's close handler. */
export function stopPropagation(e: React.MouseEvent) {
  e.stopPropagation();
}
