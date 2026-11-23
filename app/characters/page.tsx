import { QuickGuideGrid } from "@/components/guides/QuickGuidePage";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import SimpleCard, { CardGrid, SimpleHero } from "@/components/simple/SimpleCard";
import { ExtraGrids, extraHref } from "@/components/simple/Extras";
import { extras } from "@/src/data/launch/expansion";
import { characters } from "@/data/characters";
import { pageMetadata } from "@/lib/launch";
import { staticMapHref } from "@/lib/map/catalog";
import { itemListJsonLd } from "@/lib/seo";
import { quickGuideCards } from "@/src/data/launch/quick-guides";

export const metadata = pageMetadata(
  'GTA 6 characters',
  'Unofficial GTA 6 characters: Jason Duval, Lucia Caminos and the rest of the cast, with pictures.'
);

const items = characters;
const groupNames = ["all"];
const groups = groupNames
  .map((name) => ({ name, list: items.filter((item) => "all" === name) }))
  .filter((group) => group.list.length > 0);

export default function CharactersPage() {
  return (
    <PageShell>
      <JsonLd
        data={itemListJsonLd(
          'GTA 6 characters',
          "/characters",
          [...items.map((item) => ({ name: item.name, url: `/characters/${item.slug}` })), ...extras.characters.map((entry) => ({ name: entry.name, url: extraHref("characters", entry) }))]
        )}
      />
      <SimpleHero title='Characters' />
      {groups.map((group) => (
        <CardGrid key={group.name} heading={groups.length > 1 ? group.name : "Main cast"} count={group.list.length} dense>
          {group.list.map((item) => (
            <SimpleCard
              key={item.slug}
              href={`/characters/${item.slug}`}
              title={item.name}
              image={item.image}
              eyebrow={item.role}
              line={undefined}
              mapHref={staticMapHref("character", item.slug) ?? undefined}
              small
            />
          ))}
        </CardGrid>
      ))}
      <ExtraGrids category="characters" />
      <QuickGuideGrid guides={quickGuideCards(["switch-characters", "relationship", "call-partner", "partner-drive", "criminal-profile", "character-stats", "final-flush", "freddie-gibbs"])} />
    </PageShell>
  );
}
