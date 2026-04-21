import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { inter, bebasNeue, playfairDisplay } from "@/lib/fonts";
import "@/app/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Cursor } from "@/components/ui/Cursor";
import { StructuredData } from "@/components/seo/StructuredData";
import { locales } from "@/navigation";

import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const params = await props.params;
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: "Home.hero" });

  return {
    title: "Premium IPTV Services - #1 Premium Provider in Europe",
    description: t("subheadline"),
    keywords: ["IPTV", "Premium IPTV", "4K Streaming", "Live Channels", "European TV", "F1 Live", "Football Live"],
    openGraph: {
      title: "Premium IPTV Services - Television Reimagined",
      description: t("subheadline"),
      type: "website",
      locale: locale,
    },
    twitter: {
      card: "summary_large_image",
      title: "Premium IPTV Services",
      description: t("subheadline"),
    },
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}`])
      ),
    }
  };
}

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const locale = params.locale;
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${bebasNeue.variable} ${playfairDisplay.variable}`}>
      <body className="bg-obsidian text-white min-h-screen selection:bg-gold-primary selection:text-obsidian flex flex-col">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <StructuredData locale={locale} />
          <Cursor />
          <Navbar />
          <main className="flex-grow pt-20">
            {props.children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
