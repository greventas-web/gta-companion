import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, QuickFacts, SimpleHero } from "@/components/simple/SimpleCard";
import { vehicles } from "@/data/vehicles";
import { pageMetadata } from "@/lib/launch";
import { vehicleImages } from "@/lib/media/catalog";
import { makerLabel, vehicleMark } from "@/lib/simple/marks";
import { itemListJsonLd } from "@/lib/seo";
import { vehicleCounts } from "@/src/data/launch/launch-facts";
import type { Vehicle } from "@/types/vehicle";
import { QuickGuideGrid } from "@/components/guides/QuickGuidePage";
import { quickGuideCards } from "@/src/data/launch/quick-guides";

export const metadata = pageMetadata(
  "GTA 6 Cars List",
  `Unofficial GTA 6 cars list: ${vehicleCounts.total} vehicles in the game (${vehicleCounts.baseModels} base models and ${vehicleCounts.standout} Standout vehicles), with pictures and where to get them.`
);

const ORDER = ["Super", "Sports", "Muscle", "Sedan", "SUV", "Truck", "Off-Road", "Bike", "Boat", "Aircraft", "Emergency", "Service", "Industrial", "Military", "Other"];

function plural(category: string) {
  if (category === "Other") return "More vehicles";
  if (category === "Military" || category === "Emergency" || category === "Industrial" || category === "Service" || category === "Off-Road") return category;
  if (category === "Super") return "Supercars";
  if (category === "Sports") return "Sports cars";
  if (category === "Muscle") return "Muscle cars";
  if (category === "Aircraft") return "Aircraft";
  return `${category}s`;
}

function anchor(category: string) {
  return plural(category).toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function card(vehicle: Vehicle) {
  const photo = vehicleImages(vehicle)[0];
  return (
    <SimpleCard
      key={vehicle.slug}
      href={`/vehicles/${vehicle.slug}`}
      title={vehicle.name}
      image={photo}
      imageAlt={vehicle.imageAlt}
      eyebrow={makerLabel(vehicle.manufacturer)}
      price={vehicle.price}
      mark={vehicleMark(vehicle.category, vehicle.slug)}
      markLabel={makerLabel(vehicle.manufacturer)}
      frame
      small
    />
  );
}

const confirmed = vehicles.filter((vehicle) => vehicle.status === "Confirmed");
const expected = vehicles.filter((vehicle) => vehicle.status !== "Confirmed");
const categories = [...ORDER, ...new Set(confirmed.map((v) => v.category).filter((c) => !ORDER.includes(c)))];
const groups = categories
  .map((category) => ({ category, items: confirmed.filter((vehicle) => vehicle.category === category) }))
  .filter((group) => group.items.length > 0);

export default function VehiclesPage() {
  return (
    <PageShell>
      <JsonLd
        data={itemListJsonLd(
          "GTA 6 vehicles",
          "/vehicles",
          vehicles.map((vehicle) => ({ name: vehicle.name, url: `/vehicles/${vehicle.slug}` }))
        )}
      />
      <SimpleHero title="Vehicles" image="/images/official/categories/vehicles.webp" />

      <QuickFacts
        facts={[
          { label: "Vehicles in the game", value: `${vehicleCounts.total}` },
          { label: "Base models", value: `${vehicleCounts.baseModels}` },
          { label: "Standout vehicles", value: `${vehicleCounts.standout}` },
          { label: "Scans for 100%", value: `${vehicleCounts.neededFor100}` },
        ]}
      />

      <nav className="mt-8 flex flex-wrap gap-2">
        {groups.map((group) => (
          <a
            key={group.category}
            href={`#${anchor(group.category)}`}
            className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-violet-400/40"
          >
            {plural(group.category)} <span className="text-zinc-500">{group.items.length}</span>
          </a>
        ))}
      </nav>

      {groups.map((group) => (
        <CardGrid key={group.category} id={anchor(group.category)} heading={plural(group.category)} count={group.items.length} dense>
          {group.items.map(card)}
        </CardGrid>
      ))}

      {expected.length > 0 ? (
        <CardGrid id="not-seen-yet" heading="Not seen in the game yet" count={expected.length} dense>
          {expected.map(card)}
        </CardGrid>
      ) : null}
      <QuickGuideGrid guides={quickGuideCards(["register-car", "buy-a-car", "impounded-car", "call-your-car", "slim-jim", "key-cloner", "randys-wish-list", "pegassi-infernus", "car-trackers", "fast-and-furious-car", "1010-murals", "garage-codes", "la-perle-garage", "declasse-vamos", "wyman-cars", "motorcycle", "refuel", "repair-car", "customize-car", "plane", "sell-cars", "helicopter", "fighter-jet", "tank", "military-base", "boat", "turn-signals", "headlights", "auto-drive", "street-races", "horn", "partner-drive", "scan-car", "hotwire", "carjack", "handbrake"])} />
    </PageShell>
  );
}
