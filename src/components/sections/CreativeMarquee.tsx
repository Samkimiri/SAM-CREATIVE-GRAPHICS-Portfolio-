const marqueeItems = [
  "BRANDING",
  "UI/UX",
  "GRAPHIC DESIGN",
  "PRINT",
  "PACKAGING",
  "WEB DESIGN",
  "SOCIAL MEDIA",
  "CREATIVE STRATEGY",
];

export default function CreativeMarquee() {
  return (
    <section className="overflow-hidden border-y border-border bg-white py-4" aria-label="Creative services marquee">
      <div className="creative-marquee-track">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
          <span key={`${item}-${index}`} className="inline-flex items-center gap-4 text-sm font-black uppercase tracking-[0.28em] text-charcoal/70">
            <span className="h-2 w-2 rounded-full bg-skybrand" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
