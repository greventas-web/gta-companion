import Link from "next/link";

import NavLink from "@/components/NavLink";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/70 bg-black/80 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="text-2xl font-black tracking-tight"
        >
          GTA
          <span className="text-pink-400">
            Companion
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">

          <NavLink href="/">Home</NavLink>

          <NavLink href="/vehicles">Vehicles</NavLink>

          <NavLink href="/manufacturers">Manufacturers</NavLink>

          <NavLink href="/characters">Characters</NavLink>

          <NavLink href="/locations">Locations</NavLink>

          <NavLink href="/businesses">Businesses</NavLink>

          <NavLink href="/guides">Guides</NavLink>

          <NavLink href="/news">News</NavLink>

        </nav>

        <Link
          href="/profile"
          className="rounded-xl border border-pink-500 px-5 py-2 font-semibold text-pink-400 transition hover:bg-pink-500 hover:text-white"
        >
          Profile
        </Link>

      </div>

    </header>
  );
}