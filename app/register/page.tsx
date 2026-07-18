import Link from "next/link";
import {
  Check,
  Sparkles,
  Bell,
  Smartphone,
  Map,
  Trophy,
} from "lucide-react";

export default function RegisterPage() {
  const benefits = [
    "Official Rockstar News",
    "Database Updates",
    "Interactive GTA VI Map",
    "Mobile App Access",
    "Track Your Progress",
    "Exclusive Giveaways",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#040404] text-white">

      <div className="absolute left-[-220px] top-[-120px] h-[620px] w-[620px] rounded-full bg-pink-500/15 blur-[180px]" />

      <div className="absolute right-[-220px] bottom-[-120px] h-[620px] w-[620px] rounded-full bg-violet-500/15 blur-[180px]" />

      <section className="relative mx-auto max-w-[1700px] px-8 pb-32 pt-36">

        <div className="grid gap-16 xl:grid-cols-[1fr_560px]">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-3 rounded-full border border-pink-500/30 bg-pink-500/10 px-6 py-3 text-[11px] font-black uppercase tracking-[0.4em] text-pink-400">
              <Sparkles size={14} />
              PRE-REGISTER TODAY
            </div>

            <h1 className="mt-8 text-7xl font-black leading-[0.92] tracking-[-0.05em]">
              Join
              <br />
              GTA Companion
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-10 text-zinc-400">
              Create your free account and be among the first players ready for
              Grand Theft Auto VI. Receive official Rockstar updates, database
              expansions, mobile app access and future companion tools.
            </p>

            <div className="mt-14 grid gap-5 sm:grid-cols-2">

              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-500/15">
                    <Check
                      size={20}
                      className="text-pink-400"
                    />
                  </div>

                  <span className="font-semibold">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <div className="mt-14 flex flex-wrap gap-6">

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4">
                <Bell className="text-pink-400" />
                Notifications
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4">
                <Map className="text-pink-400" />
                Interactive Map
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4">
                <Smartphone className="text-pink-400" />
                Mobile App
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4">
                <Trophy className="text-pink-400" />
                Early Features
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-[#121216] via-[#0B0B0D] to-black p-10 shadow-[0_40px_120px_rgba(0,0,0,.45)]">

            <div className="mb-8">

              <div className="text-xs font-black uppercase tracking-[0.35em] text-pink-400">
                CREATE ACCOUNT
              </div>

              <h2 className="mt-4 text-5xl font-black">
                Join Free
              </h2>

            </div>

            <div className="space-y-6">

              <input
                type="text"
                placeholder="Username"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 outline-none transition focus:border-pink-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 outline-none transition focus:border-pink-500"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 outline-none transition focus:border-pink-500"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 outline-none transition focus:border-pink-500"
              />

              <button className="w-full rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 py-5 text-lg font-bold transition hover:scale-[1.02]">
                Create Free Account
              </button>

            </div>

            <p className="mt-8 text-center text-zinc-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-pink-400 hover:text-pink-300"
              >
                Sign In
              </Link>
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}