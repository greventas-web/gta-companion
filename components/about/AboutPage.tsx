import Link from "next/link";
import {
  ArrowRight,
  Rocket,
  ShieldCheck,
  Smartphone,
  Users,
} from "lucide-react";

import PageContainer from "../shared/PageContainer";
import PageHero from "../shared/PageHero";

const HOW_WE_WORK = [
  {
    title: "What this site is",
    paragraphs: [
      "GTA Companion is an independent, unofficial fan project for Grand Theft Auto VI. It is run by a small team of players. It is not made, endorsed or checked by Rockstar Games or Take-Two Interactive.",
      "The site collects what players keep asking while they play: where a shop, safe or collectible is, which code opens a lock, what a vehicle or weapon costs, and what the next story step is. Each page answers one of those questions in plain words, with the details that matter on screen.",
    ],
  },
  {
    title: "How we check things",
    paragraphs: [
      "We play the game and record our own footage. Codes, locations, prices and steps are checked in-game before they go on a page, and the map pins are placed from what we see, not copied from another site.",
      "If we cannot confirm something, we leave it out instead of guessing. Story guides avoid spoilers past the early chapters, and spoiler-heavy details sit behind a reveal.",
    ],
  },
  {
    title: "Images and credits",
    paragraphs: [
      "Screenshots, artwork and trailer stills are official Rockstar Games material. We use them to illustrate our own notes and commentary, and credit them as Images: Rockstar Games. Pages marked as artwork are our own illustrations, not game screenshots.",
      "If you are a rights holder and want an image changed or removed, write to us and we will respond.",
    ],
  },
  {
    title: "Corrections, ads and support",
    paragraphs: [
      "Found a wrong code, a missing place or a typo? Use the Contact page. We fix confirmed errors and note updates on the Updates page.",
      "The site is kept running by optional tips on Ko-fi and may show advertising. Ads are provided by third parties, are labelled as advertisements, and do not change what we write. See the Privacy Policy for how cookies and ads work.",
    ],
  },
] as const;

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#040404] text-white">
      <PageContainer>
        <PageHero
          badge="About GTA Companion"
          title="Built For GTA Players"
          description="Everything you need for GTA 6. GTA Companion is an unofficial fan site, not affiliated with Rockstar Games or Take-Two. The notes are written for this site. Screenshots, artwork, and trailers are official Rockstar Games material, used for commentary and credited 'Images: Rockstar Games'."
        />

        <section className="grid gap-8 lg:grid-cols-3">
          <FeatureCard
            icon={<ShieldCheck size={36} />}
            title="Spoiler-safe"
            description="Story guides stop at the early chapters, so you can look up a code or a place without reading ahead."
          />

          <FeatureCard
            icon={<Users size={36} />}
            title="Built For Players"
            description="Each page answers one question players ask while they play, in plain words, with the details that matter on screen."
          />

          <FeatureCard
            icon={<Rocket size={36} />}
            title="Updated After Launch"
            description="Grand Theft Auto VI is out, and the site keeps growing with new guides, map pins and checked details as we play."
          />
        </section>


        <section className="mt-24 grid gap-8 lg:grid-cols-2">
          {HOW_WE_WORK.map((item) => (
            <div
              key={item.title}
              className="rounded-[38px] border border-white/10 bg-gradient-to-br from-[#121216] via-[#0B0B0D] to-black p-10"
            >
              <h2 className="text-3xl font-black">{item.title}</h2>
              {item.paragraphs.map((text) => (
                <p key={text} className="mt-5 leading-9 text-zinc-400">
                  {text}
                </p>
              ))}
            </div>
          ))}
        </section>

        <section className="relative mt-24 overflow-hidden rounded-[42px] border border-white/10 bg-gradient-to-br from-[#121216] via-[#0B0B0D] to-black p-14 lg:p-20">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-pink-500/10 blur-[160px]" />

          <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[160px]" />

          <div className="relative max-w-4xl">
            <div className="text-xs font-black uppercase tracking-[0.45em] text-pink-400">
              Our Vision
            </div>

            <h2 className="mt-6 text-6xl font-black tracking-[-0.03em]">
              The Ultimate GTA Companion
            </h2>

            <p className="mt-8 text-xl leading-10 text-zinc-400">
              Our long-term vision is to become the most trusted companion
              platform for Grand Theft Auto players by organizing what is
              actually in the game into a fast, easy-to-use experience.
              We add to it as we play, with new guides, map pins and tools.
            </p>
          </div>
        </section>

        <section className="mt-24">
          <div className="rounded-[38px] border border-white/10 bg-gradient-to-br from-[#121216] to-black p-10">
            <Smartphone
              size={42}
              className="text-pink-400"
            />

            <h2 className="mt-8 text-4xl font-black">
              Create an account
            </h2>

            <p className="mt-6 text-lg leading-9 text-zinc-400">
              An account lets you save favorites, tick off missions and
              collectibles, and get fan-site updates by email.
            </p>

            <Link
              href="/register"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 px-9 py-5 font-bold transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(236,72,153,.35)]"
            >
              Join

              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </PageContainer>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[38px] border border-white/10 bg-gradient-to-br from-[#121216] via-[#0B0B0D] to-black p-10 transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/30 hover:shadow-[0_35px_90px_rgba(236,72,153,.18)]">
      <div className="text-pink-400">{icon}</div>

      <h2 className="mt-8 text-3xl font-black">
        {title}
      </h2>

      <p className="mt-6 leading-9 text-zinc-400">
        {description}
      </p>
    </div>
  );
}