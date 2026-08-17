import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // The design guide is an internal reference, not a public page.
      disallow: ['/design-system', '/api/'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
