import { NextResponse } from "next/server";
import { portfolioItems } from "@/data/portfolio";

export async function GET() {
  return NextResponse.json({ success: true, data: portfolioItems });
}
