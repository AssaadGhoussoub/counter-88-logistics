import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { paths, renderPage } from '../.prerender/entry-server.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const template = await readFile(path.join(root, 'dist/index.html'), 'utf8');
for (const route of paths) {
  const result = renderPage(route);
  const page = template.replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/<meta\s+(?:name="(?:description|robots|twitter:[^"]*)"|property="og:[^"]*")[^>]*>/g, '')
    .replace(/<link\s+rel="canonical"[^>]*>/g, '')
    .replace('</head>', result.head + '<script>window.__PRERENDER_PATH__=' + JSON.stringify(route) + ';</script></head>')
    .replace('<div id="root"></div>', '<div id="root">' + result.html + '</div>');
  if (!page.includes(result.html) || !result.html) throw new Error('Failed to embed rendered page: ' + route);
  const filename = route === '/' ? 'index.html' : route.slice(1) + '.html';
  await writeFile(path.join(root, 'dist', filename), page);
  console.log('Prerendered ' + route);
}
const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + paths.map(route => '<url><loc>https://counter-88.com' + route + '</loc></url>').join('') + '</urlset>\n';
await writeFile(path.join(root, 'dist/sitemap.xml'), sitemap);

// Render the existing not-found screen for Vercel's genuine HTTP 404 response.
const missing = renderPage('/__not_found__');
const errorPage = template.replace(/<title>[\s\S]*?<\/title>/, '').replace(/<meta name="description"[^>]*>/g, '').replace(/<link rel="canonical"[^>]*>/g, '').replace('</head>', missing.head + '</head>').replace('<div id="root"></div>', '<div id="root">' + missing.html + '</div>');
await writeFile(path.join(root, 'dist/404.html'), errorPage);
