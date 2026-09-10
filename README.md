# SoftBees Website

Static marketing site (home, products, portfolio, blog, about) with hash-based
in-app navigation, a hero carousel, sticky blog filters, and an events/portfolio
grid.

## Structure

- `public/index.html` — **the deployed site.** A single self-contained bundle:
  all component markup, styles, data, and assets (images/fonts as base64) are
  inlined. This is what `npm run build` copies to `dist/` and what Vercel serves.
- `src/` — original component sources (SoftBees, EventCard, PortfolioCard,
  Button, Badge, ContentTitleGroup, FinalCTA) and `softbees-data.js`, the
  content/data module they're built from. Kept for reference/future edits;
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
   Google/Inter font and one background animation script loaded from public
   CDNs — everything else (all images, fonts, components) is bundled offline.

## Notes

- No design or functionality was changed in packaging this build — `public/index.html`
  is the same bundle previously verified in the design tool.
