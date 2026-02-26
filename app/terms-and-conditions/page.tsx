export const metadata = {
  title: "Terms & Conditions | EventSamaroh",
}

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold mb-10">
        Terms & Conditions
      </h1>

      <div className="space-y-6 text-gray-700 text-sm leading-relaxed">

        <p>
          By proceeding with booking and payment, you agree to the following terms:
        </p>

        <h2 className="font-semibold">1. Booking & Payments</h2>
        <p>
          All bookings are subject to availability and admin approval.
          Advance payments are non-refundable unless otherwise agreed in writing.
        </p>

        <h2 className="font-semibold">2. Client Responsibilities</h2>
        <p>
          Client must provide accurate information regarding event details.
          Any false claims or fraudulent chargebacks will be legally contested
          under applicable Indian laws.
        </p>

        <h2 className="font-semibold">3. Cancellations</h2>
        <p>
          Cancellation terms vary depending on service category.
          Refunds, if applicable, will be processed after deduction of incurred costs.
        </p>

        <h2 className="font-semibold">4. Data Protection</h2>
        <p>
          Client data is stored securely and processed in compliance with
          applicable Indian data protection regulations.
          Data will not be shared with third parties without consent,
          except for service execution purposes.
        </p>

        <h2 className="font-semibold">5. Dispute Jurisdiction</h2>
        <p>
          Any disputes shall be subject to jurisdiction of courts in India.
        </p>

      </div>
    </div>
  )
}
