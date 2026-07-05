type PageTitleProps = {
  title: string;
  description: string;
};

export default function PageTitle({
  title,
  description,
}: PageTitleProps) {
  return (
    <div className="mb-16">

      <h1 className="text-5xl font-extrabold lg:text-6xl">
        {title}
      </h1>

      <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-400">
        {description}
      </p>

    </div>
  );
}