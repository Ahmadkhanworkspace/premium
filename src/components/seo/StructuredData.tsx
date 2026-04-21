import { useTranslations } from "next-intl";

export function StructuredData({ locale }: { locale: string }) {
  const t = useTranslations("Home.hero");

  const OrganizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Premium IPTV Services",
    "url": `https://premiumtv.services/${locale}`,
    "logo": "https://premiumtv.services/logo.png",
    "description": t("subheadline"),
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "EU"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44 700 000 000",
      "contactType": "customer service"
    }
  };

  const WebsiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Premium IPTV Services",
    "url": `https://premiumtv.services/${locale}`,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `https://premiumtv.services/${locale}/channels?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(OrganizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WebsiteData) }}
      />
    </>
  );
}
