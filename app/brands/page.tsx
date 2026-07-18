import BrandDatabase from "@/components/BrandDatabase";

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-[#040404] text-white">

      <section className="relative overflow-hidden">

        <div className="absolute left-[-220px] top-[-140px] h-[620px] w-[620px] rounded-full bg-pink-500/10 blur-[180px]" />

        <div className="absolute right-[-220px] bottom-[-140px] h-[620px] w-[620px] rounded-full bg-violet-500/10 blur-[180px]" />

        <div className="relative mx-auto max-w-[1700px] px-8 pt-32 pb-10">

          <div className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-6 py-3 text-[11px] font-black uppercase tracking-[0.45em] text-pink-400">
            Official GTA VI Database
          </div>

          <h1 className="mt-8 text-7xl font-black tracking-[-0.05em] text-white">
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