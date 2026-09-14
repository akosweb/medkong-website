import { Select } from '@medkong/ds';

const ROLES = ['MAC executive', 'Medical review leader', 'Reviewer', 'Compliance / audit', 'Technology / data', 'Other'];
export const Placeholder = () => <Select label="Your role" placeholder="Select a role" options={ROLES} value="" onChange={() => {}} />;
export const Chosen = () => <Select label="Your role" placeholder="Select a role" options={ROLES} value="Reviewer" onChange={() => {}} />;
