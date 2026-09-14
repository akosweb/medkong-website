import { CompactCard } from '@medkong/ds';

export const WithMetric = () => (
  <CompactCard kicker="Module 05" title="Claim QA & submission" body="Every claim checked against your own denial history; the ones predicted to fail are held with a stated reason." metricLabel="First-pass acceptance" metric="94%" />
);
export const WithoutMetric = () => (
  <CompactCard kicker="P3" title="Program scope" body="HCPCS presence on the PA list, category effective dates and hospital outpatient bill type." />
);
export const Grid = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 16 }}>
    <CompactCard kicker="Module 01" title="Prior authorization" body="Requirement check, packet assembly, submission and the SLA clock." metricLabel="Manual touches" metric="−38%" />
    <CompactCard kicker="Module 06" title="Denials & appeals" body="Root cause from the remit, routed to correction, appeal or write-off." metricLabel="Received → filed" metric="2.4d faster" />
    <CompactCard kicker="Module 08" title="AR follow-up" body="Accounts scored by expected recovery; a next best action per account." metricLabel="AR over 90 days" metric="22%" />
  </div>
);
