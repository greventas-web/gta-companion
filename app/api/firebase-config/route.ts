import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function readSetting(name: string) {
  const settings = process.env;
  return settings[name] ?? "";
}

export function GET() {
  const config = {
    apiKey: readSetting("NEXT_PUBLIC_FIREBASE_API_KEY"),
    authDomain: readSetting("NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN"),
    projectId: readSetting("NEXT_PUBLIC_FIREBASE_PROJECT_ID"),
    storageBucket: readSetting("NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET"),
    messagingSenderId: readSetting("NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID"),
    appId: readSetting("NEXT_PUBLIC_FIREBASE_APP_ID"),
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
