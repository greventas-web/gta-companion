import PageContainer from "../shared/PageContainer";
import PageHero from "../shared/PageHero";
import Footer from "../shared/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#040404] text-white">

      <PageContainer>

        <PageHero
          badge="About GTA Companion"
          title="Built For GTA Players"
          description="GTA Companion is an independent companion platform built around official Rockstar Games information. Our goal is to become the most beautiful, trusted and useful GTA companion experience on the web."
        />

        <section className="grid gap-8 lg:grid-cols-3">

          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#101014] to-[#09090B] p-10">

            <h2 className="text-3xl font-black">
              Official First
            </h2>

            <p className="mt-6 leading-9 text-zinc-400">
              Every trailer, screenshot, artwork and announcement is sourced
              from official Rockstar Games releases before being organized into
              one searchable platform.
            </p>

          </div>

          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#101014] to-[#09090B] p-10">

            <h2 className="text-3xl font-black">
              Player Focused
            </h2>

            <p className="mt-6 leading-9 text-zinc-400">
              Instead of searching across multiple websites, players can browse
              everything in one fast, premium experience designed for GTA fans.
            </p>

          </div>

          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#101014] to-[#09090B] p-10">

            <h2 className="text-3xl font-black">
              Built For The Future
            </h2>

            <p className="mt-6 leading-9 text-zinc-400">
              GTA Companion grows alongside Grand Theft Auto VI. Every official
              Rockstar update expands the platform with new databases,
              interactive tools and companion features.
            </p>

          </div>

        </section>

      </PageContainer>

      <Footer />

    </main>
  );
}