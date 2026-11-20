import type { SourcedFact } from "@/types/cited";
import type { CitedSource } from "@/src/data/gameplay/confirmed";
import type { EditionRequirement } from "@/types/store";

export type ClothingKind = "outfit" | "hairstyle" | "tattoo" | "pack";

export type AppliesTo = "Jason" | "Lucia" | "Both" | "Not published";

export type ClothingItem = {
  id: number;
  slug: string;
  name: string;
  kind: ClothingKind;
  kindLabel: string;
  group: "Packs" | "Named pieces" | "Shop catalogs";
  appliesTo: AppliesTo;
  editionRequirement: EditionRequirement;
  editionLabel: string;
  howToGet: string;
  summary: string;
  storeSlug?: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  facts: SourcedFact[];
  /** Launch-week details shown on the page (prices, addresses, unlock timing). */
  details?: SourcedFact[];
  unpublished: string[];
  relatedSlugs: string[];
  sources: readonly CitedSource[];
};
