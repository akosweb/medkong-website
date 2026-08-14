/**
 * Content and synthetic demo data for the MEDKONG landing page, transcribed
 * from `MedKong Landing v3.dc.html`. All figures here are illustrative and
 * de-identified — the page says so on the hero mock.
 */

/** Status pill styles, keyed the way the design source keys them. */
export const TAG = {
  ok: "font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.05em;padding:5px 9px;border-radius:5px;background:#E3F0EB;color:#0A5A4B;justify-self:start;white-space:nowrap",
  risk: "font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.05em;padding:5px 9px;border-radius:5px;background:#FBE9E3;color:#96301A;justify-self:start;white-space:nowrap",
  neutral:
    "font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.05em;padding:5px 9px;border-radius:5px;background:#F1F4F1;color:#5A625C;justify-self:start;white-space:nowrap",
} as const;

export type TagKind = keyof typeof TAG;

export const CHIP =
  "font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.05em;padding:6px 9px;border-radius:5px;background:#F1F4F1;color:#5A625C;white-space:nowrap";

export const CHIP_ON_TEAL =
  "font:500 10.5px/1 'IBM Plex Mono',monospace;letter-spacing:.05em;padding:6px 9px;border-radius:5px;background:#E3F0EB;color:#0A5A4B;white-space:nowrap";

export const PRIOR_AUTH_QUEUE = [
  { id: 'PA-40912', payer: 'Aetna', svc: 'MRI lumbar · 72148', sla: 742, st: 'READY', k: 'ok' },
  { id: 'PA-40907', payer: 'UHC', svc: 'Knee arthroplasty · 27447', sla: 1880, st: 'REVIEW', k: 'risk' },
  { id: 'PA-40903', payer: 'BCBS', svc: 'Sleep study · 95810', sla: 410, st: 'SUBMITTED', k: 'neutral' },
  { id: 'PA-40898', payer: 'Humana', svc: 'Infliximab infusion · J1745', sla: 2620, st: 'READY', k: 'ok' },
  { id: 'PA-40894', payer: 'Cigna', svc: 'Cardiac CTA · 75574', sla: 995, st: 'REVIEW', k: 'risk' },
  { id: 'PA-40889', payer: 'Medicaid', svc: 'Spinal fusion · 22633', sla: 3105, st: 'SUBMITTED', k: 'neutral' },
] satisfies ReadonlyArray<{ id: string; payer: string; svc: string; sla: number; st: string; k: TagKind }>;

export const SIDEBAR = [
  { name: 'Overview', count: '', on: true },
  { name: 'Prior auth', count: '48', on: true },
  { name: 'Coding review', count: '112', on: false },
  { name: 'Claim QA', count: '2.8K', on: false },
  { name: 'Denials', count: '63', on: true },
  { name: 'Posting', count: '—', on: false },
  { name: 'AR follow-up', count: '391', on: true },
  { name: 'Audit trail', count: '', on: true },
];

export const FEED = [
  { time: '14:32:07', kind: 'DRAFT', text: 'Appeal letter drafted — CO-197, UHC, $41,280' },
  { time: '14:32:04', kind: 'FLAG', text: 'Policy criteria unmet — PA-40894' },
  { time: '14:32:01', kind: 'PASS', text: 'Claim batch B-2214 · 2,609 submitted' },
  { time: '14:31:58', kind: 'MATCH', text: 'Remit 835 matched to 1,204 claims' },
  { time: '14:31:52', kind: 'SCAN', text: 'Payer policy MP-0142 updated — 3 cases requeued' },
  { time: '14:31:44', kind: 'PASS', text: 'Auth approved — PA-40881, Aetna' },
];

export const FEED_KIND_COLOR: Record<string, string> = {
  DRAFT: '#0A5A4B',
  FLAG: '#B23A1B',
  PASS: '#12866F',
  MATCH: '#0A5A4B',
  SCAN: '#616961',
};

export const DENIAL_MIX = [
  { code: 'CO-197', pct: 100, amt: '$41.3K' },
  { code: 'CO-11', pct: 68, amt: '$27.4K' },
  { code: 'CO-16', pct: 47, amt: '$18.9K' },
  { code: 'CO-45', pct: 24, amt: '$9.6K' },
];

export const CODING_SUGGESTIONS = [
  { kind: 'Diagnosis', txt: 'Add I50.32 — chronic diastolic HF documented', conf: '0.94' },
  { kind: 'Specificity', txt: 'Laterality missing on 25600 wrist procedure', conf: '0.88' },
  { kind: 'Level', txt: '99214 supported by MDM, not time', conf: '0.91' },
  { kind: 'Bundling', txt: 'Unbundle 80053 from panel — modifier 91', conf: '0.79' },
];

export const AR_BUCKETS = [
  { bucket: '0–30', pct: 100, amt: '$1.84M' },
  { bucket: '31–60', pct: 63, amt: '$1.16M' },
  { bucket: '61–90', pct: 42, amt: '$774K' },
  { bucket: '91–120', pct: 32, amt: '$581K' },
  { bucket: '120+', pct: 26, amt: '$484K' },
];

/** The eight kit modules. `k` is the stable key used by the configurator and the demo form. */
export const MODULES = [
  { k: 'el', name: 'Eligibility & Benefits', phase: 'Pre-service' },
  { k: 'pa', name: 'Prior Authorization', phase: 'Pre-service' },
  { k: 'cc', name: 'Charge Capture', phase: 'Mid-cycle' },
  { k: 'cd', name: 'Coding Review', phase: 'Mid-cycle' },
  { k: 'cq', name: 'Claim QA & Submission', phase: 'Mid-cycle' },
  { k: 'dn', name: 'Denials & Appeals', phase: 'Post-service' },
  { k: 'pp', name: 'Payment Posting', phase: 'Post-service' },
  { k: 'ar', name: 'AR Follow-up', phase: 'Post-service' },
] as const;

export type ModuleKey = (typeof MODULES)[number]['k'];

export const MODULE_NAME_BY_KEY: Record<string, string> = Object.fromEntries(
  MODULES.map((m) => [m.k, m.name])
);

/** Which modules the configurator starts with. */
export const DEFAULT_INSTALLED: ModuleKey[] = ['pa', 'dn', 'ar'];

export const COVERAGE = [
  {
    n: '02',
    name: 'Patient access & eligibility',
    outcome: 'Coverage, benefits and estimates resolved before the visit, not after the denial.',
    metricLabel: 'Verified pre-visit',
    metric: '96%',
  },
  {
    n: '03',
    name: 'Charge capture support',
    outcome: 'Missing and mismatched charges surfaced against documentation while the encounter is fresh.',
    metricLabel: 'Charges recovered / mo',
    metric: '$212K',
  },
  {
    n: '04',
    name: 'Coding & documentation review',
    outcome: 'Code suggestions cited back to the note, specificity gaps flagged for the coder.',
    metricLabel: 'Coder throughput',
    metric: '+31%',
  },
  {
    n: '05',
    name: 'Claim QA & submission',
    outcome: 'Claims checked against your own denial history, then held or released with a reason.',
    metricLabel: 'Predicted denials held',
    metric: '74',
  },
  {
    n: '07',
    name: 'Payment posting & reconciliation',
    outcome: 'Remits matched, variances explained against contract, exceptions queued not buried.',
    metricLabel: 'Auto-posted',
    metric: '88%',
  },
  {
    n: '08',
    name: 'Reporting, audit & oversight',
    outcome: 'Every automated action carries inputs, rationale and reviewer for audit.',
    metricLabel: 'Actions traced',
    metric: '100%',
  },
];

export const AKOS_LAYERS = [
  {
    name: 'Integration',
    detail: 'Connectors and pipelines against EHR, PM, clearinghouse, payer portals and document stores.',
  },
  {
    name: 'Ontology',
    detail:
      'A canonical model of patients, encounters, claims, payers and dollars that holds against messy source data.',
  },
  {
    name: 'Workflow & agents',
    detail: 'Agents operating inside approval paths, with queues, thresholds and handoffs made explicit.',
  },
  {
    name: 'Governance',
    detail: 'Permissioning, lineage, audit trails and human-in-the-loop controls designed in, not bolted on.',
  },
  {
    name: 'Applications',
    detail: 'Operator-facing workbenches built for a shift of real work, not for a demo.',
  },
];

export const PALANTIR_POINTS = [
  {
    name: 'One governed data foundation',
    detail: 'Source systems land once, with lineage and permissions carried through every downstream use.',
  },
  {
    name: 'A shared operational ontology',
    detail: 'Claims, encounters, payers and accounts as objects every module reads and writes.',
  },
  {
    name: 'Orchestration and decision support',
    detail: 'Workflows, queues and agent actions run against live objects, not exported spreadsheets.',
  },
  {
    name: 'Auditability by construction',
    detail: 'Every automated decision traceable to inputs, rule or model, and reviewer.',
  },
  {
    name: 'Fragmented systems, one layer',
    detail: 'A dozen systems of record become one place the revenue cycle is operated from.',
  },
];

export const PACKET = [
  { item: 'Clinical notes, last 90 days', src: 'EHR', st: 'ATTACHED', k: 'ok' },
  { item: 'Conservative therapy history, 14 wks', src: 'EHR + documents', st: 'ATTACHED', k: 'ok' },
  { item: 'Imaging report, 2026-07-28', src: 'Radiology', st: 'ATTACHED', k: 'ok' },
  { item: 'Payer policy criteria match', src: 'Policy library', st: 'MATCHED', k: 'ok' },
  { item: 'Ordering provider attestation', src: 'Workflow', st: 'PENDING', k: 'risk' },
] satisfies ReadonlyArray<{ item: string; src: string; st: string; k: TagKind }>;

export const TRIAGE = [
  { code: 'CO-197', reason: 'Auth absent — payer rule changed 07/01', payer: 'UHC', amt: '$41,280', route: 'APPEAL', k: 'risk' },
  { code: 'CO-16', reason: 'Attachment missing on submission', payer: 'Aetna', amt: '$18,905', route: 'CORRECT', k: 'ok' },
  { code: 'CO-11', reason: 'Dx / procedure mismatch at coding', payer: 'BCBS', amt: '$27,440', route: 'CODING', k: 'ok' },
  { code: 'CO-45', reason: 'Contracted rate variance', payer: 'Humana', amt: '$9,615', route: 'CONTRACT', k: 'neutral' },
  { code: 'CO-29', reason: 'Filing limit — 3 days remaining', payer: 'Medicaid', amt: '$6,140', route: 'ESCALATE', k: 'risk' },
  { code: 'CO-97', reason: 'Bundled into global period', payer: 'Cigna', amt: '$4,320', route: 'WRITE-OFF', k: 'neutral' },
] satisfies ReadonlyArray<{ code: string; reason: string; payer: string; amt: string; route: string; k: TagKind }>;

export const CLAIM_TOWER = [
  { stage: 'Scrubbed', base: 2841, rate: 9, note: 'All rules passed' },
  { stage: 'Held by QA', base: 74, rate: 1, note: 'Predicted denial' },
  { stage: 'Submitted', base: 2609, rate: 7, note: 'Two clearinghouses' },
  { stage: 'Acknowledged', base: 2447, rate: 6, note: '277CA received' },
];

export const CLAIM_HOLDS = [
  { claim: 'CLM-88214', flag: 'Missing modifier 59 — pattern denied 14×', risk: 'HIGH', action: 'FIX & RELEASE' },
  { claim: 'CLM-88190', flag: 'Auth number absent on 27447', risk: 'HIGH', action: 'ATTACH AUTH' },
  { claim: 'CLM-88177', flag: 'Secondary payer sequence incorrect', risk: 'MED', action: 'RESEQUENCE' },
];

export const AR_WORK = [
  { acct: 'ACC-771204', driver: 'UHC · underpayment vs contract', age: '74d', bal: '$18,420', action: 'RECONSIDER', k: 'ok' },
  { acct: 'ACC-770988', driver: 'Aetna · no remit received', age: '52d', bal: '$12,905', action: 'STATUS CHECK', k: 'ok' },
  { acct: 'ACC-770412', driver: 'BCBS · appeal pending, day 21', age: '96d', bal: '$27,440', action: 'FOLLOW UP', k: 'risk' },
  { acct: 'ACC-769877', driver: 'Patient balance after insurance', age: '38d', bal: '$1,940', action: 'STATEMENT', k: 'neutral' },
  { acct: 'ACC-769320', driver: 'Medicaid MCO · eligibility retro', age: '118d', bal: '$8,610', action: 'REBILL', k: 'ok' },
  { acct: 'ACC-768991', driver: 'Humana · filing limit near', age: '132d', bal: '$4,105', action: 'ESCALATE', k: 'risk' },
] satisfies ReadonlyArray<{ acct: string; driver: string; age: string; bal: string; action: string; k: TagKind }>;

export const STACK = [
  {
    n: '06',
    name: 'Operator surfaces',
    owner: 'MedKong',
    detail: 'Workbenches, worklists and dashboards for auth, coding, claims, denials, posting and AR.',
    chips: ['Workbenches', 'Worklists', 'Dashboards'],
  },
  {
    n: '05',
    name: 'AI agents & workflow engines',
    owner: 'MedKong',
    detail: 'Drafting, classification, checking and queue logic, each scoped to a module and an approval path.',
    chips: ['Auth agent', 'Appeal agent', 'QA engine'],
  },
  {
    n: '04',
    name: 'Analytics, governance & monitoring',
    owner: 'MedKong + Foundry',
    detail: 'Automation rate, throughput, accuracy, intervention rate, and a complete audit trail per action.',
    chips: ['Audit trail', 'Scorecards', 'Alerting'],
  },
  {
    n: '03',
    name: 'Ontology / canonical model',
    owner: 'Palantir Foundry',
    detail: 'Patients, encounters, claims, remits, payers and accounts as governed objects with lineage.',
    chips: ['Objects', 'Links', 'Lineage'],
  },
  {
    n: '02',
    name: 'Integration layer',
    owner: 'Palantir Foundry',
    detail: 'Pipelines and connectors into systems of record, clearinghouses, payer channels and document stores.',
    chips: ['HL7 / FHIR', '837 / 835', 'Documents'],
  },
  {
    n: '01',
    name: 'Source systems & documents',
    owner: 'Your environment',
    detail: 'EHR, practice management, billing, clearinghouse, payer portals, scanned and faxed documents.',
    chips: ['EHR', 'PM', 'Clearinghouse'],
  },
];

export const SEGMENTS = [
  {
    n: '01',
    kicker: 'HEALTH SYSTEMS',
    title: 'Start where the payer mix hurts most',
    body: 'Many facilities, one revenue cycle, and a decade of accumulated systems. Deploy against the worst queue without a multi-year platform program.',
    statA: '1',
    labelA: 'Module to start',
    statB: '0',
    labelB: 'Systems replaced',
    chip: 'Enterprise',
  },
  {
    n: '02',
    kicker: 'PROVIDER GROUPS & MSOs',
    title: 'One operational view across acquired practices',
    body: 'Growth by acquisition leaves several PM systems and no common view. The ontology gives you one, and modules run across all of them.',
    statA: '4+',
    labelA: 'PM systems unified',
    statB: '1',
    labelB: 'Work queue',
    chip: 'Multi-entity',
  },
  {
    n: '03',
    kicker: 'IN-HOUSE RCM TEAMS',
    title: 'Absorb the assembly work, keep the judgment',
    body: 'Headcount is capped and volume is not. Modules take the assembly and checking so experienced staff spend the day on exceptions and payers.',
    statA: '38%',
    labelA: 'Fewer touches',
    statB: '100%',
    labelB: 'Actions traced',
    chip: 'Operations',
  },
  {
    n: '04',
    kicker: 'HEALTHCARE IT & TRANSFORMATION',
    title: 'Answerable AI, not asserted AI',
    body: 'You are accountable for integration, governance and what the AI actually did. Foundry lineage and permissioning make that auditable.',
    statA: 'RBAC',
    labelA: 'Access model',
    statB: 'Full',
    labelB: 'Lineage',
    chip: 'Governance',
  },
];

export const STEPS = [
  {
    n: '01',
    name: 'Pick the queue',
    body: 'Two weeks of diagnostic on volumes, touches and leakage. One module chosen on numbers.',
    c: '#12866F',
  },
  {
    n: '02',
    name: 'Connect the systems',
    body: 'EHR, PM, clearinghouse and documents mapped into the ontology, with access rules from day one.',
    c: '#4FA48F',
  },
  {
    n: '03',
    name: 'Encode the rules',
    body: 'Payer policies, work queues, thresholds and approval paths configured to how your team works.',
    c: '#84BFAE',
  },
  {
    n: '04',
    name: 'Run it live',
    body: 'Operators work in the module with automation supervised, then progressively released as accuracy holds.',
    c: '#B2D5C9',
  },
  {
    n: '05',
    name: 'Add the next module',
    body: 'The foundation is built. Adjacent workflows install against the same model and governance.',
    c: '#D6E7DF',
  },
];

export type WorkbenchTab = {
  k: string;
  label: string;
  slug: string;
  state: string;
  title: string;
  pain: string;
  capability: string;
  proof: string[];
};

export const TABS: WorkbenchTab[] = [
  {
    k: 'auth',
    label: 'Prior Auth',
    slug: 'PRIOR_AUTH / CASE DETAIL',
    state: 'Assembling',
    title: 'Authorizations that clear before the appointment does.',
    pain: 'Pre-auth fails on assembly, not judgment: the requirement is buried in a payer policy, the evidence is in three systems, and the clock started yesterday.',
    capability:
      'The workbench determines whether auth is required, assembles the clinical packet with citations, submits through the payer channel and tracks the clock — putting a human only on the decision.',
    proof: [
      'Requirement determination against payer policy and plan',
      'Clinical packet drafted from the record with citations',
      'Submission and status polling per payer channel',
      'SLA clocks, escalation and peer-to-peer prep',
    ],
  },
  {
    k: 'coding',
    label: 'Coding Review',
    slug: 'CODING / DOCUMENTATION REVIEW',
    state: 'Reviewing',
    title: 'Code from what the note actually says.',
    pain: 'Coders lose the day re-reading documentation to find what is missing, and specificity gaps only surface later as a denial.',
    capability:
      'The assistant proposes codes with the supporting language cited back to the note, flags specificity and bundling issues, and records the rationale for whatever the coder accepts or rejects.',
    proof: [
      'Suggestions cited to the source line in the note',
      'Specificity and laterality gaps flagged pre-bill',
      'Bundling and modifier checks against payer policy',
      'Audit-ready rationale on every accept or reject',
    ],
  },
  {
    k: 'claims',
    label: 'Claim QA',
    slug: 'CLAIM_QA / BATCH B-2214',
    state: 'Submitting',
    title: 'Catch the claim before the payer does.',
    pain: 'Scrubber rules catch format errors. They do not catch the payer-specific pattern that will deny in eleven days.',
    capability:
      'The control tower checks every claim against your own denial history, holds the ones predicted to fail with a stated reason, and tracks each batch from scrub to acknowledgement.',
    proof: [
      'Pre-submission checks learned from historical denials',
      'Batch visibility from scrub to 277CA acknowledgement',
      'Rejection loops closed without leaving the queue',
      'Clearinghouse and payer status on one timeline',
    ],
  },
  {
    k: 'denials',
    label: 'Denial Triage',
    slug: 'DENIALS / TRIAGE QUEUE',
    state: 'Drafting',
    title: 'Every denial classified, routed and answered.',
    pain: 'Denials arrive faster than a team can read them, so the cheap ones get worked and the complex ones age out.',
    capability:
      'Triage reads the remit, assigns root cause, and routes each denial to correction, appeal or a write-off decision — with the letter drafted and the evidence attached.',
    proof: [
      'Root-cause classification from remits and payer rules',
      'Appeal letters drafted with retrieved evidence',
      'Value-ranked worklists by recovery probability',
      'Reason-code trends fed back to coding and access',
    ],
  },
  {
    k: 'ar',
    label: 'AR Follow-up',
    slug: 'AR / NEXT BEST ACTION',
    state: 'Scoring',
    title: 'Work the accounts that will actually pay.',
    pain: 'Aging buckets tell you what is old, not what is collectible, so follow-up teams work top-down and leave money on the table.',
    capability:
      'The console scores accounts by expected recovery, assigns a next best action per account rather than per bucket, and runs automated status checks before a person touches anything.',
    proof: [
      'Recovery scoring by payer, age and balance driver',
      'Next best action per account, not per bucket',
      'Automated status checks before human touches',
      'Queue-level throughput and touch counts',
    ],
  },
];
