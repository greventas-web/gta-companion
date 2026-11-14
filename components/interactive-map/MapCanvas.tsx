"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import type { LatLngBoundsExpression, Map as LeafletMap } from "leaflet";

import { ACTIVE_MAP_LAYER } from "@/src/data/map/config";
import { CATEGORY_META } from "@/src/data/map/categories";
import type { MapMarker } from "@/src/data/map/types";
import type { VisibleCategory } from "@/src/data/map/types";
import { categoryIconMarkup } from "./icons";

import "leaflet/dist/leaflet.css";
import "./map.css";

export type MapView = {
  x: number;
  y: number;
  z: number;
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
      map.fitBounds(bounds, { padding: [32, 32] });
    },
    flyTo(x, y, zoom) {
      const map = mapRef.current;
      if (!map) return;
      const nextZoom = zoom ?? Math.max(map.getZoom(), 1);
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        map.setView([y, x], nextZoom, { animate: false });
      } else {
        map.flyTo([y, x], nextZoom, { duration: 0.55 });
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

      map.setMaxBounds(bounds.pad(0.2));
      map.fitBounds(bounds, { padding: [36, 36], animate: false });

      group = L.layerGroup().addTo(map);

      const draw = () => {
        if (!map || !group) return;
        group.clearLayers();
        const current = markersRef.current.filter(
          (marker) => marker.confirmed && isVisibleCategory(marker.category)
        );
        const zoom = map.getZoom();
        const radius = zoom >= 1.25 ? 0 : zoom >= 0 ? 36 : 52;
        const clusters = cluster(map, current, radius);

        for (const items of clusters) {
          if (items.length === 1) {
            const marker = items[0];
            const selected = marker.id === selectedRef.current;
            const color = isVisibleCategory(marker.category)
              ? CATEGORY_META[marker.category].color
              : "#c4b5fd";
            const icon = L.divIcon({
              className: "map-pin-wrap",
              iconSize: [28, 28],
              iconAnchor: [14, 14],
              html: `<div class="map-pin${selected ? " is-selected" : ""}" style="--pin:${color}" title="${escapeHtml(marker.title)}">${categoryIconMarkup(marker.category as VisibleCategory, color)}</div>`,
            });
            L.marker([marker.y, marker.x], {
              icon,
              title: marker.title,
              keyboard: true,
              zIndexOffset: selected ? 500 : 0,
            })
              .on("click", () => onSelectRef.current(marker.id))
              .addTo(group);
          } else {
            const lat = items.reduce((sum, item) => sum + item.y, 0) / items.length;
            const lng = items.reduce((sum, item) => sum + item.x, 0) / items.length;
            const icon = L.divIcon({
              className: "map-pin-wrap",
              iconSize: [36, 36],
              iconAnchor: [18, 18],
              html: `<div class="map-cluster" title="${items.length} places">${items.length}</div>`,
            });
            L.marker([lat, lng], { icon, keyboard: true })
              .on("click", () => {
                const clusterBounds = L.latLngBounds(
                  items.map((item) => [item.y, item.x] as [number, number])
                );
                map?.fitBounds(clusterBounds.pad(0.45), {
                  maxZoom: (map?.getZoom() ?? 0) + 1.25,
                });
              })
              .addTo(group);
          }
        }
      };

      map.on("zoomend", draw);
      map.on("moveend", () => {
        const center = map?.getCenter();
        if (!map || !center) return;
        onViewRef.current({
          x: center.lng,
          y: center.lat,
          z: map.getZoom(),
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

function cluster(map: LeafletMap, markers: MapMarker[], radius: number) {
  if (radius <= 0) return markers.map((marker) => [marker]);

  const points = markers.map((marker) => ({
    marker,
    point: map.latLngToContainerPoint([marker.y, marker.x]),
  }));
  const used = new Set<string>();
  const groups: MapMarker[][] = [];

  for (const item of points) {
    if (used.has(item.marker.id)) continue;
    const group = [item.marker];
    used.add(item.marker.id);
    for (const other of points) {
      if (used.has(other.marker.id)) continue;
      const dx = item.point.x - other.point.x;
      const dy = item.point.y - other.point.y;
      if (dx * dx + dy * dy <= radius * radius) {
        group.push(other.marker);
        used.add(other.marker.id);
      }
    }
    groups.push(group);
  }

  return groups;
}
