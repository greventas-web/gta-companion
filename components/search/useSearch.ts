"use client";

import { useMemo, useState } from "react";

import { searchIndex } from "@/lib/search";

export function useSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (!value) {
      return [];
    }

    return searchIndex
      .filter((item) => {
        const title = item.title.toLowerCase();
        const category = item.category.toLowerCase();
        const description = item.description?.toLowerCase() ?? "";

        return (
          title.includes(value) ||
          category.includes(value) ||
          description.includes(value)
        );
      })
      .sort((a, b) => {
        const aTitle = a.title.toLowerCase();
        const bTitle = b.title.toLowerCase();

        const aStarts = aTitle.startsWith(value);
        const bStarts = bTitle.startsWith(value);

        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;

        const aIncludes = aTitle.includes(value);
        const bIncludes = bTitle.includes(value);

        if (aIncludes && !bIncludes) return -1;
        if (!aIncludes && bIncludes) return 1;

        return aTitle.localeCompare(bTitle);
      })
      .slice(0, 20);
  }, [query]);

  return {
    query,
    setQuery,
    results,
  };
}