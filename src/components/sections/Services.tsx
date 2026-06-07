import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-widest text-orange">Services</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-charcoal md:text-5xl">
            Creative services built for visibility, trust, and business growth.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map(({ title, description, accent, Icon }) => (
            <article
              key={title}
              className="group rounded-3xl border border-charcoal/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl text-white" style={{ backgroundColor: accent }}>
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-black text-charcoal">{title}</h3>
              <p className="mt-4 max-w-xl leading-7 text-charcoal/65">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
