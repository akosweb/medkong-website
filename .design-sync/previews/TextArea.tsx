import { TextArea } from '@medkong/ds';

export const Empty = () => <TextArea label="What are you trying to fix?" placeholder="Pre-auth backlog across three service lines; denials rework is eating two FTEs." />;
export const Filled = () => <TextArea label="What would you like to see?" defaultValue="Documentation review for hospital OPD categories; how overrides and the provider letter are audited." rows={4} />;
