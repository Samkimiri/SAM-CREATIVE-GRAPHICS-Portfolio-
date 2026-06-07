import { NextResponse } from "next/server";
import { sendContactNotification } from "@/lib/mailer";
import { saveContactSubmission } from "@/lib/storage";
import { validateContactPayload } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const { payload, errors, valid } = validateContactPayload(body);

    if (!valid) {
      return NextResponse.json(
        { success: false, message: "Please check the highlighted fields.", errors },
        { status: 400 }
      );
    }

    const submission = await saveContactSubmission(payload);
    await sendContactNotification(payload);

    return NextResponse.json({
      success: true,
      message: "Thank you. Your request has been received and the team will respond soon.",
      data: { id: submission.id },
    });
  } catch (error) {
    console.error("Contact submission failed", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
