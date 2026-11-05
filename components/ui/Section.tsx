type SectionProps = {
  children: React.ReactNode;
};

export default function Section({
  children,
}: SectionProps) {
  return (
    <section className="pt-36 pb-24 md:pb-32">
      {children}
    </section>
  );
}