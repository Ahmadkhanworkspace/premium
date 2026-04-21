"use client";

import { useTranslations } from "next-intl";
import { Trophy, Tv, Play, Zap, ShieldCheck, Activity } from "lucide-react";
import { Link } from "@/navigation";
import { motion } from "framer-motion";

export function FifaClient() {
  const t = useTranslations("Fifa");
  return (
    <div className="min-h-screen bg-obsidian">
      {/* Dynamic Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-obsidian/60 to-obsidian z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.15)_0%,transparent_70%)] z-0" />
          
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold-primary rounded-full animate-ping opacity-20" />
          <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-gold-primary rounded-full animate-pulse opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-primary/10 border border-gold-primary/20 text-gold-primary text-sm font-bold tracking-widest uppercase mb-8"
          >
            <Trophy size={16} /> Live Sports Premium
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-9xl font-bebas tracking-tighter leading-none mb-8"
          >
            <span className="gold-gradient">{t("title")}</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-xl md:text-2xl max-w-3xl mx-auto font-inter mb-12 leading-relaxed"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link 
              href="/pricing"
              className="px-10 py-5 bg-gold-primary text-obsidian font-bold text-lg rounded-full hover:scale-105 transition-transform flex items-center gap-3 group"
            >
              {t("cta")}
              <Play size={20} className="fill-current group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats/Quality section */}
      <section className="py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bebas tracking-wide mb-8">
                {t("qualityTitle")}
              </h2>
              <p className="text-white/50 text-lg font-inter mb-12">
                {t("qualityDesc")}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-primary/10 flex items-center justify-center text-gold-primary flex-shrink-0">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Ultra Low Latency</h4>
                    <p className="text-sm text-white/40">Watch in real-time with zero lag.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-primary/10 flex items-center justify-center text-gold-primary flex-shrink-0">
                    <Activity size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Adaptive Bitrate</h4>
                    <p className="text-sm text-white/40">Crystal clear 4K on any connection.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gold-primary/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video bg-obsidian">
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <Tv size={64} className="text-gold-primary/20 mb-4 mx-auto" />
                        <span className="text-gold-primary/40 font-bebas tracking-widest">LIVE STREAM PREVIEW</span>
                    </div>
                 </div>
                 <div className="absolute top-4 left-4 px-3 py-1 bg-red-600 rounded text-[10px] font-bold tracking-tighter uppercase animate-pulse">LIVE 4K</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full 2026 World Cup Schedule */}
      <section className="py-24 max-w-7xl mx-auto px-6 relative">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gold-primary/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="text-center mb-16 relative z-10">
            <h2 className="text-5xl md:text-6xl font-bebas tracking-wide mb-4">
            Official 2026 <span className="gold-gradient">Match Schedule</span>
            </h2>
            <p className="text-white/40 text-lg font-inter max-w-2xl mx-auto">
            All 104 matches of the biggest FIFA World Cup in history. From the opening match in Mexico City to the Final in New York/New Jersey.
            </p>
        </div>
        
        <div className="glass rounded-[3rem] p-6 md:p-10 border border-white/5 relative z-10">
          <div className="max-h-[800px] overflow-y-auto pr-4 custom-scrollbar space-y-4">
            {Array.from({ length: 104 }).map((_, idx) => {
              const matchNum = idx + 1;
              let phase = "Group Stage";
              let date = "June 11 - June 27, 2026";
              let teamA = "TBD";
              let teamB = "TBD";
              let venue = "Host City / TBD";

              if (matchNum === 1) { teamA = "MEXICO"; date = "June 11, 2026"; venue = "Estadio Azteca, Mexico City"; }
              else if (matchNum === 2) { teamA = "CANADA"; date = "June 12, 2026"; venue = "Toronto Stadium, Toronto"; }
              else if (matchNum === 3) { teamA = "USA"; date = "June 12, 2026"; venue = "Los Angeles Stadium, LA"; }
              else if (matchNum <= 72) { phase = "Group Stage"; teamA = "QUALIFIER"; teamB = "QUALIFIER"; }
              else if (matchNum <= 88) { phase = "Round of 32"; teamA = "ADVANCING TEAM"; teamB = "ADVANCING TEAM"; date = "June 28 - July 3, 2026"; }
              else if (matchNum <= 96) { phase = "Round of 16"; teamA = "WINNER R32"; teamB = "WINNER R32"; date = "July 4 - July 7, 2026"; }
              else if (matchNum <= 100) { phase = "Quarter-Finals"; teamA = "WINNER R16"; teamB = "WINNER R16"; date = "July 9 - July 11, 2026"; }
              else if (matchNum <= 102) { phase = "Semi-Finals"; teamA = "WINNER QF"; teamB = "WINNER QF"; date = "July 14 - July 15, 2026"; }
              else if (matchNum === 103) { phase = "Third Place Match"; teamA = "LOSER SF1"; teamB = "LOSER SF2"; date = "July 18, 2026"; venue = "Hard Rock Stadium, Miami"; }
              else if (matchNum === 104) { phase = "Final"; teamA = "WINNER SF1"; teamB = "WINNER SF2"; date = "July 19, 2026"; venue = "MetLife Stadium, New York/NJ"; }

              return (
                <div key={matchNum} className="group relative bg-[#0A0A0C]/50 border border-white/5 rounded-2xl p-6 hover:border-gold-primary/30 transition-all duration-300 overflow-hidden hover:bg-white/[0.02]">
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="w-full md:w-1/3 text-center md:text-left">
                      <div className="inline-block px-3 py-1 bg-gold-primary/10 border border-gold-primary/20 text-gold-primary text-[10px] font-bold tracking-widest uppercase rounded-full mb-3">
                        Match {matchNum} • {phase}
                      </div>
                      <div className="text-sm font-inter text-white/40">
                        {date} <br className="hidden md:block" /> {venue}
                      </div>
                    </div>

                    <div className="flex-1 flex items-center justify-center gap-6 md:gap-10 w-full">
                      <div className="text-center flex-1">
                        <div className="font-bebas text-2xl md:text-3xl tracking-wide uppercase group-hover:text-gold-primary transition-colors">{teamA}</div>
                      </div>
                      <div className="font-bebas text-3xl text-white/20">VS</div>
                      <div className="text-center flex-1">
                        <div className="font-bebas text-2xl md:text-3xl tracking-wide uppercase group-hover:text-gold-primary transition-colors">{teamB}</div>
                      </div>
                    </div>

                    <div className="w-full md:w-1/4 flex justify-center md:justify-end">
                      <button className="px-6 py-3 border border-white/10 rounded-full text-white/60 font-bold text-sm tracking-wide hover:bg-gold-primary hover:text-obsidian hover:border-gold-primary transition-all">
                        Set Reminder
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
