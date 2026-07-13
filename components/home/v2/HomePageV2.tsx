import HeroV2 from "./HeroV2";
import CategoryGridSection from "./sections/CategoryGridSection";

export default function HomePageV2() {
  return (
    <main className="bg-[#040404] text-white">
      <HeroV2 />

      <CategoryGridSection />
    </main>
  );
}