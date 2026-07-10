import { ArrowRight, BadgeCheck } from "lucide-react";
import { differentiators, founder } from "@/data/site";

export default function About() {
  const FounderIcon = founder.Icon;

  return (
    <section id="about" className="bg-soft py-16 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-coral">Why Choose Us</p>
            <h2 className="section-title mt-3">Design that is beautiful, practical, and built around business communication.</h2>
          </div>
          <p className="text-lg leading-8 text-charcoal/70">
            Sam Creative Graphics brings together strategy, strong visual craft, and practical production thinking so each project is clear enough to use and polished enough to build confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {differentiators.map(({ title, description, Icon }) => (
            <article key={title} className="rounded-lg border border-border bg-white p-6 shadow-sm">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-coral/10 text-coral">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-black text-charcoal">{title}</h3>
              <p className="mt-3 leading-7 text-charcoal/70">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-8 rounded-lg bg-charcoal p-5 text-white shadow-premium sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
          <div className="flex min-h-80 flex-col justify-between rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(242,78,30,0.22),rgba(91,46,255,0.18)),#171A20] p-6">
            <p className="text-sm font-black uppercase tracking-widest text-rainbow">Founder Profile</p>
            <div>
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-white text-coral">
                <FounderIcon className="h-8 w-8" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/50">Portrait placeholder</p>
              <p className="mt-2 text-sm leading-6 text-white/65">Replace this panel with a professional portrait when one is available.</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-black uppercase tracking-widest text-lime">Work Directly With Samuel</p>
            <h3 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">{founder.name}</h3>
            <p className="mt-5 text-lg leading-8 text-white/75">{founder.description}</p>
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
