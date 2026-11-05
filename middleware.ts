import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE = "gta_site_access";

async function accessToken(password: string) {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(password)
  );

  return [...new Uint8Array(digest)]
    .map((value) => value.toString(16).padStart(2, "0"))
    .join("");
}

function safeEqual(left: string, right: string) {
  if (left.length !== right.length) return false;

  let mismatch = 0;

  for (let index = 0; index < left.length; index += 1) {
    mismatch |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }

  return mismatch === 0;
}

function privatePage(failed: boolean) {
  const message = failed
    ? "That password did not open the site."
    : "This site is private while it is being finished.";

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, nofollow" />
    <title>GTA Companion is private</title>
    <style>
      body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #040404; color: white; font-family: Arial, sans-serif; }
      main { width: min(440px, calc(100% - 32px)); }
      h1 { margin: 0; font-size: 42px; letter-spacing: -0.04em; }
      p { color: #a1a1aa; line-height: 1.6; }
      form { display: grid; gap: 12px; margin-top: 28px; }
      input, button { border-radius: 14px; padding: 14px 16px; font-size: 16px; }
      input { border: 1px solid rgba(255,255,255,.12); background: #0b0b0d; color: white; }
      button { border: 0; background: #ec4899; color: white; font-weight: 700; cursor: pointer; }
      .error { color: #fda4af; }
    </style>
  </head>
  <body>
    <main>
      <h1>GTA Companion</h1>
      <p class="${failed ? "error" : ""}">${message}</p>
      <form method="post" action="/api/unlock">
        <input type="password" name="password" placeholder="Access password" autocomplete="current-password" required />
        <button type="submit">Open the site</button>
      </form>
    </main>
  </body>
</html>`;

  return new NextResponse(html, {
    status: 401,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
      "x-robots-tag": "noindex, nofollow",
    },
  });
}

export async function middleware(request: NextRequest) {
  if (process.env.NODE_ENV !== "production") {
    return NextResponse.next();
  }

  const password = process.env.SITE_ACCESS_PASSWORD;
  const cookie = request.cookies.get(COOKIE)?.value;

  if (password && cookie) {
    const expected = await accessToken(password);

    if (safeEqual(cookie, expected)) {
      return NextResponse.next();
    }
  }

  return privatePage(request.nextUrl.searchParams.get("locked") === "1");
}

export const config = {
  matcher: ["/((?!api/unlock|_next/static|_next/image|favicon.ico).*)"],
};
