import BrandDatabase from "@/components/BrandDatabase";

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-[#040404] text-white">

      <section className="relative overflow-hidden">

        <div className="absolute left-[-220px] top-[-140px] h-[620px] w-[620px] rounded-full bg-pink-500/10 blur-[180px]" />

        <div className="absolute right-[-220px] bottom-[-140px] h-[620px] w-[620px] rounded-full bg-violet-500/10 blur-[180px]" />

        <div className="relative mx-auto max-w-[1700px] px-4 pb-10 pt-36 sm:px-8 sm:pt-44">

          <div className="inline-flex max-w-full rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-pink-400 sm:px-6 sm:py-3 sm:text-[11px] sm:tracking-[0.28em]">
            Unofficial fan database
          </div>

          <h1 className="mt-8 break-words text-5xl font-black tracking-[-0.03em] text-white sm:text-7xl">
            Brands
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-10 text-zinc-400">
            Browse every officially confirmed GTA VI brand including
            restaurants, beverages, entertainment companies, retailers,
            record labels and more.
          </p>

          <BrandDatabase />

        </div>

      </section>

    </main>
  );
}