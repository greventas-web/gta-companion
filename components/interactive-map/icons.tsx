import type { VisibleCategory } from "@/src/data/map/types";

const PATHS: Record<VisibleCategory, string> = {
  locations:
    "M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11zm0-8.2a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6z",
  businesses:
    "M4 20V9.5L12 4l8 5.5V20H4zm3-2h3v-4h4v4h3v-7.2L12 6.8 7 10.8V18z",
  garages:
    "M3 11.2 12 4l9 7.2V20h-6v-5H9v5H3v-8.8zm2 7h2v-5h10v5h2v-7.1L12 6.3 5 11.1V18.2z",
  activities:
    "M6 21V4h2v6h9l-2 3 2 3H8v5H6z",
  shops:
    "M6 8h12l-1 12H7L6 8zm2.2-2.5A3.8 3.8 0 0 1 12 3a3.8 3.8 0 0 1 3.8 2.5H8.2zM8 10v2a1 1 0 0 0 2 0v-2h4v2a1 1 0 0 0 2 0v-2h1.2l.7 8H6.1l.7-8H8z",
  collectibles:
    "M12 3 20 9.5 12 21 4 9.5 12 3zm0 2.4L6.7 9.5 12 17.8l5.3-8.3L12 5.4z",
};

export function CategoryIcon({
  id,
  className,
}: {
  id: VisibleCategory;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d={PATHS[id]} />
    </svg>
  );
}

const BLIP_GLYPH: Record<VisibleCategory, string> = {
  locations:
    '<circle cx="20" cy="20" r="3.4" fill="#fff"/>',
  businesses:
    '<path fill="#fff" d="M13.5 25V16.2L20 12l6.5 4.2V25h-4.2v-4.2h-4.6V25z"/>',
  garages:
    '<path fill="#fff" d="M12 19.5 20 13l8 6.5V26h-5v-5h-6v5h-5z"/>',
  activities:
    '<path fill="#fff" d="M16 27V13h2.2v6.2H26l-2.2 2.6L26 24.4h-7.8V27z"/>',
  shops:
    '<path fill="none" stroke="#fff" stroke-width="1.8" d="M14 17h12l-1.1 9H15.1zM16.2 17v-1.2a3.8 3.8 0 0 1 7.6 0V17"/>',
  collectibles:
    '<path fill="#fff" d="M20 11.5 26 17l-6 10-6-10z"/>',
};

/** GTA-style radar blip: colored disc, white glyph, crisp rim. */
export function blipMarkup(
  id: VisibleCategory,
  color: string,
  selected: boolean,
  label: string | null,
  side: "left" | "right" | "top" | "bottom"
) {
  const glyph = BLIP_GLYPH[id];
  const name = label
    ? `<span class="gta-label">${label}</span>`
    : "";
  return `<div class="gta-hit${selected ? " is-selected" : ""} gta-side-${side}" style="--pin:${color}"><svg class="gta-disc" viewBox="0 0 40 40" width="40" height="40" aria-hidden="true"><circle cx="20" cy="20" r="15" fill="${color}"/><circle cx="20" cy="20" r="15" fill="none" stroke="#fff" stroke-opacity=".9" stroke-width="1.6"/>${glyph}</svg>${name}</div>`;
}
