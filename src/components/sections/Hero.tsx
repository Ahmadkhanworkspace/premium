"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/navigation";
import { ChevronRight, Play } from "lucide-react";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";


export function Hero() {
  const t = useTranslations("Home.hero");
  const s = useTranslations("Home.stats");

  const stats = [
    { label: s("channels"), icon: "20K+" },
    { label: s("quality"), icon: "4K" },
    { label: s("countries"), icon: "50+" },
    { label: s("uptime"), icon: "99.9%" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Texture */}
      <div className="hero-grid opacity-40" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-gold-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-gold-primary/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container relative z-10 mx-auto px-6 pt-32 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.2, 0, 0, 1] }}
          className="max-w-5xl mx-auto"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-px w-8 bg-gold-primary/30" />
            <span className="text-gold-light text-xs font-bold tracking-[0.4em] uppercase">
             Television Reimagined
            </span>
            <div className="h-px w-8 bg-gold-primary/30" />
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bebas tracking-tighter leading-[0.85] mb-10">
            <span className="block text-white mb-2">{t("headline").split(" ").slice(0, 2).join(" ")}</span>
            <span className="block gold-gradient drop-shadow-[0_0_30px_rgba(201,168,76,0.3)]">{t("headline").split(" ").slice(2).join(" ")}</span>
          </h1>

          <p className="text-lg md:text-2xl text-white/50 max-w-2xl mx-auto mb-14 font-inter leading-relaxed tracking-tight">
            {t("subheadline")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-24">
            <a
              href={getWhatsAppLink(WHATSAPP_MESSAGES.TRIAL)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-12 py-5 bg-gold-primary rounded-full text-obsidian font-bold tracking-widest font-bebas text-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(201,168,76,0.3)]"
            >
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 flex items-center gap-3">
                {t("ctaPrimary")} <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <Link
              href="/channels"
              className="group px-10 py-5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all font-bold tracking-widest font-bebas text-2xl flex items-center gap-3 active:scale-95"
            >
              <div className="w-8 h-8 rounded-full bg-gold-primary/10 flex items-center justify-center group-hover:bg-gold-primary/20 transition-colors">
                <Play size={18} className="text-gold-primary fill-gold-primary" />
              </div>
              {t("ctaSecondary")}
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-4xl mx-auto p-8 rounded-[3rem] border border-white/5 bg-white/[0.01] backdrop-blur-sm">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                className="flex flex-col items-center group cursor-default"
              >
                <span className="text-4xl md:text-5xl font-bebas text-white group-hover:text-gold-primary transition-colors duration-500 mb-2">{stat.icon}</span>
                <span className="text-[10px] text-gold-primary/60 uppercase tracking-[0.2em] font-bold text-center">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 left-10 text-white/5 font-bebas text-9xl -rotate-90 select-none hidden xl:block"
      >
        PREMIUM
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0] }} 
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/3 right-10 text-white/5 font-bebas text-9xl rotate-90 select-none hidden xl:block"
      >
        ULTRA HD
      </motion.div>

      {/* Elegant Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent" />
    </section>
  );
}
