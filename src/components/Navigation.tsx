import { useState, useEffect } from 'react';
import { Menu, X, Award } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
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

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl' : 'bg-gradient-to-b from-background/80 to-transparent py-2 sm:py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 sm:h-24">
            <button
              onClick={() => { navigate('/'); window.scrollTo(0, 0); }}
              className="flex items-center space-x-3 focus:outline-none group z-50 relative cursor-pointer"
            >
              <img
                src="/images/counter88.png"
                alt="Counter 88 Logo"
                className="h-20 sm:h-32 w-auto drop-shadow-lg group-hover:scale-105 transition-transform duration-300 object-contain"
              />
            </button>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.id)}
                  className="font-medium text-sm text-muted-foreground hover:text-foreground hover:scale-105 transition-all duration-300 uppercase tracking-wider"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => navigate('/contact')}
                className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  location.pathname === '/contact'
                    ? 'bg-muted text-muted-foreground border border-border'
                    : 'gradient-red text-secondary-foreground hover:shadow-[0_0_20px_hsl(var(--red)/0.5)] hover:-translate-y-1'
                }`}
              >
                Contact Us
              </button>
            </div>

            <div className="md:hidden z-[70]">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground hover:text-primary transition-colors p-2 focus:outline-none bg-background/20 rounded-lg backdrop-blur-sm"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 p-2 text-muted-foreground hover:text-foreground z-50">
          <X className="h-10 w-10" />
        </button>
        <div className="flex flex-col items-center space-y-6 px-8 w-full max-w-md mt-24 mx-auto">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.id)}
              className="text-3xl font-bold text-foreground hover:text-primary transition-colors border-b border-border pb-2 w-full text-center tracking-wide"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-4 w-full">
            <button
              onClick={() => { navigate('/contact'); setIsOpen(false); }}
              className="block w-full gradient-red text-secondary-foreground px-6 py-5 rounded-xl text-xl font-bold uppercase tracking-wider text-center shadow-lg"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
