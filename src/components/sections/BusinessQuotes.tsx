"use client";

import { Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { businessQuotes } from "@/data/site";

const rotationMs = 60_000;

function getWeeklyQuoteIndex() {
  const now = new Date();
  const firstDay = new Date(now.getFullYear(), 0, 1);
  const dayOffset = Math.floor((now.getTime() - firstDay.getTime()) / 86_400_000);
  const weekNumber = Math.floor((dayOffset + firstDay.getDay()) / 7);
  return weekNumber % businessQuotes.length;
}

export default function BusinessQuotes() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(getWeeklyQuoteIndex());

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % businessQuotes.length);
    }, rotationMs);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section aria-label="Business strategy quotes" className="bg-white py-8">
      <div className="section-shell">
        <div className="classic-hover grid gap-6 rounded-lg border border-border bg-soft p-5 shadow-sm sm:p-7 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-skybrand text-white">
            <Quote className="h-7 w-7" aria-hidden="true" />
          </div>

          <div aria-live="polite">
            <p className="text-xs font-semibold uppercase tracking-widest text-skybrand">Weekly Business Thought</p>
            <p className="mt-2 text-xl font-light leading-snug text-charcoal sm:text-2xl">
              {businessQuotes[activeIndex]}
            </p>
          </div>

          <div className="flex gap-2 lg:justify-end">
            {businessQuotes.map((quote, index) => (
              <button
                key={quote}
                type="button"
                aria-label={`Show quote ${index + 1}`}
                aria-pressed={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition ${
                  activeIndex === index ? "bg-skybrand" : "bg-charcoal/20 hover:bg-coral"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
