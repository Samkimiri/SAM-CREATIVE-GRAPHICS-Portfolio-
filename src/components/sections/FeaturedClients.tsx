const clientGroups = [
  "Startups",
  "SMEs",
  "Events",
  "Schools",
  "Churches",
  "NGOs",
  "Personal Brands",
  "Real Estate",
  "Hospitality",
  "Retail",
];

export default function FeaturedClients() {
  return (
    <section className="bg-soft py-12" aria-labelledby="featured-clients-title">
      <div className="section-shell">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-skybrand">Featured Clients</p>
            <h2 id="featured-clients-title" className="mt-2 text-2xl font-black text-charcoal sm:text-3xl">
              Built for different businesses, audiences, and communication needs.
            </h2>
          </div>
          <p className="max-w-xl text-sm font-light leading-6 text-charcoal/65">
            A simple client-sector strip that shows the range of teams SAM CREATIVE GRAPHICS BRAND AGENCY supports.
          </p>
        </div>
      </div>

      <div className="featured-client-strip mt-8" aria-hidden="true">
        <div className="featured-client-track">
          {[...clientGroups, ...clientGroups].map((group, index) => (
            <span key={`${group}-${index}`} className="featured-client-logo">
              {group}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
