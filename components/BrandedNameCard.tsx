import BrandPlaceholder from "@/components/simple/BrandPlaceholder";

type Props = {
  name: string;
  className?: string;
  showName?: boolean;
};

/** Stand-in image for items with no photo yet. Uses the purple night-skyline placeholder. */
export default function BrandedNameCard({ name, className = "", showName = true }: Props) {
  return (
    <div data-wordmark={name} className={`relative h-full min-h-0 w-full ${className}`}>
      <BrandPlaceholder name={name || "GTA Companion"} showName={showName} />
    </div>
  );
}
