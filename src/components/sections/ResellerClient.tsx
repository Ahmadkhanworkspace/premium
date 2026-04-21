"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Zap, BarChart3, Users, Globe } from "lucide-react";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import React from "react";

export function ResellerClient() {
  const t = useTranslations("Reseller");

  const benefits = [
    { title: t("benefits.b1Title"), desc: t("benefits.b1Desc"), icon: <BarChart3 className="text-gold-primary" /> },
    { title: t("benefits.b2Title"), desc: t("benefits.b2Desc"), icon: <ShieldCheck className="text-gold-primary" /> },
    { title: t("benefits.b3Title"), desc: t("benefits.b3Desc"), icon: <Zap className="text-gold-primary" /> },
    { title: t("benefits.b4Title"), desc: t("benefits.b4Desc"), icon: <Users className="text-gold-primary" /> },
  ];

  const panelFeatures = [
    "Manage Customer Lines",
    "Create 24h Free Trials",
    "Instant Credits Delivery",
    "Powerful Management Panel",
    "Work with Multi-DNS",
    "High Profit Margins",
  ];

  return (
    <div className="flex flex-col w-full pt-12 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-32 mb-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.05),transparent_50%)]" />
        <div className="hero-grid opacity-20" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.2, 0, 0, 1] }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-4 rounded-full border border-gold-primary/20 bg-gold-primary/5 text-gold-primary text-[10px] font-bold tracking-[0.4em] mb-8 uppercase"
          >
            Business Opportunity
          </motion.div>
          <h1 className="text-6xl md:text-9xl font-bebas tracking-wider mb-10 leading-[0.85]">
            Start Your Own <br /><span className="gold-gradient drop-shadow-[0_0_30px_rgba(201,168,76,0.3)]">IPTV Business</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/40 max-w-2xl mx-auto mb-14 font-inter leading-relaxed tracking-tight">
            {t("subtitle")}
          </p>
          <a
            href={getWhatsAppLink(WHATSAPP_MESSAGES.RESELLER)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-6 bg-gold-primary rounded-full text-obsidian font-bold tracking-[0.2em] font-bebas text-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(201,168,76,0.2)] group"
          >
            <div className="absolute inset-0 shimmer opacity-40" />
            <span className="relative z-10 flex items-center gap-2">
                {t("cta")} <Zap size={24} className="group-hover:text-white transition-colors" />
            </span>
          </a>
        </motion.div>
      </section>

      {/* Benefits Content */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="p-10 rounded-[3rem] border border-white/5 bg-white/[0.02] backdrop-blur-md hover-lift group overflow-hidden"
            >
              <div className="w-16 h-16 rounded-2xl bg-gold-primary/5 border border-gold-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-gold-primary/10 transition-all duration-500">
                {React.cloneElement(benefit.icon as React.ReactElement<{size: number}>, { size: 32 })}
              </div>
              <h3 className="text-2xl font-bebas tracking-wide mb-4 text-white group-hover:text-gold-primary transition-colors">{benefit.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed font-inter">{benefit.desc}</p>
              
              <div className="absolute -bottom-6 -right-6 text-9xl font-bebas text-white/[0.01] select-none group-hover:text-gold-primary/5 transition-colors duration-700">
                {idx + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Panel Feature Preview */}
      <section className="container mx-auto px-6 mb-24">
        <div className="rounded-[4rem] border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent p-10 md:p-20 flex flex-col lg:flex-row items-center gap-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-primary/5 rounded-full blur-[140px] pointer-events-none" />
          
          <div className="flex-1 z-10">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-5xl md:text-7xl font-bebas mb-8 tracking-tight leading-[0.9]">
                The Most Powerful <span className="gold-gradient">Reseller Panel</span>
                </h2>
                <p className="text-white/40 mb-12 font-inter text-xl leading-relaxed">
                Take complete control of your business with our intuitive management interface. Everything you need to scale your income is right at your fingertips.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
                {panelFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-white/60 font-inter group">
                    <div className="w-6 h-6 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                        <Check size={14} className="text-green-500" />
                    </div>
                    <span className="font-medium group-hover:text-white transition-colors">{feature}</span>
                    </li>
                ))}
                </ul>
                <a
                href={getWhatsAppLink(WHATSAPP_MESSAGES.RESELLER)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-5 border-2 border-gold-primary text-gold-primary rounded-full font-bebas text-2xl tracking-[0.2em] hover:bg-gold-primary hover:text-obsidian transition-all active:scale-95 shadow-lg shadow-gold-primary/5"
                >
                Apply for Access
                </a>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex-1 relative z-10 w-full"
          >
            <div className="aspect-video rounded-[3rem] bg-[#0A0A0C] border border-white/5 overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] relative group">
              <div className="absolute inset-0 flex items-center justify-center">
                <Globe className="w-48 h-48 text-gold-primary/5 group-hover:scale-110 transition-transform duration-1000" />
              </div>
              
              {/* Fake Dashboard Elements */}
              <div className="absolute inset-8 flex flex-col gap-6">
                <div className="h-4 bg-white/5 rounded-full w-1/4 animate-pulse" />
                <div className="grid grid-cols-3 gap-6">
                    <div className="h-32 bg-gold-primary/5 border border-gold-primary/10 rounded-3xl" />
                    <div className="h-32 bg-white/5 border border-white/10 rounded-3xl" />
                    <div className="h-32 bg-white/5 border border-white/10 rounded-3xl" />
                </div>
                <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-3xl p-6">
                    <div className="space-y-4">
                        <div className="h-3 bg-white/5 rounded-full w-full" />
                        <div className="h-3 bg-white/5 rounded-full w-5/6" />
                        <div className="h-3 bg-white/5 rounded-full w-4/6" />
                    </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Glow behind dashboard */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold-primary/20 rounded-full blur-[100px] -z-10 group-hover:bg-gold-primary/30 transition-all duration-1000" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
