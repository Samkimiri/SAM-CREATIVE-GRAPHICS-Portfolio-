import { BadgeCheck, Quote } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-white py-16 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div className="glass-card-light modern-hover bg-charcoal/95 p-5 text-white shadow-premium sm:p-7">
          <div className="flex min-h-[360px] flex-col justify-between rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(242,78,30,0.35),transparent_30%),radial-gradient(circle_at_70%_50%,rgba(91,46,255,0.35),transparent_36%),linear-gradient(135deg,#211D26,#141217)] p-5 sm:min-h-[440px] sm:p-7">
            <div>
              <p className="text-sm font-black uppercase tracking-widest text-rainbow">Founder Profile</p>
              <h3 className="mt-4 text-3xl font-black sm:text-4xl">Samuel Ndung&apos;u Kimiri</h3>
            </div>
            <div className="grid gap-3">
              {["Graphic Designer", "Prompt Engineer", "Brand Strategist", "Mining & Mineral Processing Engineer"].map((skill) => (
                <div key={skill} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <BadgeCheck className="h-5 w-5 text-lime" />
                  <span className="font-bold">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-black uppercase tracking-widest text-lime">About Us</p>
          <h2 className="section-title mt-3">
            A Nairobi design agency where creativity is guided by strategy.
          </h2>
          <p className="mt-6 text-base leading-7 text-charcoal/68 sm:text-lg sm:leading-8">
            Sam Creative Graphics was built for ambitious businesses that need more than attractive visuals. The agency combines creative execution, practical market understanding, and realistic brand strategy to help clients communicate clearly and compete confidently.
          </p>
          <div className="glass-card-light mt-8 border-l-4 border-skybrand p-5 sm:p-6">
            <Quote className="mb-4 h-7 w-7 text-skybrand" />
            <p className="text-lg font-extrabold leading-8 text-charcoal sm:text-xl">
              We design with beauty, but we also design with purpose: clarity, consistency, memorability, and measurable business impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
