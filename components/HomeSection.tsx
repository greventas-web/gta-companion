import { Container, Heading, Section, Text } from "@/components/ui";

type HomeSectionProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function HomeSection({
  title,
  description,
  children,
}: HomeSectionProps) {
  return (
    <Section>
      <Container>

        <Heading>{title}</Heading>

        <Text
          variant="muted"
          className="mt-6 max-w-3xl"
        >
          {description}
        </Text>

        <div className="mt-12">
          {children}
        </div>

      </Container>
    </Section>
  );
}