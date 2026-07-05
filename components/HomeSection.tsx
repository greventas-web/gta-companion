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

        <div className="mx-auto max-w-3xl text-center">

          <Heading>{title}</Heading>

          <Text
            variant="muted"
            className="mt-6 text-lg leading-8"
          >
            {description}
          </Text>

        </div>

        <div className="mt-16">
          {children}
        </div>

      </Container>
    </Section>
  );
}