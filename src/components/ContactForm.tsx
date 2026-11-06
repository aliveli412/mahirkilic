"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [sentHint, setSentHint] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const organisation = String(data.get("organisation") || "");
    const eventDate = String(data.get("eventDate") || "");
    const amount = String(data.get("amount") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Donation request — ${organisation || name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Organisation: ${organisation}`,
        `Event date: ${eventDate}`,
        `Requested amount: ${amount}`,
        "",
        message,
      ].join("\n"),
    );

    setSentHint(true);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 bg-paper p-6 md:p-8">
      <p className="text-sm font-semibold tracking-wide text-ink">Donation Request Form</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm text-muted">
          Name
          <input
            required
            name="name"
            className="mt-1 w-full border border-line bg-white px-3 py-2 text-ink outline-none focus:border-ink"
          />
        </label>
        <label className="block text-sm text-muted">
          Email
          <input
            required
            type="email"
            name="email"
            className="mt-1 w-full border border-line bg-white px-3 py-2 text-ink outline-none focus:border-ink"
          />
        </label>
      </div>
      <label className="block text-sm text-muted">
        Organisation
        <input
          name="organisation"
          className="mt-1 w-full border border-line bg-white px-3 py-2 text-ink outline-none focus:border-ink"
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm text-muted">
          Event date
          <input
            type="date"
            name="eventDate"
            className="mt-1 w-full border border-line bg-white px-3 py-2 text-ink outline-none focus:border-ink"
          />
        </label>
        <label className="block text-sm text-muted">
          Requested amount
          <input
            name="amount"
            placeholder="£"
            className="mt-1 w-full border border-line bg-white px-3 py-2 text-ink outline-none focus:border-ink"
          />
        </label>
      </div>
      <label className="block text-sm text-muted">
        Message
        <textarea
          required
          name="message"
          rows={5}
          className="mt-1 w-full resize-y border border-line bg-white px-3 py-2 text-ink outline-none focus:border-ink"
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center bg-ink px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black"
      >
        Send request
      </button>
      {sentHint ? (
        <p className="text-sm text-soft">
          Your email client should open with the request ready to send to {site.email}.
        </p>
      ) : null}
    </form>
  );
}
