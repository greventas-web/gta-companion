import HomeContainer from "./HomeContainer";
import CategoryCard from "./cards/CategoryCard";

const categories = [
  {
    title: "Vehicles",
    count: "50+",
    href: "/vehicles",
    image: "/images/home/categories/vehicles.jpg",
  },
  {
    title: "Manufacturers",
    count: "10+",
    href: "/manufacturers",
    image: "/images/home/categories/manufacturers.jpg",
  },
  {
    title: "Characters",
    count: "15+",
    href: "/characters",
    image: "/images/home/categories/characters.jpg",
  },
  {
    title: "Locations",
    count: "20+",
    href: "/locations",
    image: "/images/home/categories/locations.jpg",
  },
  {
    title: "Businesses",
    count: "30+",
    href: "/businesses",
    image: "/images/home/categories/businesses.jpg",
  },
  {
    title: "Weapons",
    count: "25+",
    href: "/weapons",
    image: "/images/home/categories/weapons.jpg",
  },
  {
    title: "Animals",
    count: "10+",
    href: "/animals",
    image: "/images/home/categories/animals.jpg",
  },
  {
    title: "Activities",
    count: "15+",
    href: "/activities",
    image: "/images/home/categories/activities.jpg",
  },
  {
    title: "Brands",
    count: "20+",
    href: "/brands",
    image: "/images/home/categories/brands.jpg",
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