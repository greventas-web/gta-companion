"use client";

import { useState } from "react";
import Image from "@/components/SafeImage";
import BrandedNameCard from "@/components/BrandedNameCard";
import RepresentativeMark from "@/components/RepresentativeMark";
import { isPlaceholderSrc } from "@/lib/media/catalog";
import { IMAGE_CREDIT } from "@/lib/site";

type Props = {
  images: string[];
  alt: string;
  representative?: boolean;
};

export default function VehicleGallery({
  images,
  alt,
  representative,
}: Props) {
  const gallery = images.filter((image) => image && !isPlaceholderSrc(image));

  const [selected, setSelected] = useState(gallery[0] ?? "");

  if (!selected) {
    return (
      <div className="aspect-[16/10] overflow-hidden rounded-3xl border border-white/10">
        <BrandedNameCard name={alt} />
      </div>
    );
  }

  return (
    <div>

      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">

        <Image
          src={selected}
          alt={alt}
          fill
          sizes="(max-width: 480px) 80vw, (max-width: 1024px) 100vw, 60vw"
          className="object-cover"
          priority
        />
        <RepresentativeMark show={representative} />

      </div>
      <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.16em] text-zinc-500">
        {IMAGE_CREDIT}
      </p>

      {gallery.length > 1 && (

        <div className="mt-4 grid grid-cols-4 gap-4">

          {gallery.map((image) => (

            <button
              key={image}
              onClick={() => setSelected(image)}
              className={`relative aspect-video overflow-hidden rounded-xl border transition ${
                selected === image
                  ? "border-pink-500"
                  : "border-zinc-800 hover:border-pink-500"
              }`}
            >

              <Image
                src={image}
                alt={alt}
                fill
                sizes="160px"
                className="object-cover"
              />

            </button>

          ))}

        </div>

      )}

    </div>
  );
}