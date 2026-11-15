import { pageMetadata } from "@/lib/launch";

export const metadata = pageMetadata(
  "Profile",
  "Your GTA Companion profile. Unofficial fan site, not affiliated with Rockstar Games or Take-Two."
);

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
