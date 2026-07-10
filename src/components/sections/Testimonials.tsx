import { Quote } from "lucide-react";
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
            <article key={testimonial.quote} className="classic-hover rounded-lg border border-white/10 bg-white/[0.06] p-6 shadow-sm">
              <Quote className="mb-6 h-8 w-8 text-rainbow" />
              <p className="leading-7 text-white/80">&quot;{testimonial.quote}&quot;</p>
              <div className="mt-8">
                <p className="font-black">{testimonial.name || "Verified client"}</p>
                <p className="text-sm font-bold text-white/50">
                  {[testimonial.role, testimonial.organisation, testimonial.service].filter(Boolean).join(" · ")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
