import { Ship, Plane, Truck, Globe } from 'lucide-react';
import { FadeInSection } from '@/hooks/useFadeIn';

const ChinaReachGraphicBg = () => (
  <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 flex items-center justify-center">
      <Globe className="w-[150%] h-[150%] text-blue-800 opacity-20" strokeWidth={0.5} />
    </div>
    <div className="relative w-full max-w-7xl h-full">
      <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
        <defs>
          <marker id="arrowhead-bg" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
            <path d="M0,0 L6,2 L0,4 Z" fill="hsl(43, 56%, 51%)" />
          </marker>
        </defs>
        <path d="M 550 150 Q 700 100 750 150" fill="none" stroke="hsl(43, 56%, 51%)" strokeWidth="2" markerEnd="url(#arrowhead-bg)" strokeDasharray="6,6" className="animate-pulse" opacity="0.6" />
        <path d="M 550 150 Q 400 100 350 140" fill="none" stroke="hsl(43, 56%, 51%)" strokeWidth="2" markerEnd="url(#arrowhead-bg)" strokeDasharray="6,6" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        <path d="M 550 150 Q 450 200 420 190" fill="none" stroke="hsl(43, 56%, 51%)" strokeWidth="2" markerEnd="url(#arrowhead-bg)" strokeDasharray="6,6" className="animate-pulse" style={{ animationDelay: '1s' }} />
        <path d="M 550 150 Q 450 250 400 280" fill="none" stroke="hsl(43, 56%, 51%)" strokeWidth="2" markerEnd="url(#arrowhead-bg)" strokeDasharray="6,6" className="animate-pulse" style={{ animationDelay: '1.2s' }} />
        <circle cx="550" cy="150" r="10" fill="hsl(0, 72%, 47%)" stroke="hsl(43, 56%, 51%)" strokeWidth="2" />
        <text x="550" y="125" textAnchor="middle" fill="hsl(43, 56%, 51%)" fontSize="16" fontWeight="bold" letterSpacing="2">
          🇨🇳 CHINA
        </text>
      </svg>
    </div>
  </div>
);

const ServicesSection = () => {
  const services = [
    { icon: Ship, title: "Ocean Freight", description: "Secure FCL/LCL container shipping with tamper-proof seal verification." },
    { icon: Plane, title: "Air Freight", description: "Priority secure air cargo for high-value goods. Direct tarmac transfers." },
    { icon: Truck, title: "Road Transport", description: "GPS-monitored fleet. Door-to-door delivery with photo confirmation." },
  ];

  return (
    <section id="services" className="scroll-mt-20 sm:scroll-mt-24 py-6 md:py-28 bg-background relative overflow-hidden">
      <div className="section-divider" />
      <ChinaReachGraphicBg />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-24">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4"><span className="text-primary">Core Logistics </span>Capabilities</h2>
          </div>
        </FadeInSection>
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <FadeInSection key={index} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="glass-panel p-5 sm:p-8 md:p-10 rounded-3xl h-full glass-card group cursor-pointer">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-muted rounded-2xl flex items-center justify-center mb-4 sm:mb-8 group-hover:scale-110 transition-transform duration-500 border border-border group-hover:border-primary/50">
                  <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
