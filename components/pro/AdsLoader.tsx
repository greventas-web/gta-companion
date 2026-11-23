"use client";

import Script from "next/script";
import { ADSENSE_CLIENT, ADS_ENABLED } from "@/lib/ads";
import { isGoogleCmpEnabled } from "@/lib/consent";
import { useProHintState } from "@/lib/pro/tracker";

/** The AdSense script, skipped on devices where Pro is confirmed. */
export default function AdsLoader() {
  const pro = useProHintState();
  if (!ADS_ENABLED || pro !== false) return null;
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
      crossOrigin="anonymous"
      strategy={isGoogleCmpEnabled() ? "afterInteractive" : "lazyOnload"}
    />
  );
}
