import Image from "next/image";
import { notFound } from "next/navigation";

import Breadcrumb from "@/components/Breadcrumb";
import LocationCard from "@/components/LocationCard";

import { locations } from "@/data/locations";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function LocationPage({
  params,
}: Props) {
  const { slug } = await params;

  const location = locations.find(
    (l) => l.slug === slug
  );

  if (!location) {
    notFound();
  }

  const relatedLocations = locations
    .filter(
      (l) =>
        l.region === location.region &&
        l.slug !== location.slug
    )
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-black text-white">

      <section className="mx-auto max-w-[1700px] px-8 py-20">

        <Breadcrumb
          items={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Locations",
              href: "/locations",
            },
            {
              label: location.name,
            },
          ]}
        />

        <div className="mt-12 grid gap-14 xl:grid-cols-[42%_58%]">

          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black">

            <div className="relative aspect-[3/4]">

              <Image
                src={location.image}
                alt={location.name}
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            </div>

          </div>

          <div>

            <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-pink-400">
              {location.type}
            </span>

            <h1 className="mt-8 text-6xl font-black tracking-tight">
              {location.name}
            </h1>

            <p className="mt-8 text-xl leading-9 text-zinc-400">
              {location.description}
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">

              <Info
                label="Region"
                value={location.region}
              />

              <Info
                label="Type"
                value={location.type}
              />

              <Info
                label="First Appearance"
                value={location.firstAppearance}
              />

              <Info
                label="Status"
                value="Confirmed"
              />

            </div>

          </div>

        </div>

        <section className="mt-28">

          <h2 className="text-5xl font-black">
            Related Locations
          </h2>

          <p className="mt-3 text-zinc-400">
            More locations from the same region.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {relatedLocations.map((location) => (

              <LocationCard
                key={location.id}
                location={location}
              />

            ))}

          </div>

        </section>

      </section>

    </main>
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

      <h3 className="mt-3 text-2xl font-black">
        {value}
      </h3>

    </div>
  );
}