import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const params = await props.params;
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: "Home.pricing" });

  return {
    title: `${t("title")} | Premium IPTV Subscriptions`,
    description: t("subtitle"),
    keywords: ["IPTV Pricing", "Cheap IPTV Europe", "Premium IPTV Subscription", "Best IPTV 2026", "4K Streaming Pass"],
  };
}

export default function PricingPage() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.05),transparent_50%)] pointer-events-none" />
      <Pricing />
      <div className="relative pt-24">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gold-primary/5 blur-[120px] pointer-events-none" />
        <FAQ />
      </div>
    </div>
  );
}
