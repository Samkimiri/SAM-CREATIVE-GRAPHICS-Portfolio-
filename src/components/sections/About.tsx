import { ArrowRight, BadgeCheck } from "lucide-react";
import { differentiators, founder } from "@/data/site";

const brandPrinciples = [
  {
    label: "Identity",
    text: "We build visual systems that help a business look credible, recognisable, and ready for serious opportunities.",
  },
  {
    label: "Communication",
    text: "We turn business ideas into clear campaign graphics, print materials, packaging, and digital experiences people can understand quickly.",
  },
  {
    label: "Market Fit",
    text: "We design with real audiences, budgets, timelines, and selling environments in mind, so the work is practical as well as polished.",
  },
];

export default function About() {
  const FounderIcon = founder.Icon;

  return (
    <section id="about" className="bg-charcoal py-16 text-white sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-skybrand">About the Agency</p>
            <h2 className="mt-3 text-[clamp(2rem,4vw,3.75rem)] font-black leading-[1.02] tracking-tight">
              We help ambitious businesses become easier to trust, understand, remember, and choose.
            </h2>
            <a href="#request-quote" className="primary-cta mt-8 w-fit">
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-5">
            <p className="text-lg font-light leading-8 text-white/75">
              SAM CREATIVE GRAPHICS BRAND AGENCY is a Nairobi-based creative agency for startups, SMEs, organisations, events, personal brands, and growing teams that need professional visual communication.
            </p>
            <p className="text-lg font-light leading-8 text-white/75">
              We do not treat design as decoration. We use strategy, layout, colour, typography, messaging, and production discipline to shape how people see your business before they ever speak to you.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {brandPrinciples.map((principle, index) => (
            <article key={principle.label} className="classic-hover rounded-lg border border-white/10 bg-white/8 p-6 shadow-sm">
              <p className="text-xs font-black uppercase tracking-widest text-skybrand">0{index + 1} / {principle.label}</p>
              <p className="mt-4 font-light leading-7 text-white/75">{principle.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-[0.5fr_1fr] md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-skybrand">Why Choose Us</p>
            <h3 className="mt-3 text-3xl font-black leading-tight">Strategic, practical, and built for real communication.</h3>
          </div>
          <p className="text-base font-light leading-7 text-white/65">
            Every project is shaped around the audience, the offer, the channel, and the outcome the brand needs to achieve.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {differentiators.map(({ title, description, Icon }) => (
            <article key={title} className="classic-hover rounded-lg border border-white/10 bg-white/8 p-6 shadow-sm">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-skybrand text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-black text-white">{title}</h3>
              <p className="mt-3 font-light leading-7 text-white/65">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-8 rounded-lg border border-white/10 bg-white/8 p-5 shadow-premium sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
          <div className="flex min-h-80 flex-col justify-between rounded-lg border border-white/10 bg-charcoal p-6">
            <p className="text-sm font-black uppercase tracking-widest text-rainbow">Founder Profile</p>
            <div>
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-white text-skybrand">
                <FounderIcon className="h-8 w-8" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/50">Portrait placeholder</p>
              <p className="mt-2 text-sm leading-6 text-white/65">Replace this panel with a professional portrait when one is available.</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-black uppercase tracking-widest text-lime">Work Directly With Samuel</p>
            <h3 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">{founder.name}</h3>
            <p className="mt-5 text-lg font-light leading-8 text-white/75">{founder.description}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {founder.roles.map((role) => (
                <span key={role} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-bold text-white/80">
                  <BadgeCheck className="h-4 w-4 text-lime" />
                  {role}
                </span>
              ))}
            </div>
            <a href="#request-quote" className="primary-cta mt-8 w-fit">
              Work Directly With Samuel
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
