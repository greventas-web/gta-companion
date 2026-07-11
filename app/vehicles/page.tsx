import VehicleDatabase from "@/components/VehicleDatabase";

import {
  Container,
  Section,
} from "@/components/ui";

import { vehicles } from "@/data/vehicles";

export default function VehiclesPage() {
  const manufacturers = new Set(
    vehicles.map((vehicle) => vehicle.manufacturer)
  ).size;

  const categories = new Set(
    vehicles.map((vehicle) => vehicle.category)
  ).size;

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}

      <section className="relative overflow-hidden border-b border-white/10">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,.18),transparent_40%)]" />

        <Container>

          <div className="py-28">

            <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-pink-400">

              Official GTA VI Database

            </span>

            <h1 className="mt-8 text-6xl font-black tracking-tight sm:text-7xl xl:text-8xl">

              Vehicle Database

            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-400">

              Browse every officially confirmed GTA VI vehicle,
              manufacturer and category with detailed specifications,
              images and information.

            </p>

            <div className="mt-14 grid gap-6 md:grid-cols-3">

              <div className="rounded-[28px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-8">

                <p className="text-5xl font-black">

                  {vehicles.length}

                </p>

                <p className="mt-2 uppercase tracking-[0.25em] text-zinc-500">

                  Vehicles

                </p>

              </div>

              <div className="rounded-[28px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-8">

                <p className="text-5xl font-black">

                  {manufacturers}

                </p>

                <p className="mt-2 uppercase tracking-[0.25em] text-zinc-500">

                  Manufacturers

                </p>

              </div>

              <div className="rounded-[28px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-8">

                <p className="text-5xl font-black">

                  {categories}

                </p>

                <p className="mt-2 uppercase tracking-[0.25em] text-zinc-500">

                  Categories

                </p>

              </div>

            </div>

          </div>

        </Container>

      </section>

      {/* Database */}

      <Section>

        <Container>

          <VehicleDatabase />

        </Container>

      </Section>

    </main>
  );
}