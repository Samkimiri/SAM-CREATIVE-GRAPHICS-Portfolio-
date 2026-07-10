"use client";

import { track } from "@vercel/analytics";
import { MessageCircle } from "lucide-react";
import { site } from "@/data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Message SAM CREATIVE GRAPHICS BRAND AGENCY on WhatsApp"
      onClick={() => track("whatsapp_click", { location: "floating_button" })}
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-lime text-white shadow-premium transition hover:-translate-y-1 hover:bg-charcoal focus-visible:outline-rainbow sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
