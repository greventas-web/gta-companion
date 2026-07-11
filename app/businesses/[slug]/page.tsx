import Image from "next/image";
import Link from "next/link";
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

  const relatedBusinesses = businesses
    .filter(
      (b) =>
        b.category === business.category &&
        b.slug !== business.slug
    )
    .slice(0, 3);

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

          <div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">

              <Image
                src={business.image}
                alt={business.name}
                fill
                className="object-cover"
              />

            </div>

          </div>

          <div>

            <span className="rounded-full bg-pink-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-pink-400">
              {business.category}
            </span>

            <h1 className="mt-6 text-6xl font-extrabold">
              {business.name}
            </h1>

            <p className="mt-8 text-lg leading-8 text-zinc-400">
              {business.description}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">

              <Info
                label="Location"
                value={business.location}
              />

              <Info
                label="Category"
                value={business.category}
              />

              <Info
                label="First Appearance"
                value={business.firstAppearance}
              />

              <Info
                label="Status"
                value="Confirmed"
              />

            </div>

          </div>

        </div>

        <div className="mt-24">

          <h2 className="text-4xl font-bold">
            Related Businesses
          </h2>

          <p className="mt-2 text-zinc-400">
            More businesses in the same category.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {relatedBusinesses.map((related) => (

              <Link
                key={related.id}
                href={`/businesses/${related.slug}`}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-pink-500"
              >

                <h3 className="text-2xl font-bold">
                  {related.name}
                </h3>

                <p className="mt-2 text-zinc-400">
                  {related.location}
                </p>

              </Link>

            ))}

          </div>

        </div>

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
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">

      <p className="text-sm text-zinc-500">
        {label}
      </p>

      <h3 className="mt-2 text-2xl font-bold">
        {value}
      </h3>

    </div>
  );
}