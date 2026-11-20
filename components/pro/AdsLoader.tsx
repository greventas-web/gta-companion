"use client";

import Script from "next/script";
import { useProHintState } from "@/lib/pro/tracker";

/** The AdSense script, skipped on devices where Pro is confirmed. */
export default function AdsLoader() {
  const pro = useProHintState();
  if (pro !== false) return null;
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1639723880207640"
      crossOrigin="anonymous"
      strategy="lazyOnload"
    />
  );
}
