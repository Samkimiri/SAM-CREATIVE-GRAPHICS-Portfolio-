export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  website?: string;
};

export function cleanText(value: unknown, maxLength: number) {
  return String(value ?? "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, maxLength);
}

export function validateContactPayload(input: Record<string, unknown>) {
  const payload: ContactPayload = {
    name: cleanText(input.name, 90),
    email: cleanText(input.email, 120).toLowerCase(),
    phone: cleanText(input.phone, 40),
    service: cleanText(input.service, 90),
    message: cleanText(input.message, 1200),
    website: cleanText(input.website, 160),
  };

  const errors: Partial<Record<keyof ContactPayload, string>> = {};

  if (!payload.name) errors.name = "Name is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) errors.email = "Enter a valid email address.";
  if (!payload.phone) errors.phone = "Phone number is required.";
  if (!payload.service) errors.service = "Choose a service.";
  if (payload.message.length < 12) errors.message = "Message should be at least 12 characters.";
  if (payload.website) errors.website = "Spam detected.";

  return {
    payload,
    errors,
    valid: Object.keys(errors).length === 0,
  };
}
