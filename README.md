# Counter 88 Logistics

Informational React/TypeScript website for shipping and logistics from China to Lebanon.

## Existing pages

The site retains exactly the existing routes: `/`, `/contact`, `/privacy`, and `/cookies`, plus the existing not-found screen. No dedicated SEO landing pages were added.

The active entry is `index.html` -> `src/main.tsx` -> `src/App.tsx`. Legacy JSX files are not used by this entry or by HTML generation.

## Local development and checks

```sh
npm ci
npm run dev -- --port 8081
npm run check
npm run preview
```

The development server binds to all network interfaces. Use the URL printed by Vite. The configured port is 8080; the command above requests the current preview port, 8081.

## Production HTML and SEO

`npm run build` builds the browser assets, builds a temporary server rendering bundle in `.prerender/`, and generates complete HTML in:

- `dist/index.html`
- `dist/contact.html`
- `dist/privacy.html`
- `dist/cookies.html`

Each page contains its content, unique title/description, canonical URL, social metadata and JSON-LD business information. React hydrates the generated HTML when the URL matches. Internal navigation uses anchor links through React Router. The build also generates `dist/sitemap.xml`; `robots.txt` points to it.

The confirmed production origin is `https://counter-88.com`. Metadata is defined in `src/lib/seo.ts`. If the domain changes, update that constant, the prerender sitemap origin, `public/robots.txt`, and the development HTML canonical together.

Publish the **entire `dist/` directory**, not just its root HTML file. Configure the host to serve the route-specific HTML files, supporting `/contact` and `/contact/` consistently. Known pages should return 200; genuinely unknown URLs should return HTTP 404. Do not rewrite every known page to the homepage HTML, because that loses its initial route metadata and content. If unknown URLs use an SPA fallback, configure the HTTP status correctly.

Redirect HTTP and any alternate www hostname to the confirmed HTTPS domain. Verify assets, redirects, metadata and sitemap on the actual production host before requesting indexing.

## Privacy and contact

Google Analytics and its consent-banner components have been removed from the active project. The contact page shows embedded Google Maps previews. Clicking a preview opens the configured coordinates (Elissar: 33.92636708425874, 35.62379759104614, confirmed by the owner). These embeds may load Google content before a click. WhatsApp links open only when chosen. The original Guangzhou embed represents a city location; confirm the precise China office pin before using it for office directions.

The contact form prepares a WhatsApp draft. Users must send it in WhatsApp; no website backend confirms receipt or stores the inquiry. A previous localStorage consent preference may remain in existing browsers, but is unused by the current application.

## Launch and search visibility

After deployment, verify the domain in Google Search Console, submit `/sitemap.xml`, and inspect the homepage and contact page. Search Console does not require adding Google Analytics tracking to the site.

Confirm business contact/location information and maintain a verified Google Business Profile. Review real business claims and the hosting provider's logging/retention details. Ranking is not guaranteed by metadata or structured data; useful content, business reputation and competition also matter.

See [AUDIT.md](AUDIT.md) for the current SEO update, historical bug audit, validation and remaining release work.

## Existing Vercel deployment — final checks

The site is already live on Vercel. You commit/push the changes yourself. A push to the configured production branch may automatically publish an update. `vercel.json` uses `npm ci`, requires `npm run check`, serves the generated HTML with clean URLs, and adds security headers. It deliberately avoids a catch-all homepage rewrite. `dist/404.html` renders the existing not-found screen for genuine unknown-route responses. No new content pages were added.

Use Node 22.18 or newer (final local checks used Node 24.12). Commit package.json, package-lock.json, vercel.json, source, scripts, tests and documentation. Do not commit node_modules, dist or .prerender. npm is the deployment package manager; the legacy bun lock is not used by this configuration.

Validation: 12 tests passed, TypeScript and generated-output checks passed, lint has no errors and eight development export warnings. Production dependency audit reports zero advisories. Five high advisories remain in development-only Tailwind/globbing dependencies because the braces advisory has no upstream patch. Only trusted repository/configuration input should be used for builds; these modules are not served in the static website.

After the update reaches Vercel, verify direct page loads, the real 404 status, security headers and www redirects on the deployed URL. Connect both apex/www domains in Vercel for the hostname redirect to apply. The new configuration has not been deployed by this agent.
