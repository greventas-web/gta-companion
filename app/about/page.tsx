import type { Metadata } from "next";

import AboutPage from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "About GTA Companion. Everything GTA 6 in one place. An unofficial fan site, not affiliated with Rockstar Games or Take-Two Interactive.",
};

export default function Page() {
  return <AboutPage />;
}