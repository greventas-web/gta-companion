import Link from "next/link";
import {
  ArrowRight,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";

import PageContainer from "../shared/PageContainer";
import PageHero from "../shared/PageHero";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#040404] text-white">
      <PageContainer>
        <PageHero
          badge="About GTA Companion"
          title="Built For GTA Players"
          description="Everything you need for GTA 6. GTA Companion is an unofficial fan site, not affiliated with Rockstar Games or Take-Two. The notes and pictures are made for this site."
        />

        <section className="grid gap-8 lg:grid-cols-3">
          <FeatureCard
            icon={<ShieldCheck size={36} />}
            title="Original art"
            description="Vehicle, character, and location pictures on this site are original illustrations. Rockstar's own images are not hosted here."
          />

          <FeatureCard
            icon={<Users size={36} />}
            title="Built For Players"
            description="Every page is designed to help players find accurate GTA VI information quickly through a premium experience."
          />

          <FeatureCard
            icon={<Rocket size={36} />}
            title="Growing With GTA VI"
            description="As Rockstar reveals more, GTA Companion grows with new databases, maps, guides and official content."
          />
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
              platform for Grand Theft Auto players by organizing official
              Rockstar Games information into a fast, beautiful and
              easy-to-use experience. As Rockstar reveals new content, GTA
              Companion will continue to expand with new databases, maps,
              guides and tools.
            </p>
          </div>
        </section>

        <section className="mt-24 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[38px] border border-white/10 bg-gradient-to-br from-[#121216] to-black p-10">
            <div className="flex items-center gap-3 text-pink-400">
              <Sparkles size={20} />

              <span className="text-xs font-black uppercase tracking-[0.35em]">
                Coming Soon
              </span>
            </div>

            <ul className="mt-8 space-y-5 text-lg leading-8 text-zinc-300">
              <li>• More original illustrations</li>
              <li>• Fan notes after launch</li>
              <li>• Guides written for this site</li>
              <li>• A phone-friendly version of this website</li>
            </ul>
          </div>

          <div className="rounded-[38px] border border-white/10 bg-gradient-to-br from-[#121216] to-black p-10">
            <Smartphone
              size={42}
              className="text-pink-400"
            />

            <h2 className="mt-8 text-4xl font-black">
              Join Early
            </h2>

            <p className="mt-6 text-lg leading-9 text-zinc-400">
              Create your free account today and receive updates as GTA
              Companion continues to expand alongside Grand Theft Auto VI.
            </p>

            <Link
              href="/register"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 px-9 py-5 font-bold transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(236,72,153,.35)]"
            >
              Join Free

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