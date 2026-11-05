"use client";

import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Camera,
  Car,
  MapPin,
  Newspaper,
  Search,
  Shield,
  User,
} from "lucide-react";

type SearchItem = {
  id: string;
  title: string;
  description?: string;
  href: string;
  category: string;
};

type Props = {
  item: SearchItem;
  active?: boolean;
  onHover?: () => void;
};

function getIcon(category: string) {
  switch (category.toLowerCase()) {
    case "vehicles":
      return <Car size={18} />;

    case "characters":
      return <User size={18} />;

    case "locations":
      return <MapPin size={18} />;

    case "businesses":
      return <Building2 size={18} />;

    case "news":
      return <Newspaper size={18} />;

    case "media":
      return <Camera size={18} />;

    case "weapons":
      return <Shield size={18} />;

    default:
      return <Search size={18} />;
  }
}

export default function SearchResult({
  item,
  active = false,
  onHover,
}: Props) {
  return (
    <Link
      href={item.href}
      onMouseEnter={onHover}
      className={`group flex items-center gap-5 border-b border-white/5 px-7 py-5 transition-all duration-200 ${
        active
          ? "bg-pink-500/10"
          : "hover:bg-white/[0.04]"
      }`}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-pink-500/20 bg-gradient-to-br from-pink-500/15 to-violet-500/15 text-pink-400 transition group-hover:scale-105 group-hover:border-pink-500/40">
        {getIcon(item.category)}
      </div>

      <div className="min-w-0 flex-1">
        <div className="truncate text-base font-semibold text-white">
          {item.title}
        </div>

        {item.description && (
          <p className="mt-1 line-clamp-2 text-sm text-zinc-400">
            {item.description}
          </p>
        )}
      </div>

      <div className="hidden rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-400 lg:block">
        {item.category}
      </div>

      <ArrowRight
        size={18}
        className={`transition-all duration-200 ${
          active
            ? "translate-x-0 text-pink-400 opacity-100"
            : "translate-x-1 text-zinc-600 opacity-0 group-hover:translate-x-0 group-hover:text-pink-400 group-hover:opacity-100"
        }`}
      />
    </Link>
  );
}