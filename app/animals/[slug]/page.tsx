import ItemImage from "@/components/ItemImage";
import Link from "next/link";
import { notFound } from "next/navigation";

import Breadcrumb from "@/components/Breadcrumb";

import { animals } from "@/data/animals";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function AnimalPage({
  params,
}: Props) {
  const { slug } = await params;

  const animal = animals.find(
    (a) => a.slug === slug
  );

  if (!animal) {
    notFound();
  }

  const relatedAnimals = animals
    .filter(
      (a) =>
        a.category === animal.category &&
        a.slug !== animal.slug
    )
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-background text-white">

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-44">

        <Breadcrumb
          items={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Animals",
              href: "/animals",
            },
            {
              label: animal.name,
            },
          ]}
        />

        <div className="mt-10 grid gap-14 lg:grid-cols-2">

          <div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">

              <ItemImage
                src={animal.image}
                alt={animal.imageAlt || animal.name}
                name={animal.name}
                fill
                className="object-cover"
              />

            </div>

          </div>

          <div>

            <span className="rounded-full bg-pink-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-pink-400">
              {animal.category}
            </span>

            <h1 className="mt-6 text-6xl font-extrabold">
              {animal.name}
            </h1>

            <p className="mt-8 text-lg leading-8 text-zinc-400">
              {animal.description}
            </p>
            {animal.status === "Shown in a Rockstar caption" ? (
              <a
                href="https://www.rockstargames.com/VI"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm text-pink-300 hover:text-pink-200"
              >
                Source: Rockstar Games — Grand Theft Auto VI
              </a>
            ) : null}

            <div className="mt-10 grid grid-cols-2 gap-5">

              <Info
                label="Category"
                value={animal.category}
              />

              <Info
                label="Habitat"
                value={animal.habitat}
              />

              <Info
                label="First Appearance"
                value={animal.firstAppearance}
              />

              <Info
                label="Status"
                value={animal.status ?? "Shown in a Rockstar caption"}
              />

            </div>

          </div>

        </div>

        {relatedAnimals.length > 0 ? (
        <div className="mt-24">

          <h2 className="break-words text-4xl font-bold">
            Related Animals
          </h2>

          <p className="mt-2 text-zinc-400">
            More wildlife from the same category.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {relatedAnimals.map((related) => (

              <Link
                key={related.id}
                href={`/animals/${related.slug}`}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-pink-500"
              >

                <h3 className="text-2xl font-bold">
                  {related.name}
                </h3>

                <p className="mt-2 text-zinc-400">
                  {related.habitat}
                </p>

              </Link>

            ))}

          </div>

        </div>
        ) : null}

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