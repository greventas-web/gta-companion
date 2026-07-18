import Link from "next/link";
import {
  Lock,
  Bell,
  Smartphone,
  Sparkles,
  Shield,
  ArrowRight,
} from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#040404] text-white">

      <div className="absolute left-[-220px] top-[-120px] h-[620px] w-[620px] rounded-full bg-pink-500/15 blur-[180px]" />

      <div className="absolute right-[-220px] bottom-[-120px] h-[620px] w-[620px] rounded-full bg-violet-500/15 blur-[180px]" />

      <section className="relative mx-auto max-w-[1700px] px-8 pb-32 pt-36">

        <div className="grid gap-16 xl:grid-cols-[1fr_560px]">

          {/* Left */}

          <div>

            <div className="inline-flex items-center gap-3 rounded-full border border-pink-500/30 bg-pink-500/10 px-6 py-3 text-[11px] font-black uppercase tracking-[0.45em] text-pink-400">

              <Sparkles size={14} />

              WELCOME BACK

            </div>

            <h1 className="mt-8 text-7xl font-black leading-[0.92] tracking-[-0.05em]">

              Sign In To

              <br />

              GTA Companion

            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-10 text-zinc-400">

              Access your GTA Companion account to stay updated with official
              Rockstar Games news, save your favourite content and prepare for
              Grand Theft Auto VI.

            </p>

            <div className="mt-14 grid gap-5 sm:grid-cols-2">

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5">

                <Bell className="text-pink-400" />

                Official News Alerts

              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5">

                <Smartphone className="text-pink-400" />

                Mobile App Sync

              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5">

                <Shield className="text-pink-400" />

                Secure Account

              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5">

                <Lock className="text-pink-400" />

                Saved Progress

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-[#121216] via-[#0B0B0D] to-black p-10 shadow-[0_40px_120px_rgba(0,0,0,.45)]">

            <div className="mb-8">

              <div className="text-xs font-black uppercase tracking-[0.35em] text-pink-400">

                ACCOUNT LOGIN

              </div>

              <h2 className="mt-4 text-5xl font-black">

                Welcome Back

              </h2>

            </div>

            <div className="space-y-6">

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

              <button className="w-full rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 py-5 text-lg font-bold transition hover:scale-[1.02]">

                Sign In

              </button>

            </div>

            <div className="mt-8 flex items-center justify-between text-sm">

              <Link
                href="#"
                className="text-zinc-400 transition hover:text-pink-400"
              >
                Forgot password?
              </Link>

              <Link
                href="/register"
                className="flex items-center gap-2 font-semibold text-pink-400 transition hover:text-pink-300"
              >
                Create Account
                <ArrowRight size={16} />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}