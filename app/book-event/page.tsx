"use client";

import { useState } from "react";

export default function BookEventPage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      fullName: formData.get("name"),
      phone: formData.get("phone"),
      eventType: formData.get("eventType"),
      eventDate: formData.get("eventDate"),
      location: formData.get("location"),
      guests: Number(formData.get("guests")),
      eventDetails: formData.get("details"),
      source: "Website",
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const text = await res.text();

      console.log("RAW RESPONSE:", text);

      let result;
      try {
        result = JSON.parse(text);
      } catch {
        throw new Error("Invalid JSON response");
      }

      if (!res.ok) {
        throw new Error(result.error || "Request failed");
      }

      setSuccess(true);
      setMessage("Consultation request submitted successfully.");
      form.reset();

    } catch (error: any) {
      console.error("FORM ERROR:", error);
      setMessage(error.message || "Server connection failed");
    }

    setLoading(false);
  }

  return (
    <main className="bg-white">
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-semibold">
            Book Your Event Consultation
          </h1>
          <p className="mt-6 text-gray-600">
            Share your event details and our Pune planning team will contact you within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-xl mx-auto px-4">
          <form onSubmit={handleSubmit} className="space-y-4">

            <select name="eventType" required className="w-full p-3 border rounded-lg">
              <option value="">Select Event</option>
              <option value="Wedding Planning">Wedding Planning</option>
              <option value="Engagement Ceremony">Engagement Ceremony</option>
              <option value="Corporate Event">Corporate Event</option>
              <option value="Private Party">Private Party</option>
              <option value="Birthday Celebration">Birthday Celebration</option>
            </select>

            <input type="date" name="eventDate" required className="w-full p-2 border rounded" />
            <input type="text" name="location" placeholder="Location" required className="w-full p-2 border rounded" />
            <input type="number" name="guests" placeholder="Guests" required className="w-full p-2 border rounded" />
            <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 border rounded" />
            <input type="text" name="phone" placeholder="Phone" required className="w-full p-2 border rounded" />
            <textarea name="details" placeholder="Event Details" className="w-full p-2 border rounded" />

            <button
              type="submit"
              disabled={loading}
              className="bg-[#b08d57] text-white px-8 py-4 rounded-full w-full"
            >
              {loading ? "Submitting..." : "Request Free Consultation"}
            </button>
          </form>

          {message && (
            <p className={`mt-4 text-center font-semibold ${success ? "text-green-600" : "text-red-600"}`}>
              {message}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}