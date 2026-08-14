import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // The design guide is an internal reference, not a public page.
      disallow: ['/design-system', '/api/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
