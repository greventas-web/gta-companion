import HeroSection from "./HeroSection";
import BackgroundGlow from "./BackgroundGlow";

import QuickStatsSection from "./sections/QuickStatsSection";
import FeaturedDatabasesSection from "./sections/FeaturedDatabasesSection";
import ExploreSection from "./sections/ExploreSection";

import FeaturedVehicleSection from "./sections/FeaturedVehicleSection";
import FeaturedCharacterSection from "./sections/FeaturedCharacterSection";
import LatestNewsSection from "./sections/LatestNewsSection";
import FooterSection from "./sections/FooterSection";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-black text-white">

      <BackgroundGlow />

      {/* Hero */}
      <HeroSection />

      {/* Quick Stats */}
      <QuickStatsSection />

      {/* Featured Databases */}
      <FeaturedDatabasesSection />

      {/* Explore Categories */}
      <ExploreSection />

      {/* Featured Vehicle */}
      <FeaturedVehicleSection />

      {/* Featured Character */}
      <FeaturedCharacterSection />

      {/* Latest News */}
      <LatestNewsSection />

      {/* Footer */}
      <FooterSection />

    </main>
  );
}