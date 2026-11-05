import { NextResponse } from "next/server";

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

export async function POST(request: Request) {
  const password = process.env.SITE_ACCESS_PASSWORD;
  const submitted = String(
    (await request.formData()).get("password") ?? ""
  );
  const home = new URL("/", request.url);

  if (!password || submitted !== password) {
    home.searchParams.set("locked", "1");
    return NextResponse.redirect(home, 303);
  }

  const response = NextResponse.redirect(home, 303);

  response.cookies.set(COOKIE, await accessToken(password), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 14,
  });

  return response;
}
