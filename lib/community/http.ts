import { NextResponse, type NextRequest } from "next/server";

export function json(body: unknown, status = 200, cache = "private, no-store") {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": cache },
  });
}

export function clientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim().slice(0, 80) || "local";
  return request.headers.get("x-real-ip")?.slice(0, 80) || "local";
}

export function contentLength(request: NextRequest): number {
  const raw = request.headers.get("content-length");
  if (!raw) return 0;
  const value = Number(raw);
  return Number.isFinite(value) ? value : 0;
}
