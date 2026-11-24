import { timingSafeEqual } from "node:crypto";
import { NextResponse, type NextRequest } from "next/server";
import { adminSecret, isAdminRequest } from "@/lib/map/admin";
import { listWaitlist, ProStorageUnavailable } from "@/lib/pro/server/store";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const NO_STORE = { "Cache-Control": "private, no-store" };

/** Bearer token must be the MAP_ADMIN_SECRET value. Lengths are checked first. */
function bearerMatches(request: NextRequest, secret: string): boolean {
  const header = request.headers.get("authorization") ?? "";
  const presented = /^Bearer\s+(\S+)$/i.exec(header)?.[1];
  if (!presented) return false;
  const left = Buffer.from(presented);
  const right = Buffer.from(secret);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}

export async function GET(request: NextRequest) {
  const secret = adminSecret();
  if (!secret) {
    return NextResponse.json({ error: "Export is not configured." }, { status: 503, headers: NO_STORE });
  }
  if (!isAdminRequest(request) && !bearerMatches(request, secret)) {
    return NextResponse.json({ error: "Not allowed." }, { status: 401, headers: NO_STORE });
  }
  try {
    const signups = await listWaitlist();
    return NextResponse.json({ signups }, { headers: NO_STORE });
  } catch (error) {
    if (error instanceof ProStorageUnavailable) {
      return NextResponse.json({ error: "Waitlist storage is not configured." }, { status: 503, headers: NO_STORE });
    }
    return NextResponse.json({ error: "Could not read the list." }, { status: 500, headers: NO_STORE });
  }
}
