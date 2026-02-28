import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"

export default async function BookingDetailPage(
  props: { params: Promise<{ id: string }> }
) {
  const { id } = await props.params
  const bookingId = Number(id)

  if (!bookingId || isNaN(bookingId)) return notFound()

  const booking = await prisma.booking.findUnique({
    where: { id: bookingId },
    include: {
      lead: true,
    },
  })

  if (!booking) return notFound()

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">
        Booking #{booking.id}
      </h1>

      <div className="bg-white rounded-xl shadow p-6 space-y-4">

        <p>
          <strong>Confirmed On:</strong>{" "}
          {new Date(booking.confirmedAt).toLocaleDateString()}
        </p>

        <div className="border-t pt-4">

          <p>
            <strong>Customer:</strong> {booking.lead.name}
          </p>

          <p>
            <strong>Phone:</strong> {booking.lead.phone}
          </p>

          <p>
            <strong>Event:</strong> {booking.lead.eventCategory}
          </p>

        </div>

      </div>
    </div>
  )
}