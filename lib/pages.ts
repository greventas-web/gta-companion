import type { Metadata } from "next";

import { pageMetadata } from "@/lib/launch";

export function oneLine(text: string, max = 155) {
  const flat = text.replace(/\s+/g, " ").trim();

  if (flat.length <= max) {
    return flat;
  }

  const cut = flat.slice(0, max);
  const space = cut.lastIndexOf(" ");
  const shortened = (space > 80 ? cut.slice(0, space) : cut).replace(
    /[.,;:]$/,
    ""
  );

  return `${shortened.trim()}…`;
}

export function detailMetadata(title: string, description: string): Metadata {
  return pageMetadata(title, oneLine(description));
}

export function hiddenMetadata(title: string, description: string): Metadata {
  return {
    ...detailMetadata(title, description),
    robots: { index: false, follow: false },
  };
}
