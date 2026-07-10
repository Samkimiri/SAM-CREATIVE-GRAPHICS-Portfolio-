import { processSteps } from "@/data/site";

export default function Process() {
  return (
    <section id="process" className="bg-white py-16 sm:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-widest text-coral">Process</p>
          <h2 className="section-title mt-3">A simple path from rough idea to production-ready design.</h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item) => (
            <article key={item.step} className="rounded-lg border border-border bg-soft p-6">
              <p className="text-sm font-black uppercase tracking-widest text-coral">{item.step}</p>
              <h3 className="mt-5 text-2xl font-black text-charcoal">{item.title}</h3>
              <p className="mt-3 leading-7 text-charcoal/70">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
