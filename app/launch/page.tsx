import { paradiseGarageStandIn } from "@/data/standIns";
import ItemImage from "@/components/ItemImage";
import RepresentativeMark from "@/components/RepresentativeMark";
import Link from "next/link";

import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import { SourceList } from "@/components/SourceLink";
import { pageMetadata } from "@/lib/launch";
import { IMAGE_CREDIT } from "@/lib/site";
import { editionCutoff, goodtimeLine, goodtimeSource } from "@/data/merch";
import {
  esrbSources,
  playstationStandard,
  playstationUltimate,
  rockstarSupportEditions,
  rockstarViPage,
  xboxStandard,
  xboxUltimate,
  xboxUpgrade,
} from "@/src/data/gameplay/confirmed";

const launchTitle = "Editions and pre-load";
const launchDescription =
  "What Rockstar and Take-Two have published about GTA VI editions, pre-load, and the named bonus vehicles and weapons. Unofficial fan site, not affiliated with Rockstar Games or Take-Two.";

export const metadata = pageMetadata(launchTitle, launchDescription);

const ultimateVehicles = [
  {
    name: "'95 Grotti Cheetah",
    href: "/vehicles/grotti-cheetah-1995",
    note: "Mid-1990s Grotti sports car, described as an ode to Shore Drive. It appears later in the story.",
  },
  {
    name: "Vapid Ganado",
    href: "/vehicles/vapid-ganado",
    note: "Jason's low-riding pickup. The Ganado Retro Build adds exclusive mods.",
  },
  {
    name: "Dinka Enduro",
    href: "/vehicles/dinka-enduro",
    note: "Safehouse motorcycle. Rockstar shows it in an army-fatigue finish.",
  },
  {
    name: "Crest Kayak",
    href: "/vehicles/crest-kayak",
    note: "Safehouse kayak, listed with the Enduro.",
  },
  {
    name: "Shitzu Squalo",
    href: "/vehicles/shitzu-squalo",
    note: "Pink-and-blue boat docked at Washington Beach, set up for fishing in Gambit Bay.",
  },
  {
    name: "'67 Vapid Dominator Buggy and Garage",
    href: "/vehicles/vapid-dominator-buggy",
    note: "Mud Club buggy for Mount Kalaga. Stored at the Paradise Garage in Watson Bay.",
  },
];

const editionPlaces = [
  {
    name: "Rideout Customs",
    href: "/stores/rideout-customs",
    image: "/images/official/editions/ultimate_edition_rideout_customs_01.webp",
    note: "A mod shop included with the Ultimate Edition.",
  },
  {
    name: "One-Eyed Willie's",
    href: "/stores/one-eyed-willies",
    image: "/images/official/editions/ultimate_edition_one_eyed_willie_01.webp",
    note: "An off-road mod shop at Lake Leonida.",
  },
  {
    name: "Sara's Unisex Salon",
    href: "/stores/saras-unisex-salon",
    image: "/images/official/editions/ultimate_edition_saras_salon_01.webp",
    note: "A salon included with the Ultimate Edition.",
  },
  {
    name: "Stock 305",
    href: "/stores/stock-305",
    image: "/images/official/editions/ultimate_edition_stock_305_01.webp",
    note: "A clothing store included with the Ultimate Edition.",
  },
  {
    name: "Electric Fang Tattoo Parlor",
    href: "/stores/electric-fang-tattoo",
    image: "/images/official/editions/ultimate_edition_electric_fang_01.webp",
    note: "Electric Fang Tattoo Parlor has 50+ tattoos designed by FAILE.",
  },
  {
    name: "Goodtime Gear",
    href: "/clothing/goodtime-gear",
    image: "/images/official/editions/ultimate_edition_goodtime_gear_01.webp",
    note: "Goodtime Gear: a capsule collection of apparel and accessories inspired by Macca the Gator, the Goodtime State's hit TV show character.",
  },
  {
    name: "PTT Youngin$",
    href: "/stores/ptt-youngins-illegal-goods-store",
    image: "/images/official/editions/ultimate_edition_ptt_store_01.webp",
    note: "PTT Youngin$ Illegal Goods Store (gang compound): raid the compound of one of Southside Vice City's loudest gangs and escape to score special items and contraband.",
  },
  {
    name: "Classic Car Collection",
    image: "/images/official/editions/ultimate_edition_wyman_car_collection_01.webp",
    note: "Classic Car Collection (special commission): track down abandoned classic and project cars and restore them for eccentric collector and local fixer Wyman.",
  },
  {
    name: "Paradise Garage",
    href: "/properties/paradise-garage",
    image: paradiseGarageStandIn.src,
    representative: true,
    note: "Rockstar says the Dominator Buggy can be stored at the Paradise Garage in Watson Bay. This image is the buggy, not a separate garage exterior.",
  },
  {
    name: "Vice City Style",
    href: "/clothing/vice-city-style",
    image: "/images/official/editions/ultimate_edition_vice_city_style_01.webp",
    note: "Vice City Style includes clothes and tattoos for Jason and Lucia.",
  },
  {
    name: "Jason's safehouse",
    image: "/images/official/editions/ultimate_edition_safehouse_vehicles_01.webp",
    note: "The safehouse vehicles Rockstar has shown, including the Dinka Enduro and Crest Kayak.",
  },
];

const ultimatePlaces = [
  "Rideout Customs, a mod shop",
  "One-Eyed Willie's, an off-road mod shop at Lake Leonida",
  "Sara's Unisex Salon",
  "Stock 305 clothing store",
  "Electric Fang Tattoo Parlor: 50+ tattoos designed by FAILE",
  "Goodtime Gear: a capsule collection of apparel and accessories inspired by Macca the Gator, the Goodtime State's hit TV show character",
  "PTT Youngin$ Illegal Goods Store (gang compound): raid the compound of one of Southside Vice City's loudest gangs and escape to score special items and contraband",
  "Classic Car Collection (special commission): track down abandoned classic and project cars and restore them for eccentric collector and local fixer Wyman",
];

export default function LaunchPage() {
  return (
    <PageShell>
      <PageHero
        badge="Published by Rockstar and Take-Two"
        title="Editions and pre-load"
        description="These are the facts Rockstar and Take-Two have published. In-game prices, top speeds, and a PC date have not been announced."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        <article className="rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-pink-400">
            Release
          </p>
          <h2 className="mt-4 text-3xl font-black">November 19, 2026</h2>
          <p className="mt-4 leading-8 text-zinc-400">
            PlayStation 5 and Xbox Series X|S. A PC date has not been announced.
            Digital pre-orders can start pre-loading on November 10, 2026.
            The physical box contains a download code. The ESRB rated it M
            (Mature 17+): Blood and Gore, Intense Violence, Mature Humor,
            Nudity, Strong Language, Strong Sexual Content, Use of Drugs and
            Alcohol, and In-Game Purchases.
          </p>
          <SourceList sources={esrbSources} className="mt-4" />
        </article>

        <article className="rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-pink-400">
            Standard
          </p>
          <h2 className="mt-4 text-3xl font-black">$79.99</h2>
          <p className="mt-4 leading-8 text-zinc-400">
            United States price on the PlayStation Store. Standard owners can
            upgrade later. The Xbox Store lists the Ultimate Edition Upgrade
            at $20.00 (US).
          </p>
          <SourceList
            className="mt-4"
            sources={[playstationStandard, xboxUpgrade, rockstarSupportEditions]}
          />
        </article>

        <article className="rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-pink-400">
            Ultimate
          </p>
          <h2 className="mt-4 text-3xl font-black">$99.99</h2>
          <p className="mt-4 leading-8 text-zinc-400">
            United States price on the PlayStation Store and the Xbox Store.
            There is no physical Ultimate Edition. It is digital only. Bonuses
            unlock as the story moves forward.
          </p>
          <SourceList
            className="mt-4"
            sources={[playstationUltimate, xboxUltimate, rockstarSupportEditions]}
          />
        </article>
      </div>

      <section className="mt-16">
        <h2 className="text-4xl font-black tracking-[-0.03em]">
          Vintage Vice City Pack
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
          {editionCutoff} The pack is not limited to the Ultimate Edition.
        </p>
        <SourceList
          className="mt-4"
          sources={[playstationStandard, xboxStandard, rockstarSupportEditions]}
        />
        <div className="mt-8 rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8">
          <Link href="/vehicles/vapid-stanier-1955" className="text-2xl font-black text-white hover:text-pink-400">
            &apos;55 Vapid Stanier
          </Link>
          <p className="mt-4 leading-8 text-zinc-400">
            Rockstar&apos;s classic sedan for this pack. It is kept at the{" "}
            <Link href="/properties/shore-court" className="font-semibold text-white hover:text-pink-400">
              Shore Court
            </Link>{" "}
            garage near Ocean Beach. The garage has a weapon locker and a
            place to leave stolen goods. The pack also adds{" "}
            <Link href="/clothing/vintage-vice-city-looks" className="text-white hover:text-pink-300">
              outfits and hairstyles
            </Link>{" "}
            for Jason and Lucia, including{" "}
            <Link href="/clothing/jason-pastel-linen-suit" className="text-white hover:text-pink-300">
              Jason&apos;s pastel linen suit
            </Link>{" "}
            and{" "}
            <Link href="/clothing/lucia-red-sequin-mini-dress" className="text-white hover:text-pink-300">
              Lucia&apos;s red sequin dress
            </Link>
            , plus a tropical pattern for most guns.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-4xl font-black tracking-[-0.03em]">
          Merchandise, not an edition
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
          {goodtimeLine} The box includes a 6-inch Macca the Gator figure,
          GTAVI Oakley Frogskins, a New Era 9FORTY hat, a Chunkee the Manatee
          shot glass, and a Leonida poster.
        </p>
        <SourceList sources={[goodtimeSource]} className="mt-4" />
      </section>

      <section className="mt-16">
        <h2 className="text-4xl font-black tracking-[-0.03em]">
          Ultimate Edition vehicles
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {ultimateVehicles.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8 transition hover:border-pink-500/40"
            >
              <h3 className="text-2xl font-black">{item.name}</h3>
              <p className="mt-4 leading-8 text-zinc-400">{item.note}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-4xl font-black tracking-[-0.03em]">
          Ultimate Edition places
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
          Rockstar has published these named places and extras with the Ultimate Edition.
          Last updated November 10, 2026. {IMAGE_CREDIT}.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {editionPlaces.map((place) => (
            <article
              key={place.name}
              className="overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0B0D]"
            >
              <div className="relative aspect-video">
                <ItemImage
                  src={place.image}
                  alt={place.name}
                  name={place.name}
                  fill
                  sizes="(max-width: 480px) 80vw, (max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <RepresentativeMark
                  show={"representative" in place && place.representative}
                />
              </div>
              <div className="p-8">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-teal-300">
                  Confirmed
                </p>
                {"href" in place && place.href ? (
                  <h3 className="mt-3 text-2xl font-black">
                    <Link href={place.href} className="hover:text-pink-300">
                      {place.name}
                    </Link>
                  </h3>
                ) : (
                  <h3 className="mt-3 text-2xl font-black">{place.name}</h3>
                )}
                <p className="mt-4 leading-8 text-zinc-400">{place.note}</p>
              </div>
            </article>
          ))}
        </div>
        <SourceList
          sources={[rockstarSupportEditions, rockstarViPage]}
          className="mt-6"
        />
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        <article className="rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8">
          <h2 className="text-3xl font-black">Named weapons</h2>
          <ul className="mt-6 space-y-4 text-lg leading-8 text-zinc-300">
            <li>
              <Link href="/weapons/hawk-little-morgan" className="font-semibold text-white hover:text-pink-400">
                Hawk &amp; Little Morgan Revolvers
              </Link>
              . His and hers revolvers sourced from the Vercetti Estate, with palm-tree-etched grips and a high-performance scope.
            </li>
            <li>
              <Link href="/weapons/girardi-es9" className="font-semibold text-white hover:text-pink-400">
                Girardi ES9
              </Link>
              . Jason&apos;s engraved pistol.
            </li>
            <li>
              <Link href="/weapons/klose-k17" className="font-semibold text-white hover:text-pink-400">
                Klose K17
              </Link>
              . Lucia&apos;s engraved pistol.
            </li>
          </ul>
        </article>

        <article className="rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8">
          <h2 className="text-3xl font-black">Ultimate shops and extras</h2>
          <ul className="mt-6 space-y-3 text-lg leading-8 text-zinc-300">
            {ultimatePlaces.map((place) => (
              <li key={place}>{place}</li>
            ))}
          </ul>
          <p className="mt-6 leading-8 text-zinc-400">
            Rockstar also lists Vice City Style clothes for Jason and Lucia.
            These places are edition bonuses. They are not a full map of Leonida.
          </p>
        </article>
      </section>
    </PageShell>
  );
}
