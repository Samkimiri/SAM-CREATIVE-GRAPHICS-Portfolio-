"use client";

import { FormEvent, useState } from "react";
import type React from "react";
import { track } from "@vercel/analytics";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { contactActions, services, site } from "@/data/site";

const budgetOptions = ["Below KSh 10,000", "KSh 10,000 - 30,000", "KSh 30,000 - 75,000", "KSh 75,000+", "Not sure yet"];
const sourceOptions = ["Google search", "Referral", "WhatsApp", "Social media", "Previous client", "Other"];

type FormState = {
  name: string;
  organisation: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  completionDate: string;
  heardAbout: string;
  message: string;
  consent: boolean;
  website: string;
};

const initialState: FormState = {
  name: "",
  organisation: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  completionDate: "",
  heardAbout: "",
  message: "",
  consent: false,
  website: "",
};

type ApiResponse = {
  message?: string;
  errors?: Partial<Record<keyof FormState, string>>;
};

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const updateField = (field: keyof FormState, value: string | boolean) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json()) as ApiResponse;

      if (!response.ok) {
        setStatus("error");
        setErrors(data.errors || {});
        setMessage(data.message || "Please check your details and try again.");
        return;
      }

      setStatus("success");
      setErrors({});
      setMessage(data.message || "Your request has been received.");
      track("form_submission_success", { form: "start_your_project" });
      setForm(initialState);
    } catch {
      setStatus("error");
      setMessage("We could not send your request. Please try again or contact us directly.");
    }
  };

  return (
    <section id="contact" className="bg-white py-16 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-widest text-coral">Contact</p>
          <h2 className="section-title mt-3">Start Your Project with a clear brief.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-charcoal/70">
            Share the basics and we will respond with the best next step, scope and quote.
          </p>

          <form id="request-quote" onSubmit={submitForm} className="mt-10 grid gap-5 rounded-lg border border-border bg-soft p-5 md:p-7" noValidate>
            <input
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={(event) => updateField("website", event.target.value)}
              aria-hidden="true"
              name="website"
            />

            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full name" error={errors.name}>
                <input id="name" name="name" required value={form.name} onChange={(event) => updateField("name", event.target.value)} className="form-field" />
              </Field>
              <Field label="Business or organisation" error={errors.organisation}>
                <input id="organisation" name="organisation" value={form.organisation} onChange={(event) => updateField("organisation", event.target.value)} className="form-field" />
              </Field>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Email" error={errors.email}>
                <input id="email" name="email" required type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} className="form-field" />
              </Field>
              <Field label="Phone or WhatsApp" error={errors.phone}>
                <input id="phone" name="phone" required value={form.phone} onChange={(event) => updateField("phone", event.target.value)} className="form-field" />
              </Field>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Service needed" error={errors.service}>
                <select id="service" name="service" required value={form.service} onChange={(event) => updateField("service", event.target.value)} className="form-field">
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service.title}>{service.title}</option>
                  ))}
                </select>
              </Field>
              <Field label="Estimated budget" error={errors.budget}>
                <select id="budget" name="budget" required value={form.budget} onChange={(event) => updateField("budget", event.target.value)} className="form-field">
                  <option value="">Select a range</option>
                  {budgetOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Desired completion date" error={errors.completionDate}>
                <input id="completionDate" name="completionDate" type="date" value={form.completionDate} onChange={(event) => updateField("completionDate", event.target.value)} className="form-field" />
              </Field>
              <Field label="How did you hear about us?" error={errors.heardAbout}>
                <select id="heardAbout" name="heardAbout" value={form.heardAbout} onChange={(event) => updateField("heardAbout", event.target.value)} className="form-field">
                  <option value="">Select one</option>
                  {sourceOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="Project description" error={errors.message}>
              <textarea id="message" name="message" required rows={6} value={form.message} onChange={(event) => updateField("message", event.target.value)} className="form-field resize-none" />
            </Field>

            <label className="flex gap-3 rounded-lg border border-border bg-white p-4 text-sm font-bold leading-6 text-charcoal/75">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(event) => updateField("consent", event.target.checked)}
                className="mt-1 h-4 w-4 accent-coral"
                required
              />
              <span>
                I consent to SAM CREATIVE GRAPHICS BRAND AGENCY using these details to respond to my enquiry.
                {errors.consent ? <span className="mt-1 block text-coral">{errors.consent}</span> : null}
              </span>
            </label>

            <button type="submit" disabled={status === "loading"} className="primary-cta">
              {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              Start Your Project
            </button>

            <p aria-live="polite" className={`min-h-6 text-sm font-bold ${status === "success" ? "text-lime" : "text-coral"}`}>
              {message}
            </p>
          </form>
        </div>

        <aside className="rounded-lg bg-charcoal p-6 text-white shadow-premium sm:p-8">
          <p className="text-sm font-black uppercase tracking-widest text-rainbow">Nairobi, Kenya</p>
          <h3 className="mt-5 text-3xl font-black leading-tight">Branding, campaigns, print and digital work for East African organisations.</h3>
          <p className="mt-4 leading-7 text-white/65">
            Prefer a direct conversation? Use WhatsApp, call, or email with your project goal and deadline.
          </p>

          <div className="mt-8 grid gap-3">
            {contactActions.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                onClick={() => {
                  if (label === "WhatsApp") track("whatsapp_click", { location: "contact_panel" });
                  if (label === "Call") track("phone_click", { location: "contact_panel" });
                  if (label === "Email") track("email_click", { location: "contact_panel" });
                }}
                className="flex min-h-14 items-center gap-4 rounded-lg border border-white/10 bg-white/8 p-4 transition hover:border-coral/50 hover:bg-white/12"
              >
                <Icon className="h-5 w-5 shrink-0 text-rainbow" />
                <span>
                  <span className="block text-xs font-black uppercase tracking-widest text-white/45">{label}</span>
                  <span className="block font-bold text-white">{value}</span>
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-white/10 bg-white/8 p-5">
            <p className="flex items-center gap-2 text-sm font-black text-lime">
              <CheckCircle2 className="h-4 w-4" />
              Open for projects
            </p>
            <p className="mt-2 text-sm leading-6 text-white/65">Phone: {site.phoneDisplay} / {site.altPhoneDisplay}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  const id = String((children as React.ReactElement<{ id?: string }>).props.id || "");

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-black text-charcoal">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm font-bold text-coral">
          {error}
        </p>
      ) : null}
    </div>
  );
}
