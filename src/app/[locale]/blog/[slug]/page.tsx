import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Calendar, User, Clock, ChevronLeft } from "lucide-react";
import { Link } from "@/navigation";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the post data based on the slug
  // For now, we'll use mock data
  const post = {
    title: "How to Choose the Best IPTV Service for 4K Streaming",
    date: "April 15, 2026",
    author: "Admin",
    readTime: "5 min read",
    content: `
      Choosing the right IPTV service is crucial for a smooth and high-quality entertainment experience. 
      With so many options available, it's easy to get overwhelmed. In this guide, we'll walk you through 
       the key factors to consider when selecting an IPTV provider.

      ### 1. Channel Selection
      The first thing you should look for is a diverse range of channels. Does the provider offer your 
      favorite sports networks, international news, and local channels? Premium TV services like ours 
      provide over 20,000 live channels to ensure you never miss out.

      ### 2. Streaming Quality
      Stability is king. 4K Ultra HD sounds great, but it's only enjoyable if it's stable. Look for 
      providers with anti-freeze technology and multiple server locations.

      ### 3. Device Compatibility
      Can you watch on your Smart TV, Android box, and smartphone? A good service should support 
      all major platforms.

      ### 4. Customer Support
      Technical issues happen. When they do, you need a team that responds quickly. 24/7 support 
      is a must-have for a premium experience.
    `,
  };

  return (
    <div className="flex flex-col w-full pt-32 pb-24">
      <article className="container mx-auto px-6 max-w-4xl">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-gold-primary mb-8 hover:translate-x-[-4px] transition-transform"
        >
          <ChevronLeft size={20} /> Back to Blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-wrap items-center gap-6 text-white/40 text-sm mb-6">
            <span className="flex items-center gap-2">
              <Calendar size={16} /> {post.date}
            </span>
            <span className="flex items-center gap-2">
              <User size={16} /> {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} /> {post.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bebas tracking-wide mb-12 gold-gradient">
            {post.title}
          </h1>

          <div className="aspect-video rounded-[32px] bg-white/5 border border-white/10 mb-12 overflow-hidden">
            {/* Mock Featured Image */}
            <div className="w-full h-full bg-gradient-to-br from-gold-primary/20 to-crimson-primary/10 flex items-center justify-center">
              <span className="text-white/20 font-bebas text-4xl">Featured Image</span>
            </div>
          </div>

          <div className="prose prose-invert prose-gold max-w-none font-inter text-white/70 leading-relaxed">
            {post.content.split('\n').map((para, i) => (
              para.trim().startsWith('###') ? (
                <h3 key={i} className="text-2xl font-bebas text-white mt-8 mb-4 tracking-wide">
                  {para.replace('###', '').trim()}
                </h3>
              ) : (
                <p key={i} className="mb-4">{para.trim()}</p>
              )
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold-primary flex items-center justify-center text-obsidian font-bold">
                A
              </div>
              <div>
                <p className="text-white font-bold">Written by Admin</p>
                <p className="text-white/40 text-xs text-uppercase tracking-widest">CONTENT STRATEGIST</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              {/* Social Share Mockups */}
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-gold-primary cursor-pointer transition-colors">
                T
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-gold-primary cursor-pointer transition-colors">
                F
              </div>
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
}
