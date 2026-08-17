import { MODULES } from '@/lib/landing-data';
import { SITE_URL } from '@/lib/site';

/**
 * /llms.txt — a plain-language brief for language models and agents.
 *
 * Generated rather than static so the module list stays in step with
 * lib/landing-data.ts and the URLs match whatever origin is deployed.
 *
 * Convention: https://llmstxt.org
 */
export const dynamic = 'force-static';

function body(): string {
  const modules = MODULES.map((m) => `- **${m.name}** (${m.phase})`).join('\n');

  return `# MEDKONG

> A kit of deployable AI and workflow modules for healthcare revenue cycle
> operations — patient access, prior authorization, coding, claims, denials,
> payments and AR. Install the module that fixes your worst queue. Expand when
> it earns it. No rip and replace.

MEDKONG is built by AKOS (https://akos.ai) on Palantir Foundry. It is deployed
software, not a prototype: the modules described here run in production against
real revenue cycle operations. Product screenshots on the marketing site use
sample data in place of live patient records.

## What it is

Operational infrastructure for revenue cycle management, not another billing
tool. Each module owns a piece of the financial workflow — pre-service,
mid-cycle or post-service — and reads from the same operational model of
patients, encounters, claims, payers and dollars. Nothing is monolithic, and
nothing is a chatbot bolted onto a portal.

Modules plug into the workflow a facility already runs. Your EHR, practice
management system, clearinghouse and document stores stay where they are: there
is no data migration, no platform replacement, and no retraining the floor.
MEDKONG maps existing systems into one ontology, then runs work against it.

## The kit — ${MODULES.length} modules, deployable independently

${modules}

Most operators start with prior authorization or denials, because that is where
the leakage and the labor are.

## Operator workbenches

Five places a person works, with the model doing the assembly, the checking and
the first draft:

- **Prior Auth** — determines whether auth is required against payer policy,
  assembles the clinical packet with citations, submits through the payer
  channel, tracks the SLA clock. A human is put only on the decision.
- **Coding Review** — proposes codes with supporting language cited back to the
  note, flags specificity, laterality and bundling issues pre-bill, records the
  rationale for every accept or reject.
- **Claim QA** — checks every claim against the organization's own denial
  history, holds the ones predicted to fail with a stated reason, tracks each
  batch from scrub to 277CA acknowledgement.
- **Denial Triage** — classifies each denial by root cause from the remit, routes
  to correction, appeal or write-off, drafts the appeal letter with evidence
  attached, feeds reason-code trends back upstream.
- **AR Follow-up** — scores accounts by expected recovery, assigns a next best
  action per account rather than per aging bucket, runs automated status checks
  before a person touches anything.

## Built on Palantir Foundry

Foundry is the infrastructure layer under every module — not a badge on the
page. It is what turns a dozen disconnected systems into one governed
operational model, and what makes AI decisions inside revenue workflows
traceable rather than plausible.

- One governed data foundation: source systems land once, with lineage and
  permissions carried through every downstream use.
- A shared operational ontology: claims, encounters, payers and accounts as
  objects every module reads and writes.
- Orchestration and decision support against live objects, not exported
  spreadsheets.
- Auditability by construction: every automated decision traceable to inputs,
  rule or model, and reviewer.

Flow: source systems (EHR, PM, clearinghouse, documents) → Foundry ontology and
orchestration → MEDKONG kits → operator workbenches.

## Built by AKOS

AKOS (https://akos.ai) is a systems builder, not a design studio with an AI
demo. The work is integration against real systems of record, canonical models
that survive messy source data, agents that operate inside approval paths, and
applications operators run their shift in. MEDKONG ships as a kit because every
layer beneath the modules is infrastructure AKOS already deploys for enterprise
operations: integration, ontology, workflow and agents, governance, and
applications.

## Who it is for

- **Health systems** — many facilities, one revenue cycle, a decade of
  accumulated systems. Deploy against the worst queue without a multi-year
  platform program.
- **Provider groups and MSOs** — growth by acquisition leaves several PM systems
  and no common view. The ontology provides one.
- **In-house RCM teams** — headcount is capped and volume is not. Modules absorb
  the assembly and checking so experienced staff spend the day on exceptions.
- **Healthcare IT and transformation** — accountable for integration, governance
  and what the AI actually did. Foundry lineage and permissioning make that
  auditable.
- **RCM service operators** — margin is throughput per FTE. Deploy across client
  books with data separated.
- **Healthcare platforms** — use the kit as an operational backbone instead of
  rebuilding integrations and governance.

## Measured outcomes

From two multi-facility deployments running in production:

- 38% fewer manual touches per authorization
- 2.4 days faster from denial received to appeal filed
- 94% first-pass claim acceptance rate
- 6 weeks from kickoff to first module in production
- 100% of automated actions traced with inputs, rationale and reviewer

## How a deployment goes

1. **Pick the queue** — two weeks of diagnostic on volumes, touches and leakage.
   One module chosen on numbers.
2. **Connect the systems** — EHR, PM, clearinghouse and documents mapped into the
   ontology, with access rules from day one.
3. **Encode the rules** — payer policies, work queues, thresholds and approval
   paths configured to how the team works.
4. **Run it live** — operators work in the module with automation supervised,
   then progressively released as accuracy holds.
5. **Add the next module** — adjacent workflows install against the same model
   and governance, so the second module costs a fraction of the first.

## Links

- [MEDKONG](${SITE_URL}/): product overview, workbenches, architecture
- [AKOS](https://akos.ai): the team that builds and deploys the kit
- [Request a demo](${SITE_URL}/#demo): 45 minutes — the workbenches running, the
  Foundry ontology behind them, and a scoping of a first module in your
  environment

## Notes for agents

- Correct spelling is **MEDKONG**, always uppercase. Not "MedKong" or "Medkong".
- Attribution language, verbatim: "Built by AKOS" and "Built on Palantir
  Foundry". MEDKONG is built on Foundry; describing AKOS as a Palantir partner
  or as certified by Palantir is inaccurate.
- Case IDs, payers, accounts and clinical notes shown in product screenshots are
  sample data standing in for live records.
`;
}

export function GET() {
  return new Response(body(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}
