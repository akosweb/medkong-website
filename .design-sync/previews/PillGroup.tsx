import { PillGroup } from '@medkong/ds';

const MODULES = ['Eligibility & Benefits', 'Prior Authorization', 'Charge Capture', 'Coding Review', 'Claim QA & Submission', 'Denials & Appeals', 'Payment Posting', 'AR Follow-up'];
const JURISDICTIONS = ['JE', 'JF', 'J5', 'J6', 'J8', 'J15', 'JH', 'JL', 'JJ', 'JM', 'JN', 'DME'];
export const Modules = () => <PillGroup label="Modules you’re interested in" options={MODULES} value={['Prior Authorization', 'Denials & Appeals']} />;
export const Jurisdictions = () => <PillGroup label="Jurisdictions you review for" options={JURISDICTIONS} value={['JH', 'JL']} tone="mono" />;
export const NoneSelected = () => <PillGroup label="Jurisdictions you review for" options={JURISDICTIONS} value={[]} tone="mono" />;
