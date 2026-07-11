import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      {/* Ambient */}

      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-20%] h-[550px] w-[550px] rounded-full bg-pink-500/10 blur-[200px]" />

        <div className="absolute right-[-10%] bottom-[-20%] h-[550px] w-[550px] rounded-full bg-violet-500/10 blur-[220px]" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      </div>

      <div className="relative mx-auto max-w-[1750px] px-8 py-32">
        <div className="grid gap-20 lg:grid-cols-[2fr_1fr_1fr_1.5fr]">
          {/* Brand */}

          <div>
            <h2 className="text-[56px] font-black tracking-[-0.05em]">
              <span className="text-white">
                GTA
              </span>

              <span className="ml-2 bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
                Companion
              </span>
            </h2>

            <p className="mt-8 max-w-md text-lg leading-9 text-zinc-400">
              The premium companion platform for Grand Theft Auto VI.
              Browse vehicles, characters, businesses, locations,
              guides, collectibles and everything officially revealed
              by Rockstar Games.
            </p>
          </div>

          {/* Explore */}

          <div>
            <h3 className="mb-8 text-xl font-bold text-white">
              Explore
            </h3>

            <div className="space-y-5">
              <Link href="/vehicles" className="block text-zinc-400 transition hover:text-pink-400">
                Vehicles
              </Link>

              <Link href="/characters" className="block text-zinc-400 transition hover:text-pink-400">
                Characters
              </Link>

              <Link href="/locations" className="block text-zinc-400 transition hover:text-pink-400">
                Locations
              </Link>

              <Link href="/businesses" className="block text-zinc-400 transition hover:text-pink-400">
                Businesses
              </Link>
            </div>
          </div>

          {/* Database */}

          <div>
            <h3 className="mb-8 text-xl font-bold text-white">
              Database
            </h3>

            <div className="space-y-5">
              <Link href="/weapons" className="block text-zinc-400 transition hover:text-pink-400">
                Weapons
              </Link>

              <Link href="/animals" className="block text-zinc-400 transition hover:text-pink-400">
                Animals
              </Link>

              <Link href="/activities" className="block text-zinc-400 transition hover:text-pink-400">
                Activities
              </Link>

              <Link href="/news" className="block text-zinc-400 transition hover:text-pink-400">
                News
              </Link>
            </div>
          </div>

          {/* Newsletter */}

          <div>
            <h3 className="mb-8 text-xl font-bold text-white">
              Stay Updated
            </h3>

            <p className="mb-6 leading-8 text-zinc-400">
              Receive official Rockstar announcements,
              GTA Companion updates and new database additions.
            </p>

            <div className="flex gap-3">
              <input
                placeholder="Email address"
                className="flex-1 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none backdrop-blur-xl transition focus:border-pink-500/40"
              />

              <button className="rounded-2xl bg-gradient-to-r from-pink-500 to-fuchsia-500 px-8 font-semibold text-white shadow-[0_12px_35px_rgba(236,72,153,.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_55px_rgba(236,72,153,.42)]">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-zinc-500 lg:flex-row lg:items-center lg:justify-between">
          <p>
            © 2026 GTA Companion. Grand Theft Auto and Rockstar Games are trademarks of Rockstar Games.
          </p>

          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="transition hover:text-pink-400"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-pink-400"
            >
              Terms
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-pink-400"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}