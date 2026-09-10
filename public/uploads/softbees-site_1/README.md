# SoftBees — website

Static single-page site for SoftBees, a neobank-launch partner. No framework, no
bundler, no build step needed to develop: plain HTML, one stylesheet, and a
handful of vanilla JS files loaded in order.

Content language is Ukrainian. The locale switch shows UA active and EN disabled
("Скоро") — wiring EN up is a data question, not a code one (see *Adding a
language* below).

---

## Run it

Any static server works, because the pages are rendered client-side and the
routes live in the URL hash.

```bash
npm install     # only installs `serve`, nothing else
npm run dev     # http://localhost:5173
```

Prefer no Node at all:

```bash
python3 -m http.server 5173
```

Opening `index.html` straight from the filesystem (`file://`) mostly works, but
some browsers block the font files over that protocol. Use a server.

## Build a single-file version

```bash
npm run build   # → dist/index.html
npm run preview # serves dist on http://localhost:5174
```

`build.js` inlines the stylesheet, base64s the three Fixel woff2 files into it,
and inlines every script in document order. The output is one portable HTML file
with no local dependencies — handy for previews, email, or dropping onto a host
that only accepts a single file.

---

## Structure

```
index.html                      page shell: <head>, header, mobile menu,
                                #app mount point, footer, script tags
assets/
  css/styles.css                the entire design system (tokens → components)
  fonts/FixelText-*.woff2       Regular 400 / Medium 500 / SemiBold 600
  js/
    visuals.js                  viz(): generated SVG art used in place of photos
    app.js                      renderers, router, interactions
    data/
      products.js               PRODUCTS — 8 platform modules
      cases.js                  CASES — 8 portfolio cases
      posts.js                  POSTS + CATEGORIES — blog listing
      details.products.js       full product pages
      details.cases.js          full case pages
      details.posts.js          blog posts linked from the listing
      details.posts-archive.js  posts reachable only by direct link
build.js                        single-file bundler
```

Load order matters: `visuals.js` → data files → `app.js`. Each data file declares
a top-level `const`, and `details.*.js` files merge into one shared `DETAILS`
object (the first one creates it). Keep the order in `index.html` if you add files.

---

## Routing

Hash-based, handled entirely in memory so it also works inside sandboxed iframe
previews where the address bar can't be written.

| Route | Page |
| --- | --- |
| `#home` | Home |
| `#products` | Products listing |
| `#portfolio` | Portfolio listing |
| `#blog` | Blog listing |
| `#about` | About |
| `#contact` | About, scrolled to the contact section |
| `#product/<slug>` `#case/<slug>` `#post/<slug>` | Detail template |

Internal links are **not** `<a href="#...">`. They carry `data-nav="#route"` and
are picked up by one delegated click/keydown handler in `app.js` — that keeps
navigation inside the app and avoids the preview sandbox intercepting it. Links
that should genuinely leave the site (`mailto:`, external URLs) stay as normal
anchors with `href`.

```html
<a data-nav="#products" role="link" tabindex="0">Продукти</a>   <!-- internal -->
<a href="mailto:info@softbees.com">info@softbees.com</a>        <!-- external -->
```

An unknown slug renders the not-found state ("Сторінку не знайдено") rather than
throwing.

---

## Editing content

### Add a product

1. Append to `PRODUCTS` in `data/products.js` — `{n, slug, title, desc}`. It
   appears automatically in the products grid, the home platform grid, the header
   mega-dropdown, and the hero console. The first five also fill the footer column.
2. Add the matching entry to `DETAILS` in `data/details.products.js` with
   `kind: "product"`.

Cases and posts work the same way (`data/cases.js` + `details.cases.js`;
`data/posts.js` + `details.posts.js`). A post that exists in `DETAILS` but not in
`POSTS` is still reachable by URL — that's how the archive posts behave.

### Detail page blocks

Detail bodies are arrays of small typed blocks, rendered by `renderBlocks()`:

| Block | Shape | Renders as |
| --- | --- | --- |
| `{t:"h2"/"h3", x}` | string | section heading |
| `{t:"p", x}` | string (inline HTML allowed) | paragraph |
| `{t:"ul", x}` | array of strings | hex-bulleted list |
| `{t:"f", x}` | array of `[label, text]` | label/description rows |
| `{t:"tags", x}` | array of strings | chip cloud |
| `{t:"stats", x}` | array of `[value, caption]` | gradient stat call-outs |
| `{t:"q", x, by}` | strings | pull quote with attribution |
| `{t:"img", kind, seed, cap}` | see visuals | figure with caption |
| `{t:"hash", x}` | string | hashtag line |

Cross-links inside a paragraph use the same `data-nav` convention:

```js
{t:"p", x:'…виросла з <a data-nav="#case/emi-cyprus" role="link" tabindex="0">впровадження на Кіпрі →</a>.'}
```

### Contact form

`app.js` validates the three fields and then calls `onSubmit(data)` — a one-line
hook that currently logs to the console. Point it at your endpoint:

```js
function onSubmit(data) {
  fetch('/api/contact', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  });
}
```

The success state is rendered by the caller, so a failed request currently still
shows success — add error handling when you wire a real endpoint.

---

## Design system

All tokens sit at the top of `styles.css`:

- **Canvas** `--bg #070709`, panels as translucent white, hairlines at 6–10% white
- **Accent** a honey→amber→violet gradient (`--grad`), used for the logo, stat
  numbers, primary buttons and the hover glow; `--honey #FFC24A` on its own for
  eyebrows, tags and mono labels
- **Type** Fixel Text for everything (400/500/600), JetBrains Mono for eyebrows,
  dates, breadcrumbs and module numbers. Display tracking is tuned for Fixel's
  text-optimised fitting — if you swap in Fixel Display, tighten it again.
- **Rhythm** `--sect` controls vertical section padding site-wide;
  `--radius` the card corner

The hexagon motif (bullets, chips, avatar, favicon, hero console tiles) is the
brand thread — it's a `clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)`
if you need it elsewhere.

### Imagery

No photography shipped with the content, so every image slot calls
`viz(kind, seed)` in `visuals.js`, which composes a gradient mesh + honeycomb
pattern + a line glyph. Available kinds: `hive`, `handshake`, `trophy`,
`mountain`, `landmark`, `flow`, `app`, `shield`, `chart`, `globe`, `stage`,
`doc`, `truck`, `money`. `seed` picks one of six palettes.

To use real art, replace the `viz(...)` call with an `<img>` — the media
containers (`.pcard .media`, `.figure`, `.media-frame`) already crop and
round correctly.

## Motion and accessibility

Reveals use a single `IntersectionObserver` with per-item stagger via `--i`.
Every animation is disabled under `prefers-reduced-motion: reduce`, including the
route transition and smooth scrolling. Internal links are keyboard-operable
(`role="link"`, `tabindex="0"`, Enter/Space), focus rings are visible, and the
layout is responsive down to 360px.

## Browser support

Modern evergreen browsers. Uses CSS nesting-free plain selectors, custom
properties, `clip-path`, `backdrop-filter`, `aspect-ratio` and
`background-clip: text` — all baseline in current Chrome, Safari, Firefox and Edge.
