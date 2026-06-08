import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "filled" | "outline" | "dark";
};

export default function ButtonLink({ href, children, variant = "filled" }: ButtonLinkProps) {
  const styles = {
    filled: "bg-skybrand text-white shadow-lg shadow-skybrand/25 hover:bg-charcoal",
    outline: "border border-charcoal/15 bg-white text-charcoal hover:border-skybrand hover:text-skybrand",
    dark: "bg-charcoal text-white hover:bg-cobalt",
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
