import { useNavigate } from 'react-router-dom';
import { FadeInSection } from '@/hooks/useFadeIn';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-10 sm:py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 gradient-red" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <FadeInSection>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-secondary-foreground mb-4 sm:mb-6">Cargo security shouldn't be a gamble.</h2>
          <p className="text-secondary-foreground/80 text-sm sm:text-lg md:text-xl mb-6 sm:mb-10 max-w-2xl mx-auto px-4">
            Partner with Counter 88 for logistics that prioritize safety, speed, and integrity.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="w-full sm:w-auto bg-foreground text-background px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold shadow-2xl hover:shadow-[0_0_40px_hsl(0_0%_100%/0.5)] transition-all hover:-translate-y-1 uppercase tracking-widest text-sm sm:text-lg"
          >
            Get a Free Consultation
          </button>
        </FadeInSection>
      </div>
    </section>
  );
};

export default CTASection;
