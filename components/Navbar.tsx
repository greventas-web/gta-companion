"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  ChevronDown,
  LogOut,
  Menu,
  Search,
  Settings,
  User,
  Heart,
  LayoutDashboard,
  X,
} from "lucide-react";

import SiteLogo from "./SiteLogo";
import NavLink from "./NavLink";
import SearchBar from "./SearchBar";
import SupportLink from "./SupportLink";
import MegaMenu, { exploreLinks } from "./MegaMenu";

import { useAuth } from "@/components/auth/AuthProvider";
import { useSearch } from "@/components/search/SearchProvider";

const proPillClass =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[linear-gradient(135deg,#fff8e4_0%,#f4e0a4_34%,#e4c15f_70%,#c9962e_100%)] font-black tracking-[0.04em] text-[#241c0c] shadow-[0_0_18px_rgba(214,168,64,0.45)] ring-1 ring-[#fff6d8]/60 transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e7c56a]";

export default function Navbar() {
  const { user } = useAuth();
  const { open } = useSearch();
  const pathname = usePathname();
  const proActive = pathname === "/pro" || pathname.startsWith("/pro/");

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    function handleScroll() {
      const next = window.scrollY > 20;
      setScrolled((current) => (current === next ? current : next));
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
    window.addEventListener("scroll", handleScroll, { passive: true });
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
    const { logoutUser } = await import("@/lib/auth");
    await logoutUser();
    setMenuOpen(false);
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] overflow-visible px-4 pt-4 sm:px-6 sm:pt-5">

        <div
          className={`mx-auto flex h-20 w-full min-w-0 max-w-[1700px] items-center justify-between gap-2 rounded-[32px] border transition-all duration-500 ${
            scrolled
              ? "border-pink-500/20 bg-black/95 shadow-[0_25px_80px_rgba(0,0,0,.60)] sm:bg-black/80 sm:backdrop-blur-xl"
              : "border-white/10 bg-black/95 shadow-[0_10px_40px_rgba(0,0,0,.35)] sm:bg-black/70 sm:backdrop-blur-xl"
          }`}
        >

          <div className="flex shrink-0 items-center gap-2 px-3 sm:px-4">

            <Link
              href="/"
              aria-label="GTA Companion"
              className="group flex items-center"
            >
              <SiteLogo />
            </Link>

            <Link
              href="/pro"
              aria-label="GTA Companion Pro"
              aria-current={proActive ? "page" : undefined}
              className={`${proPillClass} h-8 px-2.5 text-[11px] xl:hidden`}
            >
              PRO
            </Link>

          </div>

          <nav className="hidden shrink-0 items-center gap-1 xl:flex min-[1440px]:gap-2">

            <NavLink href="/">Home</NavLink>

            <NavLink href="/updates" accent>
              Updates
            </NavLink>

            <NavLink href="/map">Map</NavLink>

            <MegaMenu />

            <NavLink href="/news">News</NavLink>

            <NavLink href="/media">Media</NavLink>

            <NavLink href="/timeline">Timeline</NavLink>

            <NavLink href="/about">About</NavLink>

            <Link
              href="/pro"
              aria-label="GTA Companion Pro"
              aria-current={proActive ? "page" : undefined}
              className={`${proPillClass} ml-1 h-9 px-3 text-[12px] tracking-[0.01em] min-[1680px]:px-3.5 min-[1680px]:text-[13px]`}
            >
              <span className="hidden min-[1680px]:inline">GTA Companion Pro</span>
              <span className="min-[1680px]:hidden">PRO</span>
            </Link>

          </nav>

          <div className="flex min-w-0 shrink items-center justify-end gap-2 px-3 sm:px-4">

            <SupportLink className="hidden shrink-0 items-center gap-1.5 whitespace-nowrap px-1 text-sm font-semibold text-zinc-300 transition hover:text-pink-300 xl:inline-flex" />

            <div className="hidden h-12 w-[320px] min-w-0 max-w-full shrink min-[1440px]:block">
              <SearchBar />
            </div>

            <button
              type="button"
              aria-label="Open search"
              onClick={open}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white min-[1440px]:hidden"
            >
              <Search size={18} />
            </button>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((value) => !value)}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white xl:hidden"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
                        {!user ? (
              <>
                <Link
                  href="/login"
                  className="hidden shrink-0 whitespace-nowrap rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-pink-500/40 hover:bg-white/[0.08] lg:inline-flex"
                >
                  Sign In
                </Link>

                <Link
                  href="/register"
                  className="hidden shrink-0 whitespace-nowrap rounded-2xl border border-white/10 px-4 py-2 text-sm font-semibold text-zinc-300 transition hover:border-pink-500/40 hover:text-white lg:inline-flex"
                >
                  Join
                </Link>
              </>
            ) : (
              <div
                ref={menuRef}
                className="relative hidden shrink-0 lg:block"
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

        {mobileOpen && (
          <nav className="mx-auto mt-3 max-h-[calc(100vh-120px)] max-w-[1700px] overflow-y-auto rounded-[28px] border border-white/10 bg-[#09090B]/98 p-4 shadow-[0_30px_80px_rgba(0,0,0,.6)] backdrop-blur-xl xl:hidden">
            <Link
              href="/pro"
              aria-current={proActive ? "page" : undefined}
              onClick={() => setMobileOpen(false)}
              className={`${proPillClass} mb-3 h-12 w-full px-4 text-sm`}
            >
              GTA Companion Pro
            </Link>
            <SupportLink
              onClick={() => setMobileOpen(false)}
              className="mb-2 flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-[15px] font-semibold text-pink-300 transition hover:bg-white/[0.06] hover:text-pink-200"
            />
            <div className="grid gap-1 sm:grid-cols-2">
              {[
                { title: "Home", href: "/" },
                { title: "Updates", href: "/updates" },
                { title: "About", href: "/about" },
                ...exploreLinks,
              ]
                .filter(
                  (item, index, list) =>
                    list.findIndex((entry) => entry.href === item.href) ===
                    index
                )
                .map((item) => (
                <Link
                  key={item.href + item.title}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl px-4 py-3 text-[15px] font-semibold text-white transition hover:bg-white/[0.06]"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </nav>
        )}

      </header>

    </>
  );
}