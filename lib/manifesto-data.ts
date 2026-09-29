/**
 * /manifesto copy, written for RCM and MAC leaders. Source: the "MEDKONG
 * Manifesto" doc (Sept 2026) plus the reviewer-side-first positioning.
 *
 * Claim discipline: we built the reviewer's workbench. Never imply MACs run
 * it today, and never promise a gold card; it's where clean passes lead.
 */

export const HERO = {
  eyebrow: 'Our manifesto',
  headline: 'One rulebook.',
  second: 'Checked from both sides.',
  leadIn: 'MEDKONG puts payers and providers on the same rulebook.',
  lede: 'We built the reviewer’s workbench first: seven gates, with the policy cited behind every finding. Providers clear the same gates before they submit. Every decision feeds back into the rulebook. Decided once, and it holds.',
};

export const WHAT_IT_IS = {
  eyebrow: 'What MEDKONG is',
  headline: 'Infrastructure you own. Powered by the same rulebook.',
  support:
    'For providers and for the reviewers who decide their cases. Same rules on both sides, installed in each side’s own environment.',
  plain: {
    label: 'What it does',
    body: 'MEDKONG is revenue cycle infrastructure that AKOS deploys into your environment and you own. The same record, engines and governance serve two desks: the provider preparing and defending a claim, and the Medicare Administrative Contractor reviewing a prior authorization request.',
    points: [
      'Eight provider modules, from eligibility to AR follow-up',
      'A MAC review system for prior authorization: seven gates and a decision',
      'Deployed and owned, never rented. Your data stays in your systems',
      'The system prepares the work; a named person signs every decision',
    ],
  },
  technical: {
    label: 'How it’s built',
    body: 'Infrastructure as code, built by AKOS on Palantir Foundry. Each module ships as a versioned package into your environment, and both sides execute against one versioned rulebook.',
    spec: [
      { k: 'Delivery', v: 'Versioned modules: ontology object types, governed actions, functions, automations, operator apps' },
      { k: 'Runtime', v: 'Your Foundry environment. No MEDKONG tenant holds your records' },
      { k: 'Record', v: 'Patients, encounters, codes, authorizations, claims and accounts as objects every module reads and writes' },
      { k: 'Rulebook', v: 'LCDs, NCDs and coverage articles resolved by category, state and jurisdiction, plus your own payer policies' },
      { k: 'Harnesses', v: 'Provider modules and the MAC review path run the same checks against the same rulebook' },
      { k: 'Controls', v: 'Governed actions, not direct writes. A rerun never overwrites a verified human decision' },
    ],
  },
  diagram: {
    left: { label: 'Provider side', sub: '8 modules' },
    center: { label: 'One rulebook', sub: 'Coverage policy · payer rules' },
    right: { label: 'Reviewer side', sub: 'MAC review path · 7 gates' },
  },
};

export const PRINCIPLES_HEAD = {
  eyebrow: 'What we believe',
  headline: 'Four principles.',
  support: 'What we believe, what the industry says instead, and how MEDKONG puts it into the software.',
};

export const PRINCIPLES = [
  {
    n: '01',
    title: 'One rulebook, both sides of the table.',
    believe:
      'A denial is not a billing error. It’s two parties reading the same policy differently. It ends only when both sides work from the same rules.',
    industry: 'Shift left. Catch errors earlier. Appeal faster.',
    applies:
      'MEDKONG runs on both sides of prior authorization. The reviewer’s workbench checks every request through seven gates; the provider module builds the packet against those same gates before submission. Same LCD, NCD and rule-group logic, so the outcome is predictable before the request is sent.',
  },
  {
    n: '02',
    title: 'Defensible decisions, not automated tasks.',
    believe:
      'A decision nobody can explain isn’t finished; it’s an appeal waiting to happen. What matters is the decision that holds up, not how many tasks got automated.',
    industry: 'Automate more. Measure the automation rate.',
    applies:
      'Every automated action carries its inputs, its reasoning and a named reviewer. Findings quote the evidence and cite the policy text. The system proposes, a person records the verdict, and a verified decision can’t be overwritten by a later automated refresh.',
  },
  {
    n: '03',
    title: 'Policy is a system, not tribal knowledge.',
    believe:
      'Payer policy changes constantly. When it lives in people’s heads, training decks or a physician champion’s memory, it fades the day that person leaves.',
    industry: 'Train the clinicians. Build denial-prevention teams. Hold monthly reviews.',
    applies:
      'MEDKONG resolves each case to its governing coverage article, LCD and NCD by category, state and MAC jurisdiction. When a policy updates, the change reaches every affected case, and every verdict feeds back into the rules instead of someone’s memory.',
  },
  {
    n: '04',
    title: 'Own your decision making. Don’t rent it.',
    believe:
      'Your denial patterns and review history are your most valuable operating data. Outsourcing the decision means paying someone else to learn from it.',
    industry: 'Outsource follow-up. Buy SaaS. Hold vendors to a scorecard.',
    applies:
      'MEDKONG is deployed, not hosted. Modules ship as versioned infrastructure into your own environment on Palantir Foundry. You run it, govern it and extend it, so what the system learns stays with you.',
  },
];

export const RELAY = {
  eyebrow: 'The relay problem',
  headline: 'The hops cost days. The loops cost months.',
  support:
    'Every prior authorization passes through a relay, AI or not. The fixed hops are annoying but finite. What turns days into months is going around again.',
  hops: ['Provider submits', 'MAC forwards', 'Reviewer decides', 'UTN issued'],
  hopsNote: 'Fixed and finite. A few days per pass.',
  loops: ['Incomplete submission', 'Miscategorized request', 'Non-affirmation'],
  loopsNote: 'A non-affirmation can’t be appealed. Every miss is another full trip through the relay.',
};

export const REVIEWER = {
  eyebrow: 'What we do',
  headline: 'We built the reviewer’s side first.',
  body: [
    'MEDKONG’s reviewer workbench checks every request through the seven gates a reviewer is required to check. We know the gates because we built them from the reviewer’s side.',
    'Providers scale up to match that rulebook. Your case is checked against the same seven gates before it leaves your building.',
  ],
  gates: [
    'Completeness',
    'Eligibility',
    'Program scope',
    'Governing policy',
    'Diagnosis coverage',
    'Modifiers & attestation',
    'Documentation',
  ],
};

export const SUBMIT_ONCE = {
  eyebrow: 'The provider promise',
  headline: 'Submit once.',
  support: 'A case that arrives right goes through the relay one time.',
  checks: [
    { title: 'Complete', body: 'Every required document and field present before submission, checked against the completeness gate.' },
    { title: 'Correctly categorized', body: 'The request lands in the right program and service category, so it’s reviewed against the right policy.' },
    { title: 'Policy cited', body: 'The governing LCD or NCD named, and the evidence mapped to what it requires.' },
  ],
  metric: {
    label: 'How it’s measured',
    name: 'First-pass affirmation rate',
    note: 'Affirmed on the first submission, with nothing required from the MAC.',
  },
  path: {
    label: 'Where it leads',
    steps: ['Clean first passes', 'High affirmation rate', 'Gold card eligibility', 'Out of the relay'],
    note: 'WISeR offers gold card exemptions to providers who meet affirmation-rate thresholds. A gold-carded provider skips prior authorization for those services.',
  },
};

export const CONTRAST = {
  eyebrow: 'What we don’t believe',
  headline: 'The consensus, and our view.',
  rows: [
    { consensus: 'Faster AI review fixes turnaround.', view: 'The relay isn’t the delay. The loops are.' },
    { consensus: 'Keep pace with payer AI.', view: 'Bots racing bots is a treadmill. Make fewer decisions worth disputing.' },
    { consensus: 'Free staff for high-dollar appeals.', view: 'An appeal is the most expensive way to be right.' },
    { consensus: 'Physician champions fix documentation.', view: 'That’s tribal knowledge with a better title.' },
    { consensus: 'Automation rate is the KPI.', view: 'First-pass affirmation rate is. An overturned decision was never automated, only deferred.' },
  ],
};

export const CLOSING = {
  quote: 'Decide once, correctly,',
  quoteSecond: 'in a way both sides can check.',
  body: 'Revenue cycle AI we deploy and you own. The machine prepares the case, a person signs it, and the rules are the same on both sides of the table.',
};
