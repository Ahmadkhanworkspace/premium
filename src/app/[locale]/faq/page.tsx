import { FAQ } from "@/components/sections/FAQ";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const params = await props.params;
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: "Home.faq" });

  return {
    title: `${t("title")} | Premium TV Support`,
    description: t("subtitle"),
    keywords: ["IPTV FAQ", "How to install IPTV", "Best IPTV Europe Support", "IPTV Subscription Help", "Smart TV IPTV Setup"],
  };
}

export default function FAQPage() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gold-primary/5 blur-[120px] pointer-events-none" />
      <FAQ />
    </div>
  );
}
