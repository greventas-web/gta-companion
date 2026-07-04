type HeadingProps = {
  children: React.ReactNode;
};

export default function Heading({
  children,
}: HeadingProps) {
  return (
    <h1 className="mt-8 text-6xl font-extrabold md:text-7xl">
      {children}
    </h1>
  );
}