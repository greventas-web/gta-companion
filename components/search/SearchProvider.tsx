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
  const [isOpen, setIsOpen] = useState(false);
  const [openOnPath, setOpenOnPath] = useState(pathname);

  if (isOpen && openOnPath !== pathname) {
    setOpenOnPath(pathname);
    setIsOpen(false);
  }

  const open = useCallback(() => {
    setOpenOnPath(pathname);
    setIsOpen(true);
  }, [pathname]);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => {
    setOpenOnPath(pathname);
    setIsOpen((value) => !value);
  }, [pathname]);

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