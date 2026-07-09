import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-charcoal py-16 text-white sm:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-widest text-rainbow">Testimonials</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Trusted by founders, teams, and growing organizations.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="glass-card modern-hover p-6">
              <div className="mb-6 flex gap-1 text-rainbow">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="leading-7 text-white/78">&quot;{testimonial.quote}&quot;</p>
              <div className="mt-8">
                <p className="font-black">{testimonial.name}</p>
                <p className="text-sm font-bold text-white/45">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
