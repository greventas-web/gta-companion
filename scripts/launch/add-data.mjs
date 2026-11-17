#!/usr/bin/env node
// Add facts confirmed from our own GTA 6 gameplay.
// Writes only src/data/gameplay/ingame.json. The site merges it into the map,
// vehicles, and weapons with the source label
// "Confirmed in-game (GTA Companion gameplay)". See ADD-DATA.md.
//
//   npm run data:add -- pin --title "Ammu-Nation" --category stores --x 812 --y -2210 [--entity weapon --slug pump-shotgun] [--desc "..."] [--role "where to buy"] [--clip URL]
//   npm run data:add -- vehicle --slug vapid-dominator [--name ... --manufacturer ... --category Muscle] [--desc ...] [--top-speed "..."] [--price "..."] [--seats 2] [--clip URL]
//   npm run data:add -- weapon --slug pump-shotgun [--name ... --manufacturer ... --category Shotgun] [--desc ...] [--ammo "..."] [--clip URL]
//   npm run data:add -- list
// Add --dry-run to print the change without writing.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const FILE = path.join(ROOT, "src/data/gameplay/ingame.json");
const HALF = 16384;
const MAP_CATEGORIES = ["locations", "businesses", "stores", "weapons", "activities", "vehicles", "collectibles", "missions", "safehouses", "properties", "animals", "characters"];
// Entity types that have database pages (slug must exist).
const REGISTRY_FILES = {
  location: ["data/locations.ts"],
  business: ["data/businesses.ts", "src/data/businesses/index.ts"],
  weapon: ["data/weapons.ts"],
  activity: ["data/activities.ts", "src/data/activities/index.ts"],
  vehicle: ["data/vehicles"],
  animal: ["data/animals.ts", "src/data/animals/index.ts"],
  character: ["data/characters.ts", "src/data/characters/index.ts"],
};
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function parseArgs(argv) {
  const [command, ...rest] = argv;
  const opts = {};
  for (let i = 0; i < rest.length; i++) {
    const key = rest[i];
    if (!key.startsWith("--")) fail(`Unexpected argument: ${key}`);
    const name = key.slice(2);
    if (name === "dry-run") { opts.dryRun = true; continue; }
    const value = rest[i + 1];
    if (value === undefined || value.startsWith("--")) fail(`--${name} needs a value`);
    opts[name] = value;
    i++;
  }
  return { command, opts };
}

function fail(message) {
  console.error(`add-data: ${message}`);
  process.exit(1);
}

function checkCopy(...texts) {
  for (const text of texts) {
    if (text && /\bfree\b/i.test(text)) fail(`Copy must not use the word "free": "${text}"`);
  }
}

function checkUrl(url) {
  if (!url) return;
  if (!/^https:\/\//.test(url)) fail(`--clip must be an https URL (got ${url})`);
  if (/reddit\.com/i.test(url)) fail("Reddit links are not used as sources.");
}

function readSources(rel) {
  const full = path.join(ROOT, rel);
  try {
    if (!rel.endsWith(".ts")) {
      return readdirTs(full).map((f) => readFileSync(f, "utf8")).join("\n");
    }
    return readFileSync(full, "utf8");
  } catch {
    return "";
  }
}

function readdirTs(dir) {
  return readdirSyncSafe(dir).filter((f) => f.endsWith(".ts")).map((f) => path.join(dir, f));
}

function readdirSyncSafe(dir) {
  try { return readdirSync(dir); } catch { return []; }
}

function slugExists(entityType, slug) {
  const files = REGISTRY_FILES[entityType];
  if (!files) return null; // no database pages for this type
  const text = files.map(readSources).join("\n");
  return text.includes(`slug: "${slug}"`);
}

function load() {
  return JSON.parse(readFileSync(FILE, "utf8"));
}

function save(data, dryRun, summary) {
  const body = JSON.stringify(data, null, 2) + "\n";
  if (dryRun) {
    console.log("[dry run] would write src/data/gameplay/ingame.json:");
    console.log(summary);
    return;
  }
  writeFileSync(FILE, body);
  console.log(summary);
  console.log("Next: npm run build, check the page, then commit on a branch (not main).");
}

function today() {
  return new Date().toISOString();
}

function num(value, name) {
  const n = Number(value);
  if (!Number.isFinite(n)) fail(`--${name} must be a number`);
  return n;
}

function upsert(list, entry) {
  const index = list.findIndex((item) => item.slug === entry.slug);
  if (index === -1) {
    list.push(entry);
    return "added";
  }
  const merged = { ...list[index], ...entry, fields: { ...(list[index].fields ?? {}), ...(entry.fields ?? {}) } };
  list[index] = merged;
  return "updated";
}

function clean(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== undefined && !(typeof v === "object" && v && Object.keys(v).length === 0)));
}

function addPin(opts, data) {
  const { title, category } = opts;
  if (!title) fail("pin needs --title");
  if (!MAP_CATEGORIES.includes(category)) fail(`--category must be one of: ${MAP_CATEGORIES.join(", ")}`);
  const x = num(opts.x, "x");
  const y = num(opts.y, "y");
  if (Math.abs(x) > HALF || Math.abs(y) > HALF) fail(`x and y are gtadb meters between -${HALF} and ${HALF}`);
  checkCopy(title, opts.desc, opts.role);
  checkUrl(opts.clip);
  const entityType = opts.entity;
  if (opts.slug) {
    if (!entityType) fail("--slug needs --entity (vehicle, weapon, location, business, activity, animal, character)");
    if (!SLUG.test(opts.slug)) fail("--slug must be lowercase-with-dashes");
    const exists = slugExists(entityType, opts.slug);
    const ingameNew = (data.vehicles ?? []).concat(data.weapons ?? []).some((e) => e.slug === opts.slug);
    if (exists === null) fail(`${entityType} has no database pages; leave --slug out.`);
    if (!exists && !ingameNew) fail(`No ${entityType} with slug "${opts.slug}". Add it first with the vehicle/weapon command.`);
  }
  const id = opts.id ?? `${category}-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
  if (data.pins.some((p) => p.id === id)) fail(`A pin with id "${id}" already exists. Pass --id to add a second one.`);
  const near = data.pins.find((p) => p.category === category && Math.hypot(p.x - x, p.y - y) < 25);
  if (near) console.warn(`Warning: "${near.title}" is ${Math.round(Math.hypot(near.x - x, near.y - y))} m away in the same category.`);
  const pin = clean({ id, title, category, entityType, entitySlug: opts.slug, description: opts.desc, role: opts.role, x, y, clip: opts.clip, confirmedAt: today() });
  data.pins.push(pin);
  return `Pin added: ${title} (${category}) at x=${x}, y=${y}. Map link: /map?pin=ingame:${id}`;
}

function addEntry(kind, opts, data) {
  const slug = opts.slug;
  if (!slug || !SLUG.test(slug)) fail(`${kind} needs --slug in lowercase-with-dashes`);
  checkCopy(opts.name, opts.desc);
  checkUrl(opts.clip);
  const entityType = kind === "vehicle" ? "vehicle" : "weapon";
  const exists = slugExists(entityType, slug);
  if (!exists && !(opts.name && opts.category)) {
    fail(`"${slug}" is new, so pass --name and --category (and --manufacturer if shown in game).`);
  }
  const fields = kind === "vehicle"
    ? clean({ topSpeed: opts["top-speed"], price: opts.price, seats: opts.seats ? num(opts.seats, "seats") : undefined, drivetrain: opts.drivetrain, class: opts.class })
    : clean({ ammunition: opts.ammo });
  const entry = clean({ slug, name: opts.name, manufacturer: opts.manufacturer, category: opts.category, description: opts.desc, image: opts.image, imageAlt: opts["image-alt"], fields, clip: opts.clip, confirmedAt: today() });
  const list = kind === "vehicle" ? data.vehicles : data.weapons;
  const result = upsert(list, entry);
  const page = kind === "vehicle" ? `/vehicles/${slug}` : `/weapons/${slug}`;
  return `${kind} ${result}: ${slug}${exists ? " (existing page)" : " (new page)"}. Page: ${page}`;
}

const { command, opts } = parseArgs(process.argv.slice(2));
const data = load();
data.vehicles ??= [];
data.weapons ??= [];
data.pins ??= [];

switch (command) {
  case "pin":
    save(data, opts.dryRun, addPin(opts, data));
    break;
  case "vehicle":
  case "weapon":
    save(data, opts.dryRun, addEntry(command, opts, data));
    break;
  case "list":
    console.log(`pins: ${data.pins.length}, vehicles: ${data.vehicles.length}, weapons: ${data.weapons.length}`);
    for (const p of data.pins) console.log(`  pin ${p.id} ${p.category} (${p.x}, ${p.y})`);
    for (const v of data.vehicles) console.log(`  vehicle ${v.slug}`);
    for (const w of data.weapons) console.log(`  weapon ${w.slug}`);
    break;
  default:
    fail("command must be pin, vehicle, weapon, or list");
}
