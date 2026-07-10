import { NextResponse } from "next/server";
import { services } from "@/data/services";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: services.map((service) => ({
      title: service.title,
      slug: service.slug,
      description: service.description,
      bestFor: service.bestFor,
      approach: service.approach,
      deliverables: service.deliverables,
      outcomes: service.outcomes,
      accent: service.accent,
    })),
  });
}
