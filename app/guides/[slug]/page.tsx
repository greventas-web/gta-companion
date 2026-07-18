import Image from "next/image";
import { notFound } from "next/navigation";

import Breadcrumb from "@/components/Breadcrumb";
import GuideCard from "@/components/GuideCard";

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
    <main className="min-h-screen bg-black text-white">

      <section className="mx-auto max-w-[1700px] px-8 py-20">

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

        <div className="mt-12 grid gap-14 xl:grid-cols-[42%_58%]">

          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black">

            <div className="relative aspect-[16/10]">

              <Image
                src={guide.image}
                alt={guide.title}
                fill
                priority
                className="object-cover"
              />

            </div>

          </div>

          <div>

            <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-pink-400">
              {guide.category}
            </span>

            <h1 className="mt-8 text-6xl font-black tracking-tight">
              {guide.title}
            </h1>

            <p className="mt-8 text-xl leading-9 text-zinc-400">
              {guide.description}
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">

              <Info
                label="Difficulty"
                value={guide.difficulty}
              />

              <Info
                label="Reading Time"
                value={guide.readingTime}
              />

              <Info
                label="Category"
                value={guide.category}
              />

              <Info
                label="Status"
                value="Official Guide"
              />

            </div>

          </div>

        </div>

        <section className="mt-28">

          <h2 className="text-5xl font-black">
            Related Guides
          </h2>

          <p className="mt-3 text-zinc-400">
            More guides from the same category.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {relatedGuides.map((guide) => (

              <GuideCard
                key={guide.id}
                guide={guide}
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