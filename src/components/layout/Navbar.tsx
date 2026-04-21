"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/navigation";
import { Logo } from "./Logo";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/whatsapp";


export function Navbar() {
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("home"), href: "/" },
    { name: t("channels"), href: "/channels" },
    { name: t("fifa"), href: "/fifa-world-cup" },
    { name: t("pricing"), href: "/pricing" },
    { name: t("reseller"), href: "/reseller" },
    { name: t("about"), href: "/about" },
    { name: t("blog"), href: "/blog" },
    { name: t("faq"), href: "/faq" },
    { name: t("contact"), href: "/contact" },
  ];


  return (
    <>
      <div className="bg-red-600 text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase py-2 text-center w-full z-[101] fixed top-0 left-0 hover:bg-gold-primary transition-colors cursor-pointer group">
        <span className="animate-pulse mr-2 text-white group-hover:text-obsidian">🔴 LIVE</span>
        <span className="hidden md:inline group-hover:text-obsidian text-white"> OFFICIAL 2026 FIFA WORLD CUP FIXTURES ANNOUNCED - </span>
        <span className="md:hidden group-hover:text-obsidian text-white"> 2026 WORLD CUP FIXTURES - </span>
        <Link href="/fifa-world-cup" className="underline group-hover:text-obsidian group-hover:decoration-obsidian transition-colors ml-1 text-white">SECURE YOUR SPORTS PASS</Link>
      </div>
      <nav
        className={cn(
          "fixed left-0 right-0 z-[100] transition-all duration-300",
          isScrolled ? "glass py-3 top-[36px]" : "bg-transparent py-5 top-[36px]"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-gold-primary",
                pathname === link.href ? "text-gold-primary" : "text-white/80"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <LocaleSwitcher />
          <a
            href={getWhatsAppLink(WHATSAPP_MESSAGES.TRIAL)}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-2 overflow-hidden rounded-full transition-all"
          >
            <div className="absolute inset-0 bg-gold-primary transition-transform group-hover:scale-105" />
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 text-obsidian font-bold text-sm tracking-wide">
              {t("cta")}
            </span>
          </a>
        </div>


        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed inset-0 bg-obsidian z-[90] flex flex-col pt-24 px-6 overflow-hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-2xl font-bebas tracking-widest",
                    pathname === link.href ? "text-gold-primary" : "text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-8 flex flex-col items-center gap-6">
                <LocaleSwitcher />
                <a
                  href={getWhatsAppLink(WHATSAPP_MESSAGES.TRIAL)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-8 py-3 bg-gold-primary rounded-full text-obsidian font-bold tracking-widest font-bebas text-xl text-center"
                >
                  {t("cta")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </>
  );
}
