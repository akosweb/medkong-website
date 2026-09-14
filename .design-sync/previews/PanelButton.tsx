import { PanelButton } from '@medkong/ds';

export const Pair = () => (
  <div style={{ display: 'flex', gap: 10 }}><PanelButton variant="ghost">Reject</PanelButton><PanelButton>Verify and save</PanelButton></div>
);
export const Gated = () => (
  <div style={{ display: 'flex', gap: 8 }}><PanelButton variant="ghost">Bulk-verify 26 clean rows</PanelButton><PanelButton muted>Save headline finding</PanelButton></div>
);
export const Single = () => <PanelButton>Issue decision</PanelButton>;
