import Image from "@/components/SafeImage";
import { notFound } from "next/navigation";
import {
  BadgeCheck,
  Calendar,
  User,
} from "lucide-react";

import Breadcrumb from "@/components/Breadcrumb";
import CharacterCard from "@/components/CharacterCard";

import { characters } from "@/data/characters";
import { IMAGE_CREDIT } from "@/lib/site";

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

  const relatedCharacters = characters
    .filter(
      (c) =>
        c.role === character.role &&
        c.slug !== character.slug
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
              label: "Characters",
              href: "/characters",
            },
            {
              label: character.name,
            },
          ]}
        />

        <div className="mt-12 grid gap-14 xl:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">

          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black">

            <div className="relative aspect-video">

              <Image
                src={character.image}
                alt={character.name}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 42vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-200">
                {IMAGE_CREDIT}
              </p>

            </div>

          </div>

          <div>

            <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-pink-400">
              {character.role}
            </span>

            <h1 className="mt-8 text-6xl font-black tracking-[-0.03em]">
              {character.name}
            </h1>

            <p className="mt-8 max-w-4xl text-xl leading-9 text-zinc-400">
              {character.description}
            </p>
            <a
              href="https://www.rockstargames.com/VI"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-pink-300 hover:text-pink-200"
            >
              Source: Rockstar Games — Grand Theft Auto VI
            </a>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">

              <Info
                icon={<BadgeCheck size={18} />}
                label="Status"
                value={character.status}
              />

              <Info
                icon={<Calendar size={18} />}
                label="First Appearance"
                value={character.firstAppearance}
              />

              <Info
                icon={<User size={18} />}
                label="Role"
                value={character.role}
              />

              <Info
                icon={<BadgeCheck size={18} />}
                label="Source"
                value="Rockstar Games"
              />

            </div>

          </div>

        </div>

        <section className="mt-28">

          <div className="mb-12">

            <div className="text-xs font-black uppercase tracking-[0.35em] text-pink-400">
              Related Characters
            </div>

            <h2 className="mt-4 text-5xl font-black">
              Similar Characters
            </h2>

            <p className="mt-4 text-lg text-zinc-400">
              More officially revealed GTA VI characters.
            </p>

          </div>

          {relatedCharacters.length === 0 ? (

            <div className="rounded-[36px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-20 text-center">

              <h3 className="text-4xl font-black">
                No Related Characters
              </h3>

              <p className="mt-5 text-zinc-400">
                Additional characters will appear here as Rockstar reveals more information.
              </p>

            </div>

          ) : (

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

              {relatedCharacters.map((character) => (

                <CharacterCard
                  key={character.id}
                  character={character}
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