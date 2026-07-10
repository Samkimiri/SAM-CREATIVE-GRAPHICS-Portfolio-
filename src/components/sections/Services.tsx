"use client";

import { ArrowRight, CheckCircle2, Lightbulb, PackageCheck, Sparkles, Target } from "lucide-react";
import { useState } from "react";
import { services, type Service } from "@/data/site";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

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
          <div className="grid gap-3" aria-label="Service categories">
            {services.map(({ title, Icon }, index) => {
              const isActive = activeIndex === index;
              const panelId = `service-panel-${index}`;

              return (
                <div key={title} className="grid gap-3">
                  <button
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={panelId}
                    onClick={() => setActiveIndex(index)}
                    className={`group flex items-center justify-between gap-4 rounded-lg border p-4 text-left transition duration-300 hover:-translate-y-0.5 hover:shadow-premium sm:p-5 ${
                      isActive
                        ? "border-skybrand bg-skybrand text-white shadow-glow"
                        : "border-border bg-soft text-charcoal hover:border-skybrand/40 hover:bg-white"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`inline-flex h-11 w-11 items-center justify-center rounded-lg transition ${isActive ? "bg-white/15" : "bg-white text-skybrand group-hover:bg-skybrand group-hover:text-white"}`}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block font-black">{title}</span>
                        <span className={`mt-1 block text-xs font-light leading-5 ${isActive ? "text-white/75" : "text-charcoal/55"}`}>
                          Click to view the project details
                        </span>
                      </span>
                    </span>
                    <ArrowRight className={`h-4 w-4 shrink-0 transition ${isActive ? "rotate-90 lg:rotate-0 lg:translate-x-1" : ""}`} />
                  </button>

                  {isActive ? (
                    <ServiceDetail
                      service={services[index]}
                      id={panelId}
                      className="lg:hidden"
                      compact
                    />
                  ) : null}
                </div>
              );
            })}
          </div>

          <ServiceDetail service={activeService} id="desktop-service-panel" className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}

function ServiceDetail({ service, id, className = "", compact = false }: { service: Service; id: string; className?: string; compact?: boolean }) {
  const ActiveIcon = service.Icon;

  return (
    <article id={id} className={`classic-hover rounded-lg border border-border bg-white p-5 shadow-sm sm:p-8 ${className}`}>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className={`${compact ? "mb-4 h-12 w-12" : "mb-6 h-16 w-16"} inline-flex items-center justify-center rounded-lg text-white shadow-lg`} style={{ backgroundColor: service.accent }}>
            <ActiveIcon className={compact ? "h-6 w-6" : "h-8 w-8"} />
          </div>
          <h3 className={`${compact ? "text-2xl" : "text-3xl"} font-black leading-tight text-charcoal`}>{service.title}</h3>
          <p className="mt-4 max-w-2xl text-base font-light leading-8 text-charcoal/70 sm:text-lg">{service.description}</p>
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
            <p className="mt-2 font-light leading-7 text-charcoal/70">{service.bestFor}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-2">
        <div className="rounded-lg border border-border bg-soft p-5">
          <div className="mb-4 flex items-center gap-3">
            <Lightbulb className="h-5 w-5 text-skybrand" />
            <h4 className="font-black text-charcoal">What we do</h4>
          </div>
          <div className="grid gap-3">
            {service.approach.map((item) => (
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
            {service.outcomes.map((item) => (
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
          {service.deliverables.map((item) => (
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
  );
}
