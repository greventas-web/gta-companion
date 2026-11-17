"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { MapEntityType } from "@/lib/map/model";

type Props = {
  entityType: MapEntityType;
  entitySlug: string;
  staticHref: string | null;
};

export default function ViewOnMapLink({ entityType, entitySlug, staticHref }: Props) {
  const [href, setHref] = useState<string | null>(staticHref);

  useEffect(() => {
    if (staticHref) return;
    const params = new URLSearchParams({ entity: entityType, slug: entitySlug });
    let cancel = false;
    fetch(`/api/map/submissions?${params.toString()}`)
      .then((response) => (response.ok ? response.json() : null))
      .then((body: { href?: string | null } | null) => {
        if (!cancel && body?.href) setHref(body.href);
      })
      .catch(() => undefined);
    return () => {
      cancel = true;
    };
  }, [entitySlug, entityType, staticHref]);

  if (!href) return null;

  return (
    <Link
      href={href}
      className="mt-6 inline-flex items-center gap-2 rounded-full border border-violet-400/40 bg-violet-500/15 px-5 py-2.5 text-sm font-semibold text-violet-100 transition hover:bg-violet-500/25"
    >
      View on map
    </Link>
  );
}
