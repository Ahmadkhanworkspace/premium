import { Metadata } from "next";
import { BlogClient } from "@/components/sections/BlogClient";

export const metadata: Metadata = {
  title: "Premium IPTV Blog - Guides, News & Updates",
  description: "Read the latest guides and news from the world of premium IPTV streaming. Learn how to optimize your setup for the best 4K experience.",
};

const posts = [
  {
    title: "How to set up IPTV on your Smart TV",
    excerpt: "A complete guide to configuring your premium service on Samsung, LG, and Android TVs.",
    date: "April 12, 2026",
    author: "Admin",
    category: "Guide"
  },
  {
    title: "Top 10 Channels for Sports Fans in 2026",
    excerpt: "Never miss a game with our curated list of 4K sports channels worldwide.",
    date: "April 10, 2026",
    author: "Sports Desk",
    category: "Sports"
  },
  {
    title: "Understanding IPTV Buffering and How to Fix It",
    excerpt: "Expert tips on optimizing your connection for zero-lag 4K streaming.",
    date: "April 08, 2026",
    author: "Tech Team",
    category: "Tech"
  }
];

export default function BlogPage() {
  return <BlogClient posts={posts} />;
}
