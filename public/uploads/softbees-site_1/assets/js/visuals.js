/* Generated visuals.
   Gradient + honeycomb compositions standing in for photography and diagrams.
   Swap a viz() call for an <img> once you have real art. */

/* ---------- generated visuals (no photography available) ---------- */
const PALETTES = [
  ["#FFD667","#FF8A21"],
  ["#FF8A21","#8163FF"],
  ["#8163FF","#FFD667"],
  ["#FFB03A","#FF5C7A"],
  ["#5BC8FF","#8163FF"],
  ["#FFD667","#FF5C7A"]
];
const GLYPHS = {
  hive: '<g opacity=".9"><path d="M400 150l52 30v60l-52 30-52-30v-60l52-30z"/><path d="M296 210l52 30v60l-52 30-52-30v-60l52-30z"/><path d="M504 210l52 30v60l-52 30-52-30v-60l52-30z"/><path d="M400 270l52 30v60l-52 30-52-30v-60l52-30z"/></g>',
  handshake: '<g><path d="M330 160l70 40v80l-70 40-70-40v-80l70-40z"/><path d="M470 160l70 40v80l-70 40-70-40v-80l70-40z"/><path d="M370 250h60"/></g>',
  trophy: '<g><path d="M400 140l78 45v90l-78 45-78-45v-90l78-45z"/><path d="M400 190l14 30 33 4-24 23 6 33-29-16-29 16 6-33-24-23 33-4 14-30z"/></g>',
  mountain: '<g><path d="M250 330l90-140 55 84 40-56 115 112H250z"/><circle cx="520" cy="180" r="24"/></g>',
  landmark: '<g><path d="M280 210l120-64 120 64"/><path d="M300 230v110M360 230v110M440 230v110M500 230v110"/><path d="M264 350h272"/></g>',
  flow: '<g><rect x="230" y="180" width="120" height="66" rx="16"/><rect x="450" y="150" width="120" height="66" rx="16"/><rect x="450" y="256" width="120" height="66" rx="16"/><path d="M350 213h50M400 213v-30h50M400 213v76h50"/><circle cx="400" cy="213" r="5"/></g>',
  app: '<g><rect x="316" y="120" width="168" height="250" rx="26"/><path d="M348 176h104M348 210h72M348 244h88"/><rect x="348" y="278" width="104" height="52" rx="12"/></g>',
  shield: '<g><path d="M400 130l100 40v90c0 60-45 95-100 118-55-23-100-58-100-118v-90l100-40z"/><path d="M358 250l30 30 58-62"/></g>',
  chart: '<g><path d="M270 340V220M340 340V170M410 340V255M480 340V190M550 340V140"/><path d="M240 340h340"/></g>',
  globe: '<g><circle cx="400" cy="250" r="110"/><path d="M290 250h220M400 140c40 44 40 176 0 220M400 140c-40 44-40 176 0 220"/></g>',
  stage: '<g><rect x="290" y="290" width="220" height="60" rx="12"/><path d="M400 290v-70"/><rect x="376" y="140" width="48" height="82" rx="24"/><path d="M330 200c0 40 32 70 70 70s70-30 70-70"/></g>',
  doc: '<g><rect x="300" y="130" width="200" height="240" rx="18"/><path d="M336 186h128M336 224h128M336 262h84"/><circle cx="470" cy="300" r="34"/><path d="M456 300l10 11 22-24"/></g>',
  truck: '<g><rect x="250" y="210" width="180" height="100" rx="14"/><path d="M430 240h60l60 50v20h-120z"/><circle cx="320" cy="330" r="26"/><circle cx="500" cy="330" r="26"/></g>',
  money: '<g><rect x="260" y="180" width="280" height="150" rx="20"/><circle cx="400" cy="255" r="42"/><path d="M400 228v54M386 242h28M386 268h28"/></g>'
};
function viz(kind, seed){
  const p = PALETTES[(seed || 0) % PALETTES.length];
  const g = GLYPHS[kind] || GLYPHS.hive;
  const id = "v" + Math.random().toString(36).slice(2, 8);
  return '<svg class="viz" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">'
    + '<defs>'
    + '<linearGradient id="g' + id + '" x1="0" y1="500" x2="800" y2="0"><stop stop-color="' + p[0] + '"/><stop offset="1" stop-color="' + p[1] + '"/></linearGradient>'
    + '<radialGradient id="r' + id + '" cx="30%" cy="20%" r="80%"><stop stop-color="' + p[0] + '" stop-opacity=".55"/><stop offset="1" stop-color="' + p[1] + '" stop-opacity="0"/></radialGradient>'
    + '<radialGradient id="r2' + id + '" cx="80%" cy="90%" r="70%"><stop stop-color="' + p[1] + '" stop-opacity=".5"/><stop offset="1" stop-color="' + p[0] + '" stop-opacity="0"/></radialGradient>'
    + '<pattern id="p' + id + '" width="46" height="80" patternUnits="userSpaceOnUse" patternTransform="scale(.9)">'
    + '<path d="M23 0l23 13v26L23 52 0 39V13L23 0z" fill="none" stroke="rgba(255,255,255,.11)" stroke-width="1"/></pattern>'
    + '</defs>'
    + '<rect width="800" height="500" fill="#0b0b0f"/>'
    + '<rect width="800" height="500" fill="url(#r' + id + ')"/>'
    + '<rect width="800" height="500" fill="url(#r2' + id + ')"/>'
    + '<rect width="800" height="500" fill="url(#p' + id + ')" opacity=".8"/>'
    + '<g fill="none" stroke="url(#g' + id + ')" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity=".95">' + g + '</g>'
    + '</svg>';
}
