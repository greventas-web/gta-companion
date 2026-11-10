import HomeContainer from "./HomeContainer";
import CategoryCard from "./cards/CategoryCard";

const categories = [
  {
    title: "Vehicles",
    count: "50+",
    href: "/vehicles",
    image: "/images/official/categories/vehicles.webp",
  },
  {
    title: "Manufacturers",
    count: "10+",
    href: "/manufacturers",
    image: "/images/official/categories/manufacturers.webp",
  },
  {
    title: "Characters",
    count: "15+",
    href: "/characters",
    image: "/images/official/categories/characters.webp",
  },
  {
    title: "Locations",
    count: "20+",
    href: "/locations",
    image: "/images/official/categories/locations.webp",
  },
  {
    title: "Businesses",
    count: "30+",
    href: "/businesses",
    image: "/images/official/categories/businesses.webp",
  },
  {
    title: "Weapons",
    count: "25+",
    href: "/weapons",
    image: "/images/official/categories/weapons.webp",
  },
  {
    title: "Animals",
    count: "10+",
    href: "/animals",
    image: "/images/official/categories/animals.webp",
  },
  {
    title: "Activities",
    count: "15+",
    href: "/activities",
    image: "/images/official/categories/activities.webp",
  },
  {
    title: "Brands",
    count: "20+",
    href: "/brands",
    image: "/images/official/categories/brands.webp",
  },
];

export default function ExploreGrid() {
  return (
    <section className="relative py-8">

      <HomeContainer>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9">

          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              count={category.count}
              href={category.href}
              image={category.image}
            />
          ))}

        </div>

      </HomeContainer>

    </section>
  );
}