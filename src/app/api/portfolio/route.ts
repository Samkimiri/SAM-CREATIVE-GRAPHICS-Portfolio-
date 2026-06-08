import { NextResponse } from "next/server";
import { getProjects } from "@/lib/projects";

export const runtime = "nodejs";

export async function GET() {
  const projects = await getProjects();
  return NextResponse.json({ success: true, data: projects });
}
