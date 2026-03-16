import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Clock,
  Handshake,
  Home,
  MapPin,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Josh Isbell and the Sell to Josh team — local Central Texas cash home buyers serving Killeen, Temple, Belton, and Waco.",
};

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    body: "No hidden fees, no surprises. We present clear numbers so you can make an informed decision.",
  },
  {
    icon: Clock,
    title: "Speed When You Need It",
    body: "Close in as little as 7 days, or on whatever timeline works for your situation.",
  },
  {
    icon: Handshake,
    title: "Fair Cash Offers",
    body: "We evaluate every property honestly and present offers that reflect real market value.",
  },
  {
    icon: Home,
    title: "Buy As-Is",
    body: "No repairs, no cleaning, no staging. We purchase your home in its current condition.",
  },
];

const serviceAreas = [
  "Killeen",
  "Temple",
  "Belton",
  "Waco",
  "Copperas Cove",
  "Harker Heights",
  "Nolanville",
  "Salado",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold">About Sell to Josh</h1>
          <p className="mt-4 text-lg text-white/90">
            Local Central Texas cash home buyer — making it simple to sell your
            house fast, on your terms.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900">
            Meet Josh Isbell
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Josh Isbell is a licensed Texas real estate broker and experienced
            property investor based in Central Texas. Through TrippCo Holdings
            and Red Belly Holdings, he helps homeowners sell their houses
            quickly for cash — without the hassle of repairs, showings, or agent
            commissions.
          </p>
          <p className="mt-3 text-gray-700 leading-relaxed">
            With deep roots in Bell County and the surrounding communities, Josh
            understands the local market and is committed to offering fair,
            honest deals to every homeowner he works with.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            What We Stand For
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <v.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{v.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="flex items-center justify-center gap-2 text-blue-700 mb-4">
            <MapPin className="h-6 w-6" aria-hidden="true" />
            <h2 className="text-2xl font-bold text-gray-900">
              Areas We Serve
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-800"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold">Ready to Sell Your House?</h2>
          <p className="mt-2 text-white/90">
            Get a fair cash offer with no obligation.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#lead-form"
              className="rounded-lg bg-white px-6 py-2.5 font-semibold text-blue-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              Get My Cash Offer
            </Link>
            <a
              href="tel:+1"
              className="flex items-center gap-2 text-white/90 hover:text-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
