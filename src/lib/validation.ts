export type ContactPayload = {
  name: string;
  organisation: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  completionDate: string;
  heardAbout: string;
  message: string;
  consent: boolean;
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
    organisation: cleanText(input.organisation, 120),
    email: cleanText(input.email, 120).toLowerCase(),
    phone: cleanText(input.phone, 40),
    service: cleanText(input.service, 90),
    budget: cleanText(input.budget, 80),
    completionDate: cleanText(input.completionDate, 40),
    heardAbout: cleanText(input.heardAbout, 80),
    message: cleanText(input.message, 1200),
    consent: Boolean(input.consent),
    website: cleanText(input.website, 160),
  };

  const errors: Partial<Record<keyof ContactPayload, string>> = {};

  if (!payload.name) errors.name = "Name is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) errors.email = "Enter a valid email address.";
  if (!payload.phone) errors.phone = "Phone number is required.";
  if (!payload.service) errors.service = "Choose a service.";
  if (!payload.budget) errors.budget = "Choose an estimated budget.";
  if (payload.message.length < 20) errors.message = "Project description should be at least 20 characters.";
  if (!payload.consent) errors.consent = "Consent is required before submitting.";
  if (payload.website) errors.website = "Spam detected.";

  return {
    payload,
    errors,
    valid: Object.keys(errors).length === 0,
  };
}
