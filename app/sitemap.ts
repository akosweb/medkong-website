import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

/** Only the homepage is indexable; /design-system is deliberately absent. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
