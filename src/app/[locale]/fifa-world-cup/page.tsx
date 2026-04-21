import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { FifaClient } from "@/components/sections/FifaClient";

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const params = await props.params;
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: "Fifa" });

  return {
    title: `${t("title")} | Official 2026 Fixtures & 4K Streaming`,
    description: t("subtitle"),
    keywords: ["FIFA World Cup 2026", "World Cup IPTV", "Live Sports 4K", "Football Streaming Europe", "2026 Match Schedule"],
    openGraph: {
      title: t("title"),
      description: t("subtitle"),
      images: ['/og-fifa.jpg'],
    }
  };
}

export default function FifaPage() {
  return <FifaClient />;
}

