import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-black">

      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-16 lg:grid-cols-[2fr_1fr_1fr_1.5fr]">

          {/* Brand */}

          <div>

            <h2 className="text-4xl font-black">
              GTA <span className="text-pink-400">Companion</span>
            </h2>

            <p className="mt-6 max-w-sm text-lg leading-8 text-zinc-400">
              The ultimate GTA VI database built for players.
              Browse vehicles, characters, businesses,
              locations, guides and more.
            </p>

          </div>

          {/* Explore */}

          <div>

            <h3 className="mb-6 font-bold text-white">
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

            </div>

          </div>

          {/* Database */}

          <div>

            <h3 className="mb-6 font-bold">
              Database
            </h3>

            <div className="space-y-4">

              <Link href="/weapons" className="block text-zinc-400 hover:text-pink-400">
                Weapons
              </Link>

              <Link href="/animals" className="block text-zinc-400 hover:text-pink-400">
                Animals
              </Link>

              <Link href="/activities" className="block text-zinc-400 hover:text-pink-400">
                Activities
              </Link>

              <Link href="/news" className="block text-zinc-400 hover:text-pink-400">
                News
              </Link>

            </div>

          </div>

          {/* Newsletter */}

          <div>

            <h3 className="mb-6 font-bold">
              Stay Updated
            </h3>

            <p className="mb-6 text-zinc-400">
              Receive official GTA VI news and updates.
            </p>

            <div className="flex gap-3">

              <input
                placeholder="Enter your email..."
                className="flex-1 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 outline-none focus:border-pink-500"
              />

              <button className="rounded-xl bg-pink-500 px-6 font-bold transition hover:bg-pink-400">
                Join
              </button>

            </div>

          </div>

        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-zinc-900 pt-8 text-sm text-zinc-500 lg:flex-row lg:items-center lg:justify-between">

          <p>
            © 2026 GTA Companion. Not affiliated with Rockstar Games.
          </p>

          <div className="flex gap-8">

            <Link href="#">
              Privacy
            </Link>

            <Link href="#">
              Terms
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}