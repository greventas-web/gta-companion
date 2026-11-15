import { pageMetadata } from "@/lib/launch";

export const metadata = pageMetadata(
  "Dashboard",
  "Your GTA Companion dashboard. Unofficial fan site, not affiliated with Rockstar Games or Take-Two."
);

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
