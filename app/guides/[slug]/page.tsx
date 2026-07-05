import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { guides } from "@/data/guides";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;

  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-white">
      <section className="mx-auto max-w-5xl px-6 py-20">

        <Link
          href="/guides"
          className="inline-flex items-center rounded-full border border-zinc-700 px-5 py-2 text-sm transition hover:border-pink-500 hover:text-pink-400"
        >
          ← Back to Guides
        </Link>

        <div className="relative mt-10 h-80 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">

          <Image
            src={guide.image}
            alt={guide.title}
            fill
            className="object-cover"
          />

        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">

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

        <h1 className="mt-8 text-6xl font-extrabold">
          {guide.title}
        </h1>

        <p className="mt-6 text-xl leading-8 text-zinc-400">
          {guide.description}
        </p>

      </section>
    </main>
  );
}