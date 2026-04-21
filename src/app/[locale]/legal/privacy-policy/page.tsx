export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-obsidian pt-48 pb-32 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 font-inter text-white/40 leading-relaxed relative z-10">
        <div className="mb-20">
            <div className="inline-block py-1 px-4 rounded-full border border-gold-primary/20 bg-gold-primary/5 text-gold-primary text-[10px] font-bold tracking-[0.4em] mb-8 uppercase" >
                Privacy Governance
            </div>
            <h1 className="text-6xl md:text-8xl font-bebas tracking-wide text-white mb-6">Privacy <span className="gold-gradient">Policy</span></h1>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/20">Effective Date: April 16, 2026</p>
        </div>
        
        <div className="space-y-16">
            <section>
                <h2 className="text-3xl font-bebas tracking-[0.2em] text-gold-primary mb-6 uppercase">1. Information Collection</h2>
                <p className="text-lg leading-relaxed">
                We collect minimal information required to provide our service, including your email address for account activation and technical support. We do not store payment card details on our servers; all transactions are processed through secure, third-party encrypted gateways.
                </p>
            </section>

            <section>
                <h2 className="text-3xl font-bebas tracking-[0.2em] text-gold-primary mb-6 uppercase">2. Use of Data</h2>
                <p className="text-lg leading-relaxed">
                The information collected is used solely for the purpose of maintaining your subscription, providing technical updates, and improving our streaming infrastructure.
                </p>
            </section>

            <section>
                <h2 className="text-3xl font-bebas tracking-[0.2em] text-gold-primary mb-6 uppercase">3. Data Protection</h2>
                <p className="text-lg leading-relaxed">
                We implement a variety of security measures to maintain the safety of your personal information. Your data is protected by industry-standard encryption and is never sold or shared with third parties.
                </p>
            </section>

            <section>
                <h2 className="text-3xl font-bebas tracking-[0.2em] text-gold-primary mb-6 uppercase">4. Cookies</h2>
                <p className="text-lg leading-relaxed">
                We use functional cookies to enhance your browsing experience and remember your locale preferences. No tracking or marketing cookies are used.
                </p>
            </section>
        </div>
      </div>
    </div>
  );
}
