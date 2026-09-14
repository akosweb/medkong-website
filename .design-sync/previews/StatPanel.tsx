import { StatPanel } from '@medkong/ds';

export const Outcomes = () => (
  <StatPanel
    source="Measured against two multi-facility deployments running in production — not modelled targets."
    stats={[
      { value: '38%', label: 'Fewer manual touches per authorization' },
      { value: '2.4d', label: 'Faster from denial received to appeal filed' },
      { value: '94%', label: 'First-pass claim acceptance rate' },
      { value: '6wk', label: 'From kickoff to first module in production' },
    ]}
  />
);
export const Two = () => <StatPanel stats={[{ value: '100%', label: 'Automated actions traced with inputs, rationale and reviewer' }, { value: '5', label: 'Operator workbenches on one model' }]} />;
