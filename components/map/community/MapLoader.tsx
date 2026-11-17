"use client";

import dynamic from "next/dynamic";
import type { CompanionPin } from "@/lib/map/model";

const CommunityMap = dynamic(() => import("./CommunityMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full min-h-[560px] w-full animate-pulse bg-[#120818]" aria-hidden />
  ),
});

type Props = {
  curated: CompanionPin[];
  focusPin: string;
  focusEntity: string;
  focusSlug: string;
};

export default function MapLoader(props: Props) {
  return <CommunityMap {...props} />;
}
