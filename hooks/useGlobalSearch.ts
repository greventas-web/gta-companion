"use client";

import { useMemo, useState } from "react";

import {
  searchIndex,
  type SearchItem,
} from "@/data/search";

export default function useGlobalSearch() {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const results = useMemo<SearchItem[]>(() => {
    const search = query.trim().toLowerCase();

    if (!search) {
      return [];
    }

    return [...searchIndex]
      .map((item) => {
        let score = 0;

        const title = item.title.toLowerCase();
        const category = item.category.toLowerCase();
        const description = (
          item.description ?? ""
        ).toLowerCase();

        if (title === search) score += 100;
        if (title.startsWith(search)) score += 60;
        if (title.includes(search)) score += 40;
        if (category.includes(search)) score += 20;
        if (description.includes(search)) score += 10;

        return {
          ...item,
          score,
        };
      })
      .filter(
        (
          item
        ): item is SearchItem & { score: number } =>
          item.score > 0
      )
      .sort((a, b) => b.score - a.score)
      .map(({ score, ...item }) => item);
  }, [query]);

  const groupedResults = useMemo(() => {
    const groups = new Map<string, SearchItem[]>();

    results.forEach((item) => {
      const current = groups.get(item.category) ?? [];

      current.push(item);

      groups.set(item.category, current);
    });

    return groups;
  }, [results]);

  const selectedItem =
    results.length > 0
      ? results[
          Math.min(selectedIndex, results.length - 1)
        ]
      : null;

  function moveUp() {
    if (!results.length) return;

    setSelectedIndex((current) =>
      current === 0
        ? results.length - 1
        : current - 1
    );
  }

  function moveDown() {
    if (!results.length) return;

    setSelectedIndex((current) =>
      current === results.length - 1
        ? 0
        : current + 1
    );
  }

  function resetSearch() {
    setQuery("");
    setSelectedIndex(0);
  }

  return {
    query,
    setQuery,

    results,
    groupedResults,
    hasResults: results.length > 0,

    selectedIndex,
    setSelectedIndex,

    selectedItem,

    moveUp,
    moveDown,

    resetSearch,
  };
}