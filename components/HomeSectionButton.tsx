import { Button } from "@/components/ui";

type HomeSectionButtonProps = {
  href: string;
  children: React.ReactNode;
};

export default function HomeSectionButton({
  href,
  children,
}: HomeSectionButtonProps) {
  return (
    <div className="mt-12 flex justify-center">
      <Button
        href={href}
        variant="secondary"
      >
        {children}
      </Button>
    </div>
  );
}