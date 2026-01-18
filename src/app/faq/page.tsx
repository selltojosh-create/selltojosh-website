import { Metadata } from 'next';
import Link from 'next/link';
import FAQAccordion from '@/components/FAQAccordion';
import { faqs } from '@/data/faqs';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'FAQ | Frequently Asked Questions About Selling Your House for Cash',
  description: 'Get answers to common questions about selling your Central Texas home for cash. Learn about our process, fees, timeline, and more.',
  openGraph: {
    title: 'FAQ | Frequently Asked Questions About Selling Your House for Cash',
    description: 'Get answers to common questions about selling your home for cash.',
  },
};

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white py-16 md:py-20">
        <div className="container-custom mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions about selling your house for cash? Find answers below, or contact us directly.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            I&apos;m happy to answer any questions you have about your specific situation. There&apos;s no obligation — just honest answers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Contact Me
            </Link>
            <a href={siteConfig.phoneTel} className="btn-secondary">
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-orange to-coral text-navy">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Your Cash Offer?
          </h2>
          <p className="text-xl mb-8 text-navy/80">
            No obligation. No pressure. Just a fair offer for your Central Texas home.
          </p>
          <Link href="/contact" className="bg-navy hover:bg-navy-dark text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg inline-block">
            Get My Cash Offer
          </Link>
        </div>
      </section>
    </>
  );
}
