import { Logo } from '@medkong/ds';

const Ground = ({ bg, children }: { bg: string; children: React.ReactNode }) => (
  <div style={{ background: bg, padding: 28, display: 'inline-flex', alignItems: 'center', gap: 40, borderRadius: 10, border: bg === '#fff' ? '1px solid #DDE2DC' : 'none' }}>{children}</div>
);
export const AllVariations = () => (
  <div style={{ display: 'grid', gap: 16 }}>
    <Ground bg="#fff"><Logo variant="lockup" tone="white" height={44} /><Logo variant="icon" tone="white" height={44} /></Ground>
    <Ground bg="#0E1512"><Logo variant="lockup" tone="ink" height={44} /><Logo variant="icon" tone="ink" height={44} /></Ground>
    <Ground bg="#0A5A4B"><Logo variant="lockup" tone="teal" height={44} /><Logo variant="icon" tone="teal" height={44} /></Ground>
  </div>
);
export const LockupOnWhite = () => <Logo variant="lockup" tone="white" height={52} />;
export const LockupOnInk = () => <Ground bg="#0E1512"><Logo variant="lockup" tone="ink" height={52} /></Ground>;
export const LockupOnTeal = () => <Ground bg="#0A5A4B"><Logo variant="lockup" tone="teal" height={52} /></Ground>;
export const IconOnWhite = () => <Logo variant="icon" tone="white" height={64} />;
export const IconOnInk = () => <Ground bg="#0E1512"><Logo variant="icon" tone="ink" height={64} /></Ground>;
export const IconOnTeal = () => <Ground bg="#0A5A4B"><Logo variant="icon" tone="teal" height={64} /></Ground>;
