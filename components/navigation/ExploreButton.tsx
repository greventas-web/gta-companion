"use client";

import { useState } from "react";

import MegaMenu from "./MegaMenu";

export default function ExploreButton() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-2 font-medium transition hover:text-pink-400">

        Explore

        <svg
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M5 7L10 12L15 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

      </button>

      {open && <MegaMenu />}

    </div>
  );
}