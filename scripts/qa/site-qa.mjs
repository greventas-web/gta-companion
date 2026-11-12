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
import { createHash } from "node:crypto";
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

const sizeToken =
  /(?:^|-)(?:ultrawide|landscape|portrait|square|tablet|phone|mobile|desktop)(?:-[ab])?(?=-|$)/g;

function artworkStem(src) {
  const file = src.split("/").pop()?.replace(/\.[a-z0-9]+$/i, "") ?? src;
  return file.replace(sizeToken, "").replace(/-+/g, "-").replace(/^-|-$/g, "");
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

function ignoredImage(src) {
  return !src || src.includes("/logo/") || src.includes("/icons/") || src.includes("/favicon");
}

async function fileHashes() {
  const hashes = new Map();
  async function walkFiles(dir) {
    let entries = [];
    try {
      entries = await readdir(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      const next = path.join(dir, entry.name);
      if (entry.isDirectory()) await walkFiles(next);
      else if (/\.(webp|png|jpe?g|gif|svg|avif)$/i.test(entry.name)) {
        const bytes = await readFile(next);
        const rel = `/${path.relative(path.join(root, "public"), next).split(path.sep).join("/")}`;
        hashes.set(rel, createHash("md5").update(bytes).digest("hex"));
      }
    }
  }
  await walkFiles(path.join(root, "public"));
  return hashes;
}

async function main() {
  await mkdir(outDir, { recursive: true });
  const list = await routes();
  const galleryText = await readFile(path.join(root, "src/data/media/gallery.ts"), "utf8").catch(() => "");
  const artworkSources = [...galleryText.matchAll(/src: "([^"]*artwork-[^"]+)"/g)].map((match) => match[1]);
  const catalogGroups = new Map();
  for (const src of artworkSources) {
    const stem = artworkStem(src);
    const list = catalogGroups.get(stem) || [];
    list.push(src);
    catalogGroups.set(stem, list);
  }
  const catalogDupes = [...catalogGroups.entries()].filter(([, sources]) => sources.length > 1);
  const hashes = await fileHashes();

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
    emptySections: [],
    consoleErrors: [],
    badLinks: [],
    sharedAcrossItems: [],
    artworkVariantDuplicates: catalogDupes.map(([stem, sources]) => ({
      route: "src/data/media/gallery.ts",
      stem,
      sources,
    })),
  };
  const imageOwners = new Map();
  const idsByRoute = new Map();
  const linksByRoute = new Map();

  for (const width of widths) {
    const context = await browser.newContext({
      viewport: { width, height: 900 },
    });
    const page = await context.newPage();
    const errors = [];
    const failedImages = [];
    page.on("pageerror", (error) => errors.push(String(error)));
    page.on("console", (message) => {
      if (message.type() !== "error") return;
      const text = message.text();
      if (text.includes("/_vercel/")) return;
      if (text.includes("favicon")) return;
      errors.push(text);
    });
    page.on("response", (response) => {
      const request = response.request();
      if (request.resourceType() !== "image") return;
      if (response.status() >= 400) failedImages.push(response.url());
    });

    for (const route of list) {
      if (list.indexOf(route) % 40 === 0) {
        console.log(`width ${width} ${list.indexOf(route)}/${list.length} ${route}`);
      }
      errors.length = 0;
      failedImages.length = 0;
      const response = await page.goto(`${base}${route}`, {
        waitUntil: "domcontentloaded",
        timeout: 30000,
      }).catch((error) => {
        report.badLinks.push({ route, width, error: String(error) });
        return null;
      });
      if (!response) continue;
      if (response.status() >= 400) {
        report.badLinks.push({ route, status: response.status(), width });
      }

      await page.evaluate(async () => {
        const height = document.body.scrollHeight;
        for (let y = 0; y < height; y += 900) {
          window.scrollTo(0, y);
          await new Promise((resolve) => setTimeout(resolve, 5));
        }
        window.scrollTo(0, 0);
        const pending = [...document.images].filter((img) => !img.complete);
        await Promise.race([
          Promise.all(
            pending.map(
              (img) =>
                new Promise((resolve) => {
                  img.addEventListener("load", resolve, { once: true });
                  img.addEventListener("error", resolve, { once: true });
                })
            )
          ),
          new Promise((resolve) => setTimeout(resolve, 600)),
        ]);
      });

      const facts = await page.evaluate(() => {
        const images = [...document.images].map((img) => ({
          src: img.currentSrc || img.src || "",
          attr: img.getAttribute("src") || "",
          alt: img.alt,
          width: img.naturalWidth,
          height: img.naturalHeight,
          complete: img.complete,
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
        for (const title of document.querySelectorAll("[data-wordmark-title]")) {
          const frame = title.closest("[data-wordmark]");
          const text = (title.textContent || "").trim();
          if (!frame || !text) {
            clipped.push(text || "blank wordmark");
            continue;
          }
          const box = title.getBoundingClientRect();
          const bounds = frame.getBoundingClientRect();
          if (
            box.width < 8 ||
            box.height < 8 ||
            box.top < bounds.top - 1 ||
            box.bottom > bounds.bottom + 1 ||
            box.left < bounds.left - 1 ||
            box.right > bounds.right + 1
          ) {
            clipped.push(text.slice(0, 80));
          }
        }
        const emptySections = [];
        for (const heading of document.querySelectorAll("h2")) {
          const level = Number(heading.tagName[1]);
          let node = heading.nextElementSibling;
          let text = "";
          let media = 0;
          while (node) {
            if (/^H[1-6]$/.test(node.tagName) && Number(node.tagName[1]) <= level) break;
            text += ` ${node.innerText || ""}`;
            media += node.querySelectorAll("img, [data-wordmark], a, input, iframe, video, button").length;
            node = node.nextElementSibling;
          }
          if (text.replace(/\s+/g, " ").trim().length < 8 && media === 0) {
            emptySections.push((heading.textContent || "").trim().slice(0, 80));
          }
        }
        const links = [...document.querySelectorAll("a[href]")].map(
          (anchor) => anchor.getAttribute("href")
        );
        return {
          images,
          overflow,
          scrollWidth: doc.scrollWidth,
          clientWidth: doc.clientWidth,
          clipped: [...new Set(clipped)].slice(0, 12),
          emptySections: [...new Set(emptySections)].slice(0, 12),
          links,
          ids: [...document.querySelectorAll("[id]")].map((el) => el.id),
        };
      });

      if (process.env.QA_SHOTS === "1") {
        const file = `${route === "/" ? "home" : route.slice(1).replaceAll("/", "__")}__${width}.png`;
        await page.screenshot({
          path: path.join(outDir, file),
          fullPage: false,
        });
      }

      for (const src of failedImages) {
        const pathName = imagePath(src);
        if (ignoredImage(pathName)) continue;
        report.brokenImages.push({ route, width, src: pathName, issue: "http error" });
      }
      const counts = new Map();
      const stems = new Map();
      const hashGroups = new Map();
      for (const image of facts.images) {
        const src = imagePath(image.src || image.attr);
        if (ignoredImage(src)) continue;
        if (!image.attr) {
          report.brokenImages.push({ route, width, src, issue: "empty src" });
          continue;
        }
        counts.set(src, (counts.get(src) || 0) + 1);
        const stem = artworkStem(src);
        const group = stems.get(stem) || new Set();
        group.add(src);
        stems.set(stem, group);
        const hash = hashes.get(src);
        if (hash) {
          const owners = hashGroups.get(hash) || new Set();
          owners.add(src);
          hashGroups.set(hash, owners);
        }
        if (
          image.complete &&
          (image.width === 0 || image.height === 0) &&
          !src.startsWith("http") &&
          !src.includes("/_vercel/")
        ) {
          report.brokenImages.push({ route, width, src, alt: image.alt, issue: "zero size" });
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
      for (const sources of hashGroups.values()) {
        if (sources.size > 1) {
          report.duplicateImagesOnPage.push({
            route,
            width,
            src: [...sources].join(" = "),
            count: sources.size,
            issue: "same file bytes",
          });
        }
      }
      for (const [stem, sources] of stems) {
        if (sources.size > 1) {
          report.artworkVariantDuplicates.push({
            route,
            width,
            stem,
            sources: [...sources],
          });
        }
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
      if (facts.emptySections.length) {
        report.emptySections.push({ route, width, headings: facts.emptySections });
      }
      if (errors.length) {
        report.consoleErrors.push({ route, width, errors: [...new Set(errors)].slice(0, 8) });
      }
      if (width === widths[0]) {
        report.pages.push({ route, status: response.status(), links: facts.links.length });
        idsByRoute.set(route, new Set(facts.ids));
        linksByRoute.set(route, facts.links);
      }
    }
    await context.close();
  }

  for (const [src, owners] of imageOwners) {
    const unique = [...new Set(owners)];
    if (unique.length > 1) report.sharedAcrossItems.push({ src, routes: unique });
  }

  const checked = new Map(report.pages.map((page) => [page.route, page.status]));
  const context = await browser.newContext();
  const probe = await context.newPage();
  for (const [route, links] of linksByRoute) {
    for (const href of links) {
      if (!href || href.startsWith("mailto:") || href.startsWith("javascript:")) continue;
      let url;
      try {
        url = new URL(href, `${base}${route}`);
      } catch {
        report.badLinks.push({ route, href, issue: "unparseable" });
        continue;
      }
      if (url.origin !== new URL(base).origin) continue;
      const target = url.pathname || "/";
      if (url.hash) {
        const id = decodeURIComponent(url.hash.slice(1));
        const known = idsByRoute.get(target);
        if (known && id && !known.has(id)) {
          report.badLinks.push({ route, href, issue: "missing hash" });
        }
      }
      if (checked.has(target)) {
        const status = checked.get(target);
        if (status >= 400) report.badLinks.push({ route, href: target, status });
        continue;
      }
      const result = await probe.goto(`${base}${target}`, {
        waitUntil: "domcontentloaded",
        timeout: 20000,
      }).catch((error) => {
        checked.set(target, 599);
        report.badLinks.push({ route, href: target, error: String(error) });
        return null;
      });
      if (!result) continue;
      checked.set(target, result.status());
      if (result.status() >= 400) {
        report.badLinks.push({ route, href: target, status: result.status() });
      }
    }
  }
  await context.close();

  const summary = {
    routes: report.routes,
    duplicateImagesOnPage: report.duplicateImagesOnPage.length,
    artworkVariantDuplicates: report.artworkVariantDuplicates.length,
    brokenImages: report.brokenImages.length,
    overflow: report.overflow.length,
    clippedText: report.clippedText.length,
    emptySections: report.emptySections.length,
    badLinks: report.badLinks.length,
    consoleErrors: report.consoleErrors.length,
  };
  await writeFile(path.join(outDir, "report.json"), JSON.stringify({ summary, ...report }, null, 2));
  console.log(JSON.stringify(summary, null, 2));
  await browser.close();
  if (Object.values(summary).some((value, index) => index > 0 && value > 0)) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
