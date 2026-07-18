import HeroV2 from "./HeroV2";

import CategoryGridSection from "./sections/CategoryGridSection";
import CharactersSection from "./sections/CharactersSection";
import LocationsSection from "./sections/LocationsSection";
import NewsSection from "./sections/NewsSection";
import MediaSection from "./sections/MediaSection";

import Footer from "../../shared/Footer";

export default function HomePageV2() {
  return (
    <main className="overflow-x-hidden bg-[#040404] text-white">

      <HeroV2 />

      <div className="relative">
        <CategoryGridSection />
      </div>

      <div className="relative">
        <CharactersSection />
      </div>

      <div className="relative">
        <LocationsSection />
      </div>

      <div className="relative">
        <NewsSection />
      </div>

      <div className="relative">
        <MediaSection />
      </div>

      <Footer />

    </main>
  );
}