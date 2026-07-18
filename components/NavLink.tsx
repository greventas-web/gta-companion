"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

export default function NavLink({
  href,
  children,
}: Props) {
  const pathname = usePathname();

  const active =
    pathname === href ||
    (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className="group relative flex h-20 items-center px-3"
    >
      <span
        className={`relative z-10 text-[15px] font-semibold tracking-[-0.01em] transition-all duration-300 ${
          active
            ? "text-white"
            : "text-zinc-400 group-hover:text-white"
        }`}
      >
        {children}
      </span>

      <span
        className={`absolute bottom-0 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 transition-all duration-300 ${
          active
            ? "w-10 opacity-100"
            : "w-0 opacity-0 group-hover:w-10 group-hover:opacity-100"
        }`}
      />

      <span
        className={`absolute left-1/2 top-1/2 h-10 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-xl transition-all duration-300 ${
          active
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100"
        }`}
      />
    </Link>
  );
}