type HeadingProps = {
  children: React.ReactNode;
};

export default function Heading({
  children,
}: HeadingProps) {
  return (
    <h2 className="text-5xl font-black tracking-tight md:text-6xl">
      {children}
    </h2>
  );
}