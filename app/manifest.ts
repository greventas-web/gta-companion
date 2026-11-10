import type { MetadataRoute } from "next";

import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#040404",
    theme_color: "#040404",
    lang: "en",
    categories: ["games", "entertainment", "news"],

    icons: [
      {
        src: "/icons/icon-night-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-night-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/apple-touch-icon-night.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}