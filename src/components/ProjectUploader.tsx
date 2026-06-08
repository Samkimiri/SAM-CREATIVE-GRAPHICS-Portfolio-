"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { CheckCircle2, ImagePlus, Loader2, LockKeyhole, UploadCloud } from "lucide-react";

type ProjectForm = {
  password: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
};

const initialForm: ProjectForm = {
  password: "",
  title: "",
  category: "Brand Identity",
  description: "",
  imageUrl: "",
};

const categories = [
  "Brand Identity",
  "Logo Design",
  "Social Media",
  "Print & Packaging",
  "UI/UX Design",
  "Campaign Design",
];

export default function ProjectUploader() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const updateField = (field: keyof ProjectForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const chooseImage = (file?: File) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setStatus("error");
      setMessage("Please choose a valid image file.");
      return;
    }

    if (file.size > 900_000) {
      setStatus("error");
      setMessage("Please use an image below 900KB for fast loading.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => updateField("imageUrl", String(reader.result || ""));
    reader.readAsDataURL(file);
  };

  const submitProject = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const response = await fetch("/api/admin/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-admin-password": form.password,
      },
      body: JSON.stringify({
        title: form.title,
        category: form.category,
        description: form.description,
        imageUrl: form.imageUrl,
        featured: true,
      }),
    });
    const data = (await response.json()) as { message?: string };

    if (!response.ok) {
      setStatus("error");
      setMessage(data.message || "Project upload failed.");
      return;
    }

    setStatus("success");
    setMessage(data.message || "Project uploaded successfully.");
    setForm((current) => ({ ...initialForm, password: current.password }));
  };

  return (
    <form onSubmit={submitProject} className="grid gap-6 rounded-[2rem] border border-charcoal/10 bg-white p-5 shadow-premium md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-black text-charcoal">Owner Password</span>
          <span className="relative">
            <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-skybrand" />
            <input
              required
              type="password"
              value={form.password}
              onChange={(event) => updateField("password", event.target.value)}
              className="w-full rounded-2xl border border-charcoal/10 bg-soft py-4 pl-11 pr-4 font-bold outline-none transition focus:border-skybrand"
              placeholder="Enter admin upload password"
            />
          </span>
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-black text-charcoal">Category</span>
          <select
            value={form.category}
            onChange={(event) => updateField("category", event.target.value)}
            className="rounded-2xl border border-charcoal/10 bg-soft px-4 py-4 font-bold outline-none transition focus:border-skybrand"
          >
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-sm font-black text-charcoal">Project Title</span>
        <input
          required
          value={form.title}
          onChange={(event) => updateField("title", event.target.value)}
          className="rounded-2xl border border-charcoal/10 bg-soft px-4 py-4 font-bold outline-none transition focus:border-skybrand"
          placeholder="Example: Premium Restaurant Logo Design"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-black text-charcoal">Project Description</span>
        <textarea
          required
          rows={5}
          value={form.description}
          onChange={(event) => updateField("description", event.target.value)}
          className="resize-none rounded-2xl border border-charcoal/10 bg-soft px-4 py-4 font-bold outline-none transition focus:border-skybrand"
          placeholder="Briefly explain the client problem, design work, and result."
        />
      </label>

      <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
        <label className="flex min-h-56 cursor-pointer flex-col items-center justify-center rounded-3xl border border-dashed border-skybrand/40 bg-skybrand/5 p-6 text-center transition hover:border-skybrand hover:bg-skybrand/10">
          <ImagePlus className="h-10 w-10 text-skybrand" />
          <span className="mt-4 text-sm font-black text-charcoal">Upload project photo</span>
          <span className="mt-2 text-xs font-bold leading-5 text-charcoal/55">JPG, PNG, or WebP below 900KB</span>
          <input className="hidden" type="file" accept="image/*" onChange={(event) => chooseImage(event.target.files?.[0])} />
        </label>

        <div className="relative min-h-56 overflow-hidden rounded-3xl bg-charcoal">
          {form.imageUrl ? (
            <Image src={form.imageUrl} alt="Project preview" fill className="object-cover" unoptimized />
          ) : (
            <div className="flex h-full min-h-56 items-center justify-center p-6 text-center text-sm font-bold text-white/50">
              Project preview appears here after choosing a photo.
            </div>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-skybrand px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-charcoal disabled:opacity-60"
      >
        {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <UploadCloud className="h-4 w-4" />}
        Upload Project
      </button>

      {message ? (
        <p className={`flex items-center gap-2 text-sm font-bold ${status === "success" ? "text-lime" : "text-coral"}`}>
          {status === "success" ? <CheckCircle2 className="h-4 w-4" /> : null}
          {message}
        </p>
      ) : null}
    </form>
  );
}
