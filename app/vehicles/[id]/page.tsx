import { notFound } from "next/navigation";
import type { Metadata } from "next";

import ViewOnMap from "@/components/map/ViewOnMap";
import PageShell from "@/components/PageShell";
import SimpleDetail from "@/components/simple/SimpleDetail";
import { manufacturerByName } from "@/data/manufacturers";
import { vehicles } from "@/data/vehicles";
import { vehicleImages } from "@/lib/media/catalog";
import { detailMetadata } from "@/lib/pages";
import { cheatList } from "@/src/data/launch/cheat-list";
import { cheatSlug, groupForCheat } from "@/src/data/launch/cheats";

function statBars(stats: NonNullable<(typeof vehicles)[number]["stats"]>) {
  const bars: { label: string; value: number }[] = [];
  if (typeof stats.speed === "number") bars.push({ label: "Speed", value: stats.speed });
  if (typeof stats.acceleration === "number") bars.push({ label: "Acceleration", value: stats.acceleration });
  if (typeof stats.handling === "number") bars.push({ label: "Handling", value: stats.handling });
  return bars;
}

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({ id: vehicle.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const vehicle = vehicles.find((item) => item.slug === id);
  if (!vehicle) return {};
  return detailMetadata(vehicle.name, vehicle.description);
}

export default async function VehicleDetailsPage({ params }: Props) {
  const { id } = await params;
  const vehicle = vehicles.find((v) => v.slug === id);
  if (!vehicle) notFound();

  const maker = manufacturerByName(vehicle.manufacturer);
  const photos = vehicleImages(vehicle);
  const cheat = cheatList.find((item) => item.link === `/vehicles/${vehicle.slug}`);
  const related = vehicles.filter((v) => v.category === vehicle.category && v.slug !== vehicle.slug).slice(0, 4);
  const confirmed = vehicle.status === "Confirmed";

  return (
    <PageShell>
      <SimpleDetail
        crumbs={[{ label: "Home", href: "/" }, { label: "Vehicles", href: "/vehicles" }, { label: vehicle.name }]}
        eyebrow={vehicle.category}
        title={vehicle.name}
        image={photos[0]}
        imageAlt={vehicle.imageAlt}
        price={vehicle.price}
        summary={confirmed ? vehicle.description : "Not seen in GTA 6 yet. This name is from earlier GTA games."}
        facts={[
          { label: "Maker", value: vehicle.manufacturer },
          { label: "Top speed", value: vehicle.topSpeed ?? "" },
          { label: "Seats", value: vehicle.seats ? `${vehicle.seats}` : "" },
          { label: "Cheat code", value: cheat?.code ? cheat.code.join(" ") : "" },
        ]}
        bars={confirmed && vehicle.stats ? statBars(vehicle.stats) : undefined}
        links={[
          ...(maker ? [{ href: `/manufacturers/${maker.slug}`, label: maker.name }] : []),
          ...(cheat ? [{ href: `/cheats/${groupForCheat(cheat.category).slug}/${cheatSlug(cheat.name)}`, label: "Cheat" }] : []),
        ]}
        related={related.map((item) => ({
          href: `/vehicles/${item.slug}`,
          title: item.name,
          image: vehicleImages(item)[0],
          eyebrow: item.manufacturer,
          price: item.price,
          small: true,
        }))}
        relatedHeading="Similar"
      >
        {confirmed && vehicle.whereToFind ? (
          <p className="mt-6 text-zinc-300">
            <span className="font-semibold text-white">Where to find it: </span>
            {vehicle.whereToFind}
          </p>
        ) : null}
        {confirmed && vehicle.stats ? (
          <p className="mt-3 text-sm text-zinc-500">Bars are the in-game stat panel (out of 10), not measured speeds.</p>
        ) : null}
        <ViewOnMap entityType="vehicle" entitySlug={vehicle.slug} />
      </SimpleDetail>
    </PageShell>
  );
}
