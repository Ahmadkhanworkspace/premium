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
      "telephone": "+44 798 859 5964",
      "contactType": "customer service",
      "availableLanguage": ["English", "French", "German", "Spanish", "Arabic"]
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

  const BreadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `https://premiumtv.services/${locale}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Pricing",
        "item": `https://premiumtv.services/${locale}/pricing`
      }
    ]
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BreadcrumbData) }}
      />
    </>
  );
}
