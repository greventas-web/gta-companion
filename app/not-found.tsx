import Link from "next/link";

const popular = [
  { href: "/map", label: "Interactive map", line: "Pins for shops, safes, collectibles and more." },
  { href: "/guides", label: "Guides", line: "Short how-tos for common questions." },
  { href: "/missions", label: "Missions", line: "Story missions in order, with a done tracker." },
  { href: "/money-methods", label: "Make money", line: "Ways to earn cash, by chapter." },
  { href: "/cheats", label: "Cheats and codes", line: "Phone codes and what they do." },
  { href: "/vehicles", label: "Vehicles", line: "Cars, bikes, boats and aircraft." },
  { href: "/weapons", label: "Weapons", line: "Stats, prices and where to buy." },
  { href: "/where-to-find", label: "Where to find", line: "Shops, garages, barbers and more." },
  { href: "/collectibles", label: "Collectibles", line: "Cards, flamingos, stunt jumps." },
  { href: "/search", label: "Search", line: "Look for a page by name." },
];

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#040404] px-6 py-24 text-white">
      <div className="w-full max-w-3xl">
        <div className="text-center">
          <div className="text-[96px] font-black leading-none text-pink-500 sm:text-[140px]">404</div>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">Page not found</h1>
          <p className="mt-5 text-lg leading-8 text-zinc-400">
            That address does not match a page on GTA Companion. It may have been renamed or removed. Try one of
            these instead, or go back to the home page.
          </p>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {popular.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-pink-400/50"
              >
                <span className="font-bold text-white">{item.label}</span>
                <span className="mt-1 block text-sm leading-6 text-zinc-400">{item.line}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex rounded-2xl bg-gradient-to-r from-pink-500 to-fuchsia-500 px-8 py-4 font-bold text-white"
          >
            Return home
          </Link>
          <p className="mt-6 text-sm text-zinc-500">
            Unofficial fan site, not affiliated with Rockstar Games or Take-Two.
          </p>
        </div>
      </div>
    </main>
  );
}
