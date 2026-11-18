import type { CatalogLink, SourcedFact } from "@/types/cited";
import type { CitedSource } from "@/src/data/gameplay/confirmed";

export type StoreType =
  | "clothing"
  | "salon"
  | "tattoo"
  | "mod-shop"
  | "flea-market"
  | "weapons"
  | "other";

export type EditionRequirement = "none" | "ultimate" | "pre-order";

export type Store = {
  id: number;
  slug: string;
  name: string;
  type: StoreType;
  typeLabel: string;
  region: string;
  area: string;
  editionRequirement: EditionRequirement;
  editionLabel: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  /** Confirmed gtadb pin that is this shop, not a nearby region. */
  hasPin: boolean;
  /** Extra map note when the pin is missing or easy to misread. */
  mapNote?: string;
  mapLink?: CatalogLink;
  facts: SourcedFact[];
  unpublished: string[];
  linkedClothing: string[];
  sources: readonly CitedSource[];
};
