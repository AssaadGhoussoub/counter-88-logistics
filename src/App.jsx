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
ClipboardCheck,
FileCheck,
PackageCheck,
MapPin
} from 'lucide-react';

/**
* COUNTER 88 GLOBAL LOGISTICS
* Style: Modern Fintech/Tech inspired (MyMonty-esque)
* Features: Glassmorphism, Ambient Glows, Smooth Animations
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
https://www.elden-ringnightreign.com/#A/
https://www.clair-obscur-33.com/#A/
}
@keyframes fade-up {
from { opacity: 0; transform: translateY(20px); }
to { opacity: 1; transform: translateY(0); }
}
https://www.clair-obscur-33.com/#A/
https://www.crosshairxv2.com/#A/
https://www.crosshair-x.com/#A/
https://www.monster-hunterwilds.com/#A/
backdrop-filter: blur(16px);
-webkit-backdrop-filter: blur(16px);
https://omsi-2.com/#A/
}
https://rdr2-official.com/#A/
https://www.monster-hunterwilds.com/#A/
https://www.monster-hunterwilds.com/#A/
https://www.crosshair-x.com/#A/
}
https://www.arksurvival-ascended.com/#A/
https://rdr2-official.com/#A/
}
`}</style>
);

// --- Custom Logo ---
const Logo88 = ({ className }) => (
<svg viewBox="0 0 100 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 20 H 40" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round" />
<path d="M10 20 H 40" stroke="#DC2626" strokeWidth="1" />
<path d="M60 20 H 90" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round" />
<path d="M60 20 H 90" stroke="#DC2626" strokeWidth="1" />
<circle cx="42" cy="15" r="10" stroke="#D4AF37" strokeWidth="4" />
https://www.crosshairx.net/#A/>
<circle cx="58" cy="25" r="10" stroke="#D4AF37" strokeWidth="4" />
https://omsi-2.com/#A/>
</svg>
);

// --- Intersection Observer Hook for Fade In ---
const useOnScreen = (ref) => {
const [isIntersecting, setIntersecting] = useState(false);
useEffect(() => {
const observer = new IntersectionObserver(
https://omsi-2.com/#A/
https://omsi-2.com/#A/
);
https://www.crosshairx2.com/#A/
https://www.arksurvival-ascended.com/#A/
}, []);
return isIntersecting;
};

const FadeInSection = ({ children, className = "" }) => {
const ref = useRef(null);
const isVisible = useOnScreen(ref);
return (
<div ref={ref} className={`${className} transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
{children}
</div>
);
};

const SEOHead = ({ page }) => {
useEffect(() => {
let title = 'Counter 88 Global Logistics';
switch(page) {
case 'contact': title += ' | Contact Us'; break;
case 'terms': title += ' | Terms of Service'; break;
case 'privacy': title += ' | Privacy Policy'; break;
case 'cookies': title += ' | Cookie Policy'; break;
default: title += ' | Secure Shipping';
}
https://www.crosshairxv2.com/#A/
https://www.elden-ringnightreign.com/#A/
}, [page]);
return null;
};

const Navigation = ({ onNavigate, currentPage }) => {
const [isOpen, setIsOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
https://www.ovr-toolkit.com/#A/
https://www.arksurvival-ascended.com/#A/
https://www.crosshairxv2.com/#A/
}, []);

const navLinks = [
{ name: 'Services', id: 'services' },
{ name: 'Process', id: 'process' },
{ name: 'Trust & Safety', id: 'trust' },
];

const handleNavClick = (id) => {
onNavigate('home');
setIsOpen(false);
setTimeout(() => {
https://www.monster-hunterwilds.com/#A/
https://www.elden-ringnightreign.com/#A/
}, 100);
};

return (
<nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#001222]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'bg-transparent py-6'}`}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<button onClick={() => onNavigate('home')} className="flex items-center space-x-3 focus:outline-none group z-50">
<Logo88 className="h-10 w-24 drop-shadow-lg group-hover:scale-105 transition-transform duration-300" />
<span className="text-2xl font-bold tracking-tight text-white group-hover:text-[#D4AF37] transition-colors hidden sm:block">
COUNTER <span className="text-[#D4AF37]">88</span>
</span>
</button>

<div className="hidden md:flex items-center space-x-8">
https://fernbus-simulator.com/#A/
<button
https://www.crosshairx2.com/#A/
https://www.crusader-kings.com/#A/
className="font-medium text-sm text-slate-300 hover:text-white hover:scale-105 transition-all duration-300 uppercase tracking-wider"
>
https://fernbus-simulator.com/#A/
</button>
))}
<button
onClick={() => onNavigate('contact')}
https://www.ready-ornot.com/#A/
currentPage === 'contact'
? 'bg-white/10 text-slate-400 border border-white/10'
https://omsi-2.com/#A/
}`}
>
Contact Us
</button>
</div>

<div className="md:hidden z-50">
<button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-[#D4AF37] transition-colors p-2">
{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
</button>
</div>
</div>
</div>

{/* Mobile Menu Overlay */}
<div className={`fixed inset-0 bg-[#001222]/95 backdrop-blur-xl z-40 transition-transform duration-500 md:hidden flex flex-col justify-center ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
<div className="px-8 space-y-6">
https://www.crosshairx.net/#A/
<button
https://www.clair-obscur-33.com/#A/
https://www.crosshairx2.com/#A/
className="block w-full text-left text-2xl font-bold text-white hover:text-[#D4AF37] transition-colors"
>
https://ovr-advanced-settings.com/#A/
</button>
))}
<button
onClick={() => { onNavigate('contact'); setIsOpen(false); }}
className="block w-full mt-8 bg-[#DC2626] text-white px-6 py-4 rounded-xl text-xl font-bold uppercase tracking-wider"
>
Contact Us
</button>
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
https://www.crosshairx.net/#A/
}, 5000);
return () => clearInterval(timer);
}, []);

return (
<section className="relative h-screen min-h-[800px] overflow-hidden bg-[#001222] flex flex-col justify-center">
{/* Carousel Layer */}
https://www.monster-hunterwilds.com/#A/
<div
key={index}
className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${index === currentImage ? 'opacity-40 scale-100' : 'opacity-0 scale-110'}`}
>
<img
src={img}
alt="Logistics Background"
className="w-full h-full object-cover grayscale-[30%]"
/>
</div>
))}

<div className="absolute inset-0 bg-gradient-to-r from-[#001222] via-[#001222]/80 to-transparent z-10"></div>

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse-glow z-0"></div>
<div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[80px] animate-float z-0"></div>

<div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
<div className="max-w-3xl">
https://www.clair-obscur-33.com/#A/
<ShieldCheck className="h-4 w-4 text-[#D4AF37]" />
https://www.elden-ringnightreign.com/#A/span>
</div>

https://www.arksurvival-ascended.com/#A/
Logistics Built on <br />
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FCD34D] to-[#D4AF37] text-glow">
Trust & Transparency
</span>
</h1>

https://www.arma-reforger.com/#A/
https://www.clair-obscur-33.com/#A/
</p>

https://www.crusader-kings.com/#A/
<button
onClick={() => onNavigate('contact')}
https://www.crosshairxv2.com/#A/
>
<span className="relative z-10 flex items-center">
Get a Quote <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
</span>
<div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</button>

<button
onClick={() => {
https://www.crusader-kings.com/#A/
https://www.arma-reforger.com/#A/
}}
className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider rounded-full hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm"
>
Explore Services
</button>
</div>

https://www.crusader-kings.com/#A/
<Lock className="h-3 w-3 mr-2 text-[#D4AF37]" /> 256-Bit SSL Encrypted Connection
</div>
</div>
</div>
</section>
);
};

const ProcessSection = () => {
// Updated Process Steps: Sourcing -> Inspection -> Shipping -> Clearance -> Delivery
const steps = [
https://www.elden-ringnightreign.com/#A/
https://ovr-advanced-settings.com/#A/
https://rdr2-official.com/#A/
https://www.crosshairx2.com/#A/
https://www.arksurvival-ascended.com/#A/
];

return (
<section id="process" className="py-32 bg-[#001222] relative">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<FadeInSection>
<div className="text-left mb-20">
<span className="text-[#DC2626] font-bold uppercase tracking-widest text-sm">Workflow</span>
<h2 className="text-4xl md:text-5xl font-bold text-white mt-4">The 5-Step <span className="text-[#D4AF37]">Secure Protocol</span></h2>
</div>
</FadeInSection>

<div className="grid grid-cols-1 md:grid-cols-5 gap-6">
https://www.ovr-toolkit.com/#A/
<FadeInSection key={idx} className="h-full" style={{transitionDelay: `${idx * 100}ms`}}>
<div className="glass-panel p-8 rounded-2xl h-full relative group glass-card transition-all duration-500">
<div className="absolute -top-6 left-6 bg-[#001222] border border-[#D4AF37]/30 text-[#D4AF37] w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold group-hover:bg-[#D4AF37] group-hover:text-[#001222] transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)]">
https://www.monster-hunterwilds.com/#A/>
</div>
https://ovr-advanced-settings.com/#A/h3>
https://www.crosshairx.net/#A/p>

{/* Connector line for desktop */}
https://rdr2-official.com/#A/
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

const TrustSection = () => {
return (
<section id="trust" className="py-32 bg-[#000d1a] relative overflow-hidden">
{/* Ambient Backgrounds */}
<div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DC2626]/10 rounded-full blur-[120px]"></div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid md:grid-cols-2 gap-20 items-center">
<FadeInSection>
<h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
Why Trust <br/><span className="text-[#D4AF37]">Counter 88</span>?
</h2>
<p className="text-slate-400 mb-10 text-lg leading-relaxed">
https://www.monster-hunterwilds.com/#A/
</p>

<div className="space-y-8">
{[
https://www.crosshair-x.com/#A/
https://www.crusader-kings.com/#A/
{ icon: Clock, title: "24/7 Human Support", desc: "Real experts, not automated bots." }
https://ovr-advanced-settings.com/#A/
<div key={i} className="flex items-start group">
<div className="p-3 rounded-xl bg-white/5 mr-6 group-hover:bg-[#D4AF37]/20 transition-colors">
https://apexlegends.org/#A/>
</div>
<div>
https://ovr-advanced-settings.com/#A/h4>
https://www.crosshair-x.com/#A/p>
</div>
</div>
))}
</div>
</FadeInSection>

<FadeInSection className="delay-200">
<div className="glass-panel p-10 rounded-3xl border-t-4 border-[#DC2626] shadow-2xl relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-[#DC2626]/20 rounded-full blur-3xl"></div>

<div className="flex items-center mb-8">
<AlertTriangle className="h-8 w-8 text-[#DC2626] mr-4" />
<h3 className="text-2xl font-bold text-white">Scam Prevention</h3>
</div>
<ul className="space-y-5">
{[
"We NEVER ask for Crypto/Gift Card payments.",
https://www.ready-ornot.com/#A/
https://www.arma-reforger.com/#A/
https://www.clair-obscur-33.com/#A/
https://www.arma-reforger.com/#A/
<li key={i} className="flex items-center text-slate-300">
<span className="w-2 h-2 bg-[#DC2626] rounded-full mr-4 shadow-[0_0_10px_#DC2626]"></span>
{tip}
</li>
))}
</ul>
<button className="mt-10 w-full py-4 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-all uppercase text-sm tracking-widest">
Read Security Guide
</button>
</div>
</FadeInSection>
</div>
</div>
</section>
);
};

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
https://www.arma-reforger.com/#A/
},
{
icon: Truck,
title: "Road Transport",
https://www.arma-reforger.com/#A/
}
];

return (
<section id="services" className="py-32 bg-[#001222]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<FadeInSection>
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="text-[#D4AF37] font-bold uppercase tracking-widest text-sm">Capabilities</span>
<h2 className="text-4xl font-bold text-white mt-4">Core Logistics Services</h2>
</div>
</FadeInSection>

<div className="grid md:grid-cols-3 gap-8">
https://www.arma-reforger.com/#A/
<FadeInSection key={index} style={{transitionDelay: `${index * 100}ms`}}>
<div className="glass-panel p-10 rounded-3xl h-full glass-card group transition-all duration-500 cursor-pointer">
<div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/10 group-hover:border-[#D4AF37]/50">
https://www.monster-hunterwilds.com/#A/>
</div>
https://www.crosshairx.net/#A/h3>
<p className="text-slate-400 mb-8 leading-relaxed">
https://www.elden-ringnightreign.com/#A/
</p>
<span className="text-[#D4AF37] font-bold text-sm uppercase flex items-center group-hover:translate-x-2 transition-transform">
View Details <ArrowRight className="h-4 w-4 ml-2" />
</span>
</div>
</FadeInSection>
))}
</div>
</div>
</section>
);
};

const CTASection = ({ onNavigate }) => (
<section className="relative py-24 overflow-hidden bg-[#DC2626]">
<div className="absolute inset-0 bg-gradient-to-br from-[#DC2626] to-[#991B1B]"></div>
<div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<FadeInSection>
https://www.ready-ornot.com/#A/h2>
<p className="text-red-100 text-xl mb-10 max-w-2xl mx-auto">
https://www.arma-reforger.com/#A/
</p>
<button
onClick={() => onNavigate('contact')}
https://www.crosshairx2.com/#A/
>
Start Your Shipment
</button>
</FadeInSection>
</div>
</section>
);

// --- Pages: Legal Mockups ---
const LegalLayout = ({ title, children, icon: Icon }) => (
<div className="min-h-screen bg-[#001222] pt-32 pb-20">
<GlobalStyles />
<div className="max-w-4xl mx-auto px-4">
<div className="text-center mb-16">
{Icon && <div className="flex justify-center mb-6"><div className="p-4 bg-white/5 rounded-full"><Icon className="h-10 w-10 text-[#D4AF37]" /></div></div>}
<h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
<div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
</div>
<div className="glass-panel p-10 rounded-3xl prose prose-invert max-w-none text-slate-300">
{children}
</div>
</div>
</div>
);

const TermsPage = () => (
<LegalLayout title="Terms of Service" icon={FileText}>
https://www.crosshair-x.com/#A/h3>
https://www.arma-reforger.com/#A/p>
https://www.monster-hunterwilds.com/#A/h3>
https://www.crosshair-x.com/#A/p>
https://www.crosshairx.net/#A/h3>
https://www.crosshairx2.com/#A/p>
</LegalLayout>
);

const PrivacyPage = () => (
<LegalLayout title="Privacy Policy" icon={Eye}>
<h3>Data Collection</h3>
https://www.crosshairx.net/#A/p>
<h3>Security</h3>
https://www.ovr-toolkit.com/#A/p>
</LegalLayout>
);

const CookiesPage = () => (
<LegalLayout title="Cookie Policy" icon={Cookie}>
<h3>Use of Cookies</h3>
https://www.ready-ornot.com/#A/p>
<h3>Managing Preferences</h3>
https://fernbus-simulator.com/#A/p>
</LegalLayout>
);

// --- Contact Page ---
const ContactPage = () => {
const [formData, setFormData] = useState({ name: '', email: '', company: '', service: 'ocean', message: '' });
const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e) => {
https://www.crosshairxv2.com/#A/
setTimeout(() => setSubmitted(true), 1000);
};

https://ovr-advanced-settings.com/#A/

return (
<div className="min-h-screen bg-[#001222] pt-32 pb-20 relative overflow-hidden">
<GlobalStyles />
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full">
<div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px]"></div>
<div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px]"></div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16">
<span className="text-[#DC2626] font-bold uppercase tracking-widest text-sm">Get in Touch</span>
<h1 className="text-5xl font-bold text-white mt-4 mb-6">Contact Secure Desk</h1>
<p className="text-slate-400 text-lg max-w-2xl mx-auto">
Our global team is available 24/7 to verify shipments and provide quotes.
</p>
</div>

<div className="grid lg:grid-cols-2 gap-12">
<div className="space-y-8">
{/* Contact Info Cards */}
<div className="grid gap-6">
{[
https://apexlegends.org/#A/
{ label: "24/7 Support", val: "+961 71 240 329", icon: Phone },
https://omsi-2.com/#A/
<div key={i} className="glass-panel p-6 rounded-2xl flex items-center group hover:bg-white/5 transition-colors">
<div className="p-4 rounded-xl bg-[#001222] mr-6 border border-white/10 text-[#D4AF37] group-hover:text-white transition-colors">
https://www.crosshairx.net/#A/>
</div>
<div>
https://www.crosshair-x.com/#A/p>
https://www.ready-ornot.com/#A/p>
</div>
</div>
))}
</div>

{/* Locations & Maps */}
<div className="glass-panel p-6 rounded-2xl">
<div className="flex items-center mb-6">
<div className="p-4 rounded-xl bg-[#001222] mr-6 border border-white/10 text-[#DC2626]">
<MapPin className="h-6 w-6" />
</div>
<h3 className="text-xl font-bold text-white">Headquarters</h3>
</div>

<div className="space-y-6">
<div>
<h4 className="text-[#D4AF37] font-bold uppercase tracking-wider text-sm mb-2">Lebanon Office</h4>
<p className="text-slate-300 mb-3">Elissar Main Road, Metn, Lebanon</p>
<div className="rounded-xl overflow-hidden h-48 w-full border border-white/10">
<iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.458368805868!2d35.5864!3d33.9036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f3f0000000001%3A0x0!2sElissar%2C%20Lebanon!5e0!3m2!1sen!2slb!4v1600000000000"
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
<div className="rounded-xl overflow-hidden h-48 w-full border border-white/10">
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

<div className="glass-panel p-10 rounded-3xl border-t-4 border-[#DC2626] relative h-fit">
{submitted ? (
<div className="text-center py-12 animate-fade-up">
<div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
<CheckCircle className="h-10 w-10 text-green-500" />
</div>
<h4 className="text-2xl font-bold text-white mb-2">Request Received</h4>
https://rdr2-official.com/#A/p>
<button onClick={() => setSubmitted(false)} className="text-[#D4AF37] font-bold hover:underline">Send another</button>
</div>
) : (
<form onSubmit={handleSubmit} className="space-y-6">
<h3 className="text-2xl font-bold text-white mb-6">Secure Inquiry Form</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<input required name="name" onChange={handleChange} placeholder="Name" className="w-full px-6 py-4 bg-[#001222]/50 rounded-xl border border-white/10 text-white focus:border-[#D4AF37] outline-none transition-all placeholder-slate-600" />
<input name="company" onChange={handleChange} placeholder="Company" className="w-full px-6 py-4 bg-[#001222]/50 rounded-xl border border-white/10 text-white focus:border-[#D4AF37] outline-none transition-all placeholder-slate-600" />
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<input required name="email" onChange={handleChange} placeholder="Email" type="email" className="w-full px-6 py-4 bg-[#001222]/50 rounded-xl border border-white/10 text-white focus:border-[#D4AF37] outline-none transition-all placeholder-slate-600" />
<select name="service" onChange={handleChange} className="w-full px-6 py-4 bg-[#001222]/50 rounded-xl border border-white/10 text-white focus:border-[#D4AF37] outline-none transition-all appearance-none">
<option value="ocean">Ocean Freight</option>
<option value="air">Air Freight</option>
<option value="road">Road Transport</option>
<option value="sourcing">Product Sourcing</option>
<option value="clearance">Customs Clearance</option>
</select>
</div>
https://www.crosshairx.net/#A/50 rounded-xl border border-white/10 text-white focus:border-[#D4AF37] outline-none transition-all placeholder-slate-600"></textarea>
https://www.crusader-kings.com/#A/button>
</form>
)}
</div>
</div>
</div>
</div>
);
};

const Footer = ({ onNavigate }) => (
<footer className="bg-[#000a14] text-slate-400 py-20 border-t border-white/5 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-16">
<div className="space-y-6">
<h3 className="text-white font-bold uppercase text-sm tracking-widest">Newsletter</h3>
https://apexlegends.org/#A/p>
https://ovr-advanced-settings.com/#A/
<input type="email" placeholder="Email address" className="bg-white/5 border border-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors" required />
<button type="submit" className="bg-[#D4AF37] hover:bg-[#bfa035] text-[#001222] px-4 py-3 rounded-lg font-bold uppercase text-xs tracking-widest transition-colors">Subscribe</button>
</form>
</div>

<div>
<h3 className="text-white font-bold uppercase text-sm tracking-widest mb-6">Services</h3>
<ul className="space-y-4 text-sm">
<li><button onClick={() => onNavigate('home')} className="hover:text-[#D4AF37] transition-colors">Air Freight</button></li>
<li><button onClick={() => onNavigate('home')} className="hover:text-[#D4AF37] transition-colors">Ocean Shipping</button></li>
<li><button onClick={() => onNavigate('home')} className="hover:text-[#D4AF37] transition-colors">Secure Warehousing</button></li>
</ul>
</div>

<div>
<h3 className="text-white font-bold uppercase text-sm tracking-widest mb-6">Company</h3>
<ul className="space-y-4 text-sm">
<li><button onClick={() => onNavigate('home')} className="hover:text-[#D4AF37] transition-colors">About Us</button></li>
<li><button onClick={() => onNavigate('contact')} className="hover:text-[#D4AF37] transition-colors">Contact Us</button></li>
<li><a href="#" className="hover:text-[#D4AF37] transition-colors">Security Policy</a></li>
</ul>
</div>

<div>
<div className="flex items-center space-x-3 text-white mb-6">
<Logo88 className="h-8 w-20" />
<span className="text-xl font-bold">COUNTER <span className="text-[#D4AF37]">88</span></span>
</div>
<ul className="space-y-4 text-sm">
<li className="flex items-center"><Mail className="h-4 w-4 text-[#D4AF37] mr-3" /><span className="break-all">info@counter-88.com</span></li>
<li className="flex items-center"><Phone className="h-4 w-4 text-[#D4AF37] mr-3" /><span>+961 71 240 329</span></li>
</ul>
</div>
</div>

<div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
https://www.ovr-toolkit.com/#A/p>
<div className="flex space-x-8 mt-4 md:mt-0">
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
<TrustSection />
<CTASection onNavigate={setCurrentPage} />
</>
);
}
};

return (
<div className="font-sans bg-[#001222] text-slate-300 selection:bg-[#D4AF37] selection:text-[#001222]">
<GlobalStyles />
<SEOHead page={currentPage} />
<Navigation onNavigate={setCurrentPage} currentPage={currentPage} />
<main>{renderPage()}</main>
<Footer onNavigate={setCurrentPage} />
</div>
);
};

export default App;