"use client";

import { useLocale, useTranslations } from "next-intl";
import { locales, localeNames, usePathname, useRouter } from "@/navigation";
import { useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const onSelectChange = (nextLocale: string) => {
    router.replace(pathname, { locale: nextLocale });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-primary/20 bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium"
      >
        <Globe className="w-4 h-4 text-gold-primary" />
        <span className="uppercase">{locale}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.ul
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute right-0 mt-2 w-48 max-h-64 overflow-auto rounded-xl border border-gold-primary/20 bg-obsidian/90 backdrop-blur-xl p-2 z-50 grid grid-cols-1 gap-1"
            >
              {locales.map((cur) => (
                <li key={cur}>
                  <button
                    onClick={() => onSelectChange(cur)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between ${
                      locale === cur ? 'bg-gold-primary text-obsidian' : 'hover:bg-white/10'
                    }`}
                  >
                    <span>{localeNames[cur]}</span>
                    <span className="opacity-60 uppercase text-[10px]">{cur}</span>
                  </button>
                </li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
