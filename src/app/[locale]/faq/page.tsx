import { FAQ } from "@/components/sections/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Premium IPTV Services",
  description: "Find answers to common questions about device support, activation times, VPN requirements, and more.",
};

export default function FAQPage() {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gold-primary/5 blur-[120px] pointer-events-none" />
      <FAQ />
    </div>
  );
}
