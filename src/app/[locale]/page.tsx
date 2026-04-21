import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Trust />
      <div className="divider-gold mx-auto w-1/2" />
      <Features />
      <div className="divider-gold mx-auto w-1/2 opacity-10" />
      <Pricing />
      <div className="divider-gold mx-auto w-1/2 opacity-10" />
      <Testimonials />
      <div className="divider-gold mx-auto w-1/2 opacity-10" />
      <FAQ />
      
      <section className="py-24 bg-white/[0.01]">
         {/* Extra space before footer */}
      </section>
    </div>
  );
}
