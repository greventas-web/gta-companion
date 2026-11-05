type PageTitleProps = {
  title: string;
  description: string;
  align?: "left" | "center";
};

export default function PageTitle({
  title,
  description,
  align = "left",
}: PageTitleProps) {
  return (
    <section
      className={`mb-20 ${
        align === "center" ? "mx-auto max-w-4xl text-center" : ""
      }`}
    >
      <h1 className="text-6xl font-black tracking-[-0.05em] text-white lg:text-7xl">
        {title}
      </h1>

      <p className="mt-8 max-w-3xl text-xl leading-10 text-zinc-400">
        {description}
      </p>
    </section>
  );
}