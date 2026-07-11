"use client";

import { useEffect } from "react";

import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import { useSearch } from "./useSearch";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function SearchDialog({
  open,
  onClose,
}: Props) {
  const {
    query,
    setQuery,
    results,
  } = useSearch();

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[999] flex items-start justify-center bg-black/80 px-6 pt-24 backdrop-blur-2xl"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-b from-zinc-900/95 via-zinc-950/95 to-black/95 shadow-[0_40px_140px_rgba(0,0,0,.75),0_0_80px_rgba(236,72,153,.12)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-pink-500/15 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 top-12 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[140px]" />

        <div className="relative border-b border-white/10 bg-white/[0.02] p-8">
          <SearchInput
            value={query}
            onChange={setQuery}
          />
        </div>

        <div className="relative max-h-[70vh] overflow-y-auto p-8">
          <SearchResults
            results={results}
          />
        </div>
      </div>
    </div>
  );
}