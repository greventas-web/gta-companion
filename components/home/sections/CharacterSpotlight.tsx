import Image from "next/image";
import Link from "next/link";

import HomeContainer from "../HomeContainer";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

export default function CharacterSpotlight() {
  return (
    <Section className="py-40">

      <HomeContainer>

        <SectionHeader
          badge="Character Database"
          title="Meet The Main Characters"
          description="Browse every confirmed detail about GTA VI's protagonists."
        />

        <div className="grid items-center gap-20 lg:grid-cols-[60%_40%]">

          <div className="relative overflow-hidden rounded-[40px]">

            <Image
              src="/images/home/hero.jpg"
              alt="Jason and Lucia"
              width={1200}
              height={1500}
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

          </div>

          <div>

            <span className="text-sm font-bold uppercase tracking-[0.35em] text-pink-400">
              STORY
            </span>

            <h2 className="mt-6 text-7xl font-black leading-[0.9]">
              Jason
              <br />
              &
              <br />
              Lucia
            </h2>

            <p className="mt-8 text-xl leading-9 text-zinc-400">
              Discover biographies, relationships, screenshots,
              vehicles, businesses, missions and every officially
              confirmed detail about GTA VI's main protagonists.
            </p>

            <Link
              href="/characters"
              className="mt-12 inline-flex rounded-2xl bg-pink-500 px-8 py-4 font-bold transition duration-300 hover:scale-105 hover:bg-pink-400"
            >
              Explore Character Database
            </Link>

          </div>

        </div>

      </HomeContainer>

    </Section>
  );
}