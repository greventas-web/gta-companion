"use client";

import Link from "next/link";

import NavLink from "./NavLink";
import SearchBar from "./SearchBar";
import MegaMenu from "./MegaMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900/70 bg-black/80 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          href="/"
          className="group flex items-center gap-2"
        >
          <span className="text-3xl font-black tracking-tight text-white">
            GTA
          </span>

          <span className="text-3xl font-black tracking-tight text-pink-400 transition duration-300 group-hover:text-pink-300">
            Companion
          </span>
        </Link>

        {/* Navigation */}

        <nav className="hidden items-center gap-8 lg:flex">

          <NavLink href="/">
            Home
          </NavLink>

          <NavLink href="/vehicles">
            Vehicles
          </NavLink>

          <NavLink href="/characters">
            Characters
          </NavLink>

          <NavLink href="/locations">
            Locations
          </NavLink>

          <MegaMenu />

          <NavLink href="/guides">
            Guides
          </NavLink>

          <NavLink href="/news">
            News
          </NavLink>

        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          <SearchBar />

          <Link
            href="/profile"
            className="rounded-2xl bg-pink-500 px-6 py-3 font-bold text-white transition duration-300 hover:scale-105 hover:bg-pink-400"
          >
            Profile
          </Link>

        </div>

      </div>
    </header>
  );
}