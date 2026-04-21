"use client";

import { useTranslations } from "next-intl";
import { Mail, MessageSquare, Clock, Send, ShieldCheck, Headphones, Globe } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

export default function ContactPage() {
  const t = useTranslations("Contact");

  const contactInfo = [
    { icon: <MessageSquare className="w-6 h-6" />, label: "WhatsApp / Telegram", value: t("info.whatsapp"), desc: "Instant response during active hours" },
    { icon: <Clock className="w-6 h-6" />, label: "Business Hours", value: t("info.hours"), desc: "Monitoring servers 24/7/365" },
  ];

  return (
    <div className="min-h-screen bg-obsidian pt-12 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.05),transparent_50%)]" />
        <div className="hero-grid opacity-20" />

      {/* Header */}
      <section className="pt-32 pb-20 text-center relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-4 rounded-full border border-gold-primary/20 bg-gold-primary/5 text-gold-primary text-[10px] font-bold tracking-[0.4em] mb-8 uppercase"
          >
           24/7 Concierge
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
      </section>

      <section className="py-12 max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Contact Form */}
          <div className="lg:col-span-12 xl:col-span-7">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative group"
            >
              <div className="absolute -inset-1 bg-gold-primary/20 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-[#0A0A0C]/80 backdrop-blur-xl border border-white/5 rounded-[3rem] p-10 md:p-16 shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-primary/30 to-transparent" />
                
                <form className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-xs font-bold tracking-[0.3em] text-gold-primary uppercase ml-1 opacity-60">{t("form.name")}</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 outline-none focus:border-gold-primary/40 focus:bg-white/[0.05] transition-all text-lg font-inter text-white placeholder:text-white/10"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold tracking-[0.3em] text-gold-primary uppercase ml-1 opacity-60">{t("form.phone")}</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 outline-none focus:border-gold-primary/40 focus:bg-white/[0.05] transition-all text-lg font-inter text-white placeholder:text-white/10"
                        placeholder="+44 000 000 000"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-xs font-bold tracking-[0.3em] text-gold-primary uppercase ml-1 opacity-60">{t("form.subject")}</label>
                    <div className="relative">
                        <select className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 outline-none focus:border-gold-primary/40 focus:bg-white/[0.05] transition-all text-lg font-inter text-white appearance-none cursor-pointer">
                            <option className="bg-obsidian">Technical Support</option>
                            <option className="bg-obsidian">Billing Inquiry</option>
                            <option className="bg-obsidian">Channel Request</option>
                            <option className="bg-obsidian">Business Collaboration</option>
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
                            <Send size={20} className="rotate-90" />
                        </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold tracking-[0.3em] text-gold-primary uppercase ml-1 opacity-60">{t("form.message")}</label>
                    <textarea 
                      rows={6}
                      required
                      className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 outline-none focus:border-gold-primary/40 focus:bg-white/[0.05] transition-all text-lg font-inter text-white placeholder:text-white/10 resize-none"
                      placeholder="Describe your request in detail..."
                    ></textarea>
                  </div>

                  <button className="w-full group relative overflow-hidden py-6 rounded-[2rem] bg-gold-primary font-bebas text-3xl tracking-[0.3em] text-obsidian hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-gold-primary/10">
                    <div className="absolute inset-0 shimmer opacity-30 group-hover:opacity-100 transition-opacity" />
                    <span className="relative z-10 flex items-center justify-center gap-4">
                        {t("form.submit")}
                        <Send size={28} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-16">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
            >
                 <h3 className="text-5xl font-bebas tracking-widest text-white leading-tight">Global Support <span className="gold-gradient">Network</span></h3>
                 <div className="space-y-10">
                    {contactInfo.map((info, i) => (
                        <div key={i} className="flex gap-8 group cursor-pointer items-start">
                            <div className="w-16 h-16 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-gold-primary group-hover:bg-gold-primary group-hover:text-obsidian group-hover:border-gold-primary transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 shadow-lg">
                                {React.cloneElement(info.icon as React.ReactElement<{size: number}>, { size: 28 })}
                            </div>
                            <div className="pt-1">
                                <h4 className="text-white font-bebas tracking-widest text-2xl mb-2 group-hover:text-gold-primary transition-colors">{info.label}</h4>
                                <p className="text-gold-primary/60 font-bold font-inter text-sm mb-2 uppercase tracking-[0.1em]">{info.value}</p>
                                <p className="text-sm text-white/30 font-inter leading-relaxed">{info.desc}</p>
                            </div>
                        </div>
                    ))}
                 </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 rounded-[3rem] bg-gold-primary/[0.03] border border-gold-primary/20 space-y-8 relative overflow-hidden group hover-lift"
            >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gold-primary/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex items-center gap-5 text-gold-primary relative z-10">
                    <Headphones size={40} className="group-hover:rotate-12 transition-transform" />
                    <h4 className="text-3xl font-bebas tracking-widest">Priority Access</h4>
                </div>
                <p className="text-white/40 leading-relaxed font-inter text-lg relative z-10">
                    Subscribers of our <span className="text-white font-bold tracking-widest">ULTRA</span> & <span className="text-white font-bold tracking-widest">LIFETIME</span> plans receive VIP concierge support with response times under 30 minutes.
                </p>
                <div className="flex items-center gap-3 text-[10px] text-gold-primary font-bold tracking-[0.3em] uppercase relative z-10 bg-gold-primary/10 px-4 py-2 rounded-full w-fit">
                    <ShieldCheck size={16} /> Encryption Matrix Active
                </div>
            </motion.div>

            <div className="flex items-center gap-5 text-white/10 text-[10px] font-bold tracking-[0.5em] uppercase justify-center xl:justify-start">
                <Globe size={18} /> WORLDWIDE INFRASTRUCTURE HARMONY
            </div>
          </div>
        </div>
      </section>

      {/* Extra spacing */}
      <div className="h-24" />
    </div>
  );
}
