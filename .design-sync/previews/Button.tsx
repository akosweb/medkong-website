import { Button } from '@medkong/ds';

export const Primary = () => <Button>Request a demo</Button>;
export const Ghost = () => <Button variant="ghost">Explore the workbenches</Button>;
export const Sizes = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
    <Button size="lg">Request a demo</Button>
    <Button size="md">Request a demo</Button>
    <Button size="sm">Request a demo</Button>
  </div>
);
export const HeroPair = () => (
  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
    <Button>Request a walkthrough</Button>
    <Button variant="ghost" href="#board">See the review board</Button>
  </div>
);
export const OnTint = () => (
  <div style={{ background: '#F1F8F5', padding: 24, display: 'flex', gap: 12 }}>
    <Button size="lg">Request a demo</Button>
    <Button size="lg" variant="ghost" ground="tint">Book an architecture walkthrough</Button>
  </div>
);
export const Submitting = () => <Button type="submit" disabled>Sending…</Button>;
