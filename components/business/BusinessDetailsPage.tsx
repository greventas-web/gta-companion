import Image from "@/components/SafeImage";
import Link from "next/link";

import Breadcrumb from "@/components/Breadcrumb";

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

      <div className="mt-12 grid gap-14 xl:grid-cols-[58%_42%]">

        {/* Hero Image */}

        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black">

          <div className="relative aspect-[16/10]">

            <Image
              src={business.image}
              alt={business.name}
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          </div>

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

      <section className="mt-28">

        <h2 className="text-5xl font-black">

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
                  alt={related.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
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