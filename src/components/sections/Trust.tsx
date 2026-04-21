"use client";

import { ShieldCheck, Zap, Server, Lock, Globe } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

export function Trust() {
  const stats = [
    { label: "Server Uptime", value: "99.99%", detail: "Real-time verification", icon: <Server className="w-5 h-5" /> },
    { label: "Buffer Rate", value: "0.01%", detail: "Anti-freeze 10.0 enabled", icon: <Zap className="w-5 h-5" /> },
    { label: "Data Privacy", value: "AES-256", detail: "End-to-end encrypted", icon: <Lock className="w-5 h-5" /> },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.01] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          {/* Live Status Indicator */}
          <div className="flex items-center gap-6 group">
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gold-primary/10 flex items-center justify-center text-gold-primary border border-gold-primary/20 shadow-[0_0_20px_rgba(201,168,76,0.1)] group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck size={32} />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-obsidian animate-pulse" />
            </div>
            <div>
              <h4 className="text-white font-bebas tracking-widest text-2xl group-hover:text-gold-primary transition-colors">Verified Infrastructure</h4>
              <p className="text-white/20 text-xs font-inter font-bold uppercase tracking-[0.2em]">Global Trust Level: Absolute</p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="md:col-span-2 flex flex-wrap gap-8 justify-between md:justify-around items-center">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="text-gold-primary/40">{stat.icon}</div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bebas text-white tracking-widest leading-none">{stat.value}</span>
                    <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-tighter">Active</span>
                  </div>
                  <div className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em]">{stat.label}</div>
                </div>
              </motion.div>
            ))}

            <div className="hidden lg:flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/5 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                <Globe size={14} className="text-gold-primary/60" /> 
                <span className="text-emerald-500/80">EU-WEST-4</span> Node Operational
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
