import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FeaturedGuides from "@/components/FeaturedGuides";
import FeaturedNews from "@/components/FeaturedNews";
import FeaturedVehicles from "@/components/FeaturedVehicles";
import QuickStats from "@/components/QuickStats";

export default function Home() {
  return (
    <>
      <Hero />

      <QuickStats />

      <FeaturedVehicles />

      <FeaturedGuides />

      <FeaturedNews />

      <Features />
    </>
  );
}