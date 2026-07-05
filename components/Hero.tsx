import Link from "next/link";

import {
  Badge,
  Button,
  Container,
  Heading,
  Section,
  Text,
} from "@/components/ui";

export default function Hero() {
  return (
    <Section>

      <Container>

        <Badge>
          Official GTA VI Companion
        </Badge>

        <Heading>
          The Ultimate GTA VI Database
        </Heading>

        <Text
          variant="muted"
          className="mt-8 max-w-3xl"
        >
          Browse confirmed GTA VI vehicles, manufacturers, guides,
          locations, businesses, characters and more. Built using
          official Rockstar information and continuously updated as
          new content is revealed.
        </Text>

        <div className="mt-12 flex flex-wrap gap-5">

          <Button href="/vehicles">
            Browse Vehicles
          </Button>

          <Button
            href="/manufacturers"
            variant="secondary"
          >
            Manufacturers
          </Button>

        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">

            <h3 className="text-4xl font-black">
              50+
            </h3>

            <p className="mt-2 text-zinc-400">
              Confirmed Vehicles
            </p>

          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">

            <h3 className="text-4xl font-black">
              10
            </h3>

            <p className="mt-2 text-zinc-400">
              Manufacturers
            </p>

          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">

            <h3 className="text-4xl font-black">
              100%
            </h3>

            <p className="mt-2 text-zinc-400">
              Official Rockstar Sources
            </p>

          </div>

        </div>

      </Container>

    </Section>
  );
}