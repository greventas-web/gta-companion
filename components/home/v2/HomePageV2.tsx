import HeroV2 from "./HeroV2";
import FeaturedNewsV2 from "./FeaturedNewsV2";
import CategoryGridSection from "./sections/CategoryGridSection";

export default function HomePageV2() {
  return (
    <main className="overflow-x-hidden bg-[#040404] text-white">
      <HeroV2 />
      <CategoryGridSection />
      <FeaturedNewsV2 />
    </main>
  );
}