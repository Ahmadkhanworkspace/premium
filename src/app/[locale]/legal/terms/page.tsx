export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-obsidian pt-48 pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
      <div className="max-w-4xl mx-auto px-6 font-inter text-white/40 leading-relaxed relative z-10">
        <div className="mb-20">
            <div className="inline-block py-1 px-4 rounded-full border border-gold-primary/20 bg-gold-primary/5 text-gold-primary text-[10px] font-bold tracking-[0.4em] mb-8 uppercase">
                Legal Documentation
            </div>
            <h1 className="text-6xl md:text-8xl font-bebas tracking-wide text-white mb-6">Terms of <span className="gold-gradient">Service</span></h1>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/20">Last Updated: April 16, 2026</p>
        </div>
        
        <div className="space-y-16">
            <section>
                <h2 className="text-3xl font-bebas tracking-[0.2em] text-gold-primary mb-6 uppercase">1. Service Usage</h2>
                <p className="text-lg leading-relaxed">
                By subscribing to Premium TV Services, you agree to use the service for personal, non-commercial use only. Re-streaming or public broadcasting of our content is strictly prohibited.
                </p>
            </section>

            <section id="refunds">
                <h2 className="text-3xl font-bebas tracking-[0.2em] text-gold-primary mb-6 uppercase">2. Refund Policy</h2>
                <p className="text-lg leading-relaxed">
                Due to the digital nature of our service, we offer a 24-hour satisfaction guarantee. If the service does not meet your technical expectations within the first 24 hours of activation, you are eligible for a full refund. Beyond this period, refunds are handled case-by-case based on technical failure.
                </p>
            </section>

            <section>
                <h2 className="text-3xl font-bebas tracking-[0.2em] text-gold-primary mb-6 uppercase">3. Technical Requirements</h2>
                <p className="text-lg leading-relaxed">
                A stable internet connection (minimum 10Mbps for HD, 25Mbps for 4K) is required. We are not responsible for buffering caused by the user's local network or ISP restrictions.
                </p>
            </section>

            <section>
                <h2 className="text-3xl font-bebas tracking-[0.2em] text-gold-primary mb-6 uppercase">4. Account Sharing</h2>
                <p className="text-lg leading-relaxed">
                Standard plans are limited to one simultaneous connection. Attempting to use the same credentials on multiple devices simultaneously may result in temporary account suspension.
                </p>
            </section>
        </div>
      </div>
    </div>
  );
}
