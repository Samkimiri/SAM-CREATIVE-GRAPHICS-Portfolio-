"use client";

import {
  ArrowUpRight,
  BadgePercent,
  Building2,
  CalendarDays,
  Home,
  Megaphone,
  Music2,
  Palette,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

export type PortfolioGridProject = {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl?: string;
  imagePosition?: string;
};

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
    background: "from-skybrand via-rainbow to-aqua",
    accent: "bg-white",
    secondary: "bg-lime",
  },
  {
    Icon: CalendarDays,
    badge: "Event",
    background: "from-charcoal via-cobalt to-aqua",
    accent: "bg-skybrand",
    secondary: "bg-rainbow",
  },
  {
    Icon: Utensils,
    badge: "Launch",
    background: "from-skybrand via-charcoal to-rainbow",
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
    background: "from-charcoal via-skybrand to-cobalt",
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
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
      style={{ objectPosition }}
    />
  );
}

function PromoPoster({ title, category, index }: { title: string; category: string; index: number }) {
  const theme = posterThemes[index % posterThemes.length];
  const Icon = theme.Icon;

  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${theme.background} p-5 text-white`}>
      <div className="flex h-full flex-col justify-between rounded-md border border-white/25 bg-white/10 p-5 backdrop-blur-[1px]">
        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-[0.7rem] font-black uppercase tracking-widest text-charcoal shadow-sm">
            <Icon className="h-4 w-4" />
            {theme.badge}
          </span>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-white/75">{category}</p>
          <p className="mt-2 max-w-[13rem] text-3xl font-black leading-none tracking-tight">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioGrid({ projects, catalogUrl }: { projects: PortfolioGridProject[]; catalogUrl: string }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = useMemo(() => ["All", ...Array.from(new Set(projects.map((item) => item.category)))], [projects]);
  const visibleProjects = activeCategory === "All" ? projects : projects.filter((item) => item.category === activeCategory);

  return (
    <>
      <div className="mt-10 flex gap-3 overflow-x-auto pb-2" aria-label="Portfolio category filters">
        {categories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full border px-5 py-3 text-sm font-black transition ${
                isActive
                  ? "border-skybrand bg-skybrand text-white shadow-glow"
                  : "border-border bg-white text-charcoal/70 hover:-translate-y-0.5 hover:border-skybrand/45 hover:text-skybrand"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((item, index) => {
          const originalIndex = projects.findIndex((project) => project.id === item.id);
          const themeIndex = originalIndex >= 0 ? originalIndex : index;
          const CardIcon = cardIcons[themeIndex % cardIcons.length];

          return (
            <article key={item.title} className="classic-hover group glass-card-light">
              <a
                href={catalogUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${item.title} in the WhatsApp catalog`}
                className={`relative block h-64 overflow-hidden bg-gradient-to-br ${posterThemes[themeIndex % posterThemes.length].background} p-6`}
              >
                {item.imageUrl ? (
                  <PortfolioImage src={item.imageUrl} alt={item.title} objectPosition={item.imagePosition || "center"} />
                ) : (
                  <PromoPoster title={item.title} category={item.category} index={themeIndex} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent opacity-70" />
                <div className="relative flex h-full flex-col justify-between">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-widest text-charcoal">
                    <CardIcon className="h-4 w-4" />
                    {item.category}
                  </span>
                  <span className="flex w-fit items-center gap-2 rounded-full bg-charcoal px-4 py-2 text-sm font-extrabold text-white opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                    Open Catalog
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
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
    </>
  );
}
