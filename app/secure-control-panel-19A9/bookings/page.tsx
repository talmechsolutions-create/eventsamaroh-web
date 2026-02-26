import { prisma } from "@/lib/prisma";

export default async function AdminBookingsPage() {
  const bookings = await prisma.booking.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="max-w-6xl mx-auto mt-16 mb-20 px-4">
      <h1 className="text-3xl font-bold mb-8">
        Admin Dashboard – Bookings
      </h1>

      {bookings.length === 0 ? (
        <p className="text-gray-500">No bookings found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border">ID</th>
                <th className="p-3 border">Event Type</th>
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Location</th>
                <th className="p-3 border">Guests</th>
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Phone</th>
                <th className="p-3 border">Details</th>
                <th className="p-3 border">Created</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="p-3 border">{booking.id}</td>
                  <td className="p-3 border">{booking.eventType}</td>
                  <td className="p-3 border">
                    {new Date(booking.eventDate).toLocaleDateString()}
                  </td>
                  <td className="p-3 border">{booking.location}</td>
                  <td className="p-3 border">{booking.guests}</td>
                  <td className="p-3 border">{booking.name}</td>
                  <td className="p-3 border">{booking.phone}</td>
                  <td className="p-3 border">{booking.details}</td>
                  <td className="p-3 border">
                    {new Date(booking.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
