# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start Vite dev server with HMR
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
```

Requires Node.js >= 24. No tests, linter, or CI pipeline configured.

## Architecture

Vanilla JavaScript SPA (no framework) built with Vite. Zero runtime dependencies.

### MVC-like Pattern

- **`js/main.js`** — Entry point. Registers Service Worker (prod only via `import.meta.env.PROD`), initializes dark mode, sets up History API router with client-side navigation (intercepts `<a>` clicks, uses `pushState`/`popstate`). Includes backward-compat redirect from old `#/` hash URLs.
- **`js/router.js`** — History API router using `window.location.pathname`. Routes: `/`, `/home`, `/about`, `/tutorials`, `/articles`, `/hobbies`, plus article sub-pages (`/remove-password`, `/modern-combat`, `/intro-hybrids`). Switches content in `#root` by calling controller functions.
- **`controllers/`** — Each feature folder (home/, aboutMe/, tutorials/, articles/, hobbies/) has an `index.js` that exports a function creating a DOM element from its corresponding view template. Some controllers add runtime behavior (e.g., `articles/articles.js` swaps images by screen size). `controllers/index.js` is the barrel file re-exporting all controllers.
- **`views/`** — Mirrors controllers structure. Each file exports an HTML template literal string. These are set as `innerHTML` on elements created by controllers.

### Routing & Navigation

Internal links must use same-origin `<a>` tags without `target` attribute — `main.js` intercepts clicks and calls `history.pushState()`. External links (different hostname or with `target` attribute) are not intercepted. When adding new routes: add the case to `router.js`, create a controller + view, and update navigation links.

### Static Assets & PWA

- **`public/`** — Files served as-is by Vite (no processing): `service-worker.js`, `manifest.json`, `sitemap.xml`, `assets/icons/`, `assets/images/`.
- All asset references use absolute paths (`/assets/...`) so Vite serves them from `public/` without hashing.
- Service Worker (`public/service-worker.js`) uses cache-first strategy with navigation requests always returning `/index.html` (SPA fallback). Bump `CACHE_NAME` version when updating cached resources.

### CSS

- **`css/main.css`** — Global styles, CSS custom properties for theming, BEM naming convention.
- **`css/dark-mode.css`** — Dark/light mode overrides via CSS custom properties.
- **`css/media-queries.css`** — Responsive breakpoints.
- **`css/normalize.css`** — Browser reset.

### Vite Config

`vite.config.js` disables filename hashing to keep predictable output paths compatible with the Service Worker's `filesToCache` list. Output structure: `js/[name].js`, `css/[name].css`.

## Deployment

Deployed on Vercel. Framework preset: **Vite**. Build output: `dist/`. `vercel.json` has a catch-all rewrite (`/(.*) → /index.html`) for SPA client-side routing support.
