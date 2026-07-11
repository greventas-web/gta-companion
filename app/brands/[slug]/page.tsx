import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Breadcrumb from "@/components/Breadcrumb";

import { brands } from "@/data/brands";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BrandPage({
  params,
}: Props) {
  const { slug } = await params;

  const brand = brands.find(
    (b) => b.slug === slug
  );

  if (!brand) {
    notFound();
  }

  const relatedBrands = brands
    .filter(
      (b) =>
        b.category === brand.category &&
        b.slug !== brand.slug
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
              label: "Brands",
              href: "/brands",
            },
            {
              label: brand.name,
            },
          ]}
        />

        <div className="mt-10 grid gap-14 lg:grid-cols-2">

          <div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">

              <Image
                src={brand.image}
                alt={brand.name}
                fill
                className="object-cover"
              />

            </div>

          </div>

          <div>

            <span className="rounded-full bg-pink-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-pink-400">
              {brand.category}
            </span>

            <h1 className="mt-6 text-6xl font-extrabold">
              {brand.name}
            </h1>

            <p className="mt-8 text-lg leading-8 text-zinc-400">
              {brand.description}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">

              <Info
                label="Category"
                value={brand.category}
              />

              <Info
                label="First Appearance"
                value={brand.firstAppearance}
              />

              <Info
                label="Status"
                value="Confirmed"
              />

              <Info
                label="Database"
                value="Official"
              />

            </div>

          </div>

        </div>

        <div className="mt-24">

          <h2 className="text-4xl font-bold">
            Related Brands
          </h2>

          <p className="mt-2 text-zinc-400">
            More brands from the same category.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {relatedBrands.map((related) => (

              <Link
                key={related.id}
                href={`/brands/${related.slug}`}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-pink-500"
              >

                <h3 className="text-2xl font-bold">
                  {related.name}
                </h3>

                <p className="mt-2 text-zinc-400">
                  {related.category}
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