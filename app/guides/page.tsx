import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, SimpleHero } from "@/components/simple/SimpleCard";
import { pageMetadata } from "@/lib/launch";

export const metadata = pageMetadata(
  "GTA 6 guides",
  "Unofficial GTA 6 guides: missions, money, weapons, collectibles, cheats and the map."
);

const hubs = [
  { href: "/missions", title: "Missions" },
  { href: "/money-methods", title: "Make money" },
  { href: "/weapons", title: "Weapons", image: "/images/official/categories/weapons.webp" },
  { href: "/vehicles", title: "Vehicles", image: "/images/official/categories/vehicles.webp" },
  { href: "/shooting-ranges", title: "Shooting ranges", image: "/images/official/frames/shooting-range.webp" },
  { href: "/collectibles", title: "Collectibles" },
  { href: "/cheats", title: "Cheats" },
  { href: "/where-to-find", title: "Where to find" },
  { href: "/trophies", title: "Trophies" },
  { href: "/map", title: "Map", image: "/images/official/locations/vice-city.webp" },
];

export default function GuidesPage() {
  return (
    <PageShell>
      <SimpleHero title="Guides" />
      <CardGrid>
        {hubs.map((hub) => (
          <SimpleCard key={hub.href} href={hub.href} title={hub.title} image={hub.image} />
        ))}
      </CardGrid>
    </PageShell>
  );
}
