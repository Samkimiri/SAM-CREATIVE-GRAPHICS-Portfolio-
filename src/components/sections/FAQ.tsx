"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-soft py-16 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-widest text-coral">FAQ</p>
          <h2 className="section-title mt-3">Clear answers before we start building your brand.</h2>
          <p className="mt-5 text-lg leading-8 text-charcoal/70">
            Practical details about scope, timelines and how we turn a brief into useful brand assets.
          </p>
        </div>

        <div className="grid gap-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <article key={item.question} className="rounded-lg border border-border bg-white shadow-sm">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-lg font-black text-charcoal sm:px-6"
                  >
                    {item.question}
                    <ChevronDown className={`h-5 w-5 shrink-0 text-coral transition ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-5 pb-5 leading-7 text-charcoal/70 sm:px-6"
                >
                  {item.answer}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
