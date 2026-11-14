"use client";

import dynamic from "next/dynamic";

import MapFallback from "./MapFallback";

const MapExperience = dynamic(() => import("./MapExperience"), {
  ssr: false,
  loading: () => <MapFallback />,
});

export default function MapLoader() {
  return <MapExperience />;
}
