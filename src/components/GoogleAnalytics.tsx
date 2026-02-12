import { useEffect } from 'react';

const GA_ID = 'G-EZT84C56CT';

const GoogleAnalytics = () => {
  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem('counter88_cookie_consent');
      if (!consent) return false;
      try {
        const parsed = JSON.parse(consent);
        return parsed.analytics === true;
      } catch {
        return false;
      }
    };

    if (!checkConsent()) return;

    // Don't add twice
    if (document.getElementById('ga-script')) return;

    const script = document.createElement('script');
    script.id = 'ga-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    const inlineScript = document.createElement('script');
    inlineScript.id = 'ga-inline';
    inlineScript.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `;
    document.head.appendChild(inlineScript);

    return () => {
      document.getElementById('ga-script')?.remove();
      document.getElementById('ga-inline')?.remove();
    };
  }, []);

  return null;
};

export default GoogleAnalytics;
