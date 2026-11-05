"use client";

import { useMemo, useState } from "react";

import { vehicles } from "@/data/vehicles";

export default function useVehicleSearch() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");
  const [view, setView] = useState<"grid" | "list">("grid");

  const categories = useMemo(
    () => [
      "All",
      ...new Set(
        vehicles.map((vehicle) => vehicle.category)
      ),
    ],
    []
  );

  const resetFilters = () => {
    setQuery("");
    setCategory("All");
    setSort("default");
    setView("grid");
  };

  const filteredVehicles = useMemo(() => {
    const search = query.trim().toLowerCase();

    const results = vehicles.filter((vehicle) => {
      const matchesSearch =
        vehicle.name.toLowerCase().includes(search) ||
        vehicle.manufacturer
          .toLowerCase()
          .includes(search) ||
        vehicle.category
          .toLowerCase()
          .includes(search);

      const matchesCategory =
        category === "All" ||
        vehicle.category === category;

      return matchesSearch && matchesCategory;
    });

    switch (sort) {
      case "az":
        results.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;

      case "za":
        results.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        break;

      case "manufacturer":
        results.sort((a, b) =>
          a.manufacturer.localeCompare(
            b.manufacturer
          )
        );
        break;

      case "status":
        results.sort((a, b) =>
          a.status.localeCompare(b.status)
        );
        break;

      default:
        break;
    }

    return results;
  }, [query, category, sort]);

  return {
    query,
    setQuery,

    category,
    setCategory,

    categories,

    sort,
    setSort,

    view,
    setView,

    filteredVehicles,

    totalVehicles: vehicles.length,

    resetFilters,
  };
}