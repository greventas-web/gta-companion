"use client";

import { useMemo, useState } from "react";

import { locations } from "@/data/locations";
import { mapRegions } from "@/data/mapRegions";

import MapControls from "./MapControls";
import MapDataPanel from "./MapDataPanel";
import MapEmptyState from "./MapEmptyState";
import MapFilters, {
  MapFilterType,
} from "./MapFilters";
import MapLegend from "./MapLegend";
import MapMarker, {
  MapMarkerData,
} from "./MapMarker";
import MapMarkerPopup from "./MapMarkerPopup";
import MapModeToggle, {
  MapMode,
} from "./MapModeToggle";
import MapSearch from "./MapSearch";
import MapSidebar from "./MapSidebar";

type Region = (typeof mapRegions)[number];

const fallbackPositions = [
  { x: 72, y: 68 },
  { x: 82, y: 84 },
  { x: 55, y: 48 },
  { x: 40, y: 18 },
  { x: 29, y: 54 },
  { x: 53, y: 66 },
  { x: 64, y: 42 },
  { x: 46, y: 35 },
  { x: 76, y: 52 },
  { x: 34, y: 72 },
];

const locationMarkers: MapMarkerData[] =
  locations.map((location, index) => {
    const fallback =
      fallbackPositions[
        index % fallbackPositions.length
      ];

    const locationX = Number(location.x);
    const locationY = Number(location.y);

    const x =
      Number.isFinite(locationX) &&
      locationX >= 0 &&
      locationX <= 100
        ? locationX
        : fallback.x;

    const y =
      Number.isFinite(locationY) &&
      locationY >= 0 &&
      locationY <= 100
        ? locationY
        : fallback.y;

    return {
      id: location.id,
      name: location.name,
      type: location.type,
      x,
      y,
      href: `/locations/${location.slug}`,
    };
  });

export default function LeonidaMap() {
  const [selectedRegion, setSelectedRegion] =
    useState<Region>(mapRegions[0]);

  const [selectedMarker, setSelectedMarker] =
    useState<MapMarkerData | null>(null);

  const [search, setSearch] = useState("");

  const [activeFilters, setActiveFilters] =
    useState<MapFilterType[]>([
      "locations",
      "businesses",
      "vehicles",
      "characters",
    ]);

  const [mode, setMode] =
    useState<MapMode>("standard");

  const [zoom, setZoom] = useState(1);

  const filteredMarkers = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!activeFilters.includes("locations")) {
      return [];
    }

    if (!query) {
      return locationMarkers;
    }

    return locationMarkers.filter((marker) => {
      return (
        marker.name
          .toLowerCase()
          .includes(query) ||
        marker.type
          .toLowerCase()
          .includes(query)
      );
    });
  }, [search, activeFilters]);

  function toggleFilter(filter: MapFilterType) {
    setActiveFilters((current) => {
      if (current.includes(filter)) {
        return current.filter(
          (item) => item !== filter
        );
      }

      return [...current, filter];
    });
  }

  function handleMarkerSelect(
    marker: MapMarkerData
  ) {
    setSelectedMarker(marker);

    const location = locations.find(
      (item) => item.id === marker.id
    );

    if (!location) {
      return;
    }

    const matchingRegion = mapRegions.find(
      (region) =>
        region.name.toLowerCase() ===
        location.name.toLowerCase()
    );

    if (matchingRegion) {
      setSelectedRegion(matchingRegion);
    }
  }

  function zoomIn() {
    setZoom((current) =>
      Math.min(current + 0.15, 1.75)
    );
  }

  function zoomOut() {
    setZoom((current) =>
      Math.max(current - 0.15, 0.75)
    );
  }

  function resetMap() {
    setZoom(1);
    setSelectedMarker(null);
  }

  function locateSelected() {
    if (selectedMarker) {
      return;
    }

    const firstLocation =
      locationMarkers[0];

    if (firstLocation) {
      setSelectedMarker(firstLocation);
    }
  }

  const mapBackground =
    mode === "satellite"
      ? "from-[#17221d] via-[#101815] to-[#070b09]"
      : mode === "night"
        ? "from-[#120b19] via-[#09090f] to-black"
        : "from-[#12373A] via-[#092327] to-[#061517]";

  return (
    <section className="mt-20">
      <div className="mb-12">
        <div className="text-xs font-black uppercase tracking-[0.4em] text-pink-400">
          Interactive Map
        </div>

        <h2 className="mt-4 text-5xl font-black tracking-[-0.03em] text-white">
          Explore Leonida
        </h2>

        <p className="mt-4 max-w-3xl text-lg text-zinc-400">
          Explore regions across Leonida and
          discover locations, businesses, vehicles
          and characters.
        </p>
      </div>

      <div className="grid gap-10 xl:grid-cols-[minmax(0,1.8fr)_minmax(340px,.8fr)]">
        {/* MAP */}
        <div
          className={`relative min-h-[760px] overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br ${mapBackground} shadow-[0_30px_100px_rgba(0,0,0,.35)]`}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(236,72,153,.08),transparent_50%)]" />

          <MapSearch
            value={search}
            onChange={setSearch}
            resultCount={filteredMarkers.length}
          />

          <MapFilters
            activeFilters={activeFilters}
            onToggle={toggleFilter}
          />

          <MapLegend />

          {/* MAP WORLD */}
          <div className="absolute inset-[70px_24px_80px] overflow-hidden rounded-[34px] border border-white/[0.06] bg-[#071214]">
            <div
              className="absolute inset-0 transition-transform duration-300 ease-out"
              style={{
                transform: `scale(${zoom})`,
              }}
            >
              {/* WATER */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#07191a] via-[#061315] to-[#030708]" />

              {/* ATMOSPHERIC GLOW */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(33,130,105,.14),transparent_50%)]" />

              {/* GRID */}
              <div
                className="absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
                  backgroundSize: "65px 65px",
                }}
              />

              {/* LEONIDA LAND */}
              <div className="absolute left-[5%] top-[4%] h-[43%] w-[42%] rotate-[7deg] rounded-[48%] bg-[#183128] shadow-[inset_0_0_80px_rgba(0,0,0,.35)]" />

              <div className="absolute left-[29%] top-[32%] h-[48%] w-[43%] rotate-[-8deg] rounded-[48%] bg-[#1a362b] shadow-[inset_0_0_80px_rgba(0,0,0,.35)]" />

              <div className="absolute right-[6%] top-[10%] h-[58%] w-[28%] rotate-[9deg] rounded-[48%] bg-[#152e27] shadow-[inset_0_0_80px_rgba(0,0,0,.35)]" />

              <div className="absolute bottom-[1%] left-[45%] h-[31%] w-[34%] rotate-[12deg] rounded-[50%] bg-[#17372c] shadow-[inset_0_0_80px_rgba(0,0,0,.35)]" />

              {/* WATER CHANNELS */}
              <div className="absolute left-[-5%] top-[42%] h-[17%] w-[75%] rotate-[17deg] rounded-[50%] border border-cyan-300/[0.08] bg-cyan-300/[0.015]" />

              <div className="absolute right-[7%] top-[4%] h-[85%] w-[17%] rotate-[8deg] rounded-[50%] border border-cyan-300/[0.08]" />

              <div className="absolute bottom-[-8%] left-[35%] h-[37%] w-[50%] rounded-[50%] border border-cyan-300/[0.08]" />

              {/* ROADS */}
              <div className="absolute left-[7%] top-[45%] h-px w-[72%] rotate-[13deg] bg-white/[0.07]" />

              <div className="absolute left-[18%] top-[20%] h-[65%] w-px rotate-[23deg] bg-white/[0.06]" />

              <div className="absolute left-[45%] top-[5%] h-[90%] w-px rotate-[6deg] bg-white/[0.05]" />

              <div className="absolute left-[25%] top-[68%] h-px w-[60%] rotate-[-10deg] bg-white/[0.06]" />

              {/* REAL LOCATION DATABASE MARKERS */}
              {filteredMarkers.map((marker) => (
                <MapMarker
                  key={marker.id}
                  marker={marker}
                  selected={
                    selectedMarker?.id ===
                    marker.id
                  }
                  onSelect={handleMarkerSelect}
                />
              ))}
            </div>
          </div>

          {filteredMarkers.length === 0 && (
            <MapEmptyState
              title={
                search
                  ? "No Locations Found"
                  : "Locations Hidden"
              }
              description={
                search
                  ? "Try another search term."
                  : "Turn the Locations filter back on to display map locations."
              }
              onClearSearch={() => {
                setSearch("");

                if (
                  !activeFilters.includes(
                    "locations"
                  )
                ) {
                  setActiveFilters((current) => [
                    ...current,
                    "locations",
                  ]);
                }
              }}
            />
          )}

          {selectedMarker && (
            <MapMarkerPopup
              marker={selectedMarker}
              onClose={() =>
                setSelectedMarker(null)
              }
            />
          )}

          <MapControls
            zoom={zoom}
            onZoomIn={zoomIn}
            onZoomOut={zoomOut}
            onReset={resetMap}
            onLocate={locateSelected}
          />

          <MapModeToggle
            mode={mode}
            onChange={setMode}
          />

          <div className="pointer-events-none absolute bottom-6 left-1/2 z-30 hidden -translate-x-1/2 rounded-full border border-white/10 bg-black/70 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500 backdrop-blur-xl lg:block">
            {filteredMarkers.length} Map Locations
          </div>

          <div className="pointer-events-none absolute left-7 top-7 z-20">
            <div className="text-[10px] font-black uppercase tracking-[0.35em] text-pink-400">
              GTA Companion
            </div>

            <div className="mt-1 text-sm font-black text-white">
              Leonida World Map
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-6">
          <MapSidebar
            region={selectedRegion}
          />

          <MapDataPanel
            title={selectedRegion.name}
            description={
              selectedRegion.description
            }
            locations={
              selectedRegion.locations
            }
            businesses={
              selectedRegion.businesses
            }
            vehicles={
              selectedRegion.vehicles
            }
            characters={
              selectedRegion.characters
            }
          />
        </div>
      </div>
    </section>
  );
}