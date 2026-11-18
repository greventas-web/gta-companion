"use client";

import variants from "./variants.json";

const manifest = variants as Record<string, number[]>;
const EXT = /\.(webp|jpe?g|png)$/i;

/**
 * next/image loader with no server-side optimization.
 * Local images use pre-sized files from scripts/images/variants.mjs when one
 * exists for the requested width; everything else is served as-is.
 */
export default function staticImageLoader({ src, width }: { src: string; width: number }) {
  const [pathname] = src.split("?");
  const sizes = manifest[pathname];
  if (!sizes) return src;
  const pick = sizes.find((size) => width <= size);
  if (!pick) return src;
  return `/_v/${pick}${pathname.replace(EXT, ".webp")}`;
}
