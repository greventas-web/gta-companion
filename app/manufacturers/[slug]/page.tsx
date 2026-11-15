import { notFound } from "next/navigation";

import PageShell from "@/components/PageShell";
import ManufacturerDetailsPage from "@/components/manufacturers/ManufacturerDetailsPage";

import { manufacturers } from "@/data/manufacturers";
import { vehicles } from "@/data/vehicles";
import { detailMetadata } from "@/lib/pages";
import type { Metadata } from "next";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return manufacturers.map((manufacturer) => ({ slug: manufacturer.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const manufacturer = manufacturers.find((item) => item.slug === slug);

  if (!manufacturer) {
    return {};
  }

  return detailMetadata(manufacturer.name, manufacturer.description);
}

export default async function ManufacturerPage({
  params,
}: Props) {
  const { slug } = await params;

  const manufacturer = manufacturers.find(
    (m) => m.slug === slug
  );

  if (!manufacturer) {
    notFound();
  }

  const manufacturerVehicles = vehicles.filter(
    (vehicle) =>
      vehicle.manufacturer === manufacturer.name
  );

  return (
    <PageShell>

      <ManufacturerDetailsPage
        manufacturer={manufacturer}
        vehicles={manufacturerVehicles}
      />

    </PageShell>
  );
}