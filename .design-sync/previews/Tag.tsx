import { Tag } from '@medkong/ds';

export const Ok = () => (
  <div style={{ display: 'flex', gap: 8 }}><Tag kind="ok">READY</Tag><Tag kind="ok">ATTACHED</Tag><Tag kind="ok">MATCHED</Tag></div>
);
export const Risk = () => (
  <div style={{ display: 'flex', gap: 8 }}><Tag kind="risk">REVIEW</Tag><Tag kind="risk">APPEAL</Tag><Tag kind="risk">NOT_FOUND</Tag></div>
);
export const Neutral = () => (
  <div style={{ display: 'flex', gap: 8 }}><Tag kind="neutral">SUBMITTED</Tag><Tag kind="neutral">WRITE-OFF</Tag><Tag kind="neutral">SUGGESTED</Tag></div>
);
