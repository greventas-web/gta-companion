#!/usr/bin/env node
/**
 * Ping IndexNow (Bing, Yandex, and other IndexNow engines) with changed URLs.
 *
 * The key file lives at public/<key>.txt and is public by design: IndexNow
 * checks https://www.gta-companion.com/<key>.txt to verify ownership.
 *
 * Usage:
 *   node scripts/indexnow-ping.mjs https://www.gta-companion.com/cheats /weapons ...
 *   node scripts/indexnow-ping.mjs --file urls.txt        (one URL or path per line)
 *   node scripts/indexnow-ping.mjs --sitemap              (every URL in the live sitemap)
 *   add --dry-run to print the request without sending it
 *
 * Key lookup order: INDEXNOW_KEY env var, then the single 32-hex public/<key>.txt file.
 */
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HOST = "www.gta-companion.com";
const ORIGIN = `https://${HOST}`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const MAX_URLS = 10000;

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function findKey() {
  if (process.env.INDEXNOW_KEY) return process.env.INDEXNOW_KEY.trim();
  const files = readdirSync(path.join(root, "public")).filter((name) => /^[0-9a-f]{32}\.txt$/.test(name));
  if (files.length !== 1) {
    throw new Error(`Expected exactly one public/<32-hex>.txt key file, found ${files.length}.`);
  }
  const key = readFileSync(path.join(root, "public", files[0]), "utf8").trim();
  if (`${key}.txt` !== files[0]) throw new Error("Key file content does not match its name.");
  return key;
}

function toUrl(value) {
  const trimmed = value.trim();
  if (!trimmed || trimmed.startsWith("#")) return null;
  const url = new URL(trimmed, ORIGIN);
  if (url.host !== HOST) throw new Error(`Refusing URL on another host: ${trimmed}`);
  return url.toString();
}

async function sitemapUrls() {
  const response = await fetch(`${ORIGIN}/sitemap.xml`);
  if (!response.ok) throw new Error(`Sitemap fetch failed: ${response.status}`);
  const xml = await response.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  let inputs = args.filter((arg) => !arg.startsWith("--"));

  const fileIndex = args.indexOf("--file");
  if (fileIndex !== -1) {
    const file = args[fileIndex + 1];
    inputs = inputs.filter((arg) => arg !== file);
    inputs.push(...readFileSync(file, "utf8").split("\n"));
  }
  if (args.includes("--sitemap")) inputs.push(...(await sitemapUrls()));

  const urlList = [...new Set(inputs.map(toUrl).filter(Boolean))];
  if (urlList.length === 0) {
    console.error("No URLs given. See the usage notes at the top of this file.");
    process.exit(1);
  }
  if (urlList.length > MAX_URLS) {
    console.error(`IndexNow accepts at most ${MAX_URLS} URLs per request (got ${urlList.length}).`);
    process.exit(1);
  }

  const key = findKey();
  const body = { host: HOST, key, keyLocation: `${ORIGIN}/${key}.txt`, urlList };

  if (dryRun) {
    console.log(JSON.stringify({ ...body, key: "<hidden>", keyLocation: `${ORIGIN}/<key>.txt` }, null, 2));
    return;
  }

  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });
  const text = await response.text();
  // 200 = accepted, 202 = accepted (key check pending). 403 = key file not reachable.
  console.log(`IndexNow ${response.status} ${response.statusText} for ${urlList.length} URL(s)${text ? `: ${text}` : ""}`);
  if (response.status !== 200 && response.status !== 202) process.exit(1);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
