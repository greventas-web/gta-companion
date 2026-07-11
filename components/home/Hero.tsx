
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#040404]">
      <div className="absolute inset-0">
        <div className="absolute left-[-15%] top-[-20%] h-[900px] w-[900px] rounded-full bg-pink-500/20 blur-[240px]" />
        <div className="absolute right-[-10%] top-[-10%] h-[800px] w-[800px] rounded-full bg-violet-500/15 blur-[220px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-[#040404]" />
      </div>

      <div className="relative mx-auto flex min-h-[900px] max-w-[1800px] items-center px-8 lg:px-20">
        <div className="z-20 max-w-[620px]">
          <div className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-6 py-3 text-[11px] font-black uppercase tracking-[0.4em] text-pink-400">
            OFFICIAL GTA VI COMPANION
          </div>

          <h1 className="mt-8 text-[72px] font-black leading-[0.88] tracking-[-0.06em] text-white xl:text-[110px]">
            The Ultimate<br />
            <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">GTA VI</span>
            <br />Companion
          </h1>

          <p className="mt-8 max-w-[560px] text-xl leading-9 text-zinc-300">
            Explore every confirmed vehicle, character, location, business, weapon and guide inside one premium companion platform.
          </p>

          <div className="mt-10 flex gap-5">
            <Link href="/vehicles" className="rounded-2xl bg-gradient-to-r from-pink-500 to-fuchsia-500 px-8 py-5 font-bold text-white">Browse Database</Link>
            <Link href="/guides" className="rounded-2xl border border-white/10 bg-white/5 px-8 py-5 font-bold text-white">Explore Guides</Link>
          </div>
        </div>

        <div className="absolute inset-y-0 right-0 hidden w-[66%] lg:block">
          <Image src="/images/home/hero-new.jpg" alt="Jason and Lucia" fill priority className="object-cover object-[68%_center]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040404] via-[#040404]/50 to-transparent" />
          <div className="absolute inset-0 shadow-[inset_0_0_260px_rgba(0,0,0,.75)]" />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-pink-500/60 to-transparent" />
    </section>
  );
}
