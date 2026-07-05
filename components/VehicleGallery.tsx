"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  alt: string;
};

export default function VehicleGallery({
  images,
  alt,
}: Props) {
  const gallery =
    images.length > 0
      ? images
      : ["/images/placeholder.webp"];

  const [selected, setSelected] = useState(gallery[0]);

  return (
    <div>

      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">

        <Image
          src={selected}
          alt={alt}
          fill
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
                className="object-cover"
              />

            </button>

          ))}

        </div>

      )}

    </div>
  );
}