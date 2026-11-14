"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import type { LatLngBoundsExpression, Map as LeafletMap } from "leaflet";

import { ACTIVE_MAP_LAYER, MAP_FRAME } from "@/src/data/map/config";
import { CATEGORY_META } from "@/src/data/map/categories";
import type { MapMarker } from "@/src/data/map/types";
import type { VisibleCategory } from "@/src/data/map/types";
import { blipMarkup } from "./icons";

import "leaflet/dist/leaflet.css";
import "./map.css";

export type MapView = {
  x: number;
  y: number;
  z: number;
  west: number;
  east: number;
  south: number;
  north: number;
};

export type MapCanvasHandle = {
  zoomIn: () => void;
  zoomOut: () => void;
  reset: () => void;
  flyTo: (x: number, y: number, zoom?: number) => void;
  setView: (x: number, y: number, zoom: number) => void;
  getZoom: () => number;
};

type Props = {
  markers: MapMarker[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onViewChange: (view: MapView) => void;
  onReady: () => void;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function isVisibleCategory(category: MapMarker["category"]): category is VisibleCategory {
  return category !== "unconfirmed";
}

const MapCanvas = forwardRef<MapCanvasHandle, Props>(function MapCanvas(
  { markers, selectedId, onSelect, onViewChange, onReady },
  ref
) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef(markers);
  const selectedRef = useRef(selectedId);
  const onSelectRef = useRef(onSelect);
  const onViewRef = useRef(onViewChange);
  const boundsRef = useRef<LatLngBoundsExpression | null>(null);

  markersRef.current = markers;
  selectedRef.current = selectedId;
  onSelectRef.current = onSelect;
  onViewRef.current = onViewChange;

  useImperativeHandle(ref, () => ({
    zoomIn() {
      mapRef.current?.zoomIn();
    },
    zoomOut() {
      mapRef.current?.zoomOut();
    },
    reset() {
      const map = mapRef.current;
      const bounds = boundsRef.current;
      if (!map || !bounds) return;
      map.fitBounds(
        [
          [MAP_FRAME.south, MAP_FRAME.west],
          [MAP_FRAME.north, MAP_FRAME.east],
        ],
        { ...framePadding(), animate: true, duration: 0.6 }
      );
    },
    flyTo(x, y, zoom) {
      const map = mapRef.current;
      if (!map) return;
      const nextZoom = zoom ?? Math.min(map.getMaxZoom(), Math.max(map.getZoom(), 0.85));
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const finish = () => {
        const narrow = window.innerWidth < 1024;
        map.panBy(narrow ? [0, -30] : [-70, 0], { animate: !reduce, duration: 0.25 });
      };
      if (reduce) {
        map.setView([y, x], nextZoom, { animate: false });
        finish();
      } else {
        map.flyTo([y, x], nextZoom, { duration: 0.85 });
        map.once("moveend", finish);
      }
    },
    setView(x, y, zoom) {
      mapRef.current?.setView([y, x], zoom, { animate: false });
    },
    getZoom() {
      return mapRef.current?.getZoom() ?? 0;
    },
  }));

  useEffect(() => {
    const node = nodeRef.current;
    if (!node || mapRef.current) return;

    let map: LeafletMap | null = null;
    let group: import("leaflet").LayerGroup | null = null;
    let removed = false;

    void import("leaflet").then((L) => {
      if (removed || !nodeRef.current) return;

      const layer = ACTIVE_MAP_LAYER;
      const bounds = L.latLngBounds([0, 0], [layer.height, layer.width]);
      boundsRef.current = bounds;

      map = L.map(node, {
        crs: L.CRS.Simple,
        zoomControl: false,
        minZoom: -2.5,
        maxZoom: layer.type === "tiles" ? layer.maxZoom : 3,
        zoomSnap: 0.25,
        zoomDelta: 0.5,
        wheelPxPerZoomLevel: 70,
        doubleClickZoom: true,
        keyboard: true,
        keyboardPanDelta: 90,
        inertia: true,
        attributionControl: true,
      });

      mapRef.current = map;
      map.attributionControl.setPrefix("Leaflet");

      if (layer.type === "image") {
        L.imageOverlay(layer.url, bounds, { interactive: false }).addTo(map);
        map.attributionControl.addAttribution(layer.attribution);
      } else {
        L.tileLayer(layer.urlTemplate, {
          tileSize: layer.tileSize,
          minZoom: layer.minZoom,
          maxZoom: layer.maxZoom,
          bounds,
          noWrap: true,
          attribution: layer.attribution,
        }).addTo(map);
      }

      const frame = L.latLngBounds(
        [MAP_FRAME.south, MAP_FRAME.west],
        [MAP_FRAME.north, MAP_FRAME.east]
      );
      map.setMaxBounds(bounds.pad(0.05));
      map.fitBounds(frame, { ...framePadding(), animate: false });

      group = L.layerGroup().addTo(map);

      const draw = () => {
        if (!map || !group) return;
        group.clearLayers();
        const current = markersRef.current.filter(
          (marker) => marker.confirmed && isVisibleCategory(marker.category)
        );

        for (const marker of current) {
          if (!isVisibleCategory(marker.category)) continue;
          const category = marker.category;
          const selected = marker.id === selectedRef.current;
          const color = CATEGORY_META[category].color;
          const side = marker.labelSide;
          const labeled = marker.showLabel;
          const icon = L.divIcon({
            className: "map-pin-wrap",
            iconSize: labeled ? labelBox(side).size : [40, 40],
            iconAnchor: labeled ? labelBox(side).anchor : [20, 20],
            html: blipMarkup(
              category,
              color,
              selected,
              labeled ? escapeHtml(marker.title) : null,
              side
            ),
          });
          L.marker([marker.y, marker.x], {
            icon,
            title: marker.title,
            keyboard: true,
            zIndexOffset: selected ? 800 : 0,
          })
            .on("click", () => onSelectRef.current(marker.id))
            .addTo(group);
        }
      };

      map.on("zoomend", draw);
      map.on("moveend", () => {
        const center = map?.getCenter();
        const box = map?.getBounds();
        if (!map || !center || !box) return;
        onViewRef.current({
          x: center.lng,
          y: center.lat,
          z: map.getZoom(),
          west: box.getWest(),
          east: box.getEast(),
          south: box.getSouth(),
          north: box.getNorth(),
        });
      });

      const observer = new ResizeObserver(() => {
        map?.invalidateSize();
      });
      observer.observe(node);

      draw();
      onReady();

      mapRef.current = map;
      const cleanupObserver = observer;
      const cleanupMap = map;
      const cleanup = () => {
        cleanupObserver.disconnect();
        cleanupMap.remove();
      };
      node.dataset.cleanup = "1";
      (node as HTMLDivElement & { __cleanup?: () => void }).__cleanup = cleanup;
    });

    return () => {
      removed = true;
      const cleanup = (node as HTMLDivElement & { __cleanup?: () => void }).__cleanup;
      cleanup?.();
      mapRef.current = null;
    };
  }, [onReady]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    map.fire("zoomend");
  }, [markers, selectedId]);

  return (
    <div className="leonida-map h-full w-full">
      <div
        ref={nodeRef}
        className="h-full w-full"
        role="application"
        aria-label="Leonida map. Pinch, scroll, or use the arrow keys to move."
      />
    </div>
  );
});

export default MapCanvas;

function framePadding() {
  const narrow = window.innerWidth < 1024;
  if (narrow) {
    return {
      paddingTopLeft: [16, 16] as [number, number],
      paddingBottomRight: [16, 188] as [number, number],
    };
  }
  return {
    paddingTopLeft: [380, 18] as [number, number],
    paddingBottomRight: [24, 18] as [number, number],
  };
}

function labelBox(side: "left" | "right" | "top" | "bottom") {
  if (side === "left") return { size: [188, 40] as [number, number], anchor: [168, 20] as [number, number] };
  if (side === "top") return { size: [160, 68] as [number, number], anchor: [80, 48] as [number, number] };
  if (side === "bottom") return { size: [160, 68] as [number, number], anchor: [80, 20] as [number, number] };
  return { size: [188, 40] as [number, number], anchor: [20, 20] as [number, number] };
}
