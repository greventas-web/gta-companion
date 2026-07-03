export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800/60 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">
        <h1 className="text-2xl font-extrabold tracking-wide text-white">
          GTA Companion
        </h1>

        <div className="flex items-center gap-8 text-sm font-medium text-zinc-300">
          <a href="#" className="transition hover:text-white">Map</a>
          <a href="#" className="transition hover:text-white">Vehicles</a>
          <a href="#" className="transition hover:text-white">Guides</a>
          <a href="#" className="transition hover:text-white">News</a>
        </div>
      </div>
    </nav>
  );
}