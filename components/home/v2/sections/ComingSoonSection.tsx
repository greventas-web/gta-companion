import ComingSoonCard from "../cards/ComingSoonCard";
import { comingSoon } from "../data/comingSoon";

export default function ComingSoonSection() {
  return (
    <section className="relative py-36">

      <div className="mx-auto max-w-[1700px] px-8">

        <div className="mb-16">

          <div className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-6 py-3 text-[11px] font-black uppercase tracking-[0.45em] text-pink-400">
            Coming Soon
          </div>

          <h2 className="mt-8 text-6xl font-black tracking-[-0.05em] text-white">
            More Official Databases
          </h2>

          <p className="mt-6 max-w-[760px] text-xl leading-9 text-zinc-400">
            As Rockstar reveals more official information, these sections
            will automatically become available.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {comingSoon.map((item) => (

            <ComingSoonCard
              key={item.title}
              title={item.title}
              description={item.description}
            />

          ))}

        </div>

      </div>

    </section>
  );
}