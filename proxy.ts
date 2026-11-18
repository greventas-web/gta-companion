import { NextResponse, type NextRequest } from "next/server";

import { CONSENT_GEO_COOKIE, CONSENT_REGIONS } from "@/lib/consent";

const RESTRICTED = new Set<string>(CONSENT_REGIONS);

export function proxy(request: NextRequest) {
  const country = request.headers.get("x-vercel-ip-country")?.toUpperCase() ?? "";
  const value = RESTRICTED.has(country)
    ? "EEA"
    : country
      ? "OTHER"
      : "UNKNOWN";

  if (request.cookies.get(CONSENT_GEO_COOKIE)?.value === value) {
    return NextResponse.next();
  }

  const response = NextResponse.next();
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
