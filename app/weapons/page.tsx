import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, SimpleHero } from "@/components/simple/SimpleCard";
import { weaponLine, weapons } from "@/data/weapons";
import { pageMetadata } from "@/lib/launch";
import { itemListJsonLd } from "@/lib/seo";
import { QuickGuideGrid } from "@/components/guides/QuickGuidePage";
import { quickGuideCards } from "@/src/data/launch/quick-guides";

export const metadata = pageMetadata(
  "GTA 6 Weapons List: All Guns and Prices",
  "Every GTA 6 gun with a picture, maker, and Ammu-Nation price where known, plus where to buy snipers, LMGs, and launchers. Unofficial fan site."
);

const ORDER = [
  "Handgun",
  "SMG",
  "Shotgun",
  "Assault Rifle",
  "Tactical Rifle",
  "Sniper Rifle",
  "LMG",
  "Launcher",
  "Explosives",
  "Melee",
];

function plural(category: string) {
  if (category === "SMG") return "SMGs";
  if (category === "LMG") return "LMGs";
  if (category === "Explosives" || category === "Melee") return category;
  return `${category}s`;
}

function categoryAnchor(category: string) {
  return plural(category).toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

const groups = [
  ...ORDER.map((category) => ({ category, items: weapons.filter((weapon) => weapon.category === category) })),
  { category: "Other", items: weapons.filter((weapon) => !ORDER.includes(weapon.category)) },
].filter((group) => group.items.length > 0);

export default function WeaponsPage() {
  return (
    <PageShell>
      <JsonLd
        data={itemListJsonLd(
          "GTA 6 weapons",
          "/weapons",
          weapons.map((weapon) => ({ name: weapon.name, url: `/weapons/${weapon.slug}` }))
        )}
      />
      <SimpleHero title="Weapons" />

      <nav className="mt-6 flex flex-wrap gap-2">
        {groups.map((group) => (
          <a
            key={group.category}
            href={`#${categoryAnchor(group.category)}`}
            className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-violet-400/40"
          >
            {plural(group.category)} <span className="text-zinc-500">{group.items.length}</span>
          </a>
        ))}
      </nav>

      {groups.map((group) => (
        <CardGrid
          key={group.category}
          id={categoryAnchor(group.category)}
          heading={plural(group.category)}
          count={group.items.length}
          dense
        >
          {group.items.map((weapon) => (
            <SimpleCard
              key={weapon.slug}
              href={`/weapons/${weapon.slug}`}
              title={weapon.name}
              image={weapon.image}
              imageAlt={weapon.imageAlt}
              eyebrow={weapon.manufacturer}
              line={weaponLine(weapon)}
              price={weapon.price}
              small
            />
          ))}
        </CardGrid>
      ))}

      <QuickGuideGrid guides={quickGuideCards(["mask", "how-to-heal", "focus", "sell-guns", "stealth-takedown", "take-cover", "body-armor", "rob-police-car", "unique-weapons", "hyde-island", "melee-weapons", "silenced-pistol", "sniper-rifle", "shotgun", "crab-lab", "parachute", "shooting-ranges", "aim-assist", "loadout", "equipment", "drive-by", "rocket-launcher"])} />
    </PageShell>
  );
}
