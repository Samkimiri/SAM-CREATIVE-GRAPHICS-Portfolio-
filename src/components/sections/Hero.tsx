import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";

const stats = [
  ["150+", "Projects"],
  ["80+", "Clients"],
  ["7+", "Years"],
  ["4", "Core Services"],
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-soft pt-32">
      <div className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_20%_20%,rgba(242,78,30,0.16),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(91,46,255,0.16),transparent_32%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-widest text-orange shadow-sm">
            <Sparkles className="h-4 w-4" />
            Where Creativity Meets Strategy
          </p>
          <h1 className="max-w-5xl text-5xl font-black leading-[1.02] tracking-tight text-charcoal md:text-7xl">
            Strategic design for brands that need to{" "}
            <span className="text-orange">stand out</span> and{" "}
            <span className="text-purple">sell clearly</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-charcoal/70">
            Sam Creative Graphics helps startups, SMEs, corporates, NGOs, and East African businesses build visual identities, campaigns, and digital experiences that feel premium and perform in the real market.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#portfolio">View Our Work</ButtonLink>
            <ButtonLink href="#contact" variant="outline">Talk to Us</ButtonLink>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-charcoal/10 bg-white p-5 shadow-sm">
                <p className="text-3xl font-black text-charcoal">{value}</p>
                <p className="mt-1 text-sm font-bold text-charcoal/55">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-orange/25 via-purple/20 to-green/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] bg-charcoal p-6 text-white shadow-premium">
            <div className="flex items-center justify-between">
              <Image src="/images/brand-mark.svg" alt="Sam Creative Graphics brand mark" width={84} height={84} className="rounded-3xl" />
              <ArrowUpRight className="h-8 w-8 text-amber" />
            </div>
            <div className="mt-16">
              <p className="text-sm font-black uppercase tracking-widest text-white/55">Premium African Creative Agency</p>
              <h2 className="mt-4 text-4xl font-black leading-tight">Brand systems, digital visuals, and campaign design with strategic discipline.</h2>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3">
              <div className="h-28 rounded-3xl bg-orange" />
              <div className="h-28 rounded-3xl bg-purple" />
              <div className="h-28 rounded-3xl bg-green" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
