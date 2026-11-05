import { NextResponse } from "next/server";

const pausedPage = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, nofollow" />
    <title>GTA Companion is paused</title>
    <style>
      body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #040404; color: white; font-family: Arial, sans-serif; }
      main { width: min(520px, calc(100% - 32px)); }
      h1 { margin: 0; font-size: 42px; letter-spacing: -0.04em; }
      p { color: #a1a1aa; line-height: 1.6; }
    </style>
  </head>
  <body>
    <main>
      <h1>GTA Companion is paused</h1>
      <p>The site is offline while it is being finished. Please check back later.</p>
    </main>
  </body>
</html>`;

export function middleware() {
  if (process.env.NODE_ENV !== "production") {
    return NextResponse.next();
  }

  return new NextResponse(pausedPage, {
    status: 503,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
      "retry-after": "86400",
      "x-robots-tag": "noindex, nofollow",
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
