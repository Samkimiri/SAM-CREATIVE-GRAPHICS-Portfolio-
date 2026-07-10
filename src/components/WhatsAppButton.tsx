"use client";

import { track } from "@vercel/analytics";
import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

export default function WhatsAppButton() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      {showTop ? (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/10 bg-white text-charcoal shadow-premium transition hover:-translate-y-1 hover:bg-skybrand hover:text-white"
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </button>
      ) : null}

      <a
        href={site.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Message SAM CREATIVE GRAPHICS BRAND AGENCY on WhatsApp"
        onClick={() => track("whatsapp_click", { location: "floating_action_dock" })}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-lime text-white shadow-premium transition hover:-translate-y-1 hover:bg-charcoal focus-visible:outline-rainbow"
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      </a>
    </div>
  );
}
