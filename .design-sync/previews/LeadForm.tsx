import { LeadForm } from '@medkong/ds';

export const DemoRequest = () => (
  <div style={{ background: '#fff', border: '1px solid #DCEAE3', borderRadius: 12, padding: 28, maxWidth: 640 }}>
    <LeadForm variant="modules" source="medkong-website" submitLabel="Request a demo" successNoun="demo" intro="Pick the modules you want to see. Two are preselected because that’s where most operators start." />
  </div>
);
export const MacWalkthrough = () => (
  <div style={{ background: '#fff', border: '1px solid #DCEAE3', borderRadius: 14, padding: 28, maxWidth: 640 }}>
    <LeadForm variant="mac" source="medkong-macs" submitLabel="Request a walkthrough" successNoun="walkthrough" intro="45 minutes, one case end to end, prepared against your jurisdiction’s policy corpus." />
  </div>
);
