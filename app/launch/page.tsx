import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, QuickFacts, SimpleHero } from "@/components/simple/SimpleCard";
import { paradiseGarageStandIn } from "@/data/standIns";
import { vehicles } from "@/data/vehicles";
import { weapons } from "@/data/weapons";
import { QuickGuideGrid } from "@/components/guides/QuickGuidePage";
import { pageMetadata } from "@/lib/launch";
import { vehicleImages } from "@/lib/media/catalog";
import { quickGuideCards } from "@/src/data/launch/quick-guides";

const launchTitle = "Editions";
const launchDescription =
  "Unofficial GTA VI editions guide: Standard and Ultimate prices, the Vintage Vice City Pack, and every Ultimate Edition vehicle, weapon and shop. Not affiliated with Rockstar Games or Take-Two.";

export const metadata = pageMetadata(launchTitle, launchDescription);

const ultimateVehicleSlugs = [
  "grotti-cheetah-1995",
  "vapid-ganado",
  "dinka-enduro",
  "crest-kayak",
  "shitzu-squalo",
  "vapid-dominator-buggy",
];
const ultimateWeaponSlugs = ["hawk-little-morgan", "girardi-es9", "klose-k17"];

const editionPlaces = [
  {
    name: "Rideout Customs",
    href: "/stores/rideout-customs",
    image: "/images/official/editions/ultimate_edition_rideout_customs_01.webp",
    note: "Mod shop.",
  },
  {
    name: "One-Eyed Willie's",
    href: "/stores/one-eyed-willies",
    image: "/images/official/editions/ultimate_edition_one_eyed_willie_01.webp",
    note: "Off-road mods at Lake Leonida.",
  },
  {
    name: "Sara's Unisex Salon",
    href: "/stores/saras-unisex-salon",
    image: "/images/official/editions/ultimate_edition_saras_salon_01.webp",
    note: "Hair salon.",
  },
  {
    name: "Stock 305",
    href: "/stores/stock-305",
    image: "/images/official/editions/ultimate_edition_stock_305_01.webp",
    note: "Clothing store.",
  },
  {
    name: "Electric Fang Tattoo Parlor",
    href: "/stores/electric-fang-tattoo",
    image: "/images/official/editions/ultimate_edition_electric_fang_01.webp",
    note: "50+ tattoos by FAILE.",
  },
  {
    name: "Goodtime Gear",
    href: "/clothing/goodtime-gear",
    image: "/images/official/editions/ultimate_edition_goodtime_gear_01.webp",
    note: "Macca the Gator clothes.",
  },
  {
    name: "PTT Youngin$",
    href: "/stores/ptt-youngins-illegal-goods-store",
    image: "/images/official/editions/ultimate_edition_ptt_store_01.webp",
    note: "Raid a gang compound for contraband.",
  },
  {
    name: "Classic Car Collection",
    image: "/images/official/editions/ultimate_edition_wyman_car_collection_01.webp",
    note: "Restore classic cars for Wyman.",
  },
  {
    name: "Paradise Garage",
    href: "/properties/paradise-garage",
    image: paradiseGarageStandIn.src,
    note: "Garage in Watson Bay.",
  },
  {
    name: "Vice City Style",
    href: "/clothing/vice-city-style",
    image: "/images/official/editions/ultimate_edition_vice_city_style_01.webp",
    note: "Clothes and tattoos.",
  },
  {
    name: "Jason's safehouse",
    image: "/images/official/editions/ultimate_edition_safehouse_vehicles_01.webp",
    note: "Enduro bike and kayak.",
  },
];

const vintage = [
  { href: "/vehicles/vapid-stanier-1955", title: "'55 Vapid Stanier", line: "Classic sedan.", image: "/images/official/vehicles/vapid-stanier-1955.webp" },
  { href: "/properties/shore-court", title: "Shore Court garage", line: "Near Ocean Beach." },
  { href: "/clothing/vintage-vice-city-looks", title: "Vintage looks", line: "Outfits and hairstyles.", image: "/images/official/editions/vintage_vice_city_pack_exclusive_looks_01.webp" },
  { href: "/clothing/jason-pastel-linen-suit", title: "Jason's pastel linen suit", image: "/images/official/editions/vintage_vice_city_pack_02.webp" },
  { href: "/clothing/lucia-red-sequin-mini-dress", title: "Lucia's red sequin dress", image: "/images/official/editions/vintage_vice_city_pack_01.webp" },
];

function vehicleCard(slug: string) {
  const vehicle = vehicles.find((item) => item.slug === slug);
  if (!vehicle) return null;
  return (
    <SimpleCard
      key={slug}
      href={`/vehicles/${slug}`}
      title={vehicle.name}
      image={vehicleImages(vehicle)[0]}
      eyebrow={vehicle.category}
    />
  );
}

function weaponCard(slug: string) {
  const weapon = weapons.find((item) => item.slug === slug);
  if (!weapon) return null;
  return <SimpleCard key={slug} href={`/weapons/${slug}`} title={weapon.name} image={weapon.image} eyebrow={weapon.manufacturer} />;
}

export default function LaunchPage() {
  return (
    <PageShell>
      <SimpleHero title="Editions" image="/images/official/editions/ultimate_edition_rideout_customs_01.webp" />

      <QuickFacts
        facts={[
          { label: "Standard", value: "$79.99" },
          { label: "Ultimate (digital only)", value: "$99.99" },
          { label: "Upgrade to Ultimate", value: "$20.00" },
          { label: "Rating", value: "M (Mature 17+)" },
        ]}
      />

      <CardGrid heading="Ultimate Edition vehicles" count={ultimateVehicleSlugs.length}>
        {ultimateVehicleSlugs.map(vehicleCard)}
      </CardGrid>

      <CardGrid heading="Ultimate Edition weapons" count={ultimateWeaponSlugs.length}>
        {ultimateWeaponSlugs.map(weaponCard)}
      </CardGrid>

      <CardGrid heading="Ultimate Edition places" count={editionPlaces.length}>
        {editionPlaces.map((place) => (
          <SimpleCard
            key={place.name}
            href={"href" in place ? place.href : undefined}
            title={place.name}
            image={place.image}
            line={place.note}
          />
        ))}
      </CardGrid>

      <CardGrid heading="Vintage Vice City Pack (bought before Nov 20)" count={vintage.length}>
        {vintage.map((item) => (
          <SimpleCard key={item.href} href={item.href} title={item.title} line={item.line} image={"image" in item ? item.image : undefined} />
        ))}
      </CardGrid>
      <QuickGuideGrid guides={quickGuideCards(["ultimate-edition", "platforms", "physical-copy"])} />
    </PageShell>
  );
}
