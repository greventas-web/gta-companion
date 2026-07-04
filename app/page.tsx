import Hero from "@/components/Hero";
import FeaturedVehicles from "@/components/FeaturedVehicles";
import FeaturedGuides from "@/components/FeaturedGuides";
import FeaturedNews from "@/components/FeaturedNews";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedVehicles />
      <FeaturedGuides />
      <FeaturedNews />
      <Features />
      <Footer />
    </>
  );
}