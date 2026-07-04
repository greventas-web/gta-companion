import { Badge, Button, Container } from "@/components/ui";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background text-white">

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl animate-pulse"></div>

        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl animate-pulse"></div>
      </div>

      <Container>

        <div className="relative z-10 text-center">

          <Badge>
            THE ULTIMATE GTA 6 COMPANION
          </Badge>

          <h1 className="mt-8 text-6xl font-extrabold leading-tight md:text-8xl">
            Explore
            <span className="text-pink-400">.</span>
            <br />
            Discover
            <span className="text-pink-400">.</span>
            <br />
            Complete
            <span className="text-pink-400">.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-zinc-400">
            Everything you need for GTA 6 in one premium platform.
            Maps, vehicles, money guides, collectibles, missions and more.
          </p>

          <div className="mt-12 flex justify-center gap-4">

            <Button href="/map">
              Explore Now
            </Button>

            <Button
              href="/roadmap"
              variant="secondary"
            >
              View Roadmap
            </Button>

          </div>

        </div>

      </Container>

    </section>
  );
}