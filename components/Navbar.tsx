import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-[9999] border-b border-zinc-800 bg-black">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">

        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/logo/logo.svg"
            alt="GTA Companion"
            width={42}
            height={42}
            priority
          />

          <div>
            <h1 className="text-2xl font-extrabold text-white">
              GTA Companion
            </h1>

            <p className="text-xs uppercase tracking-[0.3em] text-pink-400">
              PREMIUM EDITION
            </p>
          </div>

        </Link>

        <div className="flex items-center gap-8">

          <Link
            href="/map"
            className="text-sm font-medium text-zinc-300 transition hover:text-pink-400"
          >
            Map
          </Link>

          <Link
            href="/vehicles"
            className="text-sm font-medium text-zinc-300 transition hover:text-pink-400"
          >
            Vehicles
          </Link>

          <Link
            href="/guides"
            className="text-sm font-medium text-zinc-300 transition hover:text-pink-400"
          >
            Guides
          </Link>

          <Link
            href="/news"
            className="text-sm font-medium text-zinc-300 transition hover:text-pink-400"
          >
            News
          </Link>

        </div>

      </div>
    </nav>
  );
}