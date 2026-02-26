import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | EventSamaroh",
  description:
    "See what our clients say about EventSamaroh’s professional event planning and management services.",
};

export default function TestimonialsPage() {
  return (
    <main className="bg-white">
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pt-20 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Client Testimonials
        </h1>

        <p className="mt-4 text-gray-600">
          Real experiences from clients who trusted EventSamaroh with their
          special moments.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 sm:px-8 py-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {[
          {
            name: "Ananya & Rohit",
            text: "EventSamaroh planned our wedding perfectly. Every detail was flawless.",
          },
          {
            name: "Corporate Team, Infosys",
            text: "Professional execution and smooth coordination. Highly recommended.",
          },
          {
            name: "Mehul Kapoor",
            text: "From planning to execution, everything was stress-free.",
          },
        ].map((t, i) => (
          <div
            key={i}
            className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
          >
            <p className="text-gray-700 italic">“{t.text}”</p>
            <p className="mt-4 font-semibold text-gray-900">— {t.name}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
