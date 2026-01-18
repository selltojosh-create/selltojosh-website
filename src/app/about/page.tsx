import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'About Josh | Local Cash Home Buyer Near Fort Hood TX | Sell to Josh',
  description: 'Meet Josh, your local Central Texas cash home buyer near Fort Hood (formerly Fort Cavazos). Buying homes since 2009. Honest, fair cash offers for houses in any condition. No pressure, no games.',
  openGraph: {
    title: 'About Josh | Local Cash Home Buyer Near Fort Hood TX | Sell to Josh',
    description: 'Meet Josh, your local Central Texas cash home buyer near Fort Hood. Buying homes since 2009. Honest, fair cash offers for houses in any condition.',
  },
  alternates: {
    canonical: `https://${siteConfig.domain}/about`,
  },
};

const values = [
  {
    title: "Honesty",
    description: "I tell you exactly what I can offer and why. No hidden fees, no last-minute changes to the deal."
  },
  {
    title: "Fairness",
    description: "I make offers based on real market values. You might not get top retail price, but you'll get a fair price for the convenience."
  },
  {
    title: "Respect",
    description: "Selling a home is personal. I treat every homeowner with dignity, no matter the situation."
  },
  {
    title: "Simplicity",
    description: "I handle the complicated stuff — paperwork, title, closing — so you don't have to stress."
  }
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white py-16 md:py-20">
        <div className="container-custom mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Hi, I&apos;m Josh
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                I&apos;m a local Central Texas home buyer. I help homeowners like you sell their properties quickly, fairly, and without the stress of traditional listings.
              </p>
              <p className="text-gray-400">
                Whether you&apos;re facing foreclosure, dealing with an inherited property, or just need to sell fast, I&apos;m here to help you find a simple solution.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden relative">
                <Image
                  src={siteConfig.ownerImage}
                  alt="Josh - Founder of Sell to Josh"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <p className="text-lg font-semibold">Josh</p>
              <p className="text-gray-300">Founder, {siteConfig.name}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 text-center">
              Why I Do This
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                I started buying houses in Central Texas because I saw too many homeowners struggling with situations where a traditional sale just didn&apos;t make sense. Maybe the house needed too many repairs to list. Maybe the timing was urgent. Maybe dealing with agents and showings was just too overwhelming.
              </p>
              <p>
                Having lived in the Central Texas area for years, I understand this community. I know the neighborhoods near Fort Hood (formerly Fort Cavazos), I know the challenges local homeowners face — whether it&apos;s a military family with sudden PCS orders, someone dealing with an inherited property, or a landlord tired of managing a rental.
              </p>
              <p>
                My goal is simple: provide an honest, straightforward alternative to selling your home. No pressure. No games. Just a fair offer and a process that works on your timeline.
              </p>
              <p>
                When you work with me, you&apos;re working directly with the buyer — not a call center, not a chain of middlemen. I answer my own phone. I visit properties myself. I make decisions quickly because I don&apos;t need corporate approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              How I Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These aren&apos;t just words — they&apos;re how I run my business every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-navy mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Focus */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Proudly Serving Central Texas
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                I focus on Central Texas because this is my home. I buy houses in:
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {siteConfig.serviceAreas.map((city) => (
                  <li key={city} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{city}, TX</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600">
                And the surrounding communities. If you&apos;re nearby, reach out — I&apos;d be happy to talk.
              </p>
            </div>
            <div className="bg-gray-light rounded-2xl p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🏠</div>
                <p className="text-2xl font-bold text-navy mb-2">Local Buyer</p>
                <p className="text-gray-600">
                  I live and work in Central Texas. When you sell to me, you&apos;re working with a neighbor who understands this area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            You Can Trust the Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-bold mb-2">Direct Communication</h3>
              <p className="text-gray-300">You talk to me directly — not a call center or sales team.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">📋</div>
              <h3 className="font-bold mb-2">Clear Contracts</h3>
              <p className="text-gray-300">Simple, straightforward paperwork with no hidden clauses.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="font-bold mb-2">Reputable Title Companies</h3>
              <p className="text-gray-300">We close through established, local title companies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-orange to-coral text-navy">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s Talk About Your Property
          </h2>
          <p className="text-xl mb-8 text-navy/80">
            No pressure, no obligation. Just an honest conversation about your options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-navy hover:bg-navy-dark text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg">
              Get My Cash Offer
            </Link>
            <a
              href={siteConfig.phoneTel}
              className="bg-white hover:bg-gray-100 text-navy font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
