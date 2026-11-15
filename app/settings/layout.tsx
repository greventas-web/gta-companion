import { pageMetadata } from "@/lib/launch";

export const metadata = pageMetadata(
  "Settings",
  "GTA Companion account settings. Unofficial fan site, not affiliated with Rockstar Games or Take-Two."
);

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
