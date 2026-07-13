import PageContainer from "./PageContainer";
import PageHero from "./PageHero";
import Footer from "./Footer";

type Props = {
  title: string;
  description: string;
};

export default function ComingSoonPage({
  title,
  description,
}: Props) {
  return (
    <main className="min-h-screen bg-[#040404] text-white">

      <PageContainer>

        <PageHero
          badge="Coming Soon"
          title={title}
          description={description}
        />

        <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#111114] via-[#09090B] to-black p-16 lg:p-24">

          <div className="absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-pink-500/20 blur-[140px]" />

          <div className="absolute left-[-120px] bottom-[-120px] h-[320px] w-[320px] rounded-full bg-violet-500/20 blur-[140px]" />

          <div className="relative mx-auto max-w-4xl text-center">

            <div className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-6 py-3 text-[11px] font-black uppercase tracking-[0.45em] text-pink-400">
              Official Rockstar Content
            </div>

            <h2 className="mt-8 text-5xl font-black tracking-[-0.05em] lg:text-7xl">
              More Information
              <br />
              Coming Soon
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-10 text-zinc-400">
              GTA Companion only publishes information officially revealed by
              Rockstar Games. This section will automatically expand as new
              trailers, screenshots, artwork and announcements are released.
            </p>

            <div className="mt-12 inline-flex rounded-2xl border border-white/10 bg-white/5 px-8 py-5 text-lg font-bold text-white">
              Waiting for the next Rockstar update
            </div>

          </div>

        </section>

      </PageContainer>

      <Footer />

    </main>
  );
}