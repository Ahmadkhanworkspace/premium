"use client";

import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQ() {
  const t = useTranslations("Home.faq");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    { q: t("items.q1.q"), a: t("items.q1.a") },
    { q: t("items.q2.q"), a: t("items.q2.a") },
    { q: t("items.q3.q"), a: t("items.q3.a") },
    { q: t("items.q4.q"), a: t("items.q4.a") },
  ];

  return (
    <section id="faq" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-4 rounded-full border border-gold-primary/20 bg-gold-primary/5 text-gold-primary text-[10px] font-bold tracking-[0.3em] mb-6 uppercase"
          >
           Support Center
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bebas tracking-wider mb-6"
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

        <div className="max-w-4xl mx-auto space-y-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "group rounded-[2rem] border transition-all duration-500 overflow-hidden",
                openIndex === idx 
                  ? "border-gold-primary/30 bg-gold-primary/[0.03] shadow-[0_20px_50px_-20px_rgba(201,168,76,0.1)]" 
                  : "border-white/5 bg-white/[0.01] hover:border-white/20"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-8 text-left flex items-center justify-between gap-6"
              >
                <span className={cn(
                    "text-xl md:text-2xl font-bebas tracking-widest transition-colors duration-300",
                    openIndex === idx ? "text-gold-primary" : "text-white/80 group-hover:text-white"
                )}>
                  {item.q}
                </span>
                <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500",
                    openIndex === idx ? "bg-gold-primary text-obsidian rotate-180" : "bg-white/5 text-white/40 group-hover:bg-white/10 group-hover:text-white"
                )}>
                  <ChevronDown size={24} />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
                  >
                    <div className="px-8 pb-8 text-white/40 font-inter text-lg leading-relaxed border-t border-white/5 pt-6">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Premium Background Elements */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gold-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold-primary/3 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
}
