#!/usr/bin/env node
/**
 * Word-count audit for the AdSense thin-page rule.
 *
 *   node scripts/thin-audit.mjs [baseUrl] [minWords]
 *
 * Reads <baseUrl>/sitemap.xml, fetches every page, counts the words of the
 * page's own text (last <main>, minus nav, header, footer, scripts and
 * styles) and prints every indexable page under minWords (default 100).
 * Pages it prints belong in lib/thin-paths.ts (or need more text).
 */
const base = (process.argv[2] ?? "https://www.gta-companion.com").replace(/\/$/, "");
const minWords = Number(process.argv[3] ?? 100);

function words(html) {
  const mains = [...html.matchAll(/<main[\s\S]*?<\/main>/g)].map((m) => m[0]);
  let body = mains.at(-1) ?? html;
  body = body.replace(/<(script|style|nav|header|footer)[\s\S]*?<\/\1>/g, " ");
  const text = body.replace(/<[^>]+>/g, " ").replace(/&[a-z#0-9]+;/gi, " ").replace(/\s+/g, " ").trim();
  return text ? text.split(" ").length : 0;
}

const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const thin = [];
for (let i = 0; i < urls.length; i += 8) {
  const batch = urls.slice(i, i + 8);
  const results = await Promise.all(
    batch.map(async (url) => {
      try {
        const res = await fetch(url);
        const html = await res.text();
        const noindex = /<meta name="robots"[^>]*noindex/.test(html) || /noindex/.test(res.headers.get("x-robots-tag") ?? "");
        return { url, status: res.status, noindex, words: words(html) };
      } catch (error) {
        return { url, status: 0, noindex: false, words: 0, error: String(error) };
      }
    })
  );
  for (const r of results) {
    if (r.status !== 200) console.log(`${r.status}\t${r.url}`);
    else if (r.noindex) console.log(`noindex-in-sitemap\t${r.url}`);
    else if (r.words < minWords) thin.push(r);
  }
}
thin.sort((a, b) => a.words - b.words);
for (const r of thin) console.log(`${r.words}\t${new URL(r.url).pathname}`);
console.log(`\n${urls.length} sitemap URLs, ${thin.length} under ${minWords} words.`);
