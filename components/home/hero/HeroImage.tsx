import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative h-full w-full overflow-hidden">

      <Image
        src="/images/home/hero-new.jpg"
        alt="GTA VI"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Left Fade */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#040404] via-[#040404]/35 to-transparent" />

      {/* Bottom Fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-transparent to-transparent" />

      {/* Pink Glow */}
      <div className="absolute -right-24 top-20 h-[700px] w-[700px] rounded-full bg-pink-500/15 blur-[180px]" />

      {/* Purple Glow */}
      <div className="absolute bottom-[-150px] left-[15%] h-[600px] w-[600px] rounded-full bg-violet-500/15 blur-[180px]" />

    </div>
  );
}