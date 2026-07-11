import Image from "next/image";
import Link from "next/link";

export default function FeaturedVehicle() {
  return (
    <section className="py-32">

      <div className="mx-auto max-w-[1750px] px-8">

        <div className="mb-14">

          <p className="text-xs font-black uppercase tracking-[0.35em] text-pink-400">
            Featured Vehicle
          </p>

          <h2 className="mt-3 text-5xl font-black tracking-[-0.04em] text-white">
            Vehicle Spotlight
          </h2>

        </div>

        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-[#09090B]">

          <div className="grid lg:grid-cols-2">

            <div className="relative h-[620px]">

              <Image
                src="/images/home/featured-vehicle.jpg"
                alt="Featured Vehicle"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />

            </div>

            <div className="flex flex-col justify-center p-16">

              <div className="inline-flex w-fit rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-pink-400">
                Bravado
              </div>

              <h3 className="mt-8 text-6xl font-black tracking-tight text-white">
                Buffalo STX
              </h3>

              <p className="mt-8 text-lg leading-9 text-zinc-400">
                One of the most iconic muscle cars expected in GTA VI.
                High performance, aggressive styling and built for
                speed across Leonida.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-8">

                <div>
                  <p className="text-zinc-500">
                    Top Speed
                  </p>

                  <p className="mt-2 text-2xl font-bold text-white">
                    165 MPH
                  </p>
                </div>

                <div>
                  <p className="text-zinc-500">
                    Drive
                  </p>

                  <p className="mt-2 text-2xl font-bold text-white">
                    RWD
                  </p>
                </div>

                <div>
                  <p className="text-zinc-500">
                    Seats
                  </p>

                  <p className="mt-2 text-2xl font-bold text-white">
                    4
                  </p>
                </div>

                <div>
                  <p className="text-zinc-500">
                    Manufacturer
                  </p>

                  <p className="mt-2 text-2xl font-bold text-white">
                    Bravado
                  </p>
                </div>

              </div>

              <Link
                href="/vehicles"
                className="mt-12 inline-flex w-fit rounded-2xl bg-gradient-to-r from-pink-500 to-fuchsia-500 px-8 py-5 font-bold text-white transition hover:-translate-y-1"
              >
                View Vehicle →
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}