# SoftBees website

Static site — no build step, no dependencies to install.

## Deploy on Vercel
1. Push this folder's contents to the repository root.
2. In Vercel: Add New → Project → import the repo. Framework preset: **Other**. Leave build/output settings empty (`vercel.json` handles them).
3. Deploy. The site is served from `/index.html`.

## Local preview
`npx serve .` → http://localhost:3000 (opening the file directly via file:// will not work — components are fetched over HTTP).

## Structure
- `index.html` — entry page (all routes are hash-based: `#home`, `#portfolio`, `#case/…`)
- `*.dc.html` — components, loaded at runtime by `support.js`
- `softbees-data.js` — content (cases, posts, events)
- `assets/`, `uploads/` — images, icons, fonts, illustrations

## External services
- Inter font (rsms.me), Unicorn Studio hero animation (jsdelivr), flag icons (flagcdn.com)
- Contact form → FormSubmit → info@softbees.com. First live submission sends a one-time activation email to that inbox; confirm it to enable delivery.
