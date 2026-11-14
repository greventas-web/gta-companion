"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const SearchDialog = dynamic(
  () => import("@/components/search/SearchDialog"),
  { ssr: false }
);

type SearchContextValue = {
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const SearchContext = createContext<SearchContextValue | null>(null);

export function SearchProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [openOn, setOpenOn] = useState<string | null>(null);
  const isOpen = openOn === pathname;

  const open = useCallback(() => setOpenOn(pathname), [pathname]);
  const close = useCallback(() => setOpenOn(null), []);
  const toggle = useCallback(
    () => setOpenOn((current) => (current === pathname ? null : pathname)),
    [pathname]
  );

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        toggle();
      }

      if (e.key === "Escape") {
        close();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggle, close]);

  const value = useMemo(
    () => ({
      open,
      close,
      toggle,
    }),
    [open, close, toggle]
  );

  return (
    <SearchContext.Provider value={value}>
      {children}

      {isOpen ? (
        <SearchDialog
          open={isOpen}
          onClose={close}
        />
      ) : null}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch must be used inside SearchProvider");
  }

  return context;
}