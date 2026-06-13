import Image from "next/image";
import { Sparkles } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";

const stats = [
  ["150+", "Projects"],
  ["80+", "Clients"],
  ["7+", "Years"],
  ["4", "Core Services"],
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal pt-32 text-white">
      <Image
        src="/images/brand-agency-hero.png"
        alt="Brand agency studio with strategy boards, color swatches, typography work, and creative tools"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(16,18,23,0.94)_0%,rgba(16,18,23,0.82)_38%,rgba(16,18,23,0.48)_70%,rgba(16,18,23,0.28)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-charcoal via-charcoal/55 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-end gap-12 px-5 pb-16 pt-10 lg:grid-cols-[1fr_0.7fr] lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-xs font-black uppercase tracking-widest text-rainbow ring-1 ring-white/18 backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Where Creativity Meets Strategy
          </p>
          <h1 className="text-5xl font-black leading-[1.02] tracking-tight text-white md:text-7xl">
            Strategic design for brands that need to{" "}
            <span className="text-rainbow">stand out</span> and{" "}
            <span className="text-aqua">sell clearly</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
            Sam Creative Graphics helps startups, SMEs, corporates, NGOs, and East African businesses build visual identities, campaigns, and digital experiences that feel premium and perform in the real market.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#portfolio">View Our Work</ButtonLink>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/45 bg-white/10 px-6 py-3 text-sm font-extrabold text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-charcoal"
            >
              Talk to Us
            </a>
            <a
              href="https://wa.me/c/254743475247"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white px-6 py-3 text-sm font-extrabold text-skybrand transition duration-300 hover:-translate-y-0.5 hover:bg-rainbow hover:text-charcoal"
            >
              WhatsApp Catalog
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 self-end sm:grid-cols-4 lg:grid-cols-2">
          {stats.map(([value, label]) => (
            <div key={label} className="border border-white/16 bg-white/10 p-5 shadow-sm backdrop-blur">
              <p className="text-3xl font-black text-white">{value}</p>
              <p className="mt-1 text-sm font-bold text-white/62">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
