type SectionProps = {
  children: React.ReactNode;
};

export default function Section({
  children,
}: SectionProps) {
  return (
    <section className="py-24 md:py-32">
      {children}
    </section>
  );
}