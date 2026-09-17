/**
 * Copy and sample data for the homepage (`/`) — the platform overview.
 *
 * Sources: "MedKong Provider Revenue Cycle — Eight-Module Workflow & Solution
 * Specification" and "MEDKONG for MACs — Workflow & Solution Specification"
 * (both Sept 2026). The provider spec's commercial guidance applies here too:
 * describe outcomes as capability, not figures, and never imply that payer
 * APIs, EDI, clearinghouse acknowledgments or ERA posting come pre-integrated.
 *
 * Resource names in the kit-manifest mock are the sandbox's own (the spec's
 * §13 implementation references); the tenant, versions and dates are sample.
 */

import type { TagKind } from './landing-data';

/* ------------------------------------------------------------------ hero */

export const HERO = {
  eyebrow: 'Deployable revenue cycle infrastructure',
  headline: 'Revenue cycle AI we deploy and you own.',
  lede:
    'MEDKONG is a kit of deployable modules for healthcare revenue cycle operations (eligibility, prior authorization, charge capture, coding review, claim QA, denials, posting and AR) and a review system for Medicare Administrative Contractors. AKOS deploys each module as versioned infrastructure into your environment. Your organization runs it, governs it and extends it. It is not a tenant you rent.',
  caption: 'The MEDKONG kit manifest for one deployment. Sample data.',
};

/** The kit as the manifest mock's sidebar shows it: version and state per module. */
export const KIT = [
  { name: 'Eligibility & Benefits', version: 'v1.4', deployed: true, active: false },
  { name: 'Prior Authorization', version: 'v2.1', deployed: true, active: true },
  { name: 'Charge Capture', version: 'v1.2', deployed: true, active: false },
  { name: 'Coding Review', version: 'v2.0', deployed: true, active: false },
  { name: 'Claim QA & Submission', version: 'v1.1', deployed: true, active: false },
  { name: 'Denials & Appeals', version: '', deployed: false, active: false },
  { name: 'Payment Posting', version: '', deployed: false, active: false },
  { name: 'AR Follow-up', version: '', deployed: false, active: false },
];

export const MANIFEST_KPIS = [
  { label: 'Object types', value: '6' },
  { label: 'Governed actions', value: '4' },
  { label: 'Functions & automations', value: '5' },
  { label: 'Applications', value: '2' },
];

/** What the selected module ships, and what belongs to the tenant. */
export const MANIFEST = [
  { kind: 'Object type', name: '[PA] Prior Auth Inquiry', src: 'MODULE', k: 'ok' },
  { kind: 'Object type', name: '[PA] Determination Run Output', src: 'MODULE', k: 'ok' },
  { kind: 'Object type', name: '[PA] Medicare Visit Note', src: 'MODULE', k: 'ok' },
  { kind: 'Action', name: '[PA] Run Determination', src: 'MODULE', k: 'ok' },
  { kind: 'Action', name: 'Attest medical necessity', src: 'MODULE', k: 'ok' },
  { kind: 'Function', name: 'Policy stack resolution: LCD, NCD, article', src: 'MODULE', k: 'ok' },
  { kind: 'Automation', name: 'Resume determination on missing input', src: 'MODULE', k: 'ok' },
  { kind: 'Application', name: 'Prior auth workbench (provider widgets)', src: 'MODULE', k: 'ok' },
  { kind: 'Configuration', name: 'Payer channels & jurisdiction contacts', src: 'YOURS', k: 'neutral' },
  { kind: 'Configuration', name: 'Authorization program: HCPCS in scope', src: 'YOURS', k: 'neutral' },
  { kind: 'Configuration', name: 'Reviewer roles & approval thresholds', src: 'YOURS', k: 'neutral' },
] satisfies ReadonlyArray<{ kind: string; name: string; src: string; k: TagKind }>;

export const CHANGELOG = [
  { ver: 'v2.1', date: 'Aug 14', note: 'Modifier and attestation checks added to the review path', by: 'AKOS' },
  { ver: 'config', date: 'Jul 09', note: 'Medicaid MCO submission channel added', by: 'Northside' },
  { ver: 'v2.0', date: 'Jul 02', note: 'Checkpoint and resume when a run stops for input', by: 'AKOS' },
  { ver: 'v1.3', date: 'May 21', note: 'Policy citations stored on every run output', by: 'AKOS' },
];

export const ENVIRONMENT = [
  { k: 'Environment', v: 'northside-prod' },
  { k: 'Deployed', v: 'Aug 14, 2026' },
  { k: 'Sources connected', v: 'EHR · PM · Clearinghouse · Documents' },
  { k: 'Lineage', v: 'Inputs, version, checkpoint and reviewer kept per run' },
];

/* -------------------------------------------------------------- trust band */

export const TRUST = {
  claim:
    'Ontology-backed objects, governed actions and full lineage: the infrastructure layer under every module, deployed into your environment.',
  chips: ['Deployed as code', 'Audit trail per action', 'Human in the loop'],
};

/* -------------------------------------------------------------- what it is */

export const WHAT_IT_IS = {
  eyebrow: 'What MEDKONG is',
  headline: 'Infrastructure you deploy. Not software you rent.',
  support:
    'MEDKONG is delivered as versioned modules: ontology objects, governed actions, functions, automations and operator applications, built by AKOS on Palantir Foundry and deployed into your environment. Your organization runs it, governs it and changes it.',
};

export const PILLARS = [
  {
    n: '01',
    title: 'Deployed, not hosted',
    body: 'Each module lands in your environment as versioned infrastructure. Your data stays in your systems of record and lands once, with lineage. There is no MEDKONG tenant holding your records.',
  },
  {
    n: '02',
    title: 'One record underneath',
    body: 'Patients, encounters, documentation, codes, authorizations, claims, payments and balances are objects every module reads and writes, not copies in module-specific silos.',
  },
  {
    n: '03',
    title: 'Yours to extend',
    body: 'Add an object type, a governed action or a work queue. Encode your payer policies and reviewer roles. The kit is the starting point; the operating model is yours.',
  },
  {
    n: '04',
    title: 'Start with one module',
    body: 'Deploy against the queue that hurts most, whether that is prior authorization, coding or claim QA, then add adjacent modules against the same foundation without rebuilding it.',
  },
];

/* ------------------------------------------------------------------ layers */

export const LAYERS_HEAD = {
  eyebrow: 'How every module is built',
  headline: 'Four layers on one governed record.',
  support:
    'An engine that prepares the work with its evidence. A workbench where an authorized person decides. Governance that sets who may act and what a rerun may touch. An audit record that keeps what happened.',
};

export const LAYERS = [
  {
    n: 'Layer 01',
    kicker: 'Preparation',
    title: 'Engines that prepare the work',
    body: 'Authorization determinations against the policy stack, ICD-10 suggestions validated against the index and tabular reference, clinical entities extracted from the transcript, the whole claim record checked before it leaves. Each result carries its evidence, its caveats and the exact inputs it still needs.',
  },
  {
    n: 'Layer 02',
    kicker: 'Decision',
    title: 'Workbenches where a person decides',
    body: 'Suggested codes enter a review state and wait for a coder. Determinations are verified or overridden step by step. Coders query providers in a thread tied to the visit. Nothing becomes operational truth without a named person behind it.',
  },
  {
    n: 'Layer 03',
    kicker: 'Governance',
    title: 'Controls on who may act, and on what',
    body: 'Sensitive edits run through authorized action types, never direct writes. Roles, permissions, thresholds and approval points are configured per organization. Once a person has reviewed a step, a machine refresh never overwrites it; a rerun resumes from its checkpoint, not from scratch.',
  },
  {
    n: 'Layer 04',
    kicker: 'Audit',
    title: 'A record that keeps what happened',
    body: 'Source documentation, evidence spans, policy citations, model reasoning, selected and rejected alternatives, reviewer identity, timestamps and revisions are structured records: reconstructable from the encounter, auditable by construction on Foundry.',
  },
];

/** Widget for layer 01: a determination run's result strip. */
export const DETERMINATION = {
  title: '[PA] Run Determination · 67906',
  status: 'AUTH REQUIRED',
  rows: [
    { k: 'Policy stack', v: 'LCD L35004 · Article A57618', risk: false },
    { k: 'Missing inputs', v: '2: attestation, pre-op photographs', risk: true },
    { k: 'Caveats', v: '1: coverage staff-attested, not verified', risk: false },
    { k: 'Checkpoint', v: 'Stopped at documentation · resumable', risk: false },
    { k: 'Run', v: 'v2.1 · 7f2a-41 · 14:32:07', risk: false },
  ],
};

/** Widget for layer 02: a suggested code awaiting a coder. */
export const SUGGESTION = {
  code: 'M54.50',
  desc: 'Low back pain, unspecified',
  status: 'SUGGESTED',
  confidence: '43% confidence',
  evidence: '…present today for his new patient consult for a chronic history of low back pain…',
  source: 'Evidence span · transcription',
};

/** Widget for layer 03: a governed action with its change count, before save. */
export const GOVERNED_ACTION = {
  title: 'Scrubbing · Edit Billing',
  role: 'Biller',
  checks: [
    { k: 'Actor role', v: 'Biller · authorized', ok: true },
    { k: 'Precondition', v: 'Codes reviewed · 3 approved', ok: true },
    { k: 'Reviewed steps', v: 'Protected on rerun', ok: true },
  ],
  changes: [
    { section: 'Patient', n: 0 },
    { section: 'Visit', n: 1 },
    { section: 'CPT', n: 2 },
    { section: 'Billing', n: 0 },
  ],
  total: 3,
};

/** Widget for layer 04: the audit trail on one visit. Rotates on the tick. */
export const LEDGER = [
  { time: '14:32:07', act: 'APPROVE CODE', what: 'M43.26 · evidence attached', who: 'k.osei' },
  { time: '14:31:58', act: 'RUN DETERMINATION', what: 'v2.1 · checkpoint: documentation', who: 'system' },
  { time: '14:31:44', act: 'QUERY PROVIDER', what: 'Thread #2 · awaiting reply', who: 'k.osei' },
  { time: '14:30:12', act: 'EDIT BILLING', what: 'CPT 27447 added · billed recalculated', who: 'r.diaz' },
  { time: '14:29:40', act: 'REJECT CODE', what: 'M54.16 · reason recorded', who: 'k.osei' },
];

/* ----------------------------------------------------------------- modules */

export const MODULES_HEAD = {
  eyebrow: 'The kit',
  headline: 'Eight modules. One revenue cycle.',
  support:
    'Deployable independently, in any order. Each answers one operational question and hands structured context to the next. The visit, documentation, codes, charges and payments stay linked to the same patient and encounter.',
  footnote:
    'Payer APIs, EDI transactions, clearinghouse acknowledgments, ERA posting and collection workflows are scoped and integrated per deployment, not assumed.',
};

export type Phase = 'Pre-service' | 'Mid-cycle' | 'Post-service';

export const PHASES: { phase: Phase; count: number; c: string }[] = [
  { phase: 'Pre-service', count: 2, c: '#4FA48F' },
  { phase: 'Mid-cycle', count: 3, c: '#12866F' },
  { phase: 'Post-service', count: 3, c: '#0A5A4B' },
];

export const MODULE_CARDS: { n: string; phase: Phase; name: string; question: string; output: string; risk?: boolean }[] = [
  {
    n: '01',
    phase: 'Pre-service',
    name: 'Eligibility & Benefits',
    question: 'Is the patient’s coverage active, and what payer context governs the planned service?',
    output: 'Verified coverage context, payer category and rank, exceptions, required follow-up.',
  },
  {
    n: '02',
    phase: 'Pre-service',
    name: 'Prior Authorization',
    question: 'Is authorization required, what policy and documentation apply, and is the packet ready?',
    output: 'Determination, missing inputs, policy evidence, documentation checklist, submission routing.',
  },
  {
    n: '03',
    phase: 'Mid-cycle',
    name: 'Charge Capture',
    question: 'Were all performed services captured from the encounter and translated into billable charges?',
    output: 'Encounter-linked transcription, CPT set, negotiated-price lookup, running charge total.',
  },
  {
    n: '04',
    phase: 'Mid-cycle',
    name: 'Coding Review',
    question: 'Do the diagnosis and procedure codes accurately represent the documented encounter?',
    output: 'Suggestions with evidence, coder approve / reject / query decisions, completed code set.',
  },
  {
    n: '05',
    phase: 'Mid-cycle',
    name: 'Claim QA & Submission',
    question: 'Is the entire claim record internally consistent and ready for the clearinghouse and payer?',
    output: 'Scrubbed claim record, corrected data, submission timestamp, clearinghouse status.',
  },
  {
    n: '06',
    phase: 'Post-service',
    name: 'Denials & Appeals',
    question: 'Why was the claim rejected or denied, what must change, and what is the next recovery action?',
    output: 'Exception work item, corrected record, supporting history, resubmission or appeal status.',
    risk: true,
  },
  {
    n: '07',
    phase: 'Post-service',
    name: 'Payment Posting',
    question: 'What was paid, by whom, by what method, and what balance remains?',
    output: 'Posted payment, notes, updated balance, encounter-level financial status.',
  },
  {
    n: '08',
    phase: 'Post-service',
    name: 'AR Follow-up',
    question: 'Which balances need intervention, who owns them, and what follow-up should happen next?',
    output: 'Prioritized balance queue, activity notes, status, next-action visibility.',
  },
];

/* ----------------------------------------------------------------- foundry */

export const FOUNDRY = {
  headline: 'MEDKONG is built on Palantir Foundry.',
  lede:
    'Foundry is the substrate every module deploys onto: the governed data foundation, the ontology, the action framework and the lineage that make an AI decision inside a revenue workflow traceable rather than plausible.',
  second:
    'It is also why the kit can be deployed rather than hosted. Modules are Foundry object types, actions, functions and applications, versioned and installed into your environment.',
  points: [
    {
      name: 'One governed data foundation',
      detail: 'Source systems land once, with lineage and permissions carried through every downstream use.',
    },
    {
      name: 'A shared operational ontology',
      detail: 'Patients, encounters, codes, authorizations, claims and accounts as objects every module reads and writes.',
    },
    {
      name: 'Governed actions, not direct writes',
      detail: 'Approve, reject, query, edit billing, post payment: each is an authorized action type with identity and time recorded.',
    },
    {
      name: 'Auditability by construction',
      detail: 'Every automated decision traceable to its inputs, its rule or model version, and its reviewer.',
    },
    {
      name: 'Your environment, your controls',
      detail: 'Roles, permissions, retention and approval points are configured in the platform you already govern.',
    },
  ],
  flow: [
    'Your systems of record · EHR, PM, clearinghouse, documents',
    'Foundry ontology & orchestration',
    'MEDKONG modules, deployed as code',
    'Operator workbenches',
  ],
};

/* -------------------------------------------------------------- deployment */

export const DEPLOYMENT_HEAD = {
  eyebrow: 'Deployment model',
  headline: 'What you own, and what AKOS delivers.',
  support:
    'MEDKONG is not a hosted tenant. It is deployed into your environment by AKOS engineers, module by module, and handed over as infrastructure your team operates.',
};

export const DEPLOYMENT = [
  {
    label: 'Runs in',
    value: 'Your environment',
    body: 'Deployed into your Foundry environment, against your systems of record. Nothing is copied to a MEDKONG cloud.',
  },
  {
    label: 'Delivered as',
    value: 'Versioned modules',
    body: 'Ontology object types, governed actions, functions, automations and operator applications, with a change log per release.',
  },
  {
    label: 'Your data',
    value: 'Stays where it is',
    body: 'EHR, PM, clearinghouse and document stores land once, with lineage and permissions carried through every downstream use.',
  },
  {
    label: 'Your rules',
    value: 'Encoded, not hard-coded',
    body: 'Payer channels, authorization programs, coding policies, thresholds and reviewer roles are configuration you own.',
  },
  {
    label: 'Your changes',
    value: 'First-class',
    body: 'Extend object types, add actions, rewire queues. Human-reviewed decisions are protected across reruns and upgrades.',
  },
  {
    label: 'Delivery',
    value: 'AKOS engineers, in your stack',
    body: 'Diagnose the queue, deploy the first module, encode your rules, run supervised, hand over. Then the next module.',
  },
];

/** The highlighted cell that completes the deployment ledger. */
export const DEPLOYMENT_CTA = {
  label: 'Next step',
  title: 'See it running against your queue.',
  body: 'A 45-minute walkthrough: the workbenches, the ontology behind them, and a scoping of what the first module would take in your environment.',
  primary: 'Request a demo',
  secondary: 'Talk to AKOS',
};

/* --------------------------------------------------------------- solutions */

export const SOLUTIONS_HEAD = {
  eyebrow: 'Two solutions, one kit',
  headline: 'Built for the provider side and the reviewer side.',
  support:
    'The same record, engines and governance serve two very different desks: the provider organization preparing and defending a claim, and the Medicare Administrative Contractor reviewing a prior authorization request.',
};

export const SOLUTIONS = [
  {
    n: '01',
    kicker: 'For providers, SNFs & multi-facility groups',
    title: 'Eight modules from pre-service to AR follow-up.',
    body: 'Eligibility, prior authorization, charge capture, coding review, claim QA, denials, payment posting and AR: one governed workflow in which each module hands structured context to the next. Start with the queue that hurts most.',
    chips: ['Pre-service', 'Mid-cycle', 'Post-service'],
    href: '/providers',
    cta: 'Explore the provider kit',
  },
  {
    n: '02',
    kicker: 'For Medicare Administrative Contractors',
    title: 'The system prepares the case. The reviewer decides.',
    body: 'A submitted prior authorization request becomes a structured, evidence-backed review case: seven review gates, policy-aware findings, and a reviewer in control of every determination, through to the decision, the UTN and the provider letter.',
    chips: ['Review Path · 7 gates', 'Decision · UTN · letter', 'Pilot-ready'],
    href: '/medicare-administrative-contractors',
    cta: 'See MEDKONG for MACs',
  },
];
