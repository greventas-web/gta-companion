"use client";

import { Heart } from "lucide-react";

import { useAuth } from "@/components/auth/AuthProvider";
import { useFavorites } from "@/hooks/useFavorites";

type Props = {
  id: string;
};

export default function FavoriteButton({
  id,
}: Props) {
  const { user } = useAuth();

  const {
    favorites,
    toggleFavorite,
  } = useFavorites();

  const active = favorites.includes(id);

  function handleClick(
    e: React.MouseEvent<HTMLButtonElement>
  ) {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      window.location.href = "/login";
      return;
    }

    toggleFavorite(id);
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Favorite"
      className={`absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300 ${
        active
          ? "border-pink-500 bg-pink-500 text-white shadow-[0_0_30px_rgba(236,72,153,.45)]"
          : "border-white/10 bg-black/45 text-white hover:border-pink-500 hover:bg-pink-500/20"
      }`}
    >
      <Heart
        size={20}
        fill={active ? "currentColor" : "none"}
      />
    </button>
  );
}