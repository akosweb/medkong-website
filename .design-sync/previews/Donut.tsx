import { Donut } from '@medkong/ds';

export const WithLabel = () => <Donut percent={64} label="Automated, no touch" note="Rest routed to a named reviewer" />;
export const RingOnly = () => <Donut percent={33} size={64} />;
export const Verified = () => <Donut percent={85} label="Reviewer agreement" value="85%" note="of 34 settled steps · 5 overridden" />;
