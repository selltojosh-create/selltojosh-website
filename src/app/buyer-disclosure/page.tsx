import { Metadata } from 'next';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Buyer Disclosure',
  description: 'Buyer disclosure information for Sell to Josh.',
  alternates: {
    canonical: `https://${siteConfig.domain}/buyer-disclosure`,
  },
};

export default function BuyerDisclosurePage() {
  return (
    <section className="section-padding">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-8">Buyer Disclosure</h1>
          <p className="text-gray-600 mb-6">
            This page is being built. For questions, please call{' '}
            <a href={siteConfig.phoneTel} className="text-navy font-semibold underline hover:text-navy-dark">
              {siteConfig.phoneFormatted}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
