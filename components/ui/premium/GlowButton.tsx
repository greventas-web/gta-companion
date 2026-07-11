import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

export default function GlowButton({
  href,
  children,
}: Props) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_rgba(236,72,153,.45)]"
    >
      {children}
    </Link>
  );
}