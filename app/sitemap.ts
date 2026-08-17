import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

/**
 * Only the homepage is indexable. `/design-system` is deliberately absent — it's
 * an internal reference, noindexed in its own metadata and disallowed in
 * robots.txt. `/llms.txt` is for agents, not crawlers, so it stays out too.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
