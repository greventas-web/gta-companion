// Designed artwork for cards that have no real image yet.
//
// Every card without a confirmed photo gets a made-up, clearly-designed
// Vice City style poster (sunset gradient, skyline, palms and a neon icon or
// monogram for the item). These are artwork, not screenshots. Real images
// always win: lib/simple/cardImage.ts only falls back to art when an item has
// no photo of its own.
//
//   node scripts/images/card-art.mjs            # pool + every item in card-art-items.json
//   node scripts/images/card-art.mjs --pool     # only the per-kind pools
//
// Output: public/images/art/<kind>/<slug>.webp and lib/simple/artManifest.json
// (the list of "<kind>/<slug>" keys that have their own file).
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import sharp from "sharp";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "public", "images", "art");
const ITEMS = path.join(ROOT, "scripts", "images", "card-art-items.json");
const MANIFEST = path.join(ROOT, "lib", "simple", "artManifest.json");
const W = 960;
const H = 600;
const POOL = 8;

export function artSlug(title) {
  return title
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/['’`]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "item";
}

// Theme per card kind: lucide icon (or custom silhouette) and whether to show a monogram.
const THEMES = {
  weapon: { icon: "pistol" },
  gunstore: { icon: "pistol" },
  range: { icon: "target" },
  vehicle: { icon: "sportscar" },
  salon: { icon: "scissors" },
  tattoo: { icon: "pen-tool" },
  clothing: { icon: "shirt" },
  clothingstore: { icon: "shirt", mono: true },
  mod: { icon: "wrench" },
  garage: { icon: "warehouse" },
  property: { icon: "house" },
  animal: { icon: "paw-print" },
  activity: { icon: "activity" },
  money: { icon: "dollar-sign" },
  brand: { icon: "tag", mono: true },
  business: { icon: "briefcase", mono: true },
  character: { icon: "user", mono: true },
  phone: { icon: "smartphone" },
  radio: { icon: "radio" },
  cheat: { icon: "gamepad-2" },
  mission: { icon: "flag" },
  trophy: { icon: "trophy" },
  collectible: { icon: "gem" },
  news: { icon: "newspaper" },
  location: { icon: "map-pin" },
  store: { icon: "store", mono: true },
  guide: { icon: "book-open" },
  challenge: { icon: "award" },
};

// Custom silhouettes on the same 24-unit grid as lucide.
const CUSTOM = {
  pistol: [
    ["path", { d: "M2.2 5.6h18.6a1 1 0 0 1 1 1v2.6a1 1 0 0 1-1 1H2.2a.6.6 0 0 1-.6-.6V6.2a.6.6 0 0 1 .6-.6z" }],
    ["path", { d: "M3.4 10.2h8.8l-1 2.2-1.1 6.4a1 1 0 0 1-1 .8H5.4a.7.7 0 0 1-.7-.8l1.2-6.2z" }],
    ["path", { d: "M12 10.2c.2 2.1 1.4 3.2 3.4 3.2h.3l.5-3.2" }],
    ["path", { d: "M12.6 10.6c.3 1 .7 1.5 1.3 1.8" }],
    ["path", { d: "M3 5.6V4.4h1.6v1.2M19.2 5.6v-.9h1.2v.9" }],
    ["path", { d: "M6.5 7.9h9" }],
  ],
  shotgun: [
    ["path", { d: "M1.2 9.4h14.6l1-.9h6v2.1h-6.3l-.7.8H8.8l-1.1 1.2v.6H6.2l-.6 1.6-3.9 2.6a.6.6 0 0 1-.9-.3l-.5-1.4a.6.6 0 0 1 .2-.7l3.2-2.4.4-1.4H1.2z" }],
    ["path", { d: "M10.2 11.3h5.6v1.3h-5.6z" }],
    ["path", { d: "M8.6 12.6c0 1 .6 1.6 1.6 1.6" }],
  ],
  rifle: [
    ["path", { d: "M1 10.3l3.6-1.6h5.2l.8-.8h9.6v1.6h2.6v1.1h-2.6v.9h-7.4l-.4 1.4 1.1 3.9h-2.1l-1.4-3.3H9l-.7 1.3H6.6l.5-1.9H4.4L1.6 14a.6.6 0 0 1-.8-.4z" }],
    ["path", { d: "M11 7.9V6.6h4.4v1.3" }],
    ["path", { d: "M13.4 12.1l1.1 3.9" }],
  ],
  sniper: [
    ["path", { d: "M.9 10.6l3.8-1.4h8.5l.7-.6h9.3v1.1h-9l-.6.6v.8H9.5l-.6 1.7H7.2l.4-1.7H4.8L1.5 13.4a.6.6 0 0 1-.8-.4z" }],
    ["path", { d: "M7.6 6.2h7.2a1.1 1.1 0 0 1 0 2.2H7.6a1.1 1.1 0 0 1 0-2.2zM9.2 8.4v.8M13.2 8.4v.8" }],
    ["path", { d: "M17 11.2v2.6l-1.2 1.9M17 13.8l1.2 1.9" }],
  ],
  launcher: [
    ["path", { d: "M1.5 8.6h17.6l3.4-1.2v5.6l-3.4-1.2H1.5a.7.7 0 0 1-.7-.7V9.3a.7.7 0 0 1 .7-.7z" }],
    ["path", { d: "M7.6 11.6l-.8 4.6h2l1.3-4.6M12.4 11.6v2.6h1.6v-2.6" }],
    ["path", { d: "M9.4 8.6V6.4h3.8v2.2" }],
  ],
  sportscar: [
    ["path", { d: "M1.5 15.6v-2.1c0-.8.5-1.4 1.3-1.6l4.4-1.1 3.4-2.4c.6-.4 1.3-.6 2-.6h3.6c.9 0 1.7.4 2.3 1l2 2.2 1.7.4c.8.2 1.3.9 1.3 1.7v2.5h-1.6" }],
    ["path", { d: "M4.9 15.6h-3.4" }],
    ["path", { d: "M9.6 15.6h5.4" }],
    ["circle", { cx: "7.3", cy: "15.6", r: "2.1" }],
    ["circle", { cx: "17.4", cy: "15.6", r: "2.1" }],
    ["path", { d: "M8.6 10.6h9.3" }],
  ],
};

// Item-specific silhouette, read from the item's name and card line.
const VARIANTS = {
  weapon: [
    [/rocket|launcher|\brpg\b|h-at|minigun/i, "launcher"],
    [/grenade|molotov|explosive|bomb|sticky|throw|bottle/i, "bomb"],
    [/incendiary|\bfire\b|flame|burn/i, "flame"],
    [/hammer/i, "hammer"],
    [/\baxe\b|hatchet/i, "axe"],
    [/knife|machete|bat\b|melee|crowbar|golf|club|knuckle|blade|sword|katana/i, "sword"],
    [/sniper|marksman/i, "sniper"],
    [/shotgun|gauge|shortstraw/i, "shotgun"],
    [/rifle|carbine|assault|5\.56|7\.62|\.308/i, "rifle"],
    [/ammo|reload|bullet/i, "crosshair"],
  ],
  vehicle: [
    [/helicopter|\bheli|maverick|swift|chopper|buzzard|frogger/i, "helicopter"],
    [/aircraft|plane|\bjet\b|airport|cuban 800|dodo|duster|lazer|p-996|hydra|luxor|shamal|velum|mallard/i, "plane"],
    [/marquis|sail/i, "sailboat"],
    [/boat|marina|jet ?ski|seashark|speedophile|jetmax|tropic|toro|predator|yacht|airboat|squalo|speeder|dinghy|tug/i, "ship"],
    [/bmx|bicycle|cycling|\bcycle\b|tuff|scorcher/i, "bike"],
    [/\bbike\b|motorcycle|akuma|bati|sanchez|faggio|chopper|hexer|daemon|motocross|dirt bike/i, "motorbike"],
    [/ambulance/i, "ambulance"],
    [/\bbus\b|coach/i, "bus"],
    [/\bvan\b|burrito|speedo|youga/i, "van"],
    [/truck|pickup|bison|sadler|hauler|tow/i, "truck"],
    [/tractor/i, "tractor"],
    [/\bsuv\b|off-?road|4x4/i, "car-front"],
    [/sedan|muscle|classic|coupe|compact/i, "car"],
  ],
  animal: [
    [/bird|gull|pigeon|duck|crane|peacock|flamingo|pelican|heron|egret|owl|vulture|eagle|parrot|ibis|spoonbill|hawk/i, "bird"],
    [/turtle|tortoise/i, "turtle"],
    [/rabbit|hare/i, "rabbit"],
    [/\bdog\b|coyote|wolf|fox/i, "dog"],
    [/\bcat\b|panther|bobcat|cougar|wildcat/i, "cat"],
    [/shrimp|crab|lobster/i, "shrimp"],
    [/\bsea\b|fish|whale|shark|\bray\b|jelly|dolphin|manatee|marlin|tarpon|bass/i, "fish"],
  ],
  activity: [
    [/fish/i, "fish"],
    [/arcade|game/i, "gamepad-2"],
    [/date|partner|romance/i, "heart"],
    [/meditat|yoga/i, "sparkles"],
    [/bank|rob|launder|cash|money|steal|sell/i, "dollar-sign"],
    [/zoo|animal|wildlife/i, "paw-print"],
    [/race|racing|drone|stunt|off-?road/i, "flag"],
    [/golf|tennis|basketball|gym|workout|sport/i, "trophy"],
  ],
  location: [
    [/beach|\bkeys?\b|island|marina|harbor|harbour|port|bay|coast|lento/i, "tree-palm"],
    [/mount|hill|kalaga|ridge|swamp|glades|forest|park|county/i, "mountain"],
    [/tower|downtown|city|plaza|hotel|mall|center|centre/i, "building-2"],
  ],
};
VARIANTS.gunstore = VARIANTS.weapon;
VARIANTS.range = [];

function pickIcon(kind, text) {
  const list = VARIANTS[kind];
  if (list && text) for (const [re, icon] of list) if (re.test(text)) return icon;
  return (THEMES[kind] || THEMES.location).icon;
}

// Sky palettes, top to horizon. Vice City: pink, sunset orange, teal, purple.
const PALETTES = [
  { sky: ["#12052a", "#4a0f5c", "#c2185b", "#ff6f3c"], sun: ["#ffe27a", "#ff2d95"], neon: "#ff4fb0", alt: "#2de2e6", water: "#1a0630" },
  { sky: ["#07101f", "#0f3b5c", "#1f8a8a", "#ff8fa3"], sun: ["#ffd29a", "#ff4f8b"], neon: "#3ff0e0", alt: "#ff2d95", water: "#061827" },
  { sky: ["#0d0221", "#2a0845", "#6a1b9a", "#ff2d95"], sun: ["#ffb36b", "#ff2d95"], neon: "#ff2d95", alt: "#b388ff", water: "#120326" },
  { sky: ["#1a0526", "#6b1450", "#ff4e50", "#ffb347"], sun: ["#fff1a8", "#ff7a45"], neon: "#ffb347", alt: "#ff2d95", water: "#22051f" },
  { sky: ["#030b17", "#08304a", "#6a2c91", "#ff5f9e"], sun: ["#ffc1e3", "#9b5cff"], neon: "#c084fc", alt: "#2de2e6", water: "#060f1f" },
  { sky: ["#0b0418", "#33105a", "#d1287f", "#ff9a5a"], sun: ["#ffe08a", "#ff3d7f"], neon: "#2de2e6", alt: "#ff4fb0", water: "#150628" },
];

function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function rng(seed) {
  let a = seed || 1;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const iconCache = new Map();
async function iconNode(name) {
  if (CUSTOM[name]) return CUSTOM[name];
  if (iconCache.has(name)) return iconCache.get(name);
  const file = path.join(ROOT, "node_modules", "lucide-react", "dist", "esm", "icons", `${name}.mjs`);
  const mod = await import(pathToFileURL(file).href);
  iconCache.set(name, mod.__iconNode);
  return mod.__iconNode;
}

function nodeToSvg(node) {
  return node
    .map(([tag, attrs]) => {
      const a = Object.entries(attrs)
        .filter(([k]) => k !== "key")
        .map(([k, v]) => `${k}="${v}"`)
        .join(" ");
      return `<${tag} ${a}/>`;
    })
    .join("");
}

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function monogram(title) {
  const words = title
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .split(/[\s-]+/)
    .filter((w) => w && !/^(the|of|and|a|an|de|la|el)$/i.test(w));
  const letters = (words.length >= 2 ? words[0][0] + words[1][0] : (words[0] || "GC").slice(0, 2)).toUpperCase();
  return letters;
}

function palm(x, baseY, height, lean, r) {
  const topX = x + lean * height * 0.35;
  const topY = baseY - height;
  const c1x = x + lean * height * 0.05;
  const c1y = baseY - height * 0.55;
  const trunk = `M${x - 9} ${baseY} Q${c1x - 5} ${c1y} ${topX - 3} ${topY} L${topX + 3} ${topY} Q${c1x + 6} ${c1y} ${x + 9} ${baseY} Z`;
  const leaves = [];
  const n = 8;
  for (let i = 0; i < n; i++) {
    const deg = -175 + (i * 170) / (n - 1) + (r() - 0.5) * 12;
    const ang = (deg * Math.PI) / 180;
    const len = height * (0.3 + r() * 0.1);
    const dir = Math.cos(ang);
    // Leaf rises a little then droops.
    const ex = topX + dir * len;
    const ey = topY + len * (0.35 + Math.abs(dir) * 0.25) + Math.sin(ang) * len * 0.25;
    const mx = topX + dir * len * 0.5;
    const my = topY + Math.sin(ang) * len * 0.45 - len * 0.12;
    const w = len * 0.11;
    leaves.push(`M${topX.toFixed(1)} ${topY.toFixed(1)} Q${mx.toFixed(1)} ${(my - w).toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)} Q${(mx + dir * w * 0.3).toFixed(1)} ${(my + w * 1.3).toFixed(1)} ${topX.toFixed(1)} ${(topY + 4).toFixed(1)} Z`);
  }
  return `<path d="${trunk}"/><path d="${leaves.join(" ")}"/><circle cx="${topX.toFixed(1)}" cy="${(topY + 3).toFixed(1)}" r="6"/>`;
}

export function artSvg({ kind, title, seedKey, pool = false, hint = "" }) {
  return (async () => {
    const theme = THEMES[kind] || THEMES.location;
    const r = rng(hash(seedKey));
    const pal = PALETTES[Math.floor(r() * PALETTES.length)];
    const horizon = Math.round(H * (0.6 + r() * 0.1));
    const sunR = 95 + r() * 70;
    const sunX = W * (0.18 + r() * 0.64);
    const sunY = horizon - sunR * (0.25 + r() * 0.35);
    const waterStyle = r() < 0.5 ? "grid" : "reflect";
    const night = r() < 0.5;

    const stars = night
      ? Array.from({ length: 40 }, () => {
          const x = r() * W;
          const y = r() * horizon * 0.55;
          return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(0.6 + r() * 1.3).toFixed(2)}" fill="#fff" opacity="${(0.25 + r() * 0.5).toFixed(2)}"/>`;
        }).join("")
      : "";

    // Sun stripes (retro horizon cut).
    let stripes = "";
    for (let i = 0; i < 6; i++) {
      const y = sunY + sunR * (0.05 + i * 0.16);
      const h = 2 + i * 2.2;
      stripes += `<rect x="0" y="${y.toFixed(1)}" width="${W}" height="${h.toFixed(1)}" fill="#000"/>`;
    }

    // Skyline: two layers.
    function skyline(color, opacity, minH, maxH, gapChance) {
      let x = -10;
      let rects = "";
      let windows = "";
      while (x < W + 10) {
        const w = 18 + r() * 46;
        if (r() < gapChance) {
          x += w * 0.6;
          continue;
        }
        const h = minH + Math.pow(r(), 1.6) * (maxH - minH);
        rects += `<rect x="${x.toFixed(1)}" y="${(horizon - h).toFixed(1)}" width="${w.toFixed(1)}" height="${(h + 2).toFixed(1)}"/>`;
        if (r() < 0.28) {
          const ax = x + w / 2;
          rects += `<rect x="${(ax - 1).toFixed(1)}" y="${(horizon - h - 18).toFixed(1)}" width="2" height="18"/>`;
        }
        if (opacity > 0.9 && h > 60) {
          for (let k = 0; k < 4; k++) {
            if (r() < 0.5) continue;
            windows += `<rect x="${(x + 4 + r() * (w - 10)).toFixed(1)}" y="${(horizon - h + 8 + r() * (h - 16)).toFixed(1)}" width="3" height="4" fill="${r() < 0.5 ? pal.neon : "#ffd9a0"}" opacity="0.55"/>`;
          }
        }
        x += w + r() * 6;
      }
      return `<g fill="${color}" opacity="${opacity}">${rects}</g>${windows}`;
    }

    const farCity = skyline("#2a0b3d", 0.55, 20, 110, 0.15);
    const nearCity = skyline("#0a0412", 1, 12, 75 + r() * 60, 0.35);

    // Water.
    let water = "";
    if (waterStyle === "grid") {
      const lines = [];
      for (let i = 1; i <= 9; i++) {
        const t = i / 9;
        const y = horizon + Math.pow(t, 1.8) * (H - horizon);
        lines.push(`<line x1="0" y1="${y.toFixed(1)}" x2="${W}" y2="${y.toFixed(1)}"/>`);
      }
      for (let i = -12; i <= 12; i++) {
        const xb = W / 2 + i * 120;
        lines.push(`<line x1="${(W / 2 + i * 14).toFixed(1)}" y1="${horizon}" x2="${xb.toFixed(1)}" y2="${H}"/>`);
      }
      water = `<g stroke="${pal.alt}" stroke-width="1.4" opacity="0.38">${lines.join("")}</g>`;
    } else {
      const lines = [];
      for (let i = 0; i < 14; i++) {
        const y = horizon + 6 + i * ((H - horizon) / 14);
        const w = sunR * (1.4 - i * 0.06) * (0.6 + r() * 0.5);
        lines.push(`<rect x="${(sunX - w / 2).toFixed(1)}" y="${y.toFixed(1)}" width="${w.toFixed(1)}" height="${(2 + i * 0.35).toFixed(1)}" rx="1.5"/>`);
      }
      water = `<g fill="${pal.sun[1]}" opacity="0.5">${lines.join("")}</g>`;
    }

    // Palms.
    const palmCount = Math.floor(r() * 3) + (r() < 0.8 ? 1 : 0);
    let palms = "";
    const leftSide = r() < 0.5;
    for (let i = 0; i < palmCount; i++) {
      const side = i % 2 === 0 ? leftSide : !leftSide;
      const x = side ? W * (0.01 + r() * 0.13) : W * (0.9 + r() * 0.09);
      const hgt = H * (0.5 + r() * 0.35);
      const lean = (side ? 1 : -1) * (0.15 + r() * 0.35);
      palms += palm(x, H + 10, hgt, lean, r);
    }

    // Item mark: neon icon, plus a monogram for named places/people/brands.
    const node = await iconNode(pool ? theme.icon : pickIcon(kind, `${title} ${hint}`));
    const mono = theme.mono && !pool ? monogram(title) : "";
    const iconSize = (mono ? 200 : 215) + r() * 40;
    const scale = iconSize / 24;
    const ix = W * (0.56 + r() * 0.07) - iconSize / 2;
    const iy = H * (0.27 + r() * 0.06) - iconSize / 2;
    const rot = (r() - 0.5) * 12;
    const neon = r() < 0.65 ? pal.neon : pal.alt;
    const iconSvg = nodeToSvg(node);
    const monoFont = ["Anton", "Bebas Neue", "Archivo Black", "Russo One"][Math.floor(r() * 4)];

    const markInner = mono
      ? `<text x="0" y="0" text-anchor="middle" dominant-baseline="central" font-family="${monoFont}" font-size="${mono.length > 1 ? 190 : 230}" font-weight="900" letter-spacing="4">${esc(mono)}</text>`
      : `<g transform="scale(${scale.toFixed(3)}) translate(-12 -12)" stroke-linecap="round" stroke-linejoin="round" fill="none">${iconSvg}</g>`;
    const markStrokeW = mono ? 6 : (1.5).toFixed(2);
    const cx = ix + iconSize / 2;
    const cy = iy + iconSize / 2;

    const mark = mono
      ? `<g transform="translate(${cx.toFixed(1)} ${cy.toFixed(1)}) rotate(${rot.toFixed(1)})">
           <g fill="none" stroke="${neon}" stroke-width="16" opacity="0.55" filter="url(#glow)">${markInner}</g>
           <g fill="${pal.water}" fill-opacity="0.3" stroke="${neon}" stroke-width="${markStrokeW}">${markInner}</g>
           <g fill="none" stroke="#fff" stroke-width="1.6" opacity="0.85">${markInner}</g>
         </g>`
      : `<g transform="translate(${cx.toFixed(1)} ${cy.toFixed(1)}) rotate(${rot.toFixed(1)})">
           <g stroke="${neon}" stroke-width="5" opacity="0.6" filter="url(#glow)">${markInner}</g>
           <g stroke="${neon}" stroke-width="${markStrokeW}">${markInner}</g>
           <g stroke="#fff" stroke-width="0.55" opacity="0.9">${markInner}</g>
         </g>`;

    // Halo disc behind the mark.
    const halo = `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${(iconSize * 0.78).toFixed(1)}" fill="url(#halo)"/>`;

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${pal.sky[0]}"/>
      <stop offset="0.35" stop-color="${pal.sky[1]}"/>
      <stop offset="0.75" stop-color="${pal.sky[2]}"/>
      <stop offset="1" stop-color="${pal.sky[3]}"/>
    </linearGradient>
    <linearGradient id="sun" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${pal.sun[0]}"/>
      <stop offset="1" stop-color="${pal.sun[1]}"/>
    </linearGradient>
    <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${pal.sky[2]}" stop-opacity="0.55"/>
      <stop offset="0.25" stop-color="${pal.water}"/>
      <stop offset="1" stop-color="#05020a"/>
    </linearGradient>
    <radialGradient id="halo" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="${neon}" stop-opacity="0.32"/>
      <stop offset="0.6" stop-color="${neon}" stop-opacity="0.08"/>
      <stop offset="1" stop-color="${neon}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vig" cx="0.5" cy="0.45" r="0.75">
      <stop offset="0.55" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.6"/>
    </radialGradient>
    <mask id="sunmask"><rect width="${W}" height="${H}" fill="#fff"/>${stripes}</mask>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="9"/></filter>
    <filter id="soft" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="30"/></filter>
    <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="${hash(seedKey) % 1000}"/><feColorMatrix type="saturate" values="0"/></filter>
    <clipPath id="above"><rect width="${W}" height="${horizon}"/></clipPath>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#sky)"/>
  ${stars}
  <circle cx="${sunX.toFixed(1)}" cy="${sunY.toFixed(1)}" r="${(sunR * 1.5).toFixed(1)}" fill="${pal.sun[1]}" opacity="0.35" filter="url(#soft)"/>
  <g clip-path="url(#above)"><circle cx="${sunX.toFixed(1)}" cy="${sunY.toFixed(1)}" r="${sunR.toFixed(1)}" fill="url(#sun)" mask="url(#sunmask)"/></g>
  ${farCity}
  <rect y="${horizon}" width="${W}" height="${H - horizon}" fill="url(#sea)"/>
  ${water}
  ${nearCity}
  <rect y="${horizon - 1}" width="${W}" height="2" fill="${pal.sun[0]}" opacity="0.45"/>
  <g fill="#05020a">${palms}</g>
  ${halo}
  ${mark}
  <rect width="${W}" height="${H}" fill="url(#vig)"/>
  <rect width="${W}" height="${H}" filter="url(#grain)" opacity="0.07"/>
</svg>`;
  })();
}

async function render(kind, slug, title, seedKey, pool = false, hint = "") {
  const file = path.join(OUT, kind, `${slug}.webp`);
  await mkdir(path.dirname(file), { recursive: true });
  const svg = await artSvg({ kind, title, seedKey, pool, hint });
  await sharp(Buffer.from(svg)).webp({ quality: 72, effort: 5 }).toFile(file);
  return file;
}

async function main() {
  const poolOnly = process.argv.includes("--pool");
  const only = process.argv.find((a) => a.startsWith("--only="))?.slice(7);
  let n = 0;
  const jobs = [];
  // Pools: used for any card that has no file of its own yet.
  for (const kind of Object.keys(THEMES)) {
    if (only && !only.split(",").includes(kind)) continue;
    for (let i = 1; i <= POOL; i++) {
      jobs.push(() => render(kind, `_pool-${i}`, kind, `${kind}/_pool-${i}`, true));
    }
  }
  const keys = [];
  if (!poolOnly && existsSync(ITEMS)) {
    const items = JSON.parse(await readFile(ITEMS, "utf8"));
    for (const { key: itemKey, kind, title, hint = "" } of items) {
      if (!THEMES[kind]) continue;
      if (only && !only.split(",").includes(kind)) continue;
      const slug = itemKey ? itemKey.split("/")[1] : artSlug(title);
      const key = `${kind}/${slug}`;
      if (keys.includes(key)) continue;
      jobs.push(() => render(kind, slug, title, key, false, hint));
      keys.push(key);
    }
  }
  let next = 0;
  async function worker() {
    while (next < jobs.length) {
      const job = jobs[next++];
      await job();
      n++;
    }
  }
  await Promise.all(Array.from({ length: 6 }, worker));
  if (!only) {
    keys.sort();
    await writeFile(MANIFEST, JSON.stringify({ kinds: Object.keys(THEMES), pool: POOL, items: keys }, null, 0) + "\n");
  }
  console.log(`[card-art] wrote ${n} images, ${keys.length} item keys`);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
