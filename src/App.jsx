import React, { useState, useEffect, useRef } from 'react';
import { 
  Ship, 
  Truck, 
  Plane, 
  Menu, 
  X, 
  ChevronRight, 
  Phone, 
  Mail, 
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Lock,
  FileText,
  Search,
  ClipboardList,
  Package,
  MapPin,
  Award,
  Facebook,
  Linkedin,
  Instagram,
  Globe,
  ShieldCheck
} from 'lucide-react';

// --- Styles for Animations & Utilities ---
const GlobalStyles = () => (
  <style>{`
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
    @keyframes pulse-glow {
      0%, 100% { opacity: 0.5; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(1.05); }
    }
    @keyframes fade-up {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-float { animation: float 6s ease-in-out infinite; }
    .animate-fade-up { animation: fade-up 0.8s ease-out forwards; }
    .glass-panel {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
    .glass-card:hover {
      background: rgba(255, 255, 255, 0.07);
      border-color: rgba(212, 175, 55, 0.3);
      box-shadow: 0 0 30px rgba(212, 175, 55, 0.1);
    }
    .text-glow {
      text-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
    }
    input, select, textarea {
      font-size: 16px !important; 
    }
    html {
      scroll-behavior: smooth;
      overflow-x: hidden;
    }
    .bg-grid-pattern {
      background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
      background-size: 40px 40px;
    }
  `}</style>
);

// --- Intersection Observer Hook ---
const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return isIntersecting;
};

const FadeInSection = ({ children, className = "", style = {} }) => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);
  return (
    <div 
      ref={ref} 
      className={`${className} transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={style}
    >
      {children}
    </div>
  );
};

const SEOHead = ({ page }) => {
  useEffect(() => {
    let title = 'Counter 88 Logistics';
    switch(page) {
      case 'contact': title += ' | Contact Us'; break;
      case 'privacy': title += ' | Privacy Policy'; break;
      case 'cookies': title += ' | Cookie Policy'; break;
      default: title += ' | Secure Shipping';
    }
    document.title = title;
  }, [page]);
  return null;
};

// --- Navigation ---
const Navigation = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Process', id: 'process' },
  ];

  const handleNavClick = (id) => {
    onNavigate('home');
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100); 
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#051e36]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'bg-gradient-to-b from-[#051e36]/80 to-transparent py-2 sm:py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 sm:h-24">
            <button 
              onClick={() => {
                onNavigate('home');
                window.scrollTo(0, 0);
              }} 
              className="flex items-center space-x-3 focus:outline-none group z-50 relative cursor-pointer"
            >
              <img 
                src="images/counter88.png" 
                alt="Counter 88 Logo" 
                className="h-20 sm:h-32 w-auto drop-shadow-lg group-hover:scale-105 transition-transform duration-300 object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </button>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button 
                  key={link.name} 
                  onClick={() => handleNavClick(link.id)}
                  className="font-medium text-sm text-slate-300 hover:text-white hover:scale-105 transition-all duration-300 uppercase tracking-wider"
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => onNavigate('contact')}
                className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  currentPage === 'contact' 
                    ? 'bg-white/10 text-slate-400 border border-white/10' 
                    : 'bg-gradient-to-r from-[#DC2626] to-[#991B1B] text-white hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:-translate-y-1'
                }`}
              >
                Contact Us
              </button>
            </div>

            <div className="md:hidden z-[70]">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-white hover:text-[#D4AF37] transition-colors p-2 focus:outline-none bg-black/20 rounded-lg backdrop-blur-sm"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[60] bg-[#051e36]/95 backdrop-blur-xl transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white z-50"
        >
          <X className="h-10 w-10" />
        </button>

        <div className="flex flex-col items-center space-y-6 px-8 w-full max-w-md mt-24">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.id)}
              className="text-3xl font-bold text-white hover:text-[#D4AF37] transition-colors border-b border-white/5 pb-2 w-full text-center tracking-wide"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-4 w-full">
            <button 
              onClick={() => { onNavigate('contact'); setIsOpen(false); }}
              className="block w-full bg-[#DC2626] text-white px-6 py-5 rounded-xl text-xl font-bold uppercase tracking-wider text-center shadow-lg"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// --- Hero Section ---
const HeroSection = ({ onNavigate }) => {
  const images = [
    "images/imgs_hero/1a.jpg", 
    "images/imgs_hero/1b.jpg", 
    "images/imgs_hero/1c.jpg"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, []);

  return (
    // Reduced padding for mobile: pt-12 to minimize space between menu and hero
    <section className="relative min-h-screen overflow-hidden bg-[#051e36] flex flex-col justify-center pt-12 lg:pt-0">
      {images.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${index === currentImage ? 'opacity-60 scale-100' : 'opacity-0 scale-110'}`}
        >
          <img 
            src={img} 
            alt="Logistics Background" 
            className="w-full h-full object-contain md:object-cover"
          />
        </div>
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#051e36] via-[#051e36]/70 to-[#051e36]/30 z-10"></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center">
        {/* Reduced top padding on mobile (pt-20) and bottom padding (pb-0) to reduce space before About section */}
        <div className="max-w-3xl pt-20 sm:pt-28 pb-0 sm:pb-12">
          
          <div className="inline-flex items-center space-x-3 glass-panel rounded-full pl-2 pr-6 py-2 mb-6 sm:mb-8 animate-fade-up border border-[#D4AF37]/30" style={{animationDelay: '0.1s'}}>
            <div className="bg-[#D4AF37] text-[#051e36] rounded-full p-1.5 flex-shrink-0">
              <Award className="h-3 w-3 sm:h-4 sm:w-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest leading-none">Since 2005</span>
              <span className="text-[#D4AF37] text-[9px] sm:text-[10px] uppercase tracking-wider leading-none mt-0.5">Office in Guangzhou</span>
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight animate-fade-up" style={{animationDelay: '0.2s'}}>
            Logistics Built on <br className="hidden sm:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FCD34D] to-[#D4AF37] text-glow">
              Trust & Transparency
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-12 max-w-xl leading-relaxed animate-fade-up border-l-4 border-[#DC2626] pl-6 glass-panel py-3 sm:py-4 rounded-r-xl" style={{animationDelay: '0.3s'}}>
            Verified worldwide shipping, continuous tracking, and zero surprises in cost.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{animationDelay: '0.4s'}}>
            <button 
              onClick={() => onNavigate('contact')}
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#DC2626] text-white font-bold uppercase tracking-wider rounded-full overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center justify-center sm:justify-start">
                Get a Free Consultation <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
               onClick={() => {
                 const el = document.getElementById('services');
                 if(el) el.scrollIntoView({ behavior: 'smooth' });
               }}
               className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-white/20 text-white font-bold uppercase tracking-wider rounded-full hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm"
            >
              Explore Services
            </button>
          </div>

          <div className="mt-8 sm:mt-12 flex items-center text-xs text-slate-500 uppercase tracking-widest animate-fade-up" style={{animationDelay: '0.5s'}}>
             <Lock className="h-3 w-3 mr-2 text-[#D4AF37]" /> 256-Bit SSL Encrypted Connection
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Globe Component ---
const ChinaReachGraphicBg = () => (
  <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 flex items-center justify-center">
       <Globe className="w-[150%] h-[150%] text-[#0047AB] opacity-20" strokeWidth={0.5} />
    </div>
    
    <div className="relative w-full max-w-7xl h-full">
       <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
          <defs>
            <marker id="arrowhead-bg" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
              <path d="M0,0 L6,2 L0,4 Z" fill="#D4AF37" />
            </marker>
            <filter id="glow-bg">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path d="M 550 150 Q 700 100 750 150" fill="none" stroke="#D4AF37" strokeWidth="2" markerEnd="url(#arrowhead-bg)" strokeDasharray="6,6" className="animate-pulse" opacity="0.6" />
          <path d="M 50 150 Q 150 100 250 150" fill="none" stroke="#D4AF37" strokeWidth="2" opacity="0.4" />
          <path d="M 550 150 Q 400 100 350 140" fill="none" stroke="#D4AF37" strokeWidth="2" markerEnd="url(#arrowhead-bg)" strokeDasharray="6,6" className="animate-pulse" style={{animationDelay: '0.5s'}} />
          <path d="M 550 150 Q 450 200 420 190" fill="none" stroke="#D4AF37" strokeWidth="2" markerEnd="url(#arrowhead-bg)" strokeDasharray="6,6" className="animate-pulse" style={{animationDelay: '1s'}} />
          <path d="M 550 150 Q 450 250 400 280" fill="none" stroke="#D4AF37" strokeWidth="2" markerEnd="url(#arrowhead-bg)" strokeDasharray="6,6" className="animate-pulse" style={{animationDelay: '1.2s'}} />
          <path d="M 550 150 Q 600 250 620 300" fill="none" stroke="#D4AF37" strokeWidth="2" markerEnd="url(#arrowhead-bg)" strokeDasharray="6,6" className="animate-pulse" style={{animationDelay: '1.5s'}} />
          <circle cx="550" cy="150" r="10" fill="#DC2626" stroke="#D4AF37" strokeWidth="2" filter="url(#glow-bg)" />
          <text x="550" y="125" textAnchor="middle" fill="#D4AF37" fontSize="16" fontWeight="bold" letterSpacing="2" style={{textShadow: '0 2px 4px rgba(0,0,0,0.8)'}}>
             🇨🇳 CHINA
          </text>
       </svg>
    </div>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      icon: Ship,
      title: "Ocean Freight",
      description: "Secure FCL/LCL container shipping with tamper-proof seal verification.",
    },
    {
      icon: Plane,
      title: "Air Freight",
      description: "Priority secure air cargo for high-value goods. Direct tarmac transfers.",
    },
    {
      icon: Truck,
      title: "Road Transport",
      description: "GPS-monitored fleet. Door-to-door delivery with photo confirmation.",
    }
  ];

  return (
    // Reduced padding: py-8 on mobile. Added scroll-mt-24 for nav link spacing
    <section id="services" className="scroll-mt-20 sm:scroll-mt-24 py-8 md:py-28 bg-[#051e36] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
      
      <ChinaReachGraphicBg />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-24">
            <span className="text-[#D4AF37] font-bold uppercase tracking-widest text-sm">SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4"><span className="text-[#D4AF37]">Core Logistics </span>Capabilities</h2>
          </div>
        </FadeInSection>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <FadeInSection key={index} style={{transitionDelay: `${index * 100}ms`}}>
              <div className="glass-panel p-6 sm:p-8 md:p-10 rounded-3xl h-full glass-card group transition-all duration-500 cursor-pointer">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/10 group-hover:border-[#D4AF37]/50">
                  <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white group-hover:text-[#D4AF37] transition-colors" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { title: "Sourcing", desc: "We locate and vet suppliers to ensure product quality and availability.", icon: Search },
    { title: "Inspection", desc: "Thorough quality control checks and cargo verification before loading.", icon: ClipboardList },
    { title: "Shipping", desc: "Secure transit via Air or Sea with real-time tracking.", icon: Ship },
    { title: "Clearance", desc: "Handling all customs documentation and regulatory compliance.", icon: FileText },
    { title: "Delivery", desc: "Final mile delivery to your warehouse with digital confirmation.", icon: Package }
  ];

  return (
    // Reduced padding: py-8 on mobile. Added scroll-mt-24 for nav link spacing
    <section id="process" className="scroll-mt-20 sm:scroll-mt-24 py-8 md:py-28 bg-[#051e36] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          <div className="text-center mb-10 md:mb-20">
            <span className="text-[#D4AF37] font-bold uppercase tracking-widest text-sm">Process</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">The 5-Step <span className="text-[#D4AF37]">Secure Protocol</span></h2>
          </div>
        </FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
          {steps.map((step, idx) => (
            <FadeInSection key={idx} className="h-full" style={{transitionDelay: `${idx * 100}ms`}}>
              <div className="glass-panel p-4 sm:p-6 md:p-8 rounded-2xl h-full relative group glass-card transition-all duration-500">
                <div className="absolute -top-6 left-4 sm:left-6 bg-[#051e36] border border-[#D4AF37]/30 text-[#D4AF37] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-base sm:text-xl font-bold group-hover:bg-[#D4AF37] group-hover:text-[#051e36] transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  <step.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="mt-8 sm:mt-10 text-lg sm:text-xl font-bold text-white mb-4 text-center sm:text-left group-hover:text-[#D4AF37] transition-colors">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed text-center sm:text-left">{step.desc}</p>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 text-slate-700">
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

const AboutSection = () => {
  return (
    // Reduced padding: py-2 on mobile to minimize space between Hero and About. Added scroll-mt-24.
    <section id="about" className="scroll-mt-20 sm:scroll-mt-24 py-2 md:py-28 bg-[#051e36] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          <div className="text-center mb-10 md:mb-16">
            <span className="text-[#D4AF37] font-bold uppercase tracking-widest text-sm">About Us</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">Trusted Logistics <span className="text-[#D4AF37]">Partner</span></h2>
          </div>
        </FadeInSection>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center">
          <FadeInSection>
            <p className="text-white text-lg md:text-2xl font-semibold mb-6 leading-relaxed text-center md:text-left">
              Importing from China made simple and transparent. 
              <span className="text-[#D4AF37]"> Your cargo shouldn’t be a gamble.</span>
            </p>
            <p className="text-slate-400 mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed border-l-4 border-white/10 pl-6 text-center md:text-left">
              Clear steps. Fair prices. Reliable imports. <br/>
              <span className="text-white mt-2 block">Backed by <strong className="text-[#D4AF37]">C-Sky China</strong> — 20 years experience.</span>
            </p>
            <div className="inline-block px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-center md:text-left">
              <span className="text-sm sm:text-base text-slate-300 font-medium">For wholesalers, traders, startups, and online sellers.</span>
            </div>
          </FadeInSection>
          <FadeInSection className="delay-200">
            <div className="glass-panel p-6 sm:p-8 md:p-10 rounded-3xl border-t-4 border-[#DC2626] shadow-2xl relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#DC2626]/20 rounded-full blur-3xl"></div>
              <div className="flex items-center mb-6 sm:mb-8 text-center">
                <AlertTriangle className="h-6 sm:h-8 w-6 sm:w-8 text-[#DC2626] mr-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">Scam Prevention</h3>
              </div>
              <ul className="space-y-3 sm:space-y-5">
                {[
                  "We NEVER ask for Crypto/Gift Card payments.",
                  "Verify communications come from our official whatsapp number.",
                  "Always request formal Bill of Lading (BL).",
                  "Report suspicious activity immediately."
                ].map((tip, i) => (
                  <li key={i} className="flex items-start text-slate-300 text-sm sm:text-base">
                    <span className="w-2 h-2 bg-[#DC2626] rounded-full mr-4 mt-2 shadow-[0_0_10px_#DC2626] flex-shrink-0"></span>
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

const CTASection = ({ onNavigate }) => (
  // Reduced padding: py-8 on mobile
  <section className="relative py-8 sm:py-16 md:py-24 overflow-hidden bg-[#DC2626]">
    <div className="absolute inset-0 bg-gradient-to-br from-[#DC2626] to-[#991B1B]"></div>
    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <FadeInSection>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6">Cargo security shouldn't be a gamble.</h2>
        <p className="text-red-100 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
          Partner with Counter 88 for logistics that prioritize safety, speed, and integrity.
        </p>
        <button 
          onClick={() => onNavigate('contact')}
          className="w-full sm:w-auto bg-white text-[#991B1B] px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all hover:-translate-y-1 uppercase tracking-widest text-base sm:text-lg"
        >
          Get a Free Consultation
        </button>
      </FadeInSection>
    </div>
  </section>
);

// --- Contact Page ---
const ContactPage = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    company: '', 
    service: 'ocean', 
    message: '',
    website_url: '', // Honeypot field
    math_answer: '' // Math challenge
  });

  const [mathQuestion, setMathQuestion] = useState({ num1: 0, num2: 0 });
  const [errors, setErrors] = useState({});
  const [isBot, setIsBot] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Generate a random math question (1-10 + 1-10)
  const generateMath = () => {
    setMathQuestion({
      num1: Math.floor(Math.random() * 10) + 1,
      num2: Math.floor(Math.random() * 10) + 1
    });
  };

  useEffect(() => {
    generateMath();
  }, []);

  const validate = () => {
    const newErrors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = "Name must contain only letters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    // Anti-spam math check
    const correctAnswer = mathQuestion.num1 + mathQuestion.num2;
    if (parseInt(formData.math_answer) !== correctAnswer) {
      newErrors.math = "Incorrect math answer";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot check
    if (formData.website_url) {
      setIsBot(true);
      return; // Silently fail for bots
    }

    if (validate()) {
      const whatsappNumber = "96176985828";
      // Formatted WhatsApp Message
      const formattedText = `👋 *New Inquiry from Website*\n\n` +
        `👤 *Name:* ${formData.name}\n` +
        `🏢 *Company:* ${formData.company || 'N/A'}\n` +
        `📧 *Email:* ${formData.email}\n` +
        `📦 *Service:* ${formData.service.toUpperCase()}\n\n` +
        `📝 *Message:*\n${formData.message}`;
      
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedText)}`;
      window.open(url, '_blank');
      setSubmitted(true);
      // Reset sensitive fields, keep name/email if they want to send another? 
      // User requested "hide form", so on "send another" we will likely want a fresh form.
    } else {
      // Failed validation - regenerate math question to prevent brute force
      generateMath();
      setFormData(prev => ({...prev, math_answer: ''}));
    }
  };

  const handleSendAnother = () => {
    setSubmitted(false);
    setFormData({ 
      name: '', 
      email: '', 
      company: '', 
      service: 'ocean', 
      message: '',
      website_url: '', 
      math_answer: '' 
    });
    generateMath();
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
    // Clear error for this field
    if (errors[e.target.name]) {
      setErrors({...errors, [e.target.name]: null});
    }
  };

  return (
    // Reduced top padding: pt-16 on mobile
    <div className="min-h-screen bg-[#051e36] pt-16 md:pt-32 pb-20 relative overflow-hidden">
      <GlobalStyles />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
         <div className="absolute top-20 left-10 w-64 h-64 sm:w-72 sm:h-72 bg-blue-600/10 rounded-full blur-[80px]"></div>
         <div className="absolute bottom-20 right-10 w-80 h-80 sm:w-96 sm:h-96 bg-[#D4AF37]/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="text-[#DC2626] font-bold uppercase tracking-widest text-sm">Get in Touch</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Contact Secure Desk</h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Our global team is available 24/7 to verify shipments and provide quotes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-6 sm:space-y-8">
             <div className="grid gap-4 sm:gap-6">
               {/* Removed Official Email Block as requested */}
               
               <div className="glass-panel p-4 sm:p-6 rounded-2xl flex items-center group hover:bg-white/5 transition-colors">
                 <div className="p-3 sm:p-4 rounded-xl bg-[#031221] mr-4 sm:mr-6 border border-white/10 text-[#D4AF37] group-hover:text-white transition-colors flex-shrink-0">
                   <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                 </div>
                 <div className="overflow-hidden">
                   <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">24/7 Support</p>
                   <a href="tel:+96176985828" className="text-base sm:text-lg md:text-xl font-bold text-white mt-1 hover:text-[#D4AF37] transition-colors">
                     Call Us
                   </a>
                 </div>
               </div>
             </div>

             <div className="glass-panel p-4 sm:p-6 md:p-8 rounded-2xl">
               <div className="flex items-center mb-4 sm:mb-6">
                 <div className="p-3 sm:p-4 rounded-xl bg-[#031221] mr-4 sm:mr-6 border border-white/10 text-[#DC2626]">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                 </div>
                 <h3 className="text-lg sm:text-xl font-bold text-white">Headquarters</h3>
               </div>
               
               <div className="space-y-6 sm:space-y-8">
                 <div>
                   <h4 className="text-[#D4AF37] font-bold uppercase tracking-wider text-sm mb-2">Lebanon Office</h4>
                   <p className="text-slate-300 text-sm sm:text-base mb-3">Elyssar Main Road - El Khoury Center - Facing Mike Sport<br/>+961 76 98 58 28</p>
                   <div className="rounded-xl overflow-hidden h-40 sm:h-48 md:h-56 w-full border border-white/10">
                     <iframe 
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1528.605116331826!2d35.622633884997484!3d33.92588720234621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f3f7e081d5191%3A0x372b72e99b85cb7e!2sCounter%2088!5e1!3m2!1sen!2sus!4v1767955146373!5m2!1sen!2sus"
                       width="100%" 
                       height="100%" 
                       style={{border:0}} 
                       allowFullScreen="" 
                       loading="lazy"
                       title="Lebanon Office Map"
                     ></iframe>
                   </div>
                 </div>
                 
                 <div>
                   <h4 className="text-[#D4AF37] font-bold uppercase tracking-wider text-sm mb-2">China Office</h4>
                   <p className="text-slate-300 text-sm sm:text-base mb-3">Guangzhou, China</p>
                   <div className="rounded-xl overflow-hidden h-40 sm:h-48 md:h-56 w-full border border-white/10">
                     <iframe 
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236154.56735818126!2d113.14749019822027!3d23.124991841243056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3402f895e36ea9d3%3A0xe3891b62529b073e!2sGuangzhou%2C%20Guangdong%20Province%2C%20China!5e0!3m2!1sen!2slb!4v1600000000000" 
                       width="100%" 
                       height="100%" 
                       style={{border:0}} 
                       allowFullScreen="" 
                       loading="lazy"
                       title="China Office Map"
                     ></iframe>
                   </div>
                 </div>
               </div>
             </div>
          </div>

          <div className="glass-panel p-6 sm:p-8 md:p-10 rounded-3xl border-t-4 border-[#DC2626] relative h-fit">
            {submitted ? (
              <div className="text-center py-12 animate-fade-up">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">Request Received</h4>
                <p className="text-slate-400 mb-8 px-4">
                  Thank you! We have opened WhatsApp for you to send your inquiry. We will contact you via WhatsApp shortly.
                </p>
                <button 
                  onClick={handleSendAnother} 
                  className="bg-[#D4AF37] text-[#051e36] px-6 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-white transition-colors shadow-lg"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Secure Inquiry Form</h3>
                
                {/* Honeypot Field (Hidden) */}
                <div className="hidden">
                  <input name="website_url" value={formData.website_url} onChange={handleChange} tabIndex="-1" autoComplete="off" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="w-full">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2" htmlFor="name">Name <span className="text-red-500">*</span></label>
                    <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className={`w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#051e36]/50 rounded-xl border ${errors.name ? 'border-red-500' : 'border-white/10'} text-white focus:border-[#D4AF37] outline-none transition-all placeholder-slate-600 text-sm sm:text-base`} />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div className="w-full">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2" htmlFor="company">Company</label>
                    <input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Company Name" className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#051e36]/50 rounded-xl border border-white/10 text-white focus:border-[#D4AF37] outline-none transition-all placeholder-slate-600 text-sm sm:text-base" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="w-full">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2" htmlFor="email">Email <span className="text-red-500">*</span></label>
                    <input id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" type="email" className={`w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#051e36]/50 rounded-xl border ${errors.email ? 'border-red-500' : 'border-white/10'} text-white focus:border-[#D4AF37] outline-none transition-all placeholder-slate-600 text-sm sm:text-base`} />
                     {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div className="w-full">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2" htmlFor="service">Service</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#051e36]/50 rounded-xl border border-white/10 text-white focus:border-[#D4AF37] outline-none transition-all appearance-none text-sm sm:text-base">
                      <option value="ocean">Ocean Freight</option>
                      <option value="air">Air Freight</option>
                      <option value="road">Road Transport</option>
                      <option value="sourcing">Product Sourcing</option>
                      <option value="clearance">Customs Clearance</option>
                    </select>
                  </div>
                </div>
                <div className="w-full">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2" htmlFor="message">Message <span className="text-red-500">*</span></label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Cargo details, destination..." className={`w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#051e36]/50 rounded-xl border ${errors.message ? 'border-red-500' : 'border-white/10'} text-white focus:border-[#D4AF37] outline-none transition-all placeholder-slate-600 text-sm sm:text-base`}></textarea>
                   {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                
                {/* Math Challenge */}
                <div className="w-full">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2" htmlFor="math_answer">
                    Security Question: What is {mathQuestion.num1} + {mathQuestion.num2}? <span className="text-red-500">*</span>
                  </label>
                  <input 
                    id="math_answer" 
                    name="math_answer" 
                    type="number"
                    value={formData.math_answer} 
                    onChange={handleChange} 
                    placeholder="Your answer" 
                    className={`w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#051e36]/50 rounded-xl border ${errors.math ? 'border-red-500' : 'border-white/10'} text-white focus:border-[#D4AF37] outline-none transition-all placeholder-slate-600 text-sm sm:text-base`} 
                  />
                  {errors.math && <p className="text-red-500 text-xs mt-1">{errors.math}</p>}
                </div>

                <button type="submit" className="w-full py-4 sm:py-5 bg-gradient-to-r from-[#DC2626] to-[#991B1B] rounded-xl font-bold text-white uppercase tracking-widest hover:shadow-lg hover:scale-[1.02] transition-all text-sm sm:text-base flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 mr-2" />
                  Send via WhatsApp
                </button>
                <p className="text-center text-xs text-slate-500 mt-2">
                  <Lock className="w-3 h-3 inline mr-1" />
                  Your data is submitted securely directly to our WhatsApp support.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Privacy Policy Component ---
const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#051e36] pt-24 pb-20 relative overflow-hidden">
      <GlobalStyles />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <span className="text-[#DC2626] font-bold uppercase tracking-widest text-sm">Legal</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-4">Privacy Policy</h1>
        </div>

        <div className="glass-panel p-6 sm:p-10 rounded-3xl space-y-8 text-slate-300">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              Counter 88 Logistics ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
              This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our logistics services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p className="leading-relaxed mb-2">We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Fill out our contact forms (Name, Email, Phone Number, Company Name).</li>
              <li>Communicate with us via WhatsApp or Email.</li>
              <li>Request a shipping quote or track a shipment.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p className="leading-relaxed">We use your information strictly for legitimate business purposes, including:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Providing and managing your shipments and logistics services.</li>
              <li>Communicating with you regarding your inquiries or orders.</li>
              <li>Improving our website and customer service.</li>
              <li>Complying with legal obligations (e.g., customs declarations).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Data Security</h2>
            <p className="leading-relaxed">
              We implement industry-standard security measures, including 256-bit SSL encryption, to protect your personal information from unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Third-Party Sharing</h2>
            <p className="leading-relaxed">
              We do not sell or rent your personal data. We may share information with trusted third-party service providers (e.g., shipping lines, customs agents) solely for the purpose of fulfilling your logistics requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at: <br />
              <strong className="text-white">Phone:</strong> +961 76 98 58 28
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

// --- Cookie Policy Component ---
const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#051e36] pt-24 pb-20 relative overflow-hidden">
      <GlobalStyles />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <span className="text-[#DC2626] font-bold uppercase tracking-widest text-sm">Legal</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-4">Cookie Policy</h1>
        </div>

        <div className="glass-panel p-6 sm:p-10 rounded-3xl space-y-8 text-slate-300">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. What Are Cookies?</h2>
            <p className="leading-relaxed">
              Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and to provide information to the site owners.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. How We Use Cookies</h2>
            <p className="leading-relaxed">We use cookies for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong className="text-white">Essential Cookies:</strong> Necessary for the website to function correctly (e.g., navigation).</li>
              <li><strong className="text-white">Analytics Cookies:</strong> Help us understand how visitors interact with our website (e.g., Google Analytics) so we can improve the user experience.</li>
              <li><strong className="text-white">Functionality Cookies:</strong> Allow the website to remember choices you make (such as language preferences).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Managing Cookies</h2>
            <p className="leading-relaxed">
              Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

// --- WhatsApp Floating Button ---
const WhatsAppFloat = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 5000); 
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="https://wa.me/96176985828"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-fade-up flex items-center justify-center hover:shadow-[0_0_20px_rgba(37,211,102,0.6)]"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    </a>
  );
};

// --- Cookie Consent Component ---
const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(true); // Default to true for better UX unless strict GDPR required

  useEffect(() => {
    const consent = localStorage.getItem('counter88_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('counter88_cookie_consent', JSON.stringify({ necessary: true, analytics: true }));
    setVisible(false);
  };

  const handleSaveSettings = () => {
    localStorage.setItem('counter88_cookie_consent', JSON.stringify({ necessary: true, analytics: analyticsConsent }));
    setVisible(false);
    setShowSettings(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 animate-fade-up">
      {!showSettings ? (
        <div className="max-w-7xl mx-auto bg-[#051e36]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-[#D4AF37]/10 rounded-lg text-[#D4AF37]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-white font-bold text-lg">Cookie Preferences</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              We use cookies to ensure you get the best experience on our website. Some are necessary, while others help us improve our services.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
             <button 
               onClick={() => setShowSettings(true)}
               className="text-white px-6 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-sm font-bold uppercase tracking-wider"
             >
               Preferences
             </button>
             <button 
               onClick={handleAcceptAll}
               className="bg-[#D4AF37] text-[#051e36] px-6 py-2.5 rounded-xl font-bold uppercase tracking-wider hover:bg-white transition-colors text-sm shadow-lg"
             >
               Accept All
             </button>
          </div>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto bg-[#051e36] border border-white/10 rounded-2xl p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-bold text-xl">Cookie Settings</h3>
            <button onClick={() => setShowSettings(false)} className="text-slate-400 hover:text-white">
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4">
              <div className="mt-1 text-green-500">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white font-bold">Necessary Cookies</span>
                  <span className="text-xs bg-white/10 text-slate-300 px-2 py-1 rounded">Required</span>
                </div>
                <p className="text-slate-400 text-xs">Essential for the website to function properly. Cannot be disabled.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4">
              <input 
                type="checkbox" 
                checked={analyticsConsent}
                onChange={(e) => setAnalyticsConsent(e.target.checked)}
                className="mt-1 w-5 h-5 rounded border-white/20 bg-transparent text-[#D4AF37] focus:ring-[#D4AF37]"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white font-bold">Analytics Cookies</span>
                  <span className="text-xs bg-white/10 text-slate-300 px-2 py-1 rounded">Optional</span>
                </div>
                <p className="text-slate-400 text-xs">Help us improve our website by collecting and reporting information on how you use it.</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4">
             <button 
               onClick={handleAcceptAll}
               className="text-white px-6 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-sm font-bold uppercase tracking-wider"
             >
               Accept All
             </button>
             <button 
               onClick={handleSaveSettings}
               className="bg-[#D4AF37] text-[#051e36] px-6 py-2.5 rounded-xl font-bold uppercase tracking-wider hover:bg-white transition-colors text-sm shadow-lg"
             >
               Save Preferences
             </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Footer = ({ onNavigate }) => {
  const handleFooterLink = (page, sectionId) => {
    onNavigate(page);
    if (sectionId) {
      requestAnimationFrame(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-[#02121f] text-slate-400 py-10 sm:py-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          
          <div className="flex flex-col items-start md:items-center">
             <img 
               src="images/counter88.png" 
               alt="Counter 88" 
               className="h-10 sm:h-12 w-auto mb-2 sm:mb-4 opacity-90 hover:opacity-100 transition-opacity"
               onError={(e) => { e.target.style.display = 'none'; }}
             />
             <p className="text-xs text-slate-500 leading-relaxed text-left md:text-center">
               Your trusted partner for secure global logistics from China to world.
             </p>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase text-xs tracking-[0.2em] mb-3 sm:mb-4">Navigation</h3>
            <ul className="space-y-1 sm:space-y-2 text-sm font-medium">
              <li><button onClick={() => handleFooterLink('home', 'about')} className="text-left hover:text-[#D4AF37] transition-colors py-1">About Us</button></li>
              <li><button onClick={() => handleFooterLink('home', 'services')} className="text-left hover:text-[#D4AF37] transition-colors py-1">Services</button></li>
              <li><button onClick={() => handleFooterLink('home', 'process')} className="text-left hover:text-[#D4AF37] transition-colors py-1">Process</button></li>
              <li><button onClick={() => handleFooterLink('contact')} className="text-left hover:text-[#D4AF37] transition-colors py-1">Contact</button></li>
            </ul>
          </div>

          <div>
             <h3 className="text-white font-bold uppercase text-xs tracking-[0.2em] mb-3 sm:mb-4">Legal</h3>
             <ul className="space-y-1 sm:space-y-2 text-sm">
               <li><button onClick={() => onNavigate('privacy')} className="text-left hover:text-[#D4AF37] transition-colors py-1">Privacy Policy</button></li>
               <li><button onClick={() => onNavigate('cookies')} className="text-left hover:text-[#D4AF37] transition-colors py-1">Cookie Policy</button></li>
            </ul>
          </div>

          <div>
             <h3 className="text-white font-bold uppercase text-xs tracking-[0.2em] mb-3 sm:mb-4">Social</h3>
            <div className="flex space-x-2 sm:space-x-4">
              <a href="https://www.instagram.com/Counter.88" target="_blank" rel="noopener noreferrer" className="p-1.5 sm:p-2 rounded border border-white/10 hover:border-[#D4AF37] text-slate-400 hover:text-[#D4AF37] transition-all">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.facebook.com/share/1Edd98x1SR/" target="_blank" rel="noopener noreferrer" className="p-1.5 sm:p-2 rounded border border-white/10 hover:border-[#D4AF37] text-slate-400 hover:text-[#D4AF37] transition-all">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="p-1.5 sm:p-2 rounded border border-white/10 hover:border-[#D4AF37] text-slate-400 hover:text-[#D4AF37] transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-4 sm:pt-6 text-center">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Counter 88 Global Logistics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Main Application Shell ---
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'contact': return <ContactPage />;
      case 'privacy': return <PrivacyPolicy />;
      case 'cookies': return <CookiePolicy />;
      default: return (
        <>
          <HeroSection onNavigate={setCurrentPage} />
          <AboutSection />
          <ServicesSection />
          <ProcessSection />
          <CTASection onNavigate={setCurrentPage} />
        </>
      );
    }
  };

  return (
    <div className="font-sans bg-[#051e36] text-slate-300 selection:bg-[#D4AF37] selection:text-[#001222]">
      <GlobalStyles />
      <SEOHead page={currentPage} />
      <Navigation onNavigate={setCurrentPage} currentPage={currentPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
      <WhatsAppFloat />
      <CookieConsent />
    </div>
  );
};

export default App;