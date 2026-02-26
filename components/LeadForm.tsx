"use client";

import { useState, useRef, useEffect } from "react";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const successRef = useRef<HTMLDivElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (loading) return; // prevent double submit

    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      fullName: String(formData.get("fullName") || "").trim(),
      phone: String(formData.get("phone") || "").replace(/\s+/g, ""),
      email: String(formData.get("email") || "").toLowerCase().trim(),
      eventType: String(formData.get("eventType") || ""),
      eventDetails: String(formData.get("eventDetails") || "").trim(),
    };

    if (!data.fullName || !data.phone) {
      setError("Name and phone number are required.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/leads", {   // ✅ FIXED
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const text = await response.text();

      let result: any;
      try {
        result = JSON.parse(text);
      } catch {
        console.error("Non-JSON response:", text);
        throw new Error("Unexpected server response.");
      }

      if (!response.ok) {
        throw new Error(result?.error || "Submission failed.");
      }

      form.reset();
      setSubmitted(true);

    } catch (err: any) {
      console.error("Submission error:", err);
      setError(err.message || "Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  useEffect(() => {
    if (submitted && successRef.current) {
      successRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [submitted]);

  if (submitted) {
    return (
      <div
        ref={successRef}
        className="mt-8 text-center bg-white p-10 rounded-3xl shadow-xl border border-black/5"
      >
        <p className="text-brand-accent font-semibold text-2xl">
          😊 Thank you for choosing EventSamaroh.
        </p>

        <p className="text-brand-muted mt-4 text-lg leading-relaxed">
          Our event specialists will contact you within 24 hours.
        </p>

        <p className="mt-4 text-sm text-brand-muted">
          A confirmation email will be sent shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 border border-black/5"
    >
      <div className="mb-6">
        <input
          type="text"
          name="fullName"
          required
          placeholder="Full Name"
          className="w-full rounded-xl border border-black/10 bg-brand-soft px-5 py-4 focus:ring-2 focus:ring-brand-accent outline-none"
        />
      </div>

      <div className="mb-6">
        <input
          type="tel"
          name="phone"
          required
          placeholder="Phone Number"
          className="w-full rounded-xl border border-black/10 bg-brand-soft px-5 py-4 focus:ring-2 focus:ring-brand-accent outline-none"
        />
      </div>

      <div className="mb-6">
        <input
          type="email"
          name="email"
          required
          placeholder="Email Address"
          className="w-full rounded-xl border border-black/10 bg-brand-soft px-5 py-4 focus:ring-2 focus:ring-brand-accent outline-none"
        />
      </div>

      <div className="mb-6">
        <select
          name="eventType"
          required
          className="w-full rounded-xl border border-black/10 bg-brand-soft px-5 py-4 focus:ring-2 focus:ring-brand-accent outline-none"
        >
          <option value="">Select Event Type</option>
          <option>Wedding</option>
          <option>Corporate Event</option>
          <option>Birthday Celebration</option>
          <option>Private Party</option>
          <option>Decor & Design</option>
        </select>
      </div>

      <div className="mb-8">
        <textarea
          name="eventDetails"
          rows={4}
          placeholder="Tell us about your event..."
          className="w-full rounded-xl border border-black/10 bg-brand-soft px-5 py-4 focus:ring-2 focus:ring-brand-accent outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-brand-primary to-brand-accent text-white font-semibold py-4 rounded-xl shadow-md hover:shadow-lg transition disabled:opacity-60"
      >
        {loading ? "Processing..." : "Request Consultation"}
      </button>

      {error && (
        <p className="mt-4 text-red-500 text-sm text-center">{error}</p>
      )}

      <p className="mt-6 text-xs text-center text-brand-muted">
        ✔ 24 Hour Response | ✔ Secure & Confidential | ✔ Trusted Event Experts
      </p>
    </form>
  );
}