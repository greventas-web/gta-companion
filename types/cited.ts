import type { CitedSource } from "@/src/data/gameplay/confirmed";

export type SourcedFact = {
  label: string;
  value: string;
  sources: readonly CitedSource[];
};

export type CatalogLink = {
  href: string;
  title: string;
  meta: string;
};
