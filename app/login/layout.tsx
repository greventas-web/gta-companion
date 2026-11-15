import { pageMetadata } from "@/lib/launch";

export const metadata = pageMetadata(
  "Sign in",
  "Sign in to GTA Companion. Unofficial fan site, not affiliated with Rockstar Games or Take-Two."
);

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
