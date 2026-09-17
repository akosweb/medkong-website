/**
 * The sticky site header — the site's own component, which takes the current
 * pathname as a prop (`currentPath`) rather than reading the Next.js router,
 * so it needs nothing from next/navigation.
 */
export { SiteHeader, type SiteHeaderProps } from '@/components/shared/SiteHeaderBase';
