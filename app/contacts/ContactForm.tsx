"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      setStatus("Message sent successfully");
      form.reset();
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-6">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          required
          autoComplete="name"
          className="mt-2 w-full border-b border-gray-300 bg-transparent py-3 outline-none transition-colors focus:border-black placeholder:text-gray-400"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          required
          autoComplete="email"
          className="mt-2 w-full border-b border-gray-300 bg-transparent py-3 outline-none transition-colors focus:border-black placeholder:text-gray-400"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Tell us about your event
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Tell us a little about what you're planning..."
          rows={4}
          required
          className="mt-2 w-full resize-none border-b border-gray-300 bg-transparent py-3 outline-none transition-colors focus:border-black placeholder:text-gray-400"
        />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="mt-4  bg-black px-7 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-lg"
      >
        {isSubmitting ? "Sending..." : "Send Inquiry →"}
      </Button>
      {status && <p className="text-sm text-gray-600">{status}</p>}
    </form>
  );
}
