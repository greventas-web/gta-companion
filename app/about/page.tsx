import AboutPage from "@/components/about/AboutPage";
import { pageMetadata } from "@/lib/launch";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata(
  "About",
  `${SITE.slogan}. GTA Companion is an unofficial fan site for Grand Theft Auto VI, not affiliated with Rockstar Games or Take-Two.`
);

export default function Page() {
  return <AboutPage />;
}