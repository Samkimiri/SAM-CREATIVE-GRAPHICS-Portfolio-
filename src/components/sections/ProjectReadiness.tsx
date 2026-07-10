"use client";

import { Check, ClipboardCheck } from "lucide-react";
import { useMemo, useState } from "react";

const readinessItems = [
  "I know the main goal of the project.",
  "I have a deadline or launch period in mind.",
  "I can describe the audience we want to reach.",
  "I have examples, references, or existing brand assets.",
];

export default function ProjectReadiness() {
  const [checked, setChecked] = useState<string[]>([]);
  const score = checked.length;
  const message = useMemo(() => {
    if (score === 0) return "Start with the goal. We can help shape the rest.";
    if (score < 3) return "You have a starting point. Share what you know and we will help structure the brief.";
    if (score < readinessItems.length) return "You are nearly ready. A short conversation can close the gaps.";
    return "You are ready to request a focused quote.";
  }, [score]);

  const toggleItem = (item: string) => {
    setChecked((current) => (current.includes(item) ? current.filter((value) => value !== item) : [...current, item]));
  };

  return (
    <section className="bg-soft py-16 sm:py-20" aria-labelledby="readiness-title">
      <div className="section-shell">
        <div className="grid gap-8 rounded-lg border border-border bg-white p-5 shadow-sm sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-skybrand text-white">
              <ClipboardCheck className="h-7 w-7" />
            </div>
            <p className="text-sm font-black uppercase tracking-widest text-skybrand">Project Readiness</p>
            <h2 id="readiness-title" className="mt-3 text-3xl font-black leading-tight text-charcoal sm:text-4xl">
              Check what you already have before requesting a quote.
            </h2>
            <p className="mt-4 font-light leading-7 text-charcoal/70">{message}</p>
            <a href="#request-quote" className="primary-cta mt-6 w-fit">
              Start Your Project
            </a>
          </div>

          <div className="grid gap-3">
            {readinessItems.map((item) => {
              const isChecked = checked.includes(item);

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => toggleItem(item)}
                  aria-pressed={isChecked}
                  className={`flex min-h-14 items-center gap-4 rounded-lg border p-4 text-left transition ${
                    isChecked ? "border-skybrand bg-skybrand text-white" : "border-border bg-soft text-charcoal hover:border-skybrand/40 hover:bg-white"
                  }`}
                >
                  <span className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${isChecked ? "bg-white text-skybrand" : "bg-white text-charcoal/40"}`}>
                    {isChecked ? <Check className="h-4 w-4" /> : null}
                  </span>
                  <span className="font-bold">{item}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
