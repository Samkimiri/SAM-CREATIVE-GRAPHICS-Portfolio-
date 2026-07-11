import { ArrowUpRight } from "lucide-react";
import { getProjects } from "@/lib/projects";
import { site } from "@/data/site";
import PortfolioGrid from "@/components/sections/PortfolioGrid";

const whatsappCatalogUrl = site.catalogUrl;

export default async function Portfolio() {
  const portfolioItems = await getProjects();
  const gridProjects = portfolioItems.map((item) => ({
    id: item.id,
    title: item.title,
    category: item.category,
    description: item.description,
    imageUrl: item.imageUrl,
    imagePosition: item.imagePosition,
  }));

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
              Explore selected brand, campaign, print and digital work. Each portfolio image opens the full WhatsApp catalog directly.
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

        <PortfolioGrid projects={gridProjects} catalogUrl={whatsappCatalogUrl} />
      </div>
    </section>
  );
}
