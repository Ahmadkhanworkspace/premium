"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/navigation";
import { Check, Star, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";


export function Pricing() {
  const t = useTranslations("Home.pricing");

  const features = [
    t("featuresList.channels"),
    t("featuresList.vod"),
    t("featuresList.quality"),
    t("featuresList.devices"),
    t("featuresList.catchup"),
    t("featuresList.support"),
  ];

  const plans = [
    {
      id: "m1",
      name: "Starter Pass", // t("plans.m1.name")
      price: "14.99",
      duration: "1 " + t("monthly"),
      popular: false,
    },
    {
      id: "m3",
      name: "Quarterly Access",
      price: "24.99",
      duration: "3 " + t("months"),
      popular: false,
    },
    {
      id: "m6",
      name: "Premium Elite",
      price: "34.99",
      duration: "6 " + t("months"),
      popular: true,
    },
    {
      id: "m12",
      name: "Ultimate Yearly",
      price: "54.99",
      duration: "1 " + t("year"),
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-32 relative overflow-hidden bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-4 rounded-full border border-gold-primary/20 bg-gold-primary/5 text-gold-primary text-[10px] font-bold tracking-[0.3em] mb-6 uppercase"
          >
           Elite Subscriptions
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bebas tracking-wider mb-6"
          >
            <span className="gold-gradient">{t("title")}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-xl text-white/40 font-inter leading-relaxed"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className={cn(
                "group relative flex flex-col p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border transition-all duration-700 hover-lift",
                plan.popular 
                  ? "border-gold-primary bg-gold-primary/[0.03] lg:scale-110 z-10 shadow-[0_40px_100px_-20px_rgba(201,168,76,0.15)]" 
                  : "border-white/5 bg-white/[0.02] hover:border-white/20"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 md:-top-5 left-1/2 -translate-x-1/2 bg-gold-primary text-obsidian px-4 md:px-6 py-1 md:py-1.5 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-1 shadow-2xl z-20">
                  <Star size={12} fill="currentColor" /> {t("popular")}
                </div>
              )}

              <div className="mb-8 md:mb-10 text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bebas tracking-wide mb-3 md:mb-4 text-white group-hover:text-gold-primary transition-colors">{plan.name}</h3>
                <div className="flex items-baseline justify-center lg:justify-start gap-2">
                  <span className="text-5xl md:text-6xl font-bebas text-gold-primary">€{plan.price}</span>
                  <span className="text-xs md:text-sm text-white/30 font-inter uppercase tracking-widest font-bold">/ {plan.duration}</span>
                </div>
              </div>

              <div className="flex-grow mb-10">
                <ul className="space-y-5">
                  {features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-4 text-sm text-white/50 font-inter group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-gold-primary/5 border border-gold-primary/10 flex items-center justify-center group-hover/item:bg-gold-primary/10 transition-all">
                        <Check size={14} className="text-gold-primary" />
                      </div>
                      <span className="group-hover/item:text-white transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={getWhatsAppLink(WHATSAPP_MESSAGES.ORDER(plan.name))}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-full py-5 rounded-2xl font-bebas text-2xl tracking-[0.2em] transition-all duration-500 text-center block relative overflow-hidden group/btn px-6",
                  plan.popular
                    ? "bg-gold-primary text-obsidian hover:scale-[1.02] shadow-xl"
                    : "bg-white/5 text-white hover:bg-gold-primary hover:text-obsidian border border-white/10 hover:border-gold-primary"
                )}
              >
                <div className={cn("absolute inset-0 shimmer", plan.popular ? "opacity-40" : "opacity-0 group-hover/btn:opacity-40")} />
                <span className="relative z-10 flex items-center justify-center gap-2">
                    Choose Plan <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </a>

              {/* Background Accent */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold-primary/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
