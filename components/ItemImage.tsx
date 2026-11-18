import Image, { type ImageProps } from "next/image";

import { isPlaceholderSrc } from "@/lib/media/catalog";
import { resolveCardImage } from "@/lib/simple/cardImage";

type Props = Omit<ImageProps, "alt" | "src"> & {
  src?: string;
  alt: string;
  name?: string;
  /** Kept for callers; images are never picked by kind. */
  kind?: string;
  text?: string;
};

/** True when the item has no confirmed photo of its own. */
export function isNameCard(src?: string) {
  return isPlaceholderSrc(src);
}

/** Item photo, or a plain dark surface when there is no confirmed photo. */
export default function ItemImage({ src, alt, name, fill, className, sizes, priority }: Props) {
  const resolved = resolveCardImage({ image: src, title: name || alt });
  if (!resolved.src) {
    return (
      <div
        data-img-source="none"
        aria-hidden
        className={`${fill ? "absolute inset-0" : "h-full min-h-40 w-full"} bg-gradient-to-br from-violet-500/[0.12] via-[#0B0B10] to-[#060608]`}
      />
    );
  }
  return (
    <Image
      src={resolved.src}
      alt={alt}
      fill={fill}
      width={fill ? undefined : 1600}
      height={fill ? undefined : 900}
      sizes={sizes}
      priority={priority}
      data-img-source={resolved.source}
      className={className || "object-cover"}
    />
  );
}
