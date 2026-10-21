"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { SITE } from "@/data/site";
import { PROJECT_TYPES, validateContact, type ContactErrors, type ContactInput } from "@/lib/contact";

type Status = "idle" | "sending" | "sent" | "failed";

const field =
  "w-full rounded-lg border border-line bg-surface px-4 py-3 text-foreground placeholder:text-muted/70 focus:border-accent focus:outline-none aria-[invalid=true]:border-red-400";

function FieldError({ id, msg }: { id: string; msg?: string }) {
  return msg ? (
    <p id={`${id}-error`} className="mt-1.5 text-sm text-red-400">
      {msg}
    </p>
  ) : null;
}

export function ContactForm() {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const input: ContactInput = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      type: String(data.get("type") ?? ""),
      message: String(data.get("message") ?? ""),
    };
    const found = validateContact(input);
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...input, company: data.get("company") }),
      });
      setStatus(res.ok ? "sent" : "failed");
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-2xl border border-accent/40 bg-accent/5 p-8">
        <CheckCircle2 className="mb-4 text-accent" size={32} aria-hidden />
        <h3 className="display text-4xl">Message sent</h3>
        <p className="mt-2 text-muted">Thanks for reaching out. I&apos;ll reply by email soon.</p>
      </div>
    );
  }

  const err = (k: keyof ContactInput) => errors[k];
  const props = (k: keyof ContactInput) => ({
    id: k,
    name: k,
    "aria-invalid": err(k) ? true : undefined,
    "aria-describedby": err(k) ? `${k}-error` : undefined,
  });
  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-muted">Name</label>
          <input {...props("name")} autoComplete="name" className={field} />
          <FieldError id="name" msg={errors.name} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-muted">Email</label>
          <input {...props("email")} type="email" autoComplete="email" className={field} />
          <FieldError id="email" msg={errors.email} />
        </div>
      </div>

      <div>
        <label htmlFor="type" className="mb-2 block text-sm text-muted">Project type</label>
        <select {...props("type")} defaultValue="" className={field}>
          <option value="" disabled>Select one…</option>
          {PROJECT_TYPES.map((t) => <option key={t}>{t}</option>)}
        </select>
        <FieldError id="type" msg={errors.type} />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-muted">Message</label>
        <textarea {...props("message")} rows={5} className={field} />
        <FieldError id="message" msg={errors.message} />
      </div>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <input name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      <button type="submit" disabled={status === "sending"} className="btn btn-primary disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      <p role="alert" className="text-sm text-red-400">
        {status === "failed" && (
          <>
            Couldn&apos;t send that. Please email me directly at{" "}
            <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a>.
          </>
        )}
      </p>
    </form>
  );
}
