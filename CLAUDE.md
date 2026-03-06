# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start Vite dev server with HMR
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
```

No tests, linter, or CI pipeline configured.

## Architecture

Vanilla JavaScript SPA (no framework) built with Vite. Zero runtime dependencies.

### MVC-like Pattern

- **`js/main.js`** — Entry point. Registers Service Worker (prod only via `import.meta.env.PROD`), initializes dark mode, sets up hash-based router.
- **`js/router.js`** — Hash router (`#/home`, `#/about`, `#/tutorials`, `#/articles`, `#/hobbies`). Imports all controllers, switches content in `#root` based on `window.location.hash`.
- **`controllers/`** — Each feature folder (home/, aboutMe/, tutorials/, articles/, hobbies/) has an index.js that exports a function creating a DOM element from its corresponding view template. Some controllers add runtime behavior (e.g., `articles/articles.js` swaps images by screen size).
- **`views/`** — Mirrors controllers structure. Each file exports an HTML template literal string. These are set as `innerHTML` on elements created by controllers.

### Static Assets & PWA

- **`public/`** — Files served as-is by Vite (no processing): `service-worker.js`, `manifest.json`, `assets/icons/`, `assets/images/`.
- All asset references use absolute paths (`/assets/...`) so Vite serves them from `public/` without hashing.
- Service Worker (`public/service-worker.js`) uses cache-first strategy. Bump `CACHE_NAME` version when updating cached resources.

### CSS

- **`css/main.css`** — Global styles, CSS custom properties for theming, BEM naming convention.
- **`css/dark-mode.css`** — Dark/light mode overrides via CSS custom properties.
- **`css/media-queries.css`** — Responsive breakpoints.
- **`css/normalize.css`** — Browser reset.

### Vite Config

`vite.config.js` disables filename hashing to keep predictable output paths compatible with the Service Worker's `filesToCache` list. Output structure: `js/[name].js`, `css/[name].css`.

## Deployment

Deployed on Vercel. Framework preset: **Vite**. Build output: `dist/`. Vercel auto-detects configuration from `package.json`.
