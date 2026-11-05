import { ReactNode } from "react";

type SectionGridProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionGrid({
  children,
  className = "",
}: SectionGridProps) {
  return (
    <div
      className={`grid gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 ${className}`}
    >
      {children}
    </div>
  );
}