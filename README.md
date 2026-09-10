# SoftBees Website

Static marketing site (home, products, portfolio, blog, about) with hash-based
in-app navigation, hero carousel, sticky blog filters with topic dropdown,
featured article card, dynamic card fade overlays, and events/portfolio grids.

This export was built fresh from the current project source (`src/SoftBees.dc.html`
and its child components) — `public/index.html` is a from-scratch bundle of that
current state, not a reused/older build.

## Structure

- `public/index.html` — **the deployed site.** A single self-contained bundle:
  all component markup, styles, data, and assets (images/fonts as base64) are
  inlined. This is what `npm run build` copies to `dist/` and what Vercel serves.
- `src/` — original component sources (SoftBees, EventCard, PortfolioCard,
  Button, Badge, ButtonMIcon, ContentTitleGroup, FinalCTA) and `softbees-data.js`
  (content/data) + `support.js` (runtime). Kept for reference/future edits;
  not consumed directly by the build.
- `assets/` — raw source assets (event covers, logos, tech icons, fonts,
  social icons) already inlined into `public/index.html`. Kept for reference
  and reuse.

## Local development

```
npm install
npm run dev      # serves public/ at http://localhost:3000
```

## Production build

```
npm install
npm run build    # copies public/ → dist/
npm start         # serves dist/ at http://localhost:3000
```

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import it in Vercel — `vercel.json` sets the build command (`npm run build`)
   and output directory (`dist`) already, so no manual config is needed.
3. Deploy. The site needs an internet connection at runtime only for the
   Google/Inter font, one background animation script, and one placeholder
   avatar image loaded from public CDNs — everything else (all images, fonts,
   components) is bundled offline.

## Notes

- No design or functionality was changed in packaging this build — `public/index.html`
  was rebuilt from and verified against the current project preview.
