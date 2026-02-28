import { prisma } from "@/lib/prisma"
import Link from "next/link"

export default async function BookingsPage() {
  const bookings = await prisma.booking.findMany({
    include: { lead: true },
    orderBy: { confirmedAt: "desc" }, // ✅ FIXED
  })

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Bookings</h1>

      <div className="bg-white rounded-xl shadow divide-y">

        {bookings.length === 0 && (
          <div className="p-6 text-gray-500">
            No bookings yet.
          </div>
        )}

        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="p-4 flex justify-between items-center"
          >
            <div>
              <div className="font-semibold">
                {booking.lead?.name}
              </div>
              <div className="text-sm text-gray-500">
                Confirmed on{" "}
                {new Date(booking.confirmedAt).toLocaleDateString()}
              </div>
            </div>

            <Link
              href={`/dashboard/admin/bookings/${booking.id}`}
              className="text-blue-600 text-sm"
            >
              View
            </Link>
          </div>
        ))}

      </div>
    </div>
  )
}