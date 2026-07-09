import { NextResponse } from "next/server";
import { createProject, deleteProject, getStoredProjects, isAuthorizedProjectAdmin } from "@/lib/projects";

export const runtime = "nodejs";

export async function GET(request: Request) {
  if (!isAuthorizedProjectAdmin(request)) {
    return NextResponse.json(
      { success: false, message: "Owner password is required to view projects." },
      { status: 401 }
    );
  }

  try {
    const projects = await getStoredProjects();
    return NextResponse.json({
      success: true,
      data: projects,
    });
  } catch (error) {
    console.error("Project list failed", error);
    return NextResponse.json(
      { success: false, message: "Could not load uploaded projects." },
      { status: 500 }
    );
  }
}

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

export async function DELETE(request: Request) {
  if (!isAuthorizedProjectAdmin(request)) {
    return NextResponse.json(
      { success: false, message: "Owner password is required to delete projects." },
      { status: 401 }
    );
  }

  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id") || "";
    const deleted = await deleteProject(id);

    if (!deleted) {
      return NextResponse.json(
        { success: false, message: "Project was not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Project deleted successfully.",
    });
  } catch (error) {
    console.error("Project delete failed", error);
    return NextResponse.json(
      { success: false, message: "Project delete failed. Please try again." },
      { status: 500 }
    );
  }
}
