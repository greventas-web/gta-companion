import Link from "next/link";

import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import { SourceList } from "@/components/SourceLink";
import {
  properties,
  propertyStorageNotes,
} from "@/data/properties";
import { pageMetadata } from "@/lib/launch";
import { UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import { famitsuSources } from "@/src/data/gameplay/confirmed";
import { PropertyMapLinks } from "@/components/properties/PropertyMapLinks";
import WhereToFindLinks from "@/components/where-to-find/WhereToFindLinks";

const title = "GTA 6 properties and garages (unofficial)";
const description =
  "Garages and the Keys hideout Rockstar and Rob Nelson have confirmed for Grand Theft Auto VI, with map links where a pin exists. Unofficial fan site, not affiliated with Rockstar Games or Take-Two.";

export const metadata = pageMetadata(title, description);

export default function PropertiesPage() {
  return (
    <PageShell>
      <PageHero
        badge="Unofficial fan database"
        title="Properties"
        description="Shore Court, Paradise Garage, and Jason's place in the Keys. Storage rules from Rob Nelson's Famitsu interview stay here until Rockstar names more buildings."
      />

      <section>
        <h2 className="text-4xl font-black tracking-[-0.03em]">
          Confirmed properties
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {properties.map((place) => (
            <article
              key={place.slug}
              className="rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8"
            >
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-teal-300">
                {place.type}
              </p>
              <h3 className="mt-3 text-2xl font-black">
                <Link
                  href={`/properties/${place.slug}`}
                  className="hover:text-pink-300"
                >
                  {place.name}
                </Link>
              </h3>
              <p className="mt-2 text-sm font-semibold text-pink-300">
                {place.area}
              </p>
              <p className="mt-4 leading-8 text-zinc-400">{place.summary}</p>
              <SourceList sources={place.sources} className="mt-4" />
              <PropertyMapLinks property={place} />
              <Link
                href={`/properties/${place.slug}`}
                className="mt-4 inline-flex text-sm font-semibold text-violet-200 underline-offset-2 hover:underline"
              >
                Property page
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-4xl font-black tracking-[-0.03em]">
          Storage and later hideouts
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
          These are rules Rob Nelson described to Famitsu. They are not extra
          named properties.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {propertyStorageNotes.map((note) => (
            <article
              key={note.title}
              className="rounded-[32px] border border-white/10 bg-[#0B0B0D] p-8"
            >
              <h3 className="text-2xl font-black">{note.title}</h3>
              <p className="mt-4 leading-8 text-zinc-400">{note.body}</p>
            </article>
          ))}
        </div>
        <SourceList sources={famitsuSources} className="mt-6" />
      </section>

      <p className="mt-12 text-zinc-300">
        Looking for a place to park?{" "}
        <Link href="/where-to-find/garages" className="underline decoration-white/20 underline-offset-4 hover:text-violet-200">
          All 10 garages with prices
        </Link>
      </p>
      <WhereToFindLinks className="mt-6" />

      <p className="mt-12 text-sm leading-7 text-zinc-500">
        {UNOFFICIAL_DISCLAIMER} Grand Theft Auto VI and these properties are
        from Rockstar Games.
      </p>
    </PageShell>
  );
}
