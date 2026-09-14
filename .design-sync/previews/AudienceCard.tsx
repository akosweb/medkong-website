import { AudienceCard } from '@medkong/ds';

export const WithStats = () => (
  <AudienceCard kicker="01 — Health systems" title="Many facilities, one revenue cycle." body="A decade of accumulated systems. Deploy against the worst queue without a multi-year platform program." statA="38%" labelA="fewer manual touches" statB="6 wk" labelB="to first module live" chip="Pre-service" />
);
export const ConcernFooter = () => (
  <AudienceCard kicker="02 — Medical review leader" title="Every reviewer works the same evidence-backed gates, with transparent suggestions and explicit override controls." chip="Quality · policy fidelity" />
);
export const Plain = () => (
  <AudienceCard kicker="03 — Reviewer" title="Finding the right facts and documenting decisions." body="The case brings request facts, policy, evidence and save controls into one progressive workbench." />
);
