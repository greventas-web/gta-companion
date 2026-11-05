"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import {
  ChevronDown,
  LogOut,
  Settings,
  User,
  Heart,
  LayoutDashboard,
} from "lucide-react";

import NavLink from "./NavLink";
import SearchBar from "./SearchBar";
import MegaMenu from "./MegaMenu";

import { useAuth } from "@/components/auth/AuthProvider";
import { useSearch } from "@/components/search/SearchProvider";
import { logoutUser } from "@/lib/auth";
export default function Navbar() {
  const { user } = useAuth();
  const { open } = useSearch();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    handleScroll();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  async function handleLogout() {
    await logoutUser();
    setMenuOpen(false);
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] px-6 pt-5">

        <div
          className={`mx-auto flex h-20 max-w-[1700px] items-center justify-between rounded-[32px] border transition-all duration-500 ${
            scrolled
              ? "border-pink-500/20 bg-black/80 shadow-[0_25px_80px_rgba(0,0,0,.60)] backdrop-blur-3xl"
              : "border-white/10 bg-black/55 shadow-[0_10px_40px_rgba(0,0,0,.35)] backdrop-blur-2xl"
          }`}
        >

          <div className="flex items-center px-8">

            <Link
              href="/"
              className="group flex items-center"
            >
              <span className="text-[34px] font-black tracking-[-0.05em] text-white transition duration-300 group-hover:text-zinc-100">
                GTA
              </span>

              <span className="ml-2 bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-400 bg-clip-text text-[34px] font-black tracking-[-0.05em] text-transparent">
                Companion
              </span>

              <span className="ml-2 text-[36px] font-black italic text-pink-400 transition duration-300 group-hover:scale-110">
                VI
              </span>
            </Link>

          </div>

          <nav className="hidden items-center gap-8 xl:flex">

            <NavLink href="/">Home</NavLink>

            <MegaMenu />

            <NavLink href="/news">News</NavLink>

            <NavLink href="/media">Media</NavLink>

            <NavLink href="/timeline">Timeline</NavLink>

            <NavLink href="/about">About</NavLink>

          </nav>

          <div className="flex items-center gap-4 px-8">

            <div
              className="hidden lg:block"
              onClick={open}
            >
              <SearchBar />
            </div>
                        {!user ? (
              <>
                <Link
                  href="/login"
                  className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-3 font-semibold text-white transition-all duration-300 hover:border-pink-500/40 hover:bg-white/[0.08]"
                >
                  Sign In
                </Link>

                <Link
                  href="/register"
                  className="rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 px-6 py-3 font-semibold text-white shadow-[0_10px_35px_rgba(236,72,153,.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(236,72,153,.45)]"
                >
                  Join Free
                </Link>
              </>
            ) : (
              <div
                ref={menuRef}
                className="relative"
              >
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 transition hover:border-pink-500/40"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 font-bold text-white">
                    {(user.displayName ?? user.email ?? "U")
                      .charAt(0)
                      .toUpperCase()}
                  </div>

                  <div className="hidden text-left xl:block">
                    <div className="max-w-[140px] truncate text-sm font-semibold text-white">
                      {user.displayName ?? "Player"}
                    </div>

                    <div className="max-w-[140px] truncate text-xs text-zinc-500">
                      {user.email}
                    </div>
                  </div>

                  <ChevronDown
                    size={18}
                    className={`transition ${
                      menuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {menuOpen && (
                  <div className="absolute right-0 mt-4 w-72 overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d10]/95 shadow-[0_30px_80px_rgba(0,0,0,.6)] backdrop-blur-3xl">

                    <div className="border-b border-white/10 p-6">
                      <div className="text-lg font-bold text-white">
                        {user.displayName || "Player"}
                      </div>

                      <div className="mt-1 truncate text-sm text-zinc-400">
                        {user.email}
                      </div>
                    </div>

                    <div className="p-2">

                      <Link
                        href="/dashboard"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 rounded-2xl px-4 py-3 text-zinc-300 transition hover:bg-white/5 hover:text-white"
                      >
                        <LayoutDashboard size={18} />
                        Dashboard
                      </Link>

                      <Link
                        href="/profile"
                        onClick={() => setMenuOpen(false)}
                        className="mt-1 flex items-center gap-3 rounded-2xl px-4 py-3 text-zinc-300 transition hover:bg-white/5 hover:text-white"
                      >
                        <User size={18} />
                        Profile
                      </Link>

                      <Link
                        href="/favorites"
                        onClick={() => setMenuOpen(false)}
                        className="mt-1 flex items-center gap-3 rounded-2xl px-4 py-3 text-zinc-300 transition hover:bg-white/5 hover:text-white"
                      >
                        <Heart size={18} />
                        Favorites
                      </Link>

                      <Link
                        href="/settings"
                        onClick={() => setMenuOpen(false)}
                        className="mt-1 flex items-center gap-3 rounded-2xl px-4 py-3 text-zinc-300 transition hover:bg-white/5 hover:text-white"
                      >
                        <Settings size={18} />
                        Settings
                      </Link>

                    </div>

                    <div className="border-t border-white/10 p-2">

                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-red-400 transition hover:bg-red-500/10"
                      >
                        <LogOut size={18} />
                        Sign Out
                      </button>

                    </div>

                  </div>
                )}

              </div>
            )}

          </div>

        </div>

      </header>

    </>
  );
}