import Link from "next/link";

import ViewOnMap from "@/components/map/ViewOnMap";
import type { PropertyRecord } from "@/data/properties";

export function PropertyMapLinks({ property }: { property: PropertyRecord }) {
  if (property.map.kind === "entity") {
    return <ViewOnMap entityType="property" entitySlug={property.slug} />;
  }

  return (
    <div className="mt-6">
      <p className="text-sm leading-6 text-zinc-500">{property.map.note}</p>
      <Link
        href={`/map?pin=${encodeURIComponent(property.map.pinId)}`}
        className="mt-3 inline-flex rounded-full border border-violet-400/40 bg-violet-500/15 px-5 py-2.5 text-sm font-semibold text-violet-100 transition hover:bg-violet-500/25"
      >
        {property.map.label}
      </Link>
    </div>
  );
}
