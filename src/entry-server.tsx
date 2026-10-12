import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { SiteApp } from './App.tsx';
import { SEO_PAGES, seoHtml } from './lib/seo';

export const paths = Object.keys(SEO_PAGES);
export function renderPage(path: string) {
  return { html: renderToString(<StaticRouter location={path}><SiteApp /></StaticRouter>), head: seoHtml(path) };
}
