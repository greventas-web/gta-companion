import type { Metadata } from "next";

import MapLoader from "@/components/interactive-map/MapLoader";

const title = "GTA 6 Interactive Map";
const description =
  "Pan and search a stylized interactive map of Leonida for Grand Theft Auto VI. Vice City, the Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia, and Mount Kalaga, placed from official Rockstar footage. Positions are approximate until launch. Unofficial fan site.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/map",
  },
  openGraph: {
    title,
    description,
    url: "/map",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function MapPage() {
  return (
    <div className="fixed inset-x-0 bottom-0 top-28 z-40 bg-[#1276c9]">
      <link
        rel="preload"
        as="image"
        href="/map/layers/leonida-schematic.svg"
        fetchPriority="high"
      />
      {/* Painted with the document so the base map is not waiting on the map library. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/map/layers/leonida-schematic.svg"
        alt=""
        fetchPriority="high"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <MapLoader />
    </div>
  );
}
