import { pageMetadata } from "@/lib/launch";

export const metadata = pageMetadata(
  "Favorites",
  "Pages you have saved on GTA Companion. Unofficial fan site, not affiliated with Rockstar Games or Take-Two."
);

export default function FavoritesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
