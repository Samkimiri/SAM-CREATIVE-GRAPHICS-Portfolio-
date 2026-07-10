import Image from "next/image";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { stats } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal pt-28 text-white sm:pt-32">
      <div className="section-shell grid min-h-[calc(100vh-7rem)] items-center gap-10 pb-14 pt-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="max-w-4xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-rainbow">
            Nairobi Brand Design Agency
          </p>
          <h1 className="max-w-5xl text-[clamp(2.45rem,6.4vw,5.8rem)] font-black leading-[0.98] tracking-tight">
            Strategic design that makes your business look credible, communicate clearly, and sell confidently.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/76 sm:text-lg sm:leading-8">
            We create brand identities, campaign graphics, print materials, packaging, and digital experiences for ambitious businesses across Kenya and East Africa.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#request-quote" className="primary-cta">
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#portfolio" className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-charcoal">
              Explore Our Work
            </a>
          </div>
          <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-extrabold text-white/90">
            <BadgeCheck className="h-5 w-5 text-lime" />
            150+ Projects Delivered
          </div>
        </div>

        <div className="relative mx-auto grid w-full max-w-xl grid-cols-5 gap-3 lg:max-w-none">
          <div className="col-span-3 overflow-hidden rounded-lg bg-white/8 shadow-premium ring-1 ring-white/10">
            <Image
              src="/images/portfolio/whatsapp-catalog-preview.jpg"
              alt="Sam Creative Graphics campaign poster preview"
              width={640}
              height={800}
              priority
              className="aspect-[4/5] h-full w-full object-cover"
            />
          </div>
          <div className="col-span-2 grid gap-3">
            <div className="overflow-hidden rounded-lg bg-white/8 ring-1 ring-white/10">
              <Image
                src="/images/hero-print-production.jpg"
                alt="Printed brand materials and production proofs"
                width={420}
                height={300}
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg bg-white/8 ring-1 ring-white/10">
              <Image
                src="/images/hero-brand-launch.jpg"
                alt="Brand launch materials arranged for presentation"
                width={420}
                height={480}
                className="aspect-[4/5] h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-white/10 bg-white/[0.04]">
        <div className="section-shell grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label, Icon }) => (
            <div key={label} className="flex items-center gap-4 py-5">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-rainbow">
                <Icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-2xl font-black">{value}</span>
                <span className="block text-sm font-bold text-white/55">{label}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
