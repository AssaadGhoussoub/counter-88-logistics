import { Search, ClipboardList, Ship, FileText, Package, ChevronRight } from 'lucide-react';
import { FadeInSection } from '@/hooks/useFadeIn';

const ProcessSection = () => {
  const steps = [
    { title: "Sourcing", desc: "We locate and vet suppliers to ensure product quality and availability.", icon: Search },
    { title: "Inspection", desc: "Thorough quality control checks and cargo verification before loading.", icon: ClipboardList },
    { title: "Shipping", desc: "Secure transit via Air or Sea with real-time tracking.", icon: Ship },
    { title: "Clearance", desc: "Handling all customs documentation and regulatory compliance.", icon: FileText },
    { title: "Delivery", desc: "Final mile delivery to your warehouse with digital confirmation.", icon: Package },
  ];

  return (
    <section id="process" className="scroll-mt-20 sm:scroll-mt-24 py-6 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0" />
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          <div className="text-center mb-8 md:mb-20">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Process</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">The 5-Step <span className="text-primary">Secure Protocol</span></h2>
          </div>
        </FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
          {steps.map((step, idx) => (
            <FadeInSection key={idx} className="h-full" style={{ transitionDelay: `${idx * 100}ms` }}>
              <div className="glass-panel p-4 sm:p-6 md:p-8 rounded-2xl h-full relative group glass-card">
                <div className="absolute -top-5 left-4 sm:left-6 bg-background border border-primary/30 text-primary w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-base sm:text-xl font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-all shadow-[0_0_20px_hsl(var(--gold)/0.2)]">
                  <step.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="mt-6 sm:mt-10 text-lg sm:text-xl font-bold text-foreground mb-3 text-center sm:text-left group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-center sm:text-left">{step.desc}</p>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 text-muted">
                    <ChevronRight className="h-6 w-6" />
                  </div>
                )}
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
