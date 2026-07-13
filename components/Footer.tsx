import Link from "next/link";
import {
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto max-w-[1700px] px-8 py-16">

        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.4fr]">

          {/* Logo */}

          <div>

            <Link href="/" className="inline-flex items-center">

              <span className="text-4xl font-black text-white">
                GTA
              </span>

              <span className="ml-2 bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-500 bg-clip-text text-4xl font-black text-transparent">
                Companion
              </span>

              <span className="ml-2 text-[42px] font-black italic text-pink-400">
                VI
              </span>

            </Link>

            <p className="mt-6 max-w-[360px] text-lg leading-8 text-zinc-400">
              The ultimate GTA VI companion and database.
              Built for players. By fans.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-lg font-bold text-white">
              Quick Links
            </h3>

            <div className="space-y-4">

              <Link href="/" className="block text-zinc-400 hover:text-pink-400">
                Home
              </Link>

              <Link href="/map" className="block text-zinc-400 hover:text-pink-400">
                Map
              </Link>

              <Link href="/guides" className="block text-zinc-400 hover:text-pink-400">
                Guides
              </Link>

              <Link href="/news" className="block text-zinc-400 hover:text-pink-400">
                News
              </Link>

            </div>

          </div>

          {/* Explore */}

          <div>

            <h3 className="mb-6 text-lg font-bold text-white">
              Explore
            </h3>

            <div className="space-y-4">

              <Link href="/vehicles" className="block text-zinc-400 hover:text-pink-400">
                Vehicles
              </Link>

              <Link href="/characters" className="block text-zinc-400 hover:text-pink-400">
                Characters
              </Link>

              <Link href="/locations" className="block text-zinc-400 hover:text-pink-400">
                Locations
              </Link>

              <Link href="/businesses" className="block text-zinc-400 hover:text-pink-400">
                Businesses
              </Link>

              <Link href="/weapons" className="block text-zinc-400 hover:text-pink-400">
                Weapons
              </Link>

              <Link href="/animals" className="block text-zinc-400 hover:text-pink-400">
                Animals
              </Link>

              <Link href="/activities" className="block text-zinc-400 hover:text-pink-400">
                Activities
              </Link>

              <Link href="/brands" className="block text-zinc-400 hover:text-pink-400">
                Brands
              </Link>

            </div>

          </div>

          {/* Newsletter */}

          <div>

            <h3 className="mb-6 text-lg font-bold text-white">
              Stay Updated
            </h3>

            <p className="mb-6 text-zinc-400">
              Get the latest GTA VI news and updates.
            </p>

            <div className="flex gap-3">

              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 rounded-xl border border-white/10 bg-[#0B0B0D] px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-pink-500"
              />

              <button className="rounded-xl bg-gradient-to-r from-pink-500 to-fuchsia-500 px-6 font-semibold text-white transition hover:brightness-110">
                Subscribe
              </button>

            </div>

            <div className="mt-8 flex gap-6">

              <a
                href="#"
                className="text-zinc-400 transition hover:text-white"
              >
                <MessageCircle size={26} />
              </a>

              <a
                href="#"
                className="text-zinc-400 transition hover:text-white"
              >
                𝕏
              </a>

              <a
                href="#"
                className="text-zinc-400 transition hover:text-white"
              >
                <span className="text-xl font-bold">▶</span>
              </a>

              <a
                href="#"
                className="text-zinc-400 transition hover:text-white"
              >
                <span className="text-xl font-bold">◎</span>
              </a>

            </div>

          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 lg:flex-row">

          <div>
            © 2025 GTA Companion. Not affiliated with Rockstar Games.
          </div>

          <div className="flex gap-8">

            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-white">
              Terms of Use
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}