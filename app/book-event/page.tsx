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
      eventType: formData.get("eventType"),
      eventDate: formData.get("eventDate"),
      location: formData.get("location"),
      guests: Number(formData.get("guests")),
      name: formData.get("name"),
      phone: formData.get("phone"),
      details: formData.get("details"),
    };

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setSuccess(true);
        setMessage("Booking submitted successfully");
        form.reset();
      } else {
        setMessage(result.error || "Something went wrong");
      }
    } catch (error) {
      setMessage("Server connection failed");
    }

    setLoading(false);
  }

  return (
    <main className="bg-white">

      {/* HERO / INTRO SECTION */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-semibold">
            Book Your Event Consultation
          </h1>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Tell us about your event requirements and our Pune planning team
            will contact you within 24 hours with a customized proposal.
          </p>
        </div>
      </section>

      {/* 3-STEP EXPLANATION */}
      <section className="bg-[#faf8f5] py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="font-medium text-lg">1. Share Details</h3>
            <p className="mt-3 text-gray-600 text-sm">
              Provide basic event information and preferences.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg">2. Consultation Call</h3>
            <p className="mt-3 text-gray-600 text-sm">
              Our expert discusses your vision and budget.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg">3. Customized Proposal</h3>
            <p className="mt-3 text-gray-600 text-sm">
              Receive structured planning and pricing plan.
            </p>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-24">
        <div className="max-w-xl mx-auto px-4">

          <form onSubmit={handleSubmit} className="space-y-4">

            <select
              name="eventType"
              required
              className="w-full p-3 border rounded-lg"
            >
              <option value="">Select Event</option>

              <optgroup label="Wedding Services">
                <option value="Wedding Planning">Wedding Planning</option>
                <option value="Engagement Ceremony">Engagement Ceremony</option>
                <option value="Destination Wedding">Destination Wedding</option>
              </optgroup>

              <optgroup label="Corporate Events">
                <option value="Corporate Event">Corporate Event</option>
                <option value="Product Launch">Product Launch</option>
                <option value="Conference & Seminar">Conference & Seminar</option>
              </optgroup>

              <optgroup label="Social & Private Events">
                <option value="Private Party">Private Party</option>
                <option value="Birthday Celebration">Birthday Celebration</option>
                <option value="Concert Management">Concert Management</option>
              </optgroup>

              <optgroup label="Decor & Coordination">
                <option value="Vendor Coordination">Vendor Coordination</option>
                <option value="Event Decor & Design">Event Decor & Design</option>
              </optgroup>
            </select>

            <input
              type="date"
              name="eventDate"
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="number"
              name="guests"
              placeholder="Guests"
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              required
              className="w-full p-2 border rounded"
            />
            <textarea
              name="details"
              placeholder="Event Details"
              className="w-full p-2 border rounded"
            />

            <button
              type="submit"
              disabled={loading}
              className={`bg-[#b08d57] text-white px-8 py-4 rounded-full hover:opacity-90 transition w-full`}
            >
              {loading ? "Submitting..." : "Request Free Consultation"}
            </button>

            {/* Trust Microcopy */}
            <p className="mt-4 text-xs text-gray-500 text-center">
              Your information is secure and will never be shared.
            </p>

          </form>

          {message && (
            <p
              className={`mt-4 text-center font-semibold ${
                success ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}

        </div>
      </section>
    </main>
  );
}
