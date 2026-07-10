"use client";

import { ArrowRight, CheckCircle2, Lightbulb, PackageCheck, Sparkles, Target } from "lucide-react";
import { useState } from "react";
import { services } from "@/data/services";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];
  const ActiveIcon = activeService.Icon;

  return (
    <section id="services" className="bg-white py-16 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-coral">Services</p>
            <h2 className="section-title mt-3">
              Choose the design support your business needs now.
            </h2>
          </div>
          <p className="max-w-3xl text-lg font-light leading-8 text-charcoal/70">
            Not sure what to ask for? Select a service to see who it is for, what we do, what you receive, and how it helps your business.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-3" role="tablist" aria-label="Service categories">
            {services.map(({ title, Icon }, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="active-service-panel"
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center justify-between gap-4 rounded-lg border p-4 text-left transition ${
                    isActive
                      ? "border-skybrand bg-skybrand text-white shadow-glow"
                      : "border-border bg-soft text-charcoal hover:border-skybrand/40 hover:bg-white"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className={`inline-flex h-11 w-11 items-center justify-center rounded-lg ${isActive ? "bg-white/15" : "bg-white text-skybrand"}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-black">{title}</span>
                      <span className={`mt-1 block text-xs font-light leading-5 ${isActive ? "text-white/75" : "text-charcoal/55"}`}>
                        Click to understand this service
                      </span>
                    </span>
                  </span>
                  <ArrowRight className={`h-4 w-4 transition ${isActive ? "translate-x-1" : ""}`} />
                </button>
              );
            })}
          </div>

          <article id="active-service-panel" role="tabpanel" className="classic-hover rounded-lg border border-border bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg text-white shadow-lg" style={{ backgroundColor: activeService.accent }}>
                  <ActiveIcon className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-black leading-tight text-charcoal">{activeService.title}</h3>
                <p className="mt-4 max-w-2xl text-lg font-light leading-8 text-charcoal/70">{activeService.description}</p>
              </div>
              <a href="#request-quote" className="secondary-cta shrink-0">
                Request Service
              </a>
            </div>

            <div className="mt-8 rounded-lg border border-skybrand/15 bg-skybrand/5 p-5">
              <div className="flex gap-4">
                <Target className="mt-1 h-5 w-5 shrink-0 text-skybrand" />
                <div>
                  <p className="text-sm font-black uppercase tracking-widest text-skybrand">Best for</p>
                  <p className="mt-2 font-light leading-7 text-charcoal/70">{activeService.bestFor}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <div className="rounded-lg border border-border bg-soft p-5">
                <div className="mb-4 flex items-center gap-3">
                  <Lightbulb className="h-5 w-5 text-skybrand" />
                  <h4 className="font-black text-charcoal">What we do</h4>
                </div>
                <div className="grid gap-3">
                  {activeService.approach.map((item) => (
                    <p key={item} className="flex gap-3 text-sm font-light leading-6 text-charcoal/70">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-border bg-soft p-5">
                <div className="mb-4 flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-skybrand" />
                  <h4 className="font-black text-charcoal">How it helps</h4>
                </div>
                <div className="grid gap-3">
                  {activeService.outcomes.map((item) => (
                    <p key={item} className="flex gap-3 text-sm font-light leading-6 text-charcoal/70">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="mb-4 flex items-center gap-3">
                <PackageCheck className="h-5 w-5 text-skybrand" />
                <h4 className="font-black text-charcoal">What you may receive</h4>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {activeService.deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-lg border border-border bg-soft p-4">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-lime" />
                    <span className="text-sm font-bold text-charcoal/75">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-skybrand/15 bg-skybrand/5 p-5">
              <p className="text-sm font-black uppercase tracking-widest text-skybrand">Best next step</p>
              <p className="mt-2 font-light leading-7 text-charcoal/70">
                Send your goal, deadline, audience, and any reference styles. We will recommend the right scope before the work begins.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
