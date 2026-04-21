import { MetadataRoute } from 'next';
import { locales } from '@/navigation';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://premiumtv.services';
  const paths = ['', '/channels', '/pricing', '/about', '/blog', '/faq', '/contact', '/reseller', '/fifa-world-cup'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    paths.forEach((path) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === '' ? 'daily' : 'weekly',
        priority: path === '' ? 1.0 : path === '/fifa-world-cup' ? 0.9 : 0.8,
      });
    });
  });

  return sitemapEntries;
}
