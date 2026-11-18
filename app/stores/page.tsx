import Link from "next/link";

import CatalogCard from "@/components/entries/CatalogCard";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import { SourceList } from "@/components/SourceLink";
import { stores } from "@/data/stores";
import { pageMetadata } from "@/lib/launch";
import { UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import {
  famitsuSources,
  gtadb,
  playstationGame,
  rockstarEditions,
  rockstarUltimate,
  rockstarViceCity,
} from "@/src/data/gameplay/confirmed";

const title = "GTA 6 stores list (unofficial)";
const description =
  "Stores and shops Rockstar has named for Grand Theft Auto VI, with map pins where a location is confirmed. Unofficial fan site, not affiliated with Rockstar Games or Take-Two.";

export const metadata = pageMetadata(title, description);

const indexSources = [
  rockstarUltimate,
  rockstarEditions,
  playstationGame,
  rockstarViceCity,
  ...famitsuSources,
  gtadb,
];

export default function StoresPage() {
  const ultimate = stores.filter((store) => store.editionRequirement === "ultimate");
  const world = stores.filter((store) => store.editionRequirement === "none" && store.hasPin);
  const systems = stores.filter((store) => store.editionRequirement === "none" && !store.hasPin);

  return (
    <PageShell>
      <PageHero
        badge="Unofficial fan database"
        title="Stores"
        description="Shops Rockstar has named, plus the Ammu-Nation locker note from sourced interviews. Hours, prices, and branch lists stay empty until they are confirmed."
      />
      <SourceList sources={indexSources} />

      <p className="mt-6 max-w-3xl leading-8 text-zinc-400">
        Clothing packs and salon or tattoo catalogs are on the{" "}
        <Link href="/clothing" className="text-violet-300 underline-offset-2 hover:underline">
          clothing
        </Link>{" "}
        pages. Edition rules are on{" "}
        <Link href="/launch" className="text-violet-300 underline-offset-2 hover:underline">
          Editions
        </Link>
        .
      </p>

      <StoreGroup title="Ultimate Edition" stores={ultimate} />
      <StoreGroup title="Vice City" stores={world} />
      <StoreGroup title="Named, not mapped" stores={systems} />

      <p className="mt-12 text-sm leading-7 text-zinc-500">{UNOFFICIAL_DISCLAIMER}</p>
    </PageShell>
  );
}

function StoreGroup({
  title,
  stores: group,
}: {
  title: string;
  stores: typeof stores;
}) {
  if (group.length === 0) return null;

  return (
    <section className="mt-14">
      <h2 className="text-3xl font-black tracking-[-0.03em]">{title}</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {group.map((store) => (
          <CatalogCard
            key={store.slug}
            href={`/stores/${store.slug}`}
            title={store.name}
            eyebrow={store.typeLabel}
            summary={store.summary}
            meta={store.hasPin ? "Confirmed map pin" : "No shop pin yet"}
            image={store.image}
            imageAlt={store.imageAlt}
          />
        ))}
      </div>
    </section>
  );
}
