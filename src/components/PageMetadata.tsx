import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pageSeo, structuredData, SITE_URL } from '@/lib/seo';

export default function PageMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const page = pageSeo(pathname);
    document.title = page.title;
    const setMeta = (attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>('meta[' + attribute + '="' + key + '"]');
      if (!element) { element = document.createElement('meta'); element.setAttribute(attribute, key); document.head.appendChild(element); }
      element.content = content;
    };
    setMeta('name', 'description', page.description);
    setMeta('name', 'robots', page.robots);
    for (const [key, content] of Object.entries({ 'og:type': 'website', 'og:site_name': 'Counter 88 Logistics', 'og:title': page.title, 'og:description': page.description, 'og:url': page.canonical, 'og:image': SITE_URL + '/images/counter88.png' })) setMeta('property', key, content);
    for (const [key, content] of Object.entries({ 'twitter:card': 'summary_large_image', 'twitter:title': page.title, 'twitter:description': page.description, 'twitter:image': SITE_URL + '/images/counter88.png' })) setMeta('name', key, content);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = page.canonical;
    let schema = document.getElementById('business-schema');
    if (!schema) { schema = document.createElement('script'); schema.id = 'business-schema'; schema.setAttribute('type', 'application/ld+json'); document.head.appendChild(schema); }
    schema.textContent = JSON.stringify(structuredData(pathname));
  }, [pathname]);
  return null;
}
