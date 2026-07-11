import HomeContainer from "./HomeContainer";
import CategoryCard from "./cards/CategoryCard";

const categories = [
  {
    title: "Vehicles",
    count: "50+",
    href: "/vehicles",
  },
  {
    title: "Manufacturers",
    count: "10+",
    href: "/manufacturers",
  },
  {
    title: "Characters",
    count: "15+",
    href: "/characters",
  },
  {
    title: "Locations",
    count: "20+",
    href: "/locations",
  },
  {
    title: "Businesses",
    count: "30+",
    href: "/businesses",
  },
  {
    title: "Weapons",
    count: "25+",
    href: "/weapons",
  },
  {
    title: "Animals",
    count: "10+",
    href: "/animals",
  },
  {
    title: "Activities",
    count: "15+",
    href: "/activities",
  },
  {
    title: "Brands",
    count: "20+",
    href: "/brands",
  },
];

export default function ExploreGrid() {
  return (
    <section className="relative py-24">

      <HomeContainer>

        <div className="mb-12">

          <p className="text-xs font-black uppercase tracking-[0.35em] text-pink-400">
            Browse By Category
          </p>

          <h2 className="mt-3 text-5xl font-black tracking-[-0.04em] text-white">
            Explore Everything We Know
          </h2>

        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9">

          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              count={category.count}
              href={category.href}
            />
          ))}

        </div>

      </HomeContainer>

    </section>
  );
}