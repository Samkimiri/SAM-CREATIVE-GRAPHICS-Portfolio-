import { ArrowUpRight, BadgeCheck, MessageCircle, MousePointer2, Sparkles } from "lucide-react";
import Image from "next/image";
import { site } from "@/data/site";

const phoneSlides = [
  {
    src: "/images/portfolio/whatsapp-catalog-preview.jpg",
    alt: "WhatsApp catalog preview",
    label: "Catalog Preview",
  },
  {
    src: "/images/hero/designer-desktop.png",
    alt: "Designer working on desktop",
    label: "Design Studio",
  },
  {
    src: "/images/hero/campaign-design.png",
    alt: "Campaign design workspace",
    label: "Campaign Work",
  },
  {
    src: "/images/hero/website-uiux.png",
    alt: "Website and UI UX design workspace",
    label: "Digital Layouts",
  },
  {
    src: "/images/hero/print-packaging.png",
    alt: "Print and packaging production workspace",
    label: "Print Ready",
  },
];

const showcaseNotes = [
  "Brand systems",
  "Campaign visuals",
  "Catalog previews",
  "Print-ready files",
  "Website direction",
  "Creative support",
];

export default function VisualExperience() {
  return (
    <section className="overflow-hidden bg-charcoal py-16 text-white sm:py-24" aria-labelledby="visual-experience-title">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-aqua">Visual Preview</p>
            <h2 id="visual-experience-title" className="mt-3 text-[clamp(2rem,4vw,4.25rem)] font-black leading-[1.02] tracking-tight">
              See the brand experience before you start the conversation.
            </h2>
            <p className="mt-5 max-w-2xl text-lg font-light leading-8 text-white/68">
              A quick moving preview of how SAM CREATIVE GRAPHICS BRAND AGENCY presents ideas across catalog views, studio work, campaigns, websites, and production-ready designs.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { Icon: MousePointer2, label: "Tap through ideas" },
                { Icon: BadgeCheck, label: "Review cleanly" },
                { Icon: MessageCircle, label: "Request on WhatsApp" },
              ].map(({ Icon, label }) => (
                <div key={label} className="rounded-lg border border-white/10 bg-white/8 p-4 transition hover:-translate-y-1 hover:border-skybrand/45 hover:bg-white/12">
                  <Icon className="h-5 w-5 text-aqua" />
                  <p className="mt-3 text-sm font-bold leading-6 text-white/78">{label}</p>
                </div>
              ))}
            </div>

            <a href={site.catalogUrl} target="_blank" rel="noreferrer" className="primary-cta mt-8">
              Open WhatsApp Catalog
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative mx-auto flex min-h-[560px] w-full max-w-[620px] items-center justify-center">
            <div className="absolute inset-x-6 top-10 h-48 rounded-full bg-skybrand/25 blur-3xl" />
            <div className="phone-orbit" aria-hidden="true">
              {showcaseNotes.map((item, index) => (
                <span key={item} className={`phone-orbit-chip phone-orbit-chip-${index + 1}`}>
                  <Sparkles className="h-3.5 w-3.5" />
                  {item}
                </span>
              ))}
            </div>

            <div className="phone-preview-shell">
              <div className="phone-preview-frame">
                <div className="phone-preview-speaker" />
                <div className="phone-preview-screen">
                  {phoneSlides.map((slide, index) => (
                    <div key={slide.src} className="phone-preview-slide" style={{ animationDelay: `${index * 3.2}s` }}>
                      <Image src={slide.src} alt={slide.alt} fill sizes="280px" className="object-cover" priority={index === 0} />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/78 via-charcoal/10 to-transparent" />
                      <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-2 text-xs font-black uppercase tracking-widest text-charcoal">
                        {slide.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="visual-marquee mt-12 border-y border-white/10 py-4" aria-hidden="true">
          <div className="visual-marquee-track">
            {[...showcaseNotes, ...showcaseNotes].map((item, index) => (
              <span key={`${item}-${index}`} className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.28em] text-white/70">
                <span className="h-2 w-2 rounded-full bg-aqua" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
