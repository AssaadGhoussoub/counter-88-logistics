import { AlertTriangle } from 'lucide-react';
import { FadeInSection } from '@/hooks/useFadeIn';

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-20 sm:scroll-mt-24 py-6 md:py-28 bg-background relative overflow-hidden">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          <div className="text-center mb-8 md:mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">About Us</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">Trusted Logistics <span className="text-primary">Partner</span></h2>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-6 md:gap-20 items-center">
          <FadeInSection>
            <p className="text-foreground text-lg md:text-2xl font-semibold mb-4 leading-relaxed text-center md:text-left">
              Importing from China made simple and transparent.
              <span className="text-primary"> Your cargo shouldn't be a gamble.</span>
            </p>
            <p className="text-muted-foreground mb-6 sm:mb-10 text-sm sm:text-lg leading-relaxed border-l-4 border-border pl-6 text-center md:text-left">
              Clear steps. Fair prices. Reliable imports. <br />
              <span className="text-foreground mt-2 block">Backed by <strong className="text-primary">C-Sky China</strong> — 20 years experience.</span>
            </p>
            <div className="inline-block px-6 py-3 rounded-xl bg-muted border border-border text-center md:text-left">
              <span className="text-sm sm:text-base text-muted-foreground font-medium">For wholesalers, traders, startups, and online sellers.</span>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="glass-panel p-5 sm:p-8 md:p-10 rounded-3xl border-t-4 border-secondary shadow-2xl relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
              <div className="flex items-center mb-4 sm:mb-8">
                <AlertTriangle className="h-6 sm:h-8 w-6 sm:w-8 text-secondary mr-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Scam Prevention</h3>
              </div>
              <ul className="space-y-3 sm:space-y-5">
                {[
                  "We NEVER ask for Crypto/Gift Card payments.",
                  "Verify emails come from @counter-88.com.",
                  "Always request formal Bill of Lading (BL).",
                  "Report suspicious activity immediately."
                ].map((tip, i) => (
                  <li key={i} className="flex items-start text-muted-foreground text-sm sm:text-base">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-4 mt-2 shadow-[0_0_10px_hsl(var(--red))] flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
