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
  Cookie,
  Eye,
  ShieldCheck,
  Clock,
  Search,
  ClipboardList,
  Package,
  MapPin,
  Award,
  Facebook,
  Linkedin,
  Instagram,
  Globe
} from 'lucide-react';

/**
 * COUNTER 88 GLOBAL LOGISTICS
 * Version: 2.10 (Fixed Hero Section Spacing/Overlap)
 * Style: Modern Fintech/Tech inspired
 */

// --- Styles for Animations ---
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
    /* Ensure inputs don't zoom on mobile */
    input, select, textarea {
      font-size: 16px !important; 
    }
    html {
      scroll-behavior: smooth;
    }
  `}</style>
);

// --- Custom Logo (Exact Color Match) ---
const Logo88 = ({ className }) => (
  <svg viewBox="0 0 100 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Wings - Gold body with Red stripe */}
    <path d="M5 20 L 35 20 L 35 18 L 5 18 Z" fill="#D4AF37" />
    <path d="M65 20 L 95 20 L 95 18 L 65 18 Z" fill="#D4AF37" />
    
    <path d="M5 19 H 35" stroke="#DC2626" strokeWidth="1" />
    <path d="M65 19 H 95" stroke="#DC2626" strokeWidth="1" />

    {/* Interlocking Rings '88' - Blue Fill, Red Border */}
    {/* Top-Left Ring */}
    <circle cx="42" cy="16" r="9" fill="#0047AB" stroke="#DC2626" strokeWidth="2.5" />
    
    {/* Bottom-Right Ring */}
    <circle cx="58" cy="24" r="9" fill="#0047AB" stroke="#DC2626" strokeWidth="2.5" />
  </svg>
);

// SVG String for Favicon (Minified version of Logo88)
const faviconSVG = `data:image/svg+xml,<svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 20 L 35 20 L 35 18 L 5 18 Z" fill="%23D4AF37"/><path d="M65 20 L 95 20 L 95 18 L 65 18 Z" fill="%23D4AF37"/><path d="M5 19 H 35" stroke="%23DC2626" stroke-width="1"/><path d="M65 19 H 95" stroke="%23DC2626" stroke-width="1"/><circle cx="42" cy="16" r="9" fill="%230047AB" stroke="%23DC2626" stroke-width="2.5"/><circle cx="58" cy="24" r="9" fill="%230047AB" stroke="%23DC2626" stroke-width="2.5"/></svg>`;


// --- Secure Reveal Component (Anti-Spam) ---
const SecureReveal = ({ value, type, label, className = "" }) => {
  const [revealed, setRevealed] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setRevealed(true);
  };

  if (revealed) {
    const href = type === 'email' ? `mailto:${value}` : `tel:${value.replace(/\s+/g, '')}`;
    return (
      <a href={href} className={`hover:text-[#D4AF37] transition-colors break-all ${className}`}>
        {value}
      </a>
    );
  }

  return (
    <button 
      onClick={handleClick}
      className={`text-[#DC2626] hover:text-[#D4AF37] font-bold uppercase tracking-wider transition-colors text-sm focus:outline-none flex items-center ${className}`}
      aria-label={`Show ${label}`}
    >
      <span>Show {label}</span>
      <Eye className="ml-2 h-4 w-4" />
    </button>
  );
};

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
    // Set Title
    let title = 'Counter 88 Global Logistics';
    switch(page) {
      case 'contact': title += ' | Contact Us'; break;
      case 'terms': title += ' | Terms of Service'; break;
      case 'privacy': title += ' | Privacy Policy'; break;
      case 'cookies': title += ' | Cookie Policy'; break;
      default: title += ' | Secure Shipping';
    }
    document.title = title;
    
    // Set Favicon dynamically
    const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    link.href = faviconSVG;
    document.getElementsByTagName('head')[0].appendChild(link);

    window.scrollTo(0, 0);
  }, [page]);
  return null;
};

const Navigation = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', id: 'services' },
    { name: 'Process', id: 'process' },
    { name: 'About Us', id: 'about' },
  ];

  const handleNavClick = (id) => {
    onNavigate('home');
    setIsOpen(false);
    // Increased delay to 300ms to allow mobile devices to re-render the Home view before scrolling
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#051e36]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'bg-gradient-to-b from-[#051e36]/80 to-transparent py-4 sm:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <button onClick={() => onNavigate('home')} className="flex items-center space-x-3 focus:outline-none group z-50 relative">
            <Logo88 className="h-10 sm:h-12 w-auto drop-shadow-lg group-hover:scale-105 transition-transform duration-300" />
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#D4AF37] transition-colors hidden sm:block">
              COUNTER <span className="text-[#D4AF37]">88</span>
            </span>
          </button>

          {/* Desktop Nav */}
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

          {/* Mobile Menu Toggle */}
          <div className="md:hidden z-50">
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

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#051e36]/98 backdrop-blur-2xl z-40 transition-transform duration-300 md:hidden flex flex-col justify-start pt-32 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="px-8 space-y-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.id)}
              className="block w-full text-left text-3xl font-bold text-white hover:text-[#D4AF37] transition-colors border-b border-white/5 pb-4"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-4">
            <button 
              onClick={() => { onNavigate('contact'); setIsOpen(false); }}
              className="block w-full bg-[#DC2626] text-white px-6 py-5 rounded-xl text-xl font-bold uppercase tracking-wider text-center shadow-lg"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// --- Hero Section ---
const HeroSection = ({ onNavigate }) => {
  const images = [
    "https://images.unsplash.com/photo-1494412574643-35d324698420?auto=format&fit=crop&q=80", 
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80", 
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80", 
    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#051e36] flex flex-col justify-center py-20 lg:py-0">
      {/* Carousel Layer */}
      {images.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${index === currentImage ? 'opacity-60 scale-100' : 'opacity-0 scale-110'}`}
        >
          <img 
            src={img} 
            alt="Logistics Background" 
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#051e36] via-[#051e36]/70 to-[#051e36]/30 z-10"></div>
      
      <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-600/20 rounded-full blur-[80px] sm:blur-[100px] animate-pulse-glow z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-[#D4AF37]/10 rounded-full blur-[60px] sm:blur-[80px] animate-float z-0"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center">
        {/* Increased top padding for mobile and desktop to clear fixed header */}
        <div className="max-w-3xl pt-32 sm:pt-28">
          
          <div className="inline-flex items-center space-x-3 glass-panel rounded-full pl-2 pr-6 py-2 mb-8 animate-fade-up border border-[#D4AF37]/30" style={{animationDelay: '0.1s'}}>
            <div className="bg-[#D4AF37] text-[#051e36] rounded-full p-1.5">
              <Award className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest leading-none">Since 2005</span>
              <span className="text-[#D4AF37] text-[9px] sm:text-[10px] uppercase tracking-wider leading-none mt-0.5">Office in Guangzhou</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8 leading-tight animate-fade-up" style={{animationDelay: '0.2s'}}>
            Logistics Built on <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FCD34D] to-[#D4AF37] text-glow">
              Trust & Transparency
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-300 mb-12 max-w-xl leading-relaxed animate-fade-up border-l-4 border-[#DC2626] pl-6 glass-panel py-4 rounded-r-xl" style={{animationDelay: '0.3s'}}>
            We don't just move cargo; we protect your business. Verified global shipping with real-time tracking and zero hidden costs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{animationDelay: '0.4s'}}>
            <button 
              onClick={() => onNavigate('contact')}
              className="group relative w-full sm:w-auto px-8 py-4 bg-[#DC2626] text-white font-bold uppercase tracking-wider rounded-full overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center justify-center sm:justify-start">
                Get a Quote <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
               onClick={() => {
                 const el = document.getElementById('services');
                 if(el) el.scrollIntoView({ behavior: 'smooth' });
               }}
               className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider rounded-full hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm"
            >
              Explore Services
            </button>
          </div>

          <div className="mt-12 flex items-center text-xs text-slate-500 uppercase tracking-widest animate-fade-up" style={{animationDelay: '0.5s'}}>
             <Lock className="h-3 w-3 mr-2 text-[#D4AF37]" /> 256-Bit SSL Encrypted Connection
          </div>
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
    <section id="process" className="py-24 md:py-32 bg-[#051e36] relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          <div className="text-left mb-16 md:mb-20">
            <span className="text-[#DC2626] font-bold uppercase tracking-widest text-sm">Workflow</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">The 5-Step <span className="text-[#D4AF37]">Secure Protocol</span></h2>
          </div>
        </FadeInSection>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6">
          {steps.map((step, idx) => (
            <FadeInSection key={idx} className="h-full" style={{transitionDelay: `${idx * 100}ms`}}>
              <div className="glass-panel p-8 rounded-2xl h-full relative group glass-card transition-all duration-500">
                <div className="absolute -top-6 left-6 bg-[#051e36] border border-[#D4AF37]/30 text-[#D4AF37] w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold group-hover:bg-[#D4AF37] group-hover:text-[#051e36] transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-8 text-xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                
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
    <section id="about" className="py-24 md:py-32 bg-[#031626] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DC2626]/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          <FadeInSection>
            <div className="mb-8">
              <span className="text-[#DC2626] font-bold uppercase tracking-widest text-sm">About Us</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-8 leading-tight">
                Counter <span className="text-[#D4AF37]">88</span>
              </h2>
            </div>
            
            <p className="text-white text-xl md:text-2xl font-semibold mb-6 leading-relaxed">
              Importing from China made simple and transparent. 
              <span className="text-[#D4AF37]"> Your cargo shouldn’t be a gamble.</span>
            </p>
            
            <p className="text-slate-400 mb-10 text-lg leading-relaxed border-l-4 border-white/10 pl-6">
              Clear steps. Fair prices. Reliable imports. <br/>
              <span className="text-white mt-2 block">Backed by <strong className="text-[#D4AF37]">C-Sky China</strong> — 20 years experience.</span>
            </p>
            
            <div className="inline-block px-6 py-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-slate-300 font-medium">For wholesalers, traders, startups, and online sellers.</span>
            </div>
          </FadeInSection>

          <FadeInSection className="delay-200">
            <div className="glass-panel p-8 md:p-10 rounded-3xl border-t-4 border-[#DC2626] shadow-2xl relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#DC2626]/20 rounded-full blur-3xl"></div>
              
              <div className="flex items-center mb-8">
                <AlertTriangle className="h-8 w-8 text-[#DC2626] mr-4" />
                <h3 className="text-2xl font-bold text-white">Scam Prevention</h3>
              </div>
              <ul className="space-y-5">
                {[
                  "We NEVER ask for Crypto/Gift Card payments.",
                  "Verify emails come from @counter-88.com.",
                  "Always request formal Bill of Lading (BL).",
                  "Report suspicious activity immediately."
                ].map((tip, i) => (
                  <li key={i} className="flex items-start text-slate-300">
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

// --- New Visual Component (Background version with Flag) ---
const ChinaReachGraphicBg = () => (
  <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden flex items-center justify-center">
    {/* Central World Map Base (Abstract) */}
    <div className="absolute inset-0 flex items-center justify-center">
       <Globe className="w-[150%] h-[150%] text-[#0047AB] opacity-20" strokeWidth={0.5} />
    </div>
    
    {/* Graphic Content Container */}
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

          {/* Source Point: China (Approximate relative placement) */}
          
          {/* Arrows radiating from China */}
          {/* To North America (West across Pacific) */}
          <path d="M 550 150 Q 700 100 750 150" fill="none" stroke="#D4AF37" strokeWidth="2" markerEnd="url(#arrowhead-bg)" strokeDasharray="6,6" className="animate-pulse" opacity="0.6" />
          {/* Wrap around visual implication */}
          <path d="M 50 150 Q 150 100 250 150" fill="none" stroke="#D4AF37" strokeWidth="2" opacity="0.4" />

          {/* To Europe (West) */}
          <path d="M 550 150 Q 400 100 350 140" fill="none" stroke="#D4AF37" strokeWidth="2" markerEnd="url(#arrowhead-bg)" strokeDasharray="6,6" className="animate-pulse" style={{animationDelay: '0.5s'}} />

          {/* To Middle East (West/South) */}
          <path d="M 550 150 Q 450 200 420 190" fill="none" stroke="#D4AF37" strokeWidth="2" markerEnd="url(#arrowhead-bg)" strokeDasharray="6,6" className="animate-pulse" style={{animationDelay: '1s'}} />

          {/* To Africa (South West) */}
          <path d="M 550 150 Q 450 250 400 280" fill="none" stroke="#D4AF37" strokeWidth="2" markerEnd="url(#arrowhead-bg)" strokeDasharray="6,6" className="animate-pulse" style={{animationDelay: '1.2s'}} />

          {/* To Australia (South) */}
          <path d="M 550 150 Q 600 250 620 300" fill="none" stroke="#D4AF37" strokeWidth="2" markerEnd="url(#arrowhead-bg)" strokeDasharray="6,6" className="animate-pulse" style={{animationDelay: '1.5s'}} />
          
          {/* China Marker */}
          <circle cx="550" cy="150" r="10" fill="#DC2626" stroke="#D4AF37" strokeWidth="2" filter="url(#glow-bg)" />
          {/* Label with Flag Emoji */}
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
    <section id="services" className="py-24 md:py-32 bg-[#051e36] relative overflow-hidden">
      {/* New Global Reach Graphic as Background */}
      <ChinaReachGraphicBg />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="text-[#D4AF37] font-bold uppercase tracking-widest text-sm">Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">Core Logistics Services</h2>
          </div>
        </FadeInSection>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeInSection key={index} style={{transitionDelay: `${index * 100}ms`}}>
              <div className="glass-panel p-8 md:p-10 rounded-3xl h-full glass-card group transition-all duration-500 cursor-pointer">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/10 group-hover:border-[#D4AF37]/50">
                  <service.icon className="h-8 w-8 text-white group-hover:text-[#D4AF37] transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">
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

const CTASection = ({ onNavigate }) => (
  <section className="relative py-20 md:py-24 overflow-hidden bg-[#DC2626]">
    <div className="absolute inset-0 bg-gradient-to-br from-[#DC2626] to-[#991B1B]"></div>
    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <FadeInSection>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Cargo security shouldn't be a gamble.</h2>
        <p className="text-red-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto px-4">
          Partner with Counter 88 for logistics that prioritize safety, speed, and integrity.
        </p>
        <button 
          onClick={() => onNavigate('contact')}
          className="w-full sm:w-auto bg-white text-[#991B1B] px-10 py-5 rounded-full font-bold shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all hover:-translate-y-1 uppercase tracking-widest text-lg"
        >
          Start Your Shipment
        </button>
      </FadeInSection>
    </div>
  </section>
);

// --- Pages: Legal Mockups ---
const LegalLayout = ({ title, children, icon: Icon }) => (
  <div className="min-h-screen bg-[#051e36] pt-32 pb-20">
    <GlobalStyles />
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-16">
        {Icon && <div className="flex justify-center mb-6"><div className="p-4 bg-white/5 rounded-full"><Icon className="h-10 w-10 text-[#D4AF37]" /></div></div>}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h1>
        <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
      </div>
      <div className="glass-panel p-8 md:p-10 rounded-3xl prose prose-invert max-w-none text-slate-300">
        {children}
      </div>
    </div>
  </div>
);

const TermsPage = () => (
  <LegalLayout title="Terms of Service" icon={FileText}>
    <h3>1. Introduction</h3>
    <p>Welcome to Counter 88. By using our shipping and logistics services, you agree to these terms. These terms govern the relationship between you (the Client) and Counter 88 Global Logistics.</p>
    <h3>2. Shipping & Liability</h3>
    <p>While we strive for 100% security and timeliness, international shipping is subject to customs and regulations beyond our control. Our liability is limited to the terms specified in your Bill of Lading (BL).</p>
    <h3>3. Payment Terms</h3>
    <p>All quotes are valid for 14 days. Full payment is required prior to the release of cargo at the destination port unless a credit agreement is in place.</p>
  </LegalLayout>
);

const PrivacyPage = () => (
  <LegalLayout title="Privacy Policy" icon={Eye}>
    <h3>Data Collection</h3>
    <p>We collect information necessary to process your shipments, including contact details, cargo manifests, and billing information. We do not sell your data to third parties.</p>
    <h3>Security</h3>
    <p>We use industry-standard SSL encryption to protect your data. Access to personal information is restricted to authorized personnel only.</p>
  </LegalLayout>
);

const CookiesPage = () => (
  <LegalLayout title="Cookie Policy" icon={Cookie}>
    <h3>Use of Cookies</h3>
    <p>Counter 88 uses cookies to improve website functionality and analyze traffic. By continuing to use our site, you consent to our use of cookies.</p>
    <h3>Managing Preferences</h3>
    <p>You can disable cookies through your browser settings, though this may affect the functionality of our tracking portal.</p>
  </LegalLayout>
);

// --- Contact Page ---
const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', service: 'ocean', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 1000);
  };

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  return (
    <div className="min-h-screen bg-[#051e36] pt-32 pb-20 relative overflow-hidden">
      <GlobalStyles />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
         <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#DC2626] font-bold uppercase tracking-widest text-sm">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Contact Secure Desk</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Our global team is available 24/7 to verify shipments and provide quotes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
             <div className="grid gap-6">
               <div className="glass-panel p-6 rounded-2xl flex items-center group hover:bg-white/5 transition-colors">
                 <div className="p-4 rounded-xl bg-[#031221] mr-6 border border-white/10 text-[#D4AF37] group-hover:text-white transition-colors flex-shrink-0">
                   <Mail className="h-6 w-6" />
                 </div>
                 <div className="overflow-hidden">
                   <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Official Email</p>
                   <SecureReveal label="Email" value="info@counter-88.com" type="email" className="text-lg md:text-xl font-bold text-white mt-1" />
                 </div>
               </div>
               
               <div className="glass-panel p-6 rounded-2xl flex items-center group hover:bg-white/5 transition-colors">
                 <div className="p-4 rounded-xl bg-[#031221] mr-6 border border-white/10 text-[#D4AF37] group-hover:text-white transition-colors flex-shrink-0">
                   <Phone className="h-6 w-6" />
                 </div>
                 <div className="overflow-hidden">
                   <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">24/7 Support</p>
                   <SecureReveal label="Number" value="+961 76 985 828" type="phone" className="text-lg md:text-xl font-bold text-white mt-1" />
                 </div>
               </div>
             </div>

             {/* Locations & Maps */}
             <div className="glass-panel p-6 md:p-8 rounded-2xl">
               <div className="flex items-center mb-6">
                 <div className="p-4 rounded-xl bg-[#031221] mr-6 border border-white/10 text-[#DC2626]">
                    <MapPin className="h-6 w-6" />
                 </div>
                 <h3 className="text-xl font-bold text-white">Headquarters</h3>
               </div>
               
               <div className="space-y-8">
                 <div>
                   <h4 className="text-[#D4AF37] font-bold uppercase tracking-wider text-sm mb-2">Lebanon Office</h4>
                   <p className="text-slate-300 mb-3">Elissar Main Road, Metn, Lebanon</p>
                   <div className="rounded-xl overflow-hidden h-48 md:h-56 w-full border border-white/10">
                     <iframe 
                       src="https://maps.google.com/maps?q=33.9271328,35.6240338&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
                   <p className="text-slate-300 mb-3">Guangzhou, China</p>
                   <div className="rounded-xl overflow-hidden h-48 md:h-56 w-full border border-white/10">
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

          <div className="glass-panel p-8 md:p-10 rounded-3xl border-t-4 border-[#DC2626] relative h-fit">
            {submitted ? (
              <div className="text-center py-12 animate-fade-up">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Request Received</h4>
                <p className="text-slate-400 mb-8">We will contact you at {formData.email} shortly.</p>
                <button onClick={() => setSubmitted(false)} className="text-[#D4AF37] font-bold hover:underline">Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Secure Inquiry Form</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="w-full">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2" htmlFor="name">Name</label>
                    <input id="name" required name="name" onChange={handleChange} placeholder="Your Name" className="w-full px-6 py-4 bg-[#051e36]/50 rounded-xl border border-white/10 text-white focus:border-[#D4AF37] outline-none transition-all placeholder-slate-600" />
                  </div>
                  <div className="w-full">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2" htmlFor="company">Company</label>
                    <input id="company" name="company" onChange={handleChange} placeholder="Company Name" className="w-full px-6 py-4 bg-[#051e36]/50 rounded-xl border border-white/10 text-white focus:border-[#D4AF37] outline-none transition-all placeholder-slate-600" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="w-full">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2" htmlFor="email">Email</label>
                    <input id="email" required name="email" onChange={handleChange} placeholder="Email Address" type="email" className="w-full px-6 py-4 bg-[#051e36]/50 rounded-xl border border-white/10 text-white focus:border-[#D4AF37] outline-none transition-all placeholder-slate-600" />
                  </div>
                  <div className="w-full">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2" htmlFor="service">Service</label>
                    <select id="service" name="service" onChange={handleChange} className="w-full px-6 py-4 bg-[#051e36]/50 rounded-xl border border-white/10 text-white focus:border-[#D4AF37] outline-none transition-all appearance-none">
                      <option value="ocean">Ocean Freight</option>
                      <option value="air">Air Freight</option>
                      <option value="road">Road Transport</option>
                      <option value="sourcing">Product Sourcing</option>
                      <option value="clearance">Customs Clearance</option>
                    </select>
                  </div>
                </div>
                <div className="w-full">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2" htmlFor="message">Message</label>
                  <textarea id="message" required name="message" onChange={handleChange} rows="4" placeholder="Cargo details, destination..." className="w-full px-6 py-4 bg-[#051e36]/50 rounded-xl border border-white/10 text-white focus:border-[#D4AF37] outline-none transition-all placeholder-slate-600"></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-gradient-to-r from-[#DC2626] to-[#991B1B] rounded-xl font-bold text-white uppercase tracking-widest hover:shadow-lg hover:scale-[1.02] transition-all">Send Request</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = ({ onNavigate }) => (
  <footer className="bg-[#02121f] text-slate-400 py-16 md:py-20 border-t border-white/5 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Updated Footer Layout: 3 Columns, Removed Newsletter */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        
        {/* Services Column */}
        <div>
          <h3 className="text-white font-bold uppercase text-sm tracking-widest mb-6">Services</h3>
          <ul className="space-y-4 text-sm">
            <li><button onClick={() => onNavigate('home')} className="hover:text-[#D4AF37] transition-colors text-left">Air Freight</button></li>
            <li><button onClick={() => onNavigate('home')} className="hover:text-[#D4AF37] transition-colors text-left">Ocean Shipping</button></li>
            <li><button onClick={() => onNavigate('home')} className="hover:text-[#D4AF37] transition-colors text-left">Secure Warehousing</button></li>
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h3 className="text-white font-bold uppercase text-sm tracking-widest mb-6">Company</h3>
          <ul className="space-y-4 text-sm">
            <li><button onClick={() => onNavigate('home')} className="hover:text-[#D4AF37] transition-colors text-left">About Us</button></li>
            <li><button onClick={() => onNavigate('contact')} className="hover:text-[#D4AF37] transition-colors text-left">Contact Us</button></li>
            <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Security Policy</a></li>
          </ul>
        </div>

        {/* Contact/Socials Column */}
        <div>
           <div className="flex items-center space-x-3 text-white mb-6">
            <Logo88 className="h-8 w-20" />
            <span className="text-xl font-bold">COUNTER <span className="text-[#D4AF37]">88</span></span>
          </div>
          <div className="space-y-4 text-sm mb-8">
             <div className="flex items-center">
               <Mail className="h-4 w-4 text-[#D4AF37] mr-3 flex-shrink-0" />
               <SecureReveal label="Email" value="info@counter-88.com" type="email" className="text-slate-400 hover:text-[#D4AF37]" />
             </div>
             <div className="flex items-center">
               <Phone className="h-4 w-4 text-[#D4AF37] mr-3 flex-shrink-0" />
               <SecureReveal label="Number" value="+961 76 985 828" type="phone" className="text-slate-400 hover:text-[#D4AF37]" />
             </div>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/counter.88?igsh=dGoxazJtbG5yOHZ3" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#D4AF37] transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#D4AF37] transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#D4AF37] transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600 gap-4">
        <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Counter 88 Global Logistics.</p>
        <div className="flex space-x-8">
          <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">Terms</button>
          <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">Privacy</button>
          <button onClick={() => onNavigate('cookies')} className="hover:text-white transition-colors">Cookies</button>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main Application Shell ---
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'contact': return <ContactPage />;
      case 'terms': return <TermsPage />;
      case 'privacy': return <PrivacyPage />;
      case 'cookies': return <CookiesPage />;
      default: return (
        <>
          <HeroSection onNavigate={setCurrentPage} />
          <ServicesSection />
          <ProcessSection />
          <AboutSection />
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
    </div>
  );
};

export default App;