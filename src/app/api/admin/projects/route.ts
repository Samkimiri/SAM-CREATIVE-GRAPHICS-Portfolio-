import { NextResponse } from "next/server";
import { createProject, isAuthorizedProjectAdmin } from "@/lib/projects";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!isAuthorizedProjectAdmin(request)) {
    return NextResponse.json(
      { success: false, message: "Owner password is required to upload projects." },
      { status: 401 }
    );
  }

  try {
    const body = (await request.json()) as Record<string, unknown>;
    const { valid, errors, project } = await createProject(body);

    if (!valid) {
      return NextResponse.json(
        { success: false, message: "Please check the project details.", errors },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Project uploaded successfully.",
      data: project,
    });
  } catch (error) {
    console.error("Project upload failed", error);
    return NextResponse.json(
      { success: false, message: "Project upload failed. Please try again." },
      { status: 500 }
    );
  }
}
