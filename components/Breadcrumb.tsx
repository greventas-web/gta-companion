import Link from "next/link";

type BreadcrumbProps = {
  items: {
    label: string;
    href?: string;
  }[];
};

export default function Breadcrumb({
  items,
}: BreadcrumbProps) {
  return (
    <nav className="flex flex-wrap items-center gap-2 text-sm text-zinc-500">
      {items.map((item, index) => (
        <div
          key={item.label}
          className="flex items-center gap-2"
        >
          {item.href ? (
            <Link
              href={item.href}
              className="transition hover:text-pink-400"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-white">
              {item.label}
            </span>
          )}

          {index < items.length - 1 && (
            <span>/</span>
          )}
        </div>
      ))}
    </nav>
  );
}