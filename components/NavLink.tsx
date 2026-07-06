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

  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`relative font-semibold transition duration-300 ${
        active
          ? "text-pink-400"
          : "text-white hover:text-pink-400"
      }`}
    >
      {children}

      <span
        className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-pink-400 transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}