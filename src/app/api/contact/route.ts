import { SITE } from "@/data/site";
import { validateContact } from "@/lib/contact";

/**
 * Delivers form submissions by email through Resend.
 * Set RESEND_API_KEY (and optionally CONTACT_FROM) in .env.local / your host.
 * Without it the route answers 503 and the form shows a mailto fallback,
 * so a message is never silently dropped.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field.
  if (body.company) return Response.json({ ok: true });

  const input = {
    name: String(body.name ?? ""),
    email: String(body.email ?? ""),
    type: String(body.type ?? ""),
    message: String(body.message ?? ""),
  };
  if (Object.keys(validateContact(input)).length)
    return Response.json({ error: "Please check the form." }, { status: 422 });

  const key = process.env.RESEND_API_KEY;
  if (!key)
    return Response.json({ error: "Email delivery is not configured." }, { status: 503 });

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>",
      to: [SITE.email],
      reply_to: input.email,
      subject: `New ${input.type} enquiry from ${input.name}`,
      text: `${input.message}\n\n— ${input.name} <${input.email}>`,
    }),
  });

  if (!res.ok) return Response.json({ error: "Could not send." }, { status: 502 });
  return Response.json({ ok: true });
}
