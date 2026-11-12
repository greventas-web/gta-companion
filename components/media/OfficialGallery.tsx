import Image from "next/image";

import { IMAGE_CREDIT } from "@/lib/site";
import { officialMedia } from "@/src/data/media/gallery";

const sectionOrder = ["People", "Places", "Artwork", "Postcards", "Cover", "Album"];

export default function OfficialGallery() {
  const screenshots = officialMedia.filter((item) => item.group === "Screenshots");
  const artwork = officialMedia.filter((item) => item.group === "Artwork");

  return (
    <div className="mt-28 space-y-24">
      <GalleryBlock
        id="screenshots"
        eyebrow="Official screenshots"
        title="Screenshots"
        items={screenshots}
      />
      <GalleryBlock
        id="artwork"
        eyebrow="Official artwork"
        title="Artwork"
        items={artwork}
      />
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
        {IMAGE_CREDIT}. Unofficial fan site, not affiliated with Rockstar Games or Take-Two.
      </p>
    </div>
  );
}

function GalleryBlock({
  id,
  eyebrow,
  title,
  items,
}: {
  id: string;
  eyebrow: string;
  title: string;
  items: typeof officialMedia;
}) {
  const sections = sectionOrder
    .map((section) => ({
      section,
      items: items.filter((item) => item.section === section),
    }))
    .filter((section) => section.items.length > 0);

  return (
    <section id={id} aria-labelledby={`${id}-title`}>
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.4em] text-pink-400">
            {eyebrow}
          </p>
          <h2 id={`${id}-title`} className="mt-4 text-5xl font-black">
            {title}
          </h2>
        </div>
        <p className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-zinc-300">
          {items.length}
        </p>
      </div>

      <div className="space-y-12">
        {sections.map((section) => (
          <div key={section.section}>
            <h3 className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-teal-300">
              {section.section}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item) => (
                <a
                  key={item.src}
                  href={item.src}
                  className="group overflow-hidden rounded-[24px] border border-white/10 bg-[#0B0B0D]"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="px-4 py-3 text-sm font-semibold text-zinc-300">
                    {item.title}
                  </p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
