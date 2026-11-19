"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import type { Canvas, CircleMarker, LayerGroup, Map as LeafletMap, Renderer } from "leaflet";
import * as L from "leaflet";
import {
  CATEGORY_COLOR,
  categoryHasDetailPages,
  LANDMARK_FILTERS,
  landmarkTitle,
  MAP_CATEGORIES,
  MAP_WORLD_HALF,
  tileBaseUrl,
  tileMaxNativeZoom,
  type CompanionPin,
  type LandmarkFilterId,
  type LandmarkRecord,
  type MapCategoryId,
} from "@/lib/map/model";
import { NEAR_ME_RADIUS_M, PRO_PRICE_LABEL } from "@/lib/pro/config";
import { useProHint, useTracked } from "@/lib/pro/tracker";

type Selection =
  | { kind: "companion"; pin: CompanionPin }
  | { kind: "landmark"; landmark: LandmarkRecord };

type Props = {
  curated: CompanionPin[];
  focusPin: string;
  focusEntity: string;
  focusSlug: string;
};

/** Tracked id for a pin: the mission's own id when it has one, else the pin id. */
function pinTrackId(pin: CompanionPin): string {
  if (pin.entityType === "mission" && pin.entitySlug) return `mission:${pin.entitySlug}`;
  return `pin:${pin.id}`;
}

const gameCrs = L.extend({}, L.CRS.Simple, {
  transformation: new L.Transformation(1 / 32, 512, -1 / 32, 512),
}) as L.CRS;

export default function CommunityMap({
  curated,
  focusPin,
  focusEntity,
  focusSlug,
}: Props) {
  const frameRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const landmarkLayer = useRef<LayerGroup | null>(null);
  const companionLayer = useRef<LayerGroup | null>(null);
  const landmarkRenderer = useRef<Canvas | null>(null);
  const companionRenderer = useRef<Renderer | null>(null);
  const draftMarker = useRef<CircleMarker | null>(null);
  const highlightMarker = useRef<CircleMarker | null>(null);
  const suggestingRef = useRef(false);
  const onDraftRef = useRef<(x: number, y: number) => void>(() => undefined);
  const onMoveRef = useRef<(x: number, y: number) => void>(() => undefined);
  const nearMeCircle = useRef<L.Circle | null>(null);
  const { set: tracked, toggle: toggleTracked } = useTracked();
  const pro = useProHint();
  const [nearMe, setNearMe] = useState(false);
  const [center, setCenter] = useState<{ x: number; y: number } | null>(null);
  const [ready, setReady] = useState(false);
  const [landmarks, setLandmarks] = useState<LandmarkRecord[]>([]);
  const [approved, setApproved] = useState<CompanionPin[]>([]);
  const [landmarksReady, setLandmarksReady] = useState(false);
  const [enabled, setEnabled] = useState<MapCategoryId[]>(
    MAP_CATEGORIES.map((category) => category.id)
  );
  const [showLandmarks, setShowLandmarks] = useState(true);
  const [tags, setTags] = useState<LandmarkFilterId[]>([]);
  const [search, setSearch] = useState("");
  const [picked, setPicked] = useState<Selection | null>(null);
  const [dismissedFocus, setDismissedFocus] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(() => {
    if (typeof window === "undefined") return true;
    const desktop = window.matchMedia("(min-width: 768px)").matches;
    return desktop || Boolean(focusPin || (focusEntity && focusSlug));
  });
  const [suggesting, setSuggesting] = useState(false);
  const [draft, setDraft] = useState<{ x: number; y: number } | null>(null);
  const [category, setCategory] = useState<MapCategoryId>("locations");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [entitySlug, setEntitySlug] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const [submitterName, setSubmitterName] = useState("");
  const [website, setWebsite] = useState("");
  const [startedAt] = useState(() => Date.now());
  const [sending, setSending] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [formError, setFormError] = useState("");

  const focusKey = `${focusPin}|${focusEntity}|${focusSlug}`;
  const [focusStamp, setFocusStamp] = useState(focusKey);
  if (focusStamp !== focusKey) {
    setFocusStamp(focusKey);
    setPicked(null);
    setDismissedFocus(false);
  }

  const focusSelection = useMemo<Selection | null>(() => {
    const pool = [...curated, ...approved];
    const matches = focusPin
      ? pool.filter((pin) => pin.id === focusPin)
      : focusEntity && focusSlug
        ? pool.filter((pin) => pin.entityType === focusEntity && pin.entitySlug === focusSlug)
        : [];
    if (matches.length === 0) return null;
    return { kind: "companion", pin: matches[0] };
  }, [approved, curated, focusEntity, focusPin, focusSlug]);

  const selected = picked ?? (dismissedFocus ? null : focusSelection);

  useEffect(() => {
    suggestingRef.current = suggesting;
  }, [suggesting]);

  useEffect(() => {
    onDraftRef.current = (x, y) => setDraft({ x, y });
    onMoveRef.current = (x, y) => setCenter({ x, y });
  });

  useEffect(() => {
    let cancel = false;
    fetch("/maps/landmarks.json")
      .then((response) => response.json())
      .then((data: LandmarkRecord[]) => {
        if (!cancel) setLandmarks(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        if (!cancel) setLandmarks([]);
      })
      .finally(() => {
        if (!cancel) setLandmarksReady(true);
      });
    fetch("/api/map/submissions")
      .then((response) => (response.ok ? response.json() : { pins: [] }))
      .then((body: { pins?: CompanionPin[] }) => {
        if (!cancel) setApproved(Array.isArray(body.pins) ? body.pins : []);
      })
      .catch(() => undefined);
    return () => {
      cancel = true;
    };
  }, []);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    let map: LeafletMap | null = null;
    const nativeZoom = tileMaxNativeZoom();
    map = L.map(frame, {
      crs: gameCrs,
      minZoom: 0,
      maxZoom: Math.max(6, nativeZoom),
      maxBounds: L.latLngBounds(
        [-MAP_WORLD_HALF - 400, -MAP_WORLD_HALF - 400],
        [MAP_WORLD_HALF + 400, MAP_WORLD_HALF + 400]
      ),
      maxBoundsViscosity: 0.85,
      zoomControl: false,
      attributionControl: true,
      zoomSnap: 0.25,
      wheelPxPerZoomLevel: 70,
    });
    L.control.zoom({ position: "topright" }).addTo(map);
    L.tileLayer(`${tileBaseUrl()}/{z}/{z},{y},{x}.jpg`, {
      tileSize: 256,
      minZoom: 0,
      maxZoom: Math.max(6, nativeZoom),
      maxNativeZoom: nativeZoom,
      noWrap: true,
      bounds: L.latLngBounds(
        [-MAP_WORLD_HALF, -MAP_WORLD_HALF],
        [MAP_WORLD_HALF, MAP_WORLD_HALF]
      ),
      errorTileUrl: "/maps/empty-tile.png",
      attribution:
        'Tiles and landmarks by <a href="https://gtadb.org" rel="noopener noreferrer">gtadb.org and all contributors</a> (CC BY 4.0). Unofficial. Grand Theft Auto VI by Rockstar Games.',
    }).addTo(map);
    map.attributionControl.setPrefix("Leaflet");
    landmarkLayer.current = L.layerGroup().addTo(map);
    companionLayer.current = L.layerGroup().addTo(map);
    // Pins use their own SVG pane above the landmark canvas. A canvas covers the
    // whole map and would swallow taps that miss a landmark, including every pin.
    const pinPane = map.createPane("companionPins");
    pinPane.style.zIndex = "640";
    pinPane.style.pointerEvents = "none";
    landmarkRenderer.current = L.canvas({ padding: 0.5 });
    companionRenderer.current = L.svg({ pane: "companionPins" });
    map.fitBounds(L.latLngBounds([-8200, -10000], [9100, 3400]), {
      padding: [28, 28],
      maxZoom: 3,
    });
    map.on("click", (event) => {
      if (!suggestingRef.current) return;
      onDraftRef.current(event.latlng.lng, event.latlng.lat);
    });
    map.on("moveend", () => {
      const point = map?.getCenter();
      if (point) onMoveRef.current(point.lng, point.lat);
    });
    mapRef.current = map;
    requestAnimationFrame(() => map?.invalidateSize());
    setReady(true);

    return () => {
      map?.remove();
      mapRef.current = null;
      landmarkLayer.current = null;
      companionLayer.current = null;
      draftMarker.current = null;
      highlightMarker.current = null;
      nearMeCircle.current = null;
      setReady(false);
    };
  }, []);

  const nearMeOn = nearMe && pro && center !== null;

  const companionPins = useMemo(() => {
    const visible = [...curated, ...approved].filter((pin) => enabled.includes(pin.category));
    if (!nearMeOn || !center) return visible;
    return visible.filter(
      (pin) =>
        !tracked.has(pinTrackId(pin)) &&
        Math.hypot(pin.x - center.x, pin.y - center.y) <= NEAR_ME_RADIUS_M
    );
  }, [approved, center, curated, enabled, nearMeOn, tracked]);

  const nearestLeft = useMemo(() => {
    if (!nearMeOn || !center) return [];
    return companionPins
      .map((pin) => ({ pin, distance: Math.hypot(pin.x - center.x, pin.y - center.y) }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 6);
  }, [center, companionPins, nearMeOn]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !ready) return;
    nearMeCircle.current?.remove();
    nearMeCircle.current = null;
    if (!nearMeOn || !center) return;
    nearMeCircle.current = L.circle([center.y, center.x], {
      radius: NEAR_ME_RADIUS_M,
      weight: 1.5,
      color: "#34d399",
      fillColor: "#34d399",
      fillOpacity: 0.06,
      interactive: false,
    }).addTo(map);
  }, [center, nearMeOn, ready]);

  useEffect(() => {
    const layer = landmarkLayer.current;
    const map = mapRef.current;
    const renderer = landmarkRenderer.current;
    if (!layer || !map || !renderer || !ready) return;
    layer.clearLayers();
    if (showLandmarks) {
      for (const landmark of landmarks) {
        if (tags.length > 0 && !landmark.tags.some((tag) => tags.includes(tag as LandmarkFilterId))) {
          continue;
        }
        const marker = L.circleMarker([landmark.y, landmark.x], {
          renderer,
          radius: 4,
          weight: 1,
          color: "#ddd6fe",
          fillColor: "#7c3aed",
          fillOpacity: 0.9,
        });
        marker.on("click", (event) => {
          if (suggestingRef.current) return;
          L.DomEvent.stopPropagation(event);
          setPicked({ kind: "landmark", landmark });
          setDismissedFocus(false);
          setSheetOpen(true);
        });
        layer.addLayer(marker);
      }
    }
    // An empty canvas still covers the map and takes the tap. Drop it when
    // landmarks are hidden or none of them match the filters.
    if (layer.getLayers().length === 0 && map.hasLayer(renderer)) {
      map.removeLayer(renderer);
    }
  }, [landmarks, ready, showLandmarks, tags]);

  useEffect(() => {
    const layer = companionLayer.current;
    if (!layer || !ready) return;
    layer.clearLayers();
    const renderer = companionRenderer.current ?? undefined;
    for (const pin of companionPins) {
      const marker = L.circleMarker([pin.y, pin.x], {
        renderer,
        radius: 8,
        weight: 2,
        color: "#ffffff",
        fillColor: CATEGORY_COLOR[pin.category],
        fillOpacity: 0.95,
      });
      marker.on("click", (event) => {
        if (suggestingRef.current) return;
        L.DomEvent.stopPropagation(event);
        setPicked({ kind: "companion", pin });
        setDismissedFocus(false);
        setSheetOpen(true);
      });
      layer.addLayer(marker);
    }
  }, [companionPins, ready]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !ready) return;
    draftMarker.current?.remove();
    draftMarker.current = null;
    if (!suggesting || !draft) return;
    draftMarker.current = L.circleMarker([draft.y, draft.x], {
      radius: 10,
      weight: 2,
      color: "#ffffff",
      fillColor: "#f472b6",
      fillOpacity: 1,
      interactive: false,
    }).addTo(map);
  }, [draft, ready, suggesting]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !ready) return;
    highlightMarker.current?.remove();
    highlightMarker.current = null;
    if (!selected || suggesting) return;
    const point = selected.kind === "landmark" ? selected.landmark : selected.pin;
    highlightMarker.current = L.circleMarker([point.y, point.x], {
      radius: 14,
      weight: 2,
      color: "#ffffff",
      fillColor: "#c084fc",
      fillOpacity: 0.2,
      interactive: false,
    }).addTo(map);
  }, [ready, selected, suggesting]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !ready) return;
    const pool = [...curated, ...approved];
    const matches = focusPin
      ? pool.filter((pin) => pin.id === focusPin)
      : focusEntity && focusSlug
        ? pool.filter((pin) => pin.entityType === focusEntity && pin.entitySlug === focusSlug)
        : [];
    if (matches.length === 0) return;
    if (matches.length === 1) {
      map.setView([matches[0].y, matches[0].x], 4);
    } else {
      map.fitBounds(
        L.latLngBounds(matches.map((pin) => [pin.y, pin.x] as [number, number])),
        { padding: [40, 40], maxZoom: 4 }
      );
    }
  }, [approved, curated, focusEntity, focusPin, focusSlug, ready]);

  const results = useMemo(() => buildResults(search, companionPins, landmarks, showLandmarks, tags), [
    companionPins,
    landmarks,
    search,
    showLandmarks,
    tags,
  ]);

  function flyTo(x: number, y: number) {
    const map = mapRef.current;
    if (!map) return;
    map.setView([y, x], Math.max(map.getZoom(), 4), { animate: true });
  }

  function toggleCategory(id: MapCategoryId) {
    setEnabled((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  }

  function toggleTag(id: LandmarkFilterId) {
    setTags((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  }

  async function submitSuggestion(event: FormEvent) {
    event.preventDefault();
    if (!draft) {
      setFormError("Tap the map to drop a pin.");
      return;
    }
    setSending(true);
    setFormError("");
    setFormMessage("");
    try {
      const response = await fetch("/api/map/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category,
          title,
          description,
          x: draft.x,
          y: draft.y,
          entitySlug,
          sourceUrl,
          submitterName,
          website,
          startedAt,
        }),
      });
      const body = (await response.json().catch(() => null)) as { error?: string } | null;
      if (!response.ok) {
        setFormError(body?.error || "Could not send that suggestion.");
        return;
      }
      setFormMessage("Submitted for review. It stays off the public map until a moderator approves it.");
      setTitle("");
      setDescription("");
      setEntitySlug("");
      setSourceUrl("");
      setSubmitterName("");
      setDraft(null);
      setSuggesting(false);
    } catch {
      setFormError("Could not send that suggestion.");
    } finally {
      setSending(false);
    }
  }

  const counts = useMemo(() => {
    const all = [...curated, ...approved];
    return Object.fromEntries(
      MAP_CATEGORIES.map((item) => [item.id, all.filter((pin) => pin.category === item.id).length])
    ) as Record<MapCategoryId, number>;
  }, [approved, curated]);

  return (
    <div className="companion-map relative h-full w-full overflow-hidden bg-[#123a5c]">
      <div ref={frameRef} className="absolute inset-0" aria-label="Leonida map" role="application" />

      <div className="pointer-events-none absolute left-2 right-16 top-2 z-[400]">
        <p className="pointer-events-auto inline-block max-w-full rounded-2xl bg-black/75 px-3 py-2 text-[11px] leading-4 text-zinc-200 shadow-lg">
          Unofficial. Tiles and landmarks by{" "}
          <a className="text-violet-200 underline decoration-violet-300/50" href="https://gtadb.org" rel="noopener noreferrer">
            gtadb.org and all contributors
          </a>{" "}
          (CC BY 4.0). Rockstar Games made Grand Theft Auto VI.
        </p>
      </div>

      <button
        type="button"
        onClick={() => setSheetOpen((open) => !open)}
        className="absolute bottom-3 left-3 z-[1100] rounded-full border border-violet-300/30 bg-[#140a22]/95 px-4 py-2 text-sm font-semibold text-white shadow-lg md:hidden"
      >
        {sheetOpen ? "Hide panel" : "Search and layers"}
      </button>

      <aside
        className={`${sheetOpen ? "flex" : "hidden"} absolute inset-x-0 bottom-0 z-[1050] max-h-[min(58vh,520px)] flex-col gap-3 overflow-y-auto rounded-t-3xl border border-violet-300/20 bg-[#100816]/95 p-3 text-white shadow-2xl backdrop-blur md:inset-y-3 md:left-3 md:right-auto md:z-[450] md:max-h-none md:w-[340px] md:rounded-3xl md:p-4`}
      >
        <label className="block">
          <span className="sr-only">Search the map</span>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search places"
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-3 py-2.5 text-sm outline-none ring-violet-400/40 placeholder:text-zinc-500 focus:ring-2"
          />
        </label>

        {selected ? (
          <SelectionCard
            selection={selected}
            done={selected.kind === "companion" ? tracked.has(pinTrackId(selected.pin)) : false}
            onToggleDone={
              selected.kind === "companion" ? () => toggleTracked(pinTrackId(selected.pin)) : undefined
            }
            onClose={() => {
              setPicked(null);
              setDismissedFocus(true);
            }}
          />
        ) : null}

        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => {
              setSuggesting((value) => !value);
              setFormError("");
              setFormMessage("");
            }}
            className={`rounded-full px-3 py-2 text-sm font-semibold ${
              suggesting
                ? "bg-fuchsia-500 text-white"
                : "border border-violet-300/40 bg-violet-500/20 text-violet-50"
            }`}
          >
            {suggesting ? "Cancel pin" : "Suggest a location"}
          </button>
          {suggesting ? (
            <p className="text-xs leading-4 text-violet-100">Tap the map to drop a pin.</p>
          ) : null}
        </div>

        {suggesting ? (
          <form onSubmit={submitSuggestion} className="space-y-2 rounded-2xl border border-white/10 bg-black/30 p-3">
            <label className="block text-xs text-zinc-400">
              Category
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value as MapCategoryId)}
                className="mt-1 w-full rounded-xl border border-white/10 bg-[#1a1024] px-2 py-2 text-sm text-white"
              >
                {MAP_CATEGORIES.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>
            <Field label="Title" value={title} onChange={setTitle} maxLength={80} />
            <label className="block text-xs text-zinc-400">
              Short description
              <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                maxLength={500}
                rows={3}
                className="mt-1 w-full resize-none rounded-xl border border-white/10 bg-black/40 px-2 py-2 text-sm text-white outline-none"
              />
            </label>
            {categoryHasDetailPages(category) ? (
              <Field
                label="Database slug, optional"
                value={entitySlug}
                onChange={setEntitySlug}
                maxLength={80}
                placeholder="jack-of-hearts"
              />
            ) : null}
            <Field
              label="Source link, optional"
              value={sourceUrl}
              onChange={setSourceUrl}
              maxLength={400}
              placeholder="https://"
            />
            <Field label="Name, optional" value={submitterName} onChange={setSubmitterName} maxLength={60} />
            <label className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
              Website
              <input
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(event) => setWebsite(event.target.value)}
              />
            </label>
            <p className="text-[11px] text-zinc-500">
              {draft
                ? `Pin at ${draft.x.toFixed(0)}, ${draft.y.toFixed(0)}`
                : "No pin yet."}
            </p>
            {formError ? <p className="text-xs text-rose-300">{formError}</p> : null}
            {formMessage ? <p className="text-xs text-emerald-300">{formMessage}</p> : null}
            <button
              type="submit"
              disabled={sending || !draft}
              className="w-full rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 px-3 py-2 text-sm font-semibold text-white disabled:opacity-50"
            >
              {sending ? "Sending…" : "Submit for review"}
            </button>
          </form>
        ) : formMessage ? (
          <p className="text-xs leading-5 text-emerald-300">{formMessage}</p>
        ) : null}

        <section className="rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-3">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
              What&apos;s left near me
            </h2>
            {pro ? (
              <button
                type="button"
                aria-pressed={nearMe}
                onClick={() => {
                  const map = mapRef.current;
                  if (map && !center) {
                    const point = map.getCenter();
                    setCenter({ x: point.lng, y: point.lat });
                  }
                  setNearMe((value) => !value);
                }}
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  nearMe ? "bg-emerald-400 text-black" : "border border-emerald-300/40 text-emerald-100"
                }`}
              >
                {nearMe ? "On" : "Off"}
              </button>
            ) : (
              <Link
                href="/pro"
                className="rounded-full border border-emerald-300/40 px-3 py-1 text-xs font-semibold text-emerald-100"
              >
                Pro · {PRO_PRICE_LABEL}
              </Link>
            )}
          </div>
          {nearMeOn ? (
            <>
              <p className="mt-1 text-[11px] text-zinc-400">
                Map center · {(NEAR_ME_RADIUS_M / 1000).toFixed(1)} km · {companionPins.length} left
              </p>
              <ul className="mt-2 space-y-1">
                {nearestLeft.map(({ pin, distance }) => (
                  <li key={pin.id}>
                    <button
                      type="button"
                      onClick={() => {
                        flyTo(pin.x, pin.y);
                        setPicked({ kind: "companion", pin });
                        setDismissedFocus(false);
                      }}
                      className="flex w-full items-center justify-between gap-2 rounded-xl px-2 py-1.5 text-left text-xs hover:bg-white/5"
                    >
                      <span className="min-w-0 truncate">{pin.title}</span>
                      <span className="shrink-0 text-zinc-500">{Math.round(distance)} m</span>
                    </button>
                  </li>
                ))}
                {nearestLeft.length === 0 ? (
                  <li className="px-2 py-1 text-xs text-zinc-500">All done here.</li>
                ) : null}
              </ul>
            </>
          ) : null}
        </section>

        <fieldset>
          <legend className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-200">
            Companion
          </legend>
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            {MAP_CATEGORIES.map((item) => (
              <label key={item.id} className="flex items-center gap-2 rounded-xl px-1 py-1 text-xs text-zinc-200">
                <input
                  type="checkbox"
                  checked={enabled.includes(item.id)}
                  onChange={() => toggleCategory(item.id)}
                  className="accent-violet-400"
                />
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: CATEGORY_COLOR[item.id] }}
                />
                <span className="min-w-0 truncate">
                  {item.label}
                  <span className="text-zinc-500"> {counts[item.id]}</span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-200">
            <input
              type="checkbox"
              checked={showLandmarks}
              onChange={() => setShowLandmarks((value) => !value)}
              className="accent-violet-400"
            />
            Landmarks
          </legend>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {LANDMARK_FILTERS.map((filter) => {
              const active = tags.includes(filter.id);
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => toggleTag(filter.id)}
                  className={`rounded-full px-2.5 py-1 text-[11px] ${
                    active
                      ? "bg-violet-400 text-[#140818]"
                      : "border border-white/10 text-zinc-300"
                  }`}
                  aria-pressed={active}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
          <p className="mt-1 text-[11px] text-zinc-500">
            {landmarksReady
              ? tags.length === 0
                ? "Showing every landmark tag."
                : "Showing the tags you picked."
              : "Loading landmarks…"}
          </p>
        </fieldset>

        <ul className="space-y-1 pb-10 md:pb-0">
          {results.map((result) => (
            <li key={result.key}>
              <button
                type="button"
                onClick={() => {
                  flyTo(result.x, result.y);
                  setPicked(result.selection);
                  setDismissedFocus(false);
                  setSheetOpen(true);
                }}
                className="w-full rounded-xl px-2 py-2 text-left hover:bg-white/5"
              >
                <span className="block truncate text-sm font-medium">{result.title}</span>
                <span className="block truncate text-[11px] text-zinc-400">{result.subtitle}</span>
              </button>
            </li>
          ))}
          {results.length === 0 ? (
            <li className="px-2 py-2 text-xs text-zinc-500">Nothing matches that search.</li>
          ) : null}
        </ul>
      </aside>

      <style>{`
        .companion-map .leaflet-container {
          height: 100%;
          width: 100%;
          background: #143e66;
          font: inherit;
        }
        .companion-map .leaflet-control-attribution {
          max-width: min(100% - 1rem, 28rem);
          white-space: normal;
          background: rgba(8, 6, 16, 0.82);
          color: #d4d4d8;
        }
        .companion-map .leaflet-companionPins-pane { pointer-events: none; }
        .companion-map .leaflet-companionPins-pane path.leaflet-interactive { pointer-events: auto; }
        @media (max-width: 767px) {
          .companion-map .leaflet-bottom.leaflet-right {
            max-width: calc(100% - 12.75rem);
          }
          .companion-map .leaflet-control-attribution {
            max-width: 100%;
            margin: 0 4px 6px 0 !important;
            padding: 2px 6px;
            font-size: 10px;
            line-height: 1.3;
            border-radius: 0.6rem;
          }
        }
        .companion-map .leaflet-control-attribution a { color: #d8b4fe; }
        .companion-map .leaflet-bar a,
        .companion-map .leaflet-bar a:hover {
          background: #140a22;
          color: #fff;
          border-bottom-color: rgba(255,255,255,.12);
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  maxLength,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  maxLength: number;
  placeholder?: string;
}) {
  return (
    <label className="block text-xs text-zinc-400">
      {label}
      <input
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-2 py-2 text-sm text-white outline-none"
      />
    </label>
  );
}

function SelectionCard({
  selection,
  onClose,
  done = false,
  onToggleDone,
}: {
  selection: Selection;
  onClose: () => void;
  done?: boolean;
  onToggleDone?: () => void;
}) {
  if (selection.kind === "landmark") {
    const { title, area } = landmarkTitle(selection.landmark.name);
    return (
      <article className="rounded-2xl border border-violet-300/20 bg-violet-500/10 p-3">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-[0.16em] text-violet-200">Landmark</p>
            <h2 className="truncate text-base font-semibold">{title}</h2>
            <p className="text-xs text-zinc-400">{area || selection.landmark.name}</p>
          </div>
          <button type="button" onClick={onClose} className="text-xs text-zinc-400">
            Close
          </button>
        </div>
        {selection.landmark.tags.length > 0 ? (
          <p className="mt-2 text-[11px] text-zinc-300">{selection.landmark.tags.join(" · ")}</p>
        ) : null}
      </article>
    );
  }

  const pin = selection.pin;
  const category = MAP_CATEGORIES.find((item) => item.id === pin.category);
  return (
    <article className="rounded-2xl border border-violet-300/20 bg-violet-500/10 p-3">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-[0.16em] text-violet-200">
            {category?.label}
            {pin.role ? ` · ${pin.role}` : ""}
          </p>
          <h2 className="text-base font-semibold">{pin.title}</h2>
        </div>
        <button type="button" onClick={onClose} className="text-xs text-zinc-400">
          Close
        </button>
      </div>
      {pin.description ? <p className="mt-2 text-xs leading-5 text-zinc-300">{pin.description}</p> : null}
      {onToggleDone ? (
        <button
          type="button"
          aria-pressed={done}
          onClick={onToggleDone}
          className={`mr-3 mt-2 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
            done ? "bg-emerald-400 text-black" : "border border-white/20 text-zinc-200"
          }`}
        >
          {done ? "✓ Done" : "Mark done"}
        </button>
      ) : null}
      {pin.href ? (
        <Link href={pin.href} className="mt-2 inline-flex text-sm font-semibold text-violet-200 underline">
          Open in the database
        </Link>
      ) : (
        <p className="mt-2 text-[11px] text-zinc-500">No database page for this pin yet.</p>
      )}
    </article>
  );
}

function buildResults(
  search: string,
  pins: CompanionPin[],
  landmarks: LandmarkRecord[],
  showLandmarks: boolean,
  tags: LandmarkFilterId[]
) {
  const query = search.trim().toLowerCase();
  const pinResults = pins
    .filter((pin) => {
      if (!query) return true;
      return `${pin.title} ${pin.description} ${pin.role ?? ""}`.toLowerCase().includes(query);
    })
    .slice(0, query ? 12 : 8)
    .map((pin) => ({
      key: `pin-${pin.id}`,
      title: pin.title,
      subtitle: MAP_CATEGORIES.find((item) => item.id === pin.category)?.label ?? "Companion",
      x: pin.x,
      y: pin.y,
      selection: { kind: "companion", pin } as Selection,
    }));

  if (query.length < 2 || !showLandmarks) return pinResults;

  const landmarkResults = [];
  for (const landmark of landmarks) {
    if (tags.length > 0 && !landmark.tags.some((tag) => tags.includes(tag as LandmarkFilterId))) continue;
    const { title, area } = landmarkTitle(landmark.name);
    if (!`${title} ${area} ${landmark.name}`.toLowerCase().includes(query)) continue;
    landmarkResults.push({
      key: `lm-${landmark.id}`,
      title,
      subtitle: area || "Landmark",
      x: landmark.x,
      y: landmark.y,
      selection: { kind: "landmark", landmark } as Selection,
    });
    if (landmarkResults.length >= 20) break;
  }
  return [...pinResults, ...landmarkResults];
}
