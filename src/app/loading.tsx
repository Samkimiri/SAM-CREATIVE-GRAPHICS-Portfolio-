export default function Loading() {
  return (
    <main className="bg-soft pt-32">
      <section className="section-shell flex min-h-[70vh] items-center py-16">
        <div className="w-full max-w-3xl">
          <div className="h-4 w-40 animate-pulse rounded-full bg-coral/20" />
          <div className="mt-6 h-16 w-full animate-pulse rounded-lg bg-charcoal/10" />
          <div className="mt-4 h-16 w-3/4 animate-pulse rounded-lg bg-charcoal/10" />
          <div className="mt-8 h-12 w-44 animate-pulse rounded-full bg-coral/20" />
        </div>
      </section>
    </main>
  );
}
