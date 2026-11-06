"use client";

import { useState } from "react";
import Image from "@/components/SafeImage";

type Props = {
  images: string[];
  alt: string;
};

export default function VehicleGallery({
  images,
  alt,
}: Props) {
  const gallery = images.filter(
    (image) => image && !image.includes("placeholder")
  );

  const [selected, setSelected] = useState(gallery[0] ?? "");

  if (!selected) {
    return (
      <div className="flex aspect-[16/10] items-end rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-800 via-zinc-950 to-black p-8">
        <span className="text-3xl font-black tracking-[-0.03em] text-white">
          {alt}
        </span>
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
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover"
          priority
        />

      </div>

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