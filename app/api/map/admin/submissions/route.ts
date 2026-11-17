import { NextResponse, type NextRequest } from "next/server";
import { isAdminRequest } from "@/lib/map/admin";
import { listSubmissions, setSubmissionStatus, StorageUnavailable } from "@/lib/map/store";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Sign in required." }, { status: 401 });
  }
  const submissions = await listSubmissions();
  return NextResponse.json(
    { submissions },
    { headers: { "Cache-Control": "no-store" } }
  );
}

export async function POST(request: NextRequest) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Sign in required." }, { status: 401 });
  }

  let body: { id?: unknown; status?: unknown };
  try {
    body = (await request.json()) as { id?: unknown; status?: unknown };
  } catch {
    return NextResponse.json({ error: "Missing review." }, { status: 400 });
  }

  if (typeof body.id !== "string" || (body.status !== "approved" && body.status !== "rejected")) {
    return NextResponse.json({ error: "Choose approve or reject." }, { status: 400 });
  }

  try {
    const updated = await setSubmissionStatus(body.id, body.status);
    if (!updated) return NextResponse.json({ error: "Suggestion not found." }, { status: 404 });
    return NextResponse.json({ submission: updated });
  } catch (error) {
    if (error instanceof StorageUnavailable) {
      return NextResponse.json(
        { error: "Suggestions are offline until storage is configured." },
        { status: 503 }
      );
    }
    console.error("map moderation failed");
    return NextResponse.json({ error: "Could not update that suggestion." }, { status: 500 });
  }
}
