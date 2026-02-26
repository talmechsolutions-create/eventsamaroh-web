"use client";

export default function TestimonialsPreview() {
  const testimonials = [
    {
      name: "Ananya & Rohan",
      text: "EventSamaroh transformed our wedding into a dream celebration. Every detail was thoughtfully curated and flawlessly executed.",
    },
    {
      name: "Corporate Client",
      text: "Professional, organized, and creative. Our annual conference was handled with exceptional precision and style.",
    },
    {
      name: "Mehta Family",
      text: "From decor to coordination, the team ensured a seamless experience. Truly a premium event management service in Pune.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">

      <p className="uppercase tracking-[0.3em] text-xs text-[#b08d57] font-medium mb-4">
        Client Experiences
      </p>

      <h2 className="text-3xl sm:text-4xl font-medium mb-16">
        Words From Our Clients
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition duration-300 relative"
          >

            <div className="absolute top-6 left-8 w-10 h-1 bg-[#b08d57] rounded-full"></div>

            <p className="mt-6 text-gray-600 leading-relaxed text-sm">
              “{testimonial.text}”
            </p>

            <p className="mt-6 font-medium text-gray-800">
              {testimonial.name}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}
