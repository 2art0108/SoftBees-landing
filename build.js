// Production build for the SoftBees static site: no bundler is used —
// the site runs as plain HTML/CSS/JS in the browser. This just stages
// public/ (the runnable site + all its asset folders) into dist/.
const fs = require("fs");
const path = require("path");

const root = __dirname;
const dist = path.join(root, "dist");

if (fs.existsSync(dist)) fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
fs.cpSync(path.join(root, "public"), dist, { recursive: true });

const required = ["index.html", "support.js", "softbees-data.js", "assets", "uploads"];
for (const f of required) {
  if (!fs.existsSync(path.join(dist, f))) throw new Error("Build failed: dist/" + f + " missing.");
}

console.log("Build complete → dist/ (site + assets)");
