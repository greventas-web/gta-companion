"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function pagePath() {
  return window.location.pathname + window.location.search;
}

export default function ServiceWorkerRegister() {
  const pathname = usePathname();

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;

    let cancelled = false;

    const post = () => {
      const worker = navigator.serviceWorker.controller;
      if (!worker) return;
      const url = pagePath();
      if (url.startsWith("/map/admin") || url.startsWith("/community/admin")) return;
      worker.postMessage({ type: "cache-page", url });
    };

    navigator.serviceWorker
      .register("/sw.js", { scope: "/", updateViaCache: "none" })
      .then(() => {
        if (!cancelled) post();
      })
      .catch(() => {
        // Private mode can refuse a service worker. The site still works online.
      });

    navigator.serviceWorker.addEventListener("controllerchange", post);
    return () => {
      cancelled = true;
      navigator.serviceWorker.removeEventListener("controllerchange", post);
    };
  }, [pathname]);

  return null;
}
