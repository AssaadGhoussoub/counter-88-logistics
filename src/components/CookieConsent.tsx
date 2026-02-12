import { useState, useEffect } from 'react';
import { X, CheckCircle, ShieldCheck } from 'lucide-react';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(true);

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
    window.location.reload();
  };

  const handleSaveSettings = () => {
    localStorage.setItem('counter88_cookie_consent', JSON.stringify({ necessary: true, analytics: analyticsConsent }));
    setVisible(false);
    setShowSettings(false);
    if (analyticsConsent) window.location.reload();
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 animate-fade-up">
      {!showSettings ? (
        <div className="max-w-7xl mx-auto bg-background/95 backdrop-blur-xl border border-border rounded-2xl p-4 sm:p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="text-foreground font-bold text-base sm:text-lg">Cookie Preferences</h3>
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              We use cookies to ensure you get the best experience on our website.
            </p>
          </div>
          <div className="flex gap-3 sm:gap-4 shrink-0 w-full md:w-auto">
            <button onClick={() => setShowSettings(true)} className="flex-1 md:flex-none text-foreground px-4 sm:px-6 py-2.5 rounded-xl border border-border hover:bg-muted transition-colors text-xs sm:text-sm font-bold uppercase tracking-wider">
              Preferences
            </button>
            <button onClick={handleAcceptAll} className="flex-1 md:flex-none bg-primary text-primary-foreground px-4 sm:px-6 py-2.5 rounded-xl font-bold uppercase tracking-wider hover:opacity-90 transition-colors text-xs sm:text-sm shadow-lg">
              Accept All
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto bg-background border border-border rounded-2xl p-5 sm:p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-foreground font-bold text-xl">Cookie Settings</h3>
            <button onClick={() => setShowSettings(false)} className="text-muted-foreground hover:text-foreground">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-4 mb-8">
            <div className="p-4 rounded-xl bg-muted border border-border flex items-start gap-4">
              <div className="mt-1 text-green-500"><CheckCircle className="h-5 w-5" /></div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-foreground font-bold">Necessary Cookies</span>
                  <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">Required</span>
                </div>
                <p className="text-muted-foreground text-xs">Essential for the website to function properly.</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-muted border border-border flex items-start gap-4">
              <input type="checkbox" checked={analyticsConsent} onChange={(e) => setAnalyticsConsent(e.target.checked)} className="mt-1 w-5 h-5 rounded" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-foreground font-bold">Analytics Cookies</span>
                  <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">Optional</span>
                </div>
                <p className="text-muted-foreground text-xs">Help us improve our website.</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button onClick={handleAcceptAll} className="text-foreground px-6 py-2.5 rounded-xl border border-border hover:bg-muted transition-colors text-sm font-bold uppercase tracking-wider">
              Accept All
            </button>
            <button onClick={handleSaveSettings} className="bg-primary text-primary-foreground px-6 py-2.5 rounded-xl font-bold uppercase tracking-wider hover:opacity-90 transition-colors text-sm shadow-lg">
              Save Preferences
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieConsent;
