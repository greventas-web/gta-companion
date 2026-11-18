/**
 * Stand-in for items with no confirmed photo: a plain dark surface with a faint
 * brand tint and the name on top when asked. No skyline art, no stand-in photo.
 */
export default function BrandPlaceholder({
  name = "",
  className = "",
  showName = true,
}: {
  name?: string;
  className?: string;
  showName?: boolean;
}) {
  return (
    <div
      data-img-source="none"
      className={`relative h-full w-full overflow-hidden bg-gradient-to-br from-violet-500/[0.12] via-[#0B0B10] to-[#060608] ${className}`}
    >
      {showName && name ? (
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-2xl font-black leading-none tracking-[-0.03em] text-white">{name}</p>
        </div>
      ) : null}
    </div>
  );
}
