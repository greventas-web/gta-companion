import Link from "next/link";

type Props = {
  mapPinId?: string;
  className?: string;
};

export function mapPinHref(mapPinId?: string) {
  if (!mapPinId) return null;
  return `/map?pin=${encodeURIComponent(mapPinId)}`;
}

export default function MapPinLink({ mapPinId, className = "" }: Props) {
  const href = mapPinHref(mapPinId);
  if (!href) return null;

  return (
    <Link
      href={href}
      className={`inline-flex rounded-full border border-violet-400/40 bg-violet-500/15 px-5 py-2.5 text-sm font-semibold text-violet-100 transition hover:bg-violet-500/25 ${className}`}
    >
      View on map
    </Link>
  );
}
