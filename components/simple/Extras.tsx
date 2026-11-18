import SimpleCard, { CardGrid } from "@/components/simple/SimpleCard";
import SimpleDetail from "@/components/simple/SimpleDetail";
import { extraGroups, extraPages, type ExtraCategory, type ExtraEntry } from "@/src/data/launch/expansion";

const LABEL: Record<ExtraCategory, string> = {
  locations: "Locations",
  businesses: "Businesses",
  stores: "Stores",
  characters: "Characters",
  brands: "Brands",
  clothing: "Clothing",
  animals: "Animals",
  activities: "Activities",
};

function groupId(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function extraHref(category: ExtraCategory, entry: ExtraEntry) {
  return entry.href ?? `/${category}/${entry.slug}`;
}

/** Card grids for the extra entries of one Browse category, grouped. */
export function ExtraGrids({ category }: { category: ExtraCategory }) {
  return (
    <>
      {extraGroups(category).map((group) => (
        <CardGrid key={group.name} id={groupId(group.name)} heading={group.name} count={group.list.length} dense>
          {group.list.map((entry) => (
            <SimpleCard
              key={entry.slug}
              href={extraHref(category, entry)}
              title={entry.name}
              image={entry.image}
              eyebrow={entry.meta}
              price={entry.price}
              mapPin={entry.pin}
              kind={category === "stores" ? kindForStoreGroup(group.name) : undefined}
              small
            />
          ))}
        </CardGrid>
      ))}
    </>
  );
}

function kindForStoreGroup(name: string) {
  if (/tattoo/i.test(name)) return "tattoo";
  if (/hair/i.test(name)) return "salon";
  if (/cloth/i.test(name)) return "clothingstore";
  if (/gun/i.test(name)) return "gunstore";
  if (/mod|spray/i.test(name)) return "mod";
  return "store";
}

/** Short detail page for an extra entry. */
export function ExtraDetail({ category, entry }: { category: ExtraCategory; entry: ExtraEntry }) {
  const related = extraPages(category)
    .filter((item) => item.group === entry.group && item.slug !== entry.slug)
    .slice(0, 4);
  return (
    <SimpleDetail
      crumbs={[{ label: "Home", href: "/" }, { label: LABEL[category], href: `/${category}` }, { label: entry.name }]}
      eyebrow={entry.meta}
      title={entry.name}
      image={entry.image}
      imageAlt={entry.name}
      summary={entry.summary}
      price={entry.price}
      facts={entry.facts}
      mapPin={entry.pin}
      links={entry.links}
      related={related.map((item) => ({
        href: `/${category}/${item.slug}`,
        title: item.name,
        image: item.image,
        eyebrow: item.meta,
        small: true,
      }))}
    />
  );
}
