import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription } from '@/components/ui/sheet';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash } = useLocation();
  const links = [{ name: 'About Us', id: 'about' }, { name: 'Services', id: 'services' }, { name: 'Process', id: 'process' }];
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    update(); window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname, hash]);
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 768px)');
    const update = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener('change', update);
    return () => desktop.removeEventListener('change', update);
  }, []);
  return <nav aria-label="Main navigation" className={'fixed w-full z-50 transition-all duration-500 ' + (scrolled ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl' : 'bg-gradient-to-b from-background/80 to-transparent py-2 sm:py-6')}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20 sm:h-24">
      <Link to="/" aria-label="Counter 88 Logistics home" className="group"><img src="/images/counter88.png" alt="Counter 88 Logo" className="h-20 sm:h-32 w-auto object-contain drop-shadow-lg" /></Link>
      <div className="hidden md:flex items-center space-x-8">{links.map(link => <Link key={link.id} to={'/#' + link.id} className="font-medium text-sm text-muted-foreground hover:text-foreground uppercase tracking-wider">{link.name}</Link>)}<Link to="/contact" className="gradient-red text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider">Contact Us</Link></div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild><button type="button" aria-label="Toggle menu" className="md:hidden text-foreground p-2 rounded-lg bg-background/20"><Menu className="h-8 w-8" /></button></SheetTrigger>
        <SheetContent side="right" className="w-full sm:max-w-md z-[80] overflow-y-auto pt-16">
          <SheetTitle className="sr-only">Main navigation</SheetTitle><SheetDescription className="sr-only">Choose a section or contact our team.</SheetDescription>
          <div className="flex flex-col gap-6 text-center">{links.map(link => <Link key={link.id} to={'/#' + link.id} onClick={() => setOpen(false)} className="text-2xl font-bold py-3 border-b border-border">{link.name}</Link>)}<Link to="/contact" onClick={() => setOpen(false)} className="gradient-red text-white px-6 py-4 rounded-xl font-bold">Contact Us</Link></div>
        </SheetContent>
      </Sheet>
    </div>
  </nav>;
}
