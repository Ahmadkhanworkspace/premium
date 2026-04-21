import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { locales } from "@/navigation";

const countries = [
  "united-kingdom", "france", "germany", "spain", "italy", 
  "netherlands", "sweden", "belgium", "austria", "switzerland"
];

function formatCountryName(slug: string) {
  return slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

export function generateStaticParams() {
  const params: { locale: string; country: string }[] = [];
  locales.forEach((locale) => {
    countries.forEach((country) => {
      params.push({ locale, country });
    });
  });
  return params;
}

export async function generateMetadata(props: { params: Promise<{ locale: string; country: string }> }): Promise<Metadata> {
  const params = await props.params;
  const countryName = formatCountryName(params.country);
  const t = await getTranslations({ locale: params.locale, namespace: "Countries" });

  return {
    title: `${t("title", { country: countryName })} | #1 4K IPTV`,
    description: t("subtitle", { country: countryName }),
    keywords: [`IPTV ${countryName}`, `Best IPTV in ${countryName}`, `Watch 4K TV ${countryName}`, `Live Sports ${countryName}`],
  };
}

export default async function CountryPage(props: { params: Promise<{ locale: string; country: string }> }) {
  const params = await props.params;
  const countryName = formatCountryName(params.country);
  const t = await getTranslations({ locale: params.locale, namespace: "Countries" });

  return (
    <div className="flex flex-col w-full">
      {/* Specialized Hero Content for Country */}
      <section className="pt-32 pb-20 bg-obsidian relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="inline-block py-1 px-4 rounded-full border border-gold-primary/20 bg-gold-primary/5 text-gold-primary text-[10px] font-bold tracking-[0.4em] mb-8 uppercase">
                Regional Authority: {countryName}
            </div>
            <h1 className="text-6xl md:text-8xl font-bebas tracking-wide mb-8 leading-[0.85] gold-gradient drop-shadow-[0_0_30px_rgba(201,168,76,0.2)]">
                {t("title", { country: countryName })}
            </h1>
            <p className="text-white/40 text-xl md:text-2xl max-w-3xl mx-auto font-inter leading-relaxed tracking-tight">
                {t("subtitle", { country: countryName })}
            </p>
        </div>
      </section>

      <Trust />
      <div className="divider-gold mx-auto w-1/2" />
      <Features />
      <div className="divider-gold mx-auto w-1/2 opacity-10" />
      <Pricing />
      <div className="divider-gold mx-auto w-1/2 opacity-10" />
      <FAQ />
    </div>
  );
}
