import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'We received your information and will be in touch shortly.',
};

export default function ThankYouPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white py-16 md:py-20">
        <div className="container-custom mx-auto px-4 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
            <svg
              className="h-8 w-8 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Thank You!</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We&apos;ve received your information and will contact you within 24 hours with your cash offer.
          </p>
        </div>
      </section>

      {/* Next Steps */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-navy mb-6 text-center">What Happens Next</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange text-navy rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-navy">We Review Your Property</h3>
                  <p className="text-gray-600 mt-1">Our team looks at your property details and local market data.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange text-navy rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-navy">We Call You Within 24 Hours</h3>
                  <p className="text-gray-600 mt-1">A team member will reach out to discuss your situation and answer any questions.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange text-navy rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-navy">You Get a Fair Cash Offer</h3>
                  <p className="text-gray-600 mt-1">No obligation. No pressure. Just a straightforward offer for your home.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom mx-auto text-center">
          <p className="text-lg text-gray-600 mb-4">
            Need to reach us sooner? Call us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteConfig.phoneTel}
              className="btn-primary flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {siteConfig.phone}
            </a>
            <Link href="/" className="btn-secondary">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
