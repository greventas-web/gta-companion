import HeroV2 from "./HeroV2";
import HomeStatsV2 from "./HomeStatsV2";
import FeaturedNewsV2 from "./FeaturedNewsV2";
import FeaturedDatabaseV2 from "./FeaturedDatabaseV2";
import MapPreviewV2 from "./MapPreviewV2";
import WhyCompanionV2 from "./WhyCompanionV2";

export default function HomePageV2() {
  return (
    <main className="overflow-x-hidden bg-[#040404] text-white">
      <HeroV2 />

      <HomeStatsV2 />

      <FeaturedNewsV2 />

      <FeaturedDatabaseV2 />

      <MapPreviewV2 />

      <WhyCompanionV2 />
    </main>
  );
}