import { Chip } from '@medkong/ds';

export const Outlined = () => (
  <div style={{ display: 'flex', gap: 8 }}><Chip>Case PA-41283 · R1</Chip><Chip>UTN not issued</Chip><Chip>By portal</Chip></div>
);
export const Filled = () => (
  <div style={{ display: 'flex', gap: 8 }}><Chip variant="filled">EHR</Chip><Chip variant="filled">Clearinghouse</Chip><Chip variant="filled">Documents</Chip></div>
);
export const TealHighlight = () => (
  <div style={{ display: 'flex', gap: 8 }}><Chip variant="teal">Ontology</Chip><Chip variant="teal">Orchestration</Chip></div>
);
export const OnTeal = () => (
  <div style={{ background: '#0A5A4B', padding: 20, display: 'flex', gap: 8 }}>
    <Chip variant="onTeal">Governed data</Chip><Chip variant="onTeal">Full lineage</Chip>
  </div>
);
