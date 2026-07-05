import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-zinc-800/60 bg-background">

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">

        <div>

          <h2 className="text-2xl font-black">
            GTA <span className="text-pink-400">Companion</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-zinc-400">
            The premium companion platform for GTA VI.
            Explore vehicles, guides, news, maps and much more.
          </p>

        </div>

        <div>

          <h3 className="mb-4 font-bold text-white">
            Explore
          </h3>

          <div className="space-y-3 text-sm text-zinc-400">

            <Link href="/vehicles" className="block hover:text-pink-400">
              Vehicles
            </Link>

            <Link href="/manufacturers" className="block hover:text-pink-400">
              Manufacturers
            </Link>

            <Link href="/guides" className="block hover:text-pink-400">
              Guides
            </Link>

            <Link href="/news" className="block hover:text-pink-400">
              News
            </Link>

          </div>

        </div>

        <div>

          <h3 className="mb-4 font-bold text-white">
            Coming Soon
          </h3>

          <div className="space-y-3 text-sm text-zinc-400">

            <p>Interactive Map</p>
            <p>Characters</p>
            <p>Businesses</p>
            <p>Collectibles</p>
            <p>Premium</p>

          </div>

        </div>

        <div>

          <h3 className="mb-4 font-bold text-white">
            GTA Companion
          </h3>

          <p className="text-sm leading-7 text-zinc-400">
            Built with Next.js, TypeScript and Tailwind CSS.
            Designed to become the ultimate GTA companion platform.
          </p>

        </div>

      </div>

      <div className="border-t border-zinc-800/60">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-zinc-500 md:flex-row">

          <p>
            © 2026 GTA Companion. All rights reserved.
          </p>

          <p>
            Built by Gabrielius Reventas
          </p>

        </div>

      </div>

    </footer>
  );
}