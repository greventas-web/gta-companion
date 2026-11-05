import { Business } from "@/types/business";

export const businesses: Business[] = [
  {
    id: 1,
    slug: "only-raw-records",
    name: "Only Raw Records",
    category: "Record Label",
    location: "Vice City",
    image: "/images/businesses/only-raw-records.webp",
    description:
      "Independent Vice City record label working with Dre'Quan Priest and the rap duo Real Dimez. The label has become one of the city's fastest-growing names in the music industry.",
    firstAppearance: "Rockstar Games Website",
    status: "Officially Confirmed",
    owner: "Dre'Quan Priest",
    district: "Vice City",
    type: "Music Label",
    relatedBusinesses: ["high-rollerz-lifestyle"],
    gallery: [],
  },

  {
    id: 2,
    slug: "high-rollerz-lifestyle",
    name: "High Rollerz Lifestyle",
    category: "Entertainment",
    location: "Vice City",
    image: "/images/businesses/high-rollerz-lifestyle.webp",
    description:
      "Boobie Ike's business empire spanning music, nightlife, real estate and luxury investments throughout Vice City.",
    firstAppearance: "Rockstar Games Website",
    status: "Officially Confirmed",
    owner: "Boobie Ike",
    district: "Vice City",
    type: "Entertainment Company",
    relatedBusinesses: [
      "only-raw-records",
      "nine1nine",
    ],
    gallery: [],
  },

  {
    id: 3,
    slug: "jack-of-hearts",
    name: "Jack of Hearts",
    category: "Strip Club",
    location: "Vice City",
    image: "/images/businesses/jack-of-hearts.webp",
    description:
      "A famous Vice City strip club featured in Rockstar promotional material and one of the city's best-known nightlife destinations.",
    firstAppearance: "Trailer 1",
    status: "Officially Confirmed",
    district: "Vice City",
    type: "Nightlife",
    relatedBusinesses: ["nine1nine"],
    gallery: [],
  },

  {
    id: 4,
    slug: "brian-boat-works",
    name: "Brian's Boat Works",
    category: "Boat Yard",
    location: "Leonida Keys",
    image: "/images/businesses/brians-boat-works.webp",
    description:
      "Boat yard owned by Brian Heder that serves as both a marine repair business and the center of his smuggling operation in the Leonida Keys.",
    firstAppearance: "Rockstar Games Website",
    status: "Officially Confirmed",
    owner: "Brian Heder",
    district: "Leonida Keys",
    type: "Boat Yard",
    relatedBusinesses: [],
    gallery: [],
  },

  {
    id: 5,
    slug: "nine1nine",
    name: "Nine1Nine",
    category: "Nightclub",
    location: "Vice City",
    image: "/images/businesses/nine1nine.webp",
    description:
      "Luxury Vice City nightclub known for exclusive parties, live music and a vibrant nightlife atmosphere.",
    firstAppearance: "Rockstar Games Website",
    status: "Officially Confirmed",
    district: "Vice City",
    type: "Nightclub",
    relatedBusinesses: [
      "jack-of-hearts",
      "high-rollerz-lifestyle",
    ],
    gallery: [],
  },
];