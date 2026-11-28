import { NextResponse, type NextRequest } from "next/server";

import { CONSENT_GEO_COOKIE, CONSENT_REGIONS } from "@/lib/consent";
import { isThinPath, THIN_ROBOTS_HEADER } from "@/lib/thin-content";

const RESTRICTED = new Set<string>(CONSENT_REGIONS);

export function proxy(request: NextRequest) {
  const country = request.headers.get("x-vercel-ip-country")?.toUpperCase() ?? "";
  const value = RESTRICTED.has(country)
    ? "EEA"
    : country
      ? "OTHER"
      : "UNKNOWN";

  const response = NextResponse.next();

  // Thin pages: noindex by header too, so every thin path is covered even
  // where the page itself does not set the robots meta tag.
  if (isThinPath(request.nextUrl.pathname)) {
    response.headers.set("X-Robots-Tag", THIN_ROBOTS_HEADER);
  }

  if (request.cookies.get(CONSENT_GEO_COOKIE)?.value === value) {
    return response;
  }

  response.cookies.set({
    name: CONSENT_GEO_COOKIE,
    value,
    path: "/",
    maxAge: 60 * 60 * 24,
    sameSite: "lax",
    secure: request.nextUrl.protocol === "https:",
  });
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sw.js|offline.html|ads.txt|robots.txt|sitemap.xml|icons/|images/|logo/|maps/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|js|css|xml|txt|woff2?)$).*)",
  ],
};
