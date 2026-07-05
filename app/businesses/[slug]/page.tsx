import Image from "next/image";
import { notFound } from "next/navigation";

import Breadcrumb from "@/components/Breadcrumb";

import { businesses } from "@/data/businesses";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BusinessPage({
  params,
}: Props) {
  const { slug } = await params;

  const business = businesses.find(
    (b) => b.slug === slug
  );

  if (!business) {
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
              label: "Businesses",
              href: "/businesses",
            },
            {
              label: business.name,
            },
          ]}
        />

        <div className="mt-10 grid gap-14 lg:grid-cols-2">

          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">

            <Image
              src={business.image}
              alt={business.name}
              fill
              className="object-cover"
            />

          </div>

          <div>

            <span className="rounded-full bg-pink-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-pink-400">
              {business.category}
            </span>

            <h1 className="mt-6 text-6xl font-extrabold">
              {business.name}
            </h1>

            <p className="mt-8 text-lg leading-8 text-zinc-400">
              {business.description}
            </p>

            <div className="mt-12 grid gap-5">

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <p className="text-sm text-zinc-500">
                  Location
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  {business.location}
                </h2>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <p className="text-sm text-zinc-500">
                  First Appearance
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  {business.firstAppearance}
                </h2>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}