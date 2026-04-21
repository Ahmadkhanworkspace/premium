import React from 'react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 font-bebas text-2xl tracking-[0.1em] group cursor-pointer", className)}>
      <div className="flex flex-col leading-none">
        <span className="text-white font-bold">PREMIUM</span>
        <span className="text-[10px] tracking-[0.5em] text-white/40 font-inter font-bold -mt-1">EST. 2018</span>
      </div>
      <div className="w-px h-8 bg-gold-primary/30 mx-1 rotate-12" />
      <span className="text-gold-primary font-black text-3xl group-hover:scale-110 transition-transform duration-300">TV</span>
      <span className="text-white/80 font-light tracking-[0.2em] self-end mb-1 text-sm">SERVICES</span>
    </div>
  );
}
