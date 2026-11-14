"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Lock,
  Bell,
  Smartphone,
  Sparkles,
  Shield,
  ArrowRight,
} from "lucide-react";

import { loginUser } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      await loginUser(email, password);

      router.push("/dashboard");
    } catch (err: unknown) {
      const code =
        typeof err === "object" && err !== null && "code" in err
          ? String(err.code)
          : "";
      switch (code) {
        case "auth/invalid-credential":
        case "auth/wrong-password":
        case "auth/user-not-found":
          setError("Invalid email or password.");
          break;

        case "auth/too-many-requests":
          setError(
            "Too many failed attempts. Please try again later."
          );
          break;

        default:
          setError("Unable to sign in.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#040404] text-white">
      <section className="relative mx-auto max-w-[1700px] px-4 pb-16 pt-32 sm:px-8">
        <div className="grid gap-10 xl:grid-cols-[1fr_560px] xl:gap-16">

          <div className="order-2 hidden xl:block">
            <div className="inline-flex items-center gap-3 rounded-full border border-pink-500/30 bg-pink-500/10 px-6 py-3 text-[11px] font-black uppercase tracking-[0.45em] text-pink-400">
              <Sparkles size={14} />
              WELCOME BACK
            </div>

            <p className="mt-8 text-6xl font-black leading-[0.92] tracking-[-0.03em]">
              Sign In To
              <br />
              GTA Companion
            </p>

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
                Fast Cross-Platform Access
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

          {/* RIGHT */}

          <div className="order-1 rounded-[32px] border border-white/10 bg-[#0B0B0D] p-6 sm:p-10 xl:order-2">

            <div className="mb-8">
              <div className="text-xs font-black uppercase tracking-[0.35em] text-pink-400">
                ACCOUNT LOGIN
              </div>

              <h1 className="mt-4 text-4xl font-black sm:text-5xl">
                Welcome Back
              </h1>
            </div>

            <form
              onSubmit={handleLogin}
              className="space-y-6"
            >
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 outline-none transition focus:border-pink-500"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 outline-none transition focus:border-pink-500"
              />

              {error && (
                <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-300">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 py-5 text-lg font-bold transition hover:scale-[1.02] disabled:opacity-60"
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </form>

            <div className="mt-8 flex items-center justify-between text-sm">
              <Link
                href="#"
                className="text-zinc-400 hover:text-pink-400"
              >
                Forgot password?
              </Link>

              <Link
                href="/register"
                className="flex items-center gap-2 font-semibold text-pink-400 hover:text-pink-300"
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