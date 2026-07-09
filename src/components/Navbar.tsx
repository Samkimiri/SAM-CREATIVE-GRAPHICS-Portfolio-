"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-white/78 shadow-sm backdrop-blur-xl">
      <nav className="section-shell flex items-center justify-between py-3 lg:py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.jpg" alt="Sam Creative Graphics" width={48} height={48} className="rounded-2xl object-contain shadow-sm sm:h-[54px] sm:w-[54px]" />
          <div className="leading-tight">
            <p className="text-xs font-black uppercase tracking-wide text-charcoal sm:text-sm">Sam Creative</p>
            <p className="text-xs font-bold text-skybrand">Graphics</p>
          </div>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm font-bold text-charcoal/70 transition hover:text-charcoal"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-skybrand transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="hidden rounded-full bg-charcoal px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-skybrand lg:inline-flex"
        >
          Get a Quote
        </Link>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="rounded-full border border-charcoal/10 bg-white/70 p-3 text-charcoal shadow-sm transition hover:border-skybrand/30 hover:text-skybrand lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/40 bg-white/82 px-5 py-4 backdrop-blur-xl lg:hidden">
          <div className="grid gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-bold text-charcoal transition hover:bg-soft hover:text-skybrand"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-2xl bg-skybrand px-4 py-3 text-center text-sm font-extrabold text-white"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
