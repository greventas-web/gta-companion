/**
 * Leonida map space
 * -----------------
 * Origin (0, 0) is the southwest corner of the active base layer.
 * x increases east (right). y increases north (up).
 * This matches Leaflet CRS.Simple, where a marker is placed at [y, x].
 *
 * The schematic layer is 1200 by 1600 of these units. Its SVG is drawn with
 * the usual top-left origin, so a pixel at (svgX, svgY) is map (svgX, 1600 - svgY).
 *
 * Launch day
 * ----------
 * Swap the base art without editing components. Either:
 * 1. Point `schematic.url` at the new official image (SVG, PNG, or JPG) and
 *    set `officialImagery: true` when the file is Rockstar's own map, or
 * 2. Set `ACTIVE_LAYER_ID` to `"official"` or `"tiles"` below.
 *
 * Tiles use the same origin and size. At zoom 0, one map unit is one pixel.
 * `{z}/{x}/{y}` follows Leaflet's CRS.Simple grid: tileSize 256, x increases
 * east, and y increases south in the tile index. Keep `width` and `height`
 * equal to the source image's pixel size so markers stay aligned.
 */

export const MAP_WIDTH = 1200;
export const MAP_HEIGHT = 1600;

export type MapImageLayer = {
  id: string;
  type: "image";
  url: string;
  width: number;
  height: number;
  officialImagery: boolean;
  attribution: string;
};

export type MapTileLayer = {
  id: string;
  type: "tiles";
  urlTemplate: string;
  width: number;
  height: number;
  tileSize: number;
  minZoom: number;
  maxZoom: number;
  officialImagery: boolean;
  attribution: string;
};

export type MapLayer = MapImageLayer | MapTileLayer;

export const MAP_LAYERS = {
  schematic: {
    id: "schematic",
    type: "image",
    url: "/map/layers/leonida-schematic.svg",
    width: MAP_WIDTH,
    height: MAP_HEIGHT,
    officialImagery: false,
    attribution: "Stylized diagram from official Rockstar footage",
  },
  official: {
    id: "official",
    type: "image",
    url: "/map/layers/official-leonida.jpg",
    width: MAP_WIDTH,
    height: MAP_HEIGHT,
    officialImagery: true,
    attribution: "Map imagery: Rockstar Games",
  },
  tiles: {
    id: "tiles",
    type: "tiles",
    urlTemplate: "/map/tiles/{z}/{x}/{y}.png",
    width: MAP_WIDTH,
    height: MAP_HEIGHT,
    tileSize: 256,
    minZoom: 0,
    maxZoom: 4,
    officialImagery: true,
    attribution: "Map imagery: Rockstar Games",
  },
} as const satisfies Record<string, MapLayer>;

/** Change this id to swap the base map. Components read it and nothing else. */
export const ACTIVE_LAYER_ID: keyof typeof MAP_LAYERS = "schematic";

export const ACTIVE_MAP_LAYER: MapLayer = MAP_LAYERS[ACTIVE_LAYER_ID];

export const MAP_ATTRIBUTION_NOTE =
  "Map based on official Rockstar footage, positions approximate until launch";
