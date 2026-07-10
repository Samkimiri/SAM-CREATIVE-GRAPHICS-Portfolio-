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
];

export type Service = {
  title: string;
  slug: string;
  description: string;
  deliverables: string[];
  accent: string;
  Icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Brand Identity & Strategy",
    slug: "brand-identity-strategy",
    description: "Logo design, visual identity systems, brand guidelines, stationery and launch-ready assets.",
    deliverables: ["Logo systems", "Brand guidelines", "Stationery", "Launch assets"],
    accent: "#F24E1E",
    Icon: Brush,
  },
  {
    title: "Campaign & Social Media Design",
    slug: "campaign-social-media-design",
    description: "Posters, event creatives, campaign graphics and consistent digital content systems.",
    deliverables: ["Posters", "Campaign kits", "Social templates", "Event creatives"],
    accent: "#0B5BD3",
    Icon: Megaphone,
  },
  {
    title: "Print, Editorial & Packaging",
    slug: "print-editorial-packaging",
    description: "Brochures, company profiles, eulogies, product labels, packaging and print-ready artwork.",
    deliverables: ["Profiles", "Brochures", "Labels", "Print-ready files"],
    accent: "#FFB624",
    Icon: PackageCheck,
  },
  {
    title: "Website & UI/UX Design",
    slug: "website-ui-ux-design",
    description: "Landing pages, business websites, interface design and user-centred digital experiences.",
    deliverables: ["Landing pages", "Business websites", "UI layouts", "Conversion flows"],
    accent: "#00B37E",
    Icon: MonitorSmartphone,
  },
  {
    title: "Creative Support & Retainers",
    slug: "creative-support-retainers",
    description: "Ongoing design support, monthly graphics and brand consistency for growing organisations.",
    deliverables: ["Monthly graphics", "Brand support", "Content systems", "Design updates"],
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
