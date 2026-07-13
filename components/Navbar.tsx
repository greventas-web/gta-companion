"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import NavLink from "./NavLink";
import SearchBar from "./SearchBar";
import MegaMenu from "./MegaMenu";
import SearchDialog from "./search/SearchDialog";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
    }

    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] px-6 pt-5">
        <div
          className={`mx-auto flex h-20 max-w-[1700px] items-center justify-between rounded-3xl border transition-all duration-500 ${
            scrolled
              ? "border-pink-500/20 bg-black/80 shadow-[0_20px_70px_rgba(0,0,0,.55)] backdrop-blur-3xl"
              : "border-white/10 bg-black/55 backdrop-blur-2xl"
          }`}
        >
          {/* Logo */}

          <div className="flex items-center px-8">
            <Link href="/" className="group flex items-center">
              <span className="text-[34px] font-black tracking-[-0.05em] text-white">
                GTA
              </span>

              <span className="ml-2 bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-400 bg-clip-text text-[34px] font-black tracking-[-0.05em] text-transparent">
                Companion
              </span>

              <span className="ml-2 text-[36px] font-black italic text-pink-400">
                VI
              </span>
            </Link>
          </div>

          {/* Navigation */}

          <nav className="hidden items-center gap-8 xl:flex">

            <NavLink href="/">Home</NavLink>

            <MegaMenu />

            <NavLink href="/news">News</NavLink>

            <NavLink href="/media">Media</NavLink>

            <NavLink href="/timeline">Timeline</NavLink>

            <NavLink href="/about">About</NavLink>

          </nav>

          {/* Right Side */}

          <div className="flex items-center gap-4 px-8">
            <div
              className="hidden lg:block"
              onClick={() => setSearchOpen(true)}
            >
              <SearchBar />
            </div>

            <Link
              href="/login"
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 font-semibold text-white transition hover:border-pink-500/40"
            >
              Sign In
            </Link>

            <Link
              href="/register"
              className="rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 px-6 py-3 font-semibold text-white shadow-[0_10px_35px_rgba(236,72,153,.30)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_55px_rgba(236,72,153,.45)]"
            >
              Join Free
            </Link>
          </div>
        </div>
      </header>

      <SearchDialog
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
}