import { Badge, Button, Container } from "@/components/ui";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background text-white">

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-[-10%] top-[-10%] h-[520px] w-[520px] rounded-full bg-pink-500/10 blur-3xl" />

        <div className="absolute bottom-[-15%] right-[-10%] h-[520px] w-[520px] rounded-full bg-violet-500/10 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_65%)]" />

      </div>

      <Container>

        <div className="relative z-10 max-w-4xl">

          <Badge>
            GTA VI Companion Platform
          </Badge>

          <h1 className="mt-8 text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">

            Every Mission.

            <br />

            Every Vehicle.

            <br />

            <span className="text-pink-400">
              One Companion.
            </span>

          </h1>

          <p className="mt-10 max-w-2xl text-xl leading-9 text-zinc-400">

            GTA Companion brings together vehicles, interactive maps,
            businesses, collectibles, guides, news and powerful tools
            in one premium platform built for GTA VI players.

          </p>

          <div className="mt-14 flex flex-wrap gap-4">

            <Button href="/vehicles">
              Browse Vehicles
            </Button>

            <Button
              href="/guides"
              variant="secondary"
            >
              Explore Guides
            </Button>

          </div>

          <div className="mt-20 grid gap-8 sm:grid-cols-3">

            <div>
              <h2 className="text-4xl font-black text-pink-400">
                25+
              </h2>

              <p className="mt-2 text-zinc-500">
                Vehicles
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-black text-pink-400">
                3
              </h2>

              <p className="mt-2 text-zinc-500">
                Manufacturers
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-black text-pink-400">
                ∞
              </h2>

              <p className="mt-2 text-zinc-500">
                Future Updates
              </p>
            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}