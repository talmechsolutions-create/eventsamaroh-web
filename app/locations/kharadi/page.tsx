import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Event Planner in Kharadi Pune | Weddings & Corporate Events",
  description:
    "Looking for an event planner in Kharadi Pune? EventSamaroh offers wedding planning, corporate events, private parties, and decor services in Kharadi.",
};

export default function KharadiPage() {
  return (
    <main className="bg-white">

      <section className="py-28 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-semibold">
            Event Planner in Kharadi, Pune
          </h1>

          <p className="mt-6 text-gray-600 leading-relaxed">
            EventSamaroh offers professional wedding planning, corporate event management, private parties, and event decor services in Kharadi, Pune.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-2xl font-semibold">
            Weddings & Corporate Events in Kharadi
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Kharadi is an emerging residential and IT area in Pune, ideal for premium weddings, corporate gatherings, and private celebrations. We manage every detail including venue coordination, vendor management, and on-site supervision.
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
