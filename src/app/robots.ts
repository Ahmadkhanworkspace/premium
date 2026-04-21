import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      {
        userAgent: ['Google-Extended', 'GPTBot', 'CommonCrawl', 'anthropic-ai', 'PerplexityBot'],
        allow: '/',
      }
    ],
    sitemap: 'https://premiumtv.services/sitemap.xml',
  };
}
