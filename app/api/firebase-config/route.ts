import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";


function readSetting(name: string) {
  const read = new Function(
    "name",
    "var value = typeof process === 'undefined' ? '' : process.env[name]; return typeof value === 'string' ? value : '';"
  ) as (name: string) => string;

  return read(name);
}

export function GET() {
  const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || readSetting("NEXT_PUBLIC_FIREBASE_API_KEY"),
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || readSetting("NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN"),
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || readSetting("NEXT_PUBLIC_FIREBASE_PROJECT_ID"),
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || readSetting("NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET"),
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || readSetting("NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID"),
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || readSetting("NEXT_PUBLIC_FIREBASE_APP_ID"),
  };

  const lengths = {
    NEXT_PUBLIC_FIREBASE_API_KEY: config.apiKey.length,
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: config.authDomain.length,
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: config.projectId.length,
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: config.storageBucket.length,
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: config.messagingSenderId.length,
    NEXT_PUBLIC_FIREBASE_APP_ID: config.appId.length,
  };
  const ready = Object.values(config).every((value) => value.length > 0);

  if (!ready) {
    const missing = Object.entries(lengths)
      .filter(([, length]) => length === 0)
      .map(([name]) => name);

    return NextResponse.json(
      {
        configured: false,
        environment: readSetting("VERCEL_ENV"),
        missing,
        lengths,
      },
      { status: 503 }
    );
  }

  return NextResponse.json(config, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
