type SectionProps = {
  children: React.ReactNode;
};

export default function Section({
  children,
}: SectionProps) {
  return (
    <section className="pt-44 pb-28 md:pb-36">
      {children}
    </section>
  );
}