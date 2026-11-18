import { NextResponse, type NextRequest } from "next/server";
import { entitySlugError } from "@/lib/map/catalog";
import { entityTypeForCategory, mapFocusHref } from "@/lib/map/model";
import {
  addSubmission,
  listSubmissions,
  rateKey,
  StorageUnavailable,
  toCompanionPin,
  type Submission,
} from "@/lib/map/store";
import { parseSuggestion } from "@/lib/map/validate";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// Approved pins are public. Cache them at the CDN for a minute so every map
// view does not read the private Blob file. Approvals show up within ~1 minute.
const PUBLIC_PINS_CACHE = "public, s-maxage=60, stale-while-revalidate=300";

export async function GET(request: NextRequest) {
  const pins = (await listSubmissions())
    .filter((item) => item.status === "approved")
    .map(toCompanionPin);

  const entity = request.nextUrl.searchParams.get("entity");
  const slug = request.nextUrl.searchParams.get("slug");
  if (entity && slug) {
    const matches = pins.filter(
      (pin) => pin.entityType === entity && pin.entitySlug === slug
    );
    return NextResponse.json(
      {
        href:
          matches.length > 0
            ? mapFocusHref(matches[0].entityType, slug)
            : null,
        pins: matches,
      },
      { headers: { "Cache-Control": PUBLIC_PINS_CACHE } }
    );
  }

  return NextResponse.json(
    { pins },
    { headers: { "Cache-Control": PUBLIC_PINS_CACHE } }
  );
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Send a suggestion as JSON." }, { status: 400 });
  }

  const parsed = parseSuggestion(body);
  if (!parsed.ok) {
    if ("drop" in parsed) return NextResponse.json({ ok: true });
    return NextResponse.json({ error: parsed.error }, { status: parsed.status });
  }

  const entityType = entityTypeForCategory(parsed.value.category);
  const slugError = entitySlugError(entityType, parsed.value.entitySlug);
  if (slugError) return NextResponse.json({ error: slugError }, { status: 400 });

  const submission: Submission = {
    id: crypto.randomUUID(),
    status: "pending",
    category: parsed.value.category,
    entitySlug: parsed.value.entitySlug,
    title: parsed.value.title,
    description: parsed.value.description,
    sourceUrl: parsed.value.sourceUrl,
    submitterName: parsed.value.submitterName,
    x: parsed.value.x,
    y: parsed.value.y,
    createdAt: new Date().toISOString(),
  };

  try {
    const result = await addSubmission(submission, rateKey(clientIp(request)));
    if (result === "full") {
      return NextResponse.json(
        { error: "The review queue is full right now. Try again later." },
        { status: 503 }
      );
    }
    if (result === "limited") {
      return NextResponse.json(
        { error: "Too many suggestions from this network. Try again in a little while." },
        { status: 429 }
      );
    }
  } catch (error) {
    if (error instanceof StorageUnavailable) {
      return NextResponse.json(
        { error: "Suggestions are offline until storage is configured." },
        { status: 503 }
      );
    }
    console.error("map suggestion failed");
    return NextResponse.json({ error: "Could not save that suggestion." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

function clientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim().slice(0, 80) || "local";
  return request.headers.get("x-real-ip")?.slice(0, 80) || "local";
}
