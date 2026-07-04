type SectionGridProps = {
  children: React.ReactNode;
};

export default function SectionGrid({
  children,
}: SectionGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {children}
    </div>
  );
}