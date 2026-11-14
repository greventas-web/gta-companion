import Link from "next/link";
import { ArrowRight, MapPinned } from "lucide-react";

export default function MapFeature() {
  return (
    <section className="bg-[#040404] px-6 pb-4 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-[1600px]">
        <Link
          href="/map"
          className="group relative grid overflow-hidden rounded-[28px] border border-violet-300/20 bg-[#100818] shadow-[0_20px_80px_rgba(76,29,149,0.18)] transition hover:-translate-y-0.5 hover:border-violet-300/40 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="flex flex-col justify-center p-8 sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-violet-300">
              Flagship
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
              GTA 6 Interactive Map
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-zinc-400">
              Pan across a stylized Leonida, search the places Rockstar has
              named, and keep a private found list on this device. Built from
              official footage, with positions marked approximate until launch.
            </p>
            <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-violet-500 px-5 py-3 text-sm font-bold text-white transition group-hover:bg-violet-400">
              Open the map
              <ArrowRight size={16} />
            </span>
          </div>
          <div className="relative min-h-[240px] bg-[radial-gradient(circle_at_40%_40%,rgba(139,92,246,0.45),transparent_55%),linear-gradient(160deg,#123044,#07141f)]">
            <div className="absolute left-[18%] top-[22%] h-24 w-40 rotate-[-8deg] rounded-[40%] bg-[#1c4336]" />
            <div className="absolute bottom-[18%] right-[16%] h-16 w-28 rounded-[40%] bg-[#1a5a48]" />
            <div className="absolute left-[30%] top-[48%] h-px w-[46%] rotate-[18deg] bg-white/30" />
            <div className="absolute left-[46%] top-[36%] flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
              <MapPinned size={14} className="text-violet-200" />
              Vice City
            </div>
            <div className="absolute bottom-6 left-6 text-[11px] text-zinc-400">
              Diagram, not the in-game map
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
