import Image from "next/image";
import { notFound } from "next/navigation";

import Breadcrumb from "@/components/Breadcrumb";

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

  return (
    <main className="min-h-screen bg-background text-white">

      <section className="mx-auto max-w-7xl px-6 py-20">

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

        <div className="mt-10 grid gap-14 lg:grid-cols-2">

          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">

            <Image
              src={location.image}
              alt={location.name}
              fill
              className="object-cover"
            />

          </div>

          <div>

            <span className="rounded-full bg-pink-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-pink-400">
              {location.type}
            </span>

            <h1 className="mt-6 text-6xl font-extrabold">
              {location.name}
            </h1>

            <p className="mt-8 text-lg leading-8 text-zinc-400">
              {location.description}
            </p>

            <div className="mt-12 grid gap-5">

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <p className="text-sm text-zinc-500">
                  Region
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  {location.region}
                </h2>

              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <p className="text-sm text-zinc-500">
                  First Appearance
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  {location.firstAppearance}
                </h2>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}