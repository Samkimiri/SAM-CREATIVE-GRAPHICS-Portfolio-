"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";

const serviceOptions = [
  "Brand Identity & Logos",
  "Social Media Design",
  "Print & Packaging",
  "UI/UX & Web Design",
  "Campaign Design",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
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

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
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
  };

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-widest text-orange">Contact</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-charcoal md:text-5xl">
            Tell us what you are building. We will help shape how it looks and feels.
          </h2>

          <form onSubmit={submitForm} className="mt-10 grid gap-4 rounded-3xl border border-charcoal/10 bg-soft p-5 shadow-sm md:p-7">
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
                className="rounded-2xl border border-charcoal/10 bg-white px-4 py-4 font-bold outline-none transition focus:border-orange"
              />
              <input
                required
                type="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                placeholder="Email"
                className="rounded-2xl border border-charcoal/10 bg-white px-4 py-4 font-bold outline-none transition focus:border-orange"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <input
                required
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                placeholder="Phone"
                className="rounded-2xl border border-charcoal/10 bg-white px-4 py-4 font-bold outline-none transition focus:border-orange"
              />
              <select
                required
                value={form.service}
                onChange={(event) => updateField("service", event.target.value)}
                className="rounded-2xl border border-charcoal/10 bg-white px-4 py-4 font-bold outline-none transition focus:border-orange"
              >
                <option value="">Service Needed</option>
                {serviceOptions.map((service) => (
                  <option key={service}>{service}</option>
                ))}
              </select>
            </div>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              placeholder="Tell us about your project"
              className="resize-none rounded-2xl border border-charcoal/10 bg-white px-4 py-4 font-bold outline-none transition focus:border-orange"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-charcoal disabled:opacity-60"
            >
              {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              Submit Request
            </button>
            {message ? (
              <p className={`flex items-center gap-2 text-sm font-bold ${status === "success" ? "text-green" : "text-orange"}`}>
                {status === "success" ? <CheckCircle2 className="h-4 w-4" /> : null}
                {message}
              </p>
            ) : null}
          </form>
        </div>

        <aside className="rounded-[2rem] bg-charcoal p-7 text-white shadow-premium">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-amber">
            <Sparkles className="h-4 w-4" />
            Open for projects
          </p>
          <h3 className="mt-8 text-3xl font-black">Branding, design, and digital work from Nairobi to East Africa.</h3>
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
    <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/8 p-4">
      <Icon className="mt-1 h-5 w-5 shrink-0 text-amber" />
      <div>
        <p className="text-xs font-black uppercase tracking-widest text-white/45">{label}</p>
        <p className="mt-1 font-bold text-white">{value}</p>
      </div>
    </div>
  );
}
