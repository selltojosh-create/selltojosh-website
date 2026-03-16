import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  description: "We received your information and will be in touch shortly.",
};

export default function ThankYouPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-xl text-center">
        <div className="rounded-xl border border-gray-200 bg-white p-10 shadow-sm">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg
              className="h-8 w-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-2xl font-bold text-gray-900">Thank You!</h1>
          <p className="mt-3 text-gray-600">
            We received your information and will reach out shortly to discuss
            your property.
          </p>

          <div className="mt-6 rounded-lg bg-gray-50 p-4 text-left text-sm text-gray-700">
            <p className="font-semibold mb-2">What happens next:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>We review your property details</li>
              <li>A team member calls you within 24 hours</li>
              <li>We present a fair, no-obligation cash offer</li>
            </ol>
          </div>

          <Link
            href="/"
            className="mt-8 inline-block rounded-lg bg-blue-700 px-6 py-2.5 font-semibold text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
