"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Monitor, Tv, Zap, Headphones } from "lucide-react";

export function Features() {
  const t = useTranslations("Home.features");

  const features = [
    {
      title: t("f1Title"),
      desc: t("f1Desc"),
      icon: <Tv className="text-gold-primary" size={32} />,
    },
    {
      title: t("f2Title"),
      desc: t("f2Desc"),
      icon: <Monitor className="text-gold-primary" size={32} />,
    },
    {
      title: t("f3Title"),
      desc: t("f3Desc"),
      icon: <Zap className="text-gold-primary" size={32} />,
    },
    {
      title: t("f4Title"),
      desc: t("f4Desc"),
      icon: <Headphones className="text-gold-primary" size={32} />,
    },
  ];

  return (
    <section id="features" className="py-32 relative overflow-hidden bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-4 rounded-full border border-gold-primary/20 bg-gold-primary/5 text-gold-primary text-[10px] font-bold tracking-[0.3em] mb-6 uppercase"
          >
           Cutting Edge Technology
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bebas tracking-wide mb-6"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 text-lg md:text-xl font-inter leading-relaxed"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group relative p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] hover-lift overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-primary/0 via-gold-primary/40 to-gold-primary/0 group-hover:via-gold-primary transition-all duration-700" />
              
              <div className="w-16 h-16 rounded-2xl bg-gold-primary/5 border border-gold-primary/10 flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:bg-gold-primary/10 group-hover:rotate-12 transition-all duration-500">
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bebas tracking-wider mb-4 text-white group-hover:text-gold-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-white/40 leading-relaxed font-inter text-sm">
                {feature.desc}
              </p>

              {/* Decorative Background numbers/stokes */}
              <div className="absolute -bottom-4 -right-2 text-8xl font-bebas text-white/[0.02] select-none group-hover:text-gold-primary/5 transition-colors duration-700">
                0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold-primary/3 rounded-full blur-[140px] pointer-events-none" />
    </section>
  );
}
