import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const links = ["About", "Services", "Portfolio", "Testimonials", "Contact"];
const services = ["Brand Identity", "Social Media", "Print & Packaging", "UI/UX Design"];

export default function Footer() {
  return (
    <footer className="bg-charcoal px-5 py-14 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/images/brand-mark.svg" alt="Sam Creative Graphics" width={48} height={48} className="rounded-2xl" />
            <div>
              <p className="font-black uppercase tracking-wide">Sam Creative Graphics</p>
              <p className="text-sm font-bold text-amber">Where Creativity Meets Strategy</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm leading-7 text-white/58">
            Premium brand design, campaign visuals, print artwork, and digital experiences for ambitious East African businesses.
          </p>
        </div>
        <FooterColumn title="Quick Links" items={links} />
        <FooterColumn title="Services" items={services} />
        <div>
          <p className="font-black">Social</p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
              <Link key={index} href="#" className="rounded-full border border-white/10 p-3 text-white/70 transition hover:border-orange hover:text-orange">
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-sm font-bold text-white/45">
        (c) 2026 Sam Creative Graphics. All Rights Reserved.
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="font-black">{title}</p>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <Link key={item} href={`#${item.toLowerCase().split(" ")[0]}`} className="text-sm font-bold text-white/58 transition hover:text-orange">
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}
