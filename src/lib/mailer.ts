import nodemailer from "nodemailer";
import type { ContactPayload } from "@/lib/validation";

export async function sendContactNotification(payload: ContactPayload) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return { skipped: true };

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 587),
    secure: Number(SMTP_PORT || 587) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  await transporter.sendMail({
    to: process.env.CONTACT_TO_EMAIL || "samcreativegraphics7@gmail.com",
    from: process.env.CONTACT_FROM_EMAIL || SMTP_USER,
    replyTo: payload.email,
    subject: `New ${payload.service} inquiry from ${payload.name}`,
    text: [
      `Name: ${payload.name}`,
      `Business / Organisation: ${payload.organisation || "Not provided"}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone}`,
      `Service: ${payload.service}`,
      `Special service details: ${payload.customService || "Not provided"}`,
      `Estimated budget: ${payload.budget}`,
      `Desired completion date: ${payload.completionDate || "Not provided"}`,
      `Heard about us: ${payload.heardAbout || "Not provided"}`,
      "",
      payload.message,
    ].join("\n"),
  });

  return { skipped: false };
}
