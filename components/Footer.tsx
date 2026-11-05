import Link from "next/link";

import SubscribeForm from "@/components/SubscribeForm";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto max-w-[1700px] px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.4fr]">
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
              The ultimate GTA VI companion and database built around
              officially revealed Rockstar Games information.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold text-white">
              Quick Links
            </h3>

            <div className="space-y-4">
              <Link href="/" className="block text-zinc-400 transition hover:text-pink-400">
                Home
              </Link>

              <Link href="/news" className="block text-zinc-400 transition hover:text-pink-400">
                News
              </Link>

              <Link href="/media" className="block text-zinc-400 transition hover:text-pink-400">
                Media
              </Link>

              <Link href="/timeline" className="block text-zinc-400 transition hover:text-pink-400">
                Timeline
              </Link>

              <Link href="/about" className="block text-zinc-400 transition hover:text-pink-400">
                About
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold text-white">
              Explore
            </h3>

            <div className="space-y-4">
              <Link href="/vehicles" className="block text-zinc-400 transition hover:text-pink-400">
                Vehicles
              </Link>

              <Link href="/characters" className="block text-zinc-400 transition hover:text-pink-400">
                Characters
              </Link>

              <Link href="/locations" className="block text-zinc-400 transition hover:text-pink-400">
                Locations
              </Link>

              <Link href="/guides" className="block text-zinc-400 transition hover:text-pink-400">
                Guides
              </Link>

              <Link href="/faq" className="block text-zinc-400 transition hover:text-pink-400">
                FAQ
              </Link>

              <Link href="/contact" className="block text-zinc-400 transition hover:text-pink-400">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold text-white">
              Stay Updated
            </h3>

            <p className="mb-6 text-zinc-400">
              Get the latest official GTA VI news and updates.
            </p>

            <SubscribeForm />
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 lg:flex-row">
          <div>
            © 2026 GTA Companion. Not affiliated with Rockstar Games.
          </div>

          <div className="flex gap-8">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/cookies" className="transition hover:text-white">
              Cookie Policy
            </Link>

            <Link href="/terms" className="transition hover:text-white">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}