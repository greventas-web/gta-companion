import Link from "next/link";

import SiteLogo from "@/components/SiteLogo";
import SubscribeForm from "@/components/SubscribeForm";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto max-w-[1700px] px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.4fr]">
          <div>
            <Link href="/" aria-label="GTA Companion" className="inline-flex items-center">
              <SiteLogo large />
            </Link>

            <p className="mt-6 max-w-[360px] text-lg leading-8 text-zinc-400">
              An unofficial fan-made database. Grand Theft Auto, Rockstar
              Games, and Take-Two are trademarks of their owners.
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

              <Link href="/launch" className="block text-zinc-400 transition hover:text-pink-400">
                Editions
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
              Get fan-site updates. This is not a Rockstar mailing list.
            </p>

            <SubscribeForm />
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 lg:flex-row">
          <div>
            © 2026 GTA Companion. Unofficial fan project. Not affiliated with, endorsed, or connected to Rockstar Games or Take-Two Interactive.
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