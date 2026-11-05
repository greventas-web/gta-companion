"use client";

import MapBackground from "./MapBackground";
import MapGlow from "./MapGlow";
import MapGrid from "./MapGrid";
import MapLegend from "./MapLegend";
import MapFilters from "./MapFilters";
import MapPin from "./MapPin";

import { MapRegion } from "@/types/map";

type Props = {
  regions: MapRegion[];
  selectedRegion: MapRegion;
  onSelect: (region: MapRegion) => void;
};

export default function MapCanvas({
  regions,
  selectedRegion,
  onSelect,
}: Props) {
  return (
    <div className="relative min-h-[760px] overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#111114] via-[#09090B] to-black">

      <MapGlow />

      <MapBackground />

      <MapGrid />

      <MapFilters />

      <MapLegend />

      <div className="absolute inset-0">

        {regions.map((region) => (
          <div
            key={region.id}
            className="absolute"
            style={{
              left: `${region.x}%`,
              top: `${region.y}%`,
            }}
          >
            <MapPin
              name={region.name}
              color={region.color}
              active={selectedRegion.id === region.id}
              onClick={() => onSelect(region)}
            />
          </div>
        ))}

      </div>

    </div>
  );
}