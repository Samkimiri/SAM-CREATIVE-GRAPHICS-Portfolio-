import Image from "next/image";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { stats } from "@/data/site";

const heroSlides = [
  {
    src: "/images/hero/designer-desktop.png",
    alt: "Well-groomed designer working on brand design at a modern desktop workstation",
    position: "center",
  },
  {
    src: "/images/hero/design-workshop.png",
    alt: "Creative design workshop reviewing posters, brand palettes and packaging ideas",
    position: "center",
  },
  {
    src: "/images/hero/print-packaging.png",
    alt: "Premium print and packaging design materials arranged on a studio table",
    position: "center",
  },
  {
    src: "/images/hero/website-uiux.png",
    alt: "Designer reviewing website and UI UX layouts on a modern desktop monitor",
    position: "center",
  },
  {
    src: "/images/hero/campaign-design.png",
    alt: "Campaign poster and social media design work in a modern creative studio",
    position: "center",
  },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal pt-28 text-white sm:pt-32">
      <div className="absolute inset-0 -z-20">
        {heroSlides.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="hero-slide absolute inset-0 h-full w-full object-cover"
            style={{
              animationDelay: `${index * 5}s`,
              objectPosition: image.position,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(17,19,24,0.94)_0%,rgba(17,19,24,0.82)_42%,rgba(17,19,24,0.48)_72%,rgba(17,19,24,0.35)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-charcoal via-charcoal/75 to-transparent" />

      <div className="section-shell flex min-h-[calc(100vh-7rem)] items-center pb-14 pt-8">
        <div className="max-w-4xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-skybrand/40 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-skybrand shadow-lg shadow-skybrand/15">
            SAM CREATIVE GRAPHICS
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
