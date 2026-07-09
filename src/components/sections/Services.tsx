import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-widest text-skybrand">Services</p>
          <h2 className="section-title mt-3">
            Creative services built for visibility, trust, and business growth.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map(({ title, slug, description, accent, Icon }) => (
            <article
              key={title}
              id={slug}
              className="group glass-card-light modern-hover p-6 sm:p-7"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg transition duration-300 group-hover:scale-105" style={{ backgroundColor: accent }}>
                <Icon className="h-7 w-7 transition duration-300 group-hover:rotate-3" />
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
