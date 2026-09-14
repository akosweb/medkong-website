import { Wordmark } from '@medkong/ds';

export const OnWhite = () => <Wordmark />;
export const OnInk = () => (
  <div style={{ background: '#0E1512', padding: 20, display: 'inline-flex' }}><Wordmark tone="dark" height={28} /></div>
);
export const OnTeal = () => (
  <div style={{ background: '#0A5A4B', padding: 20, display: 'inline-flex' }}><Wordmark tone="onTeal" /></div>
);
export const AppChrome = () => <Wordmark height={20} />;
export const AsLink = () => <Wordmark href="/" />;
