import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { site } from "@/data/site";

const caseStudyPoints = [
  {
    label: "Challenge",
    text: "Create a clear visual direction that makes a business look credible across launch, promotion, and customer touchpoints.",
  },
  {
    label: "Solution",
    text: "Shape a structured design system with strong hierarchy, branded colors, campaign layouts, and catalog-ready presentation.",
  },
  {
    label: "Outcome",
    text: "A cleaner first impression, easier customer understanding, and stronger confidence before the client opens a conversation.",
  },
];

export default function FeaturedCaseStudy() {
  return (
    <section className="bg-white py-16 sm:py-24" aria-labelledby="featured-case-study-title">
      <div className="section-shell">
        <div className="grid gap-8 rounded-lg border border-border bg-soft p-5 shadow-premium sm:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:p-10">
          <div className="relative min-h-[360px] overflow-hidden rounded-lg bg-charcoal">
            <Image
              src="/images/portfolio/whatsapp-catalog-preview.jpg"
              alt="Featured WhatsApp catalog project preview"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-widest text-charcoal">
                Featured Case Study
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-black uppercase tracking-widest text-skybrand">Case Study</p>
            <h2 id="featured-case-study-title" className="mt-3 text-3xl font-black leading-tight text-charcoal sm:text-4xl">
              Brand Launch Identity
            </h2>
            <p className="mt-4 font-light leading-8 text-charcoal/70">
              A focused look at how strategic visual communication can turn a project idea into a presentation-ready brand experience.
            </p>

            <div className="mt-7 grid gap-4">
              {caseStudyPoints.map((point) => (
                <div key={point.label} className="rounded-lg border border-border bg-white p-4 transition hover:-translate-y-1 hover:border-skybrand/35 hover:shadow-premium">
                  <p className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-skybrand">
                    <CheckCircle2 className="h-4 w-4 text-lime" />
                    {point.label}
                  </p>
                  <p className="mt-2 text-sm font-light leading-6 text-charcoal/68">{point.text}</p>
                </div>
              ))}
            </div>

            <a href={site.catalogUrl} target="_blank" rel="noreferrer" className="primary-cta mt-8 w-fit">
              View Project
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
