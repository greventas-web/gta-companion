import Link from "next/link";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const classes =
    variant === "primary"
      ? "inline-flex items-center rounded-xl bg-pink-500 px-6 py-3 font-semibold transition hover:bg-pink-400"
      : "inline-flex items-center rounded-xl border border-zinc-700 bg-zinc-900/60 px-6 py-3 font-semibold transition hover:border-pink-500 hover:text-pink-400";

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes}>
      {children}
    </button>
  );
}