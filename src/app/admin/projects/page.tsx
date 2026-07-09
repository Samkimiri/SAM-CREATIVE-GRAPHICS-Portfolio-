import type { Metadata } from "next";
import ProjectUploader from "@/components/ProjectUploader";

export const metadata: Metadata = {
  title: "Project Upload Admin",
  description: "Owner dashboard for uploading Sam Creative Graphics portfolio projects.",
};

export default function AdminProjectsPage() {
  return (
    <main className="bg-soft px-5 pb-20 pt-32 lg:px-8">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-black uppercase tracking-widest text-skybrand">Owner Dashboard</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-charcoal md:text-6xl">
          Upload portfolio projects without touching code.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-charcoal/65">
          Add project title, category, description, and image. Approved uploads appear on the homepage portfolio section for visitors.
        </p>
        <div className="mt-8 grid gap-3 rounded-3xl border border-skybrand/15 bg-white/80 p-5 text-sm font-bold leading-6 text-charcoal/65 shadow-sm backdrop-blur md:grid-cols-3">
          <p>
            Use the owner password from `ADMIN_UPLOAD_PASSWORD` to upload and manage designs.
          </p>
          <p>
            For live hosting, set `MONGODB_URI` so uploads are saved permanently.
          </p>
          <p>
            Upload compressed JPG, PNG, or WebP files below 1.1MB for fast loading.
          </p>
        </div>
        <div className="mt-10">
          <ProjectUploader />
        </div>
      </section>
    </main>
  );
}
