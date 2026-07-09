import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "filled" | "outline" | "dark";
};

export default function ButtonLink({ href, children, variant = "filled" }: ButtonLinkProps) {
  const styles = {
    filled: "bg-skybrand text-white shadow-lg shadow-skybrand/25 hover:bg-charcoal hover:shadow-premium",
    outline: "border border-charcoal/15 bg-white/80 text-charcoal backdrop-blur hover:border-skybrand hover:text-skybrand hover:shadow-glow",
    dark: "bg-charcoal text-white hover:bg-cobalt hover:shadow-premium",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-extrabold transition duration-300 hover:-translate-y-0.5 ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
