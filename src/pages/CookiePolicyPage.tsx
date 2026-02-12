import { useEffect } from 'react';

const CookiePolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Counter 88 Logistics | Cookie Policy';
    return () => { document.title = 'Counter 88 Logistics | Secure Shipping'; };
  }, []);

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 relative overflow-hidden">
      <div className="section-divider" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <span className="text-secondary font-bold uppercase tracking-widest text-sm">Legal</span>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-4">Cookie Policy</h1>
        </div>
        <div className="glass-panel p-5 sm:p-10 rounded-3xl space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">1. What Are Cookies?</h2>
            <p className="leading-relaxed">Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to site owners.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">2. How We Use Cookies</h2>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong className="text-foreground">Essential Cookies:</strong> Necessary for the website to function correctly.</li>
              <li><strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors interact with our website (e.g., Google Analytics).</li>
              <li><strong className="text-foreground">Functionality Cookies:</strong> Allow the website to remember choices you make.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">3. Managing Cookies</h2>
            <p className="leading-relaxed">Most web browsers allow you to control cookies through their settings. However, limiting cookies may affect your user experience.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyPage;
