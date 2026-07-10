import {
  BadgeCheck,
  Brush,
  Clock3,
  FileCheck2,
  Layers3,
  Mail,
  MapPin,
  Megaphone,
  MessageCircle,
  MonitorSmartphone,
  PackageCheck,
  PenTool,
  Phone,
  SearchCheck,
  Sparkles,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "SAM CREATIVE GRAPHICS BRAND AGENCY",
  tagline: "Where Creativity Meets Strategy",
  location: "Nairobi, Kenya",
  email: "samkimiri550307@gmail.com",
  phoneDisplay: "0743 475 247",
  phoneHref: "tel:+254743475247",
  altPhoneDisplay: "0748 201 131",
  whatsappUrl:
    "https://wa.me/254743475247?text=Hello%20SAM%20CREATIVE%20GRAPHICS%20BRAND%20AGENCY%2C%20I%20would%20like%20to%20discuss%20a%20design%20project.",
  catalogUrl: "https://wa.me/c/254743475247",
  url: "https://sam-creative-graphics.vercel.app",
};

export const navigation = [
  { label: "Work", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "150+", label: "Projects", Icon: FileCheck2 },
  { value: "50+", label: "Clients", Icon: Users },
  { value: "2+", label: "Years", Icon: Clock3 },
  { value: "Nairobi", label: "Kenya", Icon: MapPin },
];

export const businessQuotes = [
  "A credible brand does not just look good. It makes people understand, trust, and choose you faster.",
  "Design becomes powerful when it connects business goals, audience psychology, and clear visual communication.",
  "Consistency is not repetition. It is the discipline that makes every customer touchpoint feel intentional.",
  "The strongest brands are built before the artwork begins: in the message, the offer, and the market position.",
  "Good creative work should be attractive enough to stop people and strategic enough to move them.",
  "A business becomes easier to sell when its visuals, words, and customer experience are all telling the same story.",
  "Premium design is not noise. It is clarity, confidence, and restraint working together.",
  "A strong brand helps customers feel they are making the right decision before they speak to you.",
  "Every design touchpoint should answer one question clearly: why should the customer trust this business?",
  "The best creative direction makes the business easier to remember, easier to recommend, and easier to choose.",
  "A brand grows stronger when strategy guides the visuals and discipline keeps the experience consistent.",
  "Good communication turns attention into understanding. Great branding turns understanding into action.",
];

export type Service = {
  title: string;
  slug: string;
  description: string;
  bestFor: string;
  approach: string[];
  deliverables: string[];
  outcomes: string[];
  accent: string;
  Icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Brand Identity & Strategy",
    slug: "brand-identity-strategy",
    description: "For businesses that need a professional identity people can recognise, trust, and remember.",
    bestFor: "New businesses, rebrands, personal brands, organisations, and teams that need a consistent visual identity.",
    approach: [
      "Clarify your brand direction, audience, message, and visual personality.",
      "Design a logo system and identity elements that work across digital and print.",
      "Prepare practical brand assets your team can use consistently.",
    ],
    deliverables: ["Primary and secondary logo", "Colour and typography direction", "Brand guidelines", "Business card and stationery", "Launch-ready brand assets"],
    outcomes: ["A more credible first impression", "Consistent visuals across every touchpoint", "A brand system that is easier to use and remember"],
    accent: "#2F9CEB",
    Icon: Brush,
  },
  {
    title: "Campaign & Social Media Design",
    slug: "campaign-social-media-design",
    description: "For launches, offers, events, announcements, and social media communication that needs attention and clarity.",
    bestFor: "Events, product launches, promotions, churches, schools, SMEs, NGOs, and businesses posting regularly online.",
    approach: [
      "Define the campaign message, offer, audience, and visual style.",
      "Create clear, eye-catching designs sized for the channels you need.",
      "Keep the campaign consistent so every post, poster, or flyer feels connected.",
    ],
    deliverables: ["Campaign posters", "Social media posts", "Event creatives", "Offer and sale graphics", "Reusable content templates"],
    outcomes: ["Clearer campaign communication", "More consistent online presence", "Designs that are easier to share and promote"],
    accent: "#0B5BD3",
    Icon: Megaphone,
  },
  {
    title: "Print, Editorial & Packaging",
    slug: "print-editorial-packaging",
    description: "For physical and downloadable materials that must look polished, organised, and ready for production.",
    bestFor: "Company profiles, brochures, eulogies, flyers, menus, labels, packaging, and presentation documents.",
    approach: [
      "Organise your information into a clean layout that is easy to read.",
      "Design with print sizes, margins, image quality, and production requirements in mind.",
      "Prepare final files clearly so printing or sharing is smoother.",
    ],
    deliverables: ["Company profiles", "Brochures and flyers", "Product labels", "Packaging layouts", "Print-ready PDF files"],
    outcomes: ["Professional documents and print materials", "Better information flow", "Fewer production issues at print stage"],
    accent: "#6B8AFD",
    Icon: PackageCheck,
  },
  {
    title: "Website & UI/UX Design",
    slug: "website-ui-ux-design",
    description: "For businesses that need a clean online presence, a landing page, or an interface that guides visitors clearly.",
    bestFor: "Service businesses, portfolios, landing pages, online campaigns, dashboards, and digital product concepts.",
    approach: [
      "Plan the page structure around user needs, business goals, and conversion actions.",
      "Design clean interfaces that are easy to scan on desktop and mobile.",
      "Build or prepare layouts with practical usability, accessibility, and performance in mind.",
    ],
    deliverables: ["Landing pages", "Business websites", "UI screen layouts", "Contact and conversion flows", "Responsive page designs"],
    outcomes: ["A clearer digital presence", "Better user flow and calls to action", "A website experience that feels more trustworthy"],
    accent: "#00B37E",
    Icon: MonitorSmartphone,
  },
  {
    title: "Creative Support & Retainers",
    slug: "creative-support-retainers",
    description: "For teams that need reliable design support every month without starting from zero each time.",
    bestFor: "Growing businesses, organisations, and busy teams that need regular branded graphics and updates.",
    approach: [
      "Understand your recurring design needs and monthly communication rhythm.",
      "Create design systems and templates that keep output consistent.",
      "Support ongoing campaigns, updates, and everyday brand communication.",
    ],
    deliverables: ["Monthly design support", "Social media graphics", "Template systems", "Campaign updates", "Brand consistency checks"],
    outcomes: ["Faster turnaround for recurring graphics", "More consistent brand communication", "Less pressure on your internal team"],
    accent: "#34373F",
    Icon: Layers3,
  },
];

export const differentiators = [
  {
    title: "Strategic Thinking",
    description: "Every design begins with the audience, offer, message and business objective.",
    Icon: Target,
  },
  {
    title: "Professional Execution",
    description: "Clean, consistent and production-ready work across digital and print channels.",
    Icon: BadgeCheck,
  },
  {
    title: "Practical Market Understanding",
    description: "Solutions designed for real businesses, real audiences and real communication environments.",
    Icon: SearchCheck,
  },
  {
    title: "Creative and Technical Precision",
    description: "A combination of brand strategy, design expertise, AI-assisted workflows and engineering discipline.",
    Icon: Sparkles,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description: "Understand the client, audience, market, goals, deadline and project requirements.",
  },
  {
    step: "02",
    title: "Define",
    description: "Agree on the scope, visual direction, timeline and deliverables.",
  },
  {
    step: "03",
    title: "Design",
    description: "Develop, present and refine the creative solution.",
  },
  {
    step: "04",
    title: "Deliver",
    description: "Provide organised, high-quality and production-ready files.",
  },
];

export const founder = {
  name: "Samuel Ndung'u Kimiri",
  roles: ["Graphic Designer", "Brand Strategist", "Prompt Engineer", "Mining & Mineral Processing Engineer"],
  description:
    "Samuel combines creative direction, strategic branding, AI-assisted workflows and engineering precision to build visual solutions that are attractive, practical and ready for the real market.",
  Icon: PenTool,
};

export const contactActions = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, Icon: Mail },
  { label: "Call", value: site.phoneDisplay, href: site.phoneHref, Icon: Phone },
  { label: "WhatsApp", value: site.phoneDisplay, href: site.whatsappUrl, Icon: MessageCircle },
  { label: "Location", value: site.location, href: "#contact", Icon: MapPin },
];
