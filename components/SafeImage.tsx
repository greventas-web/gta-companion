import Image, { type ImageProps } from "next/image";

import BrandedNameCard from "@/components/BrandedNameCard";
import { isNameCard } from "@/components/ItemImage";

const blockedPrefixes = [
  "/images/characters/",
  "/images/vehicles/",
  "/images/locations/",
  "/images/news/",
  "/images/media/",
  "/images/businesses/",
  "/images/map/",
  "/images/home/hero",
  "/images/home/featured",
];

export default function SafeImage({ src, alt, className, fill, sizes, priority }: ImageProps) {
  const path = typeof src === "string" ? src : "";
  const blocked = blockedPrefixes.some((prefix) => path.startsWith(prefix));

  if (isNameCard(path)) {
    return (
      <div className={fill ? "absolute inset-0 z-10" : "relative z-10 h-full min-h-40 w-full"}>
        <BrandedNameCard name={alt || "GTA Companion"} />
      </div>
    );
  }

  if (blocked) {
    return (
      <div
        className={
          fill
            ? "absolute inset-0 flex items-end bg-gradient-to-br from-zinc-800 via-zinc-950 to-black p-6"
            : "flex h-full min-h-40 w-full items-end bg-gradient-to-br from-zinc-800 via-zinc-950 to-black p-6"
        }
      >
        <span className="text-xl font-black tracking-[-0.03em] text-white">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt ?? ""}
      className={className}
      fill={fill}
      sizes={sizes}
      priority={priority}
    />
  );
}
