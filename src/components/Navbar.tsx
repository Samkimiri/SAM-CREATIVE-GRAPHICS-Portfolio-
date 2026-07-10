"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(navigation[0].href);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navigation.map((item) => item.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0.01 }
    );

    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "border-charcoal/10 bg-white/88 shadow-sm backdrop-blur-xl" : "border-white/10 bg-charcoal/92 backdrop-blur-xl"
      }`}
    >
      <nav className={`section-shell flex items-center justify-between transition-all duration-300 ${scrolled ? "py-2" : "py-3 lg:py-4"}`}>
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.jpg"
            alt="SAM CREATIVE GRAPHICS BRAND AGENCY"
            width={52}
            height={52}
            priority
            className="h-12 w-12 rounded-lg bg-white object-contain p-1 shadow-sm ring-1 ring-charcoal/10"
          />
          <div className="leading-tight">
            <p className={`max-w-[13rem] text-[0.68rem] font-black uppercase tracking-wide sm:max-w-none sm:text-xs ${scrolled ? "text-charcoal" : "text-white"}`}>
              SAM CREATIVE GRAPHICS
            </p>
            <p className="text-[0.68rem] font-bold uppercase tracking-widest text-rainbow sm:text-xs">Brand Agency</p>
          </div>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "true" : undefined}
              className={`group relative text-sm font-bold transition ${
                active === link.href ? "text-coral" : scrolled ? "text-charcoal/70 hover:text-charcoal" : "text-white/75 hover:text-white"
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-coral transition-all ${active === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>
          ))}
        </div>

        <Link href="#request-quote" className="primary-cta hidden lg:inline-flex">
          Start Your Project
        </Link>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={() => setOpen((current) => !current)}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition lg:hidden ${
            scrolled ? "border-charcoal/10 bg-white text-charcoal" : "border-white/20 bg-white/10 text-white"
          }`}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div id="mobile-navigation" className="fixed inset-x-0 top-[73px] h-[calc(100vh-73px)] overflow-y-auto bg-charcoal px-5 py-5 text-white lg:hidden">
          <div className="grid gap-2">
            {navigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-4 text-base font-bold transition hover:bg-white/10 hover:text-coral"
              >
                {link.label}
              </Link>
            ))}
            <Link href="#request-quote" onClick={() => setOpen(false)} className="primary-cta mt-3">
              Start Your Project
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
