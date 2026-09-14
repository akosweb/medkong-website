import { Label } from '@medkong/ds';

export const Default = () => <Label>Requested service</Label>;
export const Teal = () => <Label color="#0A5A4B">Article</Label>;
export const Stack = () => (
  <div style={{ display: 'grid', gap: 10 }}>
    <Label>Beneficiary</Label>
    <Label>Date of service</Label>
    <Label>Governing policy</Label>
  </div>
);
