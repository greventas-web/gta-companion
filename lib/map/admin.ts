import { createHmac, timingSafeEqual } from "node:crypto";
import type { NextRequest } from "next/server";

export const ADMIN_COOKIE = "gta_map_admin";

export function adminSecret(): string | null {
  const secret = process.env.MAP_ADMIN_SECRET?.trim();
  return secret ? secret : null;
}

export function adminToken(secret: string): string {
  return createHmac("sha256", secret).update("gta-companion-map-admin-v1").digest("hex");
}

export function isAdminRequest(request: NextRequest): boolean {
  const secret = adminSecret();
  const presented = request.cookies.get(ADMIN_COOKIE)?.value;
  if (!secret || !presented) return false;
  const expected = adminToken(secret);
  const left = Buffer.from(presented);
  const right = Buffer.from(expected);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}

export function secretsMatch(presented: string, secret: string): boolean {
  const left = Buffer.from(adminToken(presented));
  const right = Buffer.from(adminToken(secret));
  return left.length === right.length && timingSafeEqual(left, right);
}
