export const SITE_URL = 'https://www.counter-88.com';
export const SEO_PAGES: Record<string, { title: string; description: string }> = {
  '/': { title: 'China to Lebanon Shipping & Logistics | Counter 88', description: 'Shipping from China to Lebanon with Counter 88 Logistics. Discuss sea freight, air cargo and delivery with our Lebanon and Guangzhou teams.' },
  '/contact': { title: 'Contact Counter 88 | China to Lebanon Shipping Quotes', description: 'Request a China to Lebanon freight quote. Contact Counter 88 Logistics by phone or WhatsApp, with offices in Lebanon and Guangzhou, China.' },
  '/privacy': { title: 'Privacy Notice | Counter 88 Logistics', description: 'How Counter 88 Logistics handles website inquiries, WhatsApp contact information and external map links.' },
  '/cookies': { title: 'Cookies & External Services | Counter 88 Logistics', description: 'Information about cookies and external services on the Counter 88 Logistics website. Google Analytics is not enabled.' },
};
export function pageSeo(path: string) {
  const normalized = path === '/' ? '/' : path.replace(/\/+$/, '');
  const page = SEO_PAGES[normalized];
  return { title: page?.title ?? 'Page Not Found | Counter 88 Logistics', description: page?.description ?? 'This page could not be found. Visit Counter 88 Logistics for China to Lebanon shipping information.', canonical: SITE_URL + normalized, robots: page ? 'index,follow' : 'noindex,follow' };
}
export function structuredData(path: string) {
  const business = {
    '@type': 'LocalBusiness', '@id': SITE_URL + '/#business', name: 'Counter 88 Logistics', url: SITE_URL + '/',
    image: SITE_URL + '/images/counter88.png', telephone: '+96176985828',
    address: { '@type': 'PostalAddress', streetAddress: 'Elissar Main Road - El Khoury Center', addressCountry: 'LB' },
    geo: { '@type': 'GeoCoordinates', latitude: 33.92636708425874, longitude: 35.62379759104614 },
    areaServed: [{ '@type': 'Country', name: 'Lebanon' }, { '@type': 'Country', name: 'China' }],
    sameAs: ['https://www.instagram.com/Counter.88', 'https://www.facebook.com/share/1Edd98x1SR/'],
  };
  const graph: object[] = [business];
  if (path === '/') graph.push({
    '@type': 'Service', name: 'Shipping from China to Lebanon', serviceType: 'Sea freight and air cargo',
    url: SITE_URL + path, provider: { '@id': SITE_URL + '/#business' }, areaServed: { '@type': 'Country', name: 'Lebanon' },
  });
  return { '@context': 'https://schema.org', '@graph': graph };
}
const escape = (value: string) => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]!));
export function seoHtml(path: string) {
  const meta = pageSeo(path);
  return [
    '<title>' + escape(meta.title) + '</title>',
    '<meta name="description" content="' + escape(meta.description) + '" />',
    '<meta name="robots" content="' + meta.robots + '" />',
    '<link rel="canonical" href="' + escape(meta.canonical) + '" />',
    '<meta property="og:type" content="website" />',
    '<meta property="og:site_name" content="Counter 88 Logistics" />',
    '<meta property="og:title" content="' + escape(meta.title) + '" />',
    '<meta property="og:description" content="' + escape(meta.description) + '" />',
    '<meta property="og:url" content="' + escape(meta.canonical) + '" />',
    '<meta property="og:image" content="' + SITE_URL + '/images/counter88.png" />',
    '<meta name="twitter:card" content="summary_large_image" />',
    '<meta name="twitter:title" content="' + escape(meta.title) + '" />',
    '<meta name="twitter:description" content="' + escape(meta.description) + '" />',
    '<meta name="twitter:image" content="' + SITE_URL + '/images/counter88.png" />',
    '<script id="business-schema" type="application/ld+json">' + JSON.stringify(structuredData(path)).replace(/</g, '\\u003c') + '</script>',
  ].join('\n');
}
