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
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-charcoal/10 bg-white/88 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/brand-mark.svg" alt="Sam Creative Graphics" width={42} height={42} className="rounded-2xl" />
          <div className="leading-tight">
            <p className="text-sm font-black uppercase tracking-wide text-charcoal">Sam Creative</p>
            <p className="text-xs font-bold text-orange">Graphics</p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-bold text-charcoal/70 transition hover:text-orange">
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="hidden rounded-full bg-charcoal px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-orange lg:inline-flex"
        >
          Get a Quote
        </Link>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="rounded-full border border-charcoal/10 p-3 text-charcoal lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-charcoal/10 bg-white px-5 py-4 lg:hidden">
          <div className="grid gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-bold text-charcoal transition hover:bg-soft hover:text-orange"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-2xl bg-orange px-4 py-3 text-center text-sm font-extrabold text-white"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
