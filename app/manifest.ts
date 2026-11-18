import type { MetadataRoute } from "next";

import { PWA_BACKGROUND_COLOR, PWA_DESCRIPTION, PWA_ICONS, PWA_NAME, PWA_SHORTCUTS, PWA_SHORT_NAME, PWA_THEME_COLOR } from "@/lib/pwa";

const shortcutIcon = {
  src: PWA_ICONS.any192,
  sizes: "192x192",
  type: "image/png",
} as const;

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: PWA_NAME,
    short_name: PWA_SHORT_NAME,
    description: PWA_DESCRIPTION,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "any",
    background_color: PWA_BACKGROUND_COLOR,
    theme_color: PWA_THEME_COLOR,
    lang: "en-US",
    dir: "ltr",
    categories: ["entertainment", "reference"],
    icons: [
      {
        src: PWA_ICONS.any192,
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: PWA_ICONS.any512,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: PWA_ICONS.maskable192,
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: PWA_ICONS.maskable512,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: PWA_SHORTCUTS.map((shortcut) => ({
      ...shortcut,
      icons: [shortcutIcon],
    })),
  };
}
