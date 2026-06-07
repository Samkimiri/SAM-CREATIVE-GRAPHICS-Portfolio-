import { NextResponse } from "next/server";
import { services } from "@/data/services";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: services.map(({ Icon: _Icon, ...service }) => service),
  });
}
