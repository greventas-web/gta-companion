type TextProps = {
  children: React.ReactNode;
  variant?: "body" | "muted" | "small";
  className?: string;
};

export default function Text({
  children,
  variant = "body",
  className = "",
}: TextProps) {
  const styles = {
    body: "text-lg leading-8 text-white",
    muted: "text-lg leading-8 text-zinc-400",
    small: "text-sm text-zinc-500",
  };

  return (
    <p className={`${styles[variant]} ${className}`}>
      {children}
    </p>
  );
}