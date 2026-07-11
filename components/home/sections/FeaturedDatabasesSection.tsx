import HomeContainer from "../HomeContainer";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

import FeaturedDatabaseCard from "../cards/FeaturedDatabaseCard";

const databases = [
  {
    title: "Vehicles",
    href: "/vehicles",
    image: "/images/home/categories/vehicles.jpg",
    count: "50+",
    description: "Every officially confirmed GTA VI vehicle.",
  },
  {
    title: "Characters",
    href: "/characters",
    image: "/images/home/categories/characters.jpg",
    count: "7+",
    description: "Meet Jason, Lucia and every known character.",
  },
  {
    title: "Locations",
    href: "/locations",
    image: "/images/home/categories/locations.jpg",
    count: "20+",
    description: "Cities, beaches and hidden landmarks.",
  },
  {
    title: "Weapons",
    href: "/weapons",
    image: "/images/home/categories/weapons.jpg",
    count: "25+",
    description: "Official GTA VI arsenal.",
  },
];

export default function FeaturedDatabasesSection() {
  return (
    <Section className="py-40">

      <HomeContainer>

        <SectionHeader
          badge="Featured Databases"
          title="Everything In One Place"
          description="Browse the largest growing GTA VI database built for players."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {databases.map((database) => (

            <FeaturedDatabaseCard
              key={database.title}
              title={database.title}
              description={database.description}
              image={database.image}
              count={database.count}
              href={database.href}
            />

          ))}

        </div>

      </HomeContainer>

    </Section>
  );
}