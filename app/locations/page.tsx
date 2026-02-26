import Link from "next/link";

export default function LocationsPage() {
  return (
    <main className="bg-white py-28">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h1 className="text-4xl font-semibold mb-12">
          Event Planning Services Across Pune
        </h1>

        <div className="grid md:grid-cols-2 gap-10 text-left">

          <Link href="/locations/baner" className="hover:text-[#b08d57] transition">
            <h2 className="text-xl font-medium">Event Planner in Baner</h2>
          </Link>

          <Link href="/locations/wakad" className="hover:text-[#b08d57] transition">
            <h2 className="text-xl font-medium">Event Planner in Wakad</h2>
          </Link>

          <Link href="/locations/hinjewadi" className="hover:text-[#b08d57] transition">
            <h2 className="text-xl font-medium">Event Planner in Hinjewadi</h2>
          </Link>

          <Link href="/locations/kharadi" className="hover:text-[#b08d57] transition">
            <h2 className="text-xl font-medium">Event Planner in Kharadi</h2>
          </Link>

        </div>

      </div>
    </main>
  );
}
