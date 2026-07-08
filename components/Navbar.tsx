"use client";

import Link from "next/link";

import NavLink from "./NavLink";
import SearchBar from "./SearchBar";
import MegaMenu from "./MegaMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-[100] border-b border-white/10 bg-black/70 backdrop-blur-3xl">

      <div className="mx-auto flex h-20 max-w-[1700px] items-center justify-between px-8">

        {/* Logo */}

        <Link
          href="/"
          className="group flex items-center"
        >

          <span className="text-[42px] font-black tracking-[-0.05em] text-white transition duration-300">

            GTA

          </span>

          <span className="ml-2 text-[42px] font-black tracking-[-0.05em] text-pink-500 transition duration-300 group-hover:text-pink-400">

            Companion

          </span>

          <span className="ml-2 -rotate-6 text-[44px] font-black italic text-pink-400 drop-shadow-[0_0_14px_rgba(236,72,153,.9)]">

            VI

          </span>

        </Link>

        {/* Navigation */}

        <nav className="hidden items-center gap-10 xl:flex">

          <NavLink href="/">
            Home
          </NavLink>

          <MegaMenu />

          <NavLink href="/map">
            Map
          </NavLink>

          <NavLink href="/guides">
            Guides
          </NavLink>

          <NavLink href="/news">
            News
          </NavLink>

        </nav>

        {/* Right */}

        <div className="flex items-center gap-5">

          <div className="hidden lg:block w-[320px]">

            <SearchBar />

          </div>

          <Link
            href="/profile"
            className="rounded-2xl border border-pink-500/50 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-pink-400 hover:bg-pink-500/10 hover:shadow-[0_0_30px_rgba(236,72,153,.25)]"
          >
            Profile
          </Link>

        </div>

      </div>

    </header>
  );
}