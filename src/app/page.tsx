import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import CTASection from "@/components/sections/CTASection";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import { faqs } from "@/data/faqs";
import { site } from "@/data/site";

export const dynamic = "force-dynamic";

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: site.name,
      url: site.url,
      email: site.email,
      telephone: "+254743475247",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
      areaServed: ["Kenya", "East Africa"],
      description:
        "Nairobi design agency creating brand identities, campaign graphics, packaging, print materials and websites.",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.name,
      url: site.url,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Contact />
    </main>
  );
}
