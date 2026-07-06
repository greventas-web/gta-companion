import HeroSection from "./HeroSection";
import BackgroundGlow from "./BackgroundGlow";

import ExploreSection from "./sections/ExploreSection";
import QuickStatsSection from "./sections/QuickStatsSection";
import FeaturedVehicleSection from "./sections/FeaturedVehicleSection";
import FeaturedCharacterSection from "./sections/FeaturedCharacterSection";
import LatestNewsSection from "./sections/LatestNewsSection";
import FooterSection from "./sections/FooterSection";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-black text-white">

      <BackgroundGlow />

      <HeroSection />

      <QuickStatsSection />

      <ExploreSection />

      <FeaturedVehicleSection />

      <FeaturedCharacterSection />

      <LatestNewsSection />

      <FooterSection />

    </main>
  );
}