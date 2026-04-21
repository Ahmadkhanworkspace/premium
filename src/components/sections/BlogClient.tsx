"use client";

import { motion } from "framer-motion";
import { Link } from "@/navigation";
import { Calendar, User, ArrowRight } from "lucide-react";

export function BlogClient({ posts }: { posts: any[] }) {
  return (
    <div className="min-h-screen bg-obsidian pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-bebas tracking-wide mb-8"
          >
            <span className="gold-gradient">Premium Blog</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/50 text-xl max-w-2xl mx-auto font-inter"
          >
            Stay updated with the latest news, guides, and updates from the world of premium IPTV.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-3xl overflow-hidden group hover:border-gold-primary/30 transition-all duration-500"
            >
              <div className="aspect-video bg-white/[0.02] relative flex items-center justify-center border-b border-white/5">
                <span className="text-gold-primary/20 font-bebas text-4xl tracking-widest">PREMIUM TV</span>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-gold-primary font-bold tracking-widest uppercase mb-4">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 bg-white/20 rounded-full" />
                  <span className="text-white/30">{post.date}</span>
                </div>
                <h2 className="text-2xl font-bebas tracking-wide mb-4 group-hover:text-gold-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-white/40 text-sm font-inter leading-relaxed mb-8">
                  {post.excerpt}
                </p>
                <Link 
                    href="#" 
                    className="flex items-center gap-2 text-gold-primary font-bold text-sm tracking-widest uppercase"
                >
                    Read More <ArrowRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
