import BrandDatabase from "@/components/BrandDatabase";
import PageHero from "@/components/PageHero";

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-[#040404] text-white">

      <section className="relative overflow-hidden">

        <div className="absolute left-[-220px] top-[-140px] h-[620px] w-[620px] rounded-full bg-pink-500/10 blur-[180px]" />

        <div className="absolute right-[-220px] bottom-[-140px] h-[620px] w-[620px] rounded-full bg-violet-500/10 blur-[180px]" />

        <div className="relative mx-auto max-w-[1700px] px-4 pb-10 pt-36 sm:px-8 sm:pt-44">

          <PageHero
            badge="Unofficial fan database"
            title="Brands"
            description="Browse every officially confirmed GTA VI brand including restaurants, beverages, entertainment companies, retailers, record labels and more."
            image="/images/official/editions/ultimate_edition_electric_fang_01.webp"
            imageAlt="Electric Fang Tattoo storefront"
          />

          <BrandDatabase />

        </div>

      </section>

    </main>
  );
}