type PageHeaderProps = {
  title: string;
  description: string;
};

export default function PageHeader({
  title,
  description,
}: PageHeaderProps) {
  return (
    <>
      <h1 className="mt-8 text-6xl font-extrabold md:text-7xl">
        {title}
      </h1>

      <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-400">
        {description}
      </p>
    </>
  );
}