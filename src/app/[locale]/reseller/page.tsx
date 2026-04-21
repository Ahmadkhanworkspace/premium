import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ResellerClient } from "@/components/sections/ResellerClient";

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const params = await props.params;
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: "Reseller" });

  return {
    title: t("title"),
    description: t("subtitle"),
    keywords: ["IPTV Reseller", "Start IPTV Business", "Reseller Panel IPTV", "Wholesale IPTV Credits", "Best IPTV Reseller 2026"],
  };
}

export default function ResellerPage() {
  return <ResellerClient />;
}
