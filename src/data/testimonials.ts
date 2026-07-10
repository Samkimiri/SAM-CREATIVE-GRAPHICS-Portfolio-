export type Testimonial = {
  quote: string;
  name?: string;
  role?: string;
  organisation?: string;
  photo?: string;
  service?: string;
};

// Add verified client name, role, organisation, service and optional photo when the owner has permission to publish them.
export const testimonials: Testimonial[] = [
  {
    quote:
      "SAM CREATIVE GRAPHICS BRAND AGENCY translated our rough idea into a brand that looked credible from day one. The process was strategic and very clear.",
    role: "Startup founder",
    service: "Brand identity",
  },
  {
    quote:
      "The campaign visuals were professional, consistent, and easy for our team to use across every communication channel.",
    role: "Communications lead",
    service: "Campaign design",
  },
  {
    quote:
      "Our posters, packaging, and online graphics now feel connected. Customers notice the difference immediately.",
    role: "Business owner",
    service: "Print and packaging",
  },
];
