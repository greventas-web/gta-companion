import { notFound } from "next/navigation";
import type { Metadata } from "next";

import ViewOnMap from "@/components/map/ViewOnMap";
import PageShell from "@/components/PageShell";
import SimpleDetail from "@/components/simple/SimpleDetail";
import { manufacturerByName } from "@/data/manufacturers";
import { vehicles } from "@/data/vehicles";
import { vehicleImages } from "@/lib/media/catalog";
import { makerLabel, vehicleMark } from "@/lib/simple/marks";
import { vehicleCatalog } from "@/lib/simple/vehicleCopy";
import { detailMetadata } from "@/lib/pages";
import { THIN_ROBOTS } from "@/lib/thin-content";
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
  const copy = vehicleCatalog(vehicle);
  const blurb = vehicle.status === "Confirmed" ? [copy.summary, copy.where].filter(Boolean).join(" ") : "Not seen in GTA 6 yet. This name is from earlier GTA games.";
  const meta = detailMetadata(vehicle.name, blurb);
  // Names from earlier GTA games that are not in GTA 6 have no page of their own to index.
  // Every vehicle page is under 100 words today (Nov 28 crawl), so none is indexed yet.
  return { ...meta, robots: THIN_ROBOTS };
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
  const makerName = makerLabel(vehicle.manufacturer);
  const copy = vehicleCatalog(vehicle);

  return (
    <PageShell>
      <SimpleDetail
        crumbs={[{ label: "Home", href: "/" }, { label: "Vehicles", href: "/vehicles" }, { label: vehicle.name }]}
        eyebrow={vehicle.category}
        title={vehicle.name}
        image={photos[0]}
        imageAlt={vehicle.imageAlt}
        mark={vehicleMark(vehicle.category, vehicle.slug)}
        markLabel={vehicle.name}
        price={vehicle.price}
        summary={confirmed ? copy.summary : "Not seen in GTA 6 yet. This name is from earlier GTA games."}
        where={confirmed ? copy.where : undefined}
        facts={[
          { label: "Maker", value: makerName },
          { label: "Top speed", value: vehicle.topSpeed ?? "" },
          { label: "Seats", value: vehicle.seats ? `${vehicle.seats}` : "" },
          { label: "Unlock", value: confirmed ? copy.unlock : "" },
          { label: "Cheat code", value: cheat?.code ? cheat.code.join(" ") : "" },
        ]}
        bars={confirmed && vehicle.stats ? statBars(vehicle.stats) : undefined}
        links={[
          ...(maker ? [{ href: `/manufacturers/${maker.slug}`, label: maker.name }] : []),
          ...(cheat ? [{ href: `/cheats/${groupForCheat(cheat.category).slug}/${cheatSlug(cheat.name)}`, label: "Cheat" }] : []),
          ...related.map((item) => ({ href: `/vehicles/${item.slug}`, label: item.name })),
        ]}
      >
        <ViewOnMap entityType="vehicle" entitySlug={vehicle.slug} />
      </SimpleDetail>
    </PageShell>
  );
}
