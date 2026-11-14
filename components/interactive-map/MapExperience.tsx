"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type RefObject,
} from "react";
import {
  Check,
  LocateFixed,
  Maximize2,
  Minimize2,
  Minus,
  Plus,
  Search,
  X,
} from "lucide-react";

import { ACTIVE_MAP_LAYER, MAP_ATTRIBUTION_NOTE, MAP_HEIGHT, MAP_WIDTH } from "@/src/data/map/config";
import { CATEGORY_META, CATEGORY_ORDER } from "@/src/data/map/categories";
import { markerById, publicMapMarkers } from "@/src/data/map/markers";
import type { VisibleCategory } from "@/src/data/map/types";
import { IMAGE_CREDIT, UNOFFICIAL_DISCLAIMER } from "@/lib/site";
import { CategoryIcon } from "./icons";
import MapCanvas, {
  type MapCanvasHandle,
  type MapView,
} from "./MapCanvas";

const FOUND_KEY = "gta-companion.map.found.v1";

type InitialView = {
  marker: string | null;
  x: number | null;
  y: number | null;
  z: number | null;
};

function readFound() {
  try {
    const raw = localStorage.getItem(FOUND_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed)
      ? parsed.filter((value): value is string => typeof value === "string")
      : [];
  } catch {
    return [];
  }
}

function readInitial(): InitialView {
  const params = new URLSearchParams(window.location.search);
  const num = (key: string) => {
    const value = params.get(key);
    if (value == null || value === "") return null;
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  };
  return {
    marker: params.get("marker"),
    x: num("x"),
    y: num("y"),
    z: num("z"),
  };
}

export default function MapExperience() {
  const mapRef = useRef<MapCanvasHandle>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const mobileSearchRef = useRef<HTMLInputElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const initialRef = useRef<InitialView | null>(null);
  if (initialRef.current === null) initialRef.current = readInitial();

  const [ready, setReady] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeCategories, setActiveCategories] = useState<VisibleCategory[]>(
    [...CATEGORY_ORDER]
  );
  const [found, setFound] = useState<string[]>(() => readFound());
  const [hideFound, setHideFound] = useState(false);
  const [view, setView] = useState<MapView | null>(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [sheet, setSheet] = useState<"peek" | "filters" | "detail">("peek");

  const onReady = useCallback(() => setReady(true), []);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const footer = document.querySelector("footer");
    const footerDisplay = footer?.style.display ?? "";
    if (footer) footer.style.display = "none";
    return () => {
      document.body.style.overflow = previous;
      if (footer) footer.style.display = footerDisplay;
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(FOUND_KEY, JSON.stringify(found));
  }, [found]);

  useEffect(() => {
    function onFullscreen() {
      setFullscreen(document.fullscreenElement === rootRef.current);
    }
    document.addEventListener("fullscreenchange", onFullscreen);
    return () => document.removeEventListener("fullscreenchange", onFullscreen);
  }, []);

  const selectMarker = useCallback((id: string) => {
    const marker = markerById(id);
    if (!marker || marker.category === "unconfirmed") return;
    const category = marker.category;
    setActiveCategories((current) =>
      current.includes(category) ? current : [...current, category]
    );
    setSelectedId(id);
    setQuery("");
    setSearchOpen(false);
    setSheet("detail");
    mapRef.current?.flyTo(marker.x, marker.y, undefined, { card: true });
  }, []);

  useEffect(() => {
    if (!ready) return;
    const initial = initialRef.current;
    if (!initial) return;
    if (initial.marker && markerById(initial.marker)) {
      const marker = markerById(initial.marker);
      if (!marker) return;
      setSelectedId(marker.id);
      setSheet("detail");
      mapRef.current?.flyTo(marker.x, marker.y, initial.z ?? undefined, { card: true });
      return;
    }
    if (initial.x != null && initial.y != null && initial.z != null) {
      mapRef.current?.setView(initial.x, initial.y, initial.z);
    }
  }, [ready]);

  useEffect(() => {
    if (!ready || !view) return;
    const url = new URL(window.location.href);
    url.searchParams.set("x", view.x.toFixed(1));
    url.searchParams.set("y", view.y.toFixed(1));
    url.searchParams.set("z", view.z.toFixed(2));
    if (selectedId) url.searchParams.set("marker", selectedId);
    else url.searchParams.delete("marker");
    const next = `${url.pathname}${url.search}`;
    if (next !== `${window.location.pathname}${window.location.search}`) {
      window.history.replaceState(null, "", next);
    }
  }, [ready, selectedId, view]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      const typing =
        target?.tagName === "INPUT" || target?.tagName === "TEXTAREA";
      if (event.key === "/" && !typing) {
        event.preventDefault();
        const field =
          window.innerWidth >= 1024 ? searchRef.current : mobileSearchRef.current;
        field?.focus();
      }
      if (event.key === "Escape") {
        setSelectedId(null);
        setSearchOpen(false);
        setSheet("peek");
      }
      if ((event.key === "f" || event.key === "F") && !typing) {
        void toggleFullscreen();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return publicMapMarkers
      .filter((marker) => {
        const label =
          marker.category === "unconfirmed"
            ? ""
            : CATEGORY_META[marker.category].label;
        return (
          marker.title.toLowerCase().includes(q) ||
          marker.description.toLowerCase().includes(q) ||
          label.toLowerCase().includes(q)
        );
      })
      .slice(0, 8);
  }, [query]);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return publicMapMarkers.filter((marker) => {
      if (marker.category === "unconfirmed") return false;
      if (!activeCategories.includes(marker.category)) return false;
      if (hideFound && found.includes(marker.id) && marker.id !== selectedId) {
        return false;
      }
      if (!q) return true;
      const label = CATEGORY_META[marker.category].label;
      return (
        marker.title.toLowerCase().includes(q) ||
        marker.description.toLowerCase().includes(q) ||
        label.toLowerCase().includes(q)
      );
    });
  }, [activeCategories, found, hideFound, query, selectedId]);

  const selected = selectedId ? markerById(selectedId) : null;

  function toggleCategory(category: VisibleCategory) {
    setActiveCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category]
    );
  }

  function toggleFound(id: string) {
    setFound((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  async function toggleFullscreen() {
    const node = rootRef.current;
    if (!node) return;
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await node.requestFullscreen();
    }
  }

  const foundCount = publicMapMarkers.filter((marker) =>
    found.includes(marker.id)
  ).length;

  return (
    <div ref={rootRef} className="relative h-full w-full bg-transparent text-white">
      <MapCanvas
        ref={mapRef}
        markers={shown}
        selectedId={selectedId}
        onSelect={selectMarker}
        onViewChange={setView}
        onReady={onReady}
      />

      <aside className="absolute bottom-4 left-4 top-4 z-20 hidden w-[340px] flex-col overflow-hidden rounded-3xl border border-violet-200/15 bg-[#120b1c]/95 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl lg:flex">
        <PanelBody
          query={query}
          setQuery={setQuery}
          searchRef={searchRef}
          suggestions={suggestions}
          searchOpen={searchOpen}
          setSearchOpen={setSearchOpen}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          onPick={selectMarker}
          activeCategories={activeCategories}
          onToggleCategory={toggleCategory}
          found={found}
          hideFound={hideFound}
          setHideFound={setHideFound}
          shown={shown}
          onSelect={selectMarker}
          selectedId={selectedId}
        />
      </aside>

      {selected ? (
        <aside className="absolute bottom-4 right-4 top-4 z-30 hidden w-[360px] overflow-hidden rounded-3xl border border-violet-200/20 bg-[#140c22] shadow-[0_24px_80px_rgba(0,0,0,0.55)] lg:flex">
          <Detail
            marker={selected}
            found={found.includes(selected.id)}
            onFound={() => toggleFound(selected.id)}
            onClose={() => {
              setSelectedId(null);
              setSheet("peek");
            }}
          />
        </aside>
      ) : null}

      <Controls
        className={`absolute bottom-6 z-40 hidden flex-col gap-2 lg:flex ${
          selected ? "right-[420px]" : "right-4"
        }`}
        onZoomIn={() => mapRef.current?.zoomIn()}
        onZoomOut={() => mapRef.current?.zoomOut()}
        onReset={() => {
          setSelectedId(null);
          mapRef.current?.reset();
        }}
        fullscreen={fullscreen}
        onFullscreen={() => void toggleFullscreen()}
      />

      <div
        className={`pointer-events-none absolute top-4 z-20 hidden items-center gap-2 lg:flex ${
          selected ? "right-[392px]" : "right-4"
        }`}
      >
        <Compass />
      </div>

      {selected ? null : (
        <div className="absolute bottom-24 right-4 z-20 hidden lg:block">
          <Minimap view={view} />
        </div>
      )}

      <div className="absolute bottom-[158px] right-2 z-20 flex flex-col items-end gap-2 lg:hidden">
        <Compass />
        <Controls
          compact
          className="flex flex-col gap-1"
          onZoomIn={() => mapRef.current?.zoomIn()}
          onZoomOut={() => mapRef.current?.zoomOut()}
          onReset={() => {
            setSelectedId(null);
            setSheet("peek");
            mapRef.current?.reset();
          }}
          fullscreen={fullscreen}
          onFullscreen={() => void toggleFullscreen()}
        />
      </div>

      <p className="pointer-events-none absolute left-1/2 top-4 z-10 hidden max-w-md -translate-x-1/2 rounded-full border border-white/10 bg-black/55 px-4 py-2 text-center text-[11px] font-medium tracking-wide text-zinc-300 backdrop-blur-md lg:left-[calc(50%+8px)] lg:block">
        {MAP_ATTRIBUTION_NOTE}
      </p>

      <div className="absolute inset-x-0 bottom-0 z-30 lg:hidden">
        <div className="max-h-[78vh] overflow-hidden rounded-t-3xl border border-violet-200/20 bg-[#140c22] shadow-[0_-20px_80px_rgba(0,0,0,0.55)]">
          <button
            type="button"
            className="flex w-full justify-center py-2"
            onClick={() =>
              setSheet((current) => (current === "peek" ? "filters" : "peek"))
            }
            aria-expanded={sheet !== "peek"}
          >
            <span className="h-1.5 w-12 rounded-full bg-white/20" />
            <span className="sr-only">
              {sheet === "peek" ? "Expand map tools" : "Collapse map tools"}
            </span>
          </button>
          {sheet === "detail" && selected ? (
            <Detail
              marker={selected}
              found={found.includes(selected.id)}
              onFound={() => toggleFound(selected.id)}
              onClose={() => {
                setSelectedId(null);
                setSheet("peek");
              }}
            />
          ) : (
            <div className={sheet === "peek" ? "max-h-[132px] overflow-hidden" : "max-h-[64vh] overflow-y-auto"}>
              <PanelBody
                query={query}
                setQuery={setQuery}
                searchRef={mobileSearchRef}
                suggestions={suggestions}
                searchOpen={searchOpen}
                setSearchOpen={setSearchOpen}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                onPick={selectMarker}
                activeCategories={activeCategories}
                onToggleCategory={toggleCategory}
                found={found}
                hideFound={hideFound}
                setHideFound={setHideFound}
                shown={shown}
                onSelect={selectMarker}
                selectedId={selectedId}
                onSearchFocus={() => setSheet("filters")}
                compact={sheet === "peek"}
              />
            </div>
          )}
        </div>
      </div>

      <p className="sr-only">
        {foundCount} of {publicMapMarkers.length} places marked found.{" "}
        {UNOFFICIAL_DISCLAIMER}
      </p>
    </div>
  );
}

function PanelBody({
  query,
  setQuery,
  searchRef,
  suggestions,
  searchOpen,
  setSearchOpen,
  activeIndex,
  setActiveIndex,
  onPick,
  activeCategories,
  onToggleCategory,
  found,
  hideFound,
  setHideFound,
  shown,
  onSelect,
  selectedId,
  compact = false,
  onSearchFocus,
}: {
  query: string;
  setQuery: (value: string) => void;
  searchRef: RefObject<HTMLInputElement | null>;
  suggestions: typeof publicMapMarkers;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  onPick: (id: string) => void;
  activeCategories: VisibleCategory[];
  onToggleCategory: (category: VisibleCategory) => void;
  found: string[];
  hideFound: boolean;
  setHideFound: (value: boolean) => void;
  shown: typeof publicMapMarkers;
  onSelect: (id: string) => void;
  selectedId: string | null;
  compact?: boolean;
  onSearchFocus?: () => void;
}) {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="border-b border-white/10 px-4 py-4">
        {compact ? (
          <div className="mb-3 flex items-center justify-between gap-3">
            <h1 className="text-lg font-black tracking-[-0.03em]">Leonida</h1>
            <span className="text-xs text-zinc-400">{shown.length} places</span>
          </div>
        ) : (
          <>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-300">
              GTA 6 Interactive Map
            </p>
            <h1 className="mt-1 text-2xl font-black tracking-[-0.03em]">Leonida</h1>
            <p className="mt-1 text-[11px] text-zinc-500">Arrows move · +/− zoom · / search</p>
            <p className="mt-2 text-xs leading-5 text-zinc-400">
              {MAP_ATTRIBUTION_NOTE}. {UNOFFICIAL_DISCLAIMER}
            </p>
          </>
        )}
        <div className={`relative ${compact ? "" : "mt-4"}`}>
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-violet-200"
            aria-hidden="true"
          />
          <input
            ref={searchRef}
            value={query}
            role="combobox"
            aria-expanded={searchOpen && suggestions.length > 0}
            aria-controls={compact ? "map-search-list-mobile" : "map-search-list"}
            aria-autocomplete="list"
            aria-label="Search the map"
            placeholder="Search places"
            onChange={(event) => {
              setQuery(event.target.value);
              setSearchOpen(true);
              setActiveIndex(0);
            }}
            onFocus={() => {
              setSearchOpen(true);
              onSearchFocus?.();
            }}
            onKeyDown={(event) => {
              if (event.key === "ArrowDown") {
                event.preventDefault();
                setActiveIndex(Math.min(activeIndex + 1, suggestions.length - 1));
              }
              if (event.key === "ArrowUp") {
                event.preventDefault();
                setActiveIndex(Math.max(activeIndex - 1, 0));
              }
              if (event.key === "Enter" && suggestions[activeIndex]) {
                event.preventDefault();
                onPick(suggestions[activeIndex].id);
              }
              if (event.key === "Escape") setSearchOpen(false);
            }}
            className="w-full rounded-2xl border border-white/10 bg-[#0c0816] py-3 pl-10 pr-3 text-sm text-white outline-none ring-violet-400/60 placeholder:text-zinc-500 focus:ring-2"
          />
          {searchOpen && suggestions.length > 0 ? (
            <ul
              id={compact ? "map-search-list-mobile" : "map-search-list"}
              role="listbox"
              className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 overflow-hidden rounded-2xl border border-violet-200/20 bg-[#1a1028] shadow-2xl"
            >
              {suggestions.map((marker, index) => (
                <li key={marker.id} role="option" aria-selected={index === activeIndex}>
                  <button
                    type="button"
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => onPick(marker.id)}
                    className={`flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left text-sm ${
                      index === activeIndex ? "bg-violet-500/20" : "hover:bg-white/5"
                    }`}
                  >
                    <span className="font-semibold">{marker.title}</span>
                    <span className="shrink-0 text-[11px] uppercase tracking-wide text-violet-200">
                      {marker.category === "unconfirmed"
                        ? ""
                        : CATEGORY_META[marker.category].label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      {compact ? null : (
        <>
          <div className="border-b border-white/10 px-4 py-3">
            <div className="mb-2 flex items-center justify-between text-xs text-zinc-400">
              <span>{shown.length} on the map</span>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={hideFound}
                  onChange={(event) => setHideFound(event.target.checked)}
                  className="accent-violet-400"
                />
                Hide found
              </label>
            </div>
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Legend
            </p>
            <div className="flex flex-col gap-1.5">
              {CATEGORY_ORDER.map((category) => {
                const meta = CATEGORY_META[category];
                const total = publicMapMarkers.filter(
                  (marker) => marker.category === category
                ).length;
                const done = publicMapMarkers.filter(
                  (marker) =>
                    marker.category === category && found.includes(marker.id)
                ).length;
                const on = activeCategories.includes(category);
                const width = total === 0 ? 0 : Math.round((done / total) * 100);
                if (total === 0) {
                  return (
                    <div
                      key={category}
                      className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-2.5 py-2 text-zinc-500"
                    >
                      <span className="flex items-center gap-2">
                        <CategoryIcon id={category} className="h-4 w-4" />
                        <span className="text-sm font-semibold">{meta.label}</span>
                      </span>
                      <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.14em] text-violet-200/80">
                        Coming at launch
                      </span>
                    </div>
                  );
                }
                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={on}
                    onClick={() => onToggleCategory(category)}
                    className={`rounded-2xl border px-2.5 py-2 text-left transition ${
                      on
                        ? "border-violet-300/40 bg-violet-500/15"
                        : "border-white/10 bg-white/[0.03] opacity-60"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <CategoryIcon id={category} className="h-4 w-4" />
                      <span className="flex-1 text-sm font-semibold" style={{ color: meta.color }}>
                        {meta.label}
                      </span>
                      <span className="text-xs text-zinc-300">
                        {done}/{total}
                      </span>
                    </span>
                    <span className="mt-1.5 block h-1 overflow-hidden rounded-full bg-white/10">
                      <span
                        className="block h-full rounded-full bg-violet-300"
                        style={{ width: `${width}%` }}
                      />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <ul className="min-h-0 flex-1 overflow-y-auto px-2 py-2">
            {shown.map((marker) => (
              <li key={marker.id}>
                <button
                  type="button"
                  onClick={() => onSelect(marker.id)}
                  className={`flex w-full items-center gap-2 rounded-2xl px-3 py-2 text-left text-sm transition hover:bg-white/5 ${
                    selectedId === marker.id ? "bg-violet-500/20" : ""
                  }`}
                >
                  {marker.category === "unconfirmed" ? null : (
                    <CategoryIcon
                      id={marker.category}
                      className="h-4 w-4 shrink-0 text-violet-200"
                    />
                  )}
                  <span className="min-w-0 flex-1 truncate font-medium">
                    {marker.title}
                  </span>
                  {found.includes(marker.id) ? (
                    <Check size={14} className="text-violet-300" aria-label="Found" />
                  ) : null}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

function Detail({
  marker,
  found,
  onFound,
  onClose,
}: {
  marker: NonNullable<ReturnType<typeof markerById>>;
  found: boolean;
  onFound: () => void;
  onClose: () => void;
}) {
  const category =
    marker.category === "unconfirmed" ? null : CATEGORY_META[marker.category];

  return (
    <article className="flex max-h-[72vh] min-h-0 w-full flex-col overflow-y-auto lg:max-h-none">
      <div className="relative shrink-0">
        {marker.image ? (
          // Official stills are already optimized webp files. A plain img avoids
          // a second image optimizer hop inside the map pane.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={marker.image}
            alt={marker.imageAlt}
            className="h-52 w-full object-cover sm:h-48"
          />
        ) : (
          <div className="flex h-40 items-end bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.45),transparent_55%),#140c22] p-4">
            <span className="text-sm text-violet-100">No official still for this pin</span>
          </div>
        )}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close place details"
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-black/60 text-white"
        >
          <X size={16} />
        </button>
      </div>
      <div className="flex flex-col gap-3 px-4 py-4">
        {category ? (
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: category.color }}>
            <CategoryIcon id={category.id} className="h-4 w-4" />
            {category.label}
          </p>
        ) : null}
        <h2 className="text-2xl font-black tracking-[-0.03em]">{marker.title}</h2>
        {marker.approximate ? (
          <p className="text-xs text-violet-200">Approximate position</p>
        ) : null}
        <p className="text-sm leading-6 text-zinc-300">{marker.description}</p>
        <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3 text-sm font-semibold">
          <input
            type="checkbox"
            checked={found}
            onChange={onFound}
            className="h-4 w-4 accent-violet-400"
          />
          Found it
        </label>
        <div className="flex flex-col gap-2">
          <Link
            href={marker.href}
            className="rounded-2xl bg-violet-500 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-violet-400"
          >
            {marker.hrefLabel}
          </Link>
          <a
            href={marker.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 px-4 py-3 text-center text-sm font-semibold text-violet-100 transition hover:border-violet-300/40"
          >
            {marker.sourceLabel}
          </a>
        </div>
        {marker.image ? (
          <p className="text-[11px] text-zinc-500">{IMAGE_CREDIT}</p>
        ) : null}
        {ACTIVE_MAP_LAYER.officialImagery ? (
          <p className="text-[11px] text-zinc-500">{IMAGE_CREDIT}</p>
        ) : null}
        <p className="text-[11px] leading-5 text-zinc-500">{UNOFFICIAL_DISCLAIMER}</p>
      </div>
    </article>
  );
}

function Compass() {
  return (
    <div
      className="flex items-center gap-1 rounded-full border border-violet-200/20 bg-[#120b1c]/85 px-2.5 py-1 text-[10px] font-bold tracking-[0.18em] text-violet-100 shadow-lg backdrop-blur"
      aria-label="North is up, following Mount Kalaga on the state’s northern border"
    >
      <span aria-hidden="true" className="text-violet-200">▲</span>
      NORTH
    </div>
  );
}

function Minimap({ view }: { view: MapView | null }) {
  if (!view) return null;
  const left = (view.west / MAP_WIDTH) * 100;
  const top = ((MAP_HEIGHT - view.north) / MAP_HEIGHT) * 100;
  const width = Math.max(4, ((view.east - view.west) / MAP_WIDTH) * 100);
  const height = Math.max(4, ((view.north - view.south) / MAP_HEIGHT) * 100);
  return (
    <div className="relative aspect-[1920/1200] w-40 overflow-hidden rounded-xl border border-violet-200/25 bg-[#07141f] shadow-lg">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/map/layers/leonida-schematic.svg"
        alt=""
        className="h-full w-full object-fill"
      />
      <div
        className="absolute border border-white/90 bg-white/10"
        style={{
          left: `${left}%`,
          top: `${top}%`,
          width: `${Math.min(width, 100)}%`,
          height: `${Math.min(height, 100)}%`,
        }}
      />
    </div>
  );
}

function Controls({
  compact = false,
  className,
  onZoomIn,
  onZoomOut,
  onReset,
  fullscreen,
  onFullscreen,
}: {
  compact?: boolean;
  className: string;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  fullscreen: boolean;
  onFullscreen: () => void;
}) {
  const icon = compact ? 15 : 18;
  const button = compact
    ? "grid h-9 w-9 place-items-center rounded-xl border border-violet-200/20 bg-[#120b1c]/90 text-white shadow-lg backdrop-blur-xl transition hover:border-violet-300/50"
    : "grid h-11 w-11 place-items-center rounded-2xl border border-violet-200/20 bg-[#120b1c]/80 text-white shadow-lg backdrop-blur-xl transition hover:border-violet-300/50";
  return (
    <div className={className}>
      <button type="button" className={button} onClick={onZoomIn} aria-label="Zoom in">
        <Plus size={icon} />
      </button>
      <button type="button" className={button} onClick={onZoomOut} aria-label="Zoom out">
        <Minus size={icon} />
      </button>
      <button type="button" className={button} onClick={onReset} aria-label="Reset the map">
        <LocateFixed size={icon} />
      </button>
      <button
        type="button"
        className={button}
        onClick={onFullscreen}
        aria-label={fullscreen ? "Exit fullscreen" : "Enter fullscreen"}
      >
        {fullscreen ? <Minimize2 size={icon} /> : <Maximize2 size={icon} />}
      </button>
    </div>
  );
}
