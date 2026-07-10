/* eslint-disable @next/next/no-img-element */

import {
  ArrowUpRight,
  BadgePercent,
  Building2,
  CalendarDays,
  Home,
  Megaphone,
  Music2,
  Palette,
  Sparkles,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { getProjects } from "@/lib/projects";

const whatsappCatalogUrl = "https://wa.me/c/254743475247";

const posterThemes: {
  Icon: LucideIcon;
  badge: string;
  background: string;
  accent: string;
  secondary: string;
}[] = [
  {
    Icon: Palette,
    badge: "Identity",
    background: "from-charcoal via-cobalt to-skybrand",
    accent: "bg-rainbow",
    secondary: "bg-aqua",
  },
  {
    Icon: BadgePercent,
    badge: "Promo",
    background: "from-coral via-rainbow to-aqua",
    accent: "bg-white",
    secondary: "bg-lime",
  },
  {
    Icon: CalendarDays,
    badge: "Event",
    background: "from-charcoal via-cobalt to-aqua",
    accent: "bg-coral",
    secondary: "bg-rainbow",
  },
  {
    Icon: Utensils,
    badge: "Launch",
    background: "from-coral via-charcoal to-rainbow",
    accent: "bg-aqua",
    secondary: "bg-white",
  },
  {
    Icon: Home,
    badge: "Property",
    background: "from-white via-soft to-skybrand",
    accent: "bg-cobalt",
    secondary: "bg-rainbow",
  },
  {
    Icon: Music2,
    badge: "Nightlife",
    background: "from-charcoal via-coral to-cobalt",
    accent: "bg-aqua",
    secondary: "bg-rainbow",
  },
];

const cardIcons = [Palette, Megaphone, CalendarDays, Utensils, Building2, Music2];

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

function PromoPoster({ title, index }: { title: string; index: number }) {
  const theme = posterThemes[index % posterThemes.length];
  const Icon = theme.Icon;

  return (
    <div className={`absolute inset-0 overflow-hidden bg-gradient-to-br ${theme.background} p-5 text-white`}>
      <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border-[18px] border-white/25" />
      <div className="absolute -bottom-16 left-8 h-48 w-48 rotate-12 rounded-[2rem] border-[18px] border-white/15" />
      <div className={`absolute right-8 top-20 h-20 w-20 rounded-full ${theme.accent} opacity-95 shadow-glow`} />
      <div className={`absolute bottom-8 right-16 h-24 w-8 -rotate-12 rounded-full ${theme.secondary} opacity-90`} />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-[0.7rem] font-black uppercase tracking-widest text-charcoal shadow-sm">
            <Icon className="h-4 w-4" />
            {theme.badge}
          </span>
          <div className="rounded-2xl bg-white/15 p-3 backdrop-blur">
            <Sparkles className="h-6 w-6" />
          </div>
        </div>

        <div>
          <div className="mb-5 grid grid-cols-3 gap-2">
            <span className="h-2 rounded-full bg-white/90" />
            <span className={`h-2 rounded-full ${theme.accent}`} />
            <span className={`h-2 rounded-full ${theme.secondary}`} />
          </div>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-white/75">Promotional</p>
          <p className="mt-2 max-w-[13rem] text-3xl font-black leading-none tracking-tight">{title}</p>
        </div>
      </div>
    </div>
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
              The portfolio highlights different promotional directions, from brand launches and retail campaigns to events, hospitality, property, and entertainment artwork.
            </p>
            <p className="mt-3 text-sm font-bold leading-6 text-charcoal/60">
              Each sample uses a distinct poster style and icon so visitors can quickly understand the range of creative work before opening the full WhatsApp catalog.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => {
            const CardIcon = cardIcons[index % cardIcons.length];

            return (
              <article
                key={item.title}
                className={`group glass-card-light overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-premium ${
                  index === 1 || index === 4 ? "lg:translate-y-8" : ""
                }`}
              >
                <div className={`relative h-64 overflow-hidden bg-gradient-to-br ${posterThemes[index % posterThemes.length].background} p-6`}>
                  {item.imageUrl ? (
                    <PortfolioImage
                      src={item.imageUrl}
                      alt={item.title}
                      objectPosition={item.imagePosition || "center"}
                    />
                  ) : (
                    <PromoPoster title={item.title} index={index} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent opacity-70" />
                  <div className="relative flex h-full flex-col justify-between">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-widest text-charcoal">
                      <CardIcon className="h-4 w-4" />
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
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-skybrand/10 text-skybrand">
                      <CardIcon className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-black text-charcoal">{item.title}</h3>
                  </div>
                  <p className="mt-3 leading-7 text-charcoal/70">{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
