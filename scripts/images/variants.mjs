// Pre-sizes site images at build time so next/image never calls Vercel Image
// Optimization (Hobby includes 5,000 transformations a cycle).
//
// For every .webp/.jpg/.png under public/images and public/logo that is wider
// than a target width, writes public/_v/<width>/<same path>.webp and records it
// in lib/images/variants.json. The loader (lib/images/loader.ts) only rewrites
// to a variant listed in that manifest, so if this script fails the site still
// serves the original files.
import { mkdir, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const PUBLIC = path.join(ROOT, "public");
const OUT = path.join(PUBLIC, "_v");
const MANIFEST = path.join(ROOT, "lib", "images", "variants.json");
const WIDTHS = [640, 1080];
const DIRS = ["images", "logo"];
const EXT = /\.(webp|jpe?g|png)$/i;

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (EXT.test(entry.name)) out.push(full);
  }
  return out;
}

async function main() {
  let sharp;
  try {
    sharp = (await import("sharp")).default;
  } catch {
    console.warn("[image-variants] sharp not available; serving originals.");
    await writeFile(MANIFEST, "{}\n");
    return;
  }

  const manifest = {};
  let written = 0;
  for (const dir of DIRS) {
    const base = path.join(PUBLIC, dir);
    try {
      await stat(base);
    } catch {
      continue;
    }
    for (const file of await walk(base)) {
      const rel = "/" + path.relative(PUBLIC, file).split(path.sep).join("/");
      const meta = await sharp(file).metadata();
      const widths = WIDTHS.filter((w) => meta.width && meta.width > w);
      if (widths.length === 0) continue;
      for (const w of widths) {
        const target = path.join(OUT, String(w), rel.slice(1)).replace(EXT, ".webp");
        await mkdir(path.dirname(target), { recursive: true });
        await sharp(file).resize({ width: w }).webp({ quality: 74 }).toFile(target);
        written++;
      }
      manifest[rel] = widths;
    }
  }
  await writeFile(MANIFEST, JSON.stringify(manifest) + "\n");
  console.log(`[image-variants] ${Object.keys(manifest).length} images, ${written} variants.`);
}

main().catch(async (error) => {
  console.warn("[image-variants] failed; serving originals.", error?.message ?? error);
  await writeFile(MANIFEST, "{}\n");
});
