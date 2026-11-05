import { notFound } from "next/navigation";

import PageShell from "@/components/PageShell";
import ManufacturerDetailsPage from "@/components/manufacturers/ManufacturerDetailsPage";

import { manufacturers } from "@/data/manufacturers";
import { vehicles } from "@/data/vehicles";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

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