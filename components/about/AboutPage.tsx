import Link from "next/link";
import {
  ShieldCheck,
  Rocket,
  Users,
  Smartphone,
  ArrowRight,
} from "lucide-react";

import PageContainer from "../shared/PageContainer";
import PageHero from "../shared/PageHero";
import Footer from "../shared/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#040404] text-white">

      <PageContainer>

        <PageHero
          badge="About GTA Companion"
          title="Built For GTA Players"
          description="GTA Companion is an independent platform dedicated to organizing official Rockstar Games information into one beautiful, fast and trusted experience."
        />

        {/* Mission */}

        <section className="grid gap-8 lg:grid-cols-3">

          <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-[#101014] to-[#09090B] p-10">

            <ShieldCheck
              size={36}
              className="text-pink-400"
            />

            <h2 className="mt-8 text-3xl font-black">
              Official First
            </h2>

            <p className="mt-6 leading-9 text-zinc-400">
              Every trailer, screenshot, artwork and announcement is sourced
              directly from Rockstar Games. We don't fill the database with
              rumours or speculative content.
            </p>

          </div>

          <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-[#101014] to-[#09090B] p-10">

            <Users
              size={36}
              className="text-pink-400"
            />

            <h2 className="mt-8 text-3xl font-black">
              Built For Players
            </h2>

            <p className="mt-6 leading-9 text-zinc-400">
              Everything is designed to help players quickly find official GTA
              VI information without searching dozens of different websites.
            </p>

          </div>

          <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-[#101014] to-[#09090B] p-10">

            <Rocket
              size={36}
              className="text-pink-400"
            />

            <h2 className="mt-8 text-3xl font-black">
              Growing With GTA VI
            </h2>

            <p className="mt-6 leading-9 text-zinc-400">
              As Rockstar reveals new information, GTA Companion expands with
              additional databases, guides, maps, tools and companion features.
            </p>

          </div>

        </section>

        {/* Vision */}

        <section className="mt-24 rounded-[40px] border border-white/10 bg-gradient-to-br from-[#111114] via-[#09090B] to-black p-14 lg:p-20">

          <div className="max-w-4xl">

            <div className="text-xs font-black uppercase tracking-[0.45em] text-pink-400">
              OUR VISION
            </div>

            <h2 className="mt-6 text-6xl font-black tracking-[-0.05em]">
              The Ultimate GTA Companion
            </h2>

            <p className="mt-8 text-xl leading-10 text-zinc-400">
              GTA Companion is being built to become the most complete companion
              platform for Grand Theft Auto players. Our long-term vision is to
              combine official Rockstar information with interactive maps,
              collectible tracking, progress tools, mobile features, account
              syncing and much more—all in one premium experience.
            </p>

          </div>

        </section>

        {/* Future */}

        <section className="mt-24 grid gap-8 lg:grid-cols-2">

          <div className="rounded-[36px] border border-white/10 bg-[#0B0B0D] p-10">

            <div className="text-xs font-black uppercase tracking-[0.35em] text-pink-400">
              COMING SOON
            </div>

            <ul className="mt-8 space-y-5 text-lg text-zinc-300">

              <li>• Interactive GTA VI Map</li>

              <li>• Collectible Tracker</li>

              <li>• Mission Walkthroughs</li>

              <li>• Vehicle Database Expansion</li>

              <li>• Character Profiles</li>

              <li>• Mobile Companion App</li>

            </ul>

          </div>

          <div className="rounded-[36px] border border-white/10 bg-[#0B0B0D] p-10">

            <Smartphone
              size={42}
              className="text-pink-400"
            />

            <h2 className="mt-8 text-4xl font-black">
              Join Early
            </h2>

            <p className="mt-6 text-lg leading-9 text-zinc-400">
              Create your free account today and be among the first players to
              receive updates as GTA Companion grows alongside Grand Theft Auto
              VI.
            </p>

            <Link
              href="/register"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 px-9 py-5 font-bold transition hover:scale-[1.03]"
            >
              Join Free

              <ArrowRight size={18} />

            </Link>

          </div>

        </section>

      </PageContainer>

      <Footer />

    </main>
  );
}