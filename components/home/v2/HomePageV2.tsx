import SimpleCard from "@/components/simple/SimpleCard";
import SupportCta from "@/components/support/SupportCta";
import { homeHubs } from "@/lib/simple/hubs";

import FeaturedNewsV2 from "./FeaturedNewsV2";
import HomeHero from "./HomeHero";
import StartHere from "./StartHere";

export default function HomePageV2() {
  return (
    <main className="overflow-x-hidden bg-[#040404] text-white">
      <HomeHero />

      <StartHere />

      <section className="mx-auto max-w-[1600px] px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
        <h2 className="mb-8 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">Browse</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homeHubs.map((hub) => (
            <SimpleCard key={hub.href} href={hub.href} title={hub.title} image={hub.image} line={hub.line} kind={hub.kind} />
          ))}
        </div>
      </section>

      <div className="px-6 sm:px-10 lg:px-14">
        <SupportCta placement="home" />
      </div>

      <FeaturedNewsV2 />
    </main>
  );
}
