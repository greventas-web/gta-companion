import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <div className="w-full max-w-[620px] pl-6 lg:pl-10">
      <div className="inline-flex items-center rounded-full border border-pink-500/30 bg-pink-500/10 px-7 py-3 text-[11px] font-black uppercase tracking-[0.45em] text-pink-400">
        OFFICIAL GTA VI COMPANION
      </div>

      <h1 className="mt-10 text-[78px] font-black leading-[0.86] tracking-[-0.07em] text-white xl:text-[112px]">
        The
        <br />

        Ultimate
        <br />

        <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 bg-clip-text text-transparent">
          GTA VI
        </span>

        <br />

        Companion
      </h1>

      <p className="mt-10 max-w-[560px] text-[22px] leading-10 text-zinc-300">
        Explore every confirmed vehicle, character,
        location, business, weapon and guide inside one
        premium companion platform.
      </p>

      <div className="mt-12">
        <HeroButtons />
      </div>
    </div>
  );
}