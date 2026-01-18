import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';
import { serviceAreas as staticServiceAreas } from '@/data/areas';
import { getAllServiceAreas, getPageBySlug, getSiteSettings } from '../../../sanity/lib/fetch';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageBySlug('areas');

  return {
    title: pageData?.metaTitle || 'Areas We Serve | Cash Home Buyers in Central Texas',
    description: pageData?.metaDescription || 'We buy houses for cash in Killeen, Temple, Harker Heights, Belton, Copperas Cove, Waco, and surrounding Central Texas communities. Get a fair cash offer today.',
    openGraph: {
      title: pageData?.metaTitle || 'Areas We Serve | Cash Home Buyers in Central Texas',
      description: pageData?.metaDescription || 'We buy houses for cash in Killeen, Temple, Harker Heights, Belton, Copperas Cove, Waco, and surrounding areas.',
    },
  };
}

export default async function AreasPage() {
  const [sanityAreas, settings] = await Promise.all([
    getAllServiceAreas(),
    getSiteSettings(),
  ]);

  // Use Sanity service areas or fall back to static
  const serviceAreas = sanityAreas.length > 0
    ? sanityAreas.map(a => ({
        slug: a.slug,
        city: a.city,
        state: a.state,
        headline: a.headline,
        description: a.description,
        scenarios: a.scenarios || [],
      }))
    : staticServiceAreas;

  const phone = settings?.phone || siteConfig.phone;
  const phoneTel = settings?.phone
    ? `tel:+1${settings.phone.replace(/\D/g, '')}`
    : siteConfig.phoneTel;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white py-16 md:py-20">
        <div className="container-custom mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            We Buy Houses Across Central Texas
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Serving homeowners in Killeen, Temple, Harker Heights, Belton, Copperas Cove, Waco, and surrounding communities with fair cash offers.
          </p>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Central Texas Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We know these communities because we live here. Get a cash offer for your home today.
            </p>
          </div>

          <div className="space-y-16">
            {serviceAreas.map((area) => (
              <article
                key={area.slug}
                id={area.slug}
                className="scroll-mt-24 bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="bg-navy text-white p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    {area.headline}
                  </h2>
                  <p className="text-gray-300">
                    {area.city}, {area.state}
                  </p>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-lg text-gray-600 mb-6">
                    {area.description}
                  </p>

                  <h3 className="font-bold text-navy mb-4">
                    Common Situations We Help With in {area.city}:
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-3 mb-8">
                    {area.scenarios.map((scenario, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{scenario}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="btn-primary text-center">
                      Get Cash Offer for {area.city} Property
                    </Link>
                    <a href={phoneTel} className="btn-secondary text-center">
                      Call {phone}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Why Local Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              When you sell to a local buyer, you get someone who understands your community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🏘️</div>
              <h3 className="text-xl font-bold text-navy mb-2">We Know the Area</h3>
              <p className="text-gray-600">
                From Fort Cavazos to downtown Waco, we understand Central Texas neighborhoods, values, and market conditions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold text-navy mb-2">Quick Response</h3>
              <p className="text-gray-600">
                We can visit your property fast because we&apos;re local. No waiting for out-of-state investors to coordinate.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-navy mb-2">Face-to-Face</h3>
              <p className="text-gray-600">
                Meet in person. Look me in the eye. Selling your home is a big decision — you deserve to know who you&apos;re working with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Areas */}
      <section className="section-padding">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Don&apos;t See Your City?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            We serve many communities throughout Central Texas. If you&apos;re in Bell, Coryell, McLennan, or surrounding counties, reach out — we may be able to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Contact Us About Your Property
            </Link>
            <a href={phoneTel} className="btn-secondary">
              Call {phone}
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-orange to-coral text-navy">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Sell Your Central Texas Home?
          </h2>
          <p className="text-xl mb-8 text-navy/80">
            Get your free, no-obligation cash offer today. We buy houses in any condition.
          </p>
          <Link href="/contact" className="bg-navy hover:bg-navy-dark text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg inline-block">
            Get My Cash Offer
          </Link>
        </div>
      </section>
    </>
  );
}
