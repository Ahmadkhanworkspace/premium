"use client";

import { useTranslations } from "next-intl";
import { CheckCircle2, CreditCard, ShieldCheck, Mail, ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Link } from "@/navigation";
import { useSearchParams } from "next/navigation";

export default function OrderPage() {
  const searchParams = useSearchParams();
  const planId = searchParams.get("plan") || "pro";
  const t = useTranslations("Home.pricing");

  const planNames: Record<string, string> = {
    basic: t("plans.basic.name"),
    pro: t("plans.pro.name"),
    ultra: t("plans.ultra.name"),
  };

  const planPrices: Record<string, string> = {
    basic: t("plans.basic.price"),
    pro: t("plans.pro.price"),
    ultra: t("plans.ultra.price"),
  };

  const schema = z.object({
    email: z.string().email("Please enter a valid email address"),
  });

  type FormData = z.infer<typeof schema>;

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const planName = planNames[planId as string] || "Pro";
    const message = `Hi! I would like to order the ${planName} plan. My email is: ${data.email}`;
    window.open(getWhatsAppLink(message), "_blank");
  };

  return (
    <div className="min-h-screen bg-obsidian pt-48 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.05),transparent_50%)]" />
        <div className="hero-grid opacity-10" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-4 rounded-full border border-gold-primary/20 bg-gold-primary/5 text-gold-primary text-[10px] font-bold tracking-[0.4em] mb-8 uppercase"
          >
            Checkout
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-bebas tracking-wide mb-8"
          >
            Complete Your <span className="gold-gradient">Order</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-xl font-inter leading-relaxed"
          >
            Securely finalize your premium entertainment subscription.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Order Summary */}
          <div className="lg:col-span-5 space-y-10">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass rounded-[3rem] p-10 border-gold-primary/20 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-primary/5 rounded-full blur-3xl group-hover:bg-gold-primary/10 transition-all" />
              <h3 className="text-2xl font-bebas tracking-widest text-gold-primary mb-10 uppercase">Order Summary</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center group/item">
                    <span className="text-white/60 font-inter text-lg group-hover:text-white transition-colors">{planNames[planId]} Subscription</span>
                    <span className="text-white font-bebas text-2xl">€{planPrices[planId]}</span>
                </div>
                <div className="flex justify-between items-center group/item">
                    <span className="text-white/30 font-inter text-sm group-hover:text-white/50 transition-colors uppercase tracking-widest">Access Duration</span>
                    <span className="text-white/50 font-inter text-sm font-bold uppercase tracking-widest">{planId === "basic" ? "1 Month" : planId === "pro" ? "6 Months" : "12 Months"}</span>
                </div>
              </div>
              
              <div className="h-px bg-white/5 my-10" />
              
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                    <span className="text-white/30 text-[10px] uppercase font-bold tracking-[0.3em] block">Total Amount</span>
                    <span className="text-white font-bebas text-2xl tracking-widest italic opacity-50">Incl. Taxes</span>
                </div>
                <span className="text-gold-primary font-bebas text-6xl drop-shadow-[0_0_20px_rgba(201,168,76,0.3)]">€{planPrices[planId]}</span>
              </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
                {[
                    { text: "Instant Activation", icon: <Zap size={14} className="text-gold-primary" /> },
                    { text: "24/7 Elite Support", icon: <ShieldCheck size={14} className="text-gold-primary" /> },
                    { text: "No Hidden Costs", icon: <CheckCircle2 size={14} className="text-gold-primary" /> },
                    { text: "SSL Encrypted", icon: <Mail size={14} className="text-gold-primary" /> }
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-gold-primary/5 flex items-center justify-center">
                            {item.icon}
                        </div>
                        <span className="text-sm font-medium text-white/50">{item.text}</span>
                    </div>
                ))}
            </motion.div>
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-7 space-y-10">
            <motion.form 
                onSubmit={handleSubmit(onSubmit)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-[#0A0A0C]/50 backdrop-blur-xl border border-white/5 rounded-[3rem] p-10 md:p-14 space-y-12 relative overflow-hidden group shadow-2xl"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-primary/20 to-transparent" />
                
                <div className="space-y-6">
                    <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-gold-primary text-obsidian flex items-center justify-center text-xl font-bebas shadow-lg shadow-gold-primary/20">1</div>
                        <h4 className="text-3xl font-bebas tracking-widest text-white">Contact Identity</h4>
                    </div>
                    <div className="relative">
                        <input 
                            {...register("email")}
                            type="email" 
                            placeholder="your@email.com"
                            className={`w-full bg-white/[0.03] border ${errors.email ? 'border-red-500/50' : 'border-white/5'} rounded-2xl px-6 py-5 outline-none focus:border-gold-primary/40 focus:bg-white/[0.05] transition-all text-xl font-inter text-white placeholder:text-white/10`}
                        />
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gold-primary/20">
                            <Mail size={24} />
                        </div>
                    </div>
                    {errors.email && (
                        <p className="text-red-500 text-xs font-bold uppercase tracking-widest ml-1">{errors.email.message}</p>
                    )}
                    <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-bold text-center">Credentials will be dispatched to this address</p>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-gold-primary text-obsidian flex items-center justify-center text-xl font-bebas shadow-lg shadow-gold-primary/20">2</div>
                        <h4 className="text-3xl font-bebas tracking-widest text-white">Payment Selection</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="relative group/option overflow-hidden border-2 border-gold-primary bg-gold-primary/[0.03] p-6 rounded-3xl flex items-center gap-5 cursor-pointer transition-all shadow-xl shadow-gold-primary/5">
                            <div className="w-12 h-12 rounded-2xl bg-gold-primary/10 flex items-center justify-center text-gold-primary">
                                <CreditCard size={28} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bebas tracking-widest text-white">Standard</span>
                                <span className="text-[10px] font-bold tracking-widest uppercase text-white/40">Card / PayPal</span>
                            </div>
                        </div>
                        <div className="relative group/option overflow-hidden border-2 border-white/5 bg-white/[0.01] p-6 rounded-3xl flex items-center gap-5 cursor-not-allowed transition-all opacity-40">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/20">
                                <ShieldCheck size={28} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bebas tracking-widest text-white/20">Digital</span>
                                <span className="text-[10px] font-bold tracking-widest uppercase text-white/10">Crypto (Soon)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <button 
                    type="submit"
                    className="w-full py-6 rounded-[2rem] bg-gold-primary font-bebas text-3xl tracking-[0.3em] text-obsidian flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all relative overflow-hidden group/btn px-8"
                >
                    <div className="absolute inset-0 shimmer opacity-30" />
                    <span className="relative z-10">Proceed to Gateway</span>
                    <ArrowRight size={28} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                </button>
            </motion.form>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center justify-center gap-6 text-white/10"
            >
                <div className="flex items-center gap-2">
                    <ShieldCheck size={18} />
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase">PCI Level 1 Protected</span>
                </div>
                <div className="w-1 h-1 bg-white/10 rounded-full" />
                <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} />
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Secure Handshake</span>
                </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
