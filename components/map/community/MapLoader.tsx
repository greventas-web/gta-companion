"use client";

import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import type { CompanionPin } from "@/lib/map/model";

const CommunityMap = dynamic(() => import("./CommunityMap"), {
  ssr: false,
  loading: () => <MapLoading />,
});

export function MapLoading() {
  return <div className="h-full min-h-[560px] w-full animate-pulse bg-[#120818]" aria-hidden />;
}

type Props = {
  curated: CompanionPin[];
};

/**
 * Reads ?pin, ?entity and ?slug in the browser so /map itself can be served
 * as a static page from the CDN.
 */
export default function MapLoader({ curated }: Props) {
  const params = useSearchParams();
  return (
    <CommunityMap
      curated={curated}
      focusPin={params.get("pin") ?? ""}
      focusEntity={params.get("entity") ?? ""}
      focusSlug={params.get("slug") ?? ""}
    />
  );
}
