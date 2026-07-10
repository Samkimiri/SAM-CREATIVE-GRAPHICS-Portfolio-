"use client";

import { useState } from "react";
import { ArrowUpRight, Eye, X } from "lucide-react";

type WhatsAppSample = {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  imagePosition?: string;
};

export default function WhatsAppSamplePreview({
  samples,
  catalogUrl,
}: {
  samples: WhatsAppSample[];
  catalogUrl: string;
}) {
  const [activeSample, setActiveSample] = useState<WhatsAppSample | null>(null);

  return (
    <div id="whatsapp-samples" className="mt-10 scroll-mt-28">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-widest text-coral">WhatsApp Samples</p>
          <h3 className="mt-2 max-w-2xl text-2xl font-black leading-tight text-charcoal sm:text-3xl">
            Preview the catalog style before opening WhatsApp.
          </h3>
        </div>
        <a
          href={catalogUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-charcoal px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-skybrand"
        >
          Open WhatsApp Catalog
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {samples.map((sample) => (
          <button
            key={sample.title}
            type="button"
            onClick={() => setActiveSample(sample)}
            className="group overflow-hidden rounded-lg bg-white text-left shadow-sm ring-1 ring-charcoal/10 transition hover:-translate-y-1 hover:shadow-premium"
            aria-label={`Preview ${sample.title}`}
          >
            <span className="relative block aspect-[4/5] overflow-hidden bg-charcoal">
              <img
                src={sample.imageUrl}
                alt={sample.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                style={{ objectPosition: sample.imagePosition || "center" }}
              />
              <span className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/10 to-transparent" />
              <span className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 text-white">
                <span>
                  <span className="block text-xs font-black uppercase tracking-widest text-white/75">{sample.category}</span>
                  <span className="mt-1 block text-lg font-black leading-tight">{sample.title}</span>
                </span>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-charcoal">
                  <Eye className="h-4 w-4" />
                </span>
              </span>
            </span>
          </button>
        ))}
      </div>

      {activeSample ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeSample.title} preview`}
        >
          <div className="relative grid max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-lg bg-white shadow-premium md:grid-cols-[1.1fr_0.9fr]">
            <button
              type="button"
              onClick={() => setActiveSample(null)}
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-charcoal shadow-sm transition hover:bg-charcoal hover:text-white"
              aria-label="Close preview"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative min-h-[55vh] bg-charcoal">
              <img
                src={activeSample.imageUrl}
                alt={activeSample.title}
                className="absolute inset-0 h-full w-full object-contain"
                style={{ objectPosition: activeSample.imagePosition || "center" }}
              />
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-8">
              <p className="text-xs font-black uppercase tracking-widest text-coral">{activeSample.category}</p>
              <h4 className="mt-3 text-3xl font-black leading-tight text-charcoal">{activeSample.title}</h4>
              <p className="mt-4 leading-7 text-charcoal/70">{activeSample.description}</p>
              <a
                href={catalogUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-skybrand px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-charcoal"
              >
                Continue to WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
