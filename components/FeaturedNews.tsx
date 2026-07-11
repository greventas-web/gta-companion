import Link from "next/link";

import HomeContainer from "@/components/home/HomeContainer";
import Section from "@/components/home/Section";
import SectionHeader from "@/components/home/SectionHeader";

const articles = [
  {
    category: "Rockstar Games",
    title: "Trailer 2 Breakdown",
    description:
      "Discover every hidden detail, vehicle, location and easter egg revealed throughout the second GTA VI trailer.",
    image: "/images/home/categories/characters.jpg",
  },
  {
    category: "Leonida",
    title: "Exploring Vice City",
    description:
      "Take a closer look at Vice City, the surrounding regions and every officially confirmed location.",
    image: "/images/home/categories/locations.jpg",
  },
  {
    category: "Vehicles",
    title: "Every Confirmed Vehicle",
    description:
      "Browse the growing collection of officially confirmed GTA VI vehicles with detailed specifications.",
    image: "/images/home/categories/vehicles.jpg",
  },
];

export default function FeaturedNews() {
  return (
    <Section className="py-28">

      <HomeContainer>

        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <SectionHeader
            badge="Latest News"
            title="Rockstar News"
            description="Stay informed with the latest official GTA VI announcements, trailers, screenshots and community discoveries."
          />

          <Link
            href="/news"
            className="group inline-flex items-center rounded-2xl border border-pink-500/40 bg-pink-500/5 px-7 py-4 font-semibold text-pink-400 transition-all duration-300 hover:border-pink-500 hover:bg-pink-500 hover:text-white hover:shadow-[0_15px_50px_rgba(236,72,153,.25)]"
          >
            View All News

            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>

          </Link>

        </div>

        <div className="grid gap-7 lg:grid-cols-3">

          {articles.map((article) => (

            <article
              key={article.title}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/60 hover:shadow-[0_30px_90px_rgba(236,72,153,.18)]"
            >

              <div
                className="relative h-64 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${article.image})`,
                }}
              >

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              </div>

              <div className="p-7">

                <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-pink-400">

                  {article.category}

                </span>

                <h3 className="mt-5 text-3xl font-black tracking-tight text-white transition duration-300 group-hover:text-pink-300">

                  {article.title}

                </h3>

                <p className="mt-4 text-base leading-7 text-zinc-400">

                  {article.description}

                </p>

                <div className="mt-6 h-1 w-0 rounded-full bg-pink-500 transition-all duration-500 group-hover:w-24" />

              </div>

            </article>

          ))}

        </div>

      </HomeContainer>

    </Section>
  );
}