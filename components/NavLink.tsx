"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  children: React.ReactNode;
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
      className={`group relative flex h-11 items-center text-sm font-medium tracking-wide transition-all duration-300 ${
        active
          ? "text-pink-400"
          : "text-zinc-300 hover:text-white"
      }`}
    >
      <span>{children}</span>

      <span
        className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-gradient-to-r from-pink-400 to-fuchsia-500 transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />

      {active && (
        <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-pink-400 blur-sm opacity-70" />
      )}
    </Link>
  );
}