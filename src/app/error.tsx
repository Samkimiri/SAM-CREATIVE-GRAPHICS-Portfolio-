"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="bg-soft pt-32">
      <section className="section-shell flex min-h-[70vh] flex-col justify-center py-16">
        <p className="text-sm font-black uppercase tracking-widest text-coral">Something went wrong</p>
        <h1 className="mt-3 max-w-3xl text-[clamp(2.5rem,6vw,5rem)] font-black leading-none text-charcoal">
          We could not load this page properly.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-charcoal/70">
          Please try again. If the issue continues, contact SAM CREATIVE GRAPHICS BRAND AGENCY directly.
        </p>
        <button type="button" onClick={reset} className="primary-cta mt-8 w-fit">
          Try Again
        </button>
      </section>
    </main>
  );
}
