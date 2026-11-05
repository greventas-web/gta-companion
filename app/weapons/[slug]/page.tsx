import { notFound } from "next/navigation";

import PageShell from "@/components/PageShell";
import WeaponDetailsPage from "@/components/weapon/WeaponDetailsPage";

import { weapons } from "@/data/weapons";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

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