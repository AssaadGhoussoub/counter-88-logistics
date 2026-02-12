import { useState, useEffect } from 'react';
import { ArrowRight, Lock, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FadeInSection } from '@/hooks/useFadeIn';

const HeroSection = () => {
  const navigate = useNavigate();
  const images = [
    "/images/imgs_hero/1a.jpg",
    "/images/imgs_hero/1b.jpg",
    "/images/imgs_hero/1c.jpg"
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[80vh] sm:min-h-screen overflow-hidden bg-background flex flex-col justify-center pt-0 lg:pt-0">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${index === currentImage ? 'opacity-60 scale-100' : 'opacity-0 scale-110'}`}
        >
          <img src={img} alt="Logistics Background" className="w-full h-full object-contain md:object-cover" />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center">
        <div className="max-w-3xl pt-6 sm:pt-28 pb-4 sm:pb-12">
          <div className="inline-flex items-center space-x-3 glass-panel rounded-full pl-2 pr-6 py-2 mb-4 sm:mb-8 animate-fade-up border border-primary/30" style={{ animationDelay: '0.1s' }}>
            <div className="bg-primary text-primary-foreground rounded-full p-1.5 flex-shrink-0">
              <Award className="h-3 w-3 sm:h-4 sm:w-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-foreground text-[10px] sm:text-xs font-bold uppercase tracking-widest leading-none">Since 2005</span>
              <span className="text-primary text-[9px] sm:text-[10px] uppercase tracking-wider leading-none mt-0.5">Office in Guangzhou</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-foreground mb-4 sm:mb-8 leading-tight animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Logistics Built on <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text gradient-gold text-glow">Trust & Transparency</span>
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-12 max-w-xl leading-relaxed animate-fade-up border-l-4 border-secondary pl-6 glass-panel py-3 sm:py-4 rounded-r-xl" style={{ animationDelay: '0.3s' }}>
            Verified worldwide shipping, continuous tracking, and zero surprises in cost.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => navigate('/contact')}
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 gradient-red text-secondary-foreground font-bold uppercase tracking-wider rounded-full overflow-hidden transition-all hover:shadow-[0_0_30px_hsl(var(--red)/0.4)] hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center justify-center sm:justify-start">
                Get a Free Consultation <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-border text-foreground font-bold uppercase tracking-wider rounded-full hover:bg-muted hover:border-foreground/40 transition-all backdrop-blur-sm"
            >
              Explore Services
            </button>
          </div>

          <div className="mt-4 sm:mt-12 flex items-center text-xs text-muted-foreground uppercase tracking-widest animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <Lock className="h-3 w-3 mr-2 text-primary" /> 256-Bit SSL Encrypted Connection
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
