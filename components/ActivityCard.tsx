import ItemImage, { isNameCard } from "@/components/ItemImage";
import Link from "next/link";

import { Activity } from "@/types/activity";

type Props = {
  activity: Activity;
};

export default function ActivityCard({
  activity,
}: Props) {
  return (
    <Link
      href={`/activities/${activity.slug}`}
      className="group block"
    >
      <article className="overflow-hidden rounded-[36px] border border-zinc-800 bg-zinc-900 transition-all duration-500 hover:-translate-y-3 hover:border-pink-500 hover:shadow-[0_35px_90px_rgba(236,72,153,0.18)]">

        <div className="relative aspect-[16/10] overflow-hidden">

          <ItemImage
            src={activity.image}
            alt={activity.imageAlt || activity.name}
            name={activity.name}
            fill
            className="object-cover"
          />

          {isNameCard(activity.image) ? null : (
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
          )}

          <div className="absolute left-6 top-6 z-20 max-w-[calc(100%-3rem)] rounded-full bg-pink-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white sm:tracking-[0.22em]">
            {activity.category}
          </div>

        </div>

        <div className="p-8">

          <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
            {activity.location}
          </p>

          <h3 className="mt-3 break-words text-3xl font-black text-white transition group-hover:text-pink-400 sm:text-4xl">
            {activity.name}
          </h3>

          <p className="mt-5 line-clamp-3 text-lg leading-8 text-zinc-400">
            {activity.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-800 pt-6">

            <span className="text-xs uppercase tracking-[0.12em] text-zinc-500 sm:text-sm">
              {activity.firstAppearance}
            </span>

            <span className="font-bold text-pink-400 transition duration-300 group-hover:translate-x-2">
              View Details →
            </span>

          </div>

        </div>

      </article>
    </Link>
  );
}