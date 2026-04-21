"use client";

import { useTranslations } from "next-intl";
import { Shield, Users, Server, Globe, CheckCircle2, Award } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

export default function AboutPage() {
  const t = useTranslations("About");

  const stats = [
    { label: t("stats.users"), value: "100k+", icon: <Users /> },
    { label: t("stats.uptime"), value: "99.99%", icon: <Server /> },
    { label: t("stats.support"), value: "24/7", icon: <Shield /> },
  ];

  return (
    <div className="min-h-screen bg-obsidian pt-12">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.08),transparent_50%)]" />
        <div className="hero-grid opacity-20" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block py-1 px-4 rounded-full border border-gold-primary/20 bg-gold-primary/5 text-gold-primary text-[10px] font-bold tracking-[0.4em] mb-8 uppercase"
            >
                Our Legacy
            </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.2, 0, 0, 1] }}
            className="text-6xl md:text-9xl font-bebas tracking-wide mb-10"
          >
            <span className="gold-gradient">{t("title")}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-white/40 text-xl md:text-3xl max-w-3xl mx-auto font-inter leading-relaxed tracking-tight"
          >
            {t("subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-[3rem] p-12 text-center group hover-lift group"
              >
                <div className="w-20 h-20 rounded-3xl bg-gold-primary/5 border border-gold-primary/10 flex items-center justify-center text-gold-primary mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-gold-primary/10 transition-all duration-500">
                  {React.cloneElement(stat.icon as React.ReactElement<{size: number}>, { size: 32 })}
                </div>
                <div className="text-5xl font-bebas tracking-wider text-white mb-3">{stat.value}</div>
                <div className="text-gold-primary/40 font-bebas tracking-[0.3em] uppercase text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative group">
                <div className="absolute -inset-1 bg-gold-primary/20 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-[#0A0A0C] border border-white/5 rounded-[3rem] p-10 md:p-16 backdrop-blur-sm overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-primary/30 to-transparent" />
                    <h2 className="text-4xl md:text-5xl font-bebas tracking-wide mb-8">{t("missionTitle")}</h2>
                    <p className="text-white/40 text-xl leading-relaxed mb-12 font-inter">
                        {t("missionDesc")}
                    </p>
                    <ul className="space-y-6">
                        {[
                            "High-availability decentralized server network",
                            "Proprietary anti-freeze technology",
                            "Direct source streams for minimum latencies",
                            "Dedicated hardware optimized for 4K delivery"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-white/70 group/item">
                                <div className="w-6 h-6 rounded-lg bg-gold-primary/10 flex items-center justify-center group-hover/item:bg-gold-primary/20 transition-colors">
                                    <CheckCircle2 className="text-gold-primary" size={14} />
                                </div>
                                <span className="font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-12"
          >
            <div>
              <div className="inline-flex items-center gap-3 text-gold-primary mb-6 font-bebas tracking-[0.3em] uppercase text-sm">
                <Award size={24} /> Excellence in Streaming
              </div>
              <h3 className="text-5xl md:text-7xl font-bebas tracking-tight leading-[0.9] mb-8">
                Built for the Most <span className="gold-gradient">Demanding</span> Viewers
              </h3>
              <p className="text-white/40 text-xl font-inter leading-relaxed mb-12">
                We believe that premium television should be accessible to everyone. Our infrastructure is designed from the ground up to handle massive viewer counts during global events while maintaining crystal clear quality.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/5">
                <div>
                    <h4 className="text-white font-bebas tracking-widest text-2xl mb-2">50+ Countries</h4>
                    <p className="text-sm text-white/30 font-inter">Delivering local and international content everywhere.</p>
                </div>
                <div>
                     <h4 className="text-white font-bebas tracking-widest text-2xl mb-2">8 Years Experience</h4>
                    <p className="text-sm text-white/30 font-inter">Continuous innovation in IPTV technology.</p>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-32 relative bg-white/[0.01] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Globe className="w-24 h-24 text-gold-primary/20 mx-auto mb-10 animate-pulse" />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bebas tracking-wide mb-8">Localized for all of Europe</h2>
          <p className="text-white/40 max-w-2xl mx-auto text-xl font-inter leading-relaxed mb-16">
            With over 500 local servers across the continent, we ensure the lowest possible ping and the highest possible resolution for every subscriber, regardless of their location.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {['UK', 'Germany', 'France', 'Italy', 'Spain', 'Netherlands', 'Sweden'].map((c, i) => (
                <motion.span 
                    key={c}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="px-6 py-2 border border-white/10 rounded-full text-xs font-bold tracking-[0.2em] text-white/40 hover:border-gold-primary/40 hover:text-gold-primary transition-all cursor-default"
                >
                    {c}
                </motion.span>
            ))}
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-primary/5 rounded-full blur-[160px] pointer-events-none" />
      </section>
    </div>
  );
}
