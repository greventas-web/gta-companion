import ViewOnMapLink from "@/components/map/ViewOnMapLink";
import { staticMapHref } from "@/lib/map/catalog";
import type { MapEntityType } from "@/lib/map/model";

type Props = {
  entityType: MapEntityType;
  entitySlug: string;
};

export default function ViewOnMap({ entityType, entitySlug }: Props) {
  return (
    <ViewOnMapLink
      entityType={entityType}
      entitySlug={entitySlug}
      staticHref={staticMapHref(entityType, entitySlug)}
    />
  );
}
