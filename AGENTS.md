# AGENTS.md

Personal site: vanilla JS SPA built with Vite, deployed on Vercel. See `README.md` for the overview.

## Tooling

- Node.js >= 24 (`.nvmrc`).
- Use pnpm (version pinned in `package.json` → `packageManager`), never npm: `pnpm install`, `pnpm dev`, `pnpm build`, `pnpm preview`. There are no tests, linter or CI: verify changes with `pnpm build` and check the result with `pnpm preview`.
- Zero runtime dependencies. Do not add frameworks or runtime libraries; Vite is the only dev dependency.
- `pnpm-workspace.yaml` pins exact versions (`saveExact`) and disables install scripts (`ignoreScripts`). Keep both, keep the `packages: [.]` entry (pnpm 9 on Vercel rejects the file without it), and commit `pnpm-lock.yaml` with any change to `package.json`.

## Rules that are easy to break

- **Navigation:** `js/main.js` intercepts clicks on same-origin `<a>` tags without `target` and routes them with `pushState`. External links need a different host or a `target` attribute.
- **New route:** add the `case` in `js/router.js`, a controller in `controllers/` (export it from `controllers/index.js`), a view in `views/`, and the URL in `public/sitemap.xml`. A top-level section also needs its nav link in `index.html`, plus its `#nav-*` entries in `removeActive()` (`js/router.js`) and the click handlers in `js/main.js`.
- **Assets:** files in `public/` are referenced with absolute paths (`/assets/...`) and are not processed by Vite.
- **Service Worker:** `public/service-worker.js` caches fixed paths such as `/js/index.js` and `/css/index.css`. That is why `vite.config.js` disables filename hashing; do not re-enable it. Bump `CACHE_NAME` whenever a cached file changes, and add new shell assets to `filesToCache`.
- **SPA fallback:** `vercel.json` rewrites every path to `/index.html`; new routes need no server config.
