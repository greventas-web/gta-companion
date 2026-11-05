import OceanLayer from "./svg/OceanLayer";
import LandLayer from "./svg/LandLayer";
import RiverLayer from "./svg/RiverLayer";
import RoadLayer from "./svg/RoadLayer";
import CityLayer from "./svg/CityLayer";
import LabelLayer from "./svg/LabelLayer";
import GlowLayer from "./svg/GlowLayer";

export default function MapBackground() {
  return (
    <svg
      viewBox="0 0 1200 900"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <OceanLayer />

      <GlowLayer />

      <LandLayer />

      <RiverLayer />

      <RoadLayer />

      <CityLayer />

      <LabelLayer />
    </svg>
  );
}