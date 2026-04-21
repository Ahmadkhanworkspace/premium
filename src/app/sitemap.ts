import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://premiumtv.services';
  const locales = ['en', 'de', 'fr', 'es', 'it'];
  const paths = ['', '/channels', '/pricing', '/about', '/blog', '/faq', '/contact', '/reseller', '/fifa-world-cup'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    paths.forEach((path) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: path === '' ? 1 : 0.8,
      });
    });
  });

  return sitemapEntries;
}
