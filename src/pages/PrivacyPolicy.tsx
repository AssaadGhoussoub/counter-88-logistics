import { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Counter 88 Logistics | Privacy Policy';
    return () => { document.title = 'Counter 88 Logistics | Secure Shipping'; };
  }, []);

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 relative overflow-hidden">
      <div className="section-divider" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <span className="text-secondary font-bold uppercase tracking-widest text-sm">Legal</span>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-4">Privacy Policy</h1>
        </div>
        <div className="glass-panel p-5 sm:p-10 rounded-3xl space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">1. Information We Collect</h2>
            <p className="leading-relaxed">When you use our website or contact us, we may collect: your name, email address, company name, phone number, and details about your shipping inquiry. We also collect technical data such as your IP address, browser type, and pages visited through cookies and analytics tools.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
            <p className="leading-relaxed">We use the information we collect to: respond to your inquiries and provide shipping quotes, process and manage your logistics orders, improve our website and services, send you relevant updates (only if you opt in), and comply with legal obligations.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">3. Data Sharing</h2>
            <p className="leading-relaxed">We do not sell or rent your personal data. We may share your information with: trusted third-party logistics partners (only as needed to fulfill your shipment), legal authorities if required by law, and analytics providers (e.g., Google Analytics) in anonymized form.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">4. Your Rights</h2>
            <p className="leading-relaxed">You have the right to: access the personal data we hold about you, request correction or deletion of your data, opt out of marketing communications, and lodge a complaint with a data protection authority.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">5. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this privacy policy, you can contact us at:<br />
              <strong className="text-foreground">Email:</strong> info@counter-88.com <br />
              <strong className="text-foreground">Phone:</strong> +961 76 98 58 28
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
