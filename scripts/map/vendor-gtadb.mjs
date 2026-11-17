/**
 * Copy GTA VI map tiles and landmarks out of a local gtadb.org checkout.
 *
 * Their readme asks people to `git pull` the data instead of hotlinking
 * gtadb.org. This script is the refresh step.
 *
 *   git clone --depth 1 https://github.com/rolux/gtadb.org.git /tmp/gtadb.org
 *   node scripts/map/vendor-gtadb.mjs /tmp/gtadb.org
 *
 * Zoom 0–4 of the default yanis,17 tileset is what the site ships (about 20 MB).
 * Pass --max-zoom 5 to also copy the 1 px/meter level (much larger). If that
 * set should live on a static host instead of git, upload the same folder
 * layout and set NEXT_PUBLIC_MAP_TILE_BASE plus NEXT_PUBLIC_MAP_TILE_MAX_NATIVE_ZOOM.
 *
 * Tiles and landmarks are CC BY 4.0. Credit "gtadb.org and all contributors".
 * Code in that repo is MIT. This script only copies data, not their server.
 */
import { copyFile, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { deflateSync } from "node:zlib";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const args = process.argv.slice(2).filter((arg) => !arg.startsWith("--"));
const maxZoomFlag = process.argv.find((arg) => arg.startsWith("--max-zoom"));
const maxZoom = maxZoomFlag
  ? Number(maxZoomFlag.split("=")[1] ?? process.argv[process.argv.indexOf(maxZoomFlag) + 1])
  : 4;
const source = args[0];

if (!source || Number.isNaN(maxZoom)) {
  console.error("Usage: node scripts/map/vendor-gtadb.mjs <gtadb-checkout> [--max-zoom 4]");
  process.exit(1);
}

const tileset = "yanis,17";
const tileSource = path.join(source, "maps", "tiles", "6", tileset);
const tileDest = path.join(root, "public", "maps", "tiles", "6", tileset);
const landmarkSource = path.join(source, "map", "data", "6", "landmarks.json");

function chunk(tag, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([tag, data])) >>> 0);
  return Buffer.concat([length, tag, data, crc]);
}

const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) crc = CRC_TABLE[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function solidPng(width, height, rgb) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 2;
  const row = Buffer.alloc(1 + width * 3);
  for (let x = 0; x < width; x += 1) {
    row[1 + x * 3] = rgb[0];
    row[2 + x * 3] = rgb[1];
    row[3 + x * 3] = rgb[2];
  }
  const raw = Buffer.concat(Array.from({ length: height }, () => row));
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk(Buffer.from("IHDR"), ihdr),
    chunk(Buffer.from("IDAT"), deflateSync(raw)),
    chunk(Buffer.from("IEND"), Buffer.alloc(0)),
  ]);
}

function cleanTags(tags) {
  const kept = [];
  for (const tag of tags ?? []) {
    if (typeof tag !== "string") continue;
    if (tag.startsWith("//") || tag.startsWith("@")) continue;
    if (/^l\d+$/.test(tag)) continue;
    const name = tag.startsWith("#") ? tag.slice(1) : tag;
    if (name && !kept.includes(name)) kept.push(name);
  }
  return kept;
}

let copied = 0;
for (let zoom = 0; zoom <= maxZoom; zoom += 1) {
  const from = path.join(tileSource, String(zoom));
  const to = path.join(tileDest, String(zoom));
  await mkdir(to, { recursive: true });
  const files = (await readdir(from)).filter((name) => name.endsWith(".jpg"));
  for (const name of files) {
    await copyFile(path.join(from, name), path.join(to, name));
    copied += 1;
  }
}

const raw = JSON.parse(await readFile(landmarkSource, "utf8"));
const landmarks = [];
for (const [id, row] of Object.entries(raw)) {
  const coords = row[1];
  if (!Array.isArray(coords) || coords.length < 2) continue;
  const x = Number(coords[0]);
  const y = Number(coords[1]);
  if (!Number.isFinite(x) || !Number.isFinite(y)) continue;
  landmarks.push({
    id,
    name: typeof row[0] === "string" ? row[0] : "",
    x: Math.round(x * 100) / 100,
    y: Math.round(y * 100) / 100,
    tags: cleanTags(row[6]),
  });
}

await mkdir(path.join(root, "public", "maps"), { recursive: true });
await writeFile(
  path.join(root, "public", "maps", "landmarks.json"),
  JSON.stringify(landmarks)
);
await writeFile(
  path.join(root, "public", "maps", "manifest.json"),
  JSON.stringify(
    {
      tileset,
      game: 6,
      minZoom: 0,
      maxNativeZoom: maxZoom,
      tileSize: 256,
      worldMeters: 32768,
      origin: "center",
      template: `/maps/tiles/6/${tileset}/{z}/{z},{y},{x}.jpg`,
      attribution: "gtadb.org and all contributors",
      license: "https://creativecommons.org/licenses/by/4.0/",
    },
    null,
    2
  )
);
await writeFile(path.join(root, "public", "maps", "empty-tile.png"), solidPng(256, 256, [20, 78, 130]));
await writeFile(
  path.join(root, "public", "maps", "CREDITS.txt"),
  [
    "gtadb.org and all contributors",
    "https://gtadb.org",
    "",
    "Map tiles (maps/tiles/6/yanis,17, zoom 0 through " + maxZoom + ") and landmark",
    "data are used under CC BY 4.0.",
    "https://creativecommons.org/licenses/by/4.0/",
    "",
    "Changes: tiles were copied without image edits. Landmark records were",
    "reduced to id, in-game name, game coordinates, and public tags. Real-world",
    "addresses, photo files, and edit history were not included.",
    "",
    "Source checkout: https://github.com/rolux/gtadb.org",
    "Preferred credit line: gtadb.org and all contributors",
    "",
  ].join("\n")
);

console.log(`Copied ${copied} tiles at zoom 0-${maxZoom} and ${landmarks.length} landmarks.`);
