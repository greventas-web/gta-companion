import HomeContainer from "./HomeContainer";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import CategoryCard from "./cards/CategoryCard";

const categories = [
  {
    title: "Vehicles",
    description: "Every officially confirmed GTA VI vehicle.",
    count: "50+",
    href: "/vehicles",
  },
  {
    title: "Characters",
    description: "Meet Jason, Lucia and every known character.",
    count: "7+",
    href: "/characters",
  },
  {
    title: "Locations",
    description: "Cities, towns and iconic landmarks.",
    count: "20+",
    href: "/locations",
  },
  {
    title: "Businesses",
    description: "Shops, clubs and major companies.",
    count: "30+",
    href: "/businesses",
  },
  {
    title: "Weapons",
    description: "Official GTA VI arsenal.",
    count: "25+",
    href: "/weapons",
  },
  {
    title: "Animals",
    description: "Wildlife across Leonida.",
    count: "15+",
    href: "/animals",
  },
];

export default function ExploreGrid() {
  return (
    <Section className="py-36">

      <HomeContainer>

        <SectionHeader
          badge="Browse by Category"
          title="Explore Everything We Know"
          description="Browse every major part of GTA VI from one premium companion."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              {...category}
            />
          ))}

        </div>

      </HomeContainer>

    </Section>
  );
}