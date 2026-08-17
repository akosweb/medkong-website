/**
 * Canonical origin for the site, used by metadataBase, robots.txt, sitemap.xml
 * and llms.txt so they can't drift apart.
 *
 * Set NEXT_PUBLIC_SITE_URL per environment. The production domain is the
 * fallback rather than localhost: a missing env var on a real deploy should
 * degrade to the right absolute URLs, not advertise a sitemap on localhost.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://medkong.ai').replace(/\/$/, '');
