import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What kind of businesses do you work with?",
    answer:
      "We work with startups, SMEs, corporates, NGOs, churches, events, and personal brands that need sharper design, clearer messaging, and consistent visual communication.",
  },
  {
    question: "Can you build a full brand identity from scratch?",
    answer:
      "Yes. A full identity can include logo direction, color palette, typography, brand guidelines, social templates, stationery, campaign visuals, and launch-ready digital assets.",
  },
  {
    question: "Do you only design, or do you also help with strategy?",
    answer:
      "Strategy is part of the process. Before designing, we clarify your audience, offer, positioning, tone, and the channels where the brand needs to perform.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on scope. Smaller design tasks can move quickly, while full brand systems and campaign packages need more discovery, concept development, and review time.",
  },
  {
    question: "How do we start a project?",
    answer:
      "Send a brief through the contact form or WhatsApp with your goals, deadline, and examples of what you like. We will respond with the next steps, scope, and quote.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-soft py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-widest text-skybrand">FAQ</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-charcoal md:text-5xl">
            Clear answers before we start building your brand.
          </h2>
          <p className="mt-5 text-lg leading-8 text-charcoal/68">
            A few practical details about our process, deliverables, and how we turn creative ideas into useful brand assets.
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((item) => (
            <article key={item.question} className="border border-charcoal/10 bg-white p-6 shadow-sm">
              <div className="flex gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-skybrand/10 text-skybrand">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-charcoal">{item.question}</h3>
                  <p className="mt-3 leading-7 text-charcoal/66">{item.answer}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
