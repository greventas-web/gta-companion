import Image from "next/image";
import Link from "next/link";

export default function FeaturedVehicle() {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8 lg:p-12">
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-pink-500/15 blur-[120px]" />
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] border border-white/10">
          <Image src="/images/home/featured/buffalo.jpg" alt="Bravado Buffalo" fill className="object-cover" />
        </div>
        <div>
          <div className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-pink-400">Featured Vehicle</div>
          <h2 className="mt-5 text-5xl font-black text-white">Bravado Buffalo</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">A modern American muscle car built for speed, pursuits and long highway drives across Leonida.</p>
          <div className="mt-8 grid grid-cols-2 gap-5">
            <Stat label="Top Speed" value="165 MPH" />
            <Stat label="Seats" value="4" />
            <Stat label="Drivetrain" value="RWD" />
            <Stat label="Class" value="Muscle" />
          </div>
          <div className="mt-10 flex gap-4">
            <Link href="/vehicles/bravado-buffalo" className="rounded-2xl bg-pink-500 px-6 py-4 font-bold text-white">View Vehicle</Link>
            <Link href="/vehicles" className="rounded-2xl border border-white/10 px-6 py-4 font-bold text-white">Browse All</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({label,value}:{label:string;value:string}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">{label}</div>
      <div className="mt-2 text-2xl font-black text-white">{value}</div>
    </div>
  );
}
