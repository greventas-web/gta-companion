import Link from "next/link";
import {
  ArrowRight,
  Bell,
  Database,
  ShieldCheck,
} from "lucide-react";

import PageContainer from "./PageContainer";
import PageHero from "./PageHero";

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
          badge="Unofficial fan database"
          title={title}
          description={description}
        />

        <section className="relative overflow-hidden rounded-[42px] border border-white/10 bg-gradient-to-br from-[#121216] via-[#0B0B0D] to-black p-16 shadow-[0_35px_120px_rgba(0,0,0,.35)] lg:p-24">

          <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[180px]" />

          <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-pink-500/10 blur-[180px]" />

          <div className="relative mx-auto max-w-5xl text-center">

            <div className="inline-flex items-center gap-3 rounded-full border border-pink-500/30 bg-pink-500/10 px-6 py-3 text-[11px] font-black uppercase tracking-[0.45em] text-pink-400 backdrop-blur-xl">

              <ShieldCheck size={15} />

              Fan-written notes

            </div>

            <h2 className="mt-8 text-5xl font-black tracking-[-0.05em] lg:text-7xl">
              This Database Is
              <br />
              Growing
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-10 text-zinc-400">
              GTA Companion only publishes information officially confirmed by
              Rockstar Games. We intentionally avoid leaks and speculation,
              expanding the database only when Rockstar releases new trailers,
              screenshots, artwork or announcements.
            </p>

            <div className="mt-16 grid gap-6 md:grid-cols-3">

              <FeatureCard
                icon={<Database size={34} />}
                title="Official Only"
                text="Every page is built using verified Rockstar information."
              />

              <FeatureCard
                icon={<Bell size={34} />}
                title="Always Updated"
                text="New content is added whenever Rockstar reveals something new."
              />

              <FeatureCard
                icon={<ShieldCheck size={34} />}
                title="Trusted Source"
                text="Designed to become the most complete official GTA companion."
              />

            </div>

            <Link
              href="/register"
              className="mt-16 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 px-10 py-5 text-lg font-bold transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(236,72,153,.35)]"
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
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/30 hover:bg-white/[0.06]">

      <div className="flex justify-center text-pink-400">
        {icon}
      </div>

      <h3 className="mt-6 text-2xl font-black">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-zinc-400">
        {text}
      </p>

    </div>
  );
}