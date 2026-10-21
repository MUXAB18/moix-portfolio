export const PROJECT_TYPES = [
  "Website",
  "Web application",
  "API / backend",
  "Something else",
] as const;

export interface ContactInput {
  name: string;
  email: string;
  type: string;
  message: string;
}

export type ContactErrors = Partial<Record<keyof ContactInput, string>>;

/** Shared by the form (instant feedback) and the API route (the real check). */
export function validateContact(v: ContactInput): ContactErrors {
  const e: ContactErrors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()))
    e.email = "Please enter a valid email address.";
  if (!PROJECT_TYPES.includes(v.type as (typeof PROJECT_TYPES)[number]))
    e.type = "Please choose a project type.";
  if (v.message.trim().length < 10)
    e.message = "Tell me a little more (at least 10 characters).";
  if (v.message.length > 4000) e.message = "Message is too long.";
  return e;
}
