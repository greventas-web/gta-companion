import Link from "next/link";

/**
 * The longest, most complete guides on the site (Nov 28, 2026 crawl, 400+
 * words of their own text each). The homepage sends new visitors here first
 * instead of to thin database lists. Swap entries as guides grow.
 */
const START_HERE: { href: string; title: string }[] = [
  { href: "/where-to-find/fences", title: "Fence locations: where to sell stolen goods" },
  { href: "/guides/hidden-cars", title: "Hidden cars, garage codes and the Dubsta" },
  { href: "/cheats", title: "All 61 cheats in one table" },
  { href: "/ammu-nation-locations", title: "All 24 Ammu-Nation gun stores with prices" },
  { href: "/guides/red-queen-dubsta", title: "The Red Queen Dubsta (G Wagon) in Leaf Links" },
  { href: "/guides/easter-eggs", title: "Easter eggs and secrets" },
  { href: "/guides/tommy-vercetti-shirt", title: "Tommy Vercetti easter egg: substations, shirt and motorcycle" },
  { href: "/collectibles/waink-locations", title: "WAiNK locations: landmarks, sculptures and curiosities" },
  { href: "/guides/unique-weapons", title: "Unique weapons: where to find the early gold guns" },
  { href: "/guides/radio-stations-list", title: "Radio stations list: every station, DJ and host" },
  { href: "/guides/alien-base", title: "Alien base: location, keypad code and rewards" },
  { href: "/guides/randys-wish-list", title: "Randy's wish list: all 20 cars" },
  { href: "/guides/garage-codes", title: "Every hidden garage code and the car inside" },
  { href: "/guides/safe-codes", title: "Safe codes for Kingpin Bowling and the gang hideouts" },
  { href: "/where-to-find/street-food", title: "Street food vendor locations" },
  { href: "/missions", title: "Story missions list, spoiler-safe" },
];

export default function StartHere() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 pt-12 sm:px-10 lg:px-14 lg:pt-16">
      <h2 className="text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">Start here</h2>
      <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-400">
        Our most complete GTA 6 guides. Each one answers a single question in full, with the place, the steps and what
        you get, and none of them spoils the story past Chapter 3.
      </p>
      <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {START_HERE.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block h-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-[15px] font-semibold leading-6 text-white transition hover:border-pink-400/40 hover:bg-white/[0.06]"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
