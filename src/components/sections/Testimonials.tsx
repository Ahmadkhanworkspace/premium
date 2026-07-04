"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export function Testimonials() {
  const t = useTranslations("Home.testimonials");

  const testimonials = [
    {
      name: t("items.t1.name"),
      location: t("items.t1.location"),
      text: t("items.t1.text"),
    },
    {
      name: t("items.t2.name"),
      location: t("items.t2.location"),
      text: t("items.t2.text"),
    },
    {
      name: t("items.t3.name"),
      location: t("items.t3.location"),
      text: t("items.t3.text"),
    },
  ];

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-4 rounded-full border border-gold-primary/20 bg-gold-primary/5 text-gold-primary text-[10px] font-bold tracking-[0.3em] mb-6 uppercase"
          >
           User Experiences
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
            className="text-white/40 text-lg md:text-xl font-inter leading-relaxed"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="relative p-10 rounded-[3rem] border border-white/5 bg-white/[0.02] backdrop-blur-md group hover-lift overflow-hidden"
            >
              <div className="absolute top-8 right-10 opacity-5 text-gold-primary group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
                <Quote size={60} />
              </div>
              
              <div className="flex gap-1.5 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-gold-primary fill-gold-primary drop-shadow-[0_0_10px_rgba(201,168,76,0.3)]" />
                ))}
              </div>

              <p className="text-white/60 font-inter text-lg leading-relaxed mb-10 italic relative z-10">
                "{item.text}"
              </p>

              <div className="flex items-center gap-5 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gold-primary/10 border border-gold-primary/20 flex items-center justify-center font-bebas text-gold-primary text-2xl group-hover:rotate-12 transition-transform shadow-xl">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="font-bebas tracking-widest text-xl text-white">{item.name}</h4>
                  <p className="text-[10px] text-gold-primary/60 font-bold uppercase tracking-[0.3em]">{item.location}</p>
                </div>
              </div>

              {/* Advanced Decorative Accents */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent group-hover:via-gold-primary/40 transition-all duration-700" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold-primary/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
