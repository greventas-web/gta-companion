import HomeContainer from "../HomeContainer";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

import FeaturedDatabaseCard from "../cards/FeaturedDatabaseCard";

const content = [
  {
    title: "Characters",
    href: "/characters",
    image: "/images/home/categories/characters.jpg",
    count: "8",
    description: "Meet every officially revealed GTA VI character from Rockstar Games.",
  },
  {
    title: "Locations",
    href: "/locations",
    image: "/images/home/categories/locations.jpg",
    count: "6",
    description: "Explore Vice City and every confirmed region of Leonida.",
  },
  {
    title: "Screenshots",
    href: "/media/screenshots",
    image: "/images/home/categories/screenshots.jpg",
    count: "70+",
    description: "Official GTA VI screenshots released by Rockstar Games.",
  },
  {
    title: "Trailers",
    href: "/media/trailers",
    image: "/images/home/categories/trailers.jpg",
    count: "2",
    description: "Watch every official GTA VI trailer in one place.",
  },
  {
    title: "Artwork",
    href: "/media/artwork",
    image: "/images/home/categories/artwork.jpg",
    count: "20+",
    description: "Official promotional artwork, wallpapers and key art.",
  },
  {
    title: "Databases",
    href: "/databases",
    image: "/images/home/categories/databases.jpg",
    count: "Coming Soon",
    description:
      "Vehicles, weapons, businesses and much more will unlock after launch.",
  },
];

export default function FeaturedDatabasesSection() {
  return (
    <Section className="py-36">
      <HomeContainer>
        <SectionHeader
          badge="Official Rockstar Content"
          title="Everything Confirmed So Far"
          description="Every page below is built using official GTA VI information released by Rockstar Games."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {content.map((item) => (
            <FeaturedDatabaseCard
              key={item.title}
              title={item.title}
              description={item.description}
              image={item.image}
              count={item.count}
              href={item.href}
            />
          ))}
        </div>
      </HomeContainer>
    </Section>
  );
}