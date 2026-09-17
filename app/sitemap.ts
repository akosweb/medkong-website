import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

/**
 * The homepage, the provider page, the MAC campaign page and /contact are indexable. `/design-system` is
 * deliberately absent — it's an internal reference, noindexed in its own
 * metadata and disallowed in robots.txt. `/llms.txt` is for agents, not
 * crawlers, so it stays out too. `/macs` is a redirect, not a page.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/providers`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/medicare-administrative-contractors`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ];
}
