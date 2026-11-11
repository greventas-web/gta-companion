/**
 * Full-site visual QA.
 *
 *   npm run build && npm start
 *   node scripts/qa/site-qa.mjs
 *
 * Writes screenshots and a JSON report to qa-output/.
 * Set BASE_URL to point at another server. Set QA_WIDTHS=390 to run one width.
 */
import { chromium } from "playwright";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const base = process.env.BASE_URL || "http://127.0.0.1:3000";
const widths = (process.env.QA_WIDTHS || "390,768,1440")
  .split(",")
  .map((value) => Number(value.trim()))
  .filter(Boolean);
const outDir = path.join(root, "qa-output");

const sectionRoutes = [
  ["data/vehicles", "/vehicles"],
  ["data/characters.ts", "/characters"],
  ["data/locations.ts", "/locations"],
  ["data/activities.ts", "/activities"],
  ["data/animals.ts", "/animals"],
  ["data/brands.ts", "/brands"],
  ["data/businesses.ts", "/businesses"],
  ["data/weapons.ts", "/weapons"],
  ["data/news.ts", "/news"],
  ["data/guides.ts", "/guides"],
  ["data/manufacturers.ts", "/manufacturers"],
  ["src/data/launch/cheats.ts", "/cheats"],
  ["src/data/launch/fastest-cars.ts", "/fastest-cars"],
  ["src/data/launch/map-locations.ts", "/map-locations"],
  ["src/data/launch/money-methods.ts", "/money-methods"],
];

async function slugsIn(file) {
  const text = await readFile(file, "utf8");
  return [...text.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);
}

async function walk(dir, files = []) {
  let entries = [];
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return files;
  }
  for (const entry of entries) {
    const next = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(next, files);
    else if (entry.name.endsWith(".ts")) files.push(next);
  }
  return files;
}

async function routes() {
  const found = new Set(["/"]);
  const appDir = path.join(root, "app");
  const pages = await walk(appDir);
  for (const file of pages) {
    if (!file.endsWith(`${path.sep}page.tsx`)) continue;
    if (file.includes("[") || file.includes(`${path.sep}api${path.sep}`)) continue;
    const rel = path.relative(appDir, path.dirname(file));
    found.add(rel === "" ? "/" : `/${rel.split(path.sep).join("/")}`);
  }

  for (const [source, prefix] of sectionRoutes) {
    const target = path.join(root, source);
    const files = (await readdir(target).catch(() => null))
      ? await walk(target)
      : [target];
    for (const file of files) {
      if (!file.endsWith(".ts")) continue;
      for (const slug of await slugsIn(file)) {
        found.add(`${prefix}/${slug}`);
      }
    }
  }
  return [...found].sort();
}

function imagePath(url) {
  try {
    const parsed = new URL(url, base);
    if (parsed.pathname === "/_next/image") {
      return decodeURIComponent(parsed.searchParams.get("url") || "");
    }
    return parsed.pathname;
  } catch {
    return url;
  }
}

async function main() {
  await mkdir(outDir, { recursive: true });
  const list = await routes();
  const browser = await chromium.launch();
  const report = {
    base,
    widths,
    routes: list.length,
    pages: [],
    duplicateImagesOnPage: [],
    brokenImages: [],
    overflow: [],
    clippedText: [],
    consoleErrors: [],
    badLinks: [],
    sharedAcrossItems: [],
  };
  const imageOwners = new Map();

  for (const width of widths) {
    const context = await browser.newContext({
      viewport: { width, height: 900 },
    });
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", (error) => errors.push(String(error)));
    page.on("console", (message) => {
      if (message.type() !== "error") return;
      const text = message.text();
      if (text.includes("/_vercel/")) return;
      errors.push(text);
    });

    for (const route of list) {
      errors.length = 0;
      const response = await page.goto(`${base}${route}`, {
        waitUntil: "networkidle",
        timeout: 45000,
      }).catch((error) => {
        report.brokenImages.push({ route, width, error: String(error) });
        return null;
      });
      if (!response) continue;
      if (response.status() >= 400) {
        report.badLinks.push({ route, status: response.status(), width });
      }

      await page.evaluate(async () => {
        const height = document.body.scrollHeight;
        for (let y = 0; y < height; y += 700) {
          window.scrollTo(0, y);
          await new Promise((resolve) => setTimeout(resolve, 40));
        }
        window.scrollTo(0, 0);
      });

      const facts = await page.evaluate(() => {
        const images = [...document.images].map((img) => ({
          src: img.currentSrc || img.src,
          alt: img.alt,
          width: img.naturalWidth,
          height: img.naturalHeight,
        }));
        const doc = document.documentElement;
        const overflow = doc.scrollWidth > doc.clientWidth + 1;
        const clipped = [];
        for (const el of document.querySelectorAll("h1, h2, h3, p, a, span")) {
          const box = el.getBoundingClientRect();
          const text = (el.textContent || "").trim();
          if (!text || box.width < 8 || box.height < 8) continue;
          if (box.left < -4 || box.right > window.innerWidth + 4) {
            clipped.push(text.slice(0, 80));
          }
        }
        const links = [...document.querySelectorAll("a[href^='/']")].map(
          (anchor) => anchor.getAttribute("href")
        );
        return {
          images,
          overflow,
          scrollWidth: doc.scrollWidth,
          clientWidth: doc.clientWidth,
          clipped: [...new Set(clipped)].slice(0, 12),
          links,
        };
      });

      const file = `${route === "/" ? "home" : route.slice(1).replaceAll("/", "__")}__${width}.png`;
      await page.screenshot({
        path: path.join(outDir, file),
        fullPage: false,
      });

      const counts = new Map();
      for (const image of facts.images) {
        const src = imagePath(image.src);
        if (!src || src.includes("/logo/") || src.includes("/icons/")) continue;
        counts.set(src, (counts.get(src) || 0) + 1);
        if (image.width === 0 && !src.startsWith("http") && !src.includes("/_vercel/")) {
          report.brokenImages.push({ route, width, src, alt: image.alt });
        }
        if (!image.alt) {
          report.brokenImages.push({ route, width, src, alt: "", issue: "missing alt" });
        }
        if (width === widths[0] && route.split("/").length > 2) {
          const owners = imageOwners.get(src) || [];
          owners.push(route);
          imageOwners.set(src, owners);
        }
      }
      for (const [src, count] of counts) {
        if (count > 1) report.duplicateImagesOnPage.push({ route, width, src, count });
      }
      if (facts.overflow) {
        report.overflow.push({
          route,
          width,
          scrollWidth: facts.scrollWidth,
          clientWidth: facts.clientWidth,
        });
      }
      if (facts.clipped.length) {
        report.clippedText.push({ route, width, samples: facts.clipped });
      }
      if (errors.length) {
        report.consoleErrors.push({ route, width, errors: [...new Set(errors)].slice(0, 8) });
      }
      if (width === widths[0]) {
        report.pages.push({ route, status: response.status(), links: facts.links.length });
      }
    }
    await context.close();
  }

  for (const [src, owners] of imageOwners) {
    const unique = [...new Set(owners)];
    if (unique.length > 1) report.sharedAcrossItems.push({ src, routes: unique });
  }

  const summary = {
    routes: report.routes,
    duplicateImagesOnPage: report.duplicateImagesOnPage.length,
    brokenImages: report.brokenImages.length,
    overflow: report.overflow.length,
    clippedText: report.clippedText.length,
    consoleErrors: report.consoleErrors.length,
    badLinks: report.badLinks.length,
    sharedAcrossItems: report.sharedAcrossItems.length,
  };
  await writeFile(path.join(outDir, "report.json"), JSON.stringify({ summary, ...report }, null, 2));
  console.log(JSON.stringify(summary, null, 2));
  await browser.close();
  if (Object.entries(summary).some(([key, value]) => key !== "routes" && value > 0)) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
