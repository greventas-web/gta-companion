import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Read each setting by its full name so the production build can include it.

export function GET() {
  const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "",
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? "",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "",
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? "",
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? "",
  };

  const ready = Object.values(config).every((value) => value.length > 0);

  if (!ready) {
    return NextResponse.json({ configured: false }, { status: 503 });
  }

  return NextResponse.json(config, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
