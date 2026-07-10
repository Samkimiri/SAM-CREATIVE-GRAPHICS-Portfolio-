import { ArrowRight, MessageCircle } from "lucide-react";
import { site } from "@/data/site";

export default function CTASection() {
  return (
    <section className="bg-charcoal py-16 text-white sm:py-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-widest text-rainbow">Start Your Project</p>
          <h2 className="mt-3 max-w-4xl text-[clamp(2rem,4.5vw,4.25rem)] font-black leading-[1.02]">
            Ready to make your brand look credible and communicate clearly?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
            Share your goal, deadline, audience and design needs. We will respond with the best next step for your project.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a href="#request-quote" className="primary-cta">
            Start Your Project
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-charcoal"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Sam
          </a>
        </div>
      </div>
    </section>
  );
}
