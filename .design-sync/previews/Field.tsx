import { Field } from '@medkong/ds';

export const Text = () => <Field label="Name" placeholder="Dana Reyes" autoComplete="name" />;
export const Email = () => <Field label="Work email" type="email" placeholder="dana@healthsystem.org" required />;
export const Filled = () => <Field label="Organization" defaultValue="Northside Health" />;
export const Row = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 14 }}>
    <Field label="Name" placeholder="Alex Boudreaux" />
    <Field label="Work email" type="email" placeholder="alex@contractor.com" />
    <Field label="Phone" type="tel" placeholder="(555) 019-2284" />
    <Field label="MAC / organization" placeholder="Novitas Solutions, Inc." />
  </div>
);
