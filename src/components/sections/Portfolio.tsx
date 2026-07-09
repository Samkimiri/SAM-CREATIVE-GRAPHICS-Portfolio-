/* eslint-disable @next/next/no-img-element */

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

function PortfolioImage({
  src,
  alt,
  objectPosition = "center",
}: {
  src: string;
  alt: string;
  objectPosition?: string;
}) {
  if (src.startsWith("/")) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover transition duration-500 group-hover:scale-105"
        style={{ objectPosition }}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
      style={{ objectPosition }}
    />
  );
}

export default async function Portfolio() {
  const portfolioItems = await getProjects();

  return (
    <section id="portfolio" className="bg-soft py-16 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-widest text-coral">Portfolio</p>
            <h2 className="section-title mt-3">
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

        <div className="glass-card-light modern-hover mt-10 grid gap-4 p-5 md:grid-cols-[0.8fr_1.2fr] md:p-6">
          <div className="relative min-h-72 overflow-hidden rounded-2xl bg-gradient-to-br from-skybrand via-aqua to-rainbow text-white shadow-glow">
            <Image
              src="/images/portfolio/whatsapp-catalog-preview.jpg"
              alt="Sample event poster design from the Sam Creative Graphics WhatsApp catalog"
              fill
              sizes="(min-width: 768px) 38vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-xs font-black uppercase tracking-widest text-white">WhatsApp Catalog Sample</p>
              <h3 className="mt-3 text-3xl font-black leading-tight">Real design preview pulled from the public catalog.</h3>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg font-extrabold leading-8 text-charcoal">
              The homepage now displays a real catalog sample across the portfolio cards so viewers can see actual visual work immediately.
            </p>
            <p className="mt-3 text-sm font-bold leading-6 text-charcoal/60">
              WhatsApp exposes only one public preview image without opening the app. Add more category-specific project photos through `/admin/projects` when you want each card to show a different finished design.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <article
              key={item.title}
              className={`group glass-card-light overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-premium ${
                index === 1 || index === 4 ? "lg:translate-y-8" : ""
              }`}
            >
              <div className={`relative h-64 overflow-hidden bg-gradient-to-br ${gradients[index % gradients.length]} p-6`}>
                {item.imageUrl ? (
                  <PortfolioImage
                    src={item.imageUrl}
                    alt={item.title}
                    objectPosition={item.imagePosition || "center"}
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
                <p className="mt-3 leading-7 text-charcoal/70">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
