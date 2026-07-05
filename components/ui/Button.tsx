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
      ? "inline-flex items-center justify-center rounded-2xl bg-pink-500 px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-pink-400 hover:shadow-lg hover:shadow-pink-500/30"
      : "inline-flex items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-900/60 px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-500 hover:bg-zinc-900 hover:text-pink-400";

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}