import { useTranslations } from "next-intl";
import { Metadata } from "next";
import { ChannelsClient } from "@/components/sections/ChannelsClient";

export const metadata: Metadata = {
  title: "Premium IPTV Channel List - 20,000+ Channels Worldwide",
  description: "Browse our complete list of premium IPTV channels including Sports, Movies, News, and more in 4K Ultra HD.",
};

export default function ChannelsPage() {
  return <ChannelsClient />;
}

