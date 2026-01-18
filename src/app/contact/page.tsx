import { Metadata } from 'next';
import LeadForm from '@/components/LeadForm';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Get Your Free Cash Offer | Sell Your House Fast | Sell to Josh',
  description: 'Request your free, no-obligation cash offer for your Central Texas home. Fill out our simple form or call (254) 498-6025. We buy houses in Killeen, Temple, Harker Heights & more. We respond within 24 hours.',
  openGraph: {
    title: 'Get Your Free Cash Offer | Sell Your House Fast | Sell to Josh',
    description: 'Request your free, no-obligation cash offer for your Central Texas home. We buy houses in Killeen, Temple, Harker Heights & more.',
  },
  alternates: {
    canonical: `https://${siteConfig.domain}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white py-16 md:py-20">
        <div className="container-custom mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get Your Free Cash Offer
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Fill out the form below to request your no-obligation cash offer. We&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-navy mb-6">
                Tell Us About Your Property
              </h2>
              <LeadForm variant="full" />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">
                Prefer to Talk?
              </h2>
              <p className="text-gray-600 mb-8">
                I&apos;m happy to chat about your situation. Call or text anytime — I respond quickly.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <a
                  href={siteConfig.phoneTel}
                  className="flex items-center gap-4 p-6 bg-gray-light rounded-xl hover:bg-gray-medium transition-colors"
                >
                  <div className="w-14 h-14 bg-orange text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-navy">Call or Text</p>
                    <p className="text-xl font-semibold text-orange">{siteConfig.phoneFormatted}</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 p-6 bg-gray-light rounded-xl hover:bg-gray-medium transition-colors"
                >
                  <div className="w-14 h-14 bg-navy text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-navy">Email</p>
                    <p className="text-lg text-gray-600">{siteConfig.email}</p>
                  </div>
                </a>
              </div>

              {/* What to Expect */}
              <div className="mt-10 p-6 bg-gray-light rounded-xl">
                <h3 className="font-bold text-navy mb-4">What Happens Next?</h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-orange text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                    <span className="text-gray-700">We review your property information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-orange text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                    <span className="text-gray-700">We contact you within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-orange text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                    <span className="text-gray-700">We schedule a quick visit or virtual walkthrough</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-orange text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                    <span className="text-gray-700">You receive your no-obligation cash offer</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-2xl font-bold text-navy mb-6">
            Serving Central Texas
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {siteConfig.serviceAreas.map((city) => (
              <span key={city} className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm">
                {city}, TX
              </span>
            ))}
          </div>
          <p className="text-gray-600 mt-6">
            And surrounding communities throughout Bell, Coryell, and McLennan counties.
          </p>
        </div>
      </section>
    </>
  );
}
