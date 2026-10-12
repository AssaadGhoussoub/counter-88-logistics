import { describe, expect, it } from 'vitest';
import { pageSeo, SEO_PAGES, seoHtml, structuredData } from '@/lib/seo';

describe('existing-page SEO', () => {
  it('keeps exactly the original routes', () => {
    expect(Object.keys(SEO_PAGES)).toEqual(['/', '/contact', '/privacy', '/cookies']);
  });
  it('gives each page unique metadata and a self canonical', () => {
    const titles = Object.keys(SEO_PAGES).map(path => {
      const page = pageSeo(path);
      expect(page.canonical).toBe('https://www.counter-88.com' + path);
      expect(page.robots).toBe('index,follow');
      expect(seoHtml(path)).toContain('<link rel="canonical"');
      return page.title;
    });
    expect(new Set(titles).size).toBe(titles.length);
  });
  it('normalizes trailing slashes and keeps unknown pages out of search', () => {
    expect(pageSeo('/contact/').canonical).toBe('https://www.counter-88.com/contact');
    expect(pageSeo('/missing').robots).toBe('noindex,follow');
  });
  it('uses real contact data without invented reviews or pricing', () => {
    const schema = JSON.stringify(structuredData('/'));
    expect(schema).toContain('+96176985828');
    expect(schema).toContain('Elissar Main Road');
    expect(schema).not.toMatch(/aggregateRating|priceRange|openingHours/);
  });
});
