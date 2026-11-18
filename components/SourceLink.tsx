import { SHOW_PUBLIC_SOURCES } from "@/lib/sources";

export type SourceRef = {
  label: string;
  href?: string;
};

function sourceName(label: string) {
  return label.replace(/^Source:\s*/i, "").trim();
}

const linked =
  "break-words text-zinc-500 underline-offset-2 transition-colors hover:text-violet-400 hover:underline";

export function SourceLink({
  label,
  href,
  prefixed = true,
}: SourceRef & { prefixed?: boolean }) {
  if (!SHOW_PUBLIC_SOURCES) {
    return null;
  }

  const name = sourceName(label);
  const text = prefixed ? `Source: ${name}` : name;

  if (!href) {
    return <span className="break-words text-xs leading-5 text-zinc-500">{text}</span>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-xs leading-5 ${linked}`}
    >
      {text}
    </a>
  );
}

export function SourceList({
  sources,
  className = "",
}: {
  sources: readonly SourceRef[];
  className?: string;
}) {
  if (!SHOW_PUBLIC_SOURCES) {
    return null;
  }

  const items = sources.filter((source) => sourceName(source.label).length > 0);

  if (items.length === 0) {
    return null;
  }

  if (items.length === 1) {
    return (
      <p className={className}>
        <SourceLink label={items[0].label} href={items[0].href} />
      </p>
    );
  }

  return (
    <p className={`break-words text-xs leading-5 text-zinc-500 ${className}`}>
      <span>Source: </span>
      {items.map((source, index) => {
        const name = sourceName(source.label);

        return (
          <span key={`${name}-${source.href ?? "print"}-${index}`}>
            {index > 0 ? " · " : null}
            {source.href ? (
              <a
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linked}
              >
                {name}
              </a>
            ) : (
              <span>{name}</span>
            )}
          </span>
        );
      })}
    </p>
  );
}
