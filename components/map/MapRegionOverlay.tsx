import { MapRegion } from "@/types/map";

type Props = {
  regions: MapRegion[];
  selectedRegion: MapRegion;
};

export default function MapRegionOverlay({
  regions,
  selectedRegion,
}: Props) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1200 900"
    >
      {regions.map((region) => (
        <circle
          key={region.id}
          cx={(region.x / 100) * 1200}
          cy={(region.y / 100) * 900}
          r={selectedRegion.id === region.id ? 38 : 26}
          fill={region.color}
          opacity={selectedRegion.id === region.id ? 0.18 : 0.08}
          stroke={region.color}
          strokeWidth={selectedRegion.id === region.id ? 3 : 1.5}
        />
      ))}
    </svg>
  );
}