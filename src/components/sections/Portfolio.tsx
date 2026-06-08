import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { getProjects } from "@/lib/projects";

const whatsappCatalogUrl = "https://wa.me/c/254743475247";

const gradients = [
  "from-skybrand to-rainbow",
  "from-cobalt to-coral",
  "from-rainbow to-aqua",
  "from-aqua to-cobalt",
  "from-charcoal to-skybrand",
  "from-coral to-rainbow",
];

export default async function Portfolio() {
  const portfolioItems = await getProjects();

  return (
    <section id="portfolio" className="bg-soft py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-widest text-coral">Portfolio</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-charcoal md:text-5xl">
              Live brand work shaped for real clients, clear markets, and strong first impressions.
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-sm font-bold leading-6 text-charcoal/60">
              Browse selected uploads here, or open the full WhatsApp catalog for the latest project photos and design samples.
            </p>
            <a
              href={whatsappCatalogUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-charcoal px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-skybrand"
            >
              View WhatsApp Catalog
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-4 rounded-[2rem] border border-skybrand/15 bg-white p-5 shadow-sm md:grid-cols-[0.8fr_1.2fr] md:p-6">
          <div className="rounded-3xl bg-gradient-to-br from-skybrand via-aqua to-rainbow p-5 text-white">
            <p className="text-xs font-black uppercase tracking-widest text-white/80">Live Catalog Source</p>
            <h3 className="mt-8 text-3xl font-black leading-tight">Fresh work is published first on WhatsApp.</h3>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg font-extrabold leading-8 text-charcoal">
              The website portfolio is now connected to a professional upload backend. Use `/admin/projects` to add the best photos from the WhatsApp catalog into the homepage without editing code.
            </p>
            <p className="mt-3 text-sm font-bold leading-6 text-charcoal/55">
              WhatsApp requires login before exposing catalog media, so direct automatic extraction is blocked here. The upload dashboard is the reliable production path.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <article
              key={item.title}
              className={`group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium ${
                index === 1 || index === 4 ? "lg:translate-y-8" : ""
              }`}
            >
              <div className={`relative h-64 overflow-hidden bg-gradient-to-br ${gradients[index % gradients.length]} p-6`}>
                {item.imageUrl ? (
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                    unoptimized={item.imageUrl.startsWith("data:")}
                  />
                ) : (
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.24)_0_25%,transparent_25%_50%,rgba(255,255,255,0.14)_50%_75%,transparent_75%)] bg-[length:36px_36px] opacity-70" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent opacity-70" />
                <div className="relative flex h-full flex-col justify-between">
                  <span className="w-fit rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-widest text-charcoal">
                    {item.category}
                  </span>
                  <a
                    href={whatsappCatalogUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-fit items-center gap-2 rounded-full bg-charcoal px-4 py-2 text-sm font-extrabold text-white opacity-0 transition group-hover:opacity-100"
                    aria-label={`View ${item.title} in the WhatsApp catalog`}
                  >
                    View Project
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
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
