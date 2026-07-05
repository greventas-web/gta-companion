type PageHeaderProps = {
  title: string;
  description: string;
};

export default function PageHeader({
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className="mx-auto max-w-4xl text-center">

      <h1 className="mt-8 text-5xl font-black tracking-tight md:text-7xl">
        {title}
      </h1>

      <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
        {description}
      </p>

    </div>
  );
}