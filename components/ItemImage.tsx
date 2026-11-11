import Image, { type ImageProps } from "next/image";

import BrandedNameCard from "@/components/BrandedNameCard";

type Props = Omit<ImageProps, "alt" | "src"> & {
  src?: string;
  alt: string;
  name?: string;
};

export function isNameCard(src?: string) {
  if (!src) return true;
  return src.includes("placeholder");
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
      <div className={fill ? "absolute inset-0 z-10" : "relative z-10 h-full min-h-40 w-full"}>
        <BrandedNameCard name={label} />
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
