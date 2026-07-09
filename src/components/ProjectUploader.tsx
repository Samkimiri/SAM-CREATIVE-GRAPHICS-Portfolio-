"use client";

/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";
import {
  CheckCircle2,
  ExternalLink,
  ImagePlus,
  Loader2,
  LockKeyhole,
  RefreshCw,
  Trash2,
  UploadCloud,
} from "lucide-react";

type ProjectForm = {
  password: string;
  title: string;
  category: string;
  customCategory: string;
  description: string;
  imageUrl: string;
  imagePosition: string;
};

type UploadedProject = {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl?: string;
  imagePosition?: string;
  createdAt: string;
};

const initialForm: ProjectForm = {
  password: "",
  title: "",
  category: "Brand Identity",
  customCategory: "",
  description: "",
  imageUrl: "",
  imagePosition: "center",
};

const categories = [
  "Brand Identity",
  "Logo Design",
  "Social Media",
  "Print & Packaging",
  "UI/UX Design",
  "Campaign Design",
  "Other",
];

const imagePositions = [
  { label: "Center", value: "center" },
  { label: "Top", value: "top" },
  { label: "Bottom", value: "bottom" },
  { label: "Left", value: "left" },
  { label: "Right", value: "right" },
  { label: "Top left", value: "top left" },
  { label: "Top right", value: "top right" },
];

const maxUploadBytes = 1_100_000;

function ProjectImage({
  src,
  alt,
  objectPosition = "center",
}: {
  src: string;
  alt: string;
  objectPosition?: string;
}) {
  if (src.startsWith("/")) {
    return <Image src={src} alt={alt} fill className="object-cover" style={{ objectPosition }} />;
  }

  return <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition }} />;
}

export default function ProjectUploader() {
  const [form, setForm] = useState(initialForm);
  const [projects, setProjects] = useState<UploadedProject[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [loadingProjects, setLoadingProjects] = useState(false);

  const resolvedCategory = useMemo(() => {
    if (form.category === "Other") return form.customCategory.trim();
    return form.category;
  }, [form.category, form.customCategory]);

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

    if (file.size > maxUploadBytes) {
      setStatus("error");
      setMessage("Please use an image below 1.1MB for fast loading.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => updateField("imageUrl", String(reader.result || ""));
    reader.readAsDataURL(file);
  };

  const loadProjects = async () => {
    if (!form.password) {
      setStatus("error");
      setMessage("Enter the owner password first.");
      return;
    }

    setLoadingProjects(true);
    setMessage("");

    try {
      const response = await fetch("/api/admin/projects", {
        headers: { "x-admin-password": form.password },
      });
      const data = (await response.json()) as { data?: UploadedProject[]; message?: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(data.message || "Could not load projects.");
        return;
      }

      setProjects(data.data || []);
      setStatus("success");
      setMessage("Uploaded projects loaded.");
    } catch {
      setStatus("error");
      setMessage("Could not load projects. Please try again.");
    } finally {
      setLoadingProjects(false);
    }
  };

  const submitProject = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    if (!resolvedCategory) {
      setStatus("error");
      setMessage("Please enter the custom category name.");
      return;
    }

    try {
      const response = await fetch("/api/admin/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": form.password,
        },
        body: JSON.stringify({
          title: form.title,
          category: resolvedCategory,
          description: form.description,
          imageUrl: form.imageUrl,
          imagePosition: form.imagePosition,
          featured: true,
        }),
      });
      const data = (await response.json()) as { data?: UploadedProject; message?: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(data.message || "Project upload failed.");
        return;
      }

      if (data.data) setProjects((current) => [data.data as UploadedProject, ...current]);
      setStatus("success");
      setMessage(data.message || "Project uploaded successfully.");
      setForm((current) => ({ ...initialForm, password: current.password }));
    } catch {
      setStatus("error");
      setMessage("Project upload failed. Please try again.");
    }
  };

  const deleteUploadedProject = async (project: UploadedProject) => {
    if (!form.password) {
      setStatus("error");
      setMessage("Enter the owner password first.");
      return;
    }

    const confirmed = window.confirm(`Delete "${project.title}" from the homepage portfolio?`);
    if (!confirmed) return;

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch(`/api/admin/projects?id=${encodeURIComponent(project.id)}`, {
        method: "DELETE",
        headers: { "x-admin-password": form.password },
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(data.message || "Project delete failed.");
        return;
      }

      setProjects((current) => current.filter((item) => item.id !== project.id));
      setStatus("success");
      setMessage(data.message || "Project deleted successfully.");
    } catch {
      setStatus("error");
      setMessage("Project delete failed. Please try again.");
    }
  };

  return (
    <div className="grid gap-8">
      <form onSubmit={submitProject} className="glass-card-light grid gap-6 p-5 shadow-premium md:p-8">
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

        {form.category === "Other" ? (
          <label className="grid gap-2">
            <span className="text-sm font-black text-charcoal">Custom Category</span>
            <input
              required
              value={form.customCategory}
              onChange={(event) => updateField("customCategory", event.target.value)}
              className="rounded-2xl border border-charcoal/10 bg-soft px-4 py-4 font-bold outline-none transition focus:border-skybrand"
              placeholder="Example: Motion Graphics"
            />
          </label>
        ) : null}

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
          <div className="grid gap-4">
            <label className="flex min-h-48 cursor-pointer flex-col items-center justify-center rounded-3xl border border-dashed border-skybrand/40 bg-skybrand/5 p-6 text-center transition hover:border-skybrand hover:bg-skybrand/10">
              <ImagePlus className="h-10 w-10 text-skybrand" />
              <span className="mt-4 text-sm font-black text-charcoal">Upload project photo</span>
              <span className="mt-2 text-xs font-bold leading-5 text-charcoal/55">JPG, PNG, or WebP below 1.1MB</span>
              <input className="hidden" type="file" accept="image/*" onChange={(event) => chooseImage(event.target.files?.[0])} />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-black text-charcoal">Or Paste Image URL</span>
              <input
                value={form.imageUrl.startsWith("data:image/") ? "" : form.imageUrl}
                onChange={(event) => updateField("imageUrl", event.target.value)}
                className="rounded-2xl border border-charcoal/10 bg-soft px-4 py-4 font-bold outline-none transition focus:border-skybrand"
                placeholder="https://example.com/design.jpg"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-black text-charcoal">Image Focus</span>
              <select
                value={form.imagePosition}
                onChange={(event) => updateField("imagePosition", event.target.value)}
                className="rounded-2xl border border-charcoal/10 bg-soft px-4 py-4 font-bold outline-none transition focus:border-skybrand"
              >
                {imagePositions.map((position) => (
                  <option key={position.value} value={position.value}>
                    {position.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="relative min-h-72 overflow-hidden rounded-3xl bg-charcoal">
            {form.imageUrl ? (
              <ProjectImage
                src={form.imageUrl}
                alt="Project preview"
                objectPosition={form.imagePosition}
              />
            ) : (
              <div className="flex h-full min-h-72 items-center justify-center p-6 text-center text-sm font-bold text-white/50">
                Project preview appears here after choosing a photo or pasting an image URL.
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-skybrand px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-charcoal disabled:opacity-60"
          >
            {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <UploadCloud className="h-4 w-4" />}
            Upload Project
          </button>
          <button
            type="button"
            onClick={loadProjects}
            disabled={loadingProjects}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/10 bg-white px-6 py-4 text-sm font-black text-charcoal transition hover:-translate-y-0.5 hover:border-skybrand hover:text-skybrand disabled:opacity-60"
          >
            {loadingProjects ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
            Load Uploaded Designs
          </button>
        </div>

        {message ? (
          <p className={`flex items-center gap-2 text-sm font-bold ${status === "success" ? "text-lime" : "text-coral"}`}>
            {status === "success" ? <CheckCircle2 className="h-4 w-4" /> : null}
            {message}
          </p>
        ) : null}
      </form>

      <section className="glass-card-light p-5 md:p-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-skybrand">Uploaded Designs</p>
            <h2 className="mt-2 text-2xl font-black text-charcoal">Manage homepage portfolio items</h2>
          </div>
          <button
            type="button"
            onClick={loadProjects}
            disabled={loadingProjects}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-skybrand disabled:opacity-60"
          >
            {loadingProjects ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
            Refresh
          </button>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {projects.length ? (
            projects.map((project) => (
              <article key={project.id} className="overflow-hidden rounded-3xl border border-charcoal/10 bg-white shadow-sm">
                <div className="relative h-52 bg-charcoal">
                  {project.imageUrl ? (
                    <ProjectImage
                      src={project.imageUrl}
                      alt={project.title}
                      objectPosition={project.imagePosition || "center"}
                    />
                  ) : null}
                </div>
                <div className="p-5">
                  <p className="text-xs font-black uppercase tracking-widest text-skybrand">{project.category}</p>
                  <h3 className="mt-2 text-xl font-black text-charcoal">{project.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm font-bold leading-6 text-charcoal/60">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.imageUrl?.startsWith("https://") ? (
                      <a
                        href={project.imageUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 px-4 py-2 text-xs font-black text-charcoal transition hover:border-skybrand hover:text-skybrand"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Open image
                      </a>
                    ) : null}
                    <button
                      type="button"
                      onClick={() => deleteUploadedProject(project)}
                      className="inline-flex items-center gap-2 rounded-full border border-coral/20 px-4 py-2 text-xs font-black text-coral transition hover:bg-coral hover:text-white"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      Delete
                    </button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="rounded-3xl border border-dashed border-charcoal/15 bg-white p-8 text-center text-sm font-bold leading-6 text-charcoal/55 md:col-span-2">
              Enter your owner password and click “Load Uploaded Designs” to see projects you have added. New uploads appear here immediately.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
