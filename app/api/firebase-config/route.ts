import { NextResponse } from "next/server";
import { firebasePublicConfig } from "@/lib/firebase-public";

export function GET() {
  return NextResponse.json(firebasePublicConfig, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
