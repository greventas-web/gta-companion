/* GTA Companion service worker.
   HTML navigations are network-first so ISR and fresh pages win when online.
   Static assets are stale-while-revalidate.
   /api (including /api/map/admin and /api/map/submissions) is never cached.
   Non-GET requests, including submission POSTs, are never intercepted.
*/
const VERSION = "1";
const SHELL = `gta-companion-${VERSION}-shell`;
const PAGES = `gta-companion-${VERSION}-pages`;
const ASSETS = `gta-companion-${VERSION}-assets`;
const TILES = `gta-companion-${VERSION}-tiles`;

const PAGE_LIMIT = 24;
const ASSET_LIMIT = 80;
const TILE_LIMIT = 40;
const PINNED_PAGES = new Set(["/", "/app"]);

const SHELL_URLS = [
  "/offline.html",
  "/icons/icon-night-192.png",
  "/icons/icon-night-512.png",
  "/icons/icon-maskable-192.png",
  "/icons/icon-maskable-512.png",
  "/icons/apple-touch-icon-night.png",
  "/logo/logo-night.jpg",
  "/manifest.webmanifest",
];

const savedPages = new Set();
const pendingPages = new Set();

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const shell = await caches.open(SHELL);
      await Promise.all(
        SHELL_URLS.map(async (url) => {
          try {
            const response = await fetch(url);
            if (response.ok) await shell.put(url, response);
          } catch {
            // A missing optional file must not block install.
          }
        })
      );
      await rememberDocument("/");
      await rememberDocument("/app");
      await self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keep = new Set([SHELL, PAGES, ASSETS, TILES]);
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) => key.startsWith("gta-companion-") && !keep.has(key))
          .map((key) => caches.delete(key))
      );
      await self.clients.claim();
    })()
  );
});

self.addEventListener("message", (event) => {
  const data = event.data;
  if (!data || data.type !== "cache-page") return;
  if (event.origin && event.origin !== self.location.origin) return;
  const path = normalizePath(data.url);
  if (!path) return;
  event.waitUntil(rememberDocument(path));
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  let url;
  try {
    url = new URL(request.url);
  } catch {
    return;
  }
  if (url.origin !== self.location.origin) return;
  if (request.headers.has("range")) return;

  const path = url.pathname;

  // Admin, submissions, and every other API stay on the network.
  if (path.startsWith("/api/") || path.startsWith("/_vercel/") || path === "/sw.js") {
    return;
  }

  if (request.mode === "navigate") {
    if (path === "/map/admin" || path.startsWith("/map/admin/")) {
      event.respondWith(networkOrOffline(request, false));
      return;
    }
    event.respondWith(networkFirstPage(request));
    return;
  }

  if (path.startsWith("/maps/")) {
    event.respondWith(staleWhileRevalidate(event, request, TILES, TILE_LIMIT));
    return;
  }

  if (
    path === "/manifest.webmanifest" ||
    path.endsWith(".webmanifest") ||
    isStaticAsset(path)
  ) {
    event.respondWith(staleWhileRevalidate(event, request, ASSETS, ASSET_LIMIT));
  }
});

function isStaticAsset(path) {
  return (
    path.startsWith("/_next/static/") ||
    path.startsWith("/icons/") ||
    path.startsWith("/logo/") ||
    path.startsWith("/images/") ||
    path.startsWith("/_v/") ||
    /\.(?:css|js|mjs|woff2|png|jpe?g|webp|svg|ico|gif)$/i.test(path)
  );
}

function normalizePath(input) {
  if (typeof input !== "string" || input.length > 2048) return null;
  if (!input.startsWith("/") || input.startsWith("//")) return null;
  let url;
  try {
    url = new URL(input, self.location.origin);
  } catch {
    return null;
  }
  if (url.origin !== self.location.origin) return null;
  const path = url.pathname;
  if (
    path.startsWith("/api/") ||
    path.startsWith("/_vercel/") ||
    path === "/map/admin" ||
    path.startsWith("/map/admin/") ||
    path === "/sw.js"
  ) {
    return null;
  }
  return path + url.search;
}

async function networkFirstPage(request) {
  const cache = await caches.open(PAGES);
  try {
    const response = await fetch(request);
    if (canStorePage(response)) {
      try {
        await trim(cache, PAGE_LIMIT, PINNED_PAGES);
        await cache.put(request.url, response.clone());
        savedPages.add(new URL(request.url).pathname + new URL(request.url).search);
      } catch {
        // The network response is still returned if the cache write fails.
      }
    }
    return response;
  } catch {
    const cached = await cache.match(request.url, { ignoreVary: true });
    if (cached) return cached;
    return offlineResponse();
  }
}

async function networkOrOffline(request, store) {
  try {
    const response = await fetch(request);
    if (store && canStorePage(response)) {
      const cache = await caches.open(PAGES);
      await cache.put(request.url, response.clone());
    }
    return response;
  } catch {
    return offlineResponse();
  }
}

async function rememberDocument(path) {
  const normalized = normalizePath(path);
  if (!normalized || savedPages.has(normalized) || pendingPages.has(normalized)) return;
  pendingPages.add(normalized);
  try {
    const response = await fetch(normalized);
    if (!canStorePage(response)) {
      pendingPages.delete(normalized);
      return;
    }
    const html = await response.clone().text();
    if (html.includes('name="gta-offline"')) {
      pendingPages.delete(normalized);
      return;
    }
    const cache = await caches.open(PAGES);
    await trim(cache, PAGE_LIMIT, PINNED_PAGES);
    const absolute = new URL(normalized, self.location.origin).href;
    await cache.put(absolute, response);
    savedPages.add(normalized);
    await precacheStaticFromHtml(html);
  } catch {
    pendingPages.delete(normalized);
  }
}

function canStorePage(response) {
  if (!response || response.status !== 200 || response.type !== "basic") return false;
  if (response.headers.get("x-gta-offline") === "1") return false;
  const type = response.headers.get("content-type") || "";
  return type.includes("text/html");
}

async function precacheStaticFromHtml(html) {
  const urls = new Set();
  for (const match of html.matchAll(/\/_next\/static\/[A-Za-z0-9_./~.-]+/g)) {
    urls.add(match[0]);
  }
  if (urls.size === 0) return;
  const cache = await caches.open(ASSETS);
  await Promise.all(
    [...urls].map(async (url) => {
      try {
        if (await cache.match(url)) return;
        const response = await fetch(url);
        if (!response.ok || response.type !== "basic") return;
        const type = response.headers.get("content-type") || "";
        if (type.includes("text/css") || url.endsWith(".css")) {
          const css = await response.clone().text();
          await cache.put(url, response);
          await precacheFromCss(css, cache);
          return;
        }
        await cache.put(url, response);
      } catch {
        // Static files are optional for install.
      }
    })
  );
}

async function precacheFromCss(css, cache) {
  const urls = new Set();
  for (const match of css.matchAll(/\/_next\/static\/[A-Za-z0-9_./~.-]+/g)) {
    urls.add(match[0]);
  }
  await Promise.all(
    [...urls].map(async (url) => {
      try {
        if (await cache.match(url)) return;
        const response = await fetch(url);
        if (response.ok && response.type === "basic") await cache.put(url, response);
      } catch {
        // Fonts can load on the next online visit.
      }
    })
  );
}

async function staleWhileRevalidate(event, request, cacheName, limit) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request, { ignoreVary: true });
  const refresh = fetch(request)
    .then(async (response) => {
      if (response && response.ok && response.type === "basic") {
        try {
          await trim(cache, limit);
          await cache.put(request, response.clone());
        } catch {
          // Keep the cached copy if the update cannot be stored.
        }
      }
      return response;
    })
    .catch(() => null);

  if (cached) {
    event.waitUntil(refresh.then(() => undefined));
    return cached;
  }

  const fresh = await refresh;
  if (fresh) return fresh;

  const shell = await caches.open(SHELL);
  const fallback = await shell.match(request, { ignoreVary: true });
  if (fallback) return fallback;
  return new Response("", { status: 504, statusText: "Offline" });
}

async function offlineResponse() {
  const shell = await caches.open(SHELL);
  const cached = await shell.match("/offline.html");
  if (cached) return cached.clone();
  return new Response(OFFLINE_FALLBACK, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Gta-Offline": "1",
    },
  });
}

async function trim(cache, limit, pinned) {
  const keys = await cache.keys();
  let over = keys.length - (limit - 1);
  if (over <= 0) return;
  for (const key of keys) {
    if (over <= 0) break;
    if (pinned) {
      const path = new URL(key.url).pathname;
      if (pinned.has(path)) continue;
    }
    await cache.delete(key);
    over -= 1;
  }
}

const OFFLINE_FALLBACK = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#6d28d9">
<meta name="gta-offline" content="1">
<title>Offline | GTA Companion</title>
</head>
<body style="margin:0;background:#1a0a2e;color:#fff;font-family:Arial,sans-serif">
<main style="max-width:36rem;margin:0 auto;padding:4rem 1.5rem">
<p style="letter-spacing:.2em;text-transform:uppercase;color:#c4b5fd;font-size:.75rem">Unofficial</p>
<h1 style="font-size:2.2rem;margin:.5rem 0">You are offline</h1>
<p style="color:#d4d4d8;line-height:1.6">This page is not saved on this device yet. Open GTA Companion again when you have a connection.</p>
<p><a href="/" style="color:#e9d5ff">Back to home</a></p>
<p style="color:#a1a1aa;font-size:.85rem">GTA Companion is an unofficial fan site. Not affiliated with Rockstar Games or Take-Two.</p>
</main>
</body>
</html>`;
