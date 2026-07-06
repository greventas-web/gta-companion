import Link from "next/link";

import DesktopNavigation from "@/components/navigation/DesktopNavigation";
import MobileNavigation from "@/components/navigation/MobileNavigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/70 bg-black/80 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="text-3xl font-black tracking-tight"
        >
          GTA
          <span className="text-pink-400"> Companion</span>
        </Link>

        <DesktopNavigation />

        <div className="flex items-center gap-4">

          <button
            className="hidden rounded-xl border border-zinc-800 px-4 py-2 text-sm transition hover:border-pink-500 lg:block"
          >
            Search
          </button>

          <Link
            href="/profile"
            className="hidden rounded-xl bg-pink-500 px-5 py-2 font-semibold text-white transition hover:bg-pink-400 lg:block"
          >
            Profile
          </Link>

          <MobileNavigation />

        </div>

      </div>

    </header>
  );
}