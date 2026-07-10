import { NextResponse } from "next/server";
import { services } from "@/data/services";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: services.map((service) => ({
      title: service.title,
      slug: service.slug,
      description: service.description,
      deliverables: service.deliverables,
      accent: service.accent,
    })),
  });
}
