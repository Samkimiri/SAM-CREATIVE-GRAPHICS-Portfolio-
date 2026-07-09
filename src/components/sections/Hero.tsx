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
    <section className="relative isolate min-h-screen overflow-hidden bg-charcoal pt-28 text-white sm:pt-32">
      <Image
        src="/images/brand-agency-hero.png"
        alt="Brand agency studio with strategy boards, color swatches, typography work, and creative tools"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-[64%_center] sm:object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(16,18,23,0.88)_0%,rgba(16,18,23,0.76)_42%,rgba(16,18,23,0.6)_100%)] sm:bg-[linear-gradient(90deg,rgba(16,18,23,0.94)_0%,rgba(16,18,23,0.82)_38%,rgba(16,18,23,0.48)_70%,rgba(16,18,23,0.28)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-charcoal via-charcoal/55 to-transparent" />

      <div className="section-shell relative grid items-end gap-10 pb-14 pt-10 sm:pb-16 lg:grid-cols-[1fr_0.7fr]">
        <div className="max-w-4xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-xs font-black uppercase tracking-widest text-rainbow ring-1 ring-white/18 backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Where Creativity Meets Strategy
          </p>
          <h1 className="text-4xl font-black leading-[1.04] tracking-tight text-white sm:text-5xl md:text-7xl">
            Strategic design for brands that need to{" "}
            <span className="text-rainbow">stand out</span> and{" "}
            <span className="text-aqua">sell clearly</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/76 sm:text-lg sm:leading-8">
            Sam Creative Graphics helps startups, SMEs, corporates, NGOs, and East African businesses build visual identities, campaigns, and digital experiences that feel premium and perform in the real market.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#portfolio">View Our Work</ButtonLink>
            <a
              href="#request-quote"
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
            <div key={label} className="glass-card modern-hover p-4 sm:p-5">
              <p className="text-2xl font-black text-white sm:text-3xl">{value}</p>
              <p className="mt-1 text-sm font-bold text-white/62">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
