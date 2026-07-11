import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    title: "Vehicles",
    count: "50+",
    image: "/images/categories/vehicles.jpg",
    href: "/vehicles",
  },
  {
    title: "Manufacturers",
    count: "10+",
    image: "/images/categories/manufacturers.jpg",
    href: "/manufacturers",
  },
  {
    title: "Characters",
    count: "15+",
    image: "/images/categories/characters.jpg",
    href: "/characters",
  },
  {
    title: "Locations",
    count: "20+",
    image: "/images/categories/locations.jpg",
    href: "/locations",
  },
  {
    title: "Businesses",
    count: "30+",
    image: "/images/categories/businesses.jpg",
    href: "/businesses",
  },
  {
    title: "Weapons",
    count: "25+",
    image: "/images/categories/weapons.jpg",
    href: "/weapons",
  },
  {
    title: "Animals",
    count: "10+",
    image: "/images/categories/animals.jpg",
    href: "/animals",
  },
  {
    title: "Activities",
    count: "15+",
    image: "/images/categories/activities.jpg",
    href: "/activities",
  },
  {
    title: "Brands",
    count: "20+",
    image: "/images/categories/brands.jpg",
    href: "/brands",
  },
];

export default function CategoryGrid() {
  return (
    <section className="mt-24">

      <p className="text-sm font-bold uppercase tracking-[0.35em] text-pink-400">
        Browse by Category
      </p>

      <h2 className="mt-4 text-5xl font-black">
        Explore Everything We Know
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {categories.map((category) => (

          <Link
            key={category.title}
            href={category.href}
            className="group"
          >

            <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] border border-zinc-800 bg-zinc-900">

              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute bottom-6 left-6">

                <h3 className="text-3xl font-black">
                  {category.title}
                </h3>

                <p className="mt-2 text-zinc-300">
                  {category.count}
                </p>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}