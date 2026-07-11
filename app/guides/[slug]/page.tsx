import Image from "next/image";
import { notFound } from "next/navigation";

import Breadcrumb from "@/components/Breadcrumb";

import { guides } from "@/data/guides";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function GuidePage({
  params,
}: Props) {
  const { slug } = await params;

  const guide = guides.find(
    (g) => g.slug === slug
  );

  if (!guide) {
    notFound();
  }

  const relatedGuides = guides
    .filter(
      (g) =>
        g.category === guide.category &&
        g.slug !== guide.slug
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
              label: "Guides",
              href: "/guides",
            },
            {
              label: guide.title,
            },
          ]}
        />

        <div className="relative mt-10 h-[500px] overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">

          <Image
            src={guide.image}
            alt={guide.title}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        </div>

        <div className="mt-10 flex flex-wrap gap-3">

          <span className="rounded-full bg-pink-500/20 px-4 py-2 text-sm font-semibold text-pink-400">
            {guide.category}
          </span>

          <span className="rounded-full bg-zinc-800 px-4 py-2 text-sm">
            {guide.readingTime}
          </span>

          <span className="rounded-full bg-zinc-800 px-4 py-2 text-sm">
            {guide.difficulty}
          </span>

        </div>

        <h1 className="mt-8 max-w-5xl text-6xl font-extrabold">
          {guide.title}
        </h1>

        <p className="mt-8 max-w-4xl text-xl leading-9 text-zinc-400">
          {guide.description}
        </p>

        <div className="mt-20">

          <h2 className="text-4xl font-bold">
            Related Guides
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">

            {relatedGuides.map((related) => (

              <div
                key={related.id}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6"
              >

                <h3 className="text-2xl font-bold">
                  {related.title}
                </h3>

                <p className="mt-4 text-zinc-400">
                  {related.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}