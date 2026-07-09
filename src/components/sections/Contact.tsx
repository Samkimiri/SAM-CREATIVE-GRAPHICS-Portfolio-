"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, Mail, MapPin, MessageCircle, Phone, Send, Sparkles } from "lucide-react";

const serviceOptions = [
  "Brand Identity & Logos",
  "Social Media Design",
  "Print & Packaging",
  "UI/UX & Web Design",
  "Campaign Design",
  "Other service / custom request",
];

const whatsappChatUrl =
  "https://wa.me/254743475247?text=Hello%20Sam%20Creative%20Graphics%2C%20I%20would%20like%20to%20request%20a%20quote.";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  otherService: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  otherService: "",
  message: "",
  website: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const service =
        form.service === "Other service / custom request" && form.otherService.trim()
          ? `Other service: ${form.otherService.trim()}`
          : form.service;

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, service }),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(data.message || "Please check your details and try again.");
        return;
      }

      setStatus("success");
      setMessage(data.message || "Your request has been received.");
      setForm(initialState);
    } catch {
      setStatus("error");
      setMessage("We could not send your quote request. Please try again or contact us directly.");
    }
  };

  return (
    <section id="contact" className="bg-white py-16 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-widest text-skybrand">Contact</p>
          <h2 className="section-title mt-3">
            Tell us what you are building. We will help shape how it looks and feels.
          </h2>

          <form id="request-quote" onSubmit={submitForm} className="glass-card-light mt-10 grid gap-4 p-5 md:p-7">
            <input
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={(event) => updateField("website", event.target.value)}
              aria-hidden="true"
            />
            <div className="grid gap-4 md:grid-cols-2">
              <input
                required
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="Name"
                className="rounded-2xl border border-charcoal/10 bg-white/95 px-4 py-4 font-bold outline-none transition focus:border-skybrand focus:shadow-glow"
              />
              <input
                required
                type="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                placeholder="Email"
                className="rounded-2xl border border-charcoal/10 bg-white/95 px-4 py-4 font-bold outline-none transition focus:border-skybrand focus:shadow-glow"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <input
                required
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                placeholder="Phone"
                className="rounded-2xl border border-charcoal/10 bg-white/95 px-4 py-4 font-bold outline-none transition focus:border-skybrand focus:shadow-glow"
              />
              <select
                required
                value={form.service}
                onChange={(event) => updateField("service", event.target.value)}
                className="rounded-2xl border border-charcoal/10 bg-white/95 px-4 py-4 font-bold outline-none transition focus:border-skybrand focus:shadow-glow"
              >
                <option value="">Service Needed</option>
                {serviceOptions.map((service) => (
                  <option key={service}>{service}</option>
                ))}
              </select>
            </div>
            {form.service === "Other service / custom request" ? (
              <input
                required
                value={form.otherService}
                onChange={(event) => updateField("otherService", event.target.value)}
                placeholder="Describe the service you need"
                className="rounded-2xl border border-charcoal/10 bg-white/95 px-4 py-4 font-bold outline-none transition focus:border-skybrand focus:shadow-glow"
              />
            ) : null}
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              placeholder="Tell us about your project"
              className="resize-none rounded-2xl border border-charcoal/10 bg-white/95 px-4 py-4 font-bold outline-none transition focus:border-skybrand focus:shadow-glow"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-skybrand px-6 py-4 text-sm font-black text-white shadow-lg shadow-skybrand/20 transition hover:-translate-y-0.5 hover:bg-charcoal disabled:opacity-60"
            >
              {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              Submit Request
            </button>
            {message ? (
              <div className="grid gap-3">
                <p className={`flex items-center gap-2 text-sm font-bold ${status === "success" ? "text-lime" : "text-coral"}`}>
                  {status === "success" ? <CheckCircle2 className="h-4 w-4" /> : null}
                  {message}
                </p>
                <a
                  href={whatsappChatUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-lime/20 bg-lime/10 px-5 py-3 text-sm font-black text-lime transition hover:-translate-y-0.5 hover:bg-lime hover:text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  Continue on WhatsApp
                </a>
              </div>
            ) : null}
          </form>
        </div>

        <aside className="glass-card modern-hover bg-charcoal/95 p-5 text-white shadow-premium sm:p-7">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-rainbow">
            <Sparkles className="h-4 w-4" />
            Open for projects
          </p>
          <h3 className="mt-8 text-2xl font-black sm:text-3xl">Branding, design, and digital work from Nairobi to East Africa.</h3>
          <a
            href={whatsappChatUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-black text-white shadow-lg shadow-lime/20 transition hover:-translate-y-0.5 hover:bg-rainbow hover:text-charcoal"
          >
            <MessageCircle className="h-4 w-4" />
            Message 0743 475 247
          </a>
          <div className="mt-10 grid gap-4">
            <ContactItem Icon={Mail} label="Email" value="samkimiri550307@gmail.com" />
            <ContactItem Icon={Phone} label="Phone" value="0743 475 247 / 0748 201 131" />
            <ContactItem Icon={MapPin} label="Location" value="Nairobi, Kenya" />
            <ContactItem Icon={CheckCircle2} label="Availability" value="Open for branding, design, and digital projects" />
          </div>
        </aside>
      </div>
    </section>
  );
}

function ContactItem({ Icon, label, value }: { Icon: typeof Mail; label: string; value: string }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 transition duration-300 hover:border-rainbow/40 hover:bg-white/10">
      <Icon className="mt-1 h-5 w-5 shrink-0 text-rainbow" />
      <div>
        <p className="text-xs font-black uppercase tracking-widest text-white/50">{label}</p>
        <p className="mt-1 font-bold text-white">{value}</p>
      </div>
    </div>
  );
}
