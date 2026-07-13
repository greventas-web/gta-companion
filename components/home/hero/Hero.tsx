import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#040404]">
      <HeroBackground />

      <div className="mx-auto grid min-h-[980px] max-w-[1700px] grid-cols-[520px_1fr]">

        <div className="relative z-20 flex items-center pl-10">
          <HeroContent />
        </div>

        <div className="relative">
          <HeroImage />
        </div>

      </div>
    </section>
  );
}