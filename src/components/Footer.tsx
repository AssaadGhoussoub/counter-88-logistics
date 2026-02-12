import { Facebook, Linkedin, Instagram } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleFooterLink = (path: string, sectionId?: string) => {
    navigate(path);
    if (sectionId) {
      requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-navy-dark text-muted-foreground py-10 sm:py-12 border-t border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="flex flex-col items-start md:items-center">
            <img src="/images/counter88.png" alt="Counter 88" className="h-10 sm:h-12 w-auto mb-2 sm:mb-4 opacity-90 hover:opacity-100 transition-opacity" />
            <p className="text-xs text-muted-foreground leading-relaxed text-left md:text-center">
              Your trusted partner for secure global logistics from China to world.
            </p>
          </div>

          <div>
            <h3 className="text-foreground font-bold uppercase text-xs tracking-[0.2em] mb-3 sm:mb-4">Navigation</h3>
            <ul className="space-y-1 sm:space-y-2 text-sm font-medium">
              <li><button onClick={() => handleFooterLink('/', 'about')} className="text-left hover:text-primary transition-colors py-1">About Us</button></li>
              <li><button onClick={() => handleFooterLink('/', 'services')} className="text-left hover:text-primary transition-colors py-1">Services</button></li>
              <li><button onClick={() => handleFooterLink('/', 'process')} className="text-left hover:text-primary transition-colors py-1">Process</button></li>
              <li><button onClick={() => handleFooterLink('/contact')} className="text-left hover:text-primary transition-colors py-1">Contact</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-bold uppercase text-xs tracking-[0.2em] mb-3 sm:mb-4">Legal</h3>
            <ul className="space-y-1 sm:space-y-2 text-sm">
              <li><button onClick={() => navigate('/privacy')} className="text-left hover:text-primary transition-colors py-1">Privacy Policy</button></li>
              <li><button onClick={() => navigate('/cookies')} className="text-left hover:text-primary transition-colors py-1">Cookie Policy</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-bold uppercase text-xs tracking-[0.2em] mb-3 sm:mb-4">Social</h3>
            <div className="flex space-x-2 sm:space-x-4">
              <a href="https://www.instagram.com/Counter.88" target="_blank" rel="noopener noreferrer" className="p-1.5 sm:p-2 rounded border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.facebook.com/share/1Edd98x1SR/" target="_blank" rel="noopener noreferrer" className="p-1.5 sm:p-2 rounded border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="p-1.5 sm:p-2 rounded border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-4 sm:pt-6 text-center">
          <p className="text-xs text-muted-foreground/50">
            &copy; {new Date().getFullYear()} Counter 88 Global Logistics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
