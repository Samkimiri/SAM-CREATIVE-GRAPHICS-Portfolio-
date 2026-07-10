import Image from "next/image";
import Link from "next/link";
import { contactActions, navigation, services, site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal px-5 py-14 text-white lg:px-8">
      <div className="section-shell grid gap-10 px-0 sm:px-0 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1fr] lg:px-0">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/images/logo.jpg" alt="Sam Creative Graphics" width={56} height={56} className="rounded-lg bg-white object-contain p-1" />
            <div>
              <p className="font-black uppercase tracking-wide">{site.name}</p>
              <p className="text-sm font-bold text-rainbow">{site.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm leading-7 text-white/60">
            Nairobi creative agency for brand identities, campaign graphics, print materials, packaging, websites and digital experiences.
          </p>
          <p className="mt-4 text-sm font-bold text-white/45">{site.location}</p>
        </div>

        <FooterColumn title="Main Navigation" items={navigation} />
        <FooterColumn title="Services" items={services.map((service) => ({ label: service.title, href: `#${service.slug}` }))} />

        <div>
          <p className="font-black">Contact</p>
          <div className="mt-5 grid gap-3">
            {contactActions.map(({ label, value, href, Icon }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex min-h-11 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-bold text-white/80 transition hover:border-coral/50 hover:bg-white/10 hover:text-white"
              >
                <Icon className="h-4 w-4 text-rainbow" />
                <span>{label}: {value}</span>
              </Link>
            ))}
          </div>
          <Link href="#request-quote" className="primary-cta mt-6">
            Start Your Project
          </Link>
        </div>
      </div>

      <div className="section-shell mt-12 flex flex-col gap-3 border-t border-white/10 px-0 pt-6 text-sm font-bold text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-0 lg:px-0">
        <p>(c) {year} {site.name}. All Rights Reserved.</p>
        <div className="flex gap-4">
          <Link href="#contact" className="hover:text-white">Privacy Policy</Link>
          <Link href="#services" className="hover:text-white">Service Information</Link>
        </div>
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
          <Link key={item.href} href={item.href} className="text-sm font-bold text-white/60 transition hover:translate-x-1 hover:text-white">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
