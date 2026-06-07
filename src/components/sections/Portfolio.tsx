import { ArrowUpRight } from "lucide-react";
import { portfolioItems } from "@/data/portfolio";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-soft py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-widest text-purple">Portfolio</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-charcoal md:text-5xl">
              Work samples shaped for real brands, real markets, and strong first impressions.
            </h2>
          </div>
          <p className="max-w-sm text-sm font-bold leading-6 text-charcoal/60">
            Each concept shows how strategy, color, hierarchy, and consistency come together across brand touchpoints.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <article
              key={item.title}
              className={`group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium ${
                index === 1 || index === 4 ? "lg:translate-y-8" : ""
              }`}
            >
              <div className={`relative h-64 bg-gradient-to-br ${item.colors} p-6`}>
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.24)_0_25%,transparent_25%_50%,rgba(255,255,255,0.14)_50%_75%,transparent_75%)] bg-[length:36px_36px] opacity-70" />
                <div className="relative flex h-full flex-col justify-between">
                  <span className="w-fit rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-widest text-charcoal">
                    {item.category}
                  </span>
                  <button className="flex w-fit items-center gap-2 rounded-full bg-charcoal px-4 py-2 text-sm font-extrabold text-white opacity-0 transition group-hover:opacity-100">
                    View Project
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-charcoal">{item.title}</h3>
                <p className="mt-3 leading-7 text-charcoal/65">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
