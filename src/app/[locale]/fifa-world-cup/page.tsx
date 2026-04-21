import { useTranslations } from "next-intl";
import { Metadata } from "next";
import { FifaClient } from "@/components/sections/FifaClient";

export const metadata: Metadata = {
  title: "Watch FIFA World Cup Live in 4K - Premium IPTV Sports",
  description: "Experience the FIFA World Cup like never before with crystal clear 4K streaming and zero buffering on all sports channels.",
};

export default function FifaPage() {
  return <FifaClient />;
}

