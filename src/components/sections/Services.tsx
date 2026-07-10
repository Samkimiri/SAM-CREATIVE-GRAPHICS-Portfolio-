import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-widest text-coral">Services</p>
          <h2 className="section-title mt-3">
            Creative services built for visibility, trust, and business growth.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ title, slug, description, deliverables, accent, Icon }) => (
            <article
              key={title}
              id={slug}
              className="group rounded-lg border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium sm:p-7"
            >
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-lg text-white shadow-lg transition duration-300 group-hover:scale-105" style={{ backgroundColor: accent }}>
                <Icon className="h-7 w-7 transition duration-300 group-hover:rotate-3" />
              </div>
              <h3 className="text-2xl font-black text-charcoal">{title}</h3>
              <p className="mt-4 max-w-xl leading-7 text-charcoal/70">{description}</p>
              <ul className="mt-6 grid gap-2">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-bold text-charcoal/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#request-quote" className="mt-7 inline-flex text-sm font-black text-coral underline-offset-4 hover:underline">
                Request This Service
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
