import Link from "next/link";

import NavLink from "@/components/NavLink";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="text-2xl font-black tracking-tight"
        >
          GTA <span className="text-pink-400">Companion</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium md:flex">

          <NavLink href="/">
            Home
          </NavLink>

          <NavLink href="/vehicles">
            Vehicles
          </NavLink>

          <NavLink href="/manufacturers">
            Manufacturers
          </NavLink>

          <NavLink href="/guides">
            Guides
          </NavLink>

          <NavLink href="/news">
            News
          </NavLink>

          <NavLink href="/map">
            Map
          </NavLink>

        </div>

        <Link
          href="/profile"
          className="rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-sm font-semibold text-pink-400 transition hover:border-pink-500 hover:bg-pink-500 hover:text-white"
        >
          Profile
        </Link>

      </nav>
    </header>
  );
}