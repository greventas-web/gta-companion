import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ViewOnMap from "@/components/map/ViewOnMap";
import PageShell from "@/components/PageShell";
import SimpleDetail from "@/components/simple/SimpleDetail";
import SimpleCard from "@/components/simple/SimpleCard";
import { manufacturers } from "@/data/manufacturers";
import { vehicles } from "@/data/vehicles";
import { manufacturerListImage, vehicleImages } from "@/lib/media/catalog";
import { staticMapHref } from "@/lib/map/catalog";
import { detailMetadata } from "@/lib/pages";
import { shortText } from "@/lib/simple/text";

type Props = { params: Promise<{ slug: string }> };

const items = manufacturers;

export function generateStaticParams() {
  return items.map((item) => ({ slug: item.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = items.find((entry) => entry.slug === slug);
  if (!item) return {};
  return detailMetadata(item.name, shortText(item.description, 2) || item.name);
}

export default async function ManufacturersDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = items.find((entry) => entry.slug === slug);
  if (!item) notFound();
  const cars = vehicles.filter((vehicle) => vehicle.manufacturer === item.name);
  const photo = manufacturerListImage(item);
  const map = null;
  const related = items.filter((entry) => entry.slug !== item.slug && false).slice(0, 4);

  return (
    <PageShell>
      <SimpleDetail
        crumbs={[{ label: "Home", href: "/" }, { label: 'Manufacturers', href: "/manufacturers" }, { label: item.name }]}
        eyebrow={item.country}
        title={item.name}
        image={photo?.src}
        imageAlt={photo?.alt}
        summary={item.description}
        facts={[{ label: "Country", value: item.country }, { label: "Founded", value: item.founded ?? "" }, { label: "Based in", value: item.headquarters ?? "" }]}
        mapHref={map}
        
        related={related.map((entry) => ({
          href: `/manufacturers/${entry.slug}`,
          title: entry.name,
          image: manufacturerListImage(item)?.src,
          small: true,
        }))}
      >
        {map ? null : null}
        {cars.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {cars.map((vehicle) => (
              <SimpleCard key={vehicle.slug} href={`/vehicles/${vehicle.slug}`} title={vehicle.name} image={vehicleImages(vehicle)[0]} eyebrow={vehicle.category} small />
            ))}
          </div>
        ) : null}
      </SimpleDetail>
    </PageShell>
  );
}
