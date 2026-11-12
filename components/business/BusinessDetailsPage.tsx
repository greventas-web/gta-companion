import Image from "@/components/SafeImage";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";
import { isNameCard } from "@/components/ItemImage";
import { IMAGE_CREDIT } from "@/lib/site";

import { Business } from "@/types/business";

type Props = {
  business: Business;
  relatedBusinesses: Business[];
};

export default function BusinessDetailsPage({
  business,
  relatedBusinesses,
}: Props) {
  return (
    <section className="mx-auto max-w-[1700px]">

      <Breadcrumb
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Businesses",
            href: "/businesses",
          },
          {
            label: business.name,
          },
        ]}
      />

      <div className="mt-12 grid gap-14 xl:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">

        <div>
          <figure className="overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black">
            <div className="relative aspect-video">
              <Image
                src={business.image}
                alt={
                  isNameCard(business.image)
                    ? business.name
                    : business.imageAlt || business.name
                }
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 60vw"
                className="object-cover"
              />
              {isNameCard(business.image) ? null : (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
              )}
            </div>
            {business.imageCaption || !isNameCard(business.image) ? (
              <figcaption className="space-y-1 px-6 py-5 text-sm leading-6 text-zinc-400">
                {business.imageCaption ? <p>{business.imageCaption}</p> : null}
                {isNameCard(business.image) ? null : <p>{IMAGE_CREDIT}</p>}
              </figcaption>
            ) : null}
          </figure>

          {business.gallery && business.gallery.length > 0 ? (
            <div className="mt-6 grid gap-4">
              {business.gallery.map((shot) => (
                <figure
                  key={shot.src}
                  className="overflow-hidden rounded-[28px] border border-white/10 bg-black"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(max-width: 1280px) 100vw, 60vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="space-y-1 px-5 py-4 text-sm leading-6 text-zinc-400">
                    <p>{shot.caption}</p>
                    <p>{IMAGE_CREDIT}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : null}
        </div>

        {/* Right Side */}

        <div>

          <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.28em] text-pink-400">

            {business.category}

          </span>

          <h1 className="mt-8 text-6xl font-black tracking-[-0.03em]">

            {business.name}

          </h1>

          <p className="mt-8 text-xl leading-9 text-zinc-400">

            {business.description}

          </p>

          <div className="mt-10 rounded-[28px] border border-pink-500/20 bg-gradient-to-br from-pink-500/10 via-zinc-900 to-black p-7">

            <p className="text-xs font-black uppercase tracking-[0.35em] text-pink-400">

              GTA Companion Notes

            </p>

            <p className="mt-5 leading-8 text-zinc-400">

              Businesses listed in GTA Companion are sourced from official
              Rockstar Games material whenever possible. Information will
              continue to expand as additional screenshots, trailers and
              official announcements are released.

            </p>

          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

  <Info
    label="Location"
    value={business.location}
  />

  <Info
    label="Status"
    value={business.status ?? "Officially Confirmed"}
  />

  <Info
    label="Owner"
    value={business.owner ?? "Unknown"}
  />

  <Info
    label="District"
    value={business.district ?? business.location}
  />

  <Info
    label="Business Type"
    value={business.type ?? business.category}
  />

  <Info
    label="First Appearance"
    value={business.firstAppearance}
  />

</div>

        </div>

      </div>

      {/* Related Businesses */}

      {relatedBusinesses.length > 0 ? (
      <section className="mt-28">

        <h2 className="break-words text-4xl font-black sm:text-5xl">

          Related Businesses

        </h2>

        <p className="mt-3 text-zinc-400">

          Discover more businesses connected to the GTA universe.

        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {relatedBusinesses.map((related) => (

            <Link
              key={related.id}
              href={`/businesses/${related.slug}`}
              className="group rounded-[30px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-7 transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-[0_35px_100px_rgba(236,72,153,.18)]"
            >

              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">

                <Image
                  src={related.image}
                  alt={
                    isNameCard(related.image)
                      ? related.name
                      : related.imageAlt || related.name
                  }
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">

                {related.category}

              </p>

              <h3 className="mt-3 text-3xl font-black transition group-hover:text-pink-300">

                {related.name}

              </h3>

              <p className="mt-3 leading-7 text-zinc-400 line-clamp-2">

                {related.description}

              </p>

            </Link>

          ))}

        </div>

      </section>
      ) : null}
          </section>

  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-6">

      <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">

        {label}

      </p>

      <h3 className="mt-3 text-2xl font-black text-white">

        {value}

      </h3>

    </div>
  );
}