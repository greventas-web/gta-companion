import { pageMetadata } from "@/lib/launch";

export const metadata = pageMetadata(
  "Create an account",
  "Create a GTA Companion account. Unofficial fan site, not affiliated with Rockstar Games or Take-Two."
);

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
