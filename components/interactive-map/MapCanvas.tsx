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
  flyTo: (x: number, y: number, zoom?: number, focus?: { card?: boolean }) => void;
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
        { ...framePadding(false), animate: true, duration: 0.6 }
      );
    },
    flyTo(x, y, zoom, focus) {
      const map = mapRef.current;
      if (!map) return;
      const nextZoom =
        zoom ??
        (focus?.card
          ? Math.min(map.getMaxZoom(), map.getZoom() + (window.innerWidth < 1024 ? 0.35 : 0.6))
          : map.getZoom());
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const center = viewCenterFor(map, x, y, nextZoom, Boolean(focus?.card));
      if (reduce) {
        map.setView(center, nextZoom, { animate: false });
      } else {
        map.flyTo(center, nextZoom, { duration: 0.85 });
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
      map.setMaxBounds(bounds.pad(2));
      const fit = () => {
        if (!map) return;
        map.invalidateSize();
        if (window.innerWidth < 1024) {
          const size = map.getSize();
          const pad = framePadding(false);
          const availW = Math.max(120, size.x - pad.paddingTopLeft[0] - pad.paddingBottomRight[0]);
          const span = MAP_FRAME.east - MAP_FRAME.west;
          const zoom = Math.log2(availW / span);
          const midX = (MAP_FRAME.west + MAP_FRAME.east) / 2;
          const midY = (MAP_FRAME.south + MAP_FRAME.north) / 2;
          map.setView(viewCenterFor(map, midX, midY, zoom, false), zoom, { animate: false });
          const northEdge = map.latLngToContainerPoint([MAP_FRAME.north, midX]);
          if (northEdge.y > 18) map.panBy([0, northEdge.y - 12], { animate: false });
        } else {
          map.fitBounds(frame, { ...framePadding(false), animate: false });
        }
      };
      fit();
      requestAnimationFrame(fit);

      group = L.layerGroup().addTo(map);

      const draw = () => {
        if (!map || !group) return;
        group.clearLayers();
        const current = markersRef.current.filter(
          (marker) => marker.confirmed && isVisibleCategory(marker.category)
        );

        const narrow = window.innerWidth < 1024;
        const placed = narrow ? spreadBlips(map, current) : current.map((marker) => ({
          marker,
          lat: marker.y,
          lng: marker.x,
        }));

        for (const item of placed) {
          const marker = item.marker;
          if (!isVisibleCategory(marker.category)) continue;
          const category = marker.category;
          const selected = marker.id === selectedRef.current;
          const color = CATEGORY_META[category].color;
          const side = marker.labelSide;
          const labeled = marker.showLabel && !narrow;
          const box = narrow
            ? { size: [44, 44] as [number, number], anchor: [22, 22] as [number, number] }
            : labeled
              ? labelBox(side)
              : { size: [40, 40] as [number, number], anchor: [20, 20] as [number, number] };
          const icon = L.divIcon({
            className: "map-pin-wrap",
            iconSize: box.size,
            iconAnchor: box.anchor,
            html: blipMarkup(
              category,
              color,
              selected,
              labeled ? escapeHtml(marker.title) : null,
              side
            ),
          });
          L.marker([item.lat, item.lng], {
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

const PANEL_LEFT = 16;
const PANEL_WIDTH = 340;
const PANEL_MARGIN = 96;
const CARD_WIDTH = 360;
const CARD_MARGIN = 28;

function framePadding(cardOpen: boolean) {
  const narrow = window.innerWidth < 1024;
  if (narrow) {
    const sheet = cardOpen ? Math.round(window.innerHeight * 0.58) : 168;
    return {
      paddingTopLeft: [14, 10] as [number, number],
      paddingBottomRight: [14, sheet] as [number, number],
    };
  }
  const left = PANEL_LEFT + PANEL_WIDTH + PANEL_MARGIN;
  const right = cardOpen ? 16 + CARD_WIDTH + CARD_MARGIN : 36;
  return {
    paddingTopLeft: [left, 28] as [number, number],
    paddingBottomRight: [right, 28] as [number, number],
  };
}

function viewCenterFor(
  map: LeafletMap,
  x: number,
  y: number,
  zoom: number,
  cardOpen: boolean
) {
  const size = map.getSize();
  const pad = framePadding(cardOpen);
  const point = map.project([y, x], zoom);
  const visX =
    pad.paddingTopLeft[0] +
    (size.x - pad.paddingTopLeft[0] - pad.paddingBottomRight[0]) / 2;
  const visY =
    pad.paddingTopLeft[1] +
    (size.y - pad.paddingTopLeft[1] - pad.paddingBottomRight[1]) / 2;
  const centerPoint = point.subtract([visX - size.x / 2, visY - size.y / 2]);
  return map.unproject(centerPoint, zoom);
}

function spreadBlips(map: LeafletMap, markers: MapMarker[]) {
  const placed = markers.map((marker) => ({
    marker,
    point: map.latLngToContainerPoint([marker.y, marker.x]),
  }));
  const min = 36;
  for (let pass = 0; pass < 10; pass += 1) {
    for (let i = 0; i < placed.length; i += 1) {
      for (let j = i + 1; j < placed.length; j += 1) {
        const a = placed[i].point;
        const b = placed[j].point;
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        const dist = Math.hypot(dx, dy) || 0.01;
        if (dist >= min) continue;
        const push = (min - dist) / 2;
        dx /= dist;
        dy /= dist;
        a.x -= dx * push;
        a.y -= dy * push;
        b.x += dx * push;
        b.y += dy * push;
      }
    }
  }
  return placed.map((item) => {
    const latlng = map.containerPointToLatLng(item.point);
    return { marker: item.marker, lat: latlng.lat, lng: latlng.lng };
  });
}

function labelBox(side: "left" | "right" | "top" | "bottom") {
  if (side === "left") return { size: [188, 40] as [number, number], anchor: [168, 20] as [number, number] };
  if (side === "top") return { size: [160, 68] as [number, number], anchor: [80, 48] as [number, number] };
  if (side === "bottom") return { size: [160, 68] as [number, number], anchor: [80, 20] as [number, number] };
  return { size: [188, 40] as [number, number], anchor: [20, 20] as [number, number] };
}
