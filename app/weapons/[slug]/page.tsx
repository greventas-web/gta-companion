import { notFound } from "next/navigation";
import type { Metadata } from "next";

import ViewOnMap from "@/components/map/ViewOnMap";
import PageShell from "@/components/PageShell";
import SimpleDetail from "@/components/simple/SimpleDetail";
import { weaponLine, weapons } from "@/data/weapons";
import { detailMetadata } from "@/lib/pages";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return weapons.map((weapon) => ({ slug: weapon.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const weapon = weapons.find((item) => item.slug === slug);
  if (!weapon) return {};
  return detailMetadata(weapon.name, weapon.description);
}

export default async function WeaponPage({ params }: Props) {
  const { slug } = await params;
  const weapon = weapons.find((item) => item.slug === slug);
  if (!weapon) notFound();

  const related = weapons
    .filter((w) => w.slug !== weapon.slug && (w.category === weapon.category || w.manufacturer === weapon.manufacturer))
    .slice(0, 4);

  return (
    <PageShell>
      <SimpleDetail
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Weapons", href: "/weapons" },
          { label: weapon.name },
        ]}
        eyebrow={weapon.type ? `${weapon.category} · ${weapon.type}` : weapon.category}
        title={weapon.name}
        image={weapon.image}
        imageAlt={weapon.imageAlt}
        price={weapon.price}
        summary={weapon.howToGet ?? weapon.description}
        facts={[
          { label: "Maker", value: weapon.manufacturer },
          { label: "Ammo", value: weapon.caliber ?? weapon.ammunition },
          { label: "Magazine", value: weapon.magazine ? `${weapon.magazine} rounds` : "" },
          { label: "Fire mode", value: weapon.fireMode ?? "" },
        ]}
        bars={
          weapon.stats
            ? [
                { label: "Damage", value: weapon.stats.damage },
                { label: "Accuracy", value: weapon.stats.accuracy },
                { label: "Handling", value: weapon.stats.handling },
                { label: "Range", value: weapon.stats.range },
              ]
            : undefined
        }
        links={weapon.getLinks}
        related={related.map((item) => ({
          href: `/weapons/${item.slug}`,
          title: item.name,
          image: item.image,
          imageAlt: item.imageAlt,
          eyebrow: item.manufacturer,
          line: weaponLine(item),
          price: item.price,
        }))}
        relatedHeading="Similar weapons"
      >
        <ViewOnMap entityType="weapon" entitySlug={weapon.slug} />
      </SimpleDetail>
    </PageShell>
  );
}
