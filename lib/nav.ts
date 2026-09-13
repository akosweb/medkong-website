/**
 * Site navigation — one source for the header, the mobile menu and the footer.
 *
 * The main nav is the same on every page. Each page adds its own in-page
 * section links (a second row under the main bar) from its own data file.
 */

export type NavLink = { href: string; label: string; external?: boolean };

export const SITE_NAV: NavLink[] = [
  { href: '/', label: 'For Providers' },
  { href: '/medicare-administrative-contractors', label: 'For MACs' },
  { href: '/contact', label: 'Contact' },
];

export const FOOTER_NAV: { title: string; links: NavLink[] }[] = [
  {
    title: 'Product',
    links: [
      { href: '/', label: 'For Providers' },
      { href: '/medicare-administrative-contractors', label: 'MEDKONG for MACs' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/contact', label: 'Contact' },
      { href: '/contact', label: 'Request a demo' },
      { href: 'https://akos.ai', label: 'AKOS', external: true },
    ],
  },
];

/** Homepage section links. */
export const LANDING_SECTIONS: NavLink[] = [
  { href: '#platform', label: 'Overview' },
  { href: '#workflows', label: 'Workflows' },
  { href: '#foundry', label: 'Foundry' },
  { href: '#outcomes', label: 'Outcomes' },
  { href: '#architecture', label: 'Architecture' },
];
