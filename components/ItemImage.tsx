import Image, { type ImageProps } from "next/image";

import BrandPlaceholder from "@/components/simple/BrandPlaceholder";
import { isPlaceholderSrc } from "@/lib/media/catalog";

type Props = Omit<ImageProps, "alt" | "src"> & {
  src?: string;
  alt: string;
  name?: string;
};

export function isNameCard(src?: string) {
  return isPlaceholderSrc(src);
}

export default function ItemImage({
  src,
  alt,
  name,
  fill,
  className,
  sizes,
  priority,
}: Props) {
  const label = name || alt;

  if (isNameCard(src)) {
    return (
      <div className={fill ? "absolute inset-0 z-[1]" : "relative z-[1] h-full min-h-40 w-full"}>
        <BrandPlaceholder name={label} />
      </div>
    );
  }

  return (
    <Image
      src={src as string}
      alt={alt}
      fill={fill}
      sizes={sizes}
      priority={priority}
      className={className || "object-cover"}
    />
  );
}
