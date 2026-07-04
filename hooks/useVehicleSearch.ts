"use client";

import { useMemo, useState } from "react";
import { vehicles } from "@/data/vehicles";

export default function useVehicleSearch() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(vehicles.map((vehicle) => vehicle.category)),
  ];

  const filteredVehicles = useMemo(() => {
    const search = query.toLowerCase().trim();

    return vehicles.filter((vehicle) => {
      const matchesSearch =
        vehicle.name.toLowerCase().includes(search) ||
        vehicle.manufacturer.toLowerCase().includes(search) ||
        vehicle.category.toLowerCase().includes(search);

      const matchesCategory =
        category === "All" || vehicle.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [query, category]);

  return {
    query,
    setQuery,
    category,
    setCategory,
    categories,
    filteredVehicles,
    totalVehicles: vehicles.length,
  };
}