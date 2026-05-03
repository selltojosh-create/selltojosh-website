import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';
import { serviceAreas } from '@/data/areas';
import { situations, situationData } from '@/data/situations';

export const metadata: Metadata = {
  title: 'Sell Your House Fast in Any Situation',
  description: 'Facing foreclosure, inherited property, PCS orders, or divorce? We buy houses for cash in Central Texas. No repairs, no fees.',
  keywords: ['sell house fast Central Texas', 'foreclosure help Killeen', 'inherited property sale', 'military PCS home sale', 'divorce house sale Texas'],
  openGraph: {
    title: 'Sell Your House Fast in Any Situation | Sell to Josh',
    description: 'Facing foreclosure, inherited property, PCS orders, or divorce? We buy houses for cash in Central Texas. No repairs, no fees.',
    url: `https://${siteConfig.domain}/situations`,
    type: 'website',
  },
  alternates: {
    canonical: `https://${siteConfig.domain}/situations`,
  },
};

export default async function SituationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white section-padding">
        <div className="container-custom mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Selling Your Home in a Difficult Situation?
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Life happens. Whether you&apos;re facing foreclosure, handling an inherited property, dealing with PCS orders, or going through a divorce, we can help you sell your Central Texas home quickly and fairly.
          </p>

          {/* Quick Link Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {situations.map((situation) => (
              <Link
                key={situation.slug}
                href={`/situations/${situation.slug}`}
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full font-medium transition-colors"
              >
                {situation.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Situation Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            We Help Central Texas Homeowners With
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Every situation is different. We provide fair cash offers and a simple, respectful process no matter what you&apos;re going through.
          </p>

          <div className="space-y-16">
            {situations.map((situation) => (
              <article key={situation.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className="bg-navy p-6">
                  <h3 className="text-2xl font-bold text-white">{situation.title}</h3>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-gray-600 text-lg mb-6">{situation.description}</p>

                  <h4 className="font-bold text-navy mb-4">Common situations:</h4>
                  <ul className="grid md:grid-cols-2 gap-3 mb-8">
                    {situationData[situation.slug]?.scenarios.slice(0, 6).map((scenario, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{scenario}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href={`/situations/${situation.slug}`} className="btn-primary text-center">
                      Learn More
                    </Link>
                    <Link href="/contact" className="btn-secondary text-center">
                      Get Your Cash Offer
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why a Cash Sale May Help */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Why a Cash Sale May Help Your Situation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              When time, certainty, and simplicity matter most, a cash sale delivers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-navy mb-2">Speed</h3>
              <p className="text-gray-600 text-sm">Close in as few as 7 days. When your situation is time-sensitive, a cash sale gives you certainty.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-navy mb-2">Simplicity</h3>
              <p className="text-gray-600 text-sm">No repairs, no showings, no staging. We buy your home as-is and handle the paperwork.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-navy mb-2">Certainty</h3>
              <p className="text-gray-600 text-sm">No financing contingencies, no deals falling through. A cash offer means far less uncertainty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Served */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Serving Central Texas Homeowners
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            We help homeowners across the Fort Hood (formerly Fort Cavazos) area and throughout Central Texas.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {area.city}, TX
              </Link>
            ))}
          </div>

          <Link href="/areas" className="btn-primary">
            View All Service Areas
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-orange to-coral text-navy">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-xl mb-8 text-navy">
            Every situation is different. Reach out and we&apos;ll talk through your options — no pressure, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-navy hover:bg-navy-dark text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg">
              Get My Cash Offer
            </Link>
            <a
              href={siteConfig.phoneTel}
              className="bg-white hover:bg-gray-100 text-navy font-bold py-3 px-8 rounded-lg transition-colors text-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
