import { notFound } from "next/navigation";

import PageShell from "@/components/PageShell";
import WeaponDetailsPage from "@/components/weapon/WeaponDetailsPage";

import { weapons } from "@/data/weapons";
import { detailMetadata } from "@/lib/pages";
import type { Metadata } from "next";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return weapons.map((weapon) => ({ slug: weapon.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const weapon = weapons.find((item) => item.slug === slug);

  if (!weapon) {
    return {};
  }

  return detailMetadata(weapon.name, weapon.description);
}

export default async function WeaponPage({
  params,
}: Props) {
  const { slug } = await params;

  const weapon = weapons.find(
    (weapon) => weapon.slug === slug
  );

  if (!weapon) {
    notFound();
  }

  const relatedWeapons = weapons
    .filter(
      (w) =>
        w.slug !== weapon.slug &&
        (
          w.category === weapon.category ||
          w.manufacturer === weapon.manufacturer
        )
    )
    .slice(0, 3);

  return (
    <PageShell>

      <WeaponDetailsPage
        weapon={weapon}
        relatedWeapons={relatedWeapons}
      />

    </PageShell>
  );
}