import Link from "next/link";

import CatalogCard from "@/components/entries/CatalogCard";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import { SourceList } from "@/components/SourceLink";
import { clothing, clothingGroups } from "@/data/clothing";
import { pageMetadata } from "@/lib/launch";
import { UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import {
  famitsuSources,
  playstationGame,
  rockstarEditions,
  rockstarSupportEditions,
  rockstarUltimate,
} from "@/src/data/gameplay/confirmed";

const title = "GTA 6 outfits, hairstyles, and tattoos (unofficial)";
const description =
  "Outfits, hairstyles, and tattoos Rockstar has named for Grand Theft Auto VI, linked to the shops that sell or apply them. Unofficial fan site, not affiliated with Rockstar Games or Take-Two.";

export const metadata = pageMetadata(title, description);

const indexSources = [
  rockstarUltimate,
  rockstarEditions,
  playstationGame,
  rockstarSupportEditions,
  ...famitsuSources,
];

export default function ClothingPage() {
  return (
    <PageShell>
      <PageHero
        badge="Unofficial fan database"
        title="Clothing"
        description="Packs and pieces Rockstar has named, plus the shop catalogs that are confirmed as places and still waiting on item names. Rob Nelson has also said there are thousands of outfits, earned from missions or bought in stores."
      />
      <SourceList sources={indexSources} />

      <p className="mt-6 max-w-3xl leading-8 text-zinc-400">
        The shops themselves are on{" "}
        <Link href="/stores" className="text-violet-300 underline-offset-2 hover:underline">
          Stores
        </Link>
        . Edition rules are on{" "}
        <Link href="/launch" className="text-violet-300 underline-offset-2 hover:underline">
          Editions
        </Link>
        .
      </p>

      {clothingGroups.map((group) => {
        const items = clothing.filter((item) => item.group === group);
        return (
          <section key={group} className="mt-14">
            <h2 className="text-3xl font-black tracking-[-0.03em]">{group}</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {items.map((item) => (
                <CatalogCard
                  key={item.slug}
                  href={`/clothing/${item.slug}`}
                  title={item.name}
                  eyebrow={`${item.kindLabel} · ${item.appliesTo}`}
                  summary={item.summary}
                  meta={item.editionLabel}
                  image={item.image}
                  imageAlt={item.imageAlt}
                />
              ))}
            </div>
          </section>
        );
      })}

      <p className="mt-12 text-sm leading-7 text-zinc-500">{UNOFFICIAL_DISCLAIMER}</p>
    </PageShell>
  );
}
