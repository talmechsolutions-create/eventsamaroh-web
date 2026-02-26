import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Event Planner in Wakad Pune | Weddings & Corporate Events",
  description:
    "Looking for an event planner in Wakad Pune? EventSamaroh offers wedding planning, corporate events, private parties, and decor services in Wakad.",
};

export default function WakadPage() {
  return (
    <main className="bg-white">

      <section className="py-28 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-semibold">
            Event Planner in Wakad, Pune
          </h1>

          <p className="mt-6 text-gray-600 leading-relaxed">
            EventSamaroh provides premium wedding planning, corporate events, private parties, and event decor services in Wakad, Pune.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold">
            Weddings & Corporate Events in Wakad
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Wakad is a bustling residential and IT hub in Pune. We organize luxury weddings, structured corporate gatherings, and private celebrations in Wakad with meticulous venue coordination and vendor management.
          </p>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Our services include
            <Link href="/services/wedding-planning" className="text-[#b08d57] hover:underline ml-1">
              wedding planning
            </Link>,
            <Link href="/services/corporate-events" className="text-[#b08d57] hover:underline ml-1">
              corporate events
            </Link>,
            <Link href="/services/birthday-parties" className="text-[#b08d57] hover:underline ml-1">
              birthday parties
            </Link>,
            and
            <Link href="/services/decor-design" className="text-[#b08d57] hover:underline ml-1">
              event decor services
            </Link>.
          </p>

        </div>
      </section>

    </main>
  );
}
