# SoftBees — Static Site Deploy Package

Single self-contained `index.html` — all components, data, and assets are bundled inline. No build step, no dependencies, no server-side logic.

## Contents
- `index.html` — the entire site (bundled). Opens correctly by double-clicking it directly, or served from any static host.

## Deploying to GitHub Pages
1. Push `index.html` to the root of a GitHub repo (or to a `docs/` folder, or the `gh-pages` branch).
2. In the repo settings → Pages, set the source to that branch/folder.
3. GitHub Pages serves it as-is — no build step required.

Works on any static host (Netlify, Vercel, S3, Cloudflare Pages, etc.) the same way: upload `index.html`, done.

## Notes
- In-app navigation (Products/Portfolio/Blog/About) uses URL hash routing — works standalone and once deployed.
- A couple of external resources (Google/Inter font, a background 3D animation script, one placeholder avatar image) load from public CDNs at runtime — an internet connection is needed for those to appear; the rest of the site works fully offline.
