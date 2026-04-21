import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium IPTV Pricing - Affordable Entertainment Overseas",
  description: "Explore our flexible pricing plans for premium IPTV services throughout Europe. 4K quality, 20,000+ channels, and 24/7 support.",
};

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
