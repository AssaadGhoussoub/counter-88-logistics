import { readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';

const root = resolve('dist');
for (const route of ['/', '/contact', '/privacy', '/cookies']) {
  const filename = route === '/' ? 'index.html' : route.slice(1) + '.html';
  const html = await readFile(resolve(root, filename), 'utf8');
  const doc = new JSDOM(html).window.document;
  assert.equal(doc.querySelectorAll('h1').length, 1, filename + ': single page heading');
  assert.equal(doc.querySelectorAll('title').length, 1, filename + ': single title');
  assert.equal(doc.querySelectorAll('link[rel="canonical"]').length, 1);
  assert.equal(doc.querySelector('link[rel="canonical"]').href, 'https://counter-88.com' + route);
  assert.ok(doc.getElementById('root').textContent.length > 300);
  JSON.parse(doc.getElementById('business-schema').textContent);
  for (const script of doc.querySelectorAll('script[src]')) await readFile(resolve(root, '.' + script.getAttribute('src')));
  assert.ok(!html.includes('googletagmanager'));
  console.log('Verified rendered page: ' + route);
}
const contact = new JSDOM(await readFile(resolve(root, 'contact.html'), 'utf8')).window.document;
assert.ok(contact.querySelector('iframe[title="Counter 88 Elissar office map preview"]').src.includes('33.92636708425874%2C35.62379759104614'));
const missing = new JSDOM(await readFile(resolve(root, '404.html'), 'utf8')).window.document;
assert.equal(missing.querySelector('h1').textContent, '404');
assert.equal(missing.querySelector('meta[name="robots"]').content, 'noindex,follow');
const sitemap = new JSDOM(await readFile(resolve(root, 'sitemap.xml'), 'utf8'), { contentType: 'text/xml' }).window.document;
assert.equal(sitemap.querySelectorAll('loc').length, 4);
for (const file of (await readdir(resolve(root, 'assets'))).filter(name => name.endsWith('.js'))) {
  assert.ok(!/googletagmanager|G-EZT84C56CT/.test(await readFile(resolve(root, 'assets', file), 'utf8')));
}
console.log('Verified map coordinates, existing 404 screen, sitemap and absence of Analytics.');
