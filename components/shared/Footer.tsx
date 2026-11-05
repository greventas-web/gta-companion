import Link from "next/link";

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "News", href: "/news" },
  { title: "Media", href: "/media" },
  { title: "Timeline", href: "/timeline" },
  { title: "About", href: "/about" },
];

const databases = [
  { title: "Characters", href: "/characters" },
  { title: "Vehicles", href: "/vehicles" },
  { title: "Locations", href: "/locations" },
  { title: "Weapons", href: "/weapons" },
  { title: "Businesses", href: "/businesses" },
  { title: "Brands", href: "/brands" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#040404]">

      <div className="mx-auto max-w-[1700px] px-8 py-20">

        <div className="grid gap-16 lg:grid-cols-[2fr_1fr_1fr]">

          <div>

            <h2 className="text-5xl font-black tracking-[-0.05em] text-white">
              GTA <span className="text-pink-400">Companion</span>{" "}
              <span className="text-violet-400 italic">VI</span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-9 text-zinc-400">
              The premium companion platform for Grand Theft Auto VI,
              built around official Rockstar Games information.
            </p>

          </div>

          <div>

            <h3 className="mb-8 text-xl font-black text-white">
              Explore
            </h3>

            <div className="space-y-4">

              {quickLinks.map((item) => (

                <Link
                  key={item.title}
                  href={item.href}
                  className="block text-zinc-400 transition hover:text-pink-400"
                >
                  {item.title}
                </Link>

              ))}

            </div>

          </div>

          <div>

            <h3 className="mb-8 text-xl font-black text-white">
              Databases
            </h3>

            <div className="space-y-4">

              {databases.map((item) => (

                <Link
                  key={item.title}
                  href={item.href}
                  className="block text-zinc-400 transition hover:text-pink-400"
                >
                  {item.title}
                </Link>

              ))}

            </div>

          </div>

        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-sm text-zinc-500 lg:flex-row">

          <div>
            © 2026 GTA Companion. All rights reserved.
          </div>

          <div>
            Independent fan project • Not affiliated with Rockstar Games.
          </div>

        </div>

      </div>

    </footer>
  );
}