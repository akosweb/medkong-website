/**
 * Copy and sample data for the MAC page (`/medicare-administrative-contractors`).
 *
 * Source: "MEDKONG for MACs — Workflow & Solution Specification" (Sept 2026).
 * The spec is explicit that buyer-facing collateral must not claim measured
 * reductions in review time, cost or error rate without a pilot baseline, so
 * nothing on this page is a figure — the argument is made on capability.
 *
 * Sample data follows the site conventions: real CPT / ICD-10 / LCD identifiers,
 * fictional beneficiaries. The jurisdiction shown is Novitas JH because the
 * governing policy in the example (L35004, blepharoplasty) is a Novitas LCD.
 */

/** In-page section links for the header's "on this page" row. */
export const SECTIONS = [
  { href: '#what', label: 'Overview' },
  { href: '#workflow', label: 'Workflow' },
  { href: '#board', label: 'Review board' },
  { href: '#foundry', label: 'Foundry' },
  { href: '#governance', label: 'Governance' },
  { href: '#who', label: 'Who it’s for' },
  { href: '#request', label: 'Request a walkthrough' },
];

/* ------------------------------------------------------------------ hero */

export const HERO = {
  eyebrow: 'MEDKONG for Medicare Administrative Contractors',
  headline: 'The system prepares the case. The reviewer decides.',
  lede:
    'MEDKONG for MACs turns a submitted prior authorization request into a structured, evidence-backed review case. Seven review gates, policy-aware findings, and a reviewer in control of every determination — through to the final decision, the UTN and the provider letter.',
  caption: 'The MEDKONG MAC review workbench. Sample data.',
};

/** The case shown in the hero workbench and the explorer panels. */
export const CASE = {
  name: 'Okafor, Ruth',
  demo: '74 yrs · F',
  mbi: '2RM7-TE4-NK61',
  dob: '1952-03-08',
  id: 'PA-41283',
  round: 'R1',
  kind: 'MAC review · Initial · Round 1',
  status: 'Received — awaiting review',
  channel: 'By portal',
  due: 'Sep 17, 2026',
  received: 'Sep 10, 2026',
  mac: 'Novitas Solutions, Inc.',
  jurisdiction: 'JH',
  contractor: '07201',
  hcpcs: '67906',
  service: 'Repair of blepharoptosis, frontalis technique',
  units: '1 unit · Bilateral',
  bill: '13X',
  icd: 'H02.403',
  dxText: 'Unspecified ptosis of bilateral eyelids',
  dos: 'Sep 24, 2026',
  state: 'LA',
  lcd: 'L35004',
  article: 'A57618',
  daysLeft: '4 days left',
};

export const CASE_KPIS = [
  { n: '0 / 7', label: 'Steps reviewed', risk: false },
  { n: '2', label: 'Objections suggested', risk: true },
  { n: '3 / 29', label: 'Documentation gaps', risk: true },
  { n: '4 days', label: 'Until decision due', risk: false },
];

export const PAR_ELEMENTS: { k: string; v: string; code?: boolean }[] = [
  { k: 'Beneficiary', v: 'Ruth Okafor' },
  { k: 'Date of birth', v: '1952-03-08' },
  { k: 'Member ID', v: '2RM7-TE4-NK61' },
  { k: 'HCPCS code', v: '67906', code: true },
  { k: 'Diagnosis code', v: 'H02.403', code: true },
  { k: 'Units of service', v: '1' },
  { k: 'Date of service', v: '2026-09-24' },
  { k: 'Facility state', v: 'LA' },
  { k: 'Type of bill', v: '13X' },
  { k: 'Submission', v: 'Initial submission' },
  { k: 'Expedited', v: 'Not requested' },
];

export const STEPS = [
  { n: 'P1', name: 'Completeness' },
  { n: 'P2', name: 'Eligibility' },
  { n: 'P3', name: 'Program scope' },
  { n: 'P4', name: 'Governing policy' },
  { n: 'P5', name: 'Diagnosis coverage' },
  { n: 'P6', name: 'Modifiers & attestation' },
  { n: 'P7', name: 'Documentation' },
  { n: 'Final', name: 'Decision' },
];

export const EVIDENCE_TABS = ['Visit notes', 'HCPCS', 'Article', 'LCD', 'NCD', 'Coverage', 'Modifiers'];

export const VISIT_NOTE = {
  id: 'dc04f1a2-753d',
  title: 'OCULOPLASTIC CONSULT — Ruth Okafor, 74yo, referred by Dr. T. Nguyen (optometry).',
  lines: [
    'HPI: Three years of progressive bilateral upper eyelid drooping. Cannot see overhead signage; stopped driving at night; raises brows constantly to read, with forehead fatigue. Complaints are functional, not cosmetic.',
    'EXAM: VA 20/30 OD, 20/40 OS corrected. MRD1 0.5 mm OD, 0.0 mm OS. Levator function 8 mm OU. Brow ptosis with chronic frontalis recruitment.',
    'PHOTOS: Pre-operative photographs obtained (OD-1, OS-1, FRONTAL-1).',
    'PLAN: Bilateral repair of blepharoptosis, frontalis technique (CPT 67906). Functional impairment documented; surgery recommended.',
  ],
};

/* -------------------------------------------------------------- trust band */

export const TRUST = {
  claim:
    'Ontology-backed case objects, governed actions and full lineage — the infrastructure layer under every review gate.',
  chips: ['Human in the loop', 'Audit trail per action', 'Policy-aware findings'],
};

/* -------------------------------------------------------------- what it is */

export const WHAT_IT_IS = {
  eyebrow: 'The MAC-side solution',
  headline: 'A review system, not an AI answer.',
  support:
    'A purpose-built operational workbench for reviewing Medicare hospital outpatient prior authorization requests. Automated intake, eligibility and policy analysis, combined with a disciplined human-review process — reviewers receive a guided case, not a collection of files and reference tables.',
};

export const CAPABILITIES = [
  {
    n: '01',
    title: 'Faster case preparation',
    body: 'Request, coverage, program, policy, diagnosis, modifier and documentation checks are assembled into one guided flow before a reviewer opens the case.',
  },
  {
    n: '02',
    title: 'Consistent review',
    body: 'Every case follows the same P1–P7 decision framework and uses controlled status vocabularies, across reviewers and across contractors.',
  },
  {
    n: '03',
    title: 'Evidence at the point of decision',
    body: 'Visit notes, attachments, HCPCS data, articles, LCDs, NCDs, coverage rules and modifier rules sit alongside the case. Nobody leaves the workspace.',
  },
  {
    n: '04',
    title: 'Human authority by design',
    body: 'Reviewers verify or override every finding. Once a human has reviewed a step, a machine refresh never overwrites that decision.',
  },
  {
    n: '05',
    title: 'Decision-ready output',
    body: 'The workflow proposes an outcome, issues the final decision, creates the UTN where applicable, generates the provider letter and locks the record.',
  },
  {
    n: '06',
    title: 'Audit-ready case history',
    body: 'Findings, reasons, notes, timestamps, reviewer identity, evidence and policy quotations, overrides and final outputs are retained as structured data.',
  },
];

/* ---------------------------------------------------------------- workflow */

export const WORKFLOW = {
  eyebrow: 'End-to-end workflow',
  headline: 'Nine gates from receipt to provider letter.',
  support:
    'A case opens automatically on submission. Three intake gates screen it, four medical-review gates judge it, and the decision stage issues the outcome. An objection at intake routes straight to Decision — no medical review on a request that should never have reached one.',
};

export type Gate = {
  code: string;
  name: string;
  evaluates: string;
  control: string;
  /** Intake gates can end the case early; medical-review gates can't. */
  phase: 'Receipt' | 'Intake' | 'Medical review' | 'Decision';
};

export const GATES: Gate[] = [
  {
    code: 'M0',
    name: 'Receipt & case creation',
    evaluates: 'Submission state, round, receipt channel, jurisdiction snapshot and timing. Opens the case, sets the decision clock, prepares P1–P3.',
    control: 'Open and prioritize the case',
    phase: 'Receipt',
  },
  {
    code: 'P1',
    name: 'Completeness',
    evaluates: 'Required PAR elements and attached documentation — beneficiary, codes, units, DOS, facility, bill type, expedited flag, document counts.',
    control: 'Verify, or mark incomplete with reason',
    phase: 'Intake',
  },
  {
    code: 'P2',
    name: 'Eligibility',
    evaluates: 'Original Medicare coverage on the date of service: named plan against all plans on file, coverage windows, payer rank, verification status.',
    control: 'Verify, or rule out-of-scope / unknown',
    phase: 'Intake',
  },
  {
    code: 'P3',
    name: 'Program scope',
    evaluates: 'HCPCS presence on the PA list, category effective dates and hospital outpatient bill type.',
    control: 'Verify, change category, or mark PA not required',
    phase: 'Intake',
  },
  {
    code: 'P4',
    name: 'Governing policy',
    evaluates: 'Category, state, MAC jurisdiction and DOS resolved to the coverage article, its version, and the linked LCD and NCD set.',
    control: 'Verify, select an alternate stack, or record no article',
    phase: 'Medical review',
  },
  {
    code: 'P5',
    name: 'Diagnosis coverage',
    evaluates: 'ICD-10 against the article’s medical-necessity rule groups: covered and non-covered flags, closed-list behavior, quoted rule text.',
    control: 'Covered, excluded, not covered, or unknown',
    phase: 'Medical review',
  },
  {
    code: 'P6',
    name: 'Modifiers & attestation',
    evaluates: 'Laterality, attesting clinician and the article’s published modifier requirements against the request facts.',
    control: 'Satisfied, unverified, needs input, or conflict',
    phase: 'Medical review',
  },
  {
    code: 'P7',
    name: 'Documentation',
    evaluates: 'Every administrative and clinical requirement against the submitted evidence: one ledger row each, with finding, quote, source and policy text.',
    control: 'Verify or correct every row, then save the headline',
    phase: 'Medical review',
  },
  {
    code: 'D',
    name: 'Final decision',
    evaluates: 'The judged board, standing objections, early-exit rules and prior response state — proposed as affirmed, non-affirmed or rejected.',
    control: 'Choose the outcome and confirm the irreversible issue',
    phase: 'Decision',
  },
];

/* ---------------------------------------------------------------- explorer */

export const BOARD = {
  eyebrow: 'The review board',
  headline: 'One interaction model across every gate.',
  support:
    'A progressive P1–P7 rail with active, completed, locked and skipped states. The machine suggests a status, a reason and the detail behind it; the reviewer verifies or overrides. The panels below are the queue, two of the gates, and the decision stage.',
};

export type BoardTab = {
  k: 'queue' | 'policy' | 'ledger' | 'decision';
  label: string;
  slug: string;
  state: string;
  title: string;
  body: string;
  proof: string[];
};

export const BOARD_TABS: BoardTab[] = [
  {
    k: 'queue',
    label: 'Case queue',
    slug: 'MAC operations dashboard',
    state: 'Live queue',
    title: 'The queue, by MAC.',
    body: 'Select a MAC and the dashboard shows the open workload: what is awaiting review, what is in review, what is past its decision clock, and how decisions have gone. Every row carries its round, channel, current gate and due date.',
    proof: [
      'Cases open automatically on submission or resubmission — no manual intake step',
      'Expedited requests and past-due cases surface first',
      'Reviewer agreement is visible: steps verified against steps overridden',
    ],
  },
  {
    k: 'policy',
    label: 'P4 · Governing policy',
    slug: 'Gate P4 · Governing policy',
    state: 'Suggested',
    title: 'The policy stack, resolved and editable.',
    body: 'P4 considers the operative procedure category, facility state, MAC jurisdiction and date of service, then suggests the coverage article and version with its linked LCD and NCD records. The reviewer can search for another article, choose an alternate stack, or record that no article applies.',
    proof: [
      'MAC name, jurisdiction code and contractor number shown in context',
      'Changing the category or policy refreshes every downstream suggestion',
      'Verified downstream steps return to review when their inputs change; human overrides stay protected',
    ],
  },
  {
    k: 'ledger',
    label: 'P7 · Documentation ledger',
    slug: 'Gate P7 · Documentation review',
    state: '3 rows open',
    title: 'One row per requirement, problems first.',
    body: 'P7 evaluates the submitted documentation against the administrative and clinical checklist in force for the procedure category and governing policy. Each row stores the finding, the evidence quotation and its source, the model’s rationale and the policy quotation it applied.',
    proof: [
      'Findings are SATISFIED, NOT_FOUND, CONTRADICTED, NOT_APPLICABLE or NOT_EVALUATED',
      'Correcting a finding requires a reviewer note; clean rows can be bulk-verified',
      'The headline finding cannot be saved until every applicable row carries a human outcome',
    ],
  },
  {
    k: 'decision',
    label: 'Decision',
    slug: 'Final decision · UTN · Provider letter',
    state: 'Ready to issue',
    title: 'A proposal the reviewer can replace.',
    body: 'Decision opens only when the judged gates carry reviewer verdicts. The proposed outcome is transparent and preselected; the reviewer’s explicit choice replaces it. Issue is final: the UTN is generated where applicable, the provider letter is composed from reviewed values, and the case locks.',
    proof: [
      'Affirmed and non-affirmed decisions receive a UTN; rejected intake requests do not',
      'The letter itemizes standing findings, P7 deficiencies and reviewer overrides',
      'The MAC case and the originating request update atomically',
    ],
  },
];

export const QUEUE_STATS = [
  { n: '17', label: 'Open cases' },
  { n: '12', label: 'Awaiting review' },
  { n: '5', label: 'In review' },
  { n: '4', label: 'Past due', risk: true },
];

export type QueueRow = {
  id: string;
  round: string;
  received: string;
  status: string;
  k: 'ok' | 'risk' | 'neutral';
  step: string;
  due: string;
  /** Past the decision clock. */
  late?: boolean;
};

export const QUEUE_ROWS: QueueRow[] = [
  { id: 'PA-41283', round: 'R1', received: 'Sep 10 · 3:08 PM', status: 'RECEIVED', k: 'neutral', step: 'P1', due: 'Sep 17' },
  { id: 'PA-41277', round: 'R1', received: 'Sep 8 · 6:38 PM', status: 'IN REVIEW', k: 'ok', step: 'P2', due: 'Sep 15' },
  { id: 'PA-41260', round: 'R2', received: 'Sep 8 · 9:12 AM', status: 'IN REVIEW', k: 'ok', step: 'P7', due: 'Sep 10', late: true },
  { id: 'PA-41254', round: 'R1', received: 'Sep 5 · 11:41 AM', status: 'EXPEDITED', k: 'risk', step: 'P4', due: 'Sep 7', late: true },
  { id: 'PA-41249', round: 'R1', received: 'Sep 3 · 8:03 PM', status: 'IN REVIEW', k: 'ok', step: 'P5', due: 'Sep 10', late: true },
  { id: 'PA-41231', round: 'R1', received: 'Sep 2 · 2:26 PM', status: 'DECIDED', k: 'neutral', step: '—', due: 'Sep 9' },
];

export const DECISION_MIX = [
  { label: 'Affirmed', n: 1 },
  { label: 'Partly affirmed', n: 0 },
  { label: 'Non-affirmed', n: 2 },
  { label: 'Rejected', n: 0 },
];

export const POLICY_STACK = [
  { kind: 'Article', id: 'A57618', title: 'Billing and Coding: Blepharoplasty, Eyelid Surgery, and Brow Lift', version: 'v3 · eff. 2023-10-01', on: true },
  { kind: 'LCD', id: 'L35004', title: 'Blepharoplasty, Eyelid Surgery, and Brow Lift', version: 'eff. 2019-10-31 · active', on: true },
  { kind: 'NCD', id: '—', title: 'No NCD linked for this article', version: '', on: false },
];

export type LedgerRow = {
  req: string;
  finding: 'SATISFIED' | 'NOT_FOUND' | 'CONTRADICTED' | 'NOT_APPLICABLE';
  k: 'ok' | 'risk' | 'neutral';
  source: string;
  review: 'Verified' | 'Awaiting review' | 'Corrected';
};

export const LEDGER_ROWS: LedgerRow[] = [
  { req: 'Visual field testing, with and without lid taping', finding: 'NOT_FOUND', k: 'risk', source: '—', review: 'Awaiting review' },
  { req: 'Statement that photos are available for MAC review', finding: 'NOT_FOUND', k: 'risk', source: '—', review: 'Awaiting review' },
  { req: 'Interference with activities of daily living', finding: 'SATISFIED', k: 'ok', source: 'Consult · HPI', review: 'Awaiting review' },
  { req: 'MRD1 measurement documented for each eye', finding: 'SATISFIED', k: 'ok', source: 'Consult · Exam', review: 'Verified' },
  { req: 'Pre-operative photographs obtained', finding: 'SATISFIED', k: 'ok', source: 'Consult · Photos', review: 'Verified' },
  { req: 'Ptosis repair not for cosmetic purposes', finding: 'SATISFIED', k: 'ok', source: 'Consult · HPI', review: 'Verified' },
];

export const LEDGER_DETAIL = {
  req: 'Visual field testing, with and without lid taping',
  rationale:
    'Neither visit note contains a visual field result. The consult documents MRD1 and functional complaints but no perimetry, taped or untaped.',
  policy:
    'L35004: “Documentation must include… visual field testing demonstrating a minimum 12-degree or 30% loss of upper field of vision with the lids untaped, and improvement with lids taped.”',
};

export const JUDGED_BOARD = [
  { n: 'P1', name: 'Completeness', status: 'COMPLETE', k: 'ok', by: 'Verified · A. Boudreaux' },
  { n: 'P2', name: 'Eligibility', status: 'ELIGIBLE', k: 'ok', by: 'Verified · A. Boudreaux' },
  { n: 'P3', name: 'Program scope', status: 'IN_PROGRAM', k: 'ok', by: 'Verified · A. Boudreaux' },
  { n: 'P4', name: 'Governing policy', status: 'RESOLVED', k: 'ok', by: 'Verified · A. Boudreaux' },
  { n: 'P5', name: 'Diagnosis coverage', status: 'COVERED', k: 'ok', by: 'Verified · A. Boudreaux' },
  { n: 'P6', name: 'Modifiers', status: 'SATISFIED', k: 'ok', by: 'Overridden · A. Boudreaux' },
  { n: 'P7', name: 'Documentation', status: 'OBJECTION', k: 'risk', by: 'Verified · 2 rows NOT_FOUND' },
] as const;

export const OUTCOMES = [
  { v: 'AFFIRMED', help: 'All judged gates carry pass status.', on: false },
  { v: 'NON-AFFIRMED', help: 'A P4–P7 medical-review objection stands.', on: true },
  { v: 'REJECTED', help: 'A P1–P3 intake objection stands. No UTN.', on: false },
];

/* ----------------------------------------------------------------- foundry */

export const FOUNDRY = {
  headline: 'MEDKONG for MACs is built on Palantir Foundry.',
  lede: 'A MAC review has to survive an audit. Foundry is what turns request data, beneficiary coverage, the CMS and MAC policy corpus and clinical documents into one governed operational model — and what makes every machine suggestion inside the workflow traceable rather than plausible.',
  second:
    'The MAC case and the documentation ledger are ontology objects. The gate reviews and the final decision are governed actions. Nothing here is a chatbot bolted onto a portal.',
  points: [
    {
      name: 'Case objects, not spreadsheets',
      detail: 'The MAC case and each documentation-review row are typed objects. Every gate status, reason, detail, reviewer and timestamp is a field an auditor can query.',
    },
    {
      name: 'Automations open the case',
      detail: 'A submission or resubmission opens the case, snapshots the jurisdiction, prepares P1–P3 and starts P4–P7 in the background. Live-monitored, retry-enabled.',
    },
    {
      name: 'Actions carry authority',
      detail: 'Record step review, review a ledger row, issue the decision — each is a governed action with organization-based validation, so only authorized reviewers act.',
    },
    {
      name: 'Lineage from policy to letter',
      detail: 'Article, LCD, NCD, rule rows, evidence quotes and the letter are linked objects. An audit walks backward from any determination to what it was based on.',
    },
  ],
  flow: [
    'PAR submissions · beneficiary coverage · policy corpus · clinical documents',
    'Foundry ontology & orchestration',
    'MEDKONG MAC review kit',
    'Reviewer workbench',
  ],
};

/* -------------------------------------------------------------- governance */

export const GOVERNANCE = {
  eyebrow: 'Human oversight, safety and audit',
  headline: 'Human authority is encoded into the product.',
  support:
    'These are not policies layered on top of the software. They are how the case object, the review actions and the decision action behave.',
  rules: [
    { t: 'No silent automation of final authority', d: 'The system proposes. A reviewer records each gate verdict and confirms the final outcome.' },
    { t: 'Human decisions cannot be clobbered', d: 'Verified and overridden gates and ledger rows are excluded from suggestion refresh writes.' },
    { t: 'Overrides are explicit', d: 'Corrected statuses, reasons, notes, policy selections, reviewer identity and timestamps are stored on the case.' },
    { t: 'Downstream consistency is enforced', d: 'Changing an upstream input refreshes dependent machine findings and can invalidate stale verifications.' },
    { t: 'Model output stays distinguishable from judgment', d: 'The case retains the machine’s original suggestion memory; operative columns reflect reviewed truth.' },
    { t: 'The final letter is deterministic', d: 'Composed from reviewed case fields and ledger data at issue time — not generated by an unconstrained model.' },
    { t: 'Closed cases are immutable', d: 'Once decided, steps and row reviews can no longer be changed through the workflow.' },
    { t: 'One request receives one answer', d: 'Competing review rounds stay readable but cannot issue another decision after the request has been answered.' },
  ],
};

/* ---------------------------------------------------------------- audience */

export const AUDIENCE = {
  eyebrow: 'Who it’s for',
  headline: 'Built for the people who own the review.',
  segments: [
    { n: '01', kicker: 'MAC executive', concern: 'Throughput, consistency, defensibility, modernization', body: 'A governed digital operating model that standardizes case review while preserving clinical and contractual authority.' },
    { n: '02', kicker: 'Medical review leader', concern: 'Quality, reviewer variation, policy fidelity', body: 'Every reviewer works the same evidence-backed gates, with transparent suggestions and explicit override controls.' },
    { n: '03', kicker: 'Reviewer', concern: 'Finding the right facts and documenting decisions', body: 'The case brings request facts, policy, evidence and save controls into one progressive workbench.' },
    { n: '04', kicker: 'Compliance and audit', concern: 'Traceability and reproducibility', body: 'Machine output, human determinations, policy references, evidence quotations and the final communication are retained as structured records.' },
    { n: '05', kicker: 'Technology and data', concern: 'Integration, maintainability, access control', body: 'An ontology-backed workflow with modular functions, actions, automations and a purpose-built reviewer UI that integrates with your source data domains.' },
  ],
};

/* --------------------------------------------------------------- request */

export const REQUEST = {
  eyebrow: 'Request a walkthrough',
  headline: 'See the review board on a real case.',
  lede: 'A walkthrough runs 45 minutes and follows one case from the queue to the issued letter. Tell us your jurisdiction and role and an AKOS - MEDKONG engineer will set it up.',
  storyline: [
    'Select a MAC and open the live case queue',
    'Open a newly submitted case — P1–P3 already prepared at receipt',
    'Verify P1, walk P2 coverage windows and payer rank',
    'Change a category at P3 and watch dependent suggestions refresh',
    'Search and select the governing article at P4, with its LCD and NCD stack',
    'See which rule rows support the P5 and P6 findings',
    'Expand a P7 requirement: rationale, evidence quote, source, policy quote — then correct a row',
    'Read the judged board at Decision and why the outcome is proposed',
    'Issue the decision: UTN, itemized letter, PDF view, locked case',
  ],
  boundary:
    'MEDKONG for MACs runs today in the MEDKONG prior authorization sandbox as a pilot-ready workflow. Source-system interfaces, production SLAs, retention, accessibility and security accreditation are confirmed during discovery and solution design.',
};

export const ROLES = [
  'MAC executive',
  'Medical review leader',
  'Reviewer',
  'Compliance / audit',
  'Technology / data',
  'Other',
];

export const JURISDICTIONS = ['JE', 'JF', 'J5', 'J6', 'J8', 'J15', 'JH', 'JL', 'JJ', 'JM', 'JN', 'DME'];
