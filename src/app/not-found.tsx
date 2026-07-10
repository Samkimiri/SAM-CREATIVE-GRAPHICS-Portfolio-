import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-soft pt-32">
      <section className="section-shell flex min-h-[70vh] flex-col justify-center py-16">
        <p className="text-sm font-black uppercase tracking-widest text-coral">404</p>
        <h1 className="mt-3 max-w-3xl text-[clamp(2.5rem,6vw,5rem)] font-black leading-none text-charcoal">
          This page is not available.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-charcoal/70">
          The page may have moved, or the link may be incomplete. You can return home and continue exploring the work.
        </p>
        <Link href="/" className="primary-cta mt-8 w-fit">
          Back to Home
        </Link>
      </section>
    </main>
  );
}
