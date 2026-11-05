import Image from "next/image";
import { notFound } from "next/navigation";
import {
  BookOpen,
  Clock3,
  GraduationCap,
  BadgeCheck,
} from "lucide-react";

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
    <main className="min-h-screen bg-[#040404] text-white">

      <section className="mx-auto max-w-[1700px] px-8 pb-20 pt-44">

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

          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black">

            <div className="relative aspect-[16/10]">

              <Image
                src={guide.image}
                alt={guide.title}
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            </div>

          </div>

          <div>

            <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-pink-400">
              {guide.category}
            </span>

            <h1 className="mt-8 text-6xl font-black tracking-[-0.03em]">
              {guide.title}
            </h1>

            <p className="mt-8 max-w-4xl text-xl leading-9 text-zinc-400">
              {guide.description}
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">

              <Info
                icon={<GraduationCap size={18} />}
                label="Difficulty"
                value={guide.difficulty}
              />

              <Info
                icon={<Clock3 size={18} />}
                label="Reading Time"
                value={guide.readingTime}
              />

              <Info
                icon={<BookOpen size={18} />}
                label="Category"
                value={guide.category}
              />

              <Info
                icon={<BadgeCheck size={18} />}
                label="Status"
                value="Official Guide"
              />

            </div>

          </div>

        </div>

        <section className="mt-28">

          <div className="mb-12">

            <div className="text-xs font-black uppercase tracking-[0.35em] text-pink-400">
              Related Content
            </div>

            <h2 className="mt-4 text-5xl font-black">
              Related Guides
            </h2>

            <p className="mt-4 text-lg text-zinc-400">
              Discover more guides in the {guide.category} category.
            </p>

          </div>

          {relatedGuides.length === 0 ? (

            <div className="rounded-[36px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-20 text-center">

              <h3 className="text-4xl font-black">
                No Related Guides
              </h3>

              <p className="mt-5 text-zinc-400">
                More guides will appear here as the database grows.
              </p>

            </div>

          ) : (

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

              {relatedGuides.map((guide) => (

                <GuideCard
                  key={guide.id}
                  guide={guide}
                />

              ))}

            </div>

          )}

        </section>

      </section>

    </main>
  );
}

function Info({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-6">

      <div className="flex items-center gap-3 text-pink-400">

        {icon}

        <span className="text-xs font-bold uppercase tracking-[0.25em]">
          {label}
        </span>

      </div>

      <h3 className="mt-4 text-2xl font-black text-white">
        {value}
      </h3>

    </div>
  );
}