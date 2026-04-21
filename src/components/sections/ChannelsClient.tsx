"use client";

import { Search, Tv, Trophy, Film, Newspaper, Baby, Globe, Music } from "lucide-react";
import { motion } from "framer-motion";

import { useTranslations } from "next-intl";

export function ChannelsClient() {
  const t = useTranslations("Channels");
  const categories = [
    { id: "all", icon: <Tv className="w-6 h-6" />, label: t("categories.all"), count: "20,000+" },
    { id: "sports", icon: <Trophy className="w-6 h-6" />, label: t("categories.sports"), count: "5,000+" },
    { id: "movies", icon: <Film className="w-6 h-6" />, label: t("categories.movies"), count: "8,000+" },
    { id: "news", icon: <Newspaper className="w-6 h-6" />, label: t("categories.news"), count: "1,500+" },
    { id: "kids", icon: <Baby className="w-6 h-6" />, label: t("categories.kids"), count: "2,000+" },
    { id: "documentary", icon: <Globe className="w-6 h-6" />, label: t("categories.documentary"), count: "1,200+" },
    { id: "music", icon: <Music className="w-6 h-6" />, label: t("categories.music"), count: "1,000+" },
  ];

  return (
    <div className="min-h-screen bg-obsidian pt-24 pb-32 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.08),transparent_60%)]" />
            <div className="hero-grid opacity-20" />
        </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-4 rounded-full border border-gold-primary/20 bg-gold-primary/5 text-gold-primary text-[10px] font-bold tracking-[0.4em] mb-8 uppercase"
          >
            Digital Library
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.2, 0, 0, 1] }}
            className="text-6xl md:text-9xl font-bebas tracking-wide mb-8 leading-[0.85]"
          >
            <span className="gold-gradient drop-shadow-[0_0_30px_rgba(201,168,76,0.3)]">{t("title")}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-xl md:text-2xl max-w-2xl mx-auto font-inter leading-relaxed tracking-tight"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto mb-24 relative"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gold-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition duration-1000" />
            <div className="relative flex items-center bg-[#0A0A0C]/80 border border-white/5 rounded-[2rem] px-8 py-6 backdrop-blur-xl shadow-2xl transition-all group-hover:bg-white/[0.02]">
              <Search className="text-gold-primary w-8 h-8 mr-6 group-hover:scale-110 transition-transform" />
              <input 
                type="text" 
                placeholder={t("searchPlaceholder")}
                className="bg-transparent border-none outline-none text-white w-full text-2xl font-inter placeholder:text-white/10"
              />
              <div className="hidden md:flex gap-2 items-center text-white/20 text-[10px] font-bold uppercase tracking-widest pl-4 border-l border-white/10">
                <kbd className="px-2 py-1 bg-white/5 rounded">CTRL</kbd>
                <kbd className="px-2 py-1 bg-white/5 rounded">K</kbd>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <motion.div 
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-gold-primary/30 transition-all duration-500 cursor-pointer overflow-hidden shadow-xl hover-lift"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-primary/5 rounded-full blur-3xl group-hover:bg-gold-primary/10 transition-all" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gold-primary/10 flex items-center justify-center text-gold-primary mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  {cat.icon}
                </div>
                <h3 className="text-3xl font-bebas tracking-[0.1em] text-white mb-3 group-hover:text-gold-primary transition-colors">
                  {cat.label}
                </h3>
                <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-gold-primary/40 group-hover:bg-gold-primary transition-colors" />
                    <p className="text-white/30 font-bold font-inter text-[10px] tracking-[0.3em] uppercase group-hover:text-white/50 transition-colors">
                      {cat.count} Channels
                    </p>
                </div>
              </div>

              {/* Decorative Corner */}
               <div className="absolute bottom-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
                    <Tv className="w-12 h-12 text-gold-primary -rotate-12" />
               </div>
            </motion.div>
          ))}
        </div>

        {/* Features Minimal Section */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-12"
        >
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="text-center group border-l border-white/5 pl-8 md:pl-0 md:border-l-0">
               <div className="h-px w-8 bg-gold-primary/20 mb-4 mx-auto hidden md:block" />
              <div className="text-white/40 font-bebas text-2xl mb-2 tracking-[0.2em] group-hover:text-gold-primary transition-all group-hover:translate-x-2 md:group-hover:translate-x-0 md:group-hover:-translate-y-1">
                {t(`features.f${i}`)}
              </div>
              <div className="text-[8px] font-bold tracking-[0.3em] text-white/10 uppercase group-hover:text-gold-primary/20 transition-colors">Quality Standard</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
