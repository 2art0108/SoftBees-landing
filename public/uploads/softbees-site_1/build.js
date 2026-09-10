#!/usr/bin/env node
/**
 * Bundles the project into one self-contained file at dist/index.html.
 *
 *  - assets/css/styles.css is inlined into a <style> tag
 *  - the three Fixel Text .woff2 files are base64'd into that CSS
 *  - every <script src="..."> is inlined in the same order
 *
 * The result has no local dependencies: open it with a double click, email it,
 * or drop it on any static host. Run with `npm run build`.
 */
const fs = require('fs');
const path = require('path');

const root = __dirname;
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');

let html = read('index.html');

/* ---- CSS, with the fonts embedded ---- */
let css = read('assets/css/styles.css');
css = css.replace(/url\("\.\.\/fonts\/([^"]+)"\)/g, (_, file) => {
  const b64 = fs.readFileSync(path.join(root, 'assets/fonts', file)).toString('base64');
  return `url(data:font/woff2;base64,${b64})`;
});
html = html.replace(
  /<link rel="stylesheet" href="assets\/css\/styles\.css">/,
  `<style>\n${css}\n</style>`
);

/* ---- scripts, in document order ---- */
html = html.replace(/<script src="([^"]+)"><\/script>/g, (_, src) => `<script>\n${read(src)}\n</script>`);

fs.mkdirSync(path.join(root, 'dist'), { recursive: true });
const out = path.join(root, 'dist/index.html');
fs.writeFileSync(out, html);

const kb = (fs.statSync(out).size / 1024).toFixed(0);
console.log(`Built dist/index.html — ${kb} KB, no external files required.`);
