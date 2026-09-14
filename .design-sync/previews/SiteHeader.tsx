import { SiteHeader } from '@medkong/ds';

export const Homepage = () => (
  <SiteHeader currentPath="/" ctaLabel="Request a demo" onCta={() => {}} tagline="Modular AI kit for healthcare RCM operations"
    sections={[{ href: '#platform', label: 'Overview' }, { href: '#workflows', label: 'Workflows' }, { href: '#foundry', label: 'Foundry' }, { href: '#outcomes', label: 'Outcomes' }, { href: '#architecture', label: 'Architecture' }]} />
);
export const ForMacs = () => (
  <SiteHeader currentPath="/medicare-administrative-contractors" ctaLabel="Request a walkthrough" onCta={() => {}} tagline="Prior authorization review for Medicare Administrative Contractors"
    sections={[{ href: '#what', label: 'Overview' }, { href: '#workflow', label: 'Workflow' }, { href: '#board', label: 'Review board' }, { href: '#foundry', label: 'Foundry' }, { href: '#governance', label: 'Governance' }, { href: '#who', label: 'Who it’s for' }]} />
);
export const NoSections = () => <SiteHeader currentPath="/contact" ctaLabel="Request a demo" onCta={() => {}} tagline="Modular AI kit for healthcare RCM operations" />;
