import Link from "next/link";
import {
  Bell,
  ArrowRight,
  ShieldCheck,
  Database,
} from "lucide-react";

import PageContainer from "./PageContainer";
import PageHero from "./PageHero";
import Footer from "./Footer";

type Props = {
  title: string;
  description: string;
};

export default function ComingSoonPage({
  title,
  description,
}: Props) {
  return (
    <main className="min-h-screen bg-[#040404] text-white">

      <PageContainer>

        <PageHero
          badge="Official GTA VI Database"
          title={title}
          description={description}
        />

        <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#111114] via-[#09090B] to-black p-16 lg:p-24">

          <div className="absolute right-[-140px] top-[-140px] h-[360px] w-[360px] rounded-full bg-pink-500/20 blur-[160px]" />

          <div className="absolute left-[-140px] bottom-[-140px] h-[360px] w-[360px] rounded-full bg-violet-500/20 blur-[160px]" />

          <div className="relative mx-auto max-w-5xl text-center">

            <div className="inline-flex items-center gap-3 rounded-full border border-pink-500/30 bg-pink-500/10 px-6 py-3 text-[11px] font-black uppercase tracking-[0.45em] text-pink-400">

              <ShieldCheck size={15} />

              OFFICIAL ROCKSTAR INFORMATION

            </div>

            <h2 className="mt-8 text-5xl font-black tracking-[-0.05em] lg:text-7xl">

              This Database Is

              <br />

              Growing

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-10 text-zinc-400">

              GTA Companion only publishes information officially confirmed by
              Rockstar Games. Rather than filling the database with rumours or
              speculative content, we expand it only when new trailers,
              screenshots, artwork or announcements are released.

            </p>

            <div className="mt-14 grid gap-6 md:grid-cols-3">

              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8">

                <Database
                  size={34}
                  className="mx-auto text-pink-400"
                />

                <h3 className="mt-6 text-2xl font-black">
                  Official Only
                </h3>

                <p className="mt-4 text-zinc-400">
                  No leaks. No speculation. Only confirmed Rockstar content.
                </p>

              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8">

                <Bell
                  size={34}
                  className="mx-auto text-pink-400"
                />

                <h3 className="mt-6 text-2xl font-black">
                  Stay Updated
                </h3>

                <p className="mt-4 text-zinc-400">
                  We'll expand this page whenever Rockstar reveals something new.
                </p>

              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8">

                <ShieldCheck
                  size={34}
                  className="mx-auto text-pink-400"
                />

                <h3 className="mt-6 text-2xl font-black">
                  Trusted Source
                </h3>

                <p className="mt-4 text-zinc-400">
                  Every entry is backed by official Rockstar Games material.
                </p>

              </div>

            </div>

            <Link
              href="/register"
              className="mt-14 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 px-10 py-5 text-lg font-bold transition hover:scale-[1.03]"
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