import type { Metadata } from "next";

import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, QuickFacts, SimpleHero } from "@/components/simple/SimpleCard";
import { vehicles } from "@/data/vehicles";
import { launchMetadata } from "@/lib/launch";
import { vehicleImages } from "@/lib/media/catalog";

const title = "Fastest Cars in GTA 6: Supercars and Sports Cars";
const description =
  "Unofficial GTA 6 fastest cars: the supercars in the game, how to get them, and how many supercars and sports cars there are.";

export const metadata: Metadata = launchMetadata(title, description);

const SUPERCARS = ["progen-emerus", "truffade-thrax", "pegassi-zorrusso"];

const more = [
  { href: "/cheats/vehicle-cheats", title: "Vehicle cheats" },
  { href: "/money-methods/randy-wish-list", title: "Randy's wish list" },
  { href: "/where-to-find/mod-shops", title: "Mod shops", image: "/images/official/editions/ultimate_edition_rideout_customs_01.webp" },
  { href: "/vehicles", title: "All vehicles", image: "/images/official/categories/vehicles.webp" },
];

export default function FastestCarsPage() {
  const cars = SUPERCARS.map((slug) => vehicles.find((vehicle) => vehicle.slug === slug)).filter(
    (vehicle): vehicle is NonNullable<typeof vehicle> => Boolean(vehicle)
  );

  return (
    <PageShell>
      <SimpleHero title="Fastest cars" />
      <QuickFacts
        facts={[
          { label: "Supercars", value: "9" },
          { label: "Sports cars", value: "13" },
          { label: "Top speeds", value: "Taken from the in-game Speed bar, not a timed test" },
        ]}
      />
      <CardGrid heading="Supercars" count={cars.length}>
        {cars.map((car) => (
          <SimpleCard
            key={car.slug}
            href={`/vehicles/${car.slug}`}
            title={car.name}
            image={vehicleImages(car)[0]}
            eyebrow={car.manufacturer}
            line={car.description}
          />
        ))}
      </CardGrid>
      <CardGrid heading="More">
        {more.map((item) => (
          <SimpleCard key={item.href} href={item.href} title={item.title} image={item.image} small />
        ))}
      </CardGrid>
    </PageShell>
  );
}
