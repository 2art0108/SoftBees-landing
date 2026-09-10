# SoftBees Website

Static marketing site (home, products, portfolio, blog, about) — hash-based
in-app navigation, hero carousel, sticky blog filters with topic dropdown,
featured article, dynamic card fade overlays, and events/portfolio grids.

This export was rebuilt from the CURRENT project source and verified to
render every page (Home, Blog, About, Portfolio) with zero broken images,
including logo-carousel hover images, event card thumbnails, and Event
Details images.

## Why `public/` is the raw component source, not a bundled file

The site runs as plain HTML/CSS/JS in the browser — there is no compiler
step. `public/index.html` (a copy of the project's `SoftBees.dc.html`) and
its sibling component files (`Button.dc.html`, `EventCard.dc.html`, etc.)
fetch each other by relative URL at runtime, exactly as they do in the
design tool's own preview. Bundling this into one self-contained file was
tried and rejected: several images that are only referenced from JS data
(not literal `<img src>` tags — event thumbnails, logo hover states, the
tech-stack grid) could not be reliably inlined by the bundler and pointed
at broken/temporary URLs. Shipping the real component files with their
real relative asset paths avoids that failure mode entirely.

## Structure

- `public/index.html` + sibling `*.dc.html` files, `support.js` (runtime),
  `softbees-data.js` (content) — **the deployed site**, copied verbatim
  from the project.
- `public/assets/` — logos, event covers/photos, tech-stack icons, fonts,
  social icons.
- `public/uploads/` — user-uploaded images referenced by blog posts,
  timeline items, and the hero carousel.
- `src/` — the same `*.dc.html` component sources, kept at top level for
  reference/editing outside this build layout.

## Local development

```
npm install
npm run dev      # serves public/ at http://localhost:3000
```

## Production build

```
npm install
npm run build    # copies public/ → dist/ (site + all asset folders)
npm start         # serves dist/ at http://localhost:3000
```

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import it in Vercel — `vercel.json` already sets the build command
   (`npm run build`) and output directory (`dist`).
3. Deploy. Runtime needs an internet connection only for the Google/Inter
   font, one background animation script, and one placeholder avatar image
   loaded from public CDNs — every other image is served from `assets/`
   and `uploads/` in this repo.

## Notes

- No design, layout, or functionality was changed — only the image/asset
  export path was fixed so every image resolves correctly once deployed.
