import { MedkongMark } from '@medkong/ds';

export const OnWhite = () => <MedkongMark height={52} />;
export const OnInk = () => (
  <div style={{ background: '#0E1512', padding: 20, display: 'inline-flex' }}><MedkongMark height={52} tone="dark" /></div>
);
export const OnTeal = () => (
  <div style={{ background: '#0A5A4B', padding: 20, display: 'inline-flex' }}><MedkongMark height={52} tone="onTeal" /></div>
);
export const Sizes = () => (
  <div style={{ display: 'flex', gap: 20, alignItems: 'flex-end' }}><MedkongMark height={20} /><MedkongMark height={30} /><MedkongMark height={52} /><MedkongMark height={80} /></div>
);
