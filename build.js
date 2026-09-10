// Production build for the SoftBees static site.
// The site is a single self-contained HTML file (all CSS/JS/images/fonts
// inlined) — there is no bundler step. This script just stages it, plus
// the raw asset sources, into dist/ for Vercel (or any static host) to serve.
const fs = require("fs");
const path = require("path");

const root = __dirname;
const dist = path.join(root, "dist");

if (fs.existsSync(dist)) fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

fs.cpSync(path.join(root, "public"), dist, { recursive: true });

if (!fs.existsSync(path.join(dist, "index.html"))) {
  throw new Error("Build failed: dist/index.html missing after copy.");
}

console.log("Build complete → dist/index.html");
