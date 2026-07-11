import Image from "next/image";
import { notFound } from "next/navigation";

import Breadcrumb from "@/components/Breadcrumb";

import { characters } from "@/data/characters";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CharacterPage({
  params,
}: Props) {
  const { slug } = await params;

  const character = characters.find(
    (c) => c.slug === slug
  );

  if (!character) {
    notFound();
  }

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
              label: "Characters",
              href: "/characters",
            },
            {
              label: character.name,
            },
          ]}
        />

        <div className="mt-12 grid gap-14 xl:grid-cols-[42%_58%]">

          {/* Character Image */}

          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black">

            <div className="relative aspect-[3/4]">

              <Image
                src={character.image}
                alt={character.name}
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            </div>

          </div>

          {/* Information */}

          <div>

            <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-pink-400">

              {character.role}

            </span>

            <h1 className="mt-8 text-6xl font-black tracking-tight">

              {character.name}

            </h1>

            <p className="mt-8 text-xl leading-9 text-zinc-400">

              {character.description}

            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">

              <Info
                label="Status"
                value={character.status}
              />

              <Info
                label="First Appearance"
                value={character.firstAppearance}
              />

            </div>

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