import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { Logo } from "./Logo";
import { ShieldCheck, MessageCircle, Send, Share2, Globe } from "lucide-react";


export function Footer() {
  const t = useTranslations("Footer");
  
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Channels", href: "/channels" },
    { name: "Pricing", href: "/pricing" },
    { name: "Reseller", href: "/reseller" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ];


  const countries = ["United Kingdom", "Germany", "France", "Spain", "Italy", "Netherlands", "Sweden", "Norway", "Denmark", "Finland"];

  const supportLinks = [
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/legal/privacy-policy" },
    { name: "Terms of Service", href: "/legal/terms" },
    { name: "Refund Policy", href: "/legal/terms#refunds" },
  ];

  return (
    <footer className="bg-obsidian border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-gold-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
        {/* Brand */}
        <div className="flex flex-col gap-8">
          <Logo />
          <p className="text-white/40 text-lg leading-relaxed font-inter">
            {t("tagline")}
          </p>
          <div className="flex gap-4">
            {[
                { icon: <Globe size={20} />, href: "#" },
                { icon: <MessageCircle size={20} />, href: "#" },
                { icon: <Share2 size={20} />, href: "#" },
                { icon: <Send size={20} />, href: "#" }
            ].map((social, i) => (
                <a 
                    key={i} 
                    href={social.href} 
                    className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/40 hover:bg-gold-primary hover:text-obsidian hover:border-gold-primary transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                    {social.icon}
                </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bebas text-2xl tracking-[0.2em] text-white mb-10 uppercase">{t("quickLinks")}</h4>
          <ul className="flex flex-col gap-4">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/40 hover:text-gold-primary transition-colors text-sm font-medium uppercase tracking-widest flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-primary/20 group-hover:bg-gold-primary transition-colors" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Countries */}
        <div>
          <h4 className="font-bebas text-2xl tracking-[0.2em] text-white mb-10 uppercase">{t("countries")}</h4>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-4">
            {countries.map((country) => (
              <li key={country} className="text-white/30 text-[10px] font-bold uppercase tracking-[0.1em] hover:text-gold-primary/60 transition-colors cursor-default">
                {country}
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div className="flex flex-col">
          <h4 className="font-bebas text-2xl tracking-[0.2em] text-white mb-10 uppercase">{t("support")}</h4>
          <ul className="flex flex-col gap-4 mb-12">
            {supportLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/40 hover:text-gold-primary transition-colors text-sm font-medium uppercase tracking-widest flex items-center gap-2 group">
                   <div className="w-1.5 h-1.5 rounded-full bg-gold-primary/20 group-hover:bg-gold-primary transition-colors" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 px-5 py-3 bg-white/[0.02] rounded-2xl border border-white/5 w-fit group">
            <ShieldCheck className="text-gold-primary w-5 h-5 group-hover:scale-110 transition-transform" />
            <div className="flex flex-col">
                <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest leading-none mb-1">SSL Encrypted</span>
                <span className="text-[8px] font-bold text-white/20 uppercase tracking-[0.2em]">256-Bit Protection</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <p className="text-white/20 text-[10px] font-medium uppercase tracking-[0.3em] font-inter">
            &copy; {new Date().getFullYear()} Premium TV Global. All rights reserved.
        </p>
        <div className="flex items-center gap-6 opacity-30 group">
          {/* Mock payment icons */}
          {['VISA', 'MASTER', 'CRYPTO', 'PAYPAL'].map(p => (
              <div key={p} className="px-3 py-1 rounded border border-white/10 text-[8px] font-black tracking-widest group-hover:opacity-100 transition-opacity flex items-center justify-center min-w-[50px] bg-white/[0.02]">
                {p}
              </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
