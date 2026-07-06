import Link from "next/link";

const sections = [
  {
    title: "Database",
    links: [
      ["Vehicles", "/vehicles"],
      ["Manufacturers", "/manufacturers"],
      ["Characters", "/characters"],
      ["Locations", "/locations"],
      ["Businesses", "/businesses"],
    ],
  },
  {
    title: "World",
    links: [
      ["Weapons", "/weapons"],
      ["Animals", "/animals"],
      ["Activities", "/activities"],
      ["Brands", "/brands"],
    ],
  },
  {
    title: "Tools",
    links: [
      ["Interactive Map", "#"],
      ["Guides", "/guides"],
      ["News", "/news"],
      ["Profile", "/profile"],
    ],
  },
];

export default function MegaMenu() {
  return (
    <div className="absolute left-1/2 top-full z-50 mt-5 w-[920px] -translate-x-1/2 rounded-3xl border border-zinc-800 bg-zinc-950/95 p-10 shadow-2xl backdrop-blur-xl">

      <div className="grid grid-cols-3 gap-10">

        {sections.map((section) => (
          <div key={section.title}>

            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-pink-400">
              {section.title}
            </h3>

            <div className="space-y-2">

              {section.links.map(([title, href]) => (
                <Link
                  key={title}
                  href={href}
                  className="block rounded-xl px-3 py-3 text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
                >
                  {title}
                </Link>
              ))}

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}