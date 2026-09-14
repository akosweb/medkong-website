import { Card } from '@medkong/ds';

const Body = () => (
  <>
    <span style={{ font: "500 10px/1 'IBM Plex Mono',monospace", letterSpacing: '.12em', textTransform: 'uppercase', color: '#6B736C' }}>Module 04</span>
    <h4 style={{ fontWeight: 600, fontSize: 18.5, lineHeight: 1.25, letterSpacing: '-0.018em', margin: '10px 0 0' }}>Coding review</h4>
    <p style={{ fontSize: 14, lineHeight: 1.55, margin: '10px 0 0', color: '#5A625C' }}>Codes proposed with supporting language cited back to the note; specificity and bundling flagged pre-bill.</p>
  </>
);
export const Default = () => <Card><Body /></Card>;
export const Highlighted = () => <Card variant="highlighted"><Body /></Card>;
export const Interactive = () => <Card interactive radius={12} padding="20px 22px"><Body /></Card>;
export const OnTeal = () => (
  <div style={{ background: '#0A5A4B', padding: 24 }}>
    <Card variant="onTeal" radius={12} padding="20px 22px">
      <p style={{ margin: 0, fontWeight: 600, fontSize: 17, letterSpacing: '-0.015em' }}>One governed data foundation</p>
      <p style={{ margin: '9px 0 0', fontSize: 14.5, lineHeight: 1.58, color: '#BFDCD3' }}>Source systems land once, with lineage and permissions carried through every downstream use.</p>
    </Card>
  </div>
);
