'use client';

import { usePathname } from 'next/navigation';
import { SiteHeader as SiteHeaderBase, type SiteHeaderProps as BaseProps } from './SiteHeaderBase';

export type SiteHeaderProps = Omit<BaseProps, 'currentPath'>;

/**
 * The site header as pages use it: the base component with `currentPath`
 * supplied from the router. Everything else — nav, section row, mobile menu —
 * lives in SiteHeaderBase, which the design-system package ships unchanged.
 */
export function SiteHeader(props: SiteHeaderProps) {
  return <SiteHeaderBase currentPath={usePathname()} {...props} />;
}
