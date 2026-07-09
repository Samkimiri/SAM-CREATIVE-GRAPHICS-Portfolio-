import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { label: "Brand Identity", href: "#brand-identity" },
  { label: "Social Media", href: "#social-media-design" },
  { label: "Print & Packaging", href: "#print-packaging" },
  { label: "UI/UX Design", href: "#ui-ux-web-design" },
];

const contactLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/254743475247?text=Hello%20Sam%20Creative%20Graphics%2C%20I%20would%20like%20to%20request%20a%20quote.",
    Icon: MessageCircle,
  },
  { label: "Email", href: "mailto:samkimiri550307@gmail.com", Icon: Mail },
  { label: "Call", href: "tel:+254743475247", Icon: Phone },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal px-5 py-14 text-white lg:px-8">
      <div className="section-shell grid gap-10 px-0 sm:px-0 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr] lg:px-0">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/images/logo.jpg" alt="Sam Creative Graphics" width={56} height={56} className="rounded-2xl object-contain" />
            <div>
              <p className="font-black uppercase tracking-wide">Sam Creative Graphics</p>
              <p className="text-sm font-bold text-rainbow">Where Creativity Meets Strategy</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm leading-7 text-white/60">
            Premium brand design, campaign visuals, print artwork, and digital experiences for ambitious East African businesses.
          </p>
        </div>
        <FooterColumn title="Quick Links" items={links} />
        <FooterColumn title="Services" items={services} />
        <div>
          <p className="font-black">Connect</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {contactLinks.map(({ label, href, Icon }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2.5 text-sm font-bold text-white/80 transition duration-300 hover:-translate-y-0.5 hover:border-skybrand/50 hover:bg-white/10 hover:text-skybrand"
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
          <Link
            href="#request-quote"
            className="mt-5 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:border-rainbow/50 hover:bg-rainbow hover:text-charcoal"
          >
            Start a project
          </Link>
        </div>
      </div>
      <div className="section-shell mt-12 border-t border-white/10 px-0 pt-6 text-sm font-bold text-white/50 sm:px-0 lg:px-0">
        (c) 2026 Sam Creative Graphics. All Rights Reserved.
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: Array<{ label: string; href: string }> }) {
  return (
    <div>
      <p className="font-black">{title}</p>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="text-sm font-bold text-white/60 transition duration-300 hover:translate-x-1 hover:text-skybrand">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
