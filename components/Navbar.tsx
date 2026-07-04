import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800/60 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <div className="flex cursor-pointer items-center gap-3">

          <Image
            src="/logo/logo.svg"
            alt="GTA Companion Logo"
            width={42}
            height={42}
            priority
          />

          <div>
            <h1 className="text-2xl font-extrabold tracking-wide text-white">
              GTA Companion
            </h1>

            <p className="-mt-1 text-xs uppercase tracking-[0.3em] text-pink-400">
              PREMIUM EDITION
            </p>
          </div>

        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8">

          <a
            href="#"
            className="relative text-sm font-medium text-zinc-300 transition-all duration-300 hover:text-pink-400 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-pink-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Map
          </a>

          <a
            href="#"
            className="relative text-sm font-medium text-zinc-300 transition-all duration-300 hover:text-pink-400 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-pink-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Vehicles
          </a>

          <a
            href="#"
            className="relative text-sm font-medium text-zinc-300 transition-all duration-300 hover:text-pink-400 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full"
          >
            Guides
          </a>

          <a
            href="#"
            className="relative text-sm font-medium text-zinc-300 transition-all duration-300 hover:text-pink-400 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-pink-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            News
          </a>

        </div>

      </div>
    </nav>
  );
}