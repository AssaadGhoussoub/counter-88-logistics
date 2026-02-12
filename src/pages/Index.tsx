import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import CTASection from '@/components/CTASection';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    document.title = 'Counter 88 Logistics | Secure Global Shipping & Freight Forwarding';
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <CTASection />
    </>
  );
};

export default Index;
